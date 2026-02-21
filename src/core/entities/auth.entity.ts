export class UserCredentials {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly userInfo: {
    id: string;
    email: string;
    username: string;
    roles: string[];
  };

  constructor(props: UserCredentials) {
    this.accessToken = props.accessToken;
    this.refreshToken = props.refreshToken;
    this.userInfo = props.userInfo;
  }
}
