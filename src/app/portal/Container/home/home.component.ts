import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../Components/header/header.component";
import { MateriasService } from 'src/app/portal/Services/materias.service';
import { EventosService } from 'src/app/portal/Services/eventos.service';
import { Observable } from "rxjs/internal/Observable";
declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private service: MateriasService, private eventService: EventosService) { }
  public materias: Observable<any> = this.service.getMateriasHomePage(3);
  public eventos = [];


  ngOnInit() {
    // this.actionResize();
    this.eventService.getEventosHomePage(3).subscribe(resp => {
      this.eventos = resp.data;
    })
  }
  readMore() {
    $('html, body').animate({
      scrollTop: $("#started").offset().top - 70
    }, 500);
  }
  actionResize() {
    if (window.innerWidth > 768) {
      $(window).scroll(function () {
        $("#submenu").hide();
        if ($(this).scrollTop() > 125) {
          $("#header-fixed").show();
        } else {
          $("#header-fixed").hide();
        }
      });

      $(window).on("resize", function () {
        $(window).scroll(function () {
          $("#submenu").hide();
          if ($(this).scrollTop() > 125) {
            $("#header-fixed").show();
          } else {
            $("#header-fixed").hide();
          }
        });
      });
    }
  }
}
