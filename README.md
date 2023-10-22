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





# 补充



## APP_INTERCEPTOR

>  来自 @nestjs/core

`nest APP_INTERCEPTOR` 是一个特殊的拦截器，用于在 Nest 应用程序的控制器和处理程序之间的请求处理过程中进行中间操作。它允许开发人员在请求到达控制器之前或离开控制器之后，对请求和响应进行全局的修改或处理。



## APP_FILTER

> 来自 @nestjs/core

Nest `APP_FILTER` 是一个中间件过滤器，用于在Nest应用程序中过滤请求和响应。它可以用于对请求进行预处理，修改请求参数或头部，进行身份验证，以及对响应进行后处理等操作。





## nestjs/common和nestjs/core 

nestjs/common和nestjs/core是Nest.js框架中的两个主要模块。

* nestjs/common模块包含了一些常用的装饰器、异常类、管道和拦截器等，这些功能通常在应用程序的不同部分中被广泛使用，例如控制器、服务和中间件等。
* nestjs/core模块包含了一些核心的类和接口，例如应用程序类、模块类、控制器类和提供程序类等。它提供了构建Nest.js应用程序所需的基本功能。

简而言之，nestjs/common模块提供了一些通用的功能和工具，而nestjs/core模块提供了构建Nest.js应用程序所需的核心类和接口。它们一起协作，使得开发者可以更轻松地构建和组织Nest.js应用程序。





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



# 文档

https://docs.nestjs.cn/10/introduction

