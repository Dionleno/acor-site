import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  private urlMaterias = environment.API_URL + '/posts';
  constructor(private http: Http) { }

  getMateriasHomePage(limit?: number): Observable<any> {
    if (limit) {
      this.urlMaterias = environment.API_URL + "/posts?limit=" + limit;
    }
    return this.http.get(this.urlMaterias).pipe(map(resp => resp.json()));
  }

  getSingleMateria(id: number): Observable<any> {
    if (id) {
      this.urlMaterias = environment.API_URL + "/posts/" + id;
    }
    return this.http.get(this.urlMaterias).pipe(map(resp => resp.json()));
  }

  getMateriasSidebar(): Observable<{}> {
    this.urlMaterias = environment.API_URL + "/posts?limit=4";
    return this.http.get(this.urlMaterias).pipe(map(resp => resp.json()));
  }

  getMateriasSearch(s: string): Observable<any> {
    this.urlMaterias = environment.API_URL + "/search/" + s;
    return this.http.get(this.urlMaterias).pipe(map(resp => resp.json()));
  }
}
