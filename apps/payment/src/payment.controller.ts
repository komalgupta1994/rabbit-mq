import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  getHello(): string {
    return this.paymentService.getHello();
  }

  @EventPattern('make-payment')
  async handlePayment(amount: number) {
    console.log('Payment received successfully', amount);
  }
}
