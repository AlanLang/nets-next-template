import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mysqlConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '***',
    port: 3307,
    username: 'root',
    password: '***',
    database: '***',
    entities: ['server/entitys/**.entity{.ts,.js}'],
    synchronize: true,
};
