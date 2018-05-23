import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { JwtPayload } from 'auth/jwt.payload';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  private readonly users: UserDto[] = [];
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
}
