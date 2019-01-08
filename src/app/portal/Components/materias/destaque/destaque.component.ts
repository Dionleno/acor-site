import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
@Component({
  selector: "materia-destaque",
  templateUrl: "./destaque.component.html",
  styleUrls: ["./destaque.component.css"]
})
export class DestaqueComponent implements OnInit {
  @Input()
  materia: {
    image: "",
    id: "",
    titulo: "",
    linha_fina: "",
  };
  constructor() {}
  imagem: string = "";
  ngOnInit() {
    this.imagem = environment.URLHOST + this.materia.image;
  }
}
