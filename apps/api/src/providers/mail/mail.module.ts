import { resolve } from 'path';

import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('email.transport.host'),
          port: configService.get<number>('email.transport.port'),
          secure: configService.get<boolean>('email.transport.secure'),
          auth: {
            user: configService.get<string>('email.transport.auth.user'),
            pass: configService.get<string>('email.transport.auth.pass'),
          },
        },
        template: {
          dir: resolve(__dirname, '../../templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
