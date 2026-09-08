import { Component } from '@angular/core';
import { PessoaModel } from './pesssoa.model';
import { validarPessoa } from './pessoa.validacao';

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
    curso: 'Análise e Desenvolvimento de Sistemas',
    email: 'ana@exemplo.com',
    telefone: '99 987567 87',
    vinculo: 'aluno',
    ativo: true },
  { id: 2, 
    nome: 'Bruno Lima',
    curso: 'Eng. da Computação',
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
      curso: 'Inteligência Artificial',
      email: 'heitorexemplo.com',
      telefone: '6776183', 
      vinculo: 'aluno',
      ativo:true
    }
];

resultados = this.pessoas.map(pessoa => ({
  pessoa,
  erros: validarPessoa(pessoa)
}));

}

