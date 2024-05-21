import express from 'express';
import * as bodyParser from 'body-parser';
import HttpException from './app/models/http-exception.model';
import { getAllProducts, getProduct } from './app/services/product.service';
const amqp = require('amqplib');

const app = express();
let order, channel, connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/product', (req: express.Request, res: express.Response) => {
  res.json({ status: 'Product service is running on /api/product' });
});

app.use(
  (
    err: Error | HttpException,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // @ts-ignore
    if (err && err.name === 'UnauthorizedError') {
      return res.status(401).json({
        status: 'error',
        message: 'missing authorization credentials',
      });
      // @ts-ignore
    } else if (err && err.errorCode) {
      // @ts-ignore
      res.status(err.errorCode).json(err.message);
    } else if (err) {
      res.status(501).json(err.message);
    }
  }
);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

async function connectToRabbitMQ() {
  const amqpServer = 'amqp://guest:guest@localhost:5672';
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue('product-service-queue');
  let result: any;

  channel.consume('product-service-queue', async (data) => {
    console.log('Consumed from core-product-service-queue');
    channel.ack(data);
    let value = JSON.parse(data.content);

    switch (value[0]) {
      case 'get-single':
        result = await getProduct(Number.parseInt(value[1]));
        break;
      case 'get-all':
        result = await getAllProducts(Number.parseInt(value[1]));
        break;
    }

    channel.sendToQueue(
      'core-product-service-queue',
      Buffer.from(JSON.stringify(result))
    );
  });
}
connectToRabbitMQ();
