import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'user/user.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [UserModule],
})
export class AuthModule {}
