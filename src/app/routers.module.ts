import { NgModule } from "@angular/core";
import { CommonModule, LocationStrategy, PathLocationStrategy } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./portal/Container/home/home.component";
import { EventosComponent } from "./portal/Container/eventos/eventos.component";
import { PageEventComponent } from "./portal/Container/eventos/page-event/page-event.component";
import { DetalhesComponent } from "./portal/Container/materias/detalhes/detalhes.component";
import { PageComponent } from "./portal/Container/materias/page/page.component";
import { SobreComponent } from "./portal/Container/sobre/sobre.component";
import { ImprensaComponent } from "./portal/Container/imprensa/imprensa.component";
import { NossosProjetosComponent } from "./portal/Container/nossos-projetos/nossos-projetos.component";
import { ProjetoDetalhesComponent } from "./portal/Container/nossos-projetos/projeto-detalhes/projeto-detalhes.component";
import { QuemSomosComponent } from "./portal/Container/quem-somos/quem-somos.component";
import { ClubComponent } from "./portal/Container/club/club.component";
import { AssociadoComponent } from "./portal/Container/associado/associado.component";
import { LinksComponent } from './portal/Container/links/links.component';
import { ApoioComponent } from './portal/Container/apoio/apoio.component';
import { PortalModule } from "./portal/portal.module";
import { TrabalheConoscoComponent } from "src/app/portal/Container/trabalhe-conosco/trabalhe-conosco.component";
import { FaleConoscoComponent } from "src/app/portal/Container/fale-conosco/fale-conosco.component";
import { BuscaComponent } from "src/app/portal/Container/busca/busca.component";
export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "eventos", component: EventosComponent },
  { path: "evento/:id", component: PageEventComponent },
  { path: "materias", component: PageComponent },
  { path: "materias/:id", component: DetalhesComponent },
  { path: "sobre", component: SobreComponent },
  { path: "apoio", component: ApoioComponent },
  { path: "imprensa", component: ImprensaComponent },
  { path: "trabalhe-conosco", component: TrabalheConoscoComponent },
  { path: "fale-conosco", component: FaleConoscoComponent },
  { path: "nossos-projetos", component: NossosProjetosComponent },
  { path: "links-uteis", component: LinksComponent },
  { path: "projeto/:id", component: ProjetoDetalhesComponent },
  { path: "quem-somos", component: QuemSomosComponent },
  { path: "club", component: ClubComponent },
  { path: "associado", component: AssociadoComponent },
  { path: "busca/:s", component: BuscaComponent },
];

@NgModule({
  imports: [PortalModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class RoutersModule { }
