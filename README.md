1. Introdução:

Com o nome VendUp o propósito da aplicação web é fazer o crud (criar, editar, excluir e visualizar) das vendas, sendo assim uma aplicação voltada para a gestão de vendas. O usuário poderá logar e ficar livre para gerenciar suas vendas de acordo com sua necessidade e por exemplo ver o total recebido pelas vendas registradas.
Alguns itens e componentes foram colocados na aplicação para melhorar a experiência e torná-la mais fiel à realidade, entretanto não estão habilitadas por ser apenas uma aplicação front-end, mas que melhoram a experiência do usuário.

2. Como Configurar e Executar:

Para garantir a boa execução da aplicação desenvolvida em React Redux e evitar falhas e erros, se pode seguir os seguintes passos:
Clonar o repositório: Usando o comando git clone [https://github.com/NatalyaNunes/projetoVendas] para clonar o repositório para a máquina local.
Instalar as dependências: Navegando até a pasta do projeto clonado e execute npm install ou yarn install (a depender da configuração da sua máquina), que irá instalar todas as dependências listadas no arquivo package.json onde tem todas as modificações necessárias para o desenvolvimento da aplicação desenvolvida.
Executar a aplicação: Após a instalação das dependências, inicie o servidor com npm start ou yarn start para iniciar o servidor e abrir a aplicação no navegador.

3. Estrutura do Projeto:

Os componentes estão divididos em pastas, dentre elas a pasta forms, que possui as páginas com formulários que são a tela de Login e Cadastro de vendas. A interface Login é simples e intuitiva, com o campo de email e senha será responsável por autenticar e redirecionar o usuário para as rotas privadas. A interface Cadastro é a responsável por resgatar os dados da venda, seja ela a de criação ou a de edição da venda. A pasta Layout guarda o Sidebar que é o componente de navegação dentro da aplicação e é implementada no arquivo Layout como parte fundamental da navegação e o conteúdo que o acompanha. A pasta pages guarda as interfaces Home e Table que são em sua maior parte apenas de visualização, o arquivo Table entretanto tem a ação de editar e deletar venda. Os icons foram divididos conforme as interfaces em que são utilizados.

4. Tecnologias Utilizadas:

O framework requisitado foi o React e o escolhido para o gerenciamento de estados globais foi o Redux visto sua alta compatibilidade e eficácia para o projeto. Outros frameworks de estilização como Tailwind e Bootstrap não foram utilizados.

5. Contato:
   Email: nunes.natalya23@gmail.com
   Telefone: (84) 98720-7079
