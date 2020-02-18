import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { NestNextModule } from 'nest-next-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from '../../ormConfig';
import { AuthModule } from '../auth/auth.model';
const dev = process.env.NODE_ENV !== 'production';

@Module({
    imports: [
        AuthModule,
        NestNextModule.forRoot({ dev }),
        TypeOrmModule.forRoot(mysqlConfig)],
    controllers: [MainController],
    providers: [MainService],
})
export class MainModule {}
