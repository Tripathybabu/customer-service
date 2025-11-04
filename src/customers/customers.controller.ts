import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: any) {
    console.log('Received order_created event:', data);
    // Here you would typically save the order data to the customer's database
  }

  @Post()
  create(@Body() customer: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(customer as unknown as Customer);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() customer: Partial<Customer>): Promise<void> {
    return this.customersService.update(id, customer as Customer);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.customersService.remove(id);
  }
}
