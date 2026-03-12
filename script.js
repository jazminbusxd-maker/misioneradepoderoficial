// ============================================
// SCRIPT COMPLETO - MISIONERA DE PODER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // CONFIGURACIÓN DEL DOM
    // ======================
    const introScreen = document.getElementById('introScreen');
    const logoContainer = document.getElementById('logoContainer');
    const mainContent = document.getElementById('mainContent');
    const churchLogo = document.querySelector('.church-logo');
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    // ======================
    // MENÚ HAMBURGUESA
    // ======================
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Cerrar menú al hacer clic en enlace
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            if (mainNav.classList.contains('active') && 
                !mainNav.contains(event.target) && 
                !menuToggle.contains(event.target)) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ======================
    // ANIMACIÓN DE REVELADO
    // ======================
    
    // Crear elementos para el efecto de revelado
    const revealOverlay = document.createElement('div');
    revealOverlay.className = 'reveal-overlay';
    
    const revealMask = document.createElement('div');
    revealMask.className = 'reveal-mask';
    
    const revealGradient = document.createElement('div');
    revealGradient.className = 'reveal-gradient';
    
    revealOverlay.appendChild(revealMask);
    revealOverlay.appendChild(revealGradient);
    introScreen.appendChild(revealOverlay);
    
    // Función principal de animación
    function openMainPage() {
        console.log('🚀 Iniciando animación de revelado...');
        
        // 1. Desactivar click múltiple
        logoContainer.style.pointerEvents = 'none';
        
        // 2. Animación de ondas en el logo
        churchLogo.classList.add('concentric-pulse');
        
        // 3. Después de 400ms, comenzar revelado
        setTimeout(function() {
            // 4. Activar overlay
            revealOverlay.classList.add('active');
            
            // 5. Iniciar animaciones
            revealMask.classList.add('revealing');
            revealGradient.classList.add('revealing');
            logoContainer.classList.add('disappearing');
            
            // 6. Después del revelado, mostrar contenido
            setTimeout(function() {
                revealOverlay.classList.add('fade-out');
                
                setTimeout(function() {
                    introScreen.style.display = 'none';
                    mainContent.classList.add('visible');
                    
                    // 7. Activar animación del título
                    setTimeout(function() {
                        activateTitleAnimation();
                    }, 100);
                    
                    // 8. Desplazar al inicio
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    
                    // 9. Inicializar sistemas
                    setupScrollAnimations();
                    inicializarSistemaAnuncios();
                    setTimeout(initializeChatbot, 1500);
                    inicializarMapaCasas();
                    
                }, 400);
                
            }, 1200);
            
        }, 400);
    }
    
    // Función para animación del título
    function activateTitleAnimation() {
        const churchTitle = document.querySelector('.church-title');
        const churchSubtitle = document.querySelector('.church-subtitle');
        
        if (churchTitle) {
            churchTitle.classList.add('slide-fade');
        }
        if (churchSubtitle) {
            churchSubtitle.classList.add('slide-fade');
        }
    }
    
    // Eventos para abrir
    logoContainer.addEventListener('click', openMainPage);
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            openMainPage();
        }
    });
    
    // ======================
    // SCROLL SUAVE
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar menú si está abierto en móvil
                if (menuToggle && menuToggle.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // ======================
    // ANIMACIONES AL SCROLL
    // ======================
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observar elementos para animación
        document.querySelectorAll('.ministry-card, .about-text, .about-image, .bautismo-content').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });
    }
    
    // ======================
    // INICIALIZACIÓN LEMA ANUAL
    // ======================
    const lemaAnualSection = document.querySelector("#lema-anual");
    
    if (lemaAnualSection) {
        const observerLema = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lemaAnualSection.classList.add("visible");
                }
            });
        }, { 
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });

        observerLema.observe(lemaAnualSection);
    }
    
    // ======================
    // CONSOLES DE DEBUG
    // ======================
    console.log('✅ JavaScript cargado correctamente');
    console.log('👉 Toca el logo para iniciar la animación');
    console.log('👉 O presiona la tecla Enter');
});

// ============================================
// SISTEMA DE ANUNCIOS DE EVENTOS - VERSIÓN RECOMENDADA
// ============================================

const eventosMinisterios = [
    {
        id: 1,
        titulo: "Encuentro Juvenil 2025",
        fecha: "27, 28 y 1 de Febrero",
        descripcion: "ENCUENTRO PROFUNDIZA DE JÓVENES - ¡No te lo pierdas!",
        ministerio: "jovenes",
        tipo: "banner",
        activo: true,
        enlace: "<a href='ministerios/ministerio-jovenes.html#eventos'>Ver detalles</a>",
        mostrarCada: 0 // Siempre se muestra
    },
    {
        id: 2,
        titulo: "Congreso de Mujeres Reina Mía",
        fecha: "13 de Marzo - APERTURA 20:00hs",
        descripcion: "CONGRESO DE MUJERES 'TOCANDO SU TRONO' - ¡Una noche de adoración y empoderamiento!",
        ministerio: "mujeres",
        tipo: "flotante",
        activo: true,
        enlace: "<a href='ministerios/ministerio-mujeres.html#eventos'>Ver detalles</a>",
        mostrarCada: 0 // Siempre se muestra
    },
    {
        id: 3,
        titulo: "Campamento de Adolescentes GET UP",
        fecha: "16. 17 y 18 de Febrero",
        descripcion: "Fin de semana de renovación y compañerismo",
        ministerio: "adolescentes",
        tipo: "flotante",
        activo: true,
        enlace: "<a href='ministerios/ministerio-adolescentes.html#eventos'>Ver detalles</a>",
        mostrarCada: 0 // Siempre se muestra
    }
];

let anuncioActual = 0;
let intervaloAnuncios;
let sistemaAnunciosIniciado = false;

function inicializarSistemaAnuncios() {
    if (sistemaAnunciosIniciado) return;
    sistemaAnunciosIniciado = true;
    
    console.log('🎪 Inicializando sistema de anuncios...');
    
    // Crear elementos HTML si no existen
    if (!document.getElementById('eventoBanner')) {
        crearElementosAnuncios();
    }
    
    // Esperar 3 segundos antes de mostrar el primer anuncio
    setTimeout(() => {
        const eventosActivos = eventosMinisterios.filter(e => e.activo);
        
        if (eventosActivos.length === 0) {
            console.log('📭 No hay eventos activos para mostrar');
            return;
        }
        
        // Mostrar primer anuncio que pueda mostrarse
        for (let i = 0; i < eventosActivos.length; i++) {
            if (puedeMostrarse(eventosActivos[i])) {
                mostrarAnuncio(eventosActivos[i]);
                break;
            }
        }
        
        // Configurar rotación automática (cada 2 minutos para testing)
        intervaloAnuncios = setInterval(siguienteAnuncio, 120000);
        
        console.log(`✅ Sistema de anuncios activo con ${eventosActivos.length} eventos`);
        
    }, 3000);
}

function crearElementosAnuncios() {
    const anunciosHTML = `
        <!-- Banner superior -->
        <div id="eventoBanner" class="evento-banner" style="display: none;">
            <div class="banner-content">
                <span class="banner-badge">🎉 PRÓXIMO EVENTO</span>
                <p id="bannerTitulo">Cargando eventos...</p>
                <a href="#" id="bannerEnlace" class="banner-btn">Más información</a>
            </div>
            <button class="close-banner" id="closeBanner">×</button>
        </div>

        <!-- Notificación flotante -->
        <div id="eventoFlotante" class="evento-flotante" style="display: none;">
            <div class="flotante-header">
                <span>📢 EVENTO ESPECIAL</span>
                <button class="close-flotante">×</button>
            </div>
            <div class="flotante-content">
                <h4 id="flotanteTitulo">Cargando evento...</h4>
                <p class="fecha-evento" id="flotanteFecha">Fecha por confirmar</p>
                <p class="desc-evento" id="flotanteDesc">Descripción del evento</p>
                <a href="#" id="flotanteEnlace" class="btn-flotante">Ver detalles</a>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', anunciosHTML);
}

function mostrarAnuncio(evento) {
    if (!evento || !evento.activo) return;
    
    // Verificar si ya se mostró recientemente
    if (!puedeMostrarse(evento)) {
        return;
    }
    
    // Marcar como mostrado ahora
    marcarComoMostrado(evento);
    
    if (evento.tipo === 'banner') {
        mostrarBanner(evento);
    } else {
        mostrarFlotante(evento);
    }
}

function puedeMostrarse(evento) {
    // Si mostrarCada es 0, siempre se muestra
    if (evento.mostrarCada === 0) return true;
    
    const ultimaVezKey = `ultima_vez_${evento.id}`;
    const ultimaVez = localStorage.getItem(ultimaVezKey);
    
    if (!ultimaVez) {
        // Primera vez que se ve
        return true;
    }
    
    // Calcular si ha pasado el tiempo suficiente
    const ahora = new Date().getTime();
    const tiempoPasado = ahora - parseInt(ultimaVez);
    const horasPasadas = tiempoPasado / (1000 * 60 * 60);
    
    return horasPasadas >= evento.mostrarCada;
}

function marcarComoMostrado(evento) {
    const ahora = new Date().getTime();
    localStorage.setItem(`ultima_vez_${evento.id}`, ahora.toString());
}

function mostrarBanner(evento) {
    const banner = document.getElementById('eventoBanner');
    const titulo = document.getElementById('bannerTitulo');
    const enlace = document.getElementById('bannerEnlace');
    
    if (!banner || !titulo || !enlace) return;
    
    titulo.textContent = `${evento.titulo}: ${evento.fecha}`;
    enlace.href = evento.enlace;
    enlace.textContent = 'Más información';
    
    banner.style.display = 'flex';
    
    document.getElementById('closeBanner').onclick = function() {
        banner.style.display = 'none';
    };
    
    setTimeout(() => {
        if (banner.style.display === 'flex') {
            banner.style.display = 'none';
        }
    }, 15000);
}

function mostrarFlotante(evento) {
    const flotante = document.getElementById('eventoFlotante');
    const titulo = document.getElementById('flotanteTitulo');
    const fecha = document.getElementById('flotanteFecha');
    const desc = document.getElementById('flotanteDesc');
    const enlace = document.getElementById('flotanteEnlace');
    
    if (!flotante || !titulo) return;
    
    titulo.textContent = evento.titulo;
    if (fecha) fecha.textContent = evento.fecha;
    if (desc) desc.textContent = evento.descripcion;
    if (enlace) {
        enlace.href = evento.enlace;
        enlace.textContent = 'Ver detalles';
    }
    
    flotante.style.display = 'block';
    
    const closeBtn = flotante.querySelector('.close-flotante');
    if (closeBtn) {
        closeBtn.onclick = function() {
            flotante.style.display = 'none';
        };
    }
    
    setTimeout(() => {
        if (flotante.style.display === 'block') {
            flotante.style.display = 'none';
        }
    }, 20000);
}

function siguienteAnuncio() {
    const eventosActivos = eventosMinisterios.filter(e => e.activo);
    if (eventosActivos.length === 0) return;
    
    // Buscar el próximo evento que pueda mostrarse
    let intentos = 0;
    while (intentos < eventosActivos.length) {
        anuncioActual = (anuncioActual + 1) % eventosActivos.length;
        const evento = eventosActivos[anuncioActual];
        
        if (puedeMostrarse(evento)) {
            mostrarAnuncio(evento);
            break;
        }
        
        intentos++;
    }
}

// Función para agregar evento dinámicamente
function agregarEvento(nuevoEvento) {
    eventosMinisterios.push(nuevoEvento);
    console.log(`✅ Evento "${nuevoEvento.titulo}" agregado`);
}

// ============================================
// CHATBOT DE CONSULTAS
// ============================================

const chatbotKnowledge = {
    "horarios": [
        "📅 Domingos: 10:00 AM y 6:00 PM\n📅 Miércoles: 8:00 PM\n📅 Viernes: 7:00 PM (Estudio Bíblico)"
    ],
    
    "ubicacion": [
        "📍 Av. Tillard 1318, B° Cofico\n📍 Barrio Cofico, Córdoba\n📌 Referencia: Zona céntrica del Barrio Cofico"
    ],
    
    "contacto": [
        "📞 Teléfono: +54 9 351-327-7211\n📧 Email: misioneradepoder.central@gmail.com\n🙏 Pedidos de Oración: +54 9 351-327-7211"
    ],
    
    "ministerios": [
        "🎯 **NUESTROS MINISTERIOS:**\n\n" +
        "👩 **Reina Mía** - Departamento de Mujeres\n" +
        "👨 **Hombres de Poder** - Departamento de Hombres\n" +
        "👶 **El Relevo** - Escuelita bíblica para niños\n" +
        "🧒 **Pre x más** - Departamento de Preadolescentes\n" +
        "🧑 **Adolescentes** - Departamento de Adolescentes\n" +
        "🧑‍🎓 **Jóvenes de Conquista** - Departamento de Jóvenes\n" +
        "👨‍👩‍👧‍👦 **Restaurando Familias** - Departamento de Familias\n" +
        "🎥 **Multimedia Misionera de Poder** - Departamento de Multimedia\n" +
        "🎵 **Escuela Maranatha** - Adoradores con excelencia\n" +
        "💃 **Roca Invencible** - Departamento de Arte y Danza\n" +
        "📻 **Dirección Mision Power** - Contenidos digitales"
    ],
    
    "eventos": [
        "🎉 **PRÓXIMOS EVENTOS:**\n\n" +
        "Actualmente estamos organizando eventos especiales que anunciaremos pronto.\n\n" +
        "📱 **Para estar al día:**\n" +
        "• Sigue nuestras redes sociales\n" +
        "• Visita nuestro sitio web\n" +
        "• Suscríbete a Mision Power"
    ],
    
    "donaciones": [
        "💝 **DONACIONES Y OFRENDAS:**\n\n" +
        "Puedes realizar tus donaciones:\n" +
        "• Durante los cultos\n" +
        "• En las oficinas administrativas\n" +
        "• Por transferencia bancaria (consulta datos en oficina)"
    ],
    
    "oracion": [
        "🙏 **MINISTERIO DE ORACIÓN:**\n\n" +
        "**Para pedidos de oración:**\n" +
        "📱 WhatsApp: +54 9 351-327-7211\n\n" +
        "**Horarios especiales de oración:**\n" +
        "• Miércoles 7:00 PM - Noche de Poder\n" +
        "• Lunes a Viernes - Oración matutina"
    ],
    
    "mision power": [
        "📻 **MISION POWER - NUESTRA PLATAFORMA MULTIMEDIA:**\n\n" +
        "🔗 **Sitio web:** https://misionpower.com/\n\n" +
        "🎧 **Contenidos disponibles:**\n" +
        "• Transmisiones en vivo\n" +
        "• Podcasts y enseñanzas\n" +
        "• Música cristiana\n" +
        "• Programación especial"
    ]
};

let chatbotInitialized = false;

function initializeChatbot() {
    if (chatbotInitialized) return;
    chatbotInitialized = true;
    
    console.log('🤖 Inicializando chatbot...');
    
    const chatbotHTML = `
        <button id="chatbot-toggle" style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #d4af37;
            color: black;
            border: none;
            padding: 12px 20px;
            border-radius: 50px;
            cursor: pointer;
            z-index: 1000;
            font-family: 'Cinzel', serif;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        ">
            <span>💬</span>
            <span>Consultas</span>
        </button>

        <div id="chatbot-container" style="
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 350px;
            height: 500px;
            background: rgba(20, 20, 20, 0.95);
            border-radius: 10px;
            border: 1px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            display: none;
            flex-direction: column;
            z-index: 1001;
            backdrop-filter: blur(10px);
            overflow: hidden;
        ">
            <div id="chatbot-header" style="
                background: #d4af37;
                color: black;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            ">
                <h4 style="margin: 0; font-size: 1.1rem;">🤖 Asistente Virtual</h4>
                <button id="close-chatbot" style="
                    background: none;
                    border: none;
                    color: black;
                    font-size: 1.8rem;
                    cursor: pointer;
                    line-height: 1;
                    padding: 0;
                    width: 30px;
                    height: 30px;
                ">×</button>
            </div>
            
            <div id="chatbot-messages" style="
                flex: 1;
                padding: 15px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 10px;
            ">
                <div class="bot-message" style="
                    align-self: flex-start;
                    background: rgba(40, 40, 40, 0.8);
                    padding: 10px 15px;
                    border-radius: 15px;
                    border-top-left-radius: 5px;
                    max-width: 80%;
                    color: #f0f0f0;
                    line-height: 1.4;
                ">
                    ¡Hola! Soy el asistente de Misionera de Poder.
                </div>
                <div class="bot-message" style="
                    align-self: flex-start;
                    background: rgba(40, 40, 40, 0.8);
                    padding: 10px 15px;
                    border-radius: 15px;
                    border-top-left-radius: 5px;
                    max-width: 80%;
                    color: #f0f0f0;
                    line-height: 1.4;
                ">
                    Pregúntame sobre: horarios, ubicación, contacto o ministerios.
                </div>
            </div>
            
            <div id="quick-questions" style="
                padding: 10px 15px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            ">
                <button class="quick-btn" data-q="horarios" style="
                    padding: 6px 12px;
                    background: rgba(212, 175, 55, 0.1);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    color: #ffd700;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.3s ease;
                ">Horarios</button>
                <button class="quick-btn" data-q="ubicacion" style="
                    padding: 6px 12px;
                    background: rgba(212, 175, 55, 0.1);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    color: #ffd700;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.3s ease;
                ">Ubicación</button>
                <button class="quick-btn" data-q="contacto" style="
                    padding: 6px 12px;
                    background: rgba(212, 175, 55, 0.1);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    color: #ffd700;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.3s ease;
                ">Contacto</button>
                <button class="quick-btn" data-q="ministerios" style="
                    padding: 6px 12px;
                    background: rgba(212, 175, 55, 0.1);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    color: #ffd700;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    transition: all 0.3s ease;
                ">Ministerios</button>
            </div>
            
            <div id="chatbot-input" style="
                padding: 15px;
                display: flex;
                gap: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            ">
                <input type="text" id="user-input" placeholder="Escribe tu pregunta..." style="
                    flex: 1;
                    padding: 10px 15px;
                    background: rgba(50, 50, 50, 0.8);
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    border-radius: 20px;
                    color: #f0f0f0;
                    font-family: inherit;
                ">
                <button id="send-btn" style="
                    padding: 10px 20px;
                    background: #d4af37;
                    color: black;
                    border: none;
                    border-radius: 20px;
                    cursor: pointer;
                    font-family: 'Cinzel', serif;
                    font-weight: 600;
                ">Enviar</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    setupChatbotEvents();
}

function setupChatbotEvents() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const closeBtn = document.getElementById('close-chatbot');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const quickBtns = document.querySelectorAll('.quick-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) {
        console.error('❌ No se encontraron elementos del chatbot');
        return;
    }
    
    toggleBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'flex';
        userInput.focus();
    });
    
    closeBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
    });
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    sendBtn.addEventListener('click', sendMessage);
    
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const questionType = this.getAttribute('data-q');
            const question = `¿${questionType}?`;
            addMessage(question, 'user');
            
            setTimeout(() => {
                const response = getChatbotResponse(questionType);
                addMessage(response, 'bot');
            }, 500);
        });
    });
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (!message) return;
    
    addMessage(message, 'user');
    
    setTimeout(() => {
        const response = getChatbotResponse(message);
        addMessage(response, 'bot');
    }, 500);
    
    userInput.value = '';
    userInput.focus();
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender + '-message';
    messageDiv.textContent = text;
    
    messageDiv.style.cssText = sender === 'bot' ? `
        align-self: flex-start;
        background: rgba(40, 40, 40, 0.8);
        padding: 10px 15px;
        border-radius: 15px;
        border-top-left-radius: 5px;
        max-width: 80%;
        color: #f0f0f0;
        line-height: 1.4;
        margin-bottom: 10px;
    ` : `
        align-self: flex-end;
        background: rgba(212, 175, 55, 0.2);
        padding: 10px 15px;
        border-radius: 15px;
        border-top-right-radius: 5px;
        max-width: 80%;
        color: #f0f0f0;
        line-height: 1.4;
        margin-bottom: 10px;
        border: 1px solid rgba(212, 175, 55, 0.2);
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getChatbotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hola') || lowerMsg.includes('buenas')) {
        return "¡Hola! Bienvenido/a a **Misionera de Poder Iglesia Madre**. Soy tu asistente virtual. ¿En qué puedo ayudarte?\n\nPuedo informarte sobre: Horarios, Ubicación, Contacto, Ministerios, Eventos, Donaciones, Oración y Mision Power.";
    }
    
    if (lowerMsg.includes('gracias')) {
        return "¡De nada! Que Dios te bendiga abundantemente.\n\n¿Hay algo más en lo que pueda ayudarte?";
    }
    
    if (lowerMsg.includes('adios') || lowerMsg.includes('chao')) {
        return "¡Hasta luego! Que tengas un día lleno de la gracia de Dios.\n\n¡Te esperamos en nuestros servicios!";
    }
    
    for (const [keyword, responses] of Object.entries(chatbotKnowledge)) {
        if (lowerMsg.includes(keyword)) {
            return responses[0];
        }
    }
    
    if (lowerMsg.includes('hora') || lowerMsg.includes('cuándo') || lowerMsg.includes('cuando')) {
        return chatbotKnowledge.horarios[0];
    }
    
    if (lowerMsg.includes('dónde') || lowerMsg.includes('donde') || lowerMsg.includes('dirección')) {
        return chatbotKnowledge.ubicacion[0];
    }
    
    if (lowerMsg.includes('teléfono') || lowerMsg.includes('telefono') || lowerMsg.includes('whatsapp')) {
        return chatbotKnowledge.contacto[0];
    }
    
    if (lowerMsg.includes('ministerio')) {
        return chatbotKnowledge.ministerios[0];
    }
    
    if (lowerMsg.includes('evento')) {
        return chatbotKnowledge.eventos[0];
    }
    
    if (lowerMsg.includes('donación')) {
        return chatbotKnowledge.donaciones[0];
    }
    
    if (lowerMsg.includes('oración')) {
        return chatbotKnowledge.oracion[0];
    }
    
    if (lowerMsg.includes('mision power')) {
        return chatbotKnowledge["mision power"][0];
    }
    
    const defaults = [
        "Puedo ayudarte con información sobre:\n\n🎯 **Ministerios** (tenemos 11 áreas de servicio)\n⏰ **Horarios** (domingos, miércoles y viernes)\n📍 **Ubicación** (Av. Tillard 1318, Cofico)\n📞 **Contacto** (teléfono, email, WhatsApp)\n🙏 **Oración** (envía tus peticiones)\n📻 **Mision Power** (nuestra plataforma multimedia)\n\n¿Sobre qué tema necesitas información?",
        
        "¡Claro! Te puedo informar sobre:\n\n• **Ministerios** (Reina Mía, Hombres de Poder, El Relevo, etc.)\n• **Horarios de cultos**\n• **Cómo llegar a nuestra iglesia**\n• **Datos de contacto**\n• **Pedidos de oración**\n• **Eventos especiales**\n• **Mision Power**\n\n¿Qué te gustaría saber primero?"
    ];
    
    return defaults[Math.floor(Math.random() * defaults.length)];
}

// ============================================
// CASAS DE ORACIÓN
// ============================================

const casasOracion = [
    {
        nombre: "Casa de Oración Alas de Fuego",
        barrio: "Villa Los Llanos",
        direccion: "Calle Ejemplo 123",
        dia: "Jueves",
        hora: "20:00",
        responsables: "Guillermo Ochoa y Ruth Rodríguez",
        lat: -31.429,
        lng: -64.230
    },
    {
        nombre: "Casa de Oración Villa Los Llanos",
        barrio: "Villa Los Llanos",
        direccion: "Av. Principal 456",
        dia: "Marties",
        hora: "20:00",
        responsables: "Rubén Godoy y Nancy",
        lat: -31.428,
        lng: -64.232
    },
    {
        nombre: "Casa de Oración Chacras de la Merced",
        barrio: "Chacras de la Merced",
        direccion: "Ruta 9 Km 8",
        dia: "Lunes",
        hora: "19:00",
        responsables: "Tere Darcano",
        lat: -31.431,
        lng: -64.185
    }
];

let mapaCasas;
let marcadores = [];
let mapaInicializado = false;

function inicializarMapaCasas() {
    // Inicializar cuando la sección sea visible
    const seccionCasas = document.querySelector("#casas-oracion");
    if (seccionCasas) {
        const observerCasas = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    seccionCasas.classList.add("visible");
                    iniciarMapa();
                    mostrarResultadosBusqueda('');
                }
            });
        }, { threshold: 0.3 });

        observerCasas.observe(seccionCasas);
    }
    
    // Configurar búsqueda de casas
    const buscarBtn = document.getElementById("buscarCasas");
    const barrioInput = document.getElementById("barrioInput");
    
    if (buscarBtn && barrioInput) {
        buscarBtn.addEventListener("click", () => {
            mostrarResultadosBusqueda(barrioInput.value);
        });
        
        barrioInput.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                mostrarResultadosBusqueda(barrioInput.value);
            }
        });
    }
}

function iniciarMapa() {
    if (mapaInicializado || !document.getElementById("mapa-casas")) return;
    
    mapaCasas = L.map("mapa-casas").setView([-31.4167, -64.1833], 12);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(mapaCasas);
    
    mapaInicializado = true;
}

function mostrarResultadosBusqueda(barrioInput) {
    if (!mapaInicializado) return;
    
    // Limpiar marcadores anteriores
    marcadores.forEach(m => mapaCasas.removeLayer(m));
    marcadores = [];
    
    const lista = document.getElementById("listaCasas");
    if (!lista) return;
    
    // Filtrar casas por barrio
    const casasFiltradas = barrioInput ? 
        casasOracion.filter(casa => 
            casa.barrio.toLowerCase().includes(barrioInput.toLowerCase())
        ) : 
        casasOracion;
    
    lista.innerHTML = '';
    
    if (casasFiltradas.length === 0) {
        lista.innerHTML = '<p>No se encontraron casas de oración en ese barrio.</p>';
        return;
    }
    
    // Mostrar casas encontradas
    casasFiltradas.forEach(casa => {
        // Agregar marcador al mapa
        const marker = L.marker([casa.lat, casa.lng]).addTo(mapaCasas);
        
        marker.bindPopup(`
            <strong>${casa.nombre}</strong><br>
            <strong>Barrio:</strong> ${casa.barrio}<br>
            <strong>Dirección:</strong> ${casa.direccion}<br>
            <strong>Día:</strong> ${casa.dia} ${casa.hora}<br>
            <strong>Responsables:</strong> ${casa.responsables}
        `);
        
        marcadores.push(marker);
        
        // Crear tarjeta en la lista
        const card = document.createElement("div");
        card.className = "casa-card";
        card.innerHTML = `
            <h4>${casa.nombre}</h4>
            <p><strong>Barrio:</strong> ${casa.barrio}</p>
            <p><strong>Dirección:</strong> ${casa.direccion}</p>
            <p><strong>Día:</strong> ${casa.dia} ${casa.hora}</p>
            <p><strong>Responsables:</strong> ${casa.responsables}</p>
        `;
        
        card.addEventListener("click", () => {
            mapaCasas.setView([casa.lat, casa.lng], 14);
            marker.openPopup();
        });
        
        lista.appendChild(card);
    });
    
    // Ajustar vista del mapa
    if (marcadores.length > 0) {
        const grupo = L.featureGroup(marcadores);
        mapaCasas.fitBounds(grupo.getBounds().pad(0.1));
    }
}

// ============================================
// FUNCIONES DE UTILIDAD Y DEBUG
// ============================================

// Función para resetear la animación
window.resetAnimation = function() {
    console.log('🔄 Reiniciando animación...');
    
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    const churchLogo = document.querySelector('.church-logo');
    const logoContainer = document.getElementById('logoContainer');
    
    if (!introScreen || !mainContent) return;
    
    // Mostrar intro screen nuevamente
    introScreen.style.display = 'flex';
    mainContent.classList.remove('visible');
    
    // Resetear clases de animación
    const revealOverlay = document.querySelector('.reveal-overlay');
    const revealMask = document.querySelector('.reveal-mask');
    const revealGradient = document.querySelector('.reveal-gradient');
    
    if (revealOverlay) revealOverlay.classList.remove('active', 'fade-out');
    if (revealMask) revealMask.classList.remove('revealing');
    if (revealGradient) revealGradient.classList.remove('revealing');
    if (churchLogo) churchLogo.classList.remove('concentric-pulse');
    if (logoContainer) {
        logoContainer.classList.remove('disappearing');
        logoContainer.style.pointerEvents = 'auto';
    }
    
    // Resetear título
    const churchTitle = document.querySelector('.church-title');
    const churchSubtitle = document.querySelector('.church-subtitle');
    
    if (churchTitle) {
        churchTitle.classList.remove('slide-fade');
        churchTitle.style.opacity = '0';
    }
    if (churchSubtitle) {
        churchSubtitle.classList.remove('slide-fade');
        churchSubtitle.style.opacity = '0';
    }
    
    console.log('✅ Animación reiniciada');
};

// Función para agregar evento dinámico
window.agregarEventoMinisterio = function(titulo, fecha, descripcion, ministerio, tipo = "flotante", mostrarCada = 2, enlace = "#") {
    const nuevoEvento = {
        id: eventosMinisterios.length + 1,
        titulo: titulo,
        fecha: fecha,
        descripcion: descripcion,
        ministerio: ministerio,
        tipo: tipo,
        activo: true,
        mostrarCada: mostrarCada,
        enlace: enlace
    };
    
    agregarEvento(nuevoEvento);
    console.log(`🎪 Evento "${titulo}" agregado exitosamente`);
    return nuevoEvento;
};

// Función para ver eventos activos
window.verEventosActivos = function() {
    const activos = eventosMinisterios.filter(e => e.activo);
    console.log(`📅 Eventos activos (${activos.length}):`, activos);
    return activos;
};

// Función para limpiar eventos del localStorage
window.limpiarEventosStorage = function() {
    const keys = Object.keys(localStorage);
    let eliminados = 0;
    
    keys.forEach(key => {
        if (key.startsWith('ultima_vez_')) {
            localStorage.removeItem(key);
            eliminados++;
        }
    });
    
    console.log(`🗑️ Se eliminaron ${eliminados} eventos del almacenamiento`);
    console.log('🔄 Recarga la página para ver los anuncios nuevamente');
    return eliminados;
};

// Función para forzar mostrar un evento específico
window.mostrarEventoAhora = function(id) {
    const evento = eventosMinisterios.find(e => e.id === id);
    if (evento) {
        mostrarAnuncio(evento);
        console.log(`▶️ Mostrando evento: ${evento.titulo}`);
    } else {
        console.log(`❌ No se encontró evento con ID: ${id}`);
    }
};

// Función para activar/desactivar eventos
window.toggleEvento = function(id, activo) {
    const evento = eventosMinisterios.find(e => e.id === id);
    if (evento) {
        evento.activo = activo;
        console.log(`✅ Evento ${id} ${activo ? 'activado' : 'desactivado'}: ${evento.titulo}`);
    }
};

// Inicialización automática de eventos de ejemplo si está vacío
if (eventosMinisterios.length === 0) {
    agregarEvento({
        id: 1,
        titulo: "Bienvenido a Misionera de Poder",
        fecha: "Cada domingo - 10:00 AM y 6:00 PM",
        descripcion: "Te invitamos a nuestros cultos dominicales",
        ministerio: "general",
        tipo: "banner",
        activo: true,
        mostrarCada: 0,
        enlace: "#inicio"
    });
}

console.log('✅ Script cargado completamente');
console.log('🔧 Funciones disponibles:');
console.log('   - resetAnimation()');
console.log('   - agregarEventoMinisterio()');
console.log('   - verEventosActivos()');
console.log('   - limpiarEventosStorage()');
console.log('   - mostrarEventoAhora(id)');
console.log('   - toggleEvento(id, activo)');