import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { TagModel } from "./tag.model";

@Injectable({
  providedIn: "root"
})
export class TagService {
  constructor(private http: HttpClient) {}

  getAllTags(): Observable<TagModel[]> {
    const header = new HttpHeaders().set("app-id", "602268699febf5eda809f652");
    return this.http.get<TagModel[]>(
      "https://dummyapi.io/data/api/tag?limit=10",
      {
        headers: header
      }
    );
  }
}
