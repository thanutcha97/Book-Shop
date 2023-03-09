import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'
import { LoggerService } from './logger/logger.service'
import { configSwagger } from './swagger/config-swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService>(ConfigService)

  configSwagger(app)

  const port = configService.get('port')
  app.useLogger(app.get(LoggerService))
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )
  await app.listen(port)
}
bootstrap()
