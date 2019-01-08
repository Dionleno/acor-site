import { Component, OnInit } from '@angular/core';
import { SidebarmatComponent } from "../../../Components/materias/sidebar/sidebar.component";
import { MateriasService } from 'src/app/portal/Services/materias.service';
import { Observable } from "rxjs/internal/Observable";
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private service: MateriasService) { }
  public materias: Observable<any> = this.service.getMateriasHomePage(3);
  public materiasSidebar: Observable<any> = this.service.getMateriasSidebar();
  public Lastmaterias: Observable<any> = this.service.getMateriasHomePage(8);
  ngOnInit() {
  }

}
