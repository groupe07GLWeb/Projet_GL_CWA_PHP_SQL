import { Component, OnInit, Input } from '@angular/core';
import {Equipements} from '../models/equipements';
@Component({
  selector: 'app-add-fiche-entretien',
  templateUrl: './add-fiche-entretien.component.html',
  styleUrls: ['./add-fiche-entretien.component.css']
})

export class AddFicheEntretienComponent implements OnInit {
  @Input() equipment: Equipements;

  constructor() { }

  ngOnInit(): void {
  }

}
