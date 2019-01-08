import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private urlEventos = environment.API_URL + '/eventos';
  constructor(private http: Http) { }

  getEventosHomePage(limit?: number): Observable<any> {
    if(limit){
      this.urlEventos = environment.API_URL+"/eventos?limit="+ limit;
    }
     return this.http.get(this.urlEventos).pipe(map(resp => resp.json()));
  }

  getSingleEvent(id: number): Observable<{}>{
    if(id){
      this.urlEventos = environment.API_URL+"/eventos/"+ id;
      return this.http.get(this.urlEventos).pipe(map(resp => resp.json()));
    }
   return this.getEventosHomePage(1);
  }
  getLastEvent(): Observable<{}>{
    return this.getEventosHomePage(1);
  }
   
  getNewsEvent(limit): Observable<any>{
    this.urlEventos = environment.API_URL+"/eventos?news=true&limit="+ limit;
    return this.http.get(this.urlEventos).pipe(map(resp => resp.json()));
  }
   
}
