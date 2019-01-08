import { Component, OnInit } from "@angular/core";
import { EventosService } from "src/app/portal/Services/eventos.service";
import { Observable } from "rxjs/internal/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-page-event",
  templateUrl: "./page-event.component.html",
  styleUrls: ["./page-event.component.css"]
})
export class PageEventComponent implements OnInit {
  now = new Date;
  today: string ;
  constructor(
    private activeRoute: ActivatedRoute,
    private eventService: EventosService
  ) {}
  public evento: Observable<any>;
  public urlBanner: string = environment.URLHOST;
  ngOnInit() {
    
    this.today = this.now.toISOString();
    console.log(this.today);
    
    if (this.activeRoute.snapshot.params["id"]) {
      this.evento = this.eventService.getSingleEvent(
        this.activeRoute.snapshot.params["id"]
      );
    } else {
      this.evento = this.eventService.getLastEvent();
    }
  }
}
