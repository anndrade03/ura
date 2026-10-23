# Site Casa Harmonia Decorações (protótipo)

Desenvolvido por Jota Solutions.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O site (Início, Sobre, Produtos, Contato e Seja um Revendedor) |
| `admin.html` | Painel administrativo |
| `dados-padrao.js` | Conteúdo original do site, usado pelo site e pelo painel |
| `dados.json` | (opcional) Conteúdo publicado pelo painel |

Os três primeiros arquivos precisam ficar na mesma pasta.

## Publicar no GitHub Pages

1. Crie um repositório e envie `index.html`, `admin.html` e `dados-padrao.js`.
2. Em **Settings → Pages**, escolha a branch `main` e salve.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/` e o painel em `.../admin.html`.

## Painel

- Usuário: `admin` · Senha inicial: `admin123` (troque em Configurações).
- Tudo o que é alterado fica salvo no navegador e aparece na hora no site aberto nesse mesmo navegador.
- Para que todos os visitantes vejam as alterações: no painel, vá em **Publicar e backup**, clique em **Baixar dados.json** e envie esse arquivo para o repositório, na mesma pasta do `index.html`.

## Limites do protótipo

Este protótipo não tem servidor. Por isso:

- Os cadastros de revendedores ficam salvos no navegador de quem se cadastrou. O painel só vê os cadastros feitos no mesmo navegador.
- A senha do painel não é uma proteção real.

Na versão final, o login, os produtos e os cadastros devem ficar num servidor com banco de dados (por exemplo, Supabase ou Firebase), para a equipe da URA aprovar revendedores de qualquer computador.
