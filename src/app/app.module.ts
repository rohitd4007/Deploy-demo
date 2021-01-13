import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeHomePageComponent } from './recipe-home-page/recipe-home-page.component';
import { TeamComponent } from './team/team.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms';    



@NgModule({
  declarations: [AppComponent, RecipeHomePageComponent, TeamComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,NgxPaginationModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
