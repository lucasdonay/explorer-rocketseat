// Primeiro tirar o evento padrão de click de url

// Mapear as Rotas e puxar o pathname

// Entender sobre o javascript assíncrono e promises fetch() e .then

// popstate = função de voltar pela setinha do navegador = { O evento popstate é disparado quando a entrada do histórico ativa é alterado. Se o histórico de entrada a ser ativado for criado por uma chamada history.pushState() ou for afetada por uma chamada history.replaceState(), a propriedade dos eventos popstate contém uma cópia do histórico de entrada do objeto.

Note que apenas chamando history.pushState() ou history.replaceState() não ira disparar um evento popstate. O evento popstate apenas é disparado após uma ação no navegador como um click no botão de voltar (ou chamando history.back() por javascript)

Navegadores tendem a lidar com o evento popstate diferentemente no carregamento da página. Chrome (anterior versão 34) e Safari sempre emitem um evento popstate no carregamento da página, mas o Firefox não.r }

// Lembrar de usar o window. pra manipular a dom do browser

// Entender sobre Função Construtora pra entender programação orientada em objetos

// Programação Orientada a objetos polimorfismo
