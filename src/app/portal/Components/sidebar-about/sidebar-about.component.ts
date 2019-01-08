import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-about',
  templateUrl: './sidebar-about.component.html',
  styleUrls: ['./sidebar-about.component.css']
})
export class SidebarAboutComponent implements OnInit {
  @Input() sessao;
  constructor() { }

  ngOnInit() {
    console.log(this.sessao);
    
  }

}
