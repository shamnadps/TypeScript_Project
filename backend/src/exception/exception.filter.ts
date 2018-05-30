import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Catch(HttpException)
export class AnyExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    response.status(exception.getStatus()).json({
      statusCode: exception.getStatus(),
      timeStamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}
