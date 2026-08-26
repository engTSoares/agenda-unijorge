import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { disciplinas } from './labs/labs02';
import { Pessoa } from "./components/pessoa/pessoa";
import { NaoEncontrada } from './components/nao-encontrada/nao-encontrada';
import { Home } from './components/home/home';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home , NaoEncontrada , RouterLink, RouterLinkActive, Pessoa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda-unijorge');
}
