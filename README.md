# Projeto DevClub - Burger

Este projeto apresenta um menu interativo de lanches com funcionalidades implementadas utilizando JavaScript, HTML e CSS. Os usuários podem visualizar, filtrar, mapear e calcular o preço total dos itens do menu de forma dinâmica.

## Funcionalidades

- **Mostrar Tudo (ForEach):** Exibe todos os itens do menu na lista, utilizando o método `forEach`.
- **Mapear (Map):** Aplica um desconto de 10% em todos os itens do menu e exibe os valores atualizados, utilizando o método `map`.
- **Somar Tudo (Reduce):** Calcula o preço total de todos os itens do menu, exibindo um único card com o valor total, utilizando o método `reduce`.
- **Filtrar (Filter):** Exibe apenas os itens veganos do menu, utilizando o método `filter`.

## Estrutura do Projeto

### HTML

- Um botão para cada funcionalidade.
- Um elemento `<ul>` onde os itens do menu são exibidos.

### CSS

- Estilização responsiva para diferentes tamanhos de tela.

### JavaScript

- **Manipulação de DOM:** Criação dinâmica de elementos `<li>` para exibição de itens.
- **Funções reutilizáveis:** Funções como `createList` e `clearList` para criar e limpar a lista de forma eficiente.
- **Eventos de Clique:** Cada botão é associado a uma funcionalidade específica via `addEventListener`.

## Estrutura de Dados

Os itens do menu são representados como objetos com as seguintes propriedades:

- `name`: Nome do item (ex: "X-Salada").
- `price`: Preço do item (ex: 30).
- `vegan`: Booleano indicando se o item é vegano.
- `src`: Caminho da imagem representando o item.


## Como Usar

- Clique em **"Mostrar Tudo"** para exibir todos os itens do menu.
- Clique em **"Mapear"** para aplicar um desconto de 10% e visualizar os preços atualizados.
- Clique em **"Somar Tudo"** para calcular e exibir o preço total dos itens do menu.
- Clique em **"Filtrar"** para exibir apenas os itens veganos.

## Estilização Responsiva

A interface foi otimizada para diferentes tamanhos de tela utilizando **media queries**.  
Elementos ajustam-se para telas menores, como smartphones, garantindo uma experiência de usuário agradável.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do conteúdo.
- **CSS3**: Estilização responsiva e design visual.
- **JavaScript**: Lógica de funcionalidades interativas e manipulação de DOM.

## Links Importantes

- **[LinkedIn](https://www.linkedin.com/in/dev-josue-morais/)**: Perfil no LinkedIn
- **[Demonstração](https://dev-josue-morais.github.io/DevClub-Buger/)**: Ver o Projeto Online
![Imagem de Demonstração](https://github.com/dev-josue-morais/DevClub-Buger/blob/main/img.png)
