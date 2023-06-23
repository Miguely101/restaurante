# MANUAL DE INSTALAÇÃO DO RESTAURANTE
Este projeto foi desenvolvido durante o último período de estadia na Escola Bento Jesus Caraça. Foi solicitada a criação de um sistema de restaurante com recursos de reserva, pedidos, login, API e painel administrativo.

Para a implementação do projeto, utilizamos as seguintes tecnologias: sockets.io, primeng, Angular e Node.js. O projeto foi concluído em aproximadamente um mês, com alguns dias adicionais para ajustes e melhorias.

O sistema de restaurante desenvolvido possui funcionalidades que permitem aos usuários fazer reservas, fazer pedidos, realizar login e inclui uma API para integração com outras aplicações. Além disso, foi criado um painel administrativo (backoffice) para facilitar a gestão do restaurante.

O objetivo principal deste projeto foi criar uma solução completa e funcional para atender às necessidades de um restaurante, proporcionando uma experiência agradável tanto para os clientes quanto para os proprietários.

# SQL SERVER
Para instalar a base de dados utilizando o SQL Server e executar o script com todas as tabelas, siga os passos abaixo:
1 - Certifique-se de ter o SQL Server instalado e configurado corretamente em seu sistema.
2 - Abra o SQL Server Management Studio (SSMS) ou qualquer outra ferramenta de administração do SQL Server.
3 - Crie um novo banco de dados para o seu projeto, caso ainda não tenha feito isso.
4 - Abra o arquivo de script SQL que contém todas as tabelas do seu projeto. Verifique se o arquivo possui a extensão .sql.
5 - Copie o conteúdo do arquivo de script SQL.
6 - Conecte-se ao servidor do SQL Server usando o SSMS ou a ferramenta de administração escolhida.
7 - Selecione o banco de dados que você criou para o projeto.
8 - Abra uma nova consulta no SSMS ou na ferramenta de administração.
9 - Cole o conteúdo do script SQL na nova consulta.
10 - Execute a consulta pressionando o botão de execução ou usando o atalho de teclado adequado (geralmente F5).
11 - Aguarde a conclusão da execução do script. Isso criará todas as tabelas e estruturas de banco de dados necessárias para o seu projeto.

Após seguir esses passos, você terá a base de dados configurada com todas as tabelas necessárias para o funcionamento do seu 
projeto. Certifique-se de verificar se não ocorreram erros durante a execução do script SQL.

# BACKEND:

Crie um arquivo chamado .env na pasta do seu projeto backend.
No arquivo .env, defina os seguintes campos para se conectar ao banco de dados SQL Server:
arduino
Copy code
MYSQL_HOST= [endereço do servidor MySQL]
MYSQL_USER= [usuário do banco de dados]
MYSQL_PASSWORD= [senha do banco de dados]
MYSQL_DB= [nome do banco de dados]

Certifique-se de preencher corretamente as informações acima.
Gere um salt de 24 caracteres para utilizar na criptografia do website. Você pode usar um gerador de senhas seguro para criar o salt.

ACCESS_TOKEN= [salt de 24 caracteres]

Para obter a chave da API do OpenAI, siga os seguintes passos:
Acesse o site da OpenAI (https://openai.com/) e faça login na sua conta.
Navegue até a seção de APIs ou Desenvolvedores (dependendo da organização do site).
Crie uma nova chave de API para o projeto.
Copie a chave gerada.

OPENAI_API_KEY= [chave de API do OpenAI]

Certifique-se de que possui permissões adequadas para usar a API do OpenAI.
Abra um terminal na pasta do projeto backend e execute o seguinte comando para instalar todas as bibliotecas necessárias:

npm i

Após a conclusão da instalação das bibliotecas, execute o seguinte comando para iniciar o servidor:

npm run dev

Se todas as etapas foram seguidas corretamente, você verá a mensagem "Host ready" e "Connected to database" indicando que o backend está pronto e conectado ao banco de dados.

# fRONTEND:

Certifique-se de ter o Angular versão 14.0 instalado em seu sistema. Caso não tenha, instale-o antes de prosseguir.
Abra um terminal na pasta do projeto frontend e execute o seguinte comando para instalar as dependências:

npm i

Após a instalação das dependências, execute o seguinte comando para iniciar o host:

ng serve
Isso iniciará o servidor da aplicação frontend.

# SOCKETS:

Abra um terminal na pasta do projeto dos sockets e execute o seguinte comando para instalar as dependências:

<b>npm i</b>

Após a instalação das dependências, execute o seguinte comando para iniciar o servidor dos sockets:

node index.js

Se tudo estiver instalado corretamente, você verá a mensagem "Ligado à porta 3337", indicando que o projeto está pronto.
Certifique-se de ter seguido todos os passos corretamente para garantir a instalação adequada do projeto.


