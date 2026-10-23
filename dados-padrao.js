/* =====================================================================
   Casa Harmonia Decorações · Dados padrão do site
   Este arquivo guarda o conteúdo original do site. O site (index.html)
   e o painel (admin.html) leem daqui. As alterações feitas no painel
   ficam salvas por cima destes valores e podem ser publicadas no
   arquivo dados.json.
   ===================================================================== */
window.CH_PADRAO = {
  versao: 1,

  config: {
    aprovacao: 'automatica',          // 'automatica' ou 'manual'
    nomeEmpresa: 'Casa Harmonia Decorações',
    senhaAdmin: 'admin123'
  },

  contato: {
    whatsapp_numero: '5514996058087',
    whatsapp_txt: '(14) 99605-8087',
    telefone_numero: '551434254843',
    telefone_txt: '(14) 3425-4843',
    telefones_txt: '(14) 3425-4843 · (14) 3425-3931',
    instagram_url: 'https://www.instagram.com/casaharmoniadecor/',
    instagram_txt: '@casaharmoniadecor',
    endereco_txt: 'Av. Yusaburo Sasazaki, 1870 · Distrito Industrial · Marília/SP · CEP 17512-031',
    mapa_busca: 'Av. Yusaburo Sasazaki, 1870, Marília - SP',
    jota_url: 'https://www.jotasolutions.com.br'
  },

  cores: {
    pri: '#EE8471',
    priEsc: '#D4614C',
    priClaro: '#FCE6DF',
    creme: '#FFF8F3',
    ouro: '#C8A165',
    rodape: '#3A2329'
  },

  logo: '',

  /* Fotos demonstrativas: u = foto do Unsplash, k = palavras-chave de reserva */
  fotos: {
    hero:{u:'1586023492125-27b2c045efd7',k:'livingroom,interior',nome:'Banner da página inicial'},
    sala:{u:'1618221195710-dd6b41faaea6',k:'interior,design',nome:'Ambiente: sala 1'},
    sala2:{u:'1513694203232-719a280e022f',k:'livingroom',nome:'Ambiente: sala 2'},
    sala3:{u:'1600210492486-724fe5c67fb0',k:'interior',nome:'Ambiente: sala 3'},
    sala4:{u:'1616486338812-3dadae4b4ace',k:'livingroom',nome:'Ambiente: sala 4 / capa do vídeo'},
    quarto:{u:'1505691938895-1758d7feb511',k:'bedroom',nome:'Ambiente: quarto 1'},
    quarto2:{u:'1560448204-e02f11c3d0e2',k:'bedroom',nome:'Ambiente: quarto 2'},
    cozinha:{u:'1556909114-f6e7ad7d3136',k:'kitchen',nome:'Ambiente: cozinha'},
    escritorio:{u:'1497366216548-37526070297c',k:'office',nome:'Ambiente: escritório'},
    loja:{u:'1524758631624-e2822e304c36',k:'office,plants',nome:'Ambiente: espaço comercial'},
    papel:{k:'wallpaper,pattern',nome:'Produto: papel de parede'},
    papel2:{k:'wallpaper,floral',nome:'Produto: papel de parede floral'},
    marmore:{k:'marble,texture',nome:'Produto: mármore e granito'},
    pvc:{k:'brickwall',nome:'Produto: placa de PVC'},
    adesivo:{k:'wallsticker,wall',nome:'Produto: adesivo decorativo'},
    vidro:{k:'stainedglass',nome:'Produto: adesivo para vidro'},
    quadro:{k:'wallart,frame',nome:'Produto: quadros e painéis'},
    etiqueta:{k:'sticker,label',nome:'Produto: etiquetas'},
    refletivo:{k:'reflective,sign',nome:'Produto: refletivos'},
    resinado:{k:'sticker,logo',nome:'Produto: resinados'},
    nautico:{k:'boat,yacht',nome:'Produto: náutico'},
    impressao:{k:'printing,printer',nome:'Impressão digital'},
    equipe:{k:'team,workshop',nome:'Foto da equipe'},
    fabrica:{k:'printing,factory',nome:'Foto da produção / fachada'},
    entrega:{k:'package,delivery',nome:'Revenda: pacotes / envio'}
  },

  /* Lista da página Produtos */
  servicos: [
    {foto:'papel',nome:'Papéis de Parede',descricao:'Estampas exclusivas, texturas e medidas sob encomenda.'},
    {foto:'pvc',nome:'Placas Decorativas de PVC Adesivadas',descricao:'Leves, resistentes e fáceis de aplicar.'},
    {foto:'adesivo',nome:'Adesivos Decorativos Personalizados',descricao:'Para paredes, móveis, portas e cozinhas.'},
    {foto:'vidro',nome:'Adesivos para Vidros e Vitrais',descricao:'Privacidade e decoração com efeito jateado ou vitral.'},
    {foto:'quadro',nome:'Quadros e Painéis Decorativos',descricao:'Peças exclusivas para destacar qualquer ambiente.'},
    {foto:'nautico',nome:'Adesivos Náuticos e Embarcações',descricao:'Personalização de embarcações com alta resistência.'},
    {foto:'marmore',nome:'Mármores e Granitos Adesivos',descricao:'O visual sofisticado da pedra, sem obra.'},
    {foto:'etiqueta',nome:'Etiquetas, Refletivos e Resinados',descricao:'Acabamento em relevo, brilho e durabilidade.'},
    {foto:'impressao',nome:'Impressão Digital e Projetos Personalizados',descricao:'Do seu projeto à peça pronta.'}
  ],

  categorias: ['Adesivos Decorativos','Adesivos Náuticos','Etiquetas e Resinados','Mármores e Granitos','Papéis de Parede','Placas de PVC','Quadros e Painéis','Refletivos','Vidros e Vitrais'],
  ambientes: ['Sala','Quarto','Cozinha','Banheiro','Comercial','Náutico'],

  /* Colunas da planilha (exportar / importar) */
  colunas: ['sku','nome','categoria','ambiente','descricao','material','acabamento','ncm','largura_cm','altura_cm','espessura_mm','peso_g','prazo_producao_dias','preco_revenda','preco_sugerido','imagem','ativo'],
  rotulos: {sku:'Código (SKU)',nome:'Nome',categoria:'Categoria',ambiente:'Ambiente indicado',descricao:'Descrição',material:'Material',acabamento:'Acabamento',ncm:'NCM',largura_cm:'Largura (cm)',altura_cm:'Altura / comprimento (cm)',espessura_mm:'Espessura (mm)',peso_g:'Peso (g)',prazo_producao_dias:'Prazo de produção (dias úteis)',preco_revenda:'Preço para revenda (R$)',preco_sugerido:'Preço sugerido de venda (R$)',imagem:'Imagem',ativo:'Ativo (sim/não)'},

  produtos: [
    {sku:'CH-PP-001',nome:'Papel de Parede Floral Rosé',categoria:'Papéis de Parede',ambiente:'Quarto',descricao:'Papel de parede vinílico com estampa floral em tons rosé. Lavável e fácil de aplicar.',material:'Vinil autoadesivo',acabamento:'Fosco',ncm:'4814.90.00',largura_cm:'53',altura_cm:'1000',espessura_mm:'0.15',peso_g:'900',prazo_producao_dias:'3',preco_revenda:'89.90',preco_sugerido:'159.90',imagem:'papel2',ativo:'sim'},
    {sku:'CH-PP-002',nome:'Papel de Parede Linho Natural',categoria:'Papéis de Parede',ambiente:'Sala',descricao:'Textura que imita linho, ideal para salas e quartos com estilo aconchegante.',material:'Vinil autoadesivo',acabamento:'Texturizado',ncm:'4814.90.00',largura_cm:'53',altura_cm:'1000',espessura_mm:'0.15',peso_g:'900',prazo_producao_dias:'3',preco_revenda:'94.90',preco_sugerido:'169.90',imagem:'papel',ativo:'sim'},
    {sku:'CH-PP-003',nome:'Papel de Parede Geométrico Off-White',categoria:'Papéis de Parede',ambiente:'Comercial',descricao:'Estampa geométrica discreta para escritórios, lojas e consultórios.',material:'Vinil autoadesivo',acabamento:'Acetinado',ncm:'4814.90.00',largura_cm:'53',altura_cm:'1000',espessura_mm:'0.15',peso_g:'900',prazo_producao_dias:'3',preco_revenda:'92.90',preco_sugerido:'164.90',imagem:'sala3',ativo:'sim'},
    {sku:'CH-MG-001',nome:'Adesivo Mármore Carrara',categoria:'Mármores e Granitos',ambiente:'Cozinha',descricao:'Revestimento adesivo com efeito mármore para bancadas, mesas e móveis.',material:'Vinil laminado',acabamento:'Brilho',ncm:'3919.90.00',largura_cm:'61',altura_cm:'200',espessura_mm:'0.10',peso_g:'350',prazo_producao_dias:'2',preco_revenda:'69.90',preco_sugerido:'119.90',imagem:'marmore',ativo:'sim'},
    {sku:'CH-MG-002',nome:'Adesivo Granito Preto São Gabriel',categoria:'Mármores e Granitos',ambiente:'Cozinha',descricao:'Efeito granito escuro para renovar bancadas sem obra.',material:'Vinil laminado',acabamento:'Brilho',ncm:'3919.90.00',largura_cm:'61',altura_cm:'200',espessura_mm:'0.10',peso_g:'350',prazo_producao_dias:'2',preco_revenda:'72.90',preco_sugerido:'124.90',imagem:'cozinha',ativo:'sim'},
    {sku:'CH-PV-001',nome:'Placa PVC Adesivada Tijolinho',categoria:'Placas de PVC',ambiente:'Sala',descricao:'Placa decorativa leve com efeito tijolinho, autoadesiva.',material:'PVC expandido',acabamento:'Fosco',ncm:'3921.90.19',largura_cm:'30',altura_cm:'30',espessura_mm:'3',peso_g:'180',prazo_producao_dias:'4',preco_revenda:'24.90',preco_sugerido:'44.90',imagem:'pvc',ativo:'sim'},
    {sku:'CH-AD-001',nome:'Adesivo de Parede Frase Personalizada',categoria:'Adesivos Decorativos',ambiente:'Sala',descricao:'Adesivo de recorte em vinil, com frase e cor à escolha do cliente.',material:'Vinil de recorte',acabamento:'Fosco',ncm:'3919.90.00',largura_cm:'90',altura_cm:'30',espessura_mm:'0.08',peso_g:'120',prazo_producao_dias:'2',preco_revenda:'39.90',preco_sugerido:'69.90',imagem:'adesivo',ativo:'sim'},
    {sku:'CH-AD-002',nome:'Adesivo Infantil Nuvens e Estrelas',categoria:'Adesivos Decorativos',ambiente:'Quarto',descricao:'Kit de adesivos para quarto infantil, com cores personalizáveis.',material:'Vinil de recorte',acabamento:'Fosco',ncm:'3919.90.00',largura_cm:'100',altura_cm:'60',espessura_mm:'0.08',peso_g:'150',prazo_producao_dias:'2',preco_revenda:'44.90',preco_sugerido:'79.90',imagem:'quarto2',ativo:'sim'},
    {sku:'CH-VD-001',nome:'Adesivo Jateado para Vidro',categoria:'Vidros e Vitrais',ambiente:'Banheiro',descricao:'Película com efeito jateado para privacidade em boxes, portas e janelas.',material:'Vinil jateado',acabamento:'Translúcido',ncm:'3919.90.00',largura_cm:'100',altura_cm:'100',espessura_mm:'0.08',peso_g:'200',prazo_producao_dias:'3',preco_revenda:'',preco_sugerido:'',imagem:'vidro',ativo:'sim'},
    {sku:'CH-QD-001',nome:'Quadro Decorativo Abstrato',categoria:'Quadros e Painéis',ambiente:'Sala',descricao:'Quadro em MDF com impressão digital de alta definição.',material:'MDF 3 mm',acabamento:'Acetinado',ncm:'4421.99.00',largura_cm:'40',altura_cm:'60',espessura_mm:'3',peso_g:'700',prazo_producao_dias:'5',preco_revenda:'119.90',preco_sugerido:'199.90',imagem:'quadro',ativo:'sim'},
    {sku:'CH-QD-002',nome:'Painel Decorativo Paisagem',categoria:'Quadros e Painéis',ambiente:'Comercial',descricao:'Painel de grande formato para recepções e espaços comerciais.',material:'MDF 6 mm',acabamento:'Fosco',ncm:'4421.99.00',largura_cm:'120',altura_cm:'80',espessura_mm:'6',peso_g:'4200',prazo_producao_dias:'7',preco_revenda:'',preco_sugerido:'',imagem:'sala4',ativo:'sim'},
    {sku:'CH-RS-001',nome:'Etiqueta Resinada Personalizada',categoria:'Etiquetas e Resinados',ambiente:'Comercial',descricao:'Etiqueta com resina em relevo e brilho, alta durabilidade. Pedido mínimo sob consulta.',material:'Vinil + resina poliuretano',acabamento:'Resinado brilho',ncm:'3919.90.00',largura_cm:'5',altura_cm:'5',espessura_mm:'2',peso_g:'5',prazo_producao_dias:'5',preco_revenda:'2.90',preco_sugerido:'5.90',imagem:'resinado',ativo:'sim'},
    {sku:'CH-RF-001',nome:'Adesivo Refletivo Personalizado',categoria:'Refletivos',ambiente:'Comercial',descricao:'Adesivo refletivo para sinalização e identificação com alta visibilidade.',material:'Vinil refletivo',acabamento:'Refletivo',ncm:'3919.90.00',largura_cm:'30',altura_cm:'10',espessura_mm:'0.12',peso_g:'20',prazo_producao_dias:'4',preco_revenda:'14.90',preco_sugerido:'27.90',imagem:'refletivo',ativo:'sim'},
    {sku:'CH-NA-001',nome:'Kit Adesivo Náutico',categoria:'Adesivos Náuticos',ambiente:'Náutico',descricao:'Adesivos resistentes à água salgada e ao sol para embarcações.',material:'Vinil náutico',acabamento:'Brilho UV',ncm:'3919.90.00',largura_cm:'120',altura_cm:'40',espessura_mm:'0.10',peso_g:'250',prazo_producao_dias:'5',preco_revenda:'',preco_sugerido:'',imagem:'nautico',ativo:'sim'}
  ],

  /* Textos e seções editáveis (gerado a partir do site) */
  paginas: {"inicio": "Início", "sobre": "Sobre", "produtos": "Produtos", "contato": "Contato", "revendedor": "Seja um Revendedor", "geral": "Rodapé"},
  secoes: [{"key": "inicio-1", "page": "inicio", "label": "Banner: Transforme seus espaços, inspire sua vida!"}, {"key": "inicio-2", "page": "inicio", "label": "Mais de 30 anos levando harmonia para cada espaço"}, {"key": "inicio-3", "page": "inicio", "label": "Soluções para cada ambiente"}, {"key": "inicio-4", "page": "inicio", "label": "Faixa: Seja um Revendedor"}, {"key": "inicio-5", "page": "inicio", "label": "Projetos realizados"}, {"key": "inicio-6", "page": "inicio", "label": "Veja como funciona"}, {"key": "inicio-7", "page": "inicio", "label": "Atendimentos especiais"}, {"key": "inicio-8", "page": "inicio", "label": "Quer renovar seu ambiente?"}, {"key": "sobre-1", "page": "sobre", "label": "Banner: Sobre a Casa Harmonia Decorações"}, {"key": "sobre-2", "page": "sobre", "label": "Tradição desde 1993"}, {"key": "sobre-3", "page": "sobre", "label": "Missão, Visão e Valores"}, {"key": "sobre-4", "page": "sobre", "label": "O que nos destaca"}, {"key": "sobre-5", "page": "sobre", "label": "Pessoas que transformam ideias"}, {"key": "sobre-6", "page": "sobre", "label": "Nossa estrutura e projetos"}, {"key": "sobre-7", "page": "sobre", "label": "Onde estamos"}, {"key": "produtos-1", "page": "produtos", "label": "Banner: Soluções decorativas para cada ambiente"}, {"key": "produtos-2", "page": "produtos", "label": "Lista de produtos e serviços"}, {"key": "produtos-3", "page": "produtos", "label": "Por que escolher a Casa Harmonia"}, {"key": "produtos-4", "page": "produtos", "label": "Quer revender nossos produtos?"}, {"key": "contato-1", "page": "contato", "label": "Banner: Vamos transformar seu espaço juntos!"}, {"key": "contato-2", "page": "contato", "label": "Envie sua mensagem"}, {"key": "contato-3", "page": "contato", "label": "Como chegar"}, {"key": "contato-4", "page": "contato", "label": "Quer renovar seu ambiente com beleza, criatividade e personalidade?"}, {"key": "revendedor-1", "page": "revendedor", "label": "Banner: Venda nossos produtos sem ter estoque"}, {"key": "revendedor-2", "page": "revendedor", "label": "Você vende. Nós produzimos e entregamos."}, {"key": "revendedor-3", "page": "revendedor", "label": "Por que revender Casa Harmonia"}, {"key": "revendedor-4", "page": "revendedor", "label": "Catálogo do revendedor", "fixa": true}, {"key": "revendedor-5", "page": "revendedor", "label": "Exporte e importe produtos"}, {"key": "revendedor-6", "page": "revendedor", "label": "Perguntas frequentes"}, {"key": "geral-rodape", "page": "geral", "label": "Rodapé", "fixa": true}, {"key": "revendedor-cadastro", "page": "revendedor", "label": "Janela de cadastro do revendedor", "fixa": true}],
  textos: [
{
"key": "inicio-1.1",
"page": "inicio",
"sec": "inicio-1",
"label": "Etiqueta",
"mode": "text",
"valor": "Desde 1993 · +30 anos de experiência"
},
{
"key": "inicio-1.2",
"page": "inicio",
"sec": "inicio-1",
"label": "Título principal",
"mode": "html",
"valor": "Transforme seus espaços, <span>inspire sua vida!</span>"
},
{
"key": "inicio-1.3",
"page": "inicio",
"sec": "inicio-1",
"label": "Texto",
"mode": "text",
"valor": "Decoração, beleza e personalidade para cada ambiente."
},
{
"key": "inicio-1.4",
"page": "inicio",
"sec": "inicio-1",
"label": "Texto",
"mode": "text",
"valor": "Na Casa Harmonia, você encontra papéis de parede, revestimentos adesivos e soluções decorativas que transformam seus espaços com praticidade, qualidade e estilo."
},
{
"key": "inicio-1.5",
"page": "inicio",
"sec": "inicio-1",
"label": "Texto do botão",
"mode": "text",
"valor": "Fale Conosco"
},
{
"key": "inicio-1.6",
"page": "inicio",
"sec": "inicio-1",
"label": "Texto do botão",
"mode": "text",
"valor": "Solicite uma amostra"
},
{
"key": "inicio-1.7",
"page": "inicio",
"sec": "inicio-1",
"label": "Texto",
"mode": "text",
"valor": "100% personalizável"
},
{
"key": "inicio-1.8",
"page": "inicio",
"sec": "inicio-1",
"label": "Texto",
"mode": "text",
"valor": "Produção própria"
},
{
"key": "inicio-1.9",
"page": "inicio",
"sec": "inicio-1",
"label": "Texto",
"mode": "text",
"valor": "ISO 9001:2015"
},
{
"key": "inicio-2.1",
"page": "inicio",
"sec": "inicio-2",
"label": "Etiqueta",
"mode": "text",
"valor": "Quem somos"
},
{
"key": "inicio-2.2",
"page": "inicio",
"sec": "inicio-2",
"label": "Título",
"mode": "text",
"valor": "Mais de 30 anos levando harmonia para cada espaço"
},
{
"key": "inicio-2.3",
"page": "inicio",
"sec": "inicio-2",
"label": "Texto",
"mode": "text",
"valor": "A Casa Harmonia Decorações atua há mais de 30 anos no mercado de adesivos e soluções decorativas, unindo experiência, qualidade e inovação. Somos especializados em papéis de parede, revestimentos adesivos e produtos personalizados que transformam ambientes com praticidade, beleza e criatividade. Nossa missão é levar harmonia, estilo e personalidade para cada espaço."
},
{
"key": "inicio-2.4",
"page": "inicio",
"sec": "inicio-2",
"label": "Destaque",
"mode": "text",
"valor": "Foco em personalização: tudo pode ser feito sob medida para o seu ambiente."
},
{
"key": "inicio-2.5",
"page": "inicio",
"sec": "inicio-2",
"label": "Destaque",
"mode": "text",
"valor": "30+"
},
{
"key": "inicio-2.6",
"page": "inicio",
"sec": "inicio-2",
"label": "Texto",
"mode": "text",
"valor": "anos de mercado"
},
{
"key": "inicio-2.7",
"page": "inicio",
"sec": "inicio-2",
"label": "Destaque",
"mode": "text",
"valor": "100%"
},
{
"key": "inicio-2.8",
"page": "inicio",
"sec": "inicio-2",
"label": "Texto",
"mode": "text",
"valor": "produção própria"
},
{
"key": "inicio-2.9",
"page": "inicio",
"sec": "inicio-2",
"label": "Destaque",
"mode": "text",
"valor": "ISO"
},
{
"key": "inicio-2.10",
"page": "inicio",
"sec": "inicio-2",
"label": "Texto",
"mode": "text",
"valor": "9001:2015"
},
{
"key": "inicio-2.11",
"page": "inicio",
"sec": "inicio-2",
"label": "Texto do botão",
"mode": "text",
"valor": "Conheça nossa história"
},
{
"key": "inicio-3.1",
"page": "inicio",
"sec": "inicio-3",
"label": "Etiqueta",
"mode": "text",
"valor": "Produtos em destaque"
},
{
"key": "inicio-3.2",
"page": "inicio",
"sec": "inicio-3",
"label": "Título",
"mode": "text",
"valor": "Soluções para cada ambiente"
},
{
"key": "inicio-3.3",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto",
"mode": "text",
"valor": "Tudo pode ser personalizado: cores, medidas, estampas e acabamentos."
},
{
"key": "inicio-3.4",
"page": "inicio",
"sec": "inicio-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Papel de Parede"
},
{
"key": "inicio-3.5",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto",
"mode": "text",
"valor": "Estampas exclusivas, texturas e medidas sob encomenda."
},
{
"key": "inicio-3.6",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto do botão",
"mode": "text",
"valor": "Saiba mais"
},
{
"key": "inicio-3.7",
"page": "inicio",
"sec": "inicio-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Etiquetas Personalizadas"
},
{
"key": "inicio-3.8",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto",
"mode": "text",
"valor": "Sua marca com acabamento profissional."
},
{
"key": "inicio-3.9",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto do botão",
"mode": "text",
"valor": "Saiba mais"
},
{
"key": "inicio-3.10",
"page": "inicio",
"sec": "inicio-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Mármores e Granitos"
},
{
"key": "inicio-3.11",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto",
"mode": "text",
"valor": "O visual sofisticado da pedra, sem obra."
},
{
"key": "inicio-3.12",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto do botão",
"mode": "text",
"valor": "Saiba mais"
},
{
"key": "inicio-3.13",
"page": "inicio",
"sec": "inicio-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Refletivos"
},
{
"key": "inicio-3.14",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto",
"mode": "text",
"valor": "Visibilidade e segurança com acabamento durável."
},
{
"key": "inicio-3.15",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto do botão",
"mode": "text",
"valor": "Saiba mais"
},
{
"key": "inicio-3.16",
"page": "inicio",
"sec": "inicio-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Resinados"
},
{
"key": "inicio-3.17",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto",
"mode": "text",
"valor": "Relevo e brilho que valorizam sua marca."
},
{
"key": "inicio-3.18",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto do botão",
"mode": "text",
"valor": "Saiba mais"
},
{
"key": "inicio-3.19",
"page": "inicio",
"sec": "inicio-3",
"label": "Texto do botão",
"mode": "text",
"valor": "Ver todos os produtos"
},
{
"key": "inicio-4.1",
"page": "inicio",
"sec": "inicio-4",
"label": "Etiqueta",
"mode": "text",
"valor": "Novo · Seja um Revendedor"
},
{
"key": "inicio-4.2",
"page": "inicio",
"sec": "inicio-4",
"label": "Título",
"mode": "html",
"valor": "Venda nossos produtos <span>sem ter estoque</span>"
},
{
"key": "inicio-4.3",
"page": "inicio",
"sec": "inicio-4",
"label": "Texto",
"mode": "text",
"valor": "Você anuncia na sua loja, nós produzimos e enviamos direto para o seu cliente, em todo o Brasil."
},
{
"key": "inicio-4.4",
"page": "inicio",
"sec": "inicio-4",
"label": "Item de lista",
"mode": "text",
"valor": "Sem investimento em estoque"
},
{
"key": "inicio-4.5",
"page": "inicio",
"sec": "inicio-4",
"label": "Item de lista",
"mode": "text",
"valor": "Catálogo com fotos, NCM e medidas prontas"
},
{
"key": "inicio-4.6",
"page": "inicio",
"sec": "inicio-4",
"label": "Item de lista",
"mode": "text",
"valor": "Planilha para importar tudo na sua loja"
},
{
"key": "inicio-4.7",
"page": "inicio",
"sec": "inicio-4",
"label": "Texto do botão",
"mode": "text",
"valor": "Quero ser revendedor"
},
{
"key": "inicio-5.1",
"page": "inicio",
"sec": "inicio-5",
"label": "Etiqueta",
"mode": "text",
"valor": "Galeria"
},
{
"key": "inicio-5.2",
"page": "inicio",
"sec": "inicio-5",
"label": "Título",
"mode": "text",
"valor": "Projetos realizados"
},
{
"key": "inicio-5.3",
"page": "inicio",
"sec": "inicio-5",
"label": "Texto",
"mode": "text",
"valor": "Ambientes reais transformados com nossas soluções."
},
{
"key": "inicio-6.1",
"page": "inicio",
"sec": "inicio-6",
"label": "Etiqueta",
"mode": "text",
"valor": "Vídeo"
},
{
"key": "inicio-6.2",
"page": "inicio",
"sec": "inicio-6",
"label": "Título",
"mode": "text",
"valor": "Veja como funciona"
},
{
"key": "inicio-6.3",
"page": "inicio",
"sec": "inicio-6",
"label": "Texto",
"mode": "text",
"valor": "Aplicação prática, rápida e sem grandes reformas."
},
{
"key": "inicio-7.1",
"page": "inicio",
"sec": "inicio-7",
"label": "Etiqueta",
"mode": "text",
"valor": "Quem confia na gente"
},
{
"key": "inicio-7.2",
"page": "inicio",
"sec": "inicio-7",
"label": "Título",
"mode": "text",
"valor": "Atendimentos especiais"
},
{
"key": "inicio-7.3",
"page": "inicio",
"sec": "inicio-7",
"label": "Texto",
"mode": "text",
"valor": "Já atendemos diversos famosos, empresas e clientes em todo o Brasil."
},
{
"key": "inicio-8.1",
"page": "inicio",
"sec": "inicio-8",
"label": "Título",
"mode": "text",
"valor": "Quer renovar seu ambiente?"
},
{
"key": "inicio-8.2",
"page": "inicio",
"sec": "inicio-8",
"label": "Texto",
"mode": "text",
"valor": "Nossa equipe está pronta para ajudar você a encontrar a solução ideal. Entre em contato, tire suas dúvidas e solicite um orçamento personalizado."
},
{
"key": "inicio-8.3",
"page": "inicio",
"sec": "inicio-8",
"label": "Texto do botão",
"mode": "text",
"valor": "Entrar em contato"
},
{
"key": "sobre-1.1",
"page": "sobre",
"sec": "sobre-1",
"label": "Etiqueta",
"mode": "text",
"valor": "Sobre nós"
},
{
"key": "sobre-1.2",
"page": "sobre",
"sec": "sobre-1",
"label": "Título principal",
"mode": "text",
"valor": "Sobre a Casa Harmonia Decorações"
},
{
"key": "sobre-1.3",
"page": "sobre",
"sec": "sobre-1",
"label": "Texto",
"mode": "text",
"valor": "Há mais de 30 anos transformando ambientes e realizando ideias."
},
{
"key": "sobre-2.1",
"page": "sobre",
"sec": "sobre-2",
"label": "Etiqueta",
"mode": "text",
"valor": "Nossa história"
},
{
"key": "sobre-2.2",
"page": "sobre",
"sec": "sobre-2",
"label": "Título",
"mode": "text",
"valor": "Tradição desde 1993"
},
{
"key": "sobre-2.3",
"page": "sobre",
"sec": "sobre-2",
"label": "Texto",
"mode": "text",
"valor": "A Casa Harmonia Decorações nasceu da experiência e tradição de uma empresa que atua desde 1993 no segmento de adesivos e soluções personalizadas."
},
{
"key": "sobre-2.4",
"page": "sobre",
"sec": "sobre-2",
"label": "Texto",
"mode": "text",
"valor": "Ao longo dessa trajetória, evoluímos constantemente, acompanhando as tendências do mercado e investindo em tecnologia, qualidade e inovação. Hoje, oferecemos uma ampla variedade de produtos, como papéis de parede, revestimentos adesivos, adesivos decorativos, placas decorativas e soluções personalizadas para ambientes residenciais e comerciais."
},
{
"key": "sobre-2.5",
"page": "sobre",
"sec": "sobre-2",
"label": "Texto",
"mode": "text",
"valor": "Nossa paixão é transformar espaços, oferecendo produtos que unem beleza, praticidade e personalidade."
},
{
"key": "sobre-2.6",
"page": "sobre",
"sec": "sobre-2",
"label": "Destaque",
"mode": "text",
"valor": "Já realizamos diversos atendimentos para famosos."
},
{
"key": "sobre-2.7",
"page": "sobre",
"sec": "sobre-2",
"label": "Destaque",
"mode": "text",
"valor": "1993"
},
{
"key": "sobre-2.8",
"page": "sobre",
"sec": "sobre-2",
"label": "Texto",
"mode": "text",
"valor": "Início no segmento de adesivos"
},
{
"key": "sobre-2.9",
"page": "sobre",
"sec": "sobre-2",
"label": "Destaque",
"mode": "text",
"valor": "ISO 9001"
},
{
"key": "sobre-2.10",
"page": "sobre",
"sec": "sobre-2",
"label": "Texto",
"mode": "text",
"valor": "Qualidade certificada"
},
{
"key": "sobre-2.11",
"page": "sobre",
"sec": "sobre-2",
"label": "Destaque",
"mode": "text",
"valor": "Hoje"
},
{
"key": "sobre-2.12",
"page": "sobre",
"sec": "sobre-2",
"label": "Texto",
"mode": "text",
"valor": "Linha completa de decoração"
},
{
"key": "sobre-3.1",
"page": "sobre",
"sec": "sobre-3",
"label": "Etiqueta",
"mode": "text",
"valor": "Propósito"
},
{
"key": "sobre-3.2",
"page": "sobre",
"sec": "sobre-3",
"label": "Título",
"mode": "text",
"valor": "Missão, Visão e Valores"
},
{
"key": "sobre-3.3",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Missão"
},
{
"key": "sobre-3.4",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Transformar ambientes por meio de soluções decorativas criativas, acessíveis e de qualidade, proporcionando beleza, conforto e satisfação aos nossos clientes."
},
{
"key": "sobre-3.5",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Visão"
},
{
"key": "sobre-3.6",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Ser referência nacional em adesivos e decoração, reconhecida pela inovação, excelência dos produtos, confiança e compromisso com nossos clientes."
},
{
"key": "sobre-3.7",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Qualidade"
},
{
"key": "sobre-3.8",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Compromisso com materiais, acabamentos e produtos de excelência."
},
{
"key": "sobre-3.9",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Inovação"
},
{
"key": "sobre-3.10",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Busca constante por novas tendências, tecnologias e soluções."
},
{
"key": "sobre-3.11",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Comprometimento"
},
{
"key": "sobre-3.12",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Respeito, responsabilidade e dedicação em cada pedido."
},
{
"key": "sobre-3.13",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Criatividade"
},
{
"key": "sobre-3.14",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Soluções que valorizam a personalidade de cada ambiente."
},
{
"key": "sobre-3.15",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Transparência"
},
{
"key": "sobre-3.16",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Relacionamentos baseados na honestidade e confiança."
},
{
"key": "sobre-3.17",
"page": "sobre",
"sec": "sobre-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Satisfação do cliente"
},
{
"key": "sobre-3.18",
"page": "sobre",
"sec": "sobre-3",
"label": "Texto",
"mode": "text",
"valor": "Atendimento próximo, personalizado e focado nas necessidades de cada pessoa."
},
{
"key": "sobre-4.1",
"page": "sobre",
"sec": "sobre-4",
"label": "Etiqueta",
"mode": "text",
"valor": "Diferenciais"
},
{
"key": "sobre-4.2",
"page": "sobre",
"sec": "sobre-4",
"label": "Título",
"mode": "text",
"valor": "O que nos destaca"
},
{
"key": "sobre-4.3",
"page": "sobre",
"sec": "sobre-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Mais de 30 anos de experiência"
},
{
"key": "sobre-4.4",
"page": "sobre",
"sec": "sobre-4",
"label": "Texto",
"mode": "text",
"valor": "Tradição e conhecimento no segmento de adesivos e soluções decorativas."
},
{
"key": "sobre-4.5",
"page": "sobre",
"sec": "sobre-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Produção própria e personalizada"
},
{
"key": "sobre-4.6",
"page": "sobre",
"sec": "sobre-4",
"label": "Texto",
"mode": "text",
"valor": "Flexibilidade para desenvolver produtos que atendam a diferentes estilos, projetos e necessidades."
},
{
"key": "sobre-4.7",
"page": "sobre",
"sec": "sobre-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Qualidade e tecnologia"
},
{
"key": "sobre-4.8",
"page": "sobre",
"sec": "sobre-4",
"label": "Texto",
"mode": "text",
"valor": "Impressão com cores vivas, definição e excelente acabamento. Certificação ISO 9001:2015."
},
{
"key": "sobre-4.9",
"page": "sobre",
"sec": "sobre-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Variedade de produtos"
},
{
"key": "sobre-4.10",
"page": "sobre",
"sec": "sobre-4",
"label": "Texto",
"mode": "text",
"valor": "Soluções para paredes, móveis, portas, cozinhas, quartos, espaços comerciais e outros ambientes."
},
{
"key": "sobre-4.11",
"page": "sobre",
"sec": "sobre-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Praticidade e versatilidade"
},
{
"key": "sobre-4.12",
"page": "sobre",
"sec": "sobre-4",
"label": "Texto",
"mode": "text",
"valor": "Renove a decoração sem a necessidade de grandes reformas."
},
{
"key": "sobre-4.13",
"page": "sobre",
"sec": "sobre-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Atendimento humanizado"
},
{
"key": "sobre-4.14",
"page": "sobre",
"sec": "sobre-4",
"label": "Texto",
"mode": "text",
"valor": "Cada cliente é único: atenção, confiança e cuidado em todas as etapas da compra."
},
{
"key": "sobre-5.1",
"page": "sobre",
"sec": "sobre-5",
"label": "Etiqueta",
"mode": "text",
"valor": "Equipe"
},
{
"key": "sobre-5.2",
"page": "sobre",
"sec": "sobre-5",
"label": "Título",
"mode": "text",
"valor": "Pessoas que transformam ideias"
},
{
"key": "sobre-5.3",
"page": "sobre",
"sec": "sobre-5",
"label": "Texto",
"mode": "text",
"valor": "Por trás de cada produto existe uma equipe comprometida com a qualidade, a criatividade e a satisfação dos nossos clientes."
},
{
"key": "sobre-5.4",
"page": "sobre",
"sec": "sobre-5",
"label": "Texto",
"mode": "text",
"valor": "Contamos com profissionais nas áreas de criação, produção, impressão, acabamento, vendas e atendimento, trabalhando juntos para transformar ideias em produtos que fazem a diferença."
},
{
"key": "sobre-5.5",
"page": "sobre",
"sec": "sobre-5",
"label": "Texto",
"mode": "text",
"valor": "Nossa equipe compartilha o mesmo propósito: oferecer soluções decorativas com dedicação, responsabilidade e atenção aos detalhes."
},
{
"key": "sobre-6.1",
"page": "sobre",
"sec": "sobre-6",
"label": "Etiqueta",
"mode": "text",
"valor": "Galeria"
},
{
"key": "sobre-6.2",
"page": "sobre",
"sec": "sobre-6",
"label": "Título",
"mode": "text",
"valor": "Nossa estrutura e projetos"
},
{
"key": "sobre-7.1",
"page": "sobre",
"sec": "sobre-7",
"label": "Etiqueta",
"mode": "text",
"valor": "Localização"
},
{
"key": "sobre-7.2",
"page": "sobre",
"sec": "sobre-7",
"label": "Título",
"mode": "text",
"valor": "Onde estamos"
},
{
"key": "produtos-1.1",
"page": "produtos",
"sec": "produtos-1",
"label": "Etiqueta",
"mode": "text",
"valor": "Produtos e Serviços"
},
{
"key": "produtos-1.2",
"page": "produtos",
"sec": "produtos-1",
"label": "Título principal",
"mode": "text",
"valor": "Soluções decorativas para cada ambiente"
},
{
"key": "produtos-1.3",
"page": "produtos",
"sec": "produtos-1",
"label": "Texto",
"mode": "text",
"valor": "Tudo pode ser personalizado em tamanho, formato e estilo."
},
{
"key": "produtos-3.1",
"page": "produtos",
"sec": "produtos-3",
"label": "Etiqueta",
"mode": "text",
"valor": "Diferenciais"
},
{
"key": "produtos-3.2",
"page": "produtos",
"sec": "produtos-3",
"label": "Título",
"mode": "text",
"valor": "Por que escolher a Casa Harmonia"
},
{
"key": "produtos-3.3",
"page": "produtos",
"sec": "produtos-3",
"label": "Texto",
"mode": "text",
"valor": "Características presentes em todos os nossos produtos."
},
{
"key": "produtos-3.4",
"page": "produtos",
"sec": "produtos-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Experiência e tradição"
},
{
"key": "produtos-3.5",
"page": "produtos",
"sec": "produtos-3",
"label": "Texto",
"mode": "text",
"valor": "Mais de 30 anos de conhecimento no segmento de adesivos e soluções personalizadas."
},
{
"key": "produtos-3.6",
"page": "produtos",
"sec": "produtos-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Produção própria"
},
{
"key": "produtos-3.7",
"page": "produtos",
"sec": "produtos-3",
"label": "Texto",
"mode": "text",
"valor": "Maior flexibilidade para projetos em diferentes tamanhos, formatos e estilos."
},
{
"key": "produtos-3.8",
"page": "produtos",
"sec": "produtos-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Impressão de qualidade"
},
{
"key": "produtos-3.9",
"page": "produtos",
"sec": "produtos-3",
"label": "Texto",
"mode": "text",
"valor": "Impressão digital com boa definição, cores vivas e acabamento profissional."
},
{
"key": "produtos-3.10",
"page": "produtos",
"sec": "produtos-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Personalização"
},
{
"key": "produtos-3.11",
"page": "produtos",
"sec": "produtos-3",
"label": "Texto",
"mode": "text",
"valor": "Produtos adaptados às necessidades de cada cliente."
},
{
"key": "produtos-3.12",
"page": "produtos",
"sec": "produtos-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Variedade"
},
{
"key": "produtos-3.13",
"page": "produtos",
"sec": "produtos-3",
"label": "Texto",
"mode": "text",
"valor": "Amplo catálogo de produtos decorativos e soluções para diferentes ambientes."
},
{
"key": "produtos-3.14",
"page": "produtos",
"sec": "produtos-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Atendimento especializado"
},
{
"key": "produtos-3.15",
"page": "produtos",
"sec": "produtos-3",
"label": "Texto",
"mode": "text",
"valor": "Orientação na escolha de materiais, medidas e soluções adequadas."
},
{
"key": "produtos-4.1",
"page": "produtos",
"sec": "produtos-4",
"label": "Título",
"mode": "text",
"valor": "Quer revender nossos produtos?"
},
{
"key": "produtos-4.2",
"page": "produtos",
"sec": "produtos-4",
"label": "Texto",
"mode": "text",
"valor": "Tenha acesso ao catálogo completo com preços, fichas técnicas e planilha para importar na sua loja. Nós produzimos e enviamos direto para o seu cliente."
},
{
"key": "produtos-4.3",
"page": "produtos",
"sec": "produtos-4",
"label": "Texto do botão",
"mode": "text",
"valor": "Seja um Revendedor"
},
{
"key": "contato-1.1",
"page": "contato",
"sec": "contato-1",
"label": "Etiqueta",
"mode": "text",
"valor": "Contato"
},
{
"key": "contato-1.2",
"page": "contato",
"sec": "contato-1",
"label": "Título principal",
"mode": "text",
"valor": "Vamos transformar seu espaço juntos!"
},
{
"key": "contato-1.3",
"page": "contato",
"sec": "contato-1",
"label": "Texto",
"mode": "text",
"valor": "Fale com a nossa equipe e solicite um orçamento personalizado."
},
{
"key": "contato-2.1",
"page": "contato",
"sec": "contato-2",
"label": "Título",
"mode": "text",
"valor": "Envie sua mensagem"
},
{
"key": "contato-3.1",
"page": "contato",
"sec": "contato-3",
"label": "Etiqueta",
"mode": "text",
"valor": "Localização"
},
{
"key": "contato-3.2",
"page": "contato",
"sec": "contato-3",
"label": "Título",
"mode": "text",
"valor": "Como chegar"
},
{
"key": "contato-4.1",
"page": "contato",
"sec": "contato-4",
"label": "Título",
"mode": "text",
"valor": "Quer renovar seu ambiente com beleza, criatividade e personalidade?"
},
{
"key": "contato-4.2",
"page": "contato",
"sec": "contato-4",
"label": "Texto",
"mode": "text",
"valor": "Nossa equipe está pronta para ajudar você a encontrar a solução ideal. Entre em contato, tire suas dúvidas e solicite um orçamento personalizado. Vamos transformar seu espaço juntos!"
},
{
"key": "contato-4.3",
"page": "contato",
"sec": "contato-4",
"label": "Texto do botão",
"mode": "text",
"valor": "Entre em contato"
},
{
"key": "revendedor-1.1",
"page": "revendedor",
"sec": "revendedor-1",
"label": "Etiqueta",
"mode": "text",
"valor": "Seja um Revendedor"
},
{
"key": "revendedor-1.2",
"page": "revendedor",
"sec": "revendedor-1",
"label": "Título principal",
"mode": "text",
"valor": "Venda nossos produtos sem ter estoque"
},
{
"key": "revendedor-1.3",
"page": "revendedor",
"sec": "revendedor-1",
"label": "Texto",
"mode": "text",
"valor": "Você vende na sua loja, a Casa Harmonia produz e envia direto para o seu cliente, em todo o Brasil."
},
{
"key": "revendedor-1.4",
"page": "revendedor",
"sec": "revendedor-1",
"label": "Texto do botão",
"mode": "text",
"valor": "Ver catálogo"
},
{
"key": "revendedor-1.5",
"page": "revendedor",
"sec": "revendedor-1",
"label": "Texto do botão",
"mode": "text",
"valor": "Como funciona"
},
{
"key": "revendedor-2.1",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Etiqueta",
"mode": "text",
"valor": "O que é a revenda sem estoque?"
},
{
"key": "revendedor-2.2",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Título",
"mode": "text",
"valor": "Você vende. Nós produzimos e entregamos."
},
{
"key": "revendedor-2.3",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Texto",
"mode": "html",
"valor": "Nesse modelo, também chamado de <strong>dropshipping</strong>, você anuncia nossos produtos na sua loja virtual, marketplace ou redes sociais sem comprar nada antes. Quando o seu cliente compra, você repassa o pedido para nós e a gente cuida da produção e do envio."
},
{
"key": "revendedor-2.4",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Subtítulo",
"mode": "text",
"valor": "Seu cliente compra"
},
{
"key": "revendedor-2.5",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Texto",
"mode": "text",
"valor": "Ele faz o pedido na sua loja, pelo preço que você definiu."
},
{
"key": "revendedor-2.6",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Subtítulo",
"mode": "text",
"valor": "Você repassa o pedido"
},
{
"key": "revendedor-2.7",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Texto",
"mode": "text",
"valor": "Envia para a Casa Harmonia com os dados de entrega."
},
{
"key": "revendedor-2.8",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Subtítulo",
"mode": "text",
"valor": "Nós produzimos"
},
{
"key": "revendedor-2.9",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Texto",
"mode": "text",
"valor": "Produção própria, com o padrão de qualidade da marca."
},
{
"key": "revendedor-2.10",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Subtítulo",
"mode": "text",
"valor": "Enviamos ao cliente"
},
{
"key": "revendedor-2.11",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Texto",
"mode": "text",
"valor": "Entrega direto no endereço do seu cliente, em todo o Brasil."
},
{
"key": "revendedor-2.12",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Subtítulo",
"mode": "text",
"valor": "O que fica com você"
},
{
"key": "revendedor-2.13",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Item de lista",
"mode": "text",
"valor": "Divulgar e vender os produtos"
},
{
"key": "revendedor-2.14",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Item de lista",
"mode": "text",
"valor": "Definir o seu preço de venda"
},
{
"key": "revendedor-2.15",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Item de lista",
"mode": "text",
"valor": "Atender o seu cliente"
},
{
"key": "revendedor-2.16",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Subtítulo",
"mode": "text",
"valor": "O que fica com a Casa Harmonia"
},
{
"key": "revendedor-2.17",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Item de lista",
"mode": "text",
"valor": "Produção e personalização"
},
{
"key": "revendedor-2.18",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Item de lista",
"mode": "text",
"valor": "Embalagem e envio"
},
{
"key": "revendedor-2.19",
"page": "revendedor",
"sec": "revendedor-2",
"label": "Item de lista",
"mode": "text",
"valor": "Fotos, fichas técnicas e NCM"
},
{
"key": "revendedor-3.1",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Etiqueta",
"mode": "text",
"valor": "Vantagens"
},
{
"key": "revendedor-3.2",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Título",
"mode": "text",
"valor": "Por que revender Casa Harmonia"
},
{
"key": "revendedor-3.3",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Zero estoque"
},
{
"key": "revendedor-3.4",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Texto",
"mode": "text",
"valor": "Nada de capital parado: você só paga quando vende."
},
{
"key": "revendedor-3.5",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Fabricante direto"
},
{
"key": "revendedor-3.6",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Texto",
"mode": "text",
"valor": "Produção própria há mais de 30 anos, com certificação ISO 9001:2015."
},
{
"key": "revendedor-3.7",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Produtos personalizáveis"
},
{
"key": "revendedor-3.8",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Texto",
"mode": "text",
"valor": "Medidas e estampas sob encomenda: um diferencial para a sua loja."
},
{
"key": "revendedor-3.9",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Planilha pronta"
},
{
"key": "revendedor-3.10",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Texto",
"mode": "text",
"valor": "Exporte nome, descrição, NCM, medidas e preços para cadastrar tudo de uma vez."
},
{
"key": "revendedor-3.11",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Envio nacional"
},
{
"key": "revendedor-3.12",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Texto",
"mode": "text",
"valor": "Venda para clientes de qualquer estado do Brasil."
},
{
"key": "revendedor-3.13",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Subtítulo",
"mode": "text",
"valor": "Suporte ao revendedor"
},
{
"key": "revendedor-3.14",
"page": "revendedor",
"sec": "revendedor-3",
"label": "Texto",
"mode": "text",
"valor": "Atendimento dedicado pelo WhatsApp para tirar dúvidas e acompanhar pedidos."
},
{
"key": "revendedor-4.1",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Etiqueta",
"mode": "text",
"valor": "Catálogo do revendedor"
},
{
"key": "revendedor-4.2",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Título",
"mode": "text",
"valor": "Conheça os produtos"
},
{
"key": "revendedor-4.3",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Texto",
"mode": "text",
"valor": "Sem cadastro você vê a foto e o nome. Cadastre-se para liberar descrição, preços, NCM, medidas e planilhas."
},
{
"key": "revendedor-4.4",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Categorias"
},
{
"key": "revendedor-4.5",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Preço para revenda"
},
{
"key": "revendedor-4.6",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Disponibilidade de preço"
},
{
"key": "revendedor-4.7",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Subtítulo",
"mode": "text",
"valor": "Ambiente"
},
{
"key": "revendedor-4.8",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Texto do botão",
"mode": "text",
"valor": "Limpar filtros"
},
{
"key": "revendedor-4.9",
"page": "revendedor",
"sec": "revendedor-4",
"label": "Texto do botão",
"mode": "text",
"valor": "Filtros"
},
{
"key": "revendedor-5.1",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Etiqueta",
"mode": "text",
"valor": "Planilhas"
},
{
"key": "revendedor-5.2",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Título",
"mode": "text",
"valor": "Exporte e importe produtos"
},
{
"key": "revendedor-5.3",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Texto",
"mode": "text",
"valor": "Leve o catálogo para a sua loja em poucos cliques. Os arquivos abrem no Excel e no Google Planilhas."
},
{
"key": "revendedor-5.4",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Subtítulo",
"mode": "text",
"valor": "Exportar catálogo"
},
{
"key": "revendedor-5.5",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Texto",
"mode": "text",
"valor": "Escolha uma categoria ou baixe todos os produtos de uma vez."
},
{
"key": "revendedor-5.6",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Texto do botão",
"mode": "text",
"valor": "Exportar planilha"
},
{
"key": "revendedor-5.7",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Subtítulo",
"mode": "text",
"valor": "Importar produtos"
},
{
"key": "revendedor-5.8",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Texto",
"mode": "text",
"valor": "Envie uma planilha no formato do modelo para adicionar ou atualizar produtos pelo código (SKU)."
},
{
"key": "revendedor-5.9",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Texto do botão",
"mode": "text",
"valor": "Importar planilha"
},
{
"key": "revendedor-5.10",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Subtítulo",
"mode": "text",
"valor": "Modelo de planilha"
},
{
"key": "revendedor-5.11",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Texto",
"mode": "text",
"valor": "Baixe o modelo com todas as colunas já organizadas e um exemplo preenchido."
},
{
"key": "revendedor-5.12",
"page": "revendedor",
"sec": "revendedor-5",
"label": "Texto do botão",
"mode": "text",
"valor": "Baixar modelo"
},
{
"key": "revendedor-6.1",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Etiqueta",
"mode": "text",
"valor": "Dúvidas"
},
{
"key": "revendedor-6.2",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Título",
"mode": "text",
"valor": "Perguntas frequentes"
},
{
"key": "revendedor-6.3",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Pergunta",
"mode": "text",
"valor": "Preciso ter CNPJ para revender?"
},
{
"key": "revendedor-6.4",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Resposta",
"mode": "text",
"valor": "Não é obrigatório. O cadastro aceita CNPJ ou CPF."
},
{
"key": "revendedor-6.5",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Pergunta",
"mode": "text",
"valor": "Preciso comprar estoque antes de vender?"
},
{
"key": "revendedor-6.6",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Resposta",
"mode": "text",
"valor": "Não. Você só faz o pedido para a Casa Harmonia depois que o seu cliente compra."
},
{
"key": "revendedor-6.7",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Pergunta",
"mode": "text",
"valor": "Quem define o preço de venda?"
},
{
"key": "revendedor-6.8",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Resposta",
"mode": "text",
"valor": "Você. No catálogo mostramos o preço para revenda e um preço sugerido, mas a decisão final é sua."
},
{
"key": "revendedor-6.9",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Pergunta",
"mode": "text",
"valor": "Como cadastro os produtos na minha loja?"
},
{
"key": "revendedor-6.10",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Resposta",
"mode": "text",
"valor": "Exporte a planilha com as informações dos produtos (nome, descrição, NCM, medidas, peso e preço) e importe na sua plataforma de vendas."
},
{
"key": "revendedor-6.11",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Pergunta",
"mode": "text",
"valor": "Para onde vocês enviam?"
},
{
"key": "revendedor-6.12",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Resposta",
"mode": "text",
"valor": "Para todo o Brasil, direto no endereço do seu cliente."
},
{
"key": "revendedor-6.13",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Pergunta",
"mode": "text",
"valor": "Posso vender produtos personalizados?"
},
{
"key": "revendedor-6.14",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Resposta",
"mode": "text",
"valor": "Sim. Fale com nossa equipe pelo WhatsApp para alinhar medidas e estampas sob encomenda."
},
{
"key": "revendedor-6.15",
"page": "revendedor",
"sec": "revendedor-6",
"label": "Texto do botão",
"mode": "text",
"valor": "Falar com o setor de revenda"
},
{
"key": "geral-rodape.1",
"page": "geral",
"sec": "geral-rodape",
"label": "Subtítulo",
"mode": "text",
"valor": "Casa Harmonia Decorações"
},
{
"key": "geral-rodape.2",
"page": "geral",
"sec": "geral-rodape",
"label": "Texto",
"mode": "text",
"valor": "Decoração, beleza e personalidade para cada ambiente. Papéis de parede, revestimentos adesivos e soluções personalizadas desde 1993."
},
{
"key": "geral-rodape.3",
"page": "geral",
"sec": "geral-rodape",
"label": "Subtítulo",
"mode": "text",
"valor": "Navegação"
},
{
"key": "geral-rodape.4",
"page": "geral",
"sec": "geral-rodape",
"label": "Subtítulo",
"mode": "text",
"valor": "Contato"
},
{
"key": "revendedor-cadastro.1",
"page": "revendedor",
"sec": "revendedor-cadastro",
"label": "Etiqueta",
"mode": "text",
"valor": "Seja um Revendedor"
},
{
"key": "revendedor-cadastro.2",
"page": "revendedor",
"sec": "revendedor-cadastro",
"label": "Título",
"mode": "text",
"valor": "Cadastro de revendedor"
},
{
"key": "revendedor-cadastro.3",
"page": "revendedor",
"sec": "revendedor-cadastro",
"label": "Texto",
"mode": "text",
"valor": "Preencha seus dados para liberar preços, fichas técnicas, filtros e planilhas."
}
]
};

/* ---------- Funções compartilhadas entre site e painel ---------- */
window.CH = (function(){
  const CHAVE='ch_dados', CHAVE_REV='ch_revendedores';
  const clone=o=>JSON.parse(JSON.stringify(o));
  function ler(k,p){try{const v=localStorage.getItem(k);return v===null?p:JSON.parse(v)}catch(e){return p}}
  function gravar(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
  /* Junta os dados salvos por cima do padrão */
  function montar(salvo){
    const P=window.CH_PADRAO, s=salvo||{};
    return {
      config:Object.assign({},P.config,s.config),
      contato:Object.assign({},P.contato,s.contato),
      cores:Object.assign({},P.cores,s.cores),
      logo:s.logo!==undefined?s.logo:P.logo,
      fotos:Object.assign({},s.fotos||{}),
      textos:Object.assign({},s.textos||{}),
      ocultas:Object.assign({},s.ocultas||{}),
      servicos:s.servicos?clone(s.servicos):clone(P.servicos),
      categorias:s.categorias?clone(s.categorias):clone(P.categorias),
      produtos:s.produtos?clone(s.produtos):clone(P.produtos),
      atualizado:s.atualizado||null
    };
  }
  return {
    CHAVE, CHAVE_REV, clone, ler, gravar, montar,
    salvos:()=>ler(CHAVE,null),
    salvar:(d)=>{d.atualizado=new Date().toISOString();return gravar(CHAVE,d)},
    revendedores:()=>ler(CHAVE_REV,[]),
    salvarRevendedores:(l)=>gravar(CHAVE_REV,l),
    num(v){if(v===null||v===undefined||String(v).trim()==='')return null;let s=String(v).trim().replace(/[^\d,.-]/g,'');if(s.includes(',')&&s.includes('.'))s=s.replace(/\./g,'').replace(',','.');else s=s.replace(',','.');const n=parseFloat(s);return isNaN(n)?null:n},
    moeda(v){const n=this.num(v);return n===null?'':n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})},
    ativo:p=>!/^(n|nao|não|0|false)$/i.test(String(p.ativo||'sim').trim()),
    urlLF:(k,w,lock)=>`https://loremflickr.com/${w}/${Math.round(w*.72)}/${k}?lock=${lock}`,
    /* chave de foto -> endereço da imagem */
    urlFoto(key,w,lock,fotosSalvas){
      if(!key)key='sala';
      if(/^(https?:|data:)/.test(key))return key;
      if(fotosSalvas&&fotosSalvas[key])return fotosSalvas[key];
      const f=window.CH_PADRAO.fotos[key]||{k:'interior'};
      return f.u?`https://images.unsplash.com/photo-${f.u}?auto=format&fit=crop&w=${w}&q=70`:this.urlLF(f.k,w,lock);
    },
    csvCampo(v){v=String(v??'');return /[;"\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v},
    parseCSV(txt){
      txt=txt.replace(/^﻿/,'');
      const l0=txt.split('\n')[0];
      const sep=(l0.match(/;/g)||[]).length>=(l0.match(/,/g)||[]).length?';':',';
      const rows=[];let row=[],cur='',q=false;
      for(let i=0;i<txt.length;i++){
        const ch=txt[i];
        if(q){if(ch==='"'){if(txt[i+1]==='"'){cur+='"';i++}else q=false}else cur+=ch}
        else if(ch==='"')q=true;
        else if(ch===sep){row.push(cur);cur=''}
        else if(ch==='\n'){row.push(cur);rows.push(row);row=[];cur=''}
        else if(ch!=='\r')cur+=ch;
      }
      if(cur||row.length){row.push(cur);rows.push(row)}
      return rows.filter(r=>r.some(c=>c.trim()!==''));
    },
    /* Lê planilha e devolve lista de produtos */
    produtosDoCSV(texto){
      const rows=this.parseCSV(texto);
      if(rows.length<2)throw new Error('Planilha vazia ou inválida.');
      const P=window.CH_PADRAO;
      const head=rows[0].map(h=>{h=h.trim().toLowerCase();const r=Object.entries(P.rotulos).find(([k,v])=>v.toLowerCase()===h);return r?r[0]:h});
      if(!head.includes('nome'))throw new Error('A planilha precisa ter a coluna "nome". Use o modelo.');
      return rows.slice(1).map(cols=>{const p={};P.colunas.forEach(c=>{const k=head.indexOf(c);p[c]=k>=0?(cols[k]||'').trim():''});if(!p.ativo)p.ativo='sim';return p}).filter(p=>p.nome);
    },
    gerarCSV(lista,fotosSalvas){
      const P=window.CH_PADRAO;
      return [P.colunas.join(';'),...lista.map(p=>P.colunas.map(c=>this.csvCampo(c==='imagem'?(p.imagem&&!/^data:/.test(p.imagem)?this.urlFoto(p.imagem,1200,1,fotosSalvas):''):p[c])).join(';'))].join('\r\n');
    },
    baixar(nome,texto,tipo){
      const blob=new Blob([(tipo&&tipo.includes('json')?'':'﻿')+texto],{type:tipo||'text/csv;charset=utf-8'});
      const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=nome;document.body.appendChild(a);a.click();a.remove();
    },
    esc:s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
    slug:s=>String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')
  };
})();
