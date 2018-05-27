import { Injectable } from '@nestjs/common';
import { JwtPayload } from 'auth/jwt.payload';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(user: UserDto) {
    this.userRepository.save(user);
    return 'User Added';
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  findOneByToken(token: JwtPayload) {
    return true;
  }

  async findOneById(id: number) {
    return await this.userRepository.findOne(id);
  }
}
