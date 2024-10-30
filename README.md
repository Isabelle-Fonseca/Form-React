# Formulário de Inscrição
![formulario](https://github.com/user-attachments/assets/43ecef18-97a0-4193-a6ae-99c61d7d4086)

Este projeto é um formulário de inscrição simples desenvolvido em React. O formulário coleta informações do usuário, como nome, e-mail e se ele concorda com os termos. A validação dos dados é feita antes do envio.

## Funcionalidades

- Coleta de nome e e-mail do usuário.
- Validação dos campos obrigatórios.
- Mensagens de erro para campos não preenchidos.
- Exibição de um alerta de sucesso após o envio dos dados.

## Tecnologias Utilizadas
* React
* TypeScript
* Tailwind CSS

## Estrutura do Projeto

- `src/`
  - `components/`
    - `Form.tsx`: Componente principal do formulário.
  - `types/`
    - `User.ts`: Tipos utilizados no projeto.
  - `utils/`
    - `validate.ts`: Função de validação dos dados do formulário.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Isabelle-Fonseca/Form-React.git
2. Navegue até o diretório do projeto:
   ```bash
   cd Form
3. Instale as dependências:

   ```bash
   npm install

## Uso

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
2. Acesse em seu navegador na URL

3. Preencha o formulário e clique em "Cadastrar". Mensagens de erro serão exibidas se os campos obrigatórios não estiverem preenchidos.

