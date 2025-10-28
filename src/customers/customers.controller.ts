import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: any) {
    console.log('Received order_created event:', data);
    // Here you would typically save the order data to the customer's database
  }

  @Post()
  create(@Body() customer: Customer): Promise<Customer> {
    return this.customersService.create(customer);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customer: Customer): Promise<void> {
    return this.customersService.update(+id, customer);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.customersService.remove(+id);
  }
}
