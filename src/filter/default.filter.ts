import { Catch } from '@midwayjs/decorator';
import { Context } from '@midwayjs/web';

@Catch()
export class DefaultErrorFilter {
  async catch(err: any, ctx: Context) {
    return {
      status: err.status ?? 500,
      message: err.message ?? '内部异常',
    };
  }
}
