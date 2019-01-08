import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() visible: boolean = true;
  constructor(public router: Router) { }

  ngOnInit() {
    if (!this.visible) {
      document.getElementById("header-fixed").style.display = "none";
    }
  }
  busca(item) {
    this.router.navigate(['/busca/' + item.value]);
  }

}
