import { Rule, RuleType } from '@midwayjs/validate';

class UserLoginDTO {
  @Rule(RuleType.string().required().max(64))
  username: string;

  @Rule(RuleType.string().required().max(64))
  password: string;
}

export default UserLoginDTO;
