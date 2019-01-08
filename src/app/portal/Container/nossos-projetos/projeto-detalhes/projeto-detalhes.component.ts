import { Component, OnInit } from "@angular/core";
import { ProjetosService } from "src/app/portal/Services/projetos.service";
import { Observable } from "rxjs/internal/Observable";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-projeto-detalhes",
  templateUrl: "./projeto-detalhes.component.html",
  styleUrls: ["./projeto-detalhes.component.css"]
})
export class ProjetoDetalhesComponent implements OnInit {
  constructor(
    private service: ProjetosService,
    private activeRoute: ActivatedRoute
  ) {}
  public projeto: Observable<any>;
  ngOnInit() {
    if (this.activeRoute.snapshot.params["id"]) {
      this.projeto = this.service.getSingleProjeto(
        this.activeRoute.snapshot.params["id"]
      );
    }
  }
}
