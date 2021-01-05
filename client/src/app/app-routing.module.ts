import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { LayoutComponent } from './layout/layout.component';
import { ParcourscerealeComponent } from './parcourscereale/parcourscereale.component';
import { SiloComponent } from './silo/silo.component';
import { VariablesComponent } from './variables/variables.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { AddFicheEntretienComponent } from './add-fiche-entretien/add-fiche-entretien.component';



const routes: Routes = [
    {path:"",component:LoginComponent },
    {path:"login",component:LoginComponent },
    {path:"equipmentTech",component:EquipmentComponent },
    {path:"",component:LayoutComponent, children :[
    {path:"gestionUtilisateurs",component: GestionUtilisateursComponent},  
    {path:"addUser",component: AddUserComponent}, 
    {path:"modifierUser/:id", component: ModifierUserComponent},
    {path:"equipment",component:EquipmentComponent },
    {path:"parcereale",component:ParcourscerealeComponent},
    {path:"silo",component:SiloComponent},
    {path:"variables",component:VariablesComponent},
    {path:"addFicheEntretien",component:AddFicheEntretienComponent}
  ] },
 
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
