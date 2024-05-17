import { json } from 'body-parser';
import { NextFunction, Request, Response, Router } from 'express';
const amqp = require('amqplib');

let order, channel, connection;

async function connectToRabbitMQ() {
  const amqpServer = 'amqp://guest:guest@localhost:5672';
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue('core-product-service-queue');
}
connectToRabbitMQ();

const router = Router();

router.get('/products', (req: Request, res: Response, next: NextFunction) => {
  channel.sendToQueue(
    'product-service-queue',
    Buffer.from(JSON.stringify(['get-all']))
  );

  channel.consume('core-product-service-queue', (data) => {
    console.log(
      'Consumed from product-service-queue',
      Buffer.from(JSON.stringify(['all']))
    );
    order = JSON.parse(data.content);
    channel.ack(data);
  });

  return res.status(201).json({
    message: 'get all products',
    order,
  });
});

router.get(
  '/product/:id',
  (req: Request, res: Response, next: NextFunction) => {
    channel.sendToQueue(
      'product-service-queue',
      Buffer.from(JSON.stringify(['get-single', req.params.id]))
    );

    channel.consume('core-product-service-queue', (data) => {
      console.log('Consumed from product-service-queue');
      order = JSON.parse(data.content);
      channel.ack(data);
    });

    return res.status(201).json({
      message: `get product with id ${req.params.id}`,
      order,
    });
  }
);

export default router;
