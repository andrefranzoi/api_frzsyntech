import { IsNotEmpty, IsString } from "class-validator";

export class CreateLoginDto {
  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string
}
