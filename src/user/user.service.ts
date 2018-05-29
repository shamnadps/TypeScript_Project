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

  async createUser(user: UserDto) {
    const response = await this.userRepository.save(user);
    return response;
  }

  async deleteUser(id: number) {
    await this.userRepository.delete(id);
    return id;
  }

  async updateUser(user: User) {
    const response = await this.userRepository.update(user.id, user);
    return response;
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
