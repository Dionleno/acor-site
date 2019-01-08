import { Component, OnInit, Input } from '@angular/core';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-busca-materia',
  templateUrl: './busca-materia.component.html',
  styleUrls: ['./busca-materia.component.css']
})
export class BuscaMateriaComponent implements OnInit {
  @Input()
  materia: {
    image: "",
    id: "",
    titulo: "",
    linha_fina: "",
  };
  constructor() { }
  imagem: string = "";
  ngOnInit() {
    this.imagem = environment.URLHOST + this.materia.image;
  }


}
