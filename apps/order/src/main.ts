import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.createMicroservice(OrderModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'orders_queue',
      queueOptions: {
        durable: false
      },
    }
  });
  app.listen().then(() => console.log('Order Microservice is listening'))
}
bootstrap();
