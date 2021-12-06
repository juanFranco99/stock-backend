import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UserService } from "../user/user.service";
import { JWTPayload } from "./jwt.payload";
import { jwtConstants } from './jwt.constants';
import { Strategy } from "passport-local";
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usuarioService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: JWTPayload){
    const user = await this.usuarioService.getUserByLogin(payload.login);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  
}