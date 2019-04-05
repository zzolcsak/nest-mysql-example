import { Controller, Get, Param } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) { }

  @Get()
  findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id): Promise<Person> {
    return this.personService.find(+id);
  }
}