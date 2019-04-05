import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'db4free.net',
			port: 3306,
			username: 'zzolcsak',
			password: 'password',
			database: 'hello_zzolcsak',
			entities: ['src/**/*.entity{.ts,.js}'],
			synchronize: true,
			logging: true,
			connectTimeout: 30000,
			acquireTimeout: 30000,
			insecureAuth: true,
		}),
		PersonModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
