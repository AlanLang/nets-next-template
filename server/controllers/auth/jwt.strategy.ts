import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',
        });
    }

    async validate(payload: JwtPayload): Promise<any> {
        const user = await this.authService.getUser(payload.username);
        if (!user) {
            throw new UnauthorizedException();
        }
        
        return {
            id: user.id,
            username: user.username,
        };
    }
}

interface JwtPayload {
  id: string;
  username: string;
}
