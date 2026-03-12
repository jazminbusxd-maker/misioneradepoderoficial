// ======================================================
// CHATBOT CYBERPUNK PARA ADOLESCENTES (13-18 AÑOS) - MEJORADO
// Ministerio de Adolescentes - Misionera de Poder
// ======================================================

// Base de conocimiento específica para Adolescentes
const adolescentesChatbotKnowledge = {
    "horarios": [
        "🕐 Horarios de Adolescentes:\n• Sábados: 17:30 HS - Reunión especial\n• Ubicación: AUDITORIO MAYOR AV. TILLARD 1318\n• Edades: 13 a 18 años\n• Duración: 2 horas aprox."
    ],
    
    "contacto": [
        "📱 Contacto directo:\n👥 Líderes: Monica Juncos y Emmanuel Orellana\n📞 WhatsApp: +54 9 351 265-1111\n📍 Ubicación: AV. TILLARD 1318 B° COFICO\n📸 Instagram: @adolescentes.mp"
    ],
    
    "reuniones": [
        "🎯 Encuentro semanal - Sábados 17:30 HS\n\nIncluye:\n• Adoración contemporánea\n• Enseñanzas relevantes para adolescentes\n• Espacios de diálogo abierto\n• Juegos divertidos\n• Comunidad real\n• Entrada libre para todos"
    ],
    
    "unirse": [
        "🎯 ¡Genial que quieras unirte!\n\nProceso simple:\n1. Ven este sábado 17:30 HS\n2. Ubicación: AV. TILLARD 1318 (Auditorio Mayor)\n3. Pregunta por Monica o Emmanuel\n4. Participa en las actividades\n5. Conoce a otros adolescentes como tú\n\n📱 Consultas: +54 9 351 265-1111"
    ],
    
    "edades": [
        "👥 Rango de edades:\n• 13 a 18 años - Etapa adolescente.\n• ¡Trae a tus amigos, todos son bienvenidos!"
    ],

    "actividades": [
        "🎮 Lo que hacemos:\n• Adoración contemporánea y relevante\n• Enseñanzas sobre fe auténtica\n• Juegos y dinámicas grupales\n• Talleres de desarrollo personal\n• Proyectos comunitarios"
    ],
    
    "lideres": [
        "👥 Nuestro equipo:\n\n• Monica Juncos y Emmanuel Orellana\n• Todos disponibles para escucharte y acompañarte\n• Contacto: +54 9 351 265-1111"
    ],
    
    "padres": [
        "👨‍👩‍👧‍👦 Información para padres:\n\n• Comunicación directa con líderes\n• Espacio seguro y supervisado\n• Enfoque integral (espiritual, emocional, social)\n• Proyectos de desarrollo personal\n• Contacto principal: +54 9 351 265-1111\n• Horarios: Sábados 17:30 HS"
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let adolescentesChatbotInitialized = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

// Inicializar el chatbot
function initializeAdolescentesChatbot() {
    if (adolescentesChatbotInitialized) return;
    
    console.log('🔮 Chatbot Adolescentes - Inicializando...');
    
    // Detectar dispositivo
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent) || 
                    (window.innerWidth <= 1024 && window.innerWidth >= 768);
    
    // Crear elementos del DOM
    createAdolescentesChatbotElements(isMobile, isTablet);
    
    // Configurar eventos
    setupAdolescentesChatbotEvents(isMobile);
    
    // Configurar botones de la página
    setupAdolescentesPageButtons();
    
    adolescentesChatbotInitialized = true;
    console.log('✅ Chatbot Adolescentes listo');
}

// Crear elementos HTML del chatbot
function createAdolescentesChatbotElements(isMobile, isTablet) {
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="adolescentes-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="adolescentes-chatbot-header">
                <h4>🔮 Adolescentes - Asistente</h4>
                <button id="adolescentes-close-chatbot" title="Cerrar">×</button>
            </div>
            
            <!-- Mensajes -->
            <div id="adolescentes-chatbot-messages">
                <div class="adolescentes-bot-message">¡Hola! 🔮 Soy tu asistente del área de Adolescentes.</div>
                <div class="adolescentes-bot-message">Estoy aquí para ayudarte con información sobre nuestro espacio para adolescentes de 13 a 18 años.</div>
                <div class="adolescentes-bot-message">Pregúntame sobre: horarios, actividades, líderes, cómo unirte, etc.</div>
            </div>
            
            <!-- Indicador de escritura -->
            <div id="adolescentes-typing-indicator" class="adolescentes-typing-indicator" style="display: none;">
                <span></span><span></span><span></span>
            </div>
            
            <!-- Input -->
            <div id="adolescentes-chatbot-input">
                <input type="text" id="adolescentes-user-input" placeholder="Escribe tu pregunta..." autocomplete="off">
                <button id="adolescentes-send-btn" title="Enviar">➤</button>
            </div>
            
            <!-- Botones rápidos -->
            <div id="adolescentes-quick-questions">
                <button class="adolescentes-quick-btn" data-question="¿Cuáles son los horarios?">🕐 Horarios</button>
                <button class="adolescentes-quick-btn" data-question="¿Qué actividades hacen?">⚡ Actividades</button>
                <button class="adolescentes-quick-btn" data-question="¿Quiénes son los líderes?">👥 Líderes</button>
            </div>
        </div>

        <!-- Botón flotante -->
        <button id="adolescentes-chatbot-toggle" title="Chat Adolescentes">🔮</button>
    `;
    
    // Insertar en el body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Aplicar estilos
    addAdolescentesChatbotStyles(isMobile, isTablet);
}

// Añadir estilos CSS mejorados
function addAdolescentesChatbotStyles(isMobile, isTablet) {
    const isSmallScreen = isMobile || window.innerWidth < 768;
    
    const styles = `
        <style>
            /* Chatbot Container - Mejorado */
            #adolescentes-chatbot-container {
                position: fixed;
                bottom: ${isSmallScreen ? '70px' : '80px'};
                right: ${isSmallScreen ? '10px' : '20px'};
                width: ${isSmallScreen ? 'calc(100vw - 20px)' : (isTablet ? '380px' : '340px')};
                max-width: ${isSmallScreen ? 'none' : '90vw'};
                height: ${isSmallScreen ? '55vh' : '480px'};
                max-height: ${isSmallScreen ? '65vh' : '65vh'};
                background: rgba(10, 10, 18, 0.98);
                border: 1px solid #00ffff;
                border-radius: 16px;
                box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                backdrop-filter: blur(10px);
                font-family: 'Segoe UI', 'Exo 2', sans-serif;
            }
            
            /* Header mejorado */
            #adolescentes-chatbot-header {
                background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%);
                color: #fff;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1rem;
                font-weight: 600;
                border-bottom: 1px solid rgba(0, 255, 255, 0.3);
            }
            
            #adolescentes-close-chatbot {
                background: transparent;
                border: none;
                color: #00ffff;
                font-size: 1.8rem;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
            }
            
            #adolescentes-close-chatbot:hover {
                background: rgba(255, 0, 255, 0.2);
                color: #ff00ff;
            }
            
            /* Área de mensajes mejorada */
            #adolescentes-chatbot-messages {
                flex: 1;
                padding: 15px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: rgba(5, 5, 12, 0.95);
                scroll-behavior: smooth;
            }
            
            /* Mensajes mejorados - sin markdown */
            .adolescentes-bot-message {
                background: rgba(0, 255, 255, 0.1);
                border: 1px solid rgba(0, 255, 255, 0.3);
                border-radius: 18px 18px 18px 4px;
                padding: 12px 16px;
                color: #e0e0ff;
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-start;
                box-shadow: 0 2px 8px rgba(0, 255, 255, 0.2);
                word-wrap: break-word;
                white-space: pre-line;
            }
            
            .adolescentes-user-message {
                background: rgba(255, 0, 255, 0.15);
                border: 1px solid rgba(255, 0, 255, 0.3);
                border-radius: 18px 18px 4px 18px;
                padding: 12px 16px;
                color: #ffffff;
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-end;
                box-shadow: 0 2px 8px rgba(255, 0, 255, 0.2);
                word-wrap: break-word;
                white-space: pre-line;
            }
            
            /* Indicador de escritura */
            .adolescentes-typing-indicator {
                display: none;
                padding: 12px 16px;
                background: rgba(0, 255, 255, 0.1);
                border: 1px solid rgba(0, 255, 255, 0.3);
                border-radius: 18px 18px 18px 4px;
                margin: 0 15px 10px 15px;
                align-self: flex-start;
                max-width: 80px;
            }
            
            .adolescentes-typing-indicator span {
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #00ffff;
                margin: 0 2px;
                animation: adolescentes-typing 1.4s infinite;
            }
            
            .adolescentes-typing-indicator span:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .adolescentes-typing-indicator span:nth-child(3) {
                animation-delay: 0.4s;
            }
            
            @keyframes adolescentes-typing {
                0%, 60%, 100% {
                    transform: translateY(0);
                    opacity: 0.6;
                }
                30% {
                    transform: translateY(-6px);
                    opacity: 1;
                }
            }
            
            /* Input mejorado */
            #adolescentes-chatbot-input {
                padding: 12px;
                display: flex;
                gap: 8px;
                border-top: 1px solid rgba(0, 255, 255, 0.2);
                background: rgba(15, 15, 25, 0.95);
            }
            
            #adolescentes-user-input {
                flex: 1;
                padding: 12px 16px;
                border: 1px solid #00ffff;
                border-radius: 24px;
                background: rgba(0, 0, 0, 0.3);
                color: #ffffff;
                font-size: 0.95rem;
                transition: all 0.2s ease;
            }
            
            #adolescentes-user-input:focus {
                outline: none;
                border-color: #ff00ff;
                box-shadow: 0 0 12px rgba(255, 0, 255, 0.4);
            }
            
            #adolescentes-send-btn {
                padding: 0 20px;
                background: linear-gradient(135deg, #00ffff, #00cccc);
                color: #000;
                border: none;
                border-radius: 24px;
                cursor: pointer;
                font-weight: bold;
                font-size: 1rem;
                transition: all 0.2s ease;
            }
            
            #adolescentes-send-btn:hover {
                background: linear-gradient(135deg, #ff00ff, #cc00cc);
                color: #fff;
                transform: scale(1.05);
            }
            
            /* Botones rápidos mejorados */
            #adolescentes-quick-questions {
                padding: 12px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                border-top: 1px solid rgba(255, 0, 255, 0.2);
                background: rgba(15, 15, 25, 0.95);
            }
            
            .adolescentes-quick-btn {
                padding: 8px 12px;
                background: rgba(0, 255, 255, 0.1);
                border: 1px solid rgba(0, 255, 255, 0.3);
                border-radius: 20px;
                color: #e0e0ff;
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.2s ease;
                flex: 1;
                min-width: 0;
                white-space: nowrap;
            }
            
            .adolescentes-quick-btn:hover {
                background: rgba(255, 0, 255, 0.2);
                border-color: #ff00ff;
                transform: translateY(-2px);
            }
            
            /* Botón flotante mejorado */
            #adolescentes-chatbot-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, #00ffff, #ff00ff);
                color: #000;
                border: none;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                font-size: 1.8rem;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(0, 255, 255, 0.4);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                animation: adolescentes-pulse 2s infinite;
            }
            
            @keyframes adolescentes-pulse {
                0% {
                    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.4);
                }
                50% {
                    box-shadow: 0 8px 30px rgba(255, 0, 255, 0.6);
                }
                100% {
                    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.4);
                }
            }
            
            #adolescentes-chatbot-toggle:hover {
                transform: scale(1.1) rotate(5deg);
            }
            
            /* Scrollbar personalizada */
            #adolescentes-chatbot-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            #adolescentes-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(0, 255, 255, 0.05);
            }
            
            #adolescentes-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(#00ffff, #ff00ff);
                border-radius: 3px;
            }
            
            /* Responsive */
            @media (max-width: 480px) {
                #adolescentes-chatbot-container {
                    width: calc(100vw - 20px);
                    right: 10px;
                    left: 10px;
                    bottom: 70px;
                }
                
                #adolescentes-chatbot-toggle {
                    width: 55px;
                    height: 55px;
                    font-size: 1.6rem;
                    bottom: 15px;
                    right: 15px;
                }
                
                .adolescentes-quick-btn {
                    font-size: 0.75rem;
                    padding: 6px 8px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Configurar eventos del chatbot
function setupAdolescentesChatbotEvents(isMobile) {
    const toggleBtn = document.getElementById('adolescentes-chatbot-toggle');
    const closeBtn = document.getElementById('adolescentes-close-chatbot');
    const sendBtn = document.getElementById('adolescentes-send-btn');
    const userInput = document.getElementById('adolescentes-user-input');
    const quickBtns = document.querySelectorAll('.adolescentes-quick-btn');
    const chatbotContainer = document.getElementById('adolescentes-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) return;
    
    // Abrir chatbot
    toggleBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'flex';
        setTimeout(() => userInput.focus(), 300);
    });
    
    // Cerrar chatbot
    closeBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });
    
    // Enviar con Enter
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendAdolescentesChatbotMessage();
        }
    });
    
    // Enviar con botón
    sendBtn.addEventListener('click', sendAdolescentesChatbotMessage);
    
    // Botones rápidos
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            userInput.value = this.getAttribute('data-question');
            sendAdolescentesChatbotMessage();
        });
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (chatbotContainer.style.display === 'flex' &&
            !chatbotContainer.contains(e.target) &&
            !toggleBtn.contains(e.target)) {
            chatbotContainer.style.display = 'none';
        }
    });
}

// Configurar botones de la página
function setupAdolescentesPageButtons() {
    const joinBtn = document.getElementById('join-cyber');
    if (joinBtn) {
        joinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openAdolescentesChatbotWithCustomMessage(
                "🔮 ¡Bienvenido/a al área de Adolescentes!\n\nGenial que quieras unirte a nuestra comunidad. Te voy a ayudar con toda la información:",
                'unirse'
            );
        });
    }
    
    const contactBtn = document.getElementById('contact-cyber');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openAdolescentesChatbotWithCustomMessage(
                "👨‍👩‍👧‍👦 ¡Hola padres!\n\nAcompañamos a sus hijos adolescentes en esta etapa crucial. Estoy aquí para responder sus preguntas:",
                'padres'
            );
        });
    }
}

// Función para abrir chatbot con mensaje personalizado
function openAdolescentesChatbotWithCustomMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('adolescentes-chatbot-container');
    const userInput = document.getElementById('adolescentes-user-input');
    
    if (!chatbotContainer) return;
    
    chatbotContainer.style.display = 'flex';
    
    const messagesContainer = document.getElementById('adolescentes-chatbot-messages');
    if (messagesContainer) {
        // Mantener solo mensajes iniciales
        while (messagesContainer.children.length > 3) {
            messagesContainer.removeChild(messagesContainer.lastChild);
        }
    }
    
    setTimeout(() => {
        addAdolescentesChatbotMessage(message, 'bot');
        
        if (type === 'unirse') {
            setTimeout(() => {
                addAdolescentesChatbotMessage(
                    "🎯 Cómo unirte:\n\n1. Ven este sábado 17:30 HS\n2. Ubicación: Auditorio Mayor AV. TILLARD 1318\n3. Pregunta por Monica o Emmanuel\n4. Participa en las actividades\n5. Conoce a otros adolescentes\n\n📱 WhatsApp: +54 9 351 265-1111\n📸 Instagram: @adolescentes.mp",
                    'bot'
                );
            }, 800);
        } else if (type === 'padres') {
            setTimeout(() => {
                addAdolescentesChatbotMessage(
                    "👨‍👩‍👧‍👦 Información para padres:\n\n• Líderes: Monica Juncos y Emmanuel Orellana\n• Contacto: +54 9 351 265-1111\n• Horarios: Sábados 17:30 HS\n• Ubicación: AV. TILLARD 1318\n• Edades: 13 a 18 años\n• Enfoque: Desarrollo integral",
                    'bot'
                );
            }, 800);
        }
    }, 300);
    
    setTimeout(() => userInput.focus(), 500);
}

// Enviar mensaje del usuario
function sendAdolescentesChatbotMessage() {
    const userInput = document.getElementById('adolescentes-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addAdolescentesChatbotMessage(message, 'user');
    userInput.value = '';
    
    // Mostrar indicador de escritura
    showAdolescentesTypingIndicator();
    
    // Obtener respuesta después de un delay
    setTimeout(() => {
        hideAdolescentesTypingIndicator();
        const response = getAdolescentesChatbotResponse(message);
        addAdolescentesChatbotMessage(response, 'bot');
    }, 1000);
}

// Mostrar indicador de escritura
function showAdolescentesTypingIndicator() {
    const indicator = document.getElementById('adolescentes-typing-indicator');
    if (indicator) {
        indicator.style.display = 'block';
        // Auto-scroll al indicador
        const messagesContainer = document.getElementById('adolescentes-chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Ocultar indicador de escritura
function hideAdolescentesTypingIndicator() {
    const indicator = document.getElementById('adolescentes-typing-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// Agregar mensaje al chat
function addAdolescentesChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('adolescentes-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'adolescentes-bot-message' : 'adolescentes-user-message';
    messageDiv.textContent = text;
    
    messagesContainer.appendChild(messageDiv);
    
    // Scroll suave al nuevo mensaje
    setTimeout(() => {
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: 'smooth'
        });
    }, 50);
}

// Obtener respuesta del chatbot
function getAdolescentesChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar en base de conocimiento
    for (const [keyword, responses] of Object.entries(adolescentesChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Respuestas específicas
    if (/(monica|emmanuel|líder|lider|lideres)/i.test(lowerMessage)) {
        return "👥 Nuestros líderes:\n\n• Monica Juncos\n• Emmanuel Orellana\n📱 Contacto: +54 9 351 265-1111\n📸 Instagram: @adolescentes.mp";
    }
    
    if (/(teléfono|telefono|celular|llamar|número|numero|whatsapp|wsap|contacto)/i.test(lowerMessage)) {
        return "📱 Contacto directo:\n\n• WhatsApp: +54 9 351 265-1111\n• Líderes: Monica y Emmanuel\n• Instagram: @adolescentes.mp\n• Ubicación: AV. TILLARD 1318 B° COFICO";
    }
    
    if (/(hola|buenos|buenas|saludos|hello|hey)/i.test(lowerMessage)) {
        const greetings = [
            "🔮 ¡Hola! ¿Eres adolescente o padre/madre? ¿En qué puedo ayudarte hoy?",
            "👋 ¡Buenas! Bienvenido/a al área de Adolescentes. ¿Preguntas sobre nuestra comunidad para 13-18 años?",
            "⚡ ¡Hola! Asistente del área de Adolescentes aquí. ¿Qué información necesitas?"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (/(gracias|thank|agradecido)/i.test(lowerMessage)) {
        return "🔮 ¡De nada!\n\nEs un privilegio acompañar a adolescentes en esta etapa de descubrimiento y crecimiento.\n\n¿Hay algo más en lo que pueda ayudarte?";
    }
    
    if (/(quiero ir|quiero unirme|me quiero unir|participar|integrarme)/i.test(lowerMessage)) {
        return "🎯 ¡Genial decisión!\n\nPara unirte:\n1. Ven este sábado 17:30 HS\n2. Auditorio Mayor AV. TILLARD 1318\n3. Pregunta por Monica o Emmanuel\n4. ¡Listo! Te integras automáticamente\n\nNo necesitas:\n• Pago de inscripción\n• Documentación especial\n• Experiencia previa\n\n📱 Consultas: +54 9 351 265-1111";
    }
    
    if (/(aburrido|divertido|entretenido|hacemos|actividades)/i.test(lowerMessage)) {
        return "⚡ ¿Qué hacemos?\n\n• Adoración contemporánea (música actual)\n• Charlas sobre temas relevantes\n• Juegos y competencias grupales\n• Talleres de desarrollo personal\n• Proyectos comunitarios\n\n¡Nunca te aburrirás con nosotros!";
    }
    
    if (/(amigos|conocer gente|solo|solitario)/i.test(lowerMessage)) {
        return "🤝 ¡Hacé amigos reales!\n\nMuchos adolescentes vienen solos y encuentran su lugar aquí.\n\nPor qué funciona:\n• Grupos por edad similar\n• Actividades que conectan\n• Ambiente de aceptación\n• Líderes que facilitan\n\n¡Te garantizamos que te sentirás en casa!";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "🔮 No entendí bien tu pregunta. ¿Podrías reformularla?",
        "🎯 Puedo ayudarte con info sobre horarios, actividades, líderes o cómo unirte. ¿Qué necesitas saber?",
        "⚡ No estoy seguro de entender. Ejemplos:\n• ¿A qué hora es la reunión?\n• ¿Cómo me uno?\n• ¿Quiénes son los líderes?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

window.addEventListener('load', () => {
    setTimeout(initializeAdolescentesChatbot, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeAdolescentesChatbot, 1500);
});

// Funciones públicas
window.openAdolescentesChatbot = function(type = 'general') {
    if (type === 'padres') {
        openAdolescentesChatbotWithCustomMessage(
            "👨‍👩‍👧‍👦 ¡Hola padres! ¿En qué puedo ayudarles con información sobre el área de Adolescentes?",
            'padres'
        );
    } else if (type === 'unirse') {
        openAdolescentesChatbotWithCustomMessage(
            "🔮 ¡Qué bueno que quieras unirte a nuestra comunidad de adolescentes!",
            'unirse'
        );
    } else {
        openAdolescentesChatbotWithCustomMessage(
            "🔮 ¡Hola! Asistente del área de Adolescentes aquí. ¿En qué puedo ayudarte?",
            'general'
        );
    }
};

window.closeAdolescentesChatbot = function() {
    const chatbotContainer = document.getElementById('adolescentes-chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
    }
};

console.log('🔮 adolescentes-chatbot.js mejorado - Listo');