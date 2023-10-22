import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // 在这里处理自定义逻辑
    console.log('CustomExceptionFilter called');
    // 获取请求和响应对象
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    // 设置响应状态码和错误消息
    const status = exception.getStatus();
    const message = exception.message || 'Internal server error';

    // 发送响应
    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}
