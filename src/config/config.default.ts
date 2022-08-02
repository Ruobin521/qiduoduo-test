import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
// import path = require('path');
import { UserEntity } from '../entity/user';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1659446241414_8502',
    egg: {
      port: 7001,
    },
    // security: {
    //   csrf: false,
    // },
    typeorm: {
      dataSource: {
        default: {
          /**
           * 单数据库实例
           */
          type: 'sqlite',
          database: ':memory:',
          // database: path.join(__dirname, '../../test.sqlite'),
          synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
          logging: false,

          // 配置实体模型
          entities: [UserEntity],
        },
      },
    },
    jwt: {
      secret: 'test', // fs.readFileSync('xxxxx.key')
      expiresIn: '2d', // https://github.com/vercel/ms
    },
  } as MidwayConfig;
};
