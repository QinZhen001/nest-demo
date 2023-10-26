# 基础

在 Nest 中，每个请求都由主线程处理。因此，使用单例实例对我们的应用程序来说是完全安全的。



## 数据链路流程图

[https://juejin.cn/post/7002229947414609933](https://juejin.cn/post/7002229947414609933)



## 中间件和拦截器

中间件（Middleware）：

中间件是在处理 HTTP 请求和响应之间执行的功能组件。它可以在请求被路由处理之前或之后，对请求进行一些处理。中间件可以用于实现各种功能，例如：身份验证、日志记录、错误处理等。中间件可以对请求和响应进行修改或者添加一些数据到请求对象中。在 Nest 中，中间件可以通过函数或装饰器的方式来定义。

拦截器（Interceptor）：

拦截器是在控制器方法之前或之后执行的功能组件。它可以在请求到达控制器之前或者在离开控制器之后，对请求进行一些处理。拦截器可以用于实现与请求无关的功能，例如：日志记录、性能监控等。拦截器可以对控制器方法及其参数进行修改或者拦截异常并进行处理。在 Nest 中，拦截器是用类来定义的，并且可以通过装饰器的方式将其应用到控制器或者控制器的方法上。

总结： 中间件和拦截器都是 Nest 中用于处理请求和响应的功能组件，但是它们的执行时机和功能略有不同。中间件是在请求的不同阶段之间执行，可以对请求和响应进行修改，用于实现与请求相关的功能。拦截器是在控制器方法前后执行，用于实现与请求无关的功能。





## scope

[注入作用域](https://docs.nestjs.cn/10/fundamentals?id=%e6%b3%a8%e5%85%a5%e4%bd%9c%e7%94%a8%e5%9f%9f)

|             |                                                              |
| :---------- | ------------------------------------------------------------ |
| `DEFAULT`   | 每个提供者可以跨多个类共享。提供者生命周期严格绑定到应用程序生命周期。一旦应用程序启动，所有提供程序都已实例化。默认情况下使用单例范围。 |
| `REQUEST`   | 在请求处理完成后，将为每个传入请求和垃圾收集专门创建提供者的新实例 |
| `TRANSIENT` | 临时提供者不能在提供者之间共享。每当其他提供者向 `Nest` 容器请求特定的临时提供者时，该容器将创建一个新的专用实例 |

举个例子：

通过指定[瞬态作用域](https://docs.nestjs.com/fundamentals/injection-scopes)来保证在每个模块内都有独一无二的 `MyLogger` 的实例

```tsx
import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends ConsoleLogger {
  customLog() {
    this.log('Please feed the cat!');
  }
}
```





# nestjs/core



## APP_GUARD

守卫是NestJS中的一个重要概念，用于保护路由免受未经身份验证或未经授权的访问。

APP_GUARD装饰器用于将自定义的守卫应用于指定的路由或请求。

**APP_GUARD 是全局守卫装饰器，它会应用于所有的路由和控制器**





## APP_INTERCEPTOR

`nest APP_INTERCEPTOR` 是一个特殊的拦截器，用于在 Nest 应用程序的控制器和处理程序之间的请求处理过程中进行中间操作。它允许开发人员在请求到达控制器之前或离开控制器之后，对请求和响应进行全局的修改或处理。



## APP_FILTER

Nest `APP_FILTER` 是一个中间件过滤器，用于在Nest应用程序中过滤请求和响应。它可以用于对请求进行预处理，修改请求参数或头部，进行身份验证，以及对响应进行后处理等操作。







# CLI



## 生成新资源

[https://docs.nestjs.cn/8/recipes?id=%e7%94%9f%e6%88%90%e6%96%b0%e8%b5%84%e6%ba%90](https://docs.nestjs.cn/8/recipes?id=%e7%94%9f%e6%88%90%e6%96%b0%e8%b5%84%e6%ba%90)

`nest g resource`命令不仅仅生成所有Nestjs构件模块(模块，服务，控制器类)也生成实体类，`DTO`类和测试(.spec)文件。



# 补充





## nestjs/common和nestjs/core 

nestjs/common和nestjs/core是Nest.js框架中的两个主要模块。

* nestjs/common模块包含了一些常用的装饰器、异常类、管道和拦截器等，这些功能通常在应用程序的不同部分中被广泛使用，例如控制器、服务和中间件等。
* nestjs/core模块包含了一些核心的类和接口，例如应用程序类、模块类、控制器类和提供程序类等。它提供了构建Nest.js应用程序所需的基本功能。

简而言之，nestjs/common模块提供了一些通用的功能和工具，而nestjs/core模块提供了构建Nest.js应用程序所需的核心类和接口。它们一起协作，使得开发者可以更轻松地构建和组织Nest.js应用程序。





## ExecutionContext

> 来自 nestjs/common

ExecutionContext是一个包含有关当前请求和响应的上下文信息的对象。它提供了访问请求，响应和其他相关信息的方法和属性。

ExecutionContext的使用有以下几个用途：

1. 访问请求和响应数据：可以使用ExecutionContext的getRequest()和getResponse()方法来访问当前请求和响应对象。这对于在处理请求时获取请求参数、headers和响应数据等非常有用。
2. 控制器方法参数装饰器：可以使用ExecutionContext来装饰控制器方法的参数，以获取请求和响应的数据。例如，使用@Req()装饰器可以将请求对象作为参数传递给控制器方法。
3. 请求和响应拦截器：可以在请求和响应拦截器中使用ExecutionContext来访问请求和响应数据，并对它们进行处理或修改。例如，在请求拦截器中可以对请求中的参数进行验证或修改，而在响应拦截器中可以修改响应数据或添加自定义的headers。

总的来说，ExecutionContext提供了访问请求和响应数据的方法，使得在处理请求时可以轻松地获取、操作和修改这些数据。





## 高速缓存

[https://docs.nestjs.cn/8/techniques?id=%e9%ab%98%e9%80%9f%e7%bc%93%e5%ad%98%ef%bc%88caching%ef%bc%89](https://docs.nestjs.cn/8/techniques?id=%e9%ab%98%e9%80%9f%e7%bc%93%e5%ad%98%ef%bc%88caching%ef%bc%89)

- If using `cache-manager` v4, provide ttl in seconds
- If using `cache-manager` v5, provide ttl in milliseconds







## 深入了解Nest的模块Module

[https://juejin.cn/post/6925605351475806216](https://juejin.cn/post/6925605351475806216)

- imports ：导入其他模块中导出的Providers，以实现共享
- providers ：模块中所有用到的功能类，模块内共享实用；
- controllers：控制器
- exports：导出其他模块需要共享的Providers

通过以上四种类型的设定，Nest的IoC才能够准确识别需要组装（注入和被注入）各种依赖关系，同时实现一定程度的共享。



## Nest debug in vscode 

[https://dev.to/gentax/nestjs-right-settings-for-debugging-kl0](https://dev.to/gentax/nestjs-right-settings-for-debugging-kl0)

Find out ***Auto Attach Filter\*** section and select ***Always\*** from the dropdown.

create a `launch.json`

```json
{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Debug Nest Framework",
        "runtimeExecutable": "npm",
        "runtimeArgs": [
          "run",
          "start:debug",
          "--",
          "--inspect-brk"
        ],
        "autoAttachChildProcesses": true,
        "restart": true,
        "sourceMaps": true,
        "stopOnEntry": false,
        "console": "integratedTerminal",
      }
    ]
}
```





# 文档

https://docs.nestjs.cn/10/introduction

