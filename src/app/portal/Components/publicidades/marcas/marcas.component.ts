import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "publicidade-marcas",
  templateUrl: "./marcas.component.html",
  styleUrls: ["./marcas.component.css"]
})
export class MarcasComponent implements OnInit {
  constructor() {}
  @Input() background: string;
  ngOnInit() {
    document.getElementById('midia-associado').style.background = this.background;
  }
}
