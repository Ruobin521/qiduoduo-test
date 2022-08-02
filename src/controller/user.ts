import { Body, Controller, Inject, Post } from '@midwayjs/decorator';
import { JwtService } from '@midwayjs/jwt';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Validate } from '@midwayjs/validate';
import { Repository } from 'typeorm';
import UserLoginDTO from '../dao/user.dao';
import { UserEntity } from '../entity/user';
import { UserService } from '../service/user';

@Controller('/api/user')
export class UserController {
  @InjectEntityModel(UserEntity)
  userModel: Repository<UserEntity>;

  @Inject()
  userService: UserService;

  @Inject()
  jwt: JwtService;

  @Post('/login')
  @Validate()
  async login(@Body() user: UserLoginDTO) {
    try {
      const res = await this.userService.getUser(user.username, user.password);

      if (res) {
        return {
          code: 200,
          result: 'success',
          message: '登录成功',
          data: {
            token: await this.jwt.sign(user),
          },
        };
      }
      return {
        code: 400,
        result: 'error',
        message: '账号或密码不正确',
        data: null,
      };
    } catch (error) {
      console.log(error);
      return 'user error';
    }
  }

  @Post('/save')
  @Validate()
  async save(@Body() user: UserLoginDTO) {
    try {
      const res = await this.userService.saveUser(user.username, user.password);
      return res;
    } catch (error) {
      console.log(error);
      return 'user error';
    }
  }
}
