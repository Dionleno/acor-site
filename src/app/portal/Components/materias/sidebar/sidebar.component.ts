import { Component, OnInit,Input } from '@angular/core';
import { environment } from "src/environments/environment";
@Component({
  selector: 'materia-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarmatComponent implements OnInit {
  @Input()
  materia: {
    image: "",
    id: "",
    titulo: "",
    updated_at: "",
  };
  constructor() { }
  imagem: string = "";
  ngOnInit() {
    this.imagem = environment.URLHOST + this.materia.image;
  }

}
