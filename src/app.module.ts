import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './app/usuarios/usuarios.module';
import { EmpresasModule } from './app/empresas/empresas.module';
import { LoginsModule } from './app/logins/logins.module';

@Module({
  imports: [UsuariosModule, EmpresasModule, LoginsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
