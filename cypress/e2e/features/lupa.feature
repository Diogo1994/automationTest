# language: pt
Funcionalidade: Lupa
Objetivo: Fazer Funcionalidade da Lupa.

Cenario: Verificação da existencia da lupa.
Dado que acesso o site da agi
Quando estiver na tela inicial
Entao vizualizo a lupa no inicio da pagina

Cenário: Verificação de retorno de item não encontrado.
Dado que acesso o site da agi
Quando optar por pesquisar um item inexistente
# Então valido a msg de retorno