interface Iuser {
  _id: string;
  fullName: string;
  username: string;
  email?: string;
  token: string;
  authenticated: boolean;
}
