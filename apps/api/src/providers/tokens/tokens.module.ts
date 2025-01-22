import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { TokensService } from './tokens.service';

@Module({
  imports: [JwtModule],
  providers: [TokensService],
  exports: [TokensService],
})
export class TokensModule {}
