import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriasService } from 'src/app/portal/Services/materias.service';
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private service: MateriasService) { }
  public materia = "";
  public materias = [];

  ngOnInit() {
    this.service.getSingleMateria(this.activeRoute.snapshot.params['id'])
      .subscribe((resp) => {
        this.materia = resp.data;
      });

    this.service.getMateriasHomePage(4).subscribe(m => {
      this.materias = m.data.filter(e => e.id != this.activeRoute.snapshot.params['id']);
    })
  }

}
