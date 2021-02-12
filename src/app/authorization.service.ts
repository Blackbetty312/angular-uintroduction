import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthorizationService {
  clientId =
    "478011389557-jrn9dsrrt2nvo7pjemg2lbbqn288cupn.apps.googleusercontent.com";
  clientSecret = "Bxli5L7SccVU53Xd-Y0rqB6X";
  redirectUri = "https://angular-uintroduction.stackblitz.io/callback";
  scope = "profile email"; // https://developers.google.com/identity/protocols/oauth2/scopes
  constructor(private http: HttpClient) {}

  authorizeRequest() {
    return (
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      "client_id=" +
      this.clientId +
      "&redirect_uri=" +
      this.redirectUri +
      "&response_type=code&scope=" +
      this.scope +
      "&include_granted_scopes=true&state=" +
      this.makeString(32)
    );
  }

  makeString(len: number): string {
    let outString: string = "";
    let inOptions: string =
      "abcdefghijklmnopqrstuvwxyz0123456789QWERTYUIOPASDFGHJKLZXCVBNM";

    for (let i = 0; i < len; i++) {
      outString += inOptions.charAt(
        Math.floor(Math.random() * inOptions.length)
      );
    }
    return outString;
  }

  requestAccessToken(state: string, code: string) {
    const headers = new HttpHeaders().append(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    const params = new HttpParams()
      .append("code", code)
      .append("client_id", this.clientId)
      .append("client_secret", this.clientSecret)
      .append("redirect_uri", this.redirectUri)
      .append("grant_type", "authorization_code");
    const body = {};
    return this.http.post("https://www.googleapis.com/oauth2/v4/token", body, {
      headers: headers,
      params: params
    });
    // return this.http.post("https://www.googleapis.com/oauth2/v4/token", body, {
    //   headers: headers,
    //   params: params
    // });
  }
}
