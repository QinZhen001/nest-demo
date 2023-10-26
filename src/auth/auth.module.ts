//  认证相关
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthController } from './auth.controller';

// APP_GUARD是一个应用守卫相关的常量，用于配置全局守卫
// 守卫（Guard）是NestJS中一种用于权限控制的中间件。
// 如果需要在单个路由上使用守卫，可以使用UseGuards()装饰器将守卫应用到特定的控制器或路由处理程序上。

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [
    AuthService,
    {
      // 变成全局的守卫了
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
