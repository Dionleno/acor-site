import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Video, ResultData } from "src/app/portal/Components/videos/video";
@Injectable({
  providedIn: "root"
})
export class VideosService {
  private urlVideos = environment.API_URL + "/videos";
  constructor(private http: Http) {}

  getVideosHomePage(limit?: number): Observable<ResultData> {
    if (limit) {
      this.urlVideos = this.urlVideos + "?limit=" + limit;
    }
    return this.http.get(this.urlVideos).pipe(map(resp => resp.json()));
  }
}
