import { Component, OnInit, Input } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: "evento-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor() { }
  @Input() evento: {
    logo: '',
    id: '',
    data: '',
    titulo: '',
    valor: '0,00',
    local: ''
  }
  imagem: string = "";
  ngOnInit() {
    // this.evento.valor = this.evento.valor == '0,00' ? "Gratuito" : this.evento.valor;
    console.log(this.evento);

    this.imagem = environment.URLHOST + this.evento.logo;
  }
}
