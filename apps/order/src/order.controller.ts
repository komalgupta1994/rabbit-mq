import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @MessagePattern('cancel-order')
  async handleOrderCancelledEvent(data: Record<string, unknown>) {

  }

  @EventPattern('create-order')
  async handleOrderCreatedEvent(data: Record<string, unknown>) {
    console.log('Order created succesfully');
    console.log(data);

  }

}
