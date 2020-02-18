import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entitys/user.entity';
import { LogLogin } from '../../entitys/logLgoin.entity';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });
@Module({
    imports: [
        passportModule,
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: '7d',
            },
        }),
        TypeOrmModule.forFeature([User, LogLogin]),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [passportModule],
})
export class AuthModule {}
