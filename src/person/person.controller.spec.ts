import { Test } from '@nestjs/testing';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { Person } from './person.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('PersonController', () => {
    let personController: PersonController;
    let personService: PersonService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [PersonController],
            providers: [PersonService,
                {
                    provide: getRepositoryToken(Person),
                    useValue: {}
                }
            ],
        }).compile();

        personService = module.get<PersonService>(PersonService);
        personController = module.get<PersonController>(PersonController);
    });

    describe('findAll', () => {
        it('should return an array of people', async () => {
            let result = new Promise<Person[]>((resolve, reject) => resolve([{ id: 2, age: 1, name: "test name", birthday: new Date() } as Person]));
            jest.spyOn(personService, 'findAll').mockImplementation(async () => await result);
            expect(await personController.findAll()).toBe(await result);
        });
    });
});