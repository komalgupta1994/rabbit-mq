import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('ORDER_SERVICE') private client: ClientProxy) {
    client.connect();
  }


  getHello(): string {
    return 'Hello World!';
  }

  async cancelOrder(orderId: string) {
    const message = await this.client.send({ cmd: 'greeting-' }, orderId);
    return message;
  }



  async placeOrder(order: any) {
    const message = await this.client.emit('create-order', order);
    return message;
  }
}
