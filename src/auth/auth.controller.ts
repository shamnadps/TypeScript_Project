import { Controller, Body, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'user/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  findOne(@Body() user: UserDto) {
    const token = this.authService.createToken();
    return token;
  }
}
