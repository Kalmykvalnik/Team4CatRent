import express from 'express';
import * as bodyParser from 'body-parser';
import HttpException from './app/models/http-exception.model';
const amqp = require('amqplib');

const app = express();
let order, channel, connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/basket', (req: express.Request, res: express.Response) => {
  res.json({ status: 'Basket service is running on /api/basket' });
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
  await channel.assertQueue('basket-service-queue');

  channel.consume('basket-service-queue', (data) => {
    console.log('Consumed from basket-service-queue');
    order = JSON.parse(data.content);
    channel.ack(data);

    console.log(JSON.parse(data.content));

    channel.sendToQueue(
      'core-basket-service-queue',
      Buffer.from(JSON.stringify('Succ added to basket'))
    );

    console.log('Ok');
  });
}
connectToRabbitMQ();
