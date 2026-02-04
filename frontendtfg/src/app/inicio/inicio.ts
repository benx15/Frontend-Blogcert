import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import{InicioService} from '../services/inicio.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule,CommonModule, ],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
})
export class Inicio implements OnInit {
  noticias: any[] = [];
  constructor(private inicioService: InicioService) {}

  ngOnInit(): void {
    this.inicioService.getNoticias().subscribe({
      next: (data) => this.noticias = data,
      error: (err) => console.error(err)
    });
  }
}
