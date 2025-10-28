import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  async create(customer: Customer): Promise<Customer> {
    return this.customersRepository.save(customer);
  }

  async findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customersRepository.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  async update(id: number, customer: Customer): Promise<void> {
    await this.customersRepository.update(id, customer);
  }

  async remove(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
