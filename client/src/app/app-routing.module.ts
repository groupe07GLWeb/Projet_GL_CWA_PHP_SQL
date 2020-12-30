import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { LayoutComponent } from './layout/layout.component';
import { ParcourscerealeComponent } from './parcourscereale/parcourscereale.component';
import { SiloComponent } from './silo/silo.component';
import { VariablesComponent } from './variables/variables.component';




const routes: Routes = [
    {path:"",component:LoginComponent },
    {path:"",component:LayoutComponent, children :[
    {path:"equipment",component:EquipmentComponent },
    {path:"parcereale",component:ParcourscerealeComponent},
    {path:"silo",component:SiloComponent},
    {path:"variables",component:VariablesComponent}
  ] },
 
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
