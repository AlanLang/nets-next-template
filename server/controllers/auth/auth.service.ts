import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entitys/user.entity';
import { LogLogin } from '../../entitys/logLgoin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(LogLogin)
        private readonly logLoginRepository: Repository<LogLogin>,
    ) {}

    async getUser(username: string) {
        const userEntity = await this.userRepository.findOne({
            username,
        });
        
        return userEntity;
    }

    logLogin(username: string, result, ip = '') {
        const logLogin: LogLogin = {
            username,
            ip,
            position: '',
            createDate: new Date().getTime().toString(),
            result,
        };
        this.logLoginRepository.insert(logLogin);
    }

    makeToken(user: User) {
        return this.jwtService.sign({
            username: user.username,
            id: user.id,
        });
    }
}
