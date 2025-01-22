import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const getCurrentSessionByContext = (context: ExecutionContext) =>
  context.switchToHttp().getRequest().user;

export const CurrentSession = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentSessionByContext(context),
);
