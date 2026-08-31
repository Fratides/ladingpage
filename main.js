/* ==========================================================================
   Delícias da Duda — main.js
   Módulo ES (usa "export"). Carregado no HTML com <script type="module">.

   Estrutura deste arquivo:
   1. CONFIGURAÇÃO GERAL   -> edite telefone, sabores, depoimentos e pontos
                               de retirada aqui, sem mexer no resto do código.
   2. FUNÇÕES UTILITÁRIAS  -> exportadas, podem ser reaproveitadas/testadas.
   3. FUNÇÕES DE RENDER    -> desenham os cards na tela a partir dos dados.
   4. INICIALIZAÇÃO        -> roda tudo quando a página carrega.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. CONFIGURAÇÃO GERAL — edite aqui
   -------------------------------------------------------------------------- */

// Número de WhatsApp no formato internacional, sem espaços ou símbolos.
// 55 = Brasil, 32 = DDD, restante = número.
export const WHATSAPP_NUMBER = "5532999495615";

// Texto de exibição do telefone (o que aparece escrito na página).
export const PHONE_DISPLAY = "(32) 9 9949-5615";

// Mensagem padrão enviada ao clicar nos botões de "Peça Agora".
export const DEFAULT_MESSAGE =
  "Oi Duda! Vi o site e quero fazer um pedido de sacolé 🍦";

// Sabores exibidos na seção "Nossos Sabores".
// "image" é o caminho da foto do produto — coloque o arquivo com esse
// mesmo nome dentro da pasta img/ e ele aparece automaticamente no card.
// Preencha "description" com o texto que aparecerá na imagem ampliada.
export const flavors = [
  { name: "Picolé Caramelo Crocante", image: "img/sabores/caramelocrocante.jpg", description: "Base cremosa de chocolate 50% recheada com caramelo salgado artesanal, envolta em uma casquinha meio amarga e finalizada com pedacinhos crocantes de caramelo." },

  { name: "Laka c/ Morango", image: "img/sabores/lakacmorango.JPEG", description: "A doçura marcante do chocolate Laka combinada perfeitamente com uma geleia de morango artesanal de dar água na boca." },

  { name: "Coco", image: "img/sabores/coco.JPEG", description: "Preparado com coco fresco e natural, garantindo aquela cremosidade irresistível e um sabor autêntico que derrete na boca." },

  { name: "Tablito", image: "img/sabores/tablito.JPEG", description: "Base cremosa de baunilha com recheio cremoso de brigadeiro, envolvida por uma casquinha de chocolate branco com pedacinhos crocantes de amendoim." },

  { name: "Pudim", image: "img/sabores/chupchup-pudim.jpg", description: "A cremosidade inconfundível do tradicional pudim de leite condensado em formato de geladinho, finalizado com aquela calda de caramelo dourada e irresistível." },

  { name: "Prestígio", image: "img/sabores/prestigio.jpg", description: "A perfeita combinação do recheio cremoso de coco natural com uma casquinha crocante e irresistível de chocolate ao leite por fora." },

  { name: "Pudim", image: "img/sabores/pudim.jpg", description: "A cremosidade do tradicional pudim de leite condensado com aquela calda de caramelo dourada por cima, trazendo o sabor autêntico da receita caseira." },

  { name: "Ninho c/ Frutas Vermelhas", image: "img/sabores/ninho.c.frutas-vermelhas.jpg", description: "A cremosidade inconfundível do Leite Ninho combinada perfeitamente com uma geleia artesanal de frutas vermelhas de sabor marcante." },

  { name: "Dois Amores", image: "img/sabores/dois.amores.jpg", description: "A combinação perfeita entre o creme de Leite Ninho e o chocolate, envoltos por uma casquinha crocante de chocolate 50% cacau." },

  { name: "Supremo de Nutella", image: "img/sabores/supremo.de.nutella.jpg", description: "Uma experiência intensamente cremosa com o sabor inconfundível da Nutella, garantindo uma explosão de sabor a cada mordida." },

  { name: "Ninho c/ Nutella", image: "img/sabores/ninho.c.nutella.JPG", description: "O queridinho e campeão de vendas: a cremosidade imbatível do Leite Ninho unida ao sabor inconfundível da Nutella em uma combinação perfeita." },
];

// Depoimentos — TROQUE pelos prints (screenshots) reais dos seus clientes.
// "image" é o caminho do print e "alt" é só um texto descritivo para
// acessibilidade (leitor de tela), não aparece escrito na tela.
export const testimonials = [
  { image: "img/depoimentos/depoimento-1.jpg", alt: "Print de depoimento de cliente 1" },
  { image: "img/depoimentos/depoimento-2.jpg", alt: "Print de depoimento de cliente 2" },
  { image: "img/depoimentos/depoimento-3.jpg", alt: "Print de depoimento de cliente 3" },
];

// Pontos de retirada de exemplo — TROQUE pelos endereços reais.
// "image" é a foto do local; nome e horário aparecem escritos por cima dela.
export const pickupPoints = [
  {
    name: "Restaurante Ki Delicia",
    address: "Avenida Doutor João Cataldo Pinto, 586 - Bela Vista Rodovia, Tocantins-MG",
    hours: "Seg a Dom · 7:00h às 13h",
    image: "img/local/kidelicia.JPEG",
    mapLink: "https://www.google.com/maps/place/Lanches+Ki+Delicia/@-21.1768593,-43.0276018,3a,75y,350.22h,89.77t/data=!3m7!1e1!3m5!1sTpAKNbHkSRMs-PS945-TLw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.2293993670527783%26panoid%3DTpAKNbHkSRMs-PS945-TLw%26yaw%3D350.22343170230755!7i16384!8i8192!4m14!1m7!3m6!1s0xa302a8efb3d11f:0x86253af116ebfb78!2sLanches+Ki+Delicia!8m2!3d-21.1766494!4d-43.0276523!16s%2Fg%2F11s5zcjd83!3m5!1s0xa302a8efb3d11f:0x86253af116ebfb78!8m2!3d-21.1766494!4d-43.0276523!16s%2Fg%2F11s5zcjd83?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Pé N’areia Sports",
    address: "BR-265, 500, Tocantins - MG, 36512-000",
    hours: "Qua, Quin e Sex · 16h - 22h | Sáb · 11h - 22h | Dom · 10h - 15h",
    image: "img/local/penareia.JPEG",
    mapLink: "https://www.google.com/maps/place/P%C3%A9+N%E2%80%99areia+Sports/@-21.1772435,-43.0278931,3a,75y,319.35h,97.39t/data=!3m7!1e1!3m5!1sMMbj8zIzj4FeyYcoXXqSfQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-7.386770996514414%26panoid%3DMMbj8zIzj4FeyYcoXXqSfQ%26yaw%3D319.3477185326571!7i16384!8i8192!4m6!3m5!1s0xa303001b20057d:0x72086301a6d04f84!8m2!3d-21.1772758!4d-43.0278622!16s%2Fg%2F11vyzf4n38?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Bar do Marcelo",
    address: "Rod.Dep.Luís Soares da Rocha | Mg-447, Piraúba-MG",
    hours: "Todos os dias, mediante disponibilidade",
    image: "img/local/bar.do.marcelo.JPG",
    mapLink: "https://www.google.com/maps/@-21.2335002,-43.0664201,3a,75y,175.09h,87.03t/data=!3m7!1e1!3m5!1seExIq1oPH9BiFjlaZ4AIgA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.9737599452518566%26panoid%3DeExIq1oPH9BiFjlaZ4AIgA%26yaw%3D175.08882338294111!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Point do Açaí",
    address: "Av. Joaquim Dias Santiago, 404 - Tocantins-MG",
    hours: "Seg a Sex · 13h - 20h | Sáb e Dom· 13h - 21h",
    image: "img/local/point.do.acai.jpg",
    mapLink: "https://www.google.com/maps/@-21.1688332,-43.026451,3a,90y,34.78h,71.37t/data=!3m7!1e1!3m5!1slr7oEm4dygPlFBiFRpeV-w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D18.630964661450463%26panoid%3Dlr7oEm4dygPlFBiFRpeV-w%26yaw%3D34.77752904449914!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

/* --------------------------------------------------------------------------
   2. FUNÇÕES UTILITÁRIAS (exportadas)
   -------------------------------------------------------------------------- */

/**
 * Monta um link do WhatsApp (wa.me) já com a mensagem preenchida.
 * @param {string} phone   número no formato internacional (ex: "5532999495615")
 * @param {string} message texto que vai aparecer pronto na conversa
 * @returns {string} URL completa do wa.me
 */
export function buildWhatsAppLink(phone, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Cria um elemento HTML a partir de uma string simples de tag + classe.
 * Pequeno helper para não repetir document.createElement toda hora.
 */
function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/**
 * Liga o comportamento de "área de imagem" (media slot):
 * - Enquanto a imagem não existe/não carrega, mostra uma dica com o
 *   caminho esperado do arquivo (ex: "Coloque aqui: img/sabor-pudim.jpg").
 * - Assim que o arquivo é colocado na pasta certa, a foto aparece
 *   automaticamente por cima da dica, sem precisar editar mais nada.
 * @param {HTMLElement} slot elemento com a classe "media-slot"
 */
function wireMediaSlot(slot) {
  const img = slot.querySelector("img");
  if (!img) return;

  const markLoaded = () => slot.classList.add("has-image");
  const markMissing = () => slot.classList.remove("has-image");

  // Caso a imagem já esteja em cache e carregue antes do listener ser preso.
  if (img.complete && img.naturalWidth > 0) {
    markLoaded();
  } else {
    img.addEventListener("load", markLoaded);
    img.addEventListener("error", markMissing);
  }
}
/**
 * Monta uma "área de imagem" pronta para receber a foto do usuário:
 * dica de caminho do arquivo + <img> + legenda opcional por cima (overlay).
 *
 * @param {Object} opts
 * @param {string} opts.src        caminho da imagem (ex: "img/sabor-pudim.jpg")
 * @param {string} [opts.captionHTML] HTML da legenda exibida por cima da foto
 * @param {"cover"|"contain"} [opts.fit="cover"] como a foto se encaixa no quadro
 * @param {string} [opts.extraClass] classe extra no container
 * @returns {HTMLElement}
 */
function createMediaSlot({ src, alt, captionHTML, fit = "cover", extraClass = "" }) {
  const slot = el("div", `media-slot ${extraClass}`.trim());
  slot.style.setProperty("--fit", fit);

  const hint = el(
    "span",
    "media-slot-hint",
    `📷 Coloque aqui:<br><code>${src}</code>`
  );

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  img.loading = "lazy";
  img.decoding = "async";

  slot.appendChild(hint);
  slot.appendChild(img);

  if (captionHTML) {
    const caption = el("div", "media-caption", captionHTML);
    slot.appendChild(caption);
  }

  wireMediaSlot(slot);
  return slot;
}

/* --------------------------------------------------------------------------
   3. FUNÇÕES DE RENDER
   -------------------------------------------------------------------------- */

/** Desenha os cards de sabores dentro de #flavorGrid, cada um com sua
 *  própria área de foto (troque o arquivo em img/) e o nome escrito
 *  por cima da imagem. */
export function renderFlavors() {
  const grid = document.getElementById("flavorGrid");
  if (!grid) return;
  grid.innerHTML = "";

  flavors.forEach((flavor, index) => {
    const card = el("div", "flavor-card reveal pop");
    card.style.setProperty("--delay", `${index * 80}ms`);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ampliar imagem de ${flavor.name}`);
    card.dataset.flavorIndex = String(index);

    const slot = createMediaSlot({
      src: flavor.image,
      alt: flavor.name,
      captionHTML: `<h3>${flavor.name}</h3>`,
      fit: "cover",
      extraClass: "media-slot--flavor",
    });

    card.appendChild(slot);
    grid.appendChild(card);
  });
}

/** Desenha o mural de prints de depoimentos dentro de #testimonialGrid.
 *  Cada foto entra torta feito polaroid e endireita ao passar o mouse —
 *  não tem texto por cima porque o print já mostra o depoimento. */
export function renderTestimonials() {
  const grid = document.getElementById("testimonialGrid");
  if (!grid) return;
  grid.innerHTML = "";

  testimonials.forEach((t, index) => {
    const card = el("div", "testimonial-card reveal pop");
    card.style.setProperty("--delay", `${index * 90}ms`);

    const slot = createMediaSlot({
      src: t.image,
      alt: t.alt || `Print de depoimento ${index + 1}`,
      fit: "contain",
      extraClass: "media-slot--testimonial",
    });

    card.appendChild(slot);
    grid.appendChild(card);
  });
}

/** Desenha os cards de pontos de retirada dentro de #pickupGrid, cada um
 *  com foto do local e nome/endereço/horário escritos por cima da imagem. */
export function renderPickupPoints() {
  const grid = document.getElementById("pickupGrid");
  if (!grid) return;
  grid.innerHTML = "";

  pickupPoints.forEach((p, index) => {
    const card = el(p.mapLink ? "a" : "div", "pickup-card reveal pop");
    card.style.setProperty("--delay", `${index * 90}ms`);

    if (p.mapLink) {
      card.href = p.mapLink;
      card.target = "_blank";
      card.rel = "noopener";
      card.setAttribute("aria-label", `Abrir localização de ${p.name} no mapa`);
    }

    const slot = createMediaSlot({
      src: p.image,
      alt: p.name,
      fit: "cover",
      extraClass: "media-slot--pickup",
      captionHTML: `
        <h3>📍 ${p.name}</h3>
        <p>${p.address}</p>
        <p class="pickup-hours">${p.hours}</p>
      `,
    });

    card.appendChild(slot);
    grid.appendChild(card);
  });
}

/** Liga a área de imagem principal do hero (img/Fundo.jpg) ao mesmo*/
export function initHeroMedia() {
  const slot = document.getElementById("heroMediaSlot");
  if (slot) wireMediaSlot(slot);
}

/** Abre os sabores em uma visualização ampliada com nome e descrição. */
export function initFlavorModal() {
  const modal = document.getElementById("flavorModal");
  const modalImage = document.getElementById("flavorModalImage");
  const modalTitle = document.getElementById("flavorModalTitle");
  const modalDescription = document.getElementById("flavorModalDescription");
  const closeButton = modal?.querySelector("[data-flavor-modal-close]");
  if (!modal || !modalImage || !modalTitle || !modalDescription || !closeButton) return;

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("flavor-modal-open");
  };

  const openModal = (flavor) => {
    modalImage.src = flavor.image;
    modalImage.alt = flavor.name;
    modalTitle.textContent = flavor.name;
    modalDescription.textContent = flavor.description || "";
    modalDescription.hidden = !flavor.description;
    modal.hidden = false;
    document.body.classList.add("flavor-modal-open");
    closeButton.focus();
  };

  document.querySelectorAll(".flavor-card").forEach((card) => {
    const openCard = () => openModal(flavors[Number(card.dataset.flavorIndex)]);
    card.addEventListener("click", openCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCard();
      }
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
}

/** Preenche os botões e textos que dependem do telefone/mensagem padrão */
export function renderWhatsAppTargets() {
  const links = [
    document.getElementById("navWhatsappBtn"),
    document.getElementById("heroWhatsappBtn"),
  ];
  const url = buildWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE);
  links.forEach((link) => {
    if (link) link.href = url;
  });

  const phoneDisplay = document.getElementById("phoneDisplay");
  if (phoneDisplay) phoneDisplay.textContent = PHONE_DISPLAY;
}

/* --------------------------------------------------------------------------
   INTERAÇÕES
   -------------------------------------------------------------------------- */

/** Abre/fecha o menu mobile (hambúrguer) */
export function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Fecha o menu ao clicar em um link (útil no mobile)
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (event) => {
      if (a.getAttribute("href") === "#topo") {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        });
      }
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Liga o formulário de contato: ao enviar, monta uma mensagem
 * com os dados digitados e abre o WhatsApp em uma nova aba.
 */
export function initContactForm() {
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("#inputName").value.trim();
    const phone = form.querySelector("#inputPhone").value.trim();
    const message = form.querySelector("#inputMessage").value.trim();

    if (!name || !phone) {
      if (hint) hint.textContent = "Preencha nome e WhatsApp para continuar.";
      return;
    }

    const fullMessage =
      `${name} (contato: ${phone}).\n` +
      (message ? ` ${message}` : "");

    const url = buildWhatsAppLink(WHATSAPP_NUMBER, fullMessage);
    window.open(url, "_blank", "noopener");

    if (hint) hint.textContent = "Abrindo o WhatsApp com seu pedido preenchido...";
    form.reset();
  });
}

/** Anima (fade + subida) os elementos com a classe .reveal ao entrarem na tela */
export function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((i) => observer.observe(i));
}

/** Atualiza o ano do rodapé automaticamente */
export function initFooterYear() {
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) yearSpan.textContent = `© ${new Date().getFullYear()} Delícias da Duda`;
}

/* --------------------------------------------------------------------------
   4. INICIALIZAÇÃO
   -------------------------------------------------------------------------- */

/** Função principal: chama tudo na ordem certa. */
export function initSite() {
  initHeroMedia();
  renderFlavors();
  initFlavorModal();
  renderTestimonials();
  renderPickupPoints();
  renderWhatsAppTargets();
  initMobileNav();
  initContactForm();
  initFooterYear();
  // Reveal por último, depois que os cards dinâmicos já existem no DOM.
  initRevealAnimations();
}

document.addEventListener("DOMContentLoaded", initSite);