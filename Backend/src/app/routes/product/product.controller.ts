import { json } from 'body-parser';
import { NextFunction, Request, Response, Router } from 'express';
const amqp = require('amqplib');

let product, channel, connection;

async function connectToRabbitMQ() {
  const amqpServer = 'amqp://guest:guest@localhost:5672';
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue('core-product-service-queue');
}
connectToRabbitMQ();

const router = Router();

router.get(
  '/products/:pagenumber',
  async (req: Request, res: Response, next: NextFunction) => {
    channel.sendToQueue(
      'product-service-queue',
      Buffer.from(JSON.stringify(['get-all', req.params.pagenumber]))
    );

    channel.consume('core-product-service-queue', (data) => {
      console.log(
        'Consumed from product-service-queue',
        Buffer.from(JSON.stringify(['all']))
      );
      product = JSON.parse(data.content);
      channel.ack(data);
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res.status(201).json({
      product,
    });
  }
);

router.get(
  '/product/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    channel.sendToQueue(
      'product-service-queue',
      Buffer.from(JSON.stringify(['get-single', req.params.id]))
    );

    channel.consume('core-product-service-queue', (data) => {
      console.log('Consumed from product-service-queue');
      product = JSON.parse(data.content);
      channel.ack(data);
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res.status(201).json({
      product,
    });
  }
);

export default router;
