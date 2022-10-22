import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginsService } from './logins.service';
import { CreateLoginDto } from './dto/create-login.dto';

@Controller('logins')
export class LoginsController {
  constructor(private readonly loginsService: LoginsService) { }

  @Post()
  login(@Body() loginDto: CreateLoginDto) {
    return this.loginsService.login(loginDto);
  }
}
