export type User = {
  email: string;
  password: string;
  [key: string]: any;
};

export type UserInfo = User & {
  username: string;
  verified: boolean;
}
