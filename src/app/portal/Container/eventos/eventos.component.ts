import { Component, OnInit } from "@angular/core";
import { EventosService } from "src/app/portal/Services/eventos.service";
import { Observable } from "rxjs/internal/Observable";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-eventos",
  templateUrl: "./eventos.component.html",
  styleUrls: ["./eventos.component.css"]
})
export class EventosComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private eventService: EventosService
  ) {}
  public evento: Observable<any>;
  public event= [];
  public eventosSidebar = [];
  
  ngOnInit() {
    if (this.activeRoute.snapshot.params["id"]) {
      this.evento = this.eventService.getSingleEvent(
        this.activeRoute.snapshot.params["id"]
      );
    } else {
      this.evento = this.eventService.getLastEvent();
    }
    this.eventService.getNewsEvent(20).subscribe(res => {
      console.log(res.data);
      
      this.event = res.data;
    });
    this.eventService.getEventosHomePage(8).subscribe(res => {
      this.eventosSidebar = res.data;
    })
    
  }
}
