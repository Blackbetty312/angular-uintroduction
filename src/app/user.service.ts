import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { UserModel } from "./user-model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  header = new HttpHeaders().set("app-id", "602268699febf5eda809f652");
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>("https://dummyapi.io/data/api/user?limit=10", {
      headers: this.header
    });
  }

  getUserById(id: String): Observable<UserModel> {
    return this.http.get<UserModel>("https://dummyapi.io/data/api/user/" + id, {
      headers: this.header
    });
  }
}
