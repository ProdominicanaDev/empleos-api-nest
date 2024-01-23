import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: {

    origin: ['https://empleosadmin.prodominicana.gob.do','https://empleos.prodominicana.gob.do','http://localhost:3000'],
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',


  } });
  
  



  await app.listen(3001);
}
bootstrap();
