import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private urllinks = environment.API_URL;
  constructor(private http: Http) { }

  getTextPage(page: number): Observable<any> {
    return this.http.get(this.urllinks + '/pages/' + page).pipe(map(resp => resp.json()));
  }
  saveNewsletter(email: string): Observable<any> {
    return this.http.post(this.urllinks + '/newsletters', { email: encodeURI(email) }).pipe(map(resp => resp.json()));
  }
  saveContato(form: any): Observable<any> {
    return this.http.post(this.urllinks + '/contato', form).pipe(map(resp => resp.json()));
  }
}
