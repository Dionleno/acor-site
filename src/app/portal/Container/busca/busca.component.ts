import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriasService } from 'src/app/portal/Services/materias.service';
import { Observable } from "rxjs/internal/Observable";
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  public materias = [];
  public materiasSidebar: Observable<any> = this.service.getMateriasSidebar();
  public s = "";
  constructor(private router: ActivatedRoute, private service: MateriasService) { }

  ngOnInit() {
    this.router.params.subscribe(resp => {
      this.s = resp.s;
      this.service.getMateriasSearch(this.s).subscribe(resp => {
        this.materias = resp.data;
      })
    })

  }

}
