import { NestFactory } from '@nestjs/core';
import { MainModule } from './controllers/main/main.module';
async function bootstrap() {
    const app = await NestFactory.create(MainModule);
    await app.listen(8105);
}
bootstrap();
