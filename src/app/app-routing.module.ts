import { TeamComponent } from './team/team.component';
import { RecipeHomePageComponent } from './recipe-home-page/recipe-home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', component: RecipeHomePageComponent },
{path:'team',component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
