import { Controller, Post, Body, Req } from '@nestjs/common';
import { LoginDto } from './auth.dto';
import { BasicController } from '../basic.controller';
import { AuthService } from './auth.service';
const md5 = require('md5');

@Controller('auth')
export class AuthController extends BasicController {
    constructor(
		private readonly authService: AuthService,
    ) {
        super();
    }

  @Post('login')
    async login(@Body() loginDto: LoginDto, @Req() request: any) {
        const user = await this.authService.getUser(loginDto.username);
        const result = {
            success: false,
            message: '',
        }
        if (!user) {
            result.message = '无法识别的用户名';
        }
        if (user.isDelete > 0) {
            result.message = '该用户已被删除';
        }
        if (md5(loginDto.password) === user.password) {
            result.success = true;
            result.message = '登录成功';
        }else{
            result.message = '密码输入错误';
        }
        this.authService.logLogin(user.username, result.message, this.getClientIp(request));
        if(result.success){
            return this.success({
                user: user.username,
                token: this.authService.makeToken(user),
            });
        }else{
            return this.error(1, result.message);
        }
        
    }
}
