import { Query, Resolver, ResolveProperty } from '@nestjs/graphql';
import { UserService } from './user.service';
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
}
