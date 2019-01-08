import { Component, OnInit } from '@angular/core';
import { LinksService } from 'src/app/portal/Services/links.service';
import { Observable } from "rxjs/internal/Observable";
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  public links: Observable<any>;
  constructor(private linkService: LinksService) { }

  ngOnInit() {
    this.links = this.linkService.getLinksPage();
  }

}
