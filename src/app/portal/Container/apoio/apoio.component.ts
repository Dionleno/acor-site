import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/portal/Services/pages.service';

@Component({
  selector: 'app-apoio',
  templateUrl: './apoio.component.html',
  styleUrls: ['./apoio.component.css'],
})
export class ApoioComponent implements OnInit {
  description: string;
  constructor(public pageService: PagesService) { }

  ngOnInit() {
    this.pageService.getTextPage(1).subscribe((resp) => {
      this.description = resp.data.description;
    })
  }

}
