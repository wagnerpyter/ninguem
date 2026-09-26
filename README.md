# Ninguém — o herói do povo

Protótipo estático e responsivo para apresentar o personagem criado por Augusto Matos Pereira, em Salvador, Bahia.

## Rodar localmente

O modo offline e a instalação como app dependem de contexto seguro e de um servidor local. Com Python 3:

```sh
python3 -m http.server 8080
```

Abra `http://localhost:8080`. Acesse uma vez com conexão para instalar o service worker e armazenar os arquivos principais; depois recarregue ou volte à página sem conexão para conferir a versão em cache. Abrir o `index.html` diretamente como `file://` não testa o modo offline.

## Publicar com GitHub Pages

O site está preparado para um repositório GitHub Pages de projeto. Em **Settings → Pages**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`. Aguarde a publicação e abra o endereço exibido pelo GitHub. O service worker é servido por HTTPS no Pages e usa caminhos relativos para funcionar no subcaminho do repositório.

O domínio próprio, se escolhido, é uma configuração separada: primeiro confirme a titularidade e disponibilidade no Registro.br; depois configure o domínio no GitHub Pages e atualize o DNS. O código não registra domínio nem aciona DNS.

## O que funciona

- Layout adaptável para desktop e celular; menu móvel, link de salto para o conteúdo, foco visível e navegação por teclado.
- Controle de alto contraste, preferência de movimento reduzido e estado de conexão.
- PWA instalável em navegadores compatíveis, com manifesto e ícone vetorial local.
- Cache offline da página, estilos, scripts e imagens locais após a primeira visita conectada.
- Vitrine demonstrativa em `loja.html`, com mockups neutros de camiseta e ecobag, sem carrinho, checkout, preços definidos ou venda ativa.
- Conteúdo essencial local, sem framework, dependência de API ou fonte remota obrigatória.

O botão de instalação aparece apenas quando o navegador oferece essa opção. A primeira visita requer conexão. Links para vídeo, redes sociais e matéria externa também requerem conexão e não são guardados no cache.

## Conteúdo e direitos

As duas imagens enviadas junto à conversa foram incluídas no protótipo; a cena de HQ foi convertida para WebP sem cortar a composição. A segunda imagem é um conceito experimental criado pelo autor com ChatGPT: Ninguém encontra o criador em um bar, como cena metalinguística com referência a Constantine e Alan Moore. O site não a apresenta como cena canônica nem como colaboração dos artistas citados. Os créditos e a autorização para uso e publicação das imagens devem ser confirmados com o criador. Os textos biográficos também são provisórios. Antes do lançamento oficial, revisar grafia, biografia, sinopse, créditos e autorização para usar desenho, fotogramas, logotipo e HQ.

## Estrutura

- `index.html` — conteúdo e estrutura semântica.
- `loja.html` — template visual demonstrativo para uma futura loja de produtos sob demanda; ainda não aceita pedidos.
- `styles.css` — visual, responsividade e alto contraste.
- `app.js` — menu, preferência de contraste, instalação e conexão.
- `sw.js` — cache offline após primeira visita.
- `manifest.webmanifest` — metadados instaláveis.
- `assets/` — imagens de referência fornecidas pelo usuário, mockups neutros gerados para o template, artes vetoriais do protótipo e ícone.

Fontes de pesquisa e escopo editorial constam em [`docs/PLANO_DO_SITE.md`](docs/PLANO_DO_SITE.md). O protótipo é conceitual; identidade e conteúdo final dependem da aprovação do criador.
