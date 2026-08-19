import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { disciplinas } from './labs/labs02';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda-unijorge');
}
