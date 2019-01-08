import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ProjetosService {
  private urlProjetos = environment.API_URL + "/projetos";
  constructor(private http: Http) {}

  getProjetosPage(limit?: number): Observable<{}> {
    return this.http.get(this.urlProjetos).pipe(map(resp => resp.json()));
  }

  getSingleProjeto(id: number): Observable<{}> {
    return this.http
      .get(this.urlProjetos + "/" + id)
      .pipe(map(resp => resp.json()));
  }
}
