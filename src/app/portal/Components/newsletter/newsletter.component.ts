import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/portal/Services/pages.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  email;
  constructor(public service:PagesService) { }

  ngOnInit() {
  }

  save(e){
    this.service.saveNewsletter(e).subscribe((resp) => {
      alert('Salvo com sucesso!');

    })
    console.log(e);
    
  }
}
