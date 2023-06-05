import { NestFactory } from '@nestjs/core';
import { PaymentModule } from './payment.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(PaymentModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5673'],
      queue: 'payment_queue',
      queueOptions: {
        durable: false
      }
    }
  });
  app.listen().then(() => console.log('Payment microservice is listening'));
}
bootstrap();
