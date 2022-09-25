<div align="center">
  <img src="./public/images/avatar.svg" width="100">
</div>

# 💻 **Sobre**

O ig.news é um blog onde os usuários, pagantes, podem acessar os conteúdos de forma completa através da integração com o Stripe, uma aplicação de pagamentos. Caso ele não seja assinante, terá uma limitação nas postagens, impossibilitando de acessar todo o conteúdo.

Ao invés de ser repartido entre backend e frontend, essa aplicação utiliza o conceito ***Serverless***, tendo o backend integrado ao nosso frontend e utilizando a arquitetura ***JAMStack***.

<br />

# 👨‍💻 **Tecnologias**

As tecnologias utilizadas nesta aplicação:

- [Next.JS](https://nextjs.org/)
- [Next Auth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

<br />

# 🚀 **Como executar**
```bash
  # Clone a aplicação
  $ git clone https://github.com/dbssy/ig-news

  # Acesse o diretório
  $ cd ignews

  # Instale as dependências
  $ yarn

  # Copie o arquivo .env.local.example
  # Preencha as variaíveis de ambiente, de acordo com as suas
  $ cp .env.local.example .env.local

  # Execute o comando para ouvir os eventos do webhook
  $ stripe listen --forward-to localhost:3000/api/webhooks

  # Rode o projeto
  $ yarn dev
```
<br />

# 📝 **Licença**
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<br />

# **Créditos**

- README e o arquivo de configuração foram clonados do usuário **[Nelson Santos](https://github.com/nelsonsantosaraujo/)**.