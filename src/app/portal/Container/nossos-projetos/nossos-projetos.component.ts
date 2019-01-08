import { Component, OnInit } from "@angular/core";
import { ProjetosService } from "src/app/portal/Services/projetos.service";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-nossos-projetos",
  templateUrl: "./nossos-projetos.component.html",
  styleUrls: ["./nossos-projetos.component.css"]
})
export class NossosProjetosComponent implements OnInit {
  constructor(private service: ProjetosService) {}
  public projetos: Observable<any> = this.service.getProjetosPage();

  ngOnInit() {}

  getImage(image) {
    return environment.URLHOST + image;
  }
}
