// ======================================================
// CHATBOT URBANO PARA JÓVENES DE CONQUISTA - MEJORADO
// Ministerio de Jóvenes - Misionera de Poder
// ======================================================

// Base de conocimiento específica para Jóvenes
const jovenesChatbotKnowledge = {
    "horarios": [
        "🕐 Horarios de Jóvenes de Conquista:\n• Sábados: 20:00 HS - Reunión principal\n• Ubicación: AUDITORIO MAYOR AV. TILLARD 1318\n• Duración: 2-3 horas"
    ],
    
    "contacto": [
        "📱 Contacto directo:\n👥 Líderes: Agustina Ocaño y Joaquín Monje\n📞 WhatsApp: 3513390139\n📍 Ubicación: AV. TILLARD 1318 B° COFICO\n📸 Instagram: @jovenes_de_conquista_cba"
    ],
    
    "reuniones": [
        "🔥 Reunión semanal - Sábados 20:00 HS\n\nIncluye:\n• Adoración contemporánea\n• Enseñanzas relevantes\n• Grupos de conexión\n• Ambiente joven y dinámico"
    ],
    
    "actividades": [
        "🔥 Lo que hacemos:\n• Adoración intensa y contemporánea\n• Enseñanzas prácticas para la vida\n• Grupos pequeños de discusión\n• Proyectos de impacto social\n• Conexiones reales"
    ],
    
    "lideres": [
        "👥 Nuestro equipo:\n\n• Agustina Ocaño - Liderazgo juvenil\n• Joaquín Monje - Desarrollo de jóvenes\n• Voluntarios comprometidos\n• Todos disponibles para acompañarte\n• Contacto: 3513390139"
    ],
    
    "vision": [
        "🎯 Nuestra visión:\n\nSomos una generación que no se conforma con lo ordinario. Vivimos con fuego y convicción, descubriendo nuestro propósito y transformando nuestra realidad."
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let jovenesChatbotInitialized = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

// Inicializar el chatbot
function initializeJovenesChatbot() {
    if (jovenesChatbotInitialized) return;
    
    console.log('🔥 Chatbot Jóvenes de Conquista - Inicializando...');
    
    createJovenesChatbotElements();
    setupJovenesChatbotEvents();
    setupJovenesPageButtons();
    adjustJovenesChatbotForMobile();
    
    jovenesChatbotInitialized = true;
    console.log('✅ Chatbot Jóvenes listo');
}

// Crear elementos HTML del chatbot
function createJovenesChatbotElements() {
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="jovenes-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="jovenes-chatbot-header">
                <h4>🔥 JÓVENES DE CONQUISTA</h4>
                <button id="jovenes-close-chatbot" title="Cerrar">×</button>
            </div>
            
            <!-- Mensajes -->
            <div id="jovenes-chatbot-messages">
                <div class="jovenes-bot-message">¡Hola! 🔥 Soy tu asistente de Jóvenes de Conquista.</div>
                <div class="jovenes-bot-message">Estoy aquí para ayudarte con información sobre nuestro movimiento juvenil.</div>
                <div class="jovenes-bot-message">Pregúntame sobre: horarios, cómo unirte, líderes, actividades, etc.</div>
            </div>
            
            <!-- Indicador de escritura -->
            <div id="jovenes-typing-indicator" class="jovenes-typing-indicator" style="display: none;">
                <span></span><span></span><span></span>
            </div>
            
            <!-- Input -->
            <div id="jovenes-chatbot-input">
                <input type="text" id="jovenes-user-input" placeholder="Escribe tu pregunta..." autocomplete="off">
                <button id="jovenes-send-btn" title="Enviar">➤</button>
            </div>
            
            <!-- Botones rápidos - MEJORADO -->
            <div id="jovenes-quick-questions">
                <button class="jovenes-quick-btn" data-question="¿Cuáles son los horarios?">🕐 Horarios</button>
                <button class="jovenes-quick-btn" data-question="quiero unirme">🔥 Unirme</button>
                <button class="jovenes-quick-btn" data-question="¿Quiénes son los líderes?">👥 Líderes</button>
            </div>
        </div>

        <!-- Botón flotante -->
        <button id="jovenes-chatbot-toggle" title="Chat Jóvenes de Conquista">🔥</button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    addJovenesChatbotStyles();
}

// Añadir estilos CSS mejorados
function addJovenesChatbotStyles() {
    const styles = `
        <style>
            :root {
                --azul-oscuro: #0D1B2A;
                --azul-medio: #1B263B;
                --azul-cielo: #415A77;
                --azul-claro: #778DA9;
                --azul-electrico: #118AB2;
                --azul-neon: #06D6A0;
                --azul-cyan: #00B4D8;
                --azul-grafito: #2D3047;
                --blanco-hueso: #E0E1DD;
                --accent-amarillo: #FFD166;
            }
            
            /* Chatbot Container - Mejorado */
            #jovenes-chatbot-container {
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 340px;
                max-width: calc(100vw - 40px);
                height: 480px;
                max-height: 65vh;
                background: var(--azul-oscuro);
                border: 2px solid var(--azul-electrico);
                border-radius: 20px;
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                font-family: 'Segoe UI', 'Poppins', sans-serif;
            }
            
            /* Header */
            #jovenes-chatbot-header {
                background: linear-gradient(135deg, var(--azul-electrico), var(--azul-cyan));
                color: var(--blanco-hueso);
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1.1rem;
                font-weight: 700;
                letter-spacing: 1px;
            }
            
            #jovenes-close-chatbot {
                background: var(--blanco-hueso);
                border: none;
                color: var(--azul-electrico);
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
            
            #jovenes-close-chatbot:hover {
                background: var(--azul-neon);
                color: var(--azul-oscuro);
                transform: rotate(90deg);
            }
            
            /* Área de mensajes */
            #jovenes-chatbot-messages {
                flex: 1;
                padding: 15px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: var(--azul-medio);
                scroll-behavior: smooth;
            }
            
            /* Mensajes mejorados */
            .jovenes-bot-message {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid var(--azul-claro);
                border-radius: 18px 18px 18px 4px;
                padding: 12px 16px;
                color: var(--blanco-hueso);
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-start;
                white-space: pre-line;
            }
            
            .jovenes-user-message {
                background: var(--azul-cielo);
                border: 1px solid var(--azul-electrico);
                border-radius: 18px 18px 4px 18px;
                padding: 12px 16px;
                color: var(--blanco-hueso);
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-end;
                white-space: pre-line;
            }
            
            /* Indicador de escritura */
            .jovenes-typing-indicator {
                display: none;
                padding: 12px 16px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid var(--azul-claro);
                border-radius: 18px 18px 18px 4px;
                margin: 0 15px 10px 15px;
                align-self: flex-start;
                max-width: 80px;
            }
            
            .jovenes-typing-indicator span {
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: var(--azul-electrico);
                margin: 0 2px;
                animation: jovenes-typing 1.4s infinite;
            }
            
            .jovenes-typing-indicator span:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .jovenes-typing-indicator span:nth-child(3) {
                animation-delay: 0.4s;
            }
            
            @keyframes jovenes-typing {
                0%, 60%, 100% {
                    transform: translateY(0);
                    opacity: 0.6;
                }
                30% {
                    transform: translateY(-6px);
                    opacity: 1;
                }
            }
            
            /* Input */
            #jovenes-chatbot-input {
                padding: 12px;
                display: flex;
                gap: 8px;
                border-top: 2px solid var(--azul-electrico);
                background: var(--azul-grafito);
            }
            
            #jovenes-user-input {
                flex: 1;
                padding: 12px 16px;
                border: 1px solid var(--azul-electrico);
                border-radius: 24px;
                background: var(--azul-medio);
                color: var(--blanco-hueso);
                font-size: 0.95rem;
                transition: all 0.2s ease;
            }
            
            #jovenes-user-input:focus {
                outline: none;
                border-color: var(--azul-neon);
                box-shadow: 0 0 12px rgba(6, 214, 160, 0.4);
            }
            
            #jovenes-send-btn {
                padding: 0 20px;
                background: linear-gradient(135deg, var(--azul-electrico), var(--azul-cyan));
                color: var(--blanco-hueso);
                border: none;
                border-radius: 24px;
                cursor: pointer;
                font-weight: bold;
                font-size: 1rem;
                transition: all 0.2s ease;
            }
            
            #jovenes-send-btn:hover {
                background: linear-gradient(135deg, var(--azul-neon), var(--azul-electrico));
                color: var(--azul-oscuro);
                transform: scale(1.05);
            }
            
            /* Botones rápidos - MEJORADOS */
            #jovenes-quick-questions {
                padding: 12px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                border-top: 2px solid var(--azul-cielo);
                background: var(--azul-grafito);
            }
            
            .jovenes-quick-btn {
                padding: 8px 12px;
                background: var(--azul-cielo);
                border: 1px solid var(--azul-electrico);
                border-radius: 20px;
                color: var(--blanco-hueso);
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.2s ease;
                flex: 1;
                min-width: 0;
                white-space: nowrap;
                font-weight: 600;
            }
            
            .jovenes-quick-btn:hover {
                background: var(--azul-electrico);
                border-color: var(--azul-neon);
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
            
            /* Botón flotante */
            #jovenes-chatbot-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, var(--azul-electrico), var(--azul-neon));
                color: var(--blanco-hueso);
                border: 2px solid var(--blanco-hueso);
                border-radius: 50%;
                width: 60px;
                height: 60px;
                font-size: 1.8rem;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                animation: jovenes-pulse 2s infinite;
            }
            
            @keyframes jovenes-pulse {
                0% {
                    box-shadow: 0 4px 20px rgba(17, 138, 178, 0.4);
                }
                50% {
                    box-shadow: 0 8px 30px rgba(6, 214, 160, 0.6);
                }
                100% {
                    box-shadow: 0 4px 20px rgba(17, 138, 178, 0.4);
                }
            }
            
            #jovenes-chatbot-toggle:hover {
                transform: scale(1.1) rotate(5deg);
            }
            
            /* Scrollbar */
            #jovenes-chatbot-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            #jovenes-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
            }
            
            #jovenes-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(var(--azul-electrico), var(--azul-neon));
                border-radius: 3px;
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                #jovenes-chatbot-container {
                    width: calc(100vw - 40px);
                    right: 20px;
                    left: 20px;
                    bottom: 80px;
                }
                
                #jovenes-chatbot-toggle {
                    width: 55px;
                    height: 55px;
                    font-size: 1.6rem;
                    bottom: 15px;
                    right: 15px;
                }
            }
            
            @media (max-width: 480px) {
                #jovenes-chatbot-container {
                    width: calc(100vw - 30px);
                    right: 15px;
                    left: 15px;
                    bottom: 75px;
                }
                
                .jovenes-quick-btn {
                    font-size: 0.75rem;
                    padding: 6px 8px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Ajustar para móvil
function adjustJovenesChatbotForMobile() {
    const isMobile = window.innerWidth <= 768;
    const chatbotContainer = document.getElementById('jovenes-chatbot-container');
    const chatbotToggle = document.getElementById('jovenes-chatbot-toggle');
    
    if (!chatbotContainer || !chatbotToggle) return;
    
    if (isMobile) {
        chatbotToggle.style.bottom = '15px';
        chatbotToggle.style.right = '15px';
    }
}

// Configurar eventos del chatbot - MEJORADO
function setupJovenesChatbotEvents() {
    const toggleBtn = document.getElementById('jovenes-chatbot-toggle');
    const closeBtn = document.getElementById('jovenes-close-chatbot');
    const sendBtn = document.getElementById('jovenes-send-btn');
    const userInput = document.getElementById('jovenes-user-input');
    const quickBtns = document.querySelectorAll('.jovenes-quick-btn');
    const chatbotContainer = document.getElementById('jovenes-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) return;
    
    // Abrir chatbot
    toggleBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'flex';
        setTimeout(() => userInput.focus(), 300);
        adjustJovenesChatbotForMobile();
    });
    
    // Cerrar chatbot
    closeBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });
    
    // Enviar con Enter
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendJovenesChatbotMessage();
        }
    });
    
    // Enviar con botón
    sendBtn.addEventListener('click', sendJovenesChatbotMessage);
    
    // Botones rápidos - MEJORADO para "Unirme"
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            
            // Si es el botón de unirme, usar respuesta personalizada
            if (question === 'quiero unirme') {
                sendJovenesChatbotMessageWithCustomResponse('unirme');
            } else {
                sendJovenesChatbotMessage();
            }
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
    
    // Prevenir cierre al hacer clic dentro
    chatbotContainer.addEventListener('click', (e) => e.stopPropagation());
    
    window.addEventListener('resize', adjustJovenesChatbotForMobile);
}

// Configurar botones de la página
function setupJovenesPageButtons() {
    const quieroSerParteBtn = document.getElementById('quiero-ser-parte-btn');
    if (quieroSerParteBtn) {
        quieroSerParteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openJovenesChatbotWithCustomMessage(
                "🔥 ¡Bienvenido/a a la Conquista!\n\nVeo que quieres ser parte de nuestra generación que transforma. ¡Genial decisión! Te explico todo:",
                'quiero ser parte'
            );
        });
    }
    
    const quieroUnirmeBtn = document.getElementById('quiero-unirme-hero');
    if (quieroUnirmeBtn) {
        quieroUnirmeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openJovenesChatbotWithCustomMessage(
                "🔥 ¡Excelente que quieras unirte!\n\nTe ayudamos con toda la información para que formes parte de Jóvenes de Conquista:",
                'unirse'
            );
        });
    }
}

// Función para abrir chatbot con mensaje personalizado - CORREGIDA (sin scroll)
function openJovenesChatbotWithCustomMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('jovenes-chatbot-container');
    const userInput = document.getElementById('jovenes-user-input');
    
    if (!chatbotContainer) return;
    
    adjustJovenesChatbotForMobile();
    chatbotContainer.style.display = 'flex';
    
    const messagesContainer = document.getElementById('jovenes-chatbot-messages');
    if (messagesContainer) {
        // Mantener solo los mensajes iniciales (primeros 3)
        while (messagesContainer.children.length > 3) {
            messagesContainer.removeChild(messagesContainer.lastChild);
        }
    }
    
    setTimeout(() => {
        addJovenesChatbotMessage(message, 'bot');
        
        if (type === 'unirse' || type === 'quiero ser parte') {
            setTimeout(() => {
                addJovenesChatbotMessage(
                    "🔥 ¡Te esperamos en Jóvenes de Conquista!\n\n" +
                    "📍 Nuestras reuniones:\n" +
                    "• Sábados 20:00 HS\n" +
                    "• Auditorio Mayor - AV. TILLARD 1318 B° COFICO\n\n" +
                    "👥 También podés contactar a nuestros líderes:\n" +
                    "• Agustina Ocaño y Joaquín Monje\n" +
                    "📱 WhatsApp: 3513390139\n" +
                    "📸 Instagram: @jovenes_de_conquista_cba\n\n" +
                    "Ellos estarán felices de conocerte y guiarte en este camino. ¡Te esperamos! 🔥",
                    'bot'
                );
                // CORRECCIÓN: NO hacer scroll automático
            }, 800);
        }
    }, 300);
    
    setTimeout(() => userInput.focus(), 500);
}

// Enviar mensaje del usuario - CORREGIDO
function sendJovenesChatbotMessage() {
    const userInput = document.getElementById('jovenes-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addJovenesChatbotMessage(message, 'user');
    userInput.value = '';
    
    // Mostrar indicador de escritura
    showJovenesTypingIndicator();
    
    // Obtener respuesta después de un delay
    setTimeout(() => {
        hideJovenesTypingIndicator();
        const response = getJovenesChatbotResponse(message);
        addJovenesChatbotMessage(response, 'bot');
        
        // CORRECCIÓN: NO hacer scroll después de la respuesta del bot
    }, 1000);
}

// Función para respuesta personalizada del botón "Unirme" - CORREGIDA
function sendJovenesChatbotMessageWithCustomResponse(type) {
    const userInput = document.getElementById('jovenes-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addJovenesChatbotMessage(message, 'user');
    userInput.value = '';
    
    showJovenesTypingIndicator();
    
    setTimeout(() => {
        hideJovenesTypingIndicator();
        
        if (type === 'unirme') {
            addJovenesChatbotMessage(
                "🔥 ¡Qué bueno que quieras sumarte a Jóvenes de Conquista!\n\n" +
                "📍 Te esperamos este sábado a las 20:00 HS en el Auditorio Mayor (AV. TILLARD 1318 B° COFICO).\n\n" +
                "📱 Mientras tanto, podés contactar a Agustina o Joaquín al 3513390139 para que te cuenten más detalles y te sientas bienvenido desde antes.\n\n" +
                "📸 También seguinos en Instagram @jovenes_de_conquista_cba para estar al tanto de todo.\n\n" +
                "¡Te esperamos con los brazos abiertos! 🔥",
                'bot'
            );
            // CORRECCIÓN: NO hacer scroll automático aquí
        }
    }, 1000);
}

// Mostrar indicador de escritura
function showJovenesTypingIndicator() {
    const indicator = document.getElementById('jovenes-typing-indicator');
    if (indicator) {
        indicator.style.display = 'block';
        const messagesContainer = document.getElementById('jovenes-chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Ocultar indicador de escritura
function hideJovenesTypingIndicator() {
    const indicator = document.getElementById('jovenes-typing-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// Agregar mensaje al chat - CORREGIDO (scroll solo para mensajes del usuario)
function addJovenesChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('jovenes-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'jovenes-bot-message' : 'jovenes-user-message';
    messageDiv.textContent = text;
    
    messagesContainer.appendChild(messageDiv);
    
    // CORRECCIÓN: Solo hacer scroll para mensajes del usuario
    if (sender === 'user') {
        setTimeout(() => {
            messagesContainer.scrollTo({
                top: messagesContainer.scrollHeight,
                behavior: 'smooth'
            });
        }, 50);
    } else {
        // Para mensajes del bot, NO hacer scroll automático
        console.log('Mensaje del bot agregado - sin scroll para mantener vista');
    }
}

// Obtener respuesta del chatbot - MEJORADO
function getJovenesChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar en base de conocimiento
    for (const [keyword, responses] of Object.entries(jovenesChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // RESPUESTA MEJORADA PARA "UNIRME"
    if (/(quiero unirme|unirme|quiero ser parte|integrarme|formar parte|como me uno|quiero ir)/i.test(lowerMessage)) {
        return "🔥 ¡Te esperamos en Jóvenes de Conquista!\n\n" +
               "📍 Te invitamos a nuestras reuniones:\n" +
               "• Sábados 20:00 HS\n" +
               "• Auditorio Mayor - AV. TILLARD 1318 B° COFICO\n\n" +
               "👥 También podés contactar a nuestros líderes:\n" +
               "• Agustina Ocaño y Joaquín Monje\n" +
               "📱 WhatsApp: 3513390139\n" +
               "📸 Instagram: @jovenes_de_conquista_cba\n\n" +
               "Ellos estarán felices de conocerte y guiarte en este camino. ¡Te esperamos!";
    }
    
    if (/(agustina|joaquín|joaquin|monje|líder|lider|lideres)/i.test(lowerMessage)) {
        return "👥 Nuestros líderes:\n\n• Agustina Ocaño\n• Joaquín Monje\n📱 Contacto: 3513390139\n📸 Instagram: @jovenes_de_conquista_cba";
    }
    
    if (/(teléfono|telefono|celular|llamar|número|numero|whatsapp|wsap|contacto)/i.test(lowerMessage)) {
        return "📱 Contacto directo:\n\n• WhatsApp: 3513390139\n• Líderes: Agustina Ocaño y Joaquín Monje\n• Instagram: @jovenes_de_conquista_cba\n• Ubicación: AV. TILLARD 1318 B° COFICO";
    }
    
    if (/(hola|buenos|buenas|saludos|hello|hey)/i.test(lowerMessage)) {
        const greetings = [
            "🔥 ¡Hola! ¿Listo para la conquista? ¿En qué puedo ayudarte hoy?",
            "🎯 ¡Buenas! Bienvenido/a a Jóvenes de Conquista. ¿Preguntas sobre nuestro movimiento?",
            "⚡ ¡Hola! Asistente de Jóvenes de Conquista aquí. ¿Qué información necesitas?"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (/(gracias|thank|agradecido)/i.test(lowerMessage)) {
        return "🔥 ¡De nada!\n\nEs un honor acompañarte en este camino de conquista y transformación.\n\n¿Hay algo más en lo que pueda ayudarte?";
    }
    
    if (/(aburrido|divertido|entretenido|hacemos|actividades)/i.test(lowerMessage)) {
        return "⚡ ¿Qué hacemos?\n\n• Adoración intensa y poderosa\n• Enseñanzas prácticas para la vida real\n• Grupos pequeños de conexión\n• Proyectos de impacto social\n• Conexiones reales y duraderas\n\n¡Nunca te aburrirás con nosotros!";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "🔥 No entendí bien tu pregunta. ¿Podrías reformularla?",
        "🎯 Puedo ayudarte con info sobre horarios, cómo unirte o líderes. ¿Qué necesitas saber?",
        "⚡ No estoy seguro de entender. Ejemplos:\n• ¿A qué hora es la reunión?\n• ¿Cómo me uno?\n• ¿Quiénes son los líderes?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

window.addEventListener('load', () => {
    setTimeout(initializeJovenesChatbot, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeJovenesChatbot, 1500);
});

// Funciones públicas
window.openJovenesChatbot = function(type = 'general') {
    if (type === 'unirse' || type === 'quiero ser parte') {
        openJovenesChatbotWithCustomMessage(
            "🔥 ¡Hola! ¿Listo para unirte a la conquista?",
            'unirse'
        );
    } else {
        openJovenesChatbotWithCustomMessage(
            "🔥 ¡Hola! Asistente de Jóvenes de Conquista aquí. ¿En qué puedo ayudarte?",
            'general'
        );
    }
};

window.closeJovenesChatbot = function() {
    const chatbotContainer = document.getElementById('jovenes-chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
    }
};

console.log('🔥 jovenes-chatbot.js mejorado - Listo');