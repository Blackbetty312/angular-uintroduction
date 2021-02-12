export class UserGoogleModel {
  email: string;
  emailVerified: boolean;
  locale: string;
  name: string;
  picture: string;

  public static fromToken(obj: Object): UserGoogleModel {
    const user = new UserGoogleModel();
    user.email = obj.email;
    user.emailVerified = obj.email_verified;
    user.locale = obj.locale;
    user.name = obj.name;
    user.picture = obj.picture;
    return user;
  }
}
