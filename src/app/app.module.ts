import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutersModule } from "./routers.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
