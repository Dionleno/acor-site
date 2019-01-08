import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { HomeComponent } from "./Container/home/home.component";
import { HeaderComponent } from "./Components/header/header.component";
import { HorizontalComponent } from "./Components/publicidades/horizontal/horizontal.component";
import { DestaqueComponent } from "./Components/materias/destaque/destaque.component";
import { VerticaisComponent } from "./Components/materias/verticais/verticais.component";
import { SidebarmatComponent } from "./Components/materias/sidebar/sidebar.component";
import { QuadradoComponent } from "./Components/publicidades/quadrado/quadrado.component";
import { SidebarComponent } from "./Components/eventos/sidebar/sidebar.component";
import { AssociadosComponent } from "./Components/publicidades/associados/associados.component";
import { ListaComponent } from "./Components/videos/lista/lista.component";
import { BoxComponent } from "./Components/videos/box/box.component";
import { MarcasComponent } from "./Components/publicidades/marcas/marcas.component";
import { NewsletterComponent } from "./Components/newsletter/newsletter.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { DetalhesComponent } from "./Container/materias/detalhes/detalhes.component";
import { PageComponent } from "./Container/materias/page/page.component";
import { EventosComponent } from "./Container/eventos/eventos.component";
import { SobreComponent } from "./Container/sobre/sobre.component";
import { ImprensaComponent } from "./Container/imprensa/imprensa.component";
import { SidebarAboutComponent } from "./Components/sidebar-about/sidebar-about.component";
import { NossosProjetosComponent } from "./Container/nossos-projetos/nossos-projetos.component";
import { QuemSomosComponent } from "./Container/quem-somos/quem-somos.component";
import { ProjetoDetalhesComponent } from "./Container/nossos-projetos/projeto-detalhes/projeto-detalhes.component";
import { ClubComponent } from "./Container/club/club.component";
import { AssociadoComponent } from "./Container/associado/associado.component";
import { RouterModule } from "@angular/router";
import { PageEventComponent } from "./Container/eventos/page-event/page-event.component";
import { LinksComponent } from "../portal/Container/links/links.component";
import { ApoioComponent } from "../portal/Container/apoio/apoio.component";
import { TrabalheConoscoComponent } from './Container/trabalhe-conosco/trabalhe-conosco.component';
import { FaleConoscoComponent } from './Container/fale-conosco/fale-conosco.component';
import { EscapeHtmlPipe } from "src/app/portal/Services/keep-html.pipe";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscaComponent } from './Container/busca/busca.component';
import { BuscaMateriaComponent } from './Components/materias/busca-materia/busca-materia.component';
@NgModule({
  imports: [CommonModule, HttpModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [
    EscapeHtmlPipe,
    HomeComponent,
    HeaderComponent,
    HorizontalComponent,
    DestaqueComponent,
    VerticaisComponent,
    QuadradoComponent,
    SidebarComponent,
    AssociadosComponent,
    ListaComponent,
    BoxComponent,
    MarcasComponent,
    NewsletterComponent,
    FooterComponent,
    DetalhesComponent,
    EventosComponent,
    SobreComponent,
    ImprensaComponent,
    SidebarAboutComponent,
    NossosProjetosComponent,
    QuemSomosComponent,
    ProjetoDetalhesComponent,
    ClubComponent,
    PageComponent,
    AssociadoComponent,
    SidebarmatComponent,
    PageEventComponent,
    LinksComponent,
    ApoioComponent,
    TrabalheConoscoComponent,
    FaleConoscoComponent,
    BuscaComponent,
    BuscaMateriaComponent
  ]
})
export class PortalModule { }
