import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Video } from "../video";
import { environment } from "src/environments/environment";

@Component({
  selector: "video-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  @Input() video: Video;
  @Output() SelectedVideo = new EventEmitter();
  constructor() {}
  public imageUrl: string;
  ngOnInit() {
    this.imageUrl = environment.URLHOST;
  }

  ClickedVideo() {
    this.SelectedVideo.emit(this.video);
  }
}
