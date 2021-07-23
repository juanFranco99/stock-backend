<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Task

# CRUD REST API con Nest JS, Postgres y Typescript
- Este es un proyecto desafío para los pasantes universitarios.

## Software Requerido
- NodeJS
- Postgres

## CONFIGURACIONES

### CONFIGURAR EL PROYECTO
- Para instalar las dependencias correr el comando `npm i`

### CONFIGURAR EL SERVIDOR
- Crear una base de datos `scsp` enPostgres 

- Ir a src/app.module.ts y modificar de acuerdo a sus credenciales

```
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  <= (El usuario de tu base de datos)
      password: 'admin',  <= (La contraseña de tu base de datos)
      database: 'scsp'<= (El nombre de tu base de datos)
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
 ```

## INICIALIZACIONES

### COMPILAR Y CORRER EL PROYECTO
- Para correr el proyecto usar el comando `npm run start:dev`


### Acceso a las rutas y documentación.
 - Se puede acceder al `localhost:3000/docs`para tener acceso a las rutas del proyecto


# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
