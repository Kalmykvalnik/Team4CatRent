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
  (req: Request, res: Response, next: NextFunction) => {
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

    return res.status(201).json({
      product,
    });
  }
);

router.get(
  '/product/:id',
  (req: Request, res: Response, next: NextFunction) => {
    channel.sendToQueue(
      'product-service-queue',
      Buffer.from(JSON.stringify(['get-single', req.params.id]))
    );

    channel.consume('core-product-service-queue', (data) => {
      console.log('Consumed from product-service-queue');
      product = JSON.parse(data.content);
      channel.ack(data);
    });

    return res.status(201).json({
      product,
    });
  }
);

router.delete('/product/:id',(req:Request, res:Response,next:NextFunction)=>{
  try{
    channel.sendToQueue(
      'product-service-queue',
      Buffer.from(JSON.stringify(['delete-single', req.params.id]))
    );
  
    channel.consume('core-product-service-queue', (data) => {
      console.log('Consumed from product-service-queue');
      product = JSON.parse(data.content);
      channel.ack(data);
    });
  }catch(e){
    next(e);
  }

  return res.status(201).json({
    product,
  });
})

router.put('/product/:id',(req:Request, res:Response,next:NextFunction)=>{
  channel.sendToQueue(
    'product-service-queue',
    Buffer.from(JSON.stringify(['edit-single', req.params.id, req.body]))
  );
  
  channel.consume('core-product-service-queue', (data) => {
    console.log('Consumed from product-service-queue');
    product = JSON.parse(data.content);
    channel.ack(data);
  });

  return res.status(201).json({
    product,
  });
})

router.post('/product/:id',(req:Request, res:Response,next:NextFunction)=>{
  channel.sendToQueue(
    'product-service-queue',
    Buffer.from(JSON.stringify(['create-single', req.body]))
  );
  
  channel.consume('core-product-service-queue', (data) => {
    console.log('Consumed from product-service-queue');
    product = JSON.parse(data.content);
    channel.ack(data);
  });

  return res.status(201).json({
    product,
  });
})

export default router;
