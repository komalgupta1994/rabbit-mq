import { Body, Controller, Get, Post,Patch,Delete,Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('order/create')
  async placeOrder(@Body() order: any) {
    return await this.appService.placeOrder(order);
  }

  @Get('/oder/cancel')
  cancelOrder() {

  }

}
