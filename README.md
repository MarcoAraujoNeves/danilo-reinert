# Danilo Reinert blog

## Estrutura do Projeto

O projeto conta com uma estrutura padrão para Gatsby, contendo as pastas:

- `src`: Código fonte e assets
- `static`: Pastas e arquivos estáticos que são disponibilizados na raiz do domínio
- `public`: output do processo de build, esta página contém os recursos estáticos para deploy do blog

Os arquivos principais da raiz do projeto são:

- `gatsby-config`: Configuração de plugins e metadados do blog
- `gatsby-node`: Arquivo com hooks de geração de páginas programáticas
- `gatsby-ssr`: Injeta um script para lidar com a seleção do tema dark/light
- `gatsby-browser`: Cria um wrapper em torno de todos os componentes, provendo acesso ao mecanismo de controle do tema

## Atualizando os parâmmetros de SEO

O Blog conta com um componente chamado SEO, localizado em `./src/components/SEO.js`, o qual é responsável por injetar as metatags necessárias no `<head>` de cada página.

Em geral, algumas destas metatags deverão ser passadas como props para o componente. Na falta de opções customizadas, o componente irá utilizar como fallback os valores listados no objeto `siteMetadata` do arquivo `./gatsby-config.js`:

```
  siteMetadata: {
    title: 'Danilo Reinert',
    description: 'Lorem ipsum ...',
    twitterUsername: '@daniloreinert',
    image: '/danilo-reinert.jpeg',
    siteUrl: 'https://www.daniloreinert.com',
  }
```

**Note que antes de lançar sua primeira versão, este objeto deve ser atualizado!**

Abaixo um exemplo de como aplicar o componente SEO com valores customizados para uma página:

```javascript
export const Head = () => {
  return (
    <SEO
      title="Amazing page"
      description="This is an example of an amazing page!"
      cover="/amazing-cover.jpg"
    />
  )
}
```

## Criando e atualizando as páginas do blog

O Gatsby toma como base os arquivos localizados na pasta `./src/pages` para gerar páginas, sendo o nome do arquivo o path da página resultante. Ex:

`./src/pages/aboout.js` -> `daniloreiner.com/about`

Para adicionar uma página manualmente, basta criar um arquivo novo no caminho especificado, aplicando a estrutura abaixo para inserir o layout padrão (Header, Main, Footer) e utilizar os estilos base:

```javascript
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function PageName() {
  return (
    <Layout>
      <h1>Page Title</h1>

      {/* Here you can add your page content! */}
    </Layout>
  )
}

// Include the SEO metatags
export const Head = () => <SEO title="Page Title" />
```

Caso precise criar páginas de forma programática - assim como as páginas dos posts, categorias e tags, você pode implementar o código necessário dentro da função `exports.createPages` no arquivo `./gatsby-node.js`. Basta importar o componente responsável pela renderização da página, definir o path da mesma e enviar os dados necessários via a propriedade `context: { ... }`.

Para mais informações, basta acessar [https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs](https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs).

Agora, para atualizar páginas existentes, basta abrir o arquivo desejado e alterar seu conteúdo, por exemplo:

```javascript
...
export default function About({ data: { file } }) {
  return (
    <Layout>
      <h1>About me</h1>

      ...

      {/* You can edit all texts below to customize this page */}
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          elementum, tortor nec vulputate molestie, leo enim tempus dolor, sit
          amet pretium nisl lacus a orci. Integer tempus vehicula nunc, sit amet
          tristique ipsum laoreet vitae. Proin ligula massa, efficitur sit amet
          neque maximus, finibus gravida elit. Morbi dolor metus, fermentum ac
          consequat in, placerat ac purus. Aliquam sed dui eu nisl aliquam
          malesuada. Nunc vehicula sed risus nec cursus.
        </p>

        ....
```

**Importante:** Para atualizar as imagens das páginas, em especial da página About e Home, basta substituir os arquivos:

- `./src/assets/images/about.jpg`
- `./src/assets/images/hero.jpg`

Já para substituir a meta imagem default do blog, substitua a imagem `./static/danilo-reinert.jpeg`.

Também é importante que as novas imagens mantenha a mesma extensão que seu placeholder. Caso contrário, será necessário atualizar a respectiva query do GraphQL.

### Footer

O componente Footer pode ser encontrado em `./src/components/Footer` e é inserido por padrão ao fim de todas as páginas do blog. O mesmo inclui uma série de links sociais, os quais devem ser atualizados ou removidos antes de disponibilizar o site online.

## Blog posts

Os posts criados para o blog fazem uso do plugin `gatsby-transformer-remark`, o qual carrega arquivos Markdown e os transformam em componentes para a geração programática das páginas. O componente utilizado para encapsular os posts, gerando o layout da página final é o `./src/components/Post.js`.

### Arquivos Markdown

Dada a configuração do plugin, os arquivos Markdown devem ser posicionados na pasta `./posts` e seu nome irá definir o path da página resultante:

`./posts/how-to-use-requestor.md` -> `daniloreiner.com/how-to-use-requestor`

Os arquivos devem contar com uma seção no topo chamada [FrontMatter](https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files), escrita em YAML, a qual deve conter as seguintes propriedades:

- cover
- title
- description
- category
- tags
- date

Estas são utilizadas para construção dos links e conteúdo da página, bem como para o SEO da mesma.

Segue um exemplo:

```yaml
---
cover: code.jpg
title: Hello World - First Post (MOCK)
description: Hello World! This is my first blog post on this site.
category: blogging
tags:
  - initial
  - coding
date: 2015-05-01T22:12:03.284Z
---
```

A seguir, pode-se escrever o corpo do post utilizando Markdown convencional, incluindo elementos como imagens, codeblocks, links, headers, etc.

### Localização e links para imagens

Pode-se notar acima que no FrontMatter é necessário apenas descrever o nome e extensão da imagem cover. Já para adicionar imagens ao longo do corpo do post, deve-se utilizar um caminho relativo ao arquivo markdown. Como todas as imagens são armazenadas na pasta `./src/assets/images` para otimização com o plugin `gatsby-plugin-sharp`, deve-se usar o caminho à seguir:

```markdown
...

![Post image](../src/assets/images/NAME.jpg)

...
```

## Netlify CMS

O Netlify CMS é uma ferramenta open-source desenvolvida em React.js que utiliza uma robusta API Git para possibilitar a criação de blog posts - neste caso, sem a necessidade de implementar manualmente o código.

Mais informações em: [https://www.netlifycms.org/docs/intro/](https://www.netlifycms.org/docs/intro/).

### Pasta admin

A pasta `./admin` contém dois arquivos para utilização do CMS.

O arquivo `./admin/index.html` é responsável por fazer o download do frontend, enquanto que o arquivo `./admin/config.yml` é responsável pela configuração completa do comportamento do CMS.

Note que esta página não faz parte do projeto Gatsby, e está assim apenas para versionamento e segurança. Não será criada uma página de administração do CMS no domínio final do blog!

Para este projeto, foi feito deploy da pasta admin em um site no Netlify, o qual pode ser acessado via [https://daniloreinert-cms.netlify.app](https://daniloreinert-cms.netlify.app). Uma vez logado, o usuário poderá ver o conteúdo do blog e manipulá-lo.

### Identity

É possível controlar o acesso ao CMS através da aba [Identity](https://app.netlify.com/sites/daniloreinert-cms/identity). Pode-se enviar invites a diferentes usuários, bem como revogar seus tokens.

Diferentes formas de login podem ser ativadas, bastando ativar nas [configurações do site](https://app.netlify.com/sites/daniloreinert-cms/settings/identity).

Mais informações em: [https://www.netlify.com/blog/2021/12/30/manage-and-authenticate-users-with-netlify-identity/](https://www.netlify.com/blog/2021/12/30/manage-and-authenticate-users-with-netlify-identity/).

### Git-Gateway

Backend implementado pelo Netlify. Um token é definido para um repositório especificado, concedendo acesso para que o Netlify crie commits, Pull Requests e faça merge das branches criadas para os posts.

Mais informações em: [https://docs.netlify.com/visitor-access/git-gateway/](https://docs.netlify.com/visitor-access/git-gateway/).

### Editorial Workflow

Na configuração atual do projeto, os seguintes passos são percorridos na criação de blog posts:

**1) Clicar em New Blog**

É aberto o editor, onde pode-se definir o FrontMatter da página e escrever seu corpo. Também é possível fazer upload de novas imagens ou navegar por uma galeria das imagens disponíveis no blog.

**2) Clicar Save**

O post é salvo no GitHub, criando automaticamente uma branch nova e um PR.
Na aba [Workflow](https://daniloreinert-cms.netlify.app/#/workflow) do CMS, será possível visualizar o post na coluna Drafts.

**3) Mover o draft para a coluna Review ou Ready, ou ainda Alterar o status via dropdown**

O PR acompanha uma label definindo o status do post, a qual é atualizada de acordo com a coluna que o post se encontra ou o status definido no dropdown da página de edição.

**4) Publish**

Clicando no botão "Publish new entry" na aba workflow ou em "Publish Now" no dropdown da página de edição - ação disponível assim que o post recebe o status "Ready", irá disparar um merge para a branch base - publishing.

**4) Merge**

Uma vez que o post tenha sido mergeado à branch publishing com sucesso, será possível fazer um merge à branch master e posteriormente realizar o deploy do blog atualizado. A versão atual conta com um GitHub Action que realiza o build do projeto Gatsby e atualiza o GitHub Pages a cada commit feito na master, cuidando então do deploy.

## Gatsby Plugins

Como um framework JavaScript, o Gatsby é super extensível, sendo possível implementar features sofisticadas de forma simples através de diversos plugins.
Para uma lista completa (que também auxilia na escolha de bibliotecas mais utilizadas), basta visitar a página [https://www.gatsbyjs.com/plugins](https://www.gatsbyjs.com/plugins).

Lá é possível buscar pelas principais categorias e buscar por funcionalidades específicas.

A documentação pode ser acessada em: [https://www.gatsbyjs.com/docs/plugins/](https://www.gatsbyjs.com/docs/plugins/).

A configuração básica se dá pela instalação via NPM ou Yarn do plugin e sua configuração, no arquivo `./gatsby-config.js` na raiz do projeto, em específico na seção `plugins: [...]`.

No caso de plugins que não requerem configuração, basta adicionar seu nome ao array:

```
  ...
  plugins: [
    ...
    'gatsby-transformer-sharp',
    ...
  ]
  ...
```

Por outro lado, pode ser necessário inserir opções de customização, inicialização, definição de tokens, etc. Assim, faz-se:

```
  ...
  plugins: [
    ...
    {
      resolve: 'gatsby-plugin-sharp',
      options: { ... }
      }
    },
    ...
  ]
  ...
```

Para utilização, basta seguir a documentação específica do plugin.
