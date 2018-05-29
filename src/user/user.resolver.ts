import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDto } from './user.dto';
@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('getAllUsers')
  async getUser(obj, args, context, info) {
    const response = await this.userService.findAll();
    return response;
  }

  @Query('getUserById')
  async getUserById(obj, args, context, info) {
    const { id } = args;
    const response = await this.userService.findOneById(id);
    return response;
  }

  @Mutation('createUser')
  async createUser(_, { input }) {
    const user = { name: input.name, phoneNumber: input.phoneNumber };
    return await this.userService.createUser(user);
  }

  @Mutation('updateUser')
  async updateUser(_, { input }) {
    const user = {
      id: input.id,
      name: input.name,
      phoneNumber: input.phoneNumber,
    };
    return await this.userService.createUser(user);
  }

  @Mutation('deleteUser')
  async deleteUser(_, { input }) {
    return await this.userService.deleteUser(input.id);
  }
}
