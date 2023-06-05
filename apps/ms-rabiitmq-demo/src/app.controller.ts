import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Hello World!'
  }

  @Post('order/create')
  async placeOrder(@Body() order: any) {
    console.log('in controller---', order);
    return await this.appService.placeOrder(order);
  }

  @Post('payment/create')
  async makePayment(@Body() amount: number) {
    return await this.appService.payment(amount);
  }

  // @Get('/oder/cancel')
  // cancelOrder() {

  // }

}
