import { Component } from '@angular/core';
import { PessoaModel } from './pesssoa.model';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})
export class Pessoa {
pessoas: PessoaModel[] = [
 {  id: 1, 
    nome: 'Ana Souza',
    curso: 'Eng. Computação',
    email: 'ana@exemplo.com',
    telefone: '100 98756787',
    vinculo: 'aluno',
    ativo: true },
  { id: 2, 
    nome: 'Bruno Lima',
    curso: 'Eng. Computação',
    email: 'bruno@exemplo.com',
    telefone: '100 97856783',
    vinculo: 'professor',
    ativo: true },
    { id: 3, 
    nome: 'Erik Bispo',
    curso: 'Ciência da Computação',
    email: 'erik@exemplo.com',
    telefone: '100 98756444',
    vinculo: 'aluno',
    ativo: true },
    { id: 4, 
    nome: 'Letícia Fontes',
    curso: 'Ciência da Computação',
    email: 'leticia@exemplo.com',
    telefone: '100 6776183',
    vinculo: 'professor',
    ativo: true },
    {
      id: 5,
      nome: 'Heitor Braga',
      curso: 'Eng. da Computação',
      email: 'heitor@exemplo.com', 
      vinculo: 'aluno',
      ativo:true
    }
];
}
