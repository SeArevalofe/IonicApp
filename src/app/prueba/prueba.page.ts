import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonicModule]
})
export class PruebaPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  terms: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
