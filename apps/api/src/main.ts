import { ImATeapotException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { ORIGIN_NOT_ALLOWED } from './errors/errors.contants';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      cors: {
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        origin: (origin, callback) => {
          const whitelist = ['http://localhost:8000'];
          if (!origin || whitelist.includes(origin)) {
            return callback(null, true);
          } else {
            return callback(new ImATeapotException(ORIGIN_NOT_ALLOWED), false);
          }
        },
      },
    },
  );

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);

  app.use(cookieParser());
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT ?? 9000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
