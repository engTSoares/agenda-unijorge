import { Pessoa } from './pessoa';
import { PessoaModel } from './pesssoa.model';

const CURSOS_VALIDOS = [
    'Eng. de Software',
    'Eng. da Computação',
    'Ciência da Computação',
    'Análise e Desenvolvimento de Sistemas',
    'Sistema da Informação',
    'Segurança da Informação'
];

export function validarNome(nome: string): string | null {
  const limpo = nome.trim();

  if (limpo.length < 3) {
    return 'O nome deve ter ao menos 3 caracteres.';
  }
  if (/\d/.test(limpo)) {
    return 'O nome não pode conter números.';
  }
  return null;
}

export function validarEmail(email: string) : string | null {

    if(email === ''){ 
        return 'O email é um campo obrigatório.'
    }

    if(!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)){
        return 'Email inválido!'
    }

    return null;
}

export function validarTelefone( telefone?:string) : string | null {
    //o campo pode ser vazio
    if(telefone === undefined){
        return null;
    }
    
    const telefoneLimpo = telefone.replace(/\D/g, '');
    
    if(telefoneLimpo.length != 10 && telefoneLimpo.length != 11 ){ 
        return 'Telefone deve conter entre 10 e 11 dígitos.'
    }

    return null;
}

export function validarCurso(curso: string ) : string | null {
    if(!CURSOS_VALIDOS.includes(curso)){
        return 'Curso inválido!';
    }
    return null;
}

export function validarPessoa(pessoa:PessoaModel) : string[] {
    const resultados = [
        validarNome(pessoa.nome),
        validarEmail(pessoa.email),
        validarCurso(pessoa.curso),
        validarTelefone(pessoa.telefone)
    ];

    return resultados.filter((mensagem): mensagem is string => mensagem !== null);
}


export function validarIdsUnicos(pessoas: PessoaModel[]): string[]{
    const IDvistos = new Set<number>();
    const erros: string[] = [];

    for (const item of pessoas) {
        if (IDvistos.has(item.id)) {
        erros.push(`ID ${item.id} duplicado`);
        }
        IDvistos.add(item.id);
    }

  return erros;

}





