type Vinculo = 
| 'aluno'
| 'professor'
| 'convidado'; 

export interface PessoaModel {
    id: number;
    nome: string;
    curso: string;
    email: string;
    telefone?: string;
    vinculo: Vinculo;
    ativo: boolean;
}