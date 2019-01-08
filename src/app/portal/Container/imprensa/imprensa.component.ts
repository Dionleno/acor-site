import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/portal/Services/pages.service';

@Component({
  selector: 'app-imprensa',
  templateUrl: './imprensa.component.html',
  styleUrls: ['./imprensa.component.css']
})
export class ImprensaComponent implements OnInit {
  description: string;
  constructor(public pageService: PagesService) { }

  ngOnInit() {
    this.pageService.getTextPage(2).subscribe((resp) => {
      this.description = resp.data.description;
    })
  }


}
