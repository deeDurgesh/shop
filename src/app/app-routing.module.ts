import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './menu/add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
{path: "home", component:HomeComponent},
{path: "menu", component:MenuComponent},
{path: "profile", component:ProfileComponent},
{path: "menu/add", component:AddComponent},
{path: "menu/delete", component:DeleteComponent},
{path: "menu/update", component:UpdateComponent},
{path: "menu/view", component:ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
