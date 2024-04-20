import { NextFunction, Request, Response, Router } from 'express';
const amqp = require('amqplib');

let order, channel, connection;

const router = Router();

async function connectToRabbitMQ() {
  const amqpServer = 'amqp://guest:guest@localhost:5672';
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue('core-basket-service-queue');
}
connectToRabbitMQ();

router.get('/basket', (req: Request, res: Response, next: NextFunction) => {
  //res.json('Basket');
  //const {currentUserId} = req.body;
  //const {products} =

  channel.sendToQueue(
    'basket-service-queue',
    Buffer.from(JSON.stringify(['Cat 1', 'Cat 2', 'Cat 3']))
  );

  channel.consume('core-basket-service-queue', (data) => {
    console.log('Consumed from basket-service-queue');
    order = JSON.parse(data.content);
    channel.ack(data);
  });

  return res.status(201).json({
    message: 'Item added succ.',
    order,
  });
});

router.post(
  '/basket',
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
