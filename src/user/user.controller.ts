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

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: UserDto) {
    return this.userService.createUser(createUserDto);
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
