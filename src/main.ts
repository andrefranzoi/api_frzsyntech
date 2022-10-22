import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

const fs_1 = require('fs')

const port = process.env.PORT || 8388
const apitip = process.env.APITIP || '1'
const pathkey = process.env.PATHKEY || '/etc/letsencrypt/live/apps.agiw.com.br/'
async function bootstrap() {
  //const app = await NestFactory.create(AppModule)
  if (apitip === '1') {
    const app = await NestFactory.create(AppModule)

    //app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }))
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        forbidUnknownValues: true,
      })
    )
    app.use(json({ limit: '50mb' }))
    app.use(urlencoded({ limit: '50mb', extended: true }))
    //app.setGlobalPrefix('api');
    app.enableCors()
    await app.listen(port)
    Logger.log(`Servidor rodando em http://localhost:${port}`, 'Bootstrap')
  } else if (apitip === '0') {
    try {
      const app = await NestFactory.create(AppModule, {
        httpsOptions: {
          key: fs_1.readFileSync(`${pathkey}/privkey.pem`),
          cert: fs_1.readFileSync(`${pathkey}/fullchain.pem`),
        },
      })

      //app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: false }))
      app.useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
          forbidNonWhitelisted: true,
          transform: true,
          forbidUnknownValues: true,
        })
      )
      //app.setGlobalPrefix('api');
      app.enableCors()
      await app.listen(port)
      Logger.log(`Servidor rodando em https://localhost:${port}`, 'Bootstrap')
    } catch (error) {

    }
  }
}
bootstrap()
