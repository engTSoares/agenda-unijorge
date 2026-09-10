## Questões

1. Em validarTelefone, o parâmetro é telefone?: string. Qual é o tipo real dele dentro da função, e qual precisa ser a primeira linha do corpo?

Dentro da função, o campo `telefone` pode ser `string` ou `undefined`, porque o `?` significa que o valor pode não existir. Por isso, a primeira linha deve verificar se ele é `undefined`, como aparece no código: if (telefone === undefined)

2. No experimento, por que o compilador deixou passar? O que o as Pessoa fez — e o que ele não fez?

O compilador deixou passar porque `as Pessoa` só disse para o TypeScript tratar aquele objeto como se fosse uma `Pessoa`. Ele não conferiu se os dados realmente estavam corretos e nem validou os campos.


3. Quantas mensagens a validarPessoa encontrou nesse objeto? O que isso mostra sobre a diferença entre tipar e validar?

A função `validarPessoa` encontrou 2 mensagens nesse objeto, sendo uma para o nome vazio e outra para o e-mail inválido. Isso mostra que colocar um tipo não garante que os dados estão corretos. O tipo só ajuda a dizer como os dados deveriam ser, enquanto a validação verifica os valores de verdade.


### EXTRA
Escreva `validarIdsUnicos(pessoas: Pessoa[]): string[]` , repita um id na lista e mostre o aviso no topo da tela. Explique em duas linhas por que essa regra não cabe dentro de `validarPessoa`.

`validarPessoa` recebe um único objeto, ela não tem acesso a nenhuma outra pessoa da lista. Para verificar "id único" exige comparar aquele registro contra todos os outros, e isso é informação que só existe no nível da coleção inteira, não no nível de um item isolado.
