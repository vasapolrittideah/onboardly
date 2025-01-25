import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentContext = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    context.switchToHttp().getRequest().user,
);
