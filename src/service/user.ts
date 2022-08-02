import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user';

@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userModel: Repository<UserEntity>;

  async getUser(username: string, password: string) {
    const user = await this.userModel.findOne({
      where: {
        username,
        password,
      },
    });

    console.log('userl', user);

    return user;
  }

  async saveUser(username: string, password: string) {
    const user = await this.userModel.save({
      username,
      password,
    });

    return user;
  }
}
