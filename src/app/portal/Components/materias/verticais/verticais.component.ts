import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
@Component({
  selector: "materia-verticais",
  templateUrl: "./verticais.component.html",
  styleUrls: ["./verticais.component.css"]
})
export class VerticaisComponent implements OnInit {
  constructor() {}
  @Input()
  materia: {
    banner: "",
    id: "",
    titulo: "",
    valor: "",
    local: "",
    linha_fina: ""
  };
  imagem: string = "";
  ngOnInit() {
    this.imagem = environment.URLHOST + this.materia.banner;
  }
}
