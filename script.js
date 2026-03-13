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
        
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
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
    
    const revealOverlay = document.createElement('div');
    revealOverlay.className = 'reveal-overlay';
    
    const revealMask = document.createElement('div');
    revealMask.className = 'reveal-mask';
    
    const revealGradient = document.createElement('div');
    revealGradient.className = 'reveal-gradient';
    
    revealOverlay.appendChild(revealMask);
    revealOverlay.appendChild(revealGradient);
    introScreen.appendChild(revealOverlay);
    
    function openMainPage() {
        console.log('🚀 Iniciando animación de revelado...');
        
        logoContainer.style.pointerEvents = 'none';
        churchLogo.classList.add('concentric-pulse');
        
        setTimeout(function() {
            revealOverlay.classList.add('active');
            revealMask.classList.add('revealing');
            revealGradient.classList.add('revealing');
            logoContainer.classList.add('disappearing');
            
            setTimeout(function() {
                revealOverlay.classList.add('fade-out');
                
                setTimeout(function() {
                    introScreen.style.display = 'none';
                    mainContent.classList.add('visible');
                    
                    setTimeout(function() {
                        activateTitleAnimation();
                    }, 100);
                    
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    
                    setupScrollAnimations();
                    inicializarSistemaAnuncios(); // Ahora solo muestra el Congreso
                    setTimeout(initializeChatbot, 1500);
                    inicializarMapaCasas();
                    
                }, 400);
                
            }, 1200);
            
        }, 400);
    }
    
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
    
    console.log('✅ JavaScript cargado correctamente');
    console.log('👉 Toca el logo para iniciar la animación');
    console.log('👉 O presiona la tecla Enter');
});

// ============================================
// SISTEMA DE ANUNCIOS DE EVENTOS - SOLO CONGRESO DE MUJERES
// ============================================

const eventosMinisterios = [
    {
        id: 2,
        titulo: "🚨 ¡HOY! Congreso de Mujeres Reina Mía",
        fecha: "13 de Marzo - APERTURA 20:00hs",
        descripcion: "CONGRESO DE MUJERES 'TOCANDO SU TRONO' - ¡Una noche de adoración y empoderamiento que no te puedes perder!",
        ministerio: "mujeres",
        tipo: "banner",
        activo: true,
        enlace: "ministerios/ministerio-mujeres.html#eventos", // Ruta relativa desde la raíz
        mostrarCada: 0
    }
];

let anuncioActual = 0;
let intervaloAnuncios;
let sistemaAnunciosIniciado = false;

function inicializarSistemaAnuncios() {
    if (sistemaAnunciosIniciado) return;
    sistemaAnunciosIniciado = true;
    
    console.log('🎪 Inicializando sistema de anuncios');
    
    if (!document.getElementById('eventoBanner')) {
        crearElementosAnuncios();
    }
    
    setTimeout(() => {
        const eventosActivos = eventosMinisterios.filter(e => e.activo);
        
        if (eventosActivos.length === 0) {
            console.log('📭 No hay eventos activos');
            return;
        }
        
        mostrarAnuncio(eventosActivos[0]);
        
        intervaloAnuncios = setInterval(() => {
            const eventosActivos = eventosMinisterios.filter(e => e.activo);
            if (eventosActivos.length > 0) {
                mostrarAnuncio(eventosActivos[0]);
            }
        }, 120000);
        
        console.log('✅ Sistema de anuncios activo');
        
    }, 1000);
}

function crearElementosAnuncios() {
    // IMPORTANTE: El href del banner lo dejamos como "#" pero luego lo reemplazamos
    const anunciosHTML = `
        <!-- Banner superior -->
        <div id="eventoBanner" class="evento-banner" style="display: none;">
            <div class="banner-content">
                <span class="banner-badge">🔥 ¡MAÑANA! 🔥</span>
                <p id="bannerTitulo">Cargando eventos...</p>
                <a href="javascript:void(0);" id="bannerEnlace" class="banner-btn">Más información</a>
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
                <a href="javascript:void(0);" id="flotanteEnlace" class="btn-flotante">Ver detalles</a>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', anunciosHTML);
}

function mostrarAnuncio(evento) {
    if (!evento || !evento.activo) return;
    
    mostrarBanner(evento);
}

function mostrarBanner(evento) {
    const banner = document.getElementById('eventoBanner');
    const titulo = document.getElementById('bannerTitulo');
    const enlace = document.getElementById('bannerEnlace');
    
    if (!banner || !titulo || !enlace) return;
    
    titulo.textContent = `${evento.titulo} - ${evento.fecha}`;
    
    // CORRECCIÓN: En lugar de solo asignar href, configuramos el enlace manualmente
    // Eliminamos cualquier evento anterior
    enlace.removeAttribute('onclick');
    
    // Asignamos el nuevo comportamiento
    enlace.onclick = function(e) {
        e.preventDefault(); // Prevenimos comportamiento por defecto
        e.stopPropagation(); // Detenemos propagación
        
        // Construir la URL completa correctamente
        // Detectamos si estamos en un subdirectorio o en la raíz
        const pathParts = window.location.pathname.split('/');
        let basePath = '';
        
        // Si estamos dentro de la carpeta ministerios, necesitamos subir un nivel
        if (window.location.pathname.includes('/ministerios/')) {
            basePath = '../';
        }
        
        // Construir la URL completa
        const url = basePath + evento.enlace;
        
        console.log('🔗 Navegando a:', url);
        
        // Navegar a la URL
        window.location.href = url;
        
        return false; // Aseguramos que no pase nada más
    };
    
    // También configuramos el href por si acaso
    enlace.href = 'javascript:void(0);';
    
    // Cambiamos el texto del botón
    enlace.textContent = '¡Ver detalles del Congreso!';
    
    // Estilo especial
    banner.style.background = 'linear-gradient(135deg, #b8860b, #d4af37, #ffd700)';
    banner.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.6)';
    banner.style.borderBottom = '2px solid white';
    banner.style.display = 'flex';
    
    // Botón cerrar
    const closeBtn = document.getElementById('closeBanner');
    if (closeBtn) {
        // Eliminamos eventos anteriores para evitar duplicados
        closeBtn.replaceWith(closeBtn.cloneNode(true));
        const newCloseBtn = document.getElementById('closeBanner');
        newCloseBtn.onclick = function() {
            banner.style.display = 'none';
        };
    }
    
    // Auto-ocultar
    setTimeout(() => {
        if (banner.style.display === 'flex') {
            banner.style.display = 'none';
        }
    }, 30000);
}

// ============================================
// CHATBOT DE CONSULTAS
// ============================================

const chatbotKnowledge = {
    "horarios": [
        "⏰ **HORARIOS DE REUNIONES GENERALES**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "📅 **DOMINGOS**\n" +
        "   • 10:00 AM - Reunión General (Mañana)\n" +
        "   • 20:00 PM - Reunión General (Noche)\n\n" +
        "📅 **MIÉRCOLES**\n" +
        "   • 20:00 PM - Reunión General\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "domingo": [
        "⏰ **REUNIONES DOMINICALES**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "🌅 **DOMINGOS**\n" +
        "   • 10:00 AM - Reunión General\n\n" +
        "🌙 **NOCHE**\n" +
        "   • 20:00 PM - Reunión General\n" +
        "━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "miercoles": [
        "⏰ **REUNIÓN MIÉRCOLES**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "📅 **MIÉRCOLES**\n" +
        "   • 20:00 PM - Reunión General\n\n" +
        "✨ *Una noche especial de poder y oración*" +
        "\n━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "ubicacion": [
        "📍 **UBICACIÓN**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "🏛️ **Misionera de Poder Iglesia Madre**\n" +
        "   • Av. Tillard 1318\n" +
        "   • Barrio Cofico\n" +
        "   • Córdoba Capital\n\n" +
        "🗺️ **Referencia:** Zona céntrica del Barrio Cofico" +
        "\n━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "contacto": [
        "📞 **CONTACTO**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "📱 **WhatsApp:** +54 9 351-327-7211\n" +
        "📧 **Email:** misioneradepoder.central@gmail.com\n" +
        "🙏 **Pedidos de Oración:** Mismo WhatsApp\n" +
        "━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "ministerios": [
        "🎯 **MINISTERIOS DISPONIBLES**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "👩 **Reina Mía** - Departamento de Mujeres\n" +
        "👨 **Hombres de Poder** - Departamento de Hombres\n" +
        "👶 **El Relevo** - Escuelita bíblica para niños\n" +
        "🧒 **Pre x más** - Preadolescentes\n" +
        "🧑 **Adolescentes** - Departamento de Adolescentes\n" +
        "🧑‍🎓 **Jóvenes de Conquista** - Departamento de Jóvenes\n" +
        "👨‍👩‍👧‍👦 **Restaurando Familias** - Familias\n" +
        "🎥 **Multimedia** - Departamento de Multimedia\n" +
        "🎵 **Escuela Maranatha** - Adoración\n" +
        "💃 **Roca Invencible** - Arte y Danza\n" +
        "📻 **Dirección Mision Power** - Contenidos\n" +
        "━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "oracion": [
        "🙏 **MINISTERIO DE ORACIÓN**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "📱 **Pedidos de oración:**\n" +
        "   • WhatsApp: +54 9 351-327-7211\n\n" +
        "⏰ **Horarios especiales:**\n" +
        "   • Miércoles 20:00 PM - Reunión General\n" +
        "   • Lunes a Viernes - Oración matutina" +
        "\n━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "mision power": [
        "📻 **MISION POWER**\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "🌐 **Web:** https://misionpower.com/\n\n" +
        "🎧 **Contenidos:**\n" +
        "   • Transmisiones en vivo\n" +
        "   • Podcasts y enseñanzas\n" +
        "   • Música cristiana\n" +
        "━━━━━━━━━━━━━━━━━━━━━"
    ],
    
    "congreso": [
        "🔥 **¡HOY! CONGRESO DE MUJERES** 🔥\n\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "📅 **Fecha:** 13 de Marzo\n" +
        "⏰ **Apertura:** 20:00hs\n" +
        "🎯 **Tema:** 'TOCANDO SU TRONO'\n\n" +
        "✨ **Una noche de adoración y empoderamiento**\n" +
        "━━━━━━━━━━━━━━━━━━━━━\n" +
        "👉 ¡No te lo pierdas! Todas las mujeres están invitadas."
    ]
};

let chatbotInitialized = false;

function initializeChatbot() {
    if (chatbotInitialized) return;
    chatbotInitialized = true;
    
    console.log('🤖 Inicializando chatbot...');
    
    const chatbotHTML = `
        <button id="chatbot-toggle" class="chatbot-toggle">
            <span>💬</span>
            <span>Consultas</span>
        </button>

        <div id="chatbot-container" class="chatbot-container">
            <div class="chatbot-header">
                <h4>🤖 Asistente Virtual</h4>
                <button id="close-chatbot" class="close-chatbot">×</button>
            </div>
            
            <div id="chatbot-messages" class="chatbot-messages">
                <div class="bot-message">
                    ¡Hola! Soy el asistente de Misionera de Poder. 👋
                </div>
                <div class="bot-message">
                    ⚠️ **¡HOY!** Congreso de Mujeres "Tocando Su Trono" ⚠️
                </div>
                <div class="bot-message">
                    Preguntame sobre:<br>
                    • 📅 Horarios de reuniones<br>
                    • 📍 Ubicación<br>
                    • 📞 Contacto<br>
                    • 🎯 Ministerios<br>
                    • 🔥 Congreso de Mujeres
                </div>
            </div>
            
            <div id="escribiendo-indicator" class="escribiendo" style="display: none;">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            
            <div class="quick-questions">
                <button class="quick-btn" data-q="horarios">📅 Horarios</button>
                <button class="quick-btn" data-q="domingo">🌅 Domingos</button>
                <button class="quick-btn" data-q="ubicacion">📍 Ubicación</button>
                <button class="quick-btn" data-q="contacto">📞 Contacto</button>
                <button class="quick-btn" data-q="ministerios">🎯 Ministerios</button>
                <button class="quick-btn" data-q="congreso">🔥 Congreso Mujeres</button>
            </div>
            
            <div class="chatbot-input">
                <input type="text" id="user-input" placeholder="Escribí tu pregunta..." autocomplete="off">
                <button id="send-btn">Enviar</button>
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
        chatbotContainer.classList.add('active');
        setTimeout(() => userInput.focus(), 300);
    });
    
    closeBtn.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
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
            const questionText = getQuestionText(questionType);
            
            addMessage(questionText, 'user');
            mostrarEscribiendo();
            
            setTimeout(() => {
                ocultarEscribiendo();
                const response = getChatbotResponse(questionType);
                addMessage(response, 'bot');
            }, 1500);
        });
    });
}

function getQuestionText(type) {
    const questions = {
        'horarios': '¿Cuáles son los horarios de las reuniones?',
        'domingo': '¿A qué hora son los cultos de los domingos?',
        'miercoles': '¿Hay reunión los miércoles?',
        'ubicacion': '¿Dónde está ubicada la iglesia?',
        'contacto': '¿Cómo puedo contactarlos?',
        'ministerios': '¿Qué ministerios tienen?',
        'oracion': '¿Cómo puedo pedir oración?',
        'congreso': '¿Qué es el Congreso de Mujeres?'
    };
    return questions[type] || `¿${type}?`;
}

function mostrarEscribiendo() {
    const indicador = document.getElementById('escribiendo-indicator');
    if (indicador) {
        indicador.style.display = 'flex';
    }
}

function ocultarEscribiendo() {
    const indicador = document.getElementById('escribiendo-indicator');
    if (indicador) {
        indicador.style.display = 'none';
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (!message) return;
    
    addMessage(message, 'user');
    userInput.value = '';
    
    mostrarEscribiendo();
    
    setTimeout(() => {
        ocultarEscribiendo();
        const response = getChatbotResponse(message);
        addMessage(response, 'bot');
    }, 2000);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'bot-message' : 'user-message';
    messageDiv.innerHTML = text.replace(/\n/g, '<br>');
    
    messagesContainer.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
}

function getChatbotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hola') || lowerMsg.includes('buenas')) {
        return "👋 **¡Hola!**\n\n" +
               "⚠️ **RECORDATORIO IMPORTANTE:**\n" +
               "🔥 **¡HOY! Congreso de Mujeres 'Tocando Su Trono'**\n" +
               "📅 13 de Marzo - 20:00hs\n\n" +
               "¿En qué más puedo ayudarte?";
    }
    
    if (lowerMsg.includes('gracias')) {
        return "🙏 **¡De nada!**\n\n" +
               "Que Dios te bendiga.\n\n" +
               "Recordá: 🔥 **¡HOY!** Congreso de Mujeres";
    }
    
    if (lowerMsg.includes('congreso') || lowerMsg.includes('mujeres') || lowerMsg.includes('reina mía')) {
        return chatbotKnowledge.congreso[0];
    }
    
    for (const [keyword, responses] of Object.entries(chatbotKnowledge)) {
        if (lowerMsg.includes(keyword)) {
            return responses[0];
        }
    }
    
    if (lowerMsg.includes('hora') || lowerMsg.includes('cuándo')) {
        return chatbotKnowledge.horarios[0];
    }
    
    if (lowerMsg.includes('dónde') || lowerMsg.includes('dirección')) {
        return chatbotKnowledge.ubicacion[0];
    }
    
    return "❓ **No entendí tu consulta**\n\n" +
           "Pero puedo ayudarte con:\n\n" +
           "━━━━━━━━━━━━━━━━━━━━━\n" +
           "⏰ **Horarios:** Domingos 10:00 y 20:00 / Miércoles 20:00\n" +
           "📍 **Ubicación:** Av. Tillard 1318, B° Cofico\n" +
           "📞 **Contacto:** +54 9 351-327-7211\n" +
           "🔥 **CONGRESO MUJERES:** ¡MAÑANA 13 de Marzo!\n" +
           "━━━━━━━━━━━━━━━━━━━━━\n\n" +
           "📝 **Probá preguntando:**\n" +
           "• 'Horarios'\n" +
           "• 'Congreso'\n" +
           "• 'Ubicación'";
}


// ============================================
// FUNCIONES DE UTILIDAD Y DEBUG
// ============================================

window.resetAnimation = function() {
    console.log('🔄 Reiniciando animación...');
    
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    const churchLogo = document.querySelector('.church-logo');
    const logoContainer = document.getElementById('logoContainer');
    
    if (!introScreen || !mainContent) return;
    
    introScreen.style.display = 'flex';
    mainContent.classList.remove('visible');
    
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
    return eliminados;
};

window.mostrarCongresoAhora = function() {
    const evento = eventosMinisterios[0];
    if (evento) {
        mostrarAnuncio(evento);
        console.log(`▶️ Mostrando: ${evento.titulo}`);
    }
};

// ============================================
// CASAS DE ORACIÓN - ANIMACIONES Y DECORACIÓN
// ============================================

function inicializarCasasOracion() {
    console.log('🏠 Inicializando animaciones de casas de oración');
    
    // Verificar que exista la sección
    const seccionCasas = document.getElementById('casas-oracion');
    if (!seccionCasas) return;
    
    // 1. ANIMACIÓN AL HACER SCROLL
    const observerCasas = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando la sección es visible, activar animaciones
                seccionCasas.classList.add('visible');
                
                // Animar cada tarjeta individualmente
                const cards = document.querySelectorAll('.casa-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                });
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    observerCasas.observe(seccionCasas);
    
    // 2. PARALLAX SUAVE EN BACKGROUND
    window.addEventListener('scroll', () => {
        if (!seccionCasas.classList.contains('visible')) return;
        
        const scrollPosition = window.scrollY;
        const seccionTop = seccionCasas.offsetTop;
        const seccionHeight = seccionCasas.offsetHeight;
        
        // Calcular si estamos dentro de la sección
        if (scrollPosition + window.innerHeight > seccionTop && 
            scrollPosition < seccionTop + seccionHeight) {
            
            const relativeScroll = scrollPosition - seccionTop;
            const speed = 0.3;
            
            // Mover el fondo ligeramente
            seccionCasas.style.backgroundPosition = `center ${relativeScroll * speed}px`;
        }
    });
    
    // 3. CREAR ELEMENTOS DECORATIVOS FLOTANTES
    function crearDecoraciones() {
        const simbolos = ['✝', '🙏', '🔥', '✨', '⭐', '🕯️', '📖', '🕊️'];
        
        for (let i = 0; i < 12; i++) {
            const decoracion = document.createElement('div');
            decoracion.className = 'casa-decoracion';
            
            // Posición aleatoria
            decoracion.style.left = `${Math.random() * 100}%`;
            decoracion.style.top = `${Math.random() * 100}%`;
            
            // Símbolo aleatorio
            decoracion.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
            
            // Tamaño aleatorio
            const size = Math.random() * 1.5 + 0.8;
            decoracion.style.fontSize = `${size}rem`;
            
            // Duración aleatoria de animación
            decoracion.style.animationDuration = `${Math.random() * 20 + 15}s`;
            decoracion.style.animationDelay = `${Math.random() * 5}s`;
            
            seccionCasas.appendChild(decoracion);
        }
    }
    
    // Crear decoraciones después de un tiempo
    setTimeout(crearDecoraciones, 2000);
    
    // 4. EFECTO DE BRILLO EN TARJETAS AL PASAR EL MOUSE
    const cards = document.querySelectorAll('.casa-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Crear efecto de brillo que sigue al mouse
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// 5. INICIALIZAR CUANDO LA PÁGINA ESTÉ LISTA
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que la animación de revelado principal termine
    setTimeout(() => {
        inicializarCasasOracion();
    }, 2000);
});

// 6. EFECTO DE PARPADEO EN LAS TARJETAS (opcional)
setInterval(() => {
    const cards = document.querySelectorAll('.casa-card');
    if (cards.length > 0 && Math.random() > 0.7) { // 30% de probabilidad cada intervalo
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        randomCard.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.5)';
        setTimeout(() => {
            randomCard.style.boxShadow = '';
        }, 500);
    }
}, 3000);

console.log('✅ Script cargado completamente');
console.log('🔧 Funciones disponibles:');
console.log('   - resetAnimation()');
console.log('   - mostrarCongresoAhora()');
console.log('   - limpiarEventosStorage()');