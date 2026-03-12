// ======================================================
// CHATBOT EXCLUSIVO PARA REINA MÍA - VERSIÓN REAL
// Departamento de Mujeres - Misionera de Poder
// ======================================================

// Base de conocimiento específica para Reina Mía (TU CONTENIDO ORIGINAL)
const reinaChatbotKnowledge = {
    "horarios": [
        "Nuestras Reuniones son los días viernes cada 15 días, ya que vamos intercalando con las reuniones de Hombres, a las 20 PM."
    ],
    
    "contacto": [
        "📧 Email: mariamarisachuquispuma@hotmail.com",
        "📞 Teléfono: +54 351 318-3910",
        "📱 WhatsApp: +54 351 318-3910",
        "👩‍💼 Líder: Pastora Marisa Chuquispuma de Paz",
        "📍 Ubicación: AUDITORIO MAYOR  -AV. TILLARD 1318 B° COFICO"
    ],
    
    "eventos": [
        "Todavia no hay eventos cargados."
    ],
    
    "inscribirse": [
        "Llama al +54 351 318-3910 para más información sobre inscripciones",
        "También puedes inscribirte por WhatsApp: +54 351 318-3910"
    ],
    
    "redes": [
        "📘 Facebook: https://www.facebook.com/congresorm",
        "Youtube: https://www.youtube.com/channel/UCi-JDJVE5nbTrq8lkV6YrfA"
    ],

    "whatsapp": [
        "📱 WhatsApp: +54 351 318-3910",
        "Envía 'Hola' a nuestro WhatsApp para:\n• Información de eventos\n• Peticiones de oración\n• Consultas generales\n• Inscripciones",
    ],
    
    "ubicacion": [
        "📍 Nos reunimos en: AUDITORIO MAYOR  -AV. TILLARD 1318 B° COFICO",
        "🏢 Salón de mujeres (segundo piso, ala derecha)",
        "♿ Acceso para personas con movilidad reducida",
    ],
    
    "oracion": [
        "🙏 ¡Claro que podemos orar por ti!",
        "Tenemos un grupo de intercesión de mujeres que ora diariamente",
        "Línea de oración 24/7: +54 351 318-3910"
    ],
    
    "estudio": [
        "📖 Martes 7pm: Estudio bíblico para mujeres",
        "👩‍👩‍👧‍👦 Grupos pequeños por edades:\n• Jóvenes (18-30)\n• Adultas (31-50)\n• Maduras (51+)",
        "🎓 Clases de discipulado para nuevas creyentes",
        "📚 Biblioteca de recursos para mujeres disponible"
    ],
    
    "lider": [
        "👩‍💼 Nuestra líder es la Pastora Marisa Chuquispuma de Paz",
        "📞 Contacto de la pastora: +54 351 318-3910",
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let chatbotInitialized = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

// Inicializar el chatbot cuando se cargue la página
function initializeReinaChatbot() {
    if (chatbotInitialized) return;
    
    console.log('👑 Chatbot Reina Mía - Inicializando...');
    
    // Crear elementos del DOM
    createChatbotElements();
    
    // Configurar eventos del chatbot
    setupChatbotEvents();
    
    // Configurar los botones de la página
    setupPageButtons();
    
    chatbotInitialized = true;
    console.log('✅ Chatbot Reina Mía listo');
}

// Crear elementos HTML del chatbot
function createChatbotElements() {
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="reina-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="reina-chatbot-header">
                <h4>👑 Reina Mía - Asistente</h4>
                <button id="reina-close-chatbot" title="Cerrar">&times;</button>
            </div>
            
            <!-- Mensajes -->
            <div id="reina-chatbot-messages">
                <div class="reina-bot-message">¡Hola, reina! 👑 Soy tu asistente virtual de Reina Mía.</div>
                <div class="reina-bot-message">Estoy aquí para ayudarte con información sobre nuestro departamento de mujeres.</div>
                <div class="reina-bot-message">Puedes preguntarme sobre: horarios, eventos, contacto, redes sociales, inscripciones, etc.</div>
            </div>
            
            <!-- Input -->
            <div id="reina-chatbot-input">
                <input type="text" id="reina-user-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
                <button id="reina-send-btn" title="Enviar">➤</button>
            </div>
            
            <!-- Botones rápidos -->
            <div id="reina-quick-questions">
                <button class="reina-quick-btn" data-question="¿Cuáles son los horarios?">🕒 Horarios</button>
                <button class="reina-quick-btn" data-question="¿Cómo me contacto?">📞 Contacto</button>
                <button class="reina-quick-btn" data-question="¿Cuáles eventos hay?">📅 Eventos</button>
                <button class="reina-quick-btn" data-question="¿Tienen Facebook?">📘 Facebook</button>
            </div>
        </div>

        <!-- Botón flotante para abrir chatbot -->
        <button id="reina-chatbot-toggle" title="Abrir chat de Reina Mía">👑</button>
    `;
    
    // Insertar en el body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Aplicar estilos
    addChatbotStyles();
}

// Añadir estilos CSS para el chatbot - CON DISEÑO REAL Y CORRECCIONES
function addChatbotStyles() {
    const styles = `
        <style>
            /* VARIABLES REALES */
            :root {
                --purpura-real: #6A0DAD;
                --purpura-oscuro: #4B0082;
                --purpura-claro: #9370DB;
                --oro-brillante: #FFD700;
                --oro-oscuro: #DAA520;
                --blanco-real: #F8F8FF;
                --beige-real: #FFF8DC;
            }
            
            /* Chatbot Container - ESTILO REAL */
            #reina-chatbot-container {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 350px;
                max-width: 90vw;
                height: 500px;
                max-height: 70vh;
                background: linear-gradient(135deg, rgba(75, 0, 130, 0.95), rgba(106, 13, 173, 0.95));
                border: 3px solid var(--oro-brillante);
                border-radius: 20px;
                box-shadow: 
                    0 15px 35px rgba(106, 13, 173, 0.5),
                    0 0 50px rgba(255, 215, 0, 0.3) inset;
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                backdrop-filter: blur(10px);
                font-family: 'Cormorant Garamond', serif;
            }
            
            /* Header Real */
            #reina-chatbot-header {
                background: linear-gradient(135deg, var(--purpura-oscuro), var(--purpura-real));
                color: var(--oro-brillante);
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Cinzel', serif;
                font-size: 1.4rem;
                font-weight: 700;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                border-bottom: 2px solid var(--oro-brillante);
            }
            
            #reina-close-chatbot {
                background: transparent;
                border: none;
                color: var(--oro-brillante);
                font-size: 1.8rem;
                cursor: pointer;
                font-weight: bold;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            #reina-close-chatbot:hover {
                background: rgba(255, 215, 0, 0.2);
                transform: rotate(90deg);
            }
            
            /* Mensajes - ARREGLADO PARA TEXTO LARGO */
            #reina-chatbot-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;
                background: linear-gradient(rgba(75, 0, 130, 0.1), rgba(106, 13, 173, 0.1));
            }
            
            .reina-bot-message {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(218, 165, 32, 0.1));
                border: 1px solid rgba(255, 215, 0, 0.3);
                border-radius: 15px 15px 15px 5px;
                padding: 15px;
                color: var(--beige-real);
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-start;
                position: relative;
                box-shadow: 0 3px 10px rgba(0,0,0,0.2);
                word-wrap: break-word; /* ARREGLADO: Permite que el texto largo se ajuste */
                overflow-wrap: break-word; /* ARREGLADO: Permite que el texto largo se ajuste */
                white-space: pre-line; /* ARREGLADO: Respeta los saltos de línea */
                min-width: 50px; /* Evita que sea muy pequeño */
            }
            
            .reina-bot-message::before {
                content: '👑';
                position: absolute;
                left: -10px;
                top: -10px;
                background: var(--purpura-real);
                color: var(--oro-brillante);
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                border: 2px solid var(--oro-brillante);
                box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            }
            
            .reina-user-message {
                background: linear-gradient(135deg, rgba(147, 112, 219, 0.2), rgba(106, 13, 173, 0.25));
                border: 1px solid rgba(147, 112, 219, 0.4);
                border-radius: 15px 15px 5px 15px;
                padding: 15px;
                color: var(--beige-real);
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-end;
                text-align: right;
                box-shadow: 0 3px 10px rgba(147, 112, 219, 0.2);
                word-wrap: break-word; /* ARREGLADO: Permite que el texto largo se ajuste */
                overflow-wrap: break-word; /* ARREGLADO: Permite que el texto largo se ajuste */
                white-space: pre-line; /* ARREGLADO: Respeta los saltos de línea */
            }
            
            /* Input Real */
            #reina-chatbot-input {
                padding: 15px;
                display: flex;
                gap: 10px;
                border-top: 2px solid rgba(255, 215, 0, 0.3);
                background: rgba(75, 0, 130, 0.3);
            }
            
            #reina-user-input {
                flex: 1;
                padding: 12px 15px;
                border: 2px solid var(--purpura-claro);
                border-radius: 25px;
                background: rgba(0, 0, 0, 0.3);
                color: var(--beige-real);
                font-family: 'Playfair Display', serif;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            
            #reina-user-input:focus {
                outline: none;
                border-color: var(--oro-brillante);
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
                background: rgba(0, 0, 0, 0.4);
            }
            
            #reina-send-btn {
                padding: 12px 25px;
                background: linear-gradient(135deg, var(--oro-brillante), var(--oro-oscuro));
                color: var(--purpura-oscuro);
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Cinzel', serif;
                font-weight: 700;
                font-size: 1.1rem;
                transition: all 0.3s ease;
                min-width: 60px;
            }
            
            #reina-send-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(218, 165, 32, 0.6);
                background: linear-gradient(135deg, var(--oro-oscuro), var(--oro-brillante));
            }
            
            /* Botones rápidos reales */
            #reina-quick-questions {
                padding: 15px;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                border-top: 2px solid rgba(255, 215, 0, 0.2);
                background: rgba(75, 0, 130, 0.4);
            }
            
            .reina-quick-btn {
                padding: 10px 15px;
                background: linear-gradient(135deg, rgba(147, 112, 219, 0.3), rgba(106, 13, 173, 0.4));
                border: 1px solid rgba(255, 215, 0, 0.4);
                border-radius: 20px;
                color: var(--oro-brillante);
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.3s ease;
                font-family: 'Playfair Display', serif;
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .reina-quick-btn:hover {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(218, 165, 32, 0.4));
                transform: translateY(-3px);
                box-shadow: 0 5px 10px rgba(212, 175, 55, 0.3);
                color: var(--blanco-real);
            }
            
            /* Botón flotante real */
            #reina-chatbot-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, var(--purpura-real), var(--purpura-oscuro));
                color: var(--oro-brillante);
                border: 3px solid var(--oro-brillante);
                border-radius: 50%;
                width: 70px;
                height: 70px;
                font-size: 2rem;
                cursor: pointer;
                box-shadow: 
                    0 10px 25px rgba(106, 13, 173, 0.6),
                    0 0 30px rgba(255, 215, 0, 0.4);
                z-index: 9999;
                transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Cinzel', serif;
                font-weight: 700;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            }
            
            #reina-chatbot-toggle:hover {
                transform: scale(1.15) rotate(15deg);
                box-shadow: 
                    0 15px 35px rgba(106, 13, 173, 0.8),
                    0 0 40px rgba(255, 215, 0, 0.6);
            }
            
            #reina-chatbot-toggle:active {
                transform: scale(0.95);
            }
            
            /* Scrollbar personalizada real */
            #reina-chatbot-messages::-webkit-scrollbar {
                width: 8px;
            }
            
            #reina-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 215, 0, 0.1);
                border-radius: 10px;
            }
            
            #reina-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(var(--purpura-claro), var(--purpura-real));
                border-radius: 10px;
            }
            
            #reina-chatbot-messages::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(var(--purpura-real), var(--purpura-claro));
            }
            
            /* Enlaces dentro del chat - ARREGLADO */
            .reina-bot-message a,
            .reina-user-message a {
                color: var(--oro-brillante);
                text-decoration: underline;
                word-break: break-all; /* ARREGLADO: Permite que los enlaces largos se rompan */
            }
            
            .reina-bot-message a:hover,
            .reina-user-message a:hover {
                color: var(--blanco-real);
                text-decoration: none;
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                #reina-chatbot-container {
                    width: 95vw;
                    right: 2.5vw;
                    bottom: 80px;
                    height: 60vh;
                }
                
                #reina-chatbot-toggle {
                    width: 60px;
                    height: 60px;
                    font-size: 1.8rem;
                    bottom: 15px;
                    right: 15px;
                }
                
                .reina-quick-btn {
                    font-size: 0.75rem;
                    padding: 8px 12px;
                }
                
                /* En móviles, las burbujas ocupan más ancho */
                .reina-bot-message,
                .reina-user-message {
                    max-width: 95%;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Configurar eventos del chatbot
function setupChatbotEvents() {
    const toggleBtn = document.getElementById('reina-chatbot-toggle');
    const closeBtn = document.getElementById('reina-close-chatbot');
    const sendBtn = document.getElementById('reina-send-btn');
    const userInput = document.getElementById('reina-user-input');
    const quickBtns = document.querySelectorAll('.reina-quick-btn');
    const chatbotContainer = document.getElementById('reina-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) {
        console.error('❌ No se encontraron elementos del chatbot');
        return;
    }
    
    // Abrir chatbot con botón flotante
    toggleBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'flex';
        if (userInput) userInput.focus();
        
        // Efecto visual
        toggleBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            toggleBtn.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Cerrar chatbot
    closeBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
    });
    
    // Enviar con Enter
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatbotMessage();
        }
    });
    
    // Enviar con botón
    sendBtn.addEventListener('click', sendChatbotMessage);
    
    // Botones rápidos
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendChatbotMessage();
        });
    });
    
    // Cerrar al hacer clic fuera (opcional)
    document.addEventListener('click', function(e) {
        if (chatbotContainer && chatbotContainer.style.display === 'flex') {
            if (!chatbotContainer.contains(e.target) && 
                !toggleBtn.contains(e.target)) {
                chatbotContainer.style.display = 'none';
            }
        }
    });
}

// Configurar los botones de la página
function setupPageButtons() {
    console.log('🔍 Configurando botones de la página...');
    
    // 1. Botón "Quiero ser parte" (por ID)
    const joinButton = document.getElementById('quiero-ser-parte');
    if (joinButton) {
        joinButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🎯 Botón "Quiero ser parte" clickeado');
            openChatbotWithCustomMessage(
                "🎉 ¡Excelente decisión! Nos encantaría que formes parte de nuestra hermandad.\n\nTe voy a guiar paso a paso para que te unas a Reina Mía:",
                'unirse'
            );
        });
        
        // Agregar indicador visual
        joinButton.style.cursor = 'pointer';
        joinButton.title = "Habla con nuestro asistente para unirte";
    }
    
    // 2. Botón "Contáctanos" (por ID)
    const contactButton = document.getElementById('contact-chatbot');
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🎯 Botón "Contáctanos" clickeado');
            openChatbotWithCustomMessage(
                "📞 ¡Hola! Estoy aquí para ayudarte a contactar con Reina Mía.\n\n¿Prefieres que te dé nuestro email, teléfono, WhatsApp o información de redes sociales?",
                'contacto'
            );
        });
        
        // Agregar indicador visual
        contactButton.style.cursor = 'pointer';
        contactButton.title = "Habla con nuestro asistente para contactarnos";
    }
    
    // 3. Buscar otros botones por texto (por si hay más)
    setTimeout(() => {
        const buttons = document.querySelectorAll('a, button');
        buttons.forEach(button => {
            const text = button.textContent.trim().toLowerCase();
            
            // Detectar "Contáctanos" en cualquier botón
            if ((text.includes('contáctanos') || text.includes('contactanos')) && 
                button.id !== 'contact-chatbot') {
                
                button.addEventListener('click', function(e) {
                    if (this.href && this.href.includes('mailto:')) {
                        e.preventDefault();
                        openChatbotWithCustomMessage(
                            "👑 ¡Hola! Gracias por querer contactarnos. Puedo proporcionarte toda la información de contacto que necesitas.",
                            'contacto'
                        );
                    }
                });
                
                button.style.cursor = 'pointer';
            }
            
            // Detectar "Unirme" o "Inscribirme" en otros botones
            if ((text.includes('unirme') || text.includes('inscribirme')) && 
                button.id !== 'quiero-ser-parte') {
                
                button.addEventListener('click', function(e) {
                    if (this.href === '#' || this.href.includes('javascript')) {
                        e.preventDefault();
                        openChatbotWithCustomMessage(
                            "🎊 ¡Qué bien que quieras unirte a nosotras! Te voy a guiar en el proceso.",
                            'unirse'
                        );
                    }
                });
                
                button.style.cursor = 'pointer';
            }
        });
    }, 500);
    
    console.log('✅ Botones configurados correctamente');
}

// Función para abrir chatbot con mensaje personalizado
function openChatbotWithCustomMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('reina-chatbot-container');
    const userInput = document.getElementById('reina-user-input');
    
    if (!chatbotContainer) {
        console.error('❌ No se encontró el chatbot container');
        return;
    }
    
    // Mostrar el chatbot
    chatbotContainer.style.display = 'flex';
    
    // Efecto de animación
    chatbotContainer.style.opacity = '0';
    chatbotContainer.style.transform = 'translateY(20px) scale(0.95)';
    
    setTimeout(() => {
        chatbotContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        chatbotContainer.style.opacity = '1';
        chatbotContainer.style.transform = 'translateY(0) scale(1)';
    }, 10);
    
    // Limpiar mensajes anteriores (dejar solo los 3 primeros de bienvenida)
    const messagesContainer = document.getElementById('reina-chatbot-messages');
    if (messagesContainer) {
        const children = Array.from(messagesContainer.children);
        if (children.length > 3) {
            for (let i = 3; i < children.length; i++) {
                messagesContainer.removeChild(children[i]);
            }
        }
    }
    
    // Agregar mensaje personalizado después de un breve delay
    setTimeout(() => {
        addChatbotMessage(message, 'bot');
        
        // Agregar información adicional según el tipo
        setTimeout(() => {
            if (type === 'unirse') {
                addChatbotMessage(
                    "**Pasos para unirte a Reina Mía:**\n\n" +
                    "1️ **Asiste** a nuestra reunión de los viernes 20PM.\n" +
                    "2️ **Conoce** a nuestras líderes y hermanas\n" +
                    "3 **Participa** en las actividades de bienvenida\n" +
                    "¿Te gustaría saber más sobre algún paso en particular?",
                    'bot'
                );
            } else if (type === 'contacto') {
                addChatbotMessage(
                    "**Opciones de contacto disponibles:**\n\n" +
                    "• 📧 **Email**: mariamarisachuquispuma@hotmail.com\n" +
                    "• 📞 **Teléfono**: +54 351 318-3910\n" +
                    "• 📱 **WhatsApp**: +54 351 318-3910\n" +
                    "• 👩‍💼 **Líder**: Marisa Chuquispuma de Paz\n" +
                    "• 📘 **Facebook**: https://www.facebook.com/congresorm\n\n" +
                    "¿Qué información necesitas específicamente?",
                    'bot'
                );
            }
        }, 1000);
    }, 300);
    
    // Enfocar el input después de 500ms
    if (userInput) {
        setTimeout(() => {
            userInput.focus();
        }, 500);
    }
}

// Enviar mensaje del usuario
function sendChatbotMessage() {
    const userInput = document.getElementById('reina-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Mostrar mensaje del usuario
    addChatbotMessage(message, 'user');
    
    // Procesar y obtener respuesta
    setTimeout(() => {
        const response = getChatbotResponse(message);
        addChatbotMessage(response, 'bot');
    }, 600);
    
    // Limpiar input
    userInput.value = '';
}

// Agregar mensaje al chat - MEJORADO PARA TEXTO LARGO
function addChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('reina-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'reina-bot-message' : 'reina-user-message';
    
    // ARREGLADO: Convertir URLs en enlaces clickeables
    let processedText = text;
    
    // Detectar y convertir enlaces
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    processedText = processedText.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" style="color: #FFD700; text-decoration: underline; word-break: break-all;">${url}</a>`;
    });
    
    // Detectar y convertir emails
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    processedText = processedText.replace(emailRegex, function(email) {
        return `<a href="mailto:${email}" style="color: #FFD700; text-decoration: underline;">${email}</a>`;
    });
    
    // Detectar y convertir teléfonos
    const phoneRegex = /(\+?\d[\d\s\-\(\)]{8,}\d)/g;
    processedText = processedText.replace(phoneRegex, function(phone) {
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        return `<a href="tel:${cleanPhone}" style="color: #FFD700; text-decoration: underline;">${phone}</a>`;
    });
    
    messageDiv.innerHTML = processedText;
    
    messagesContainer.appendChild(messageDiv);
    
    // Auto-scroll al último mensaje
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Efecto de aparición (solo para bot)
    if (sender === 'bot') {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(10px)';
        setTimeout(() => {
            messageDiv.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 10);
    }
}

// Obtener respuesta del chatbot - MEJORADO PARA ENLACES
function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar en base de conocimiento
    for (const [keyword, responses] of Object.entries(reinaChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            const response = responses[Math.floor(Math.random() * responses.length)];
            
            // Si contiene enlace de Facebook
            if (response.includes('facebook.com/congresorm')) {
                return response + '\n\n¿Quieres que te abra Facebook?';
            }
            
            return response;
        }
    }
    
    // Respuestas específicas adicionales
    if (/(face|fb|facebook)/i.test(lowerMessage)) {
        return "👑 **Nuestro Facebook oficial:**\n🔗 https://www.facebook.com/congresorm\n\nAllí compartimos:\n• Eventos especiales\n• Fotos y videos de nuestras reuniones\n• Novedades\n• Transmisiones en vivo\n\n¡Síguenos para estar conectada!";
    }
    
    if (/(teléfono|telefono|celular|llamar|número|numero)/i.test(lowerMessage)) {
        return "📞 **Contacto telefónico:**\n\n• Teléfono principal: +54 351 318-3910\n• WhatsApp: +54 351 318-3910\n• Línea de oración: +54 351 318-3910\n• Emergencias pastorales: +54 351 318-3910";
    }
    
    if (/(hola|buenos|buenas|saludos)/i.test(lowerMessage)) {
        return "👑 ¡Hola, reina! Bienvenida al asistente de Reina Mía. ¿En qué puedo servirte hoy?";
    }
    
    if (/(gracias|thank)/i.test(lowerMessage)) {
        return "¡De nada, reina! 👑\nRecuerda que eres amada y valiosa para Dios.\n\n¿Hay algo más en lo que pueda ayudarte?";
    }
    
    if (/(quiero unirme|ser parte|participar|integrarme)/i.test(lowerMessage)) {
        return "🎉 **Para unirte a Reina Mía:**\n1. Asiste a reunión de los viernes 20pm.\n\nTambién puedes contactarnos:\n• Email: mariamarisachuquispuma@hotmail.com\n• Tel: +54 351 318-3910\n\n¡Te esperamos! 👑";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "Disculpa, no entendí completamente tu pregunta. ¿Podrías reformularla?",
        "Puedo ayudarte con información sobre horarios, eventos, contacto o redes sociales. ¿Qué necesitas saber?",
        "Para consultas específicas, puedes contactarnos:\n📧 mariamarisachuquispuma@hotmail.com\n📞 +54 351 318-3910",
        "¿Podrías especificar tu pregunta? Por ejemplo:\n\"¿Cuáles son los horarios?\"\n\"¿Cómo los contacto?\"\n\"¿Qué eventos hay?\""
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

// Esperar a que cargue completamente la página
window.addEventListener('load', function() {
    // Inicializar después de 1 segundo para asegurar que todo esté listo
    setTimeout(initializeReinaChatbot, 1000);
});

// También inicializar cuando el DOM esté listo (por si acaso)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar después de 2 segundos
    setTimeout(initializeReinaChatbot, 2000);
});

// Funciones públicas para usar desde otros scripts
window.openReinaChatbot = function(type = 'general') {
    if (type === 'contacto') {
        openChatbotWithCustomMessage(
            "👑 ¡Hola! ¿En qué puedo ayudarte hoy?",
            'contacto'
        );
    } else if (type === 'unirse') {
        openChatbotWithCustomMessage(
            "🎊 ¡Qué bien que quieras unirte a Reina Mía!",
            'unirse'
        );
    } else {
        openChatbotWithCustomMessage(
            "👑 ¡Hola! Soy tu asistente de Reina Mía. ¿En qué puedo ayudarte?",
            'general'
        );
    }
};

window.closeReinaChatbot = function() {
    const chatbotContainer = document.getElementById('reina-chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
    }
};

console.log('👑 reina-chatbot.js cargado - Esperando inicialización');