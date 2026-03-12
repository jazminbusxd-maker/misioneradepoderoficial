// ======================================================
// CHATBOT PARA RESTAURANDO FAMILIAS - VERSIÓN MEJORADA
// ======================================================

// Base de conocimiento específica para Familias
const familiasChatbotKnowledge = {
    "horarios": [
        "🕐 Horarios:\n\nJueves 20:00 HS\nAuditorio Mayor - AV. TILLARD 1318\n\n📱 +54 351 551-8204"
    ],
    
    "contacto": [
        "📱 Contacto:\n\nLíderes: Cintia y Marcos Darcano\nTeléfono: +54 351 551-8204\nUbicación: AV. TILLARD 1318\n\n🏡 ¡Te esperamos!"
    ],
    
    "reuniones": [
        "🏡 Jueves de Familia:\n\nTodos los jueves 20:00 HS\nAuditorio Mayor - Tillard 1318\nPara: Matrimonios, padres solteros, familias\n\n📱 +54 351 551-8204"
    ],
    
    "consejeria": [
        "🤝 Consejería:\n\nPara:\n• Crisis matrimoniales\n• Comunicación\n• Conflictos familiares\n• Heridas pasadas\n\nCon cita previa\nLunes a Viernes 16:00-20:00 HS\n\n📱 +54 351 551-8204"
    ],
    
    "unirse": [
        "💑 Unirse:\n\n1. Ven este jueves 20:00 HS\n2. AV. TILLARD 1318\n3. Pregunta por Cintia o Marcos\n\n📱 +54 351 551-8204"
    ],
    
    "quiero restaurar": [
        "🏡 Restaurar Familia:\n\n🎯 Primer Paso:\nVen este jueves 20:00 HS\nAV. TILLARD 1318\n\n🎯 Segundo Paso:\nParticipa en talleres\nConoce otras familias\n\n🎯 Tercer Paso:\nRecibe consejería personalizada\n\n📱 +54 351 551-8204"
    ],
    
    "actividades": [
        "🏡 Actividades:\n\n• Enseñanzas bíblicas\n• Talleres prácticos\n• Grupos de apoyo\n• Consejería familiar\n• Eventos especiales\n\nJueves 20:00 HS"
    ],
    
    "lideres": [
        "💑 Líderes:\n\nCintia Darcano\nMarcos Darcano\nConsejeros certificados\n\n📱 +54 351 551-8204"
    ],
    
    "vision": [
        "🎯 Visión:\n\nRefugio para hogares\nFaro para matrimonios\nCimiento para familias\n\nCada familia puede ser restaurada por Dios."
    ],
    
    "eventos": [
        "📅 Eventos:\n\nJueves 20:00 HS - Reunión semanal\nCongreso de Familia (próximo)\nTalleres mensuales\n\n📱 +54 351 551-8204"
    ],
    
    "valores": [
        "❤️ Valores:\n\n• Amor incondicional\n• Perdón genuino\n• Comunicación sana\n• Propósito familiar\n• Restauración"
    ],
    
    "direccion": [
        "📍 Ubicación:\n\nAuditorio Mayor\nAV. TILLARD 1318\nB° COFICO, CÓRDOBA\n\nFácil acceso\nEstacionamiento disponible\n\n🏡 Jueves 20:00 HS"
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let familiasChatbotInitialized = false;
let isMobile = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

// Inicializar el chatbot
function initializeFamiliasChatbot() {
    if (familiasChatbotInitialized) return;
    
    // Detectar si es móvil
    isMobile = window.innerWidth <= 768;
    
    console.log(`🏡 Chatbot Restaurando Familias - Inicializando (${isMobile ? 'Móvil' : 'Desktop'})...`);
    
    // Crear elementos del DOM
    createChatbotElements();
    
    // Configurar eventos
    setupChatbotEvents();
    
    // Configurar botón de la página
    setupPageButton();
    
    familiasChatbotInitialized = true;
    console.log('✅ Chatbot Restaurando Familias listo');
}

// Crear elementos del chatbot
function createChatbotElements() {
    // Crear contenedor principal
    const container = document.createElement('div');
    container.id = 'familias-chatbot-container';
    
    if (isMobile) {
        container.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 10px;
            width: calc(100vw - 20px);
            height: 65vh;
            background: linear-gradient(135deg, #12121A, #0A0A0F);
            border: 2px solid #D4AF37;
            border-radius: 12px;
            box-shadow: 
                0 15px 35px rgba(139, 0, 0, 0.4),
                0 5px 15px rgba(212, 175, 55, 0.3);
            display: none;
            flex-direction: column;
            z-index: 9999;
            overflow: hidden;
            font-family: 'Raleway', sans-serif;
        `;
    } else {
        container.style.cssText = `
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 380px;
            height: 520px;
            background: linear-gradient(135deg, #12121A, #0A0A0F);
            border: 2px solid #D4AF37;
            border-radius: 12px;
            box-shadow: 
                0 15px 35px rgba(139, 0, 0, 0.4),
                0 5px 15px rgba(212, 175, 55, 0.3);
            display: none;
            flex-direction: column;
            z-index: 9999;
            overflow: hidden;
            font-family: 'Raleway', sans-serif;
        `;
    }
    
    const buttonSize = isMobile ? '8px' : '10px 14px';
    const buttonFontSize = isMobile ? '0.75rem' : '0.85rem';
    const buttonGap = isMobile ? '6px' : '8px';
    
    container.innerHTML = `
        <div id="familias-chatbot-header" style="
            background: linear-gradient(135deg, #8B0000, #A52A2A);
            color: #F5F1E6;
            padding: ${isMobile ? '12px 15px' : '15px 20px'};
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #D4AF37;
            font-family: 'Cormorant Garamond', serif;
            font-weight: 700;
            font-size: ${isMobile ? '1rem' : '1.2rem'};
        ">
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: ${isMobile ? '1.2rem' : '1.4rem'};">🏡</span>
                <span>RESTAURANDO FAMILIAS</span>
            </div>
            <button id="familias-close-chatbot" style="
                background: #FF3333;
                color: white;
                border: 2px solid #FFCCCC;
                border-radius: 50%;
                width: ${isMobile ? '28px' : '32px'};
                height: ${isMobile ? '28px' : '32px'};
                font-size: ${isMobile ? '1.2rem' : '1.4rem'};
                font-weight: bold;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                margin: 0;
                line-height: 1;
            ">×</button>
        </div>
        
        <div id="familias-chatbot-messages" style="
            flex: 1;
            padding: ${isMobile ? '12px' : '20px'};
            overflow-y: auto;
            background: rgba(10, 10, 15, 0.7);
            display: flex;
            flex-direction: column-reverse;
            gap: ${isMobile ? '8px' : '12px'};
        ">
            <!-- Los mensajes aparecerán aquí, los nuevos arriba -->
        </div>
        
        <!-- Indicador de escritura -->
        <div id="familias-typing-indicator" style="
            display: none;
            padding: 8px 15px;
            background: rgba(212, 175, 55, 0.1);
            border-top: 1px solid rgba(212, 175, 55, 0.2);
            color: #D4AF37;
            font-size: 0.9rem;
            align-items: center;
            gap: 8px;
        ">
            <span>🏡 escribiendo</span>
            <span class="typing-dots">
                <span class="dot">.</span>
                <span class="dot">.</span>
                <span class="dot">.</span>
            </span>
        </div>
        
        <div id="familias-chatbot-input" style="
            padding: ${isMobile ? '10px' : '15px'};
            display: flex;
            gap: ${isMobile ? '8px' : '10px'};
            border-top: 1px solid rgba(212, 175, 55, 0.3);
            background: rgba(18, 18, 26, 0.9);
        ">
            <input type="text" id="familias-user-input" placeholder="Escribe aquí..." autocomplete="off" style="
                flex: 1;
                padding: ${isMobile ? '10px 12px' : '12px 16px'};
                border: 1px solid #D4AF37;
                border-radius: 25px;
                background: rgba(10, 10, 15, 0.8);
                color: #F5F1E6;
                font-family: 'Raleway', sans-serif;
                font-size: ${isMobile ? '0.9rem' : '0.95rem'};
            ">
            <button id="familias-send-btn" style="
                padding: ${isMobile ? '10px 20px' : '12px 25px'};
                background: linear-gradient(135deg, #A52A2A, #D4AF37);
                color: #F5F1E6;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Playfair Display', serif;
                font-weight: 600;
                font-size: ${isMobile ? '0.9rem' : '1rem'};
                min-width: ${isMobile ? '50px' : '60px'};
            ">➤</button>
        </div>
        
        <div id="familias-quick-questions" style="
            padding: ${isMobile ? '10px' : '15px'};
            display: flex;
            flex-wrap: wrap;
            gap: ${buttonGap};
            border-top: 1px solid rgba(212, 175, 55, 0.2);
            background: rgba(10, 10, 15, 0.9);
        ">
            <button class="familias-quick-btn" data-question="horarios" style="padding: ${buttonSize}; font-size: ${buttonFontSize};">
                🕐 Horarios
            </button>
            <button class="familias-quick-btn" data-question="contacto" style="padding: ${buttonSize}; font-size: ${buttonFontSize};">
                📱 Contacto
            </button>
            <button class="familias-quick-btn" data-question="direccion" style="padding: ${buttonSize}; font-size: ${buttonFontSize};">
                📍 Ubicación
            </button>
            <button class="familias-quick-btn" data-question="quiero restaurar" style="padding: ${buttonSize}; font-size: ${buttonFontSize};">
                ❤️ Restaurar
            </button>
            <button class="familias-quick-btn" data-question="actividades" style="padding: ${buttonSize}; font-size: ${buttonFontSize};">
                🏡 Actividades
            </button>
            <button class="familias-quick-btn" data-question="consejeria" style="padding: ${buttonSize}; font-size: ${buttonFontSize};">
                🤝 Consejería
            </button>
        </div>
    `;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'familias-chatbot-toggle';
    toggleBtn.innerHTML = '🏡';
    toggleBtn.title = 'Abrir chat de Restaurando Familias';
    
    if (isMobile) {
        toggleBtn.style.cssText = `
            position: fixed;
            bottom: 15px;
            right: 15px;
            width: 55px;
            height: 55px;
            background: linear-gradient(135deg, #8B0000, #D4AF37);
            color: #F5F1E6;
            border: 2px solid #E8C547;
            border-radius: 50%;
            font-size: 1.6rem;
            cursor: pointer;
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 5px 15px rgba(139, 0, 0, 0.5);
            transition: all 0.3s ease;
        `;
    } else {
        toggleBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #8B0000, #D4AF37);
            color: #F5F1E6;
            border: 3px solid #E8C547;
            border-radius: 50%;
            font-size: 2rem;
            cursor: pointer;
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 25px rgba(139, 0, 0, 0.6);
            transition: all 0.3s ease;
        `;
    }
    
    const styles = document.createElement('style');
    styles.textContent = `
        .familias-bot-message {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(139, 0, 0, 0.08));
            border: 1px solid rgba(212, 175, 55, 0.3);
            border-radius: 15px 15px 15px 5px;
            padding: ${isMobile ? '12px 15px' : '15px 18px'};
            color: #F5F1E6;
            font-size: ${isMobile ? '0.85rem' : '0.9rem'};
            line-height: 1.6;
            max-width: 85%;
            align-self: flex-start;
            margin-bottom: 8px;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: pre-wrap;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            margin-top: 4px;
        }
        
        .familias-user-message {
            background: linear-gradient(135deg, rgba(139, 0, 0, 0.2), rgba(165, 42, 42, 0.15));
            border: 1px solid rgba(139, 0, 0, 0.5);
            border-radius: 15px 15px 5px 15px;
            padding: ${isMobile ? '12px 15px' : '15px 18px'};
            color: #F5F1E6;
            font-size: ${isMobile ? '0.85rem' : '0.9rem'};
            line-height: 1.6;
            max-width: 85%;
            align-self: flex-end;
            text-align: right;
            margin-bottom: 8px;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: pre-wrap;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            margin-top: 4px;
        }
        
        .familias-quick-btn {
            background: linear-gradient(135deg, rgba(139, 0, 0, 0.15), rgba(212, 175, 55, 0.1));
            border: 1px solid rgba(212, 175, 55, 0.3);
            border-radius: 20px;
            color: #E8C547;
            cursor: pointer;
            font-family: 'Raleway', sans-serif;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.3s ease;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border: none;
        }
        
        .familias-quick-btn:hover {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(139, 0, 0, 0.3));
            transform: translateY(-2px);
            color: #F5F1E6;
            border-color: #E8C547;
        }
        
        @media (max-width: 768px) {
            .familias-quick-btn {
                flex: 0 0 calc(33.333% - 4px);
                font-size: 0.75rem;
                padding: 8px 6px;
                min-width: 0;
                max-width: calc(33.333% - 4px);
            }
            
            #familias-chatbot-container {
                width: calc(100vw - 20px);
                right: 10px;
                bottom: 70px;
                height: 70vh;
                max-height: 70vh;
            }
            
            #familias-chatbot-messages {
                padding: 10px;
                gap: 6px;
            }
            
            .familias-bot-message,
            .familias-user-message {
                max-width: 90%;
                font-size: 0.85rem;
                padding: 10px 12px;
            }
        }
        
        @media (min-width: 769px) {
            .familias-quick-btn {
                flex: 0 0 calc(33.333% - 6px);
                font-size: 0.8rem;
                padding: 10px 8px;
                min-width: 0;
                max-width: calc(33.333% - 6px);
            }
        }
        
        @media (max-width: 400px) {
            .familias-quick-btn {
                flex: 0 0 calc(50% - 3px);
                font-size: 0.7rem;
                padding: 6px 4px;
                max-width: calc(50% - 3px);
            }
        }
        
        #familias-chatbot-messages::-webkit-scrollbar {
            width: 5px;
        }
        
        #familias-chatbot-messages::-webkit-scrollbar-track {
            background: rgba(212, 175, 55, 0.1);
        }
        
        #familias-chatbot-messages::-webkit-scrollbar-thumb {
            background: linear-gradient(#D4AF37, #8B0000);
            border-radius: 10px;
        }
        
        #familias-user-input:focus {
            outline: none;
            border-color: #E8C547;
            box-shadow: 0 0 8px rgba(212, 175, 55, 0.5);
        }
        
        #familias-send-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 3px 10px rgba(165, 42, 42, 0.4);
        }
        
        #familias-close-chatbot:hover {
            background: #FF6666;
            transform: rotate(90deg);
        }
        
        #familias-chatbot-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(139, 0, 0, 0.7);
        }
        
        /* Estilos para indicador de escritura */
        #familias-typing-indicator {
            transition: all 0.3s ease;
        }
        
        .typing-dots {
            display: inline-flex;
            gap: 2px;
        }
        
        .dot {
            animation: typingAnimation 1.4s infinite;
            font-size: 1.2rem;
            line-height: 1;
            opacity: 0.7;
        }
        
        .dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes typingAnimation {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.7; }
            30% { transform: translateY(-5px); opacity: 1; }
        }
        
        /* Estilo para párrafos dentro de mensajes */
        .familias-bot-message p,
        .familias-user-message p {
            margin: 8px 0;
        }
        
        .familias-bot-message p:first-child,
        .familias-user-message p:first-child {
            margin-top: 0;
        }
        
        .familias-bot-message p:last-child,
        .familias-user-message p:last-child {
            margin-bottom: 0;
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(container);
    document.body.appendChild(toggleBtn);
    
    // Agregar mensajes de bienvenida
    setTimeout(() => {
        addChatbotMessage("¡Hola! 🏡 Soy tu asistente de Restaurando Familias.", 'bot');
        setTimeout(() => {
            addChatbotMessage("Estoy aquí para ayudarte a restaurar y fortalecer tu hogar.", 'bot');
            setTimeout(() => {
                addChatbotMessage("Usa los botones o escribe tu pregunta.", 'bot');
            }, 600);
        }, 600);
    }, 300);
    
    console.log('✅ Elementos del chatbot creados');
}

// Configurar eventos
function setupChatbotEvents() {
    const toggleBtn = document.getElementById('familias-chatbot-toggle');
    const closeBtn = document.getElementById('familias-close-chatbot');
    const sendBtn = document.getElementById('familias-send-btn');
    const userInput = document.getElementById('familias-user-input');
    const quickBtns = document.querySelectorAll('.familias-quick-btn');
    const chatContainer = document.getElementById('familias-chatbot-container');
    
    if (!toggleBtn || !chatContainer) {
        console.error('❌ No se encontraron elementos del chatbot');
        return;
    }
    
    toggleBtn.addEventListener('click', function() {
        chatContainer.style.display = 'flex';
        setTimeout(() => userInput.focus(), 100);
        toggleBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleBtn.style.transform = 'scale(1)';
        }, 200);
    });
    
    closeBtn.addEventListener('click', function() {
        chatContainer.style.display = 'none';
    });
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatbotMessage();
        }
    });
    
    sendBtn.addEventListener('click', sendChatbotMessage);
    
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendChatbotMessage();
        });
    });
    
    document.addEventListener('click', function(e) {
        if (chatContainer && chatContainer.style.display === 'flex') {
            if (!chatContainer.contains(e.target) && 
                !toggleBtn.contains(e.target)) {
                chatContainer.style.display = 'none';
            }
        }
    });
    
    window.addEventListener('resize', function() {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
            const oldContainer = document.getElementById('familias-chatbot-container');
            const oldToggleBtn = document.getElementById('familias-chatbot-toggle');
            
            if (oldContainer) oldContainer.remove();
            if (oldToggleBtn) oldToggleBtn.remove();
            
            isMobile = newIsMobile;
            createChatbotElements();
            setupChatbotEvents();
            setupPageButton();
        }
    });
}

// Configurar botón "Quiero restaurar mi familia" de la página
function setupPageButton() {
    console.log('🔍 Buscando botón "Quiero restaurar mi familia"...');
    
    const joinButton = document.getElementById('join-button-matrimonios');
    
    if (joinButton) {
        console.log('✅ Botón encontrado por ID');
        const newButton = joinButton.cloneNode(true);
        joinButton.parentNode.replaceChild(newButton, joinButton);
        
        newButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🎯 Botón "Quiero restaurar mi familia" clickeado');
            openChatbotWithCustomMessage(
                "🏡 ¡TU FAMILIA TIENE ESPERANZA!\n\nMe alegra mucho que quieras restaurar tu hogar.",
                'restaurar'
            );
        });
        
        newButton.style.cursor = 'pointer';
        newButton.title = "Habla con nuestro asistente para restaurar tu familia";
        console.log('✅ Botón configurado correctamente');
    } else {
        setTimeout(() => {
            const buttons = document.querySelectorAll('a, button');
            buttons.forEach(button => {
                const text = button.textContent.trim().toLowerCase();
                if ((text.includes('quiero restaurar') || text.includes('restaurar mi familia')) && 
                    button.id !== 'join-button-matrimonios') {
                    
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        openChatbotWithCustomMessage(
                            "🏡 ¡Excelente decisión! Cada familia puede ser restaurada.",
                            'restaurar'
                        );
                    });
                    
                    button.style.cursor = 'pointer';
                }
            });
        }, 500);
    }
}

// Función para abrir chatbot con mensaje personalizado
function openChatbotWithCustomMessage(message, type = 'general') {
    const chatContainer = document.getElementById('familias-chatbot-container');
    const userInput = document.getElementById('familias-user-input');
    
    if (!chatContainer) {
        console.error('❌ No se encontró el chatbot container');
        return;
    }
    
    chatContainer.style.display = 'flex';
    
    const messagesContainer = document.getElementById('familias-chatbot-messages');
    if (messagesContainer) {
        messagesContainer.innerHTML = '';
    }
    
    setTimeout(() => {
        addChatbotMessage(message, 'bot');
        
        setTimeout(() => {
            if (type === 'restaurar') {
                addChatbotMessage(
                    "Pasos para comenzar:\n\n" +
                    "1️⃣ Asiste este jueves 20:00 HS\n   AV. TILLARD 1318\n\n" +
                    "2️⃣ Participa en actividades\n   Talleres prácticos\n   Grupos de apoyo\n\n" +
                    "3️⃣ Recibe consejería\n   Sesiones personalizadas\n   Seguimiento\n\n" +
                    "¿Te gustaría saber más?",
                    'bot'
                );
            }
        }, 800);
    }, 300);
    
    if (userInput) {
        setTimeout(() => {
            userInput.focus();
        }, 500);
    }
}

// Mostrar indicador de escritura
function showTypingIndicator() {
    const indicator = document.getElementById('familias-typing-indicator');
    if (indicator) {
        indicator.style.display = 'flex';
        const messagesContainer = document.getElementById('familias-chatbot-messages');
        if (messagesContainer) {
            messagesContainer.scrollTop = 0;
        }
    }
}

// Ocultar indicador de escritura
function hideTypingIndicator() {
    const indicator = document.getElementById('familias-typing-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// Enviar mensaje del usuario
function sendChatbotMessage() {
    const userInput = document.getElementById('familias-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addChatbotMessage(message, 'user');
    userInput.value = '';
    
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        const response = getChatbotResponse(message);
        
        setTimeout(() => {
            addChatbotMessage(response, 'bot');
        }, 200);
    }, 1500);
}

// Agregar mensaje al chat (los nuevos mensajes aparecen arriba)
function addChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('familias-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'familias-bot-message' : 'familias-user-message';
    
    let processedText = text;
    
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    processedText = processedText.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" style="color: #E8C547; text-decoration: underline; word-break: break-all;">${url}</a>`;
    });
    
    const phoneRegex = /(\+?\d[\d\s\-\(\)]{8,}\d)/g;
    processedText = processedText.replace(phoneRegex, function(phone) {
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        return `<a href="tel:${cleanPhone}" style="color: #E8C547; text-decoration: underline;">${phone}</a>`;
    });
    
    const paragraphs = processedText.split('\n\n');
    let formattedText = '';
    
    paragraphs.forEach(paragraph => {
        if (paragraph.trim()) {
            const lines = paragraph.split('\n');
            if (lines.length > 1 && paragraph.includes('•')) {
                formattedText += '<p>' + paragraph.replace(/\n/g, '<br>') + '</p>';
            } else if (lines.length > 1) {
                formattedText += '<p>' + lines.join('<br>') + '</p>';
            } else {
                formattedText += '<p>' + paragraph + '</p>';
            }
        }
    });
    
    messageDiv.innerHTML = formattedText || processedText;
    
    messagesContainer.insertBefore(messageDiv, messagesContainer.firstChild);
    
    messagesContainer.scrollTop = 0;
    
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        messageDiv.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 10);
}

// Obtener respuesta del chatbot
function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [keyword, responses] of Object.entries(familiasChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            return responses[0];
        }
    }
    
    if (/(hola|buenos|buenas)/i.test(lowerMessage)) {
        return "🏡 ¡Hola! ¿En qué puedo ayudarte?";
    }
    
    if (/(dónde|donde|ubicación|ubicacion)/i.test(lowerMessage)) {
        return "📍 Ubicación:\n\nAuditorio Mayor\nAV. TILLARD 1318\nB° COFICO\n\nJueves 20:00 HS";
    }
    
    if (/(teléfono|telefono|celular|llamar)/i.test(lowerMessage)) {
        return "📱 Contacto:\n\n+54 351 551-8204\nCintia y Marcos Darcano\nLunes a Viernes 16:00-20:00 HS";
    }
    
    if (/(quiero unirme|ser parte|asistir)/i.test(lowerMessage)) {
        return "🎉 Para unirte:\n\nVen este jueves 20:00 HS\nAV. TILLARD 1318\nPregunta por Cintia o Marcos\n\n📱 +54 351 551-8204";
    }
    
    if (/(restaurar|sanar|arreglar)/i.test(lowerMessage)) {
        return "🏡 ¡TU FAMILIA PUEDE SER RESTAURADA!\n\nJueves 20:00 HS\nAV. TILLARD 1318\n\n📱 +54 351 551-8204";
    }
    
    if (/(gracias|thank)/i.test(lowerMessage)) {
        return "🙏 ¡De nada! Que Dios bendiga tu hogar.\n\nJueves 20:00 HS - AV. TILLARD 1318";
    }
    
    return "Puedo ayudarte con horarios, contacto, ubicación o restaurar tu familia. ¿Qué necesitas?";
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🏡 DOM cargado - Iniciando chatbot optimizado...');
    setTimeout(initializeFamiliasChatbot, 1000);
});

window.addEventListener('load', function() {
    console.log('🏡 Página cargada - Asegurando chatbot...');
    if (!familiasChatbotInitialized) {
        setTimeout(initializeFamiliasChatbot, 500);
    }
});

window.openFamiliasChatbot = function(type = 'general') {
    openChatbotWithCustomMessage(
        "🏡 ¡Hola! Soy tu asistente de Restaurando Familias.",
        type
    );
};

console.log('✅ chatbot-matrimonios.js cargado - VERSIÓN MEJORADA');