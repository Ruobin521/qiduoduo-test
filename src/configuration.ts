import 'reflect-metadata';
import { App, Configuration } from '@midwayjs/decorator';
import * as validate from '@midwayjs/validate';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
import { join } from 'path';
import * as egg from '@midwayjs/web';
import * as orm from '@midwayjs/typeorm';
import { DefaultErrorFilter } from './filter/default.filter';
import * as jwt from '@midwayjs/jwt';
import * as passport from '@midwayjs/passport';

@Configuration({
  imports: [egg, validate, orm, jwt, passport],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {
    this.app.useFilter([DefaultErrorFilter]);
  }
}
