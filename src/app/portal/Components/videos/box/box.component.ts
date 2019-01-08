import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { VideosService } from "src/app/portal/Services/videos.service";
import { Observable } from "rxjs/internal/Observable";
import { Video, VideoView } from "../video";

@Component({
  selector: "video-box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.css"]
})
export class BoxComponent implements OnInit {
  constructor(
    private videosService: VideosService,
    public sanitizer: DomSanitizer
  ) {}
  public videos: Video[];
  public videoView: VideoView;
  ngOnInit() {
    this.videosService.getVideosHomePage(3).subscribe(resp => {
      this.videos = resp.data;
      this.videos[0].active = true;
      this.videoView = resp.data[0];
      this.videoView.linkCurrent = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.videoView.link.replace("watch?v=", "embed/")
      );
    });
  }

  videoSelecionado(video) {
    const id = this.videos.map(e => e.id).indexOf(video.id) + 1;

    this.videos.forEach(element => {
      if (element.id === id) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
    this.videoView.linkCurrent = this.sanitizer.bypassSecurityTrustResourceUrl(
      video.link.replace("watch?v=", "embed/")
    );
  }
}
