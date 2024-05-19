import { Component, OnInit } from '@angular/core';
import { CarteVisite } from './carte-visite.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent implements OnInit{
  carteVisite: CarteVisite = new CarteVisite();


  constructor() {
  
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.carteVisite);

  // Ici, vous pouvez implémenter la logique pour enregistrer les données
  // ou simplement afficher les données dans la console pour l'instant
  }
}

