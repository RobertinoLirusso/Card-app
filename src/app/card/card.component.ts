import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { Teams } from './teams';

export interface Team {
  name: string;
  location: string;
  logo_url: string;
  description: string;
  website: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  teams: Team[] = Teams;

}
