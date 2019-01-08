import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/portal/Services/pages.service';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent implements OnInit {
  description: string;
  constructor(public pageService: PagesService) { }

  ngOnInit() {
    this.pageService.getTextPage(3).subscribe((resp) => {
      this.description = resp.data.description;
    })
  }

}
