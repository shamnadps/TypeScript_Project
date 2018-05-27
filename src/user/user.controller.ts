import {
  Controller,
  Get,
  Post,
  Put,
  Req,
  Param,
  Body,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { ValidationPipe } from 'validations/validation.pipe';
import { ValidatorOptions } from 'class-validator';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `this method returns a user with id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id) {
    throw new ForbiddenException();
  }
}
