import { Routes } from '@angular/router';
import { Pessoa } from './components/pessoa/pessoa'; 
import { Home } from './components/home/home';
import { NaoEncontrada } from './components/nao-encontrada/nao-encontrada';

export const routes: Routes = [
     { path: '', redirectTo: 'home',
    pathMatch: 'full' },
    { path: 'home',   component: Home    },
    {
        path: 'pessoa', component: Pessoa
    }, 
    { path: '**', component: NaoEncontrada }
];
