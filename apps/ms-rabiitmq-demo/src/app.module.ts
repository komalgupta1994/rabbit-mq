import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register(
    [
      {
        name: 'ORDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5673'],
          queue: 'orders_queue',
          queueOptions: {
            durable: false
          }
        }
      },
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5673'],
          queue: 'payment_queue',
          queueOptions: {
            durable: false
          }
        }
      }
    ]
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
