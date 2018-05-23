import { IsString } from 'class-validator';
export class UserDto {
  @IsString() readonly name: string;
  @IsString() readonly phoneNumber: string;
}
