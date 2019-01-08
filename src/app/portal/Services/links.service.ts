import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private urllinks = environment.API_URL + '/links';
  constructor(private http: Http) { }

  getLinksPage(limit?: number): Observable<{}> {
     return this.http.get(this.urllinks).pipe(map(resp => resp.json()));
  }
}
