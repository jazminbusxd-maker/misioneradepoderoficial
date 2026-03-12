// ======================================================
// CHATBOT CYBERPUNK PARA ADOLESCENTES (13-18 AÑOS) - RESPONSIVE
// Ministerio de Adolescentes - Misionera de Poder
// ======================================================

// Base de conocimiento específica para Adolescentes
const adolescentesChatbotKnowledge = {
    "horarios": [
        "🕐 **Horarios de Adolescentes:**\n• **Sábados:** 17:30 HS - Reunión especial\n• **Ubicación:** AUDITORIO MAYOR AV. TILLARD 1318\n• **Edades:** 13 a 18 años\n• **Duración:** 2 horas aprox."
    ],
    
    "contacto": [
        "📱 **Contacto directo:**\n👥 **Líderes:** Monica Juncos y Emmanuel Orellana\n📞 **WhatsApp:** +54 9 351 265-1111\n📍 **Ubicación:** AV. TILLARD 1318 B° COFICO\n📸 **Instagram:** @adolescentes.mp"
    ],
    
    "reuniones": [
        "🎯 **ENCUENTRO SEMANAL - SÁBADOS 17:30 HS**\n\n**Incluye:**\n• Adoración contemporánea\n• Enseñanzas relevantes para adolescentes\n• Espacios de diálogo abierto\n• Juegos divertidos\n• Comunidad real\n• ¡Entrada libre para todos!"
    ],
    
    "unirse": [
        "🎯 **¡GENIAL QUE QUIERAS UNIRTE!**\n\n**Proceso simple:**\n1. Ven este sábado 17:30 HS\n2. Ubicación: AV. TILLARD 1318 (Auditorio Mayor)\n3. Pregunta por Monica o Emmanuel\n4. Participa en las actividades\n5. Conoce a otros adolescentes como tú\n\n📱 **Consultas:** +54 9 351 265-1111"
    ],
    
    "edades": [
        "👥 **Rango de edades:**\n• **13 a 18 años** - Etapa adolescente.\n• ¡Trae a tus amigos, todos son bienvenidos!"
    ],

    "actividades": [
        "🎮 **Lo que hacemos:**\n• **Adoración** contemporánea y relevante\n• **Enseñanzas** sobre fe auténtica\n• **Juegos** y dinámicas grupales\n• **Talleres** de desarrollo personal\n• **Proyectos** comunitarios\n• **Campamentos** (próximamente)\n• **Eventos especiales** mensuales"
    ],
    
    "lideres": [
        "👥 **NUESTRO EQUIPO:**\n\n• **Monica Juncos** y **Emmanuel Orellana**\n• **Todos disponibles** para escucharte y acompañarte\n• **Contacto:** +54 9 351 265-1111"
    ],
    
    "padres": [
        "👨‍👩‍👧‍👦 **Información para padres:**\n\n• **Comunicación directa** con líderes\n• **Espacio seguro** y supervisado\n• **Enfoque integral** (espiritual, emocional, social)\n• **Proyectos de desarrollo** personal\n• **Contacto principal:** +54 9 351 265-1111\n• **Horarios:** Sábados 17:30 HS"
    ],
    
    "campamento": [
        "🏕️ **PRÓXIMO CAMPAMENTO ADOLESCENTE**\n\n**Información:**\n• **Fechas:** Por confirmar\n• **Actividades:** Deportes, aventura, adoración\n• **Inscripciones:** Próximamente\n• **Consultas:** +54 9 351 265-1111\n\n📱 **Seguinos en @adolescentes.mp para updates**"
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let adolescentesChatbotInitialized = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT - RESPONSIVE
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
    console.log('✅ Chatbot Adolescentes listo para ' + (isMobile ? 'móvil' : isTablet ? 'tablet' : 'desktop'));
}

// Crear elementos HTML del chatbot
function createAdolescentesChatbotElements(isMobile, isTablet) {
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="adolescentes-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="adolescentes-chatbot-header">
                <h4>🔮 Adolescentes - Asistente</h4>
                <button id="adolescentes-close-chatbot" title="Cerrar">&times;</button>
            </div>
            
            <!-- Mensajes -->
            <div id="adolescentes-chatbot-messages">
                <div class="adolescentes-bot-message">¡Hola! 🔮 Soy tu asistente del area de Adolescentes.</div>
                <div class="adolescentes-bot-message">Estoy aquí para ayudarte con información sobre nuestro espacio para adolescentes de 13 a 18 años.</div>
                <div class="adolescentes-bot-message">Pregúntame sobre: horarios, actividades, líderes, cómo unirte, etc.</div>
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
        <button id="adolescentes-chatbot-toggle" title="Chat GEN Z CREW">🔮</button>
    `;
    
    // Insertar en el body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Aplicar estilos
    addAdolescentesChatbotStyles(isMobile, isTablet);
}

// Añadir estilos CSS para el chatbot
function addAdolescentesChatbotStyles(isMobile, isTablet) {
    const isSmallScreen = isMobile || window.innerWidth < 768;
    
    const styles = `
        <style>
            /* Chatbot Container - Estilo Cyberpunk responsive */
            #adolescentes-chatbot-container {
                position: fixed;
                bottom: ${isSmallScreen ? '70px' : '80px'};
                right: ${isSmallScreen ? '10px' : '20px'};
                width: ${isSmallScreen ? 'calc(100vw - 20px)' : (isTablet ? '380px' : '340px')};
                max-width: ${isSmallScreen ? 'none' : '90vw'};
                height: ${isSmallScreen ? '55vh' : '480px'};
                max-height: ${isSmallScreen ? '65vh' : '65vh'};
                background: rgba(10, 10, 18, 0.95);
                border: 1px solid var(--cyber-blue);
                border-radius: 12px;
                box-shadow: 
                    0 10px 25px rgba(0, 255, 255, 0.2),
                    0 0 30px rgba(255, 0, 255, 0.1);
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                backdrop-filter: blur(10px);
                font-family: 'Exo 2', sans-serif;
            }
            
            /* Header */
            #adolescentes-chatbot-header {
                background: rgba(26, 26, 46, 0.95);
                color: var(--cyber-white);
                padding: ${isSmallScreen ? '10px 15px' : '12px 18px'};
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Orbitron', sans-serif;
                font-size: ${isSmallScreen ? '1rem' : '1.1rem'};
                font-weight: 600;
                text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
                border-bottom: 1px solid rgba(255, 0, 255, 0.3);
            }
            
            #adolescentes-close-chatbot {
                background: transparent;
                border: none;
                color: var(--cyber-blue);
                font-size: ${isSmallScreen ? '1.3rem' : '1.5rem'};
                cursor: pointer;
                font-weight: bold;
                width: ${isSmallScreen ? '24px' : '26px'};
                height: ${isSmallScreen ? '24px' : '26px'};
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.2s ease;
                -webkit-tap-highlight-color: transparent;
            }
            
            #adolescentes-close-chatbot:hover {
                background: rgba(255, 0, 255, 0.1);
                color: var(--cyber-pink);
            }
            
            /* Mensajes */
            #adolescentes-chatbot-messages {
                flex: 1;
                padding: ${isSmallScreen ? '12px' : '15px'};
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: ${isSmallScreen ? '10px' : '12px'};
                background: rgba(10, 10, 18, 0.8);
            }
            
            .adolescentes-bot-message {
                background: rgba(0, 255, 255, 0.07);
                border: 1px solid rgba(0, 255, 255, 0.2);
                border-radius: 12px;
                padding: ${isSmallScreen ? '10px 12px' : '12px 15px'};
                color: #E0E0FF;
                font-size: ${isSmallScreen ? '0.85rem' : '0.9rem'};
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-start;
                position: relative;
                box-shadow: 0 2px 8px rgba(0, 255, 255, 0.1);
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            
            .adolescentes-user-message {
                background: rgba(255, 0, 255, 0.08);
                border: 1px solid rgba(255, 0, 255, 0.2);
                border-radius: 12px;
                padding: ${isSmallScreen ? '10px 12px' : '12px 15px'};
                color: #FFFFFF;
                font-size: ${isSmallScreen ? '0.85rem' : '0.9rem'};
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-end;
                text-align: right;
                box-shadow: 0 2px 8px rgba(255, 0, 255, 0.1);
                word-wrap: break-word;
                overflow-wrap: break-word;
            }
            
            /* Input */
            #adolescentes-chatbot-input {
                padding: ${isSmallScreen ? '10px' : '12px'};
                display: flex;
                gap: 8px;
                border-top: 1px solid rgba(0, 255, 255, 0.2);
                background: rgba(26, 26, 46, 0.9);
            }
            
            #adolescentes-user-input {
                flex: 1;
                padding: ${isSmallScreen ? '8px 12px' : '10px 14px'};
                border: 1px solid var(--cyber-blue);
                border-radius: 20px;
                background: rgba(10, 10, 18, 0.9);
                color: #CCCCFF;
                font-family: 'Exo 2', sans-serif;
                font-size: ${isSmallScreen ? '0.9rem' : '0.95rem'};
                transition: all 0.2s ease;
                font-size: 16px; /* Evita zoom en iOS */
            }
            
            #adolescentes-user-input:focus {
                outline: none;
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
                border-color: var(--cyber-pink);
            }
            
            #adolescentes-send-btn {
                padding: ${isSmallScreen ? '8px 16px' : '10px 20px'};
                background: linear-gradient(45deg, var(--cyber-blue), rgba(0, 255, 255, 0.8));
                color: var(--cyber-dark);
                border: none;
                border-radius: 20px;
                cursor: pointer;
                font-family: 'Orbitron', sans-serif;
                font-weight: 600;
                font-size: ${isSmallScreen ? '0.9rem' : '1rem'};
                transition: all 0.2s ease;
                min-width: ${isSmallScreen ? '45px' : '50px'};
                -webkit-tap-highlight-color: transparent;
            }
            
            #adolescentes-send-btn:hover {
                background: linear-gradient(45deg, var(--cyber-pink), rgba(255, 0, 255, 0.8));
                transform: scale(1.05);
                box-shadow: 0 0 15px rgba(255, 0, 255, 0.4);
            }
            
            /* Botones rápidos */
            #adolescentes-quick-questions {
                padding: ${isSmallScreen ? '10px' : '12px'};
                display: flex;
                flex-wrap: wrap;
                gap: ${isSmallScreen ? '6px' : '8px'};
                border-top: 1px solid rgba(255, 0, 255, 0.2);
                background: rgba(26, 26, 46, 0.9);
            }
            
            .adolescentes-quick-btn {
                padding: ${isSmallScreen ? '6px 10px' : '8px 12px'};
                background: rgba(45, 45, 68, 0.6);
                border: 1px solid rgba(0, 255, 255, 0.3);
                border-radius: 16px;
                color: #CCCCFF;
                cursor: pointer;
                font-size: ${isSmallScreen ? '0.75rem' : '0.8rem'};
                transition: all 0.2s ease;
                font-family: 'Exo 2', sans-serif;
                display: flex;
                align-items: center;
                gap: 5px;
                backdrop-filter: blur(5px);
                -webkit-tap-highlight-color: transparent;
                flex: 1;
                min-width: 0;
                justify-content: center;
            }
            
            .adolescentes-quick-btn:hover {
                background: rgba(255, 0, 255, 0.1);
                border-color: var(--cyber-pink);
                color: var(--cyber-white);
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(255, 0, 255, 0.2);
            }
            
            /* Botón flotante - Cyberpunk responsive */
            #adolescentes-chatbot-toggle {
                position: fixed;
                bottom: ${isSmallScreen ? '15px' : '20px'};
                right: ${isSmallScreen ? '15px' : '20px'};
                background: linear-gradient(45deg, var(--cyber-blue), var(--cyber-green));
                color: var(--cyber-dark);
                border: none;
                border-radius: 50%;
                width: ${isSmallScreen ? '55px' : '60px'};
                height: ${isSmallScreen ? '55px' : '60px'};
                font-size: ${isSmallScreen ? '1.6rem' : '1.8rem'};
                cursor: pointer;
                box-shadow: 
                    0 6px 20px rgba(0, 255, 255, 0.4),
                    0 0 25px rgba(255, 0, 255, 0.3);
                z-index: 9999;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Orbitron', sans-serif;
                font-weight: 700;
                animation: subtlePulse 3s infinite alternate;
                -webkit-tap-highlight-color: transparent;
                touch-action: manipulation;
            }
            
            @keyframes subtlePulse {
                0% {
                    box-shadow: 
                        0 6px 20px rgba(0, 255, 255, 0.4),
                        0 0 25px rgba(255, 0, 255, 0.3);
                    transform: scale(1);
                }
                100% {
                    box-shadow: 
                        0 8px 25px rgba(0, 255, 255, 0.6),
                        0 0 35px rgba(255, 0, 255, 0.4);
                    transform: scale(1.05);
                }
            }
            
            #adolescentes-chatbot-toggle:hover {
                transform: scale(1.1) rotate(10deg);
                background: linear-gradient(45deg, var(--cyber-pink), var(--cyber-blue));
                box-shadow: 
                    0 8px 25px rgba(255, 0, 255, 0.6),
                    0 0 40px rgba(0, 255, 255, 0.5);
            }
            
            #adolescentes-chatbot-toggle:active {
                transform: scale(0.95);
            }
            
            /* Scrollbar personalizada */
            #adolescentes-chatbot-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            #adolescentes-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(0, 255, 255, 0.05);
                border-radius: 3px;
            }
            
            #adolescentes-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(var(--cyber-blue), var(--cyber-pink));
                border-radius: 3px;
            }
            
            #adolescentes-chatbot-messages::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(var(--cyber-pink), var(--cyber-blue));
            }
            
            /* Mejoras para pantallas muy pequeñas */
            @media (max-width: 360px) {
                #adolescentes-chatbot-container {
                    width: calc(100vw - 16px);
                    right: 8px;
                    bottom: 65px;
                    height: 50vh;
                }
                
                #adolescentes-chatbot-toggle {
                    width: 50px;
                    height: 50px;
                    font-size: 1.4rem;
                    bottom: 12px;
                    right: 12px;
                }
                
                .adolescentes-quick-btn {
                    font-size: 0.7rem;
                    padding: 5px 8px;
                }
                
                #adolescentes-chatbot-header {
                    font-size: 0.9rem;
                }
            }
            
            /* Mejoras para tablets */
            @media (min-width: 769px) and (max-width: 1024px) {
                #adolescentes-chatbot-container {
                    width: 400px;
                }
            }
            
            /* Ajustes para landscape en móviles */
            @media (max-height: 500px) and (orientation: landscape) {
                #adolescentes-chatbot-container {
                    height: 70vh;
                    bottom: 60px;
                }
                
                #adolescentes-chatbot-toggle {
                    bottom: 10px;
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
    
    if (!toggleBtn || !chatbotContainer) {
        console.error('❌ No se encontraron elementos del chatbot de Adolescentes');
        return;
    }
    
    // Abrir chatbot
    toggleBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'flex';
        if (userInput) userInput.focus();
        
        // Efecto sutil
        this.style.transform = 'rotate(15deg) scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'rotate(15deg) scale(1)';
        }, 150);
    });
    
    // Cerrar chatbot
    closeBtn.addEventListener('click', function() {
        chatbotContainer.style.display = 'none';
    });
    
    // Enviar con Enter
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendAdolescentesChatbotMessage();
        }
    });
    
    // Enviar con botón
    sendBtn.addEventListener('click', sendAdolescentesChatbotMessage);
    
    // Botones rápidos
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendAdolescentesChatbotMessage();
        });
    });
    
    // En móviles, cerrar al hacer clic fuera (con mejor detección)
    if (isMobile) {
        document.addEventListener('click', function(e) {
            if (chatbotContainer && chatbotContainer.style.display === 'flex') {
                const isToggle = toggleBtn.contains(e.target);
                const isChatbot = chatbotContainer.contains(e.target);
                
                if (!isChatbot && !isToggle) {
                    chatbotContainer.style.display = 'none';
                }
            }
        });
    } else {
        // En desktop, comportamiento normal
        document.addEventListener('click', function(e) {
            if (chatbotContainer && chatbotContainer.style.display === 'flex') {
                if (!chatbotContainer.contains(e.target) && 
                    !toggleBtn.contains(e.target)) {
                    chatbotContainer.style.display = 'none';
                }
            }
        });
    }
}

// Configurar botones de la página
function setupAdolescentesPageButtons() {
    console.log('🔍 Configurando botones de la página...');
    
    // Botón "¡QUIERO SER PARTE!"
    const joinBtn = document.getElementById('join-cyber');
    if (joinBtn) {
        joinBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🔮 Botón "¡QUIERO SER PARTE!" clickeado');
            openAdolescentesChatbotWithCustomMessage(
                "🔮 **¡BIENVENIDO/A AL Area de Adolescentes!**\n\nGenial que quieras unirte a nuestra comunidad de adolescentes. Voy a ayudarte con toda la información:",
                'unirse'
            );
        });
    }
    
    // Botón "INFO PARA PADRES"
    const contactBtn = document.getElementById('contact-cyber');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🔮 Botón "INFO PARA PADRES" clickeado');
            openAdolescentesChatbotWithCustomMessage(
                "👨‍👩‍👧‍👦 **¡HOLA PADRES!**\n\nAcompañamos a sus hijos adolescentes en esta etapa crucial. Estoy aquí para responder sus preguntas:",
                'padres'
            );
        });
    }
    
    console.log('✅ Botones configurados');
}

// Función para abrir chatbot con mensaje personalizado
function openAdolescentesChatbotWithCustomMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('adolescentes-chatbot-container');
    const userInput = document.getElementById('adolescentes-user-input');
    
    if (!chatbotContainer) {
        console.error('❌ No se encontró el chatbot container');
        return;
    }
    
    // Mostrar el chatbot con animación sutil
    chatbotContainer.style.display = 'flex';
    chatbotContainer.style.opacity = '0';
    chatbotContainer.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
        chatbotContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        chatbotContainer.style.opacity = '1';
        chatbotContainer.style.transform = 'translateY(0)';
    }, 10);
    
    // Limpiar mensajes anteriores (dejar solo los 3 primeros)
    const messagesContainer = document.getElementById('adolescentes-chatbot-messages');
    if (messagesContainer) {
        const children = Array.from(messagesContainer.children);
        if (children.length > 3) {
            for (let i = 3; i < children.length; i++) {
                messagesContainer.removeChild(children[i]);
            }
        }
    }
    
    // Agregar mensaje personalizado
    setTimeout(() => {
        addAdolescentesChatbotMessage(message, 'bot');
        
        // Agregar información adicional según el tipo
        setTimeout(() => {
            if (type === 'unirse') {
                addAdolescentesChatbotMessage(
                    "**🎯 CÓMO UNIRTE:**\n\n" +
                    "1. **VENÍ** este sábado 17:30 HS\n" +
                    "2. **UBICACIÓN:** Auditorio Mayor AV. TILLARD 1318\n" +
                    "3. **PREGUNTÁ** por Monica o Emmanuel\n" +
                    "4. **PARTICIPÁ** en las actividades\n" +
                    "5. **CONOCÉ** a otros adolescentes\n\n" +
                    "📱 **WhatsApp:** +54 9 351 265-1111\n" +
                    "📸 **Instagram:** @adolescentes.mp",
                    'bot'
                );
            } else if (type === 'padres') {
                addAdolescentesChatbotMessage(
                    "**👨‍👩‍👧‍👦 INFORMACIÓN PARA PADRES:**\n\n" +
                    "• **LÍDERES:** Monica Juncos y Emmanuel Orellana\n" +
                    "• **CONTACTO:** +54 9 351 265-1111\n" +
                    "• **HORARIOS:** Sábados 17:30 HS\n" +
                    "• **UBICACIÓN:** AV. TILLARD 1318\n" +
                    "• **EDADES:** 13 a 18 años\n" +
                    "• **ENFOQUE:** Desarrollo integral\n\n" +
                    "¿Qué información específica necesita?",
                    'bot'
                );
            }
        }, 800);
    }, 300);
    
    // Enfocar el input
    if (userInput) {
        setTimeout(() => {
            userInput.focus();
        }, 500);
    }
}

// Enviar mensaje del usuario
function sendAdolescentesChatbotMessage() {
    const userInput = document.getElementById('adolescentes-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Mostrar mensaje del usuario
    addAdolescentesChatbotMessage(message, 'user');
    
    // Procesar y obtener respuesta
    setTimeout(() => {
        const response = getAdolescentesChatbotResponse(message);
        addAdolescentesChatbotMessage(response, 'bot');
    }, 500);
    
    // Limpiar input
    userInput.value = '';
}

// Agregar mensaje al chat
function addAdolescentesChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('adolescentes-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'adolescentes-bot-message' : 'adolescentes-user-message';
    messageDiv.textContent = text;
    
    messagesContainer.appendChild(messageDiv);
    
    // Auto-scroll
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Efecto sutil de aparición (solo para bot)
    if (sender === 'bot') {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.style.transition = 'opacity 0.4s ease';
            messageDiv.style.opacity = '1';
        }, 10);
    }
}

// Obtener respuesta del chatbot
function getAdolescentesChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar en base de conocimiento
    for (const [keyword, responses] of Object.entries(adolescentesChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            const response = responses[Math.floor(Math.random() * responses.length)];
            return response;
        }
    }
    
    // Respuestas específicas adicionales
    if (/(monica|emmanuel|líder|lider|lideres)/i.test(lowerMessage)) {
        return "👥 **NUESTROS LÍDERES:**\n\n" +
               "• **Monica Juncos**\n" +
               "• **Emmanuel Orellana**\n" +
               "📱 **Contacto:** +54 9 351 265-1111\n" +
               "📸 **Instagram:** @adolescentes.mp";
    }
    
    if (/(campamento|retiro|viaje|excursión)/i.test(lowerMessage)) {
        return "🏕️ **CAMPAMENTO ADOLESCENTE**\n\n" +
               "Próximamente anunciaremos fechas y detalles del próximo campamento.\n\n" +
               "**Seguinos en:**\n" +
               "📸 @adolescentes.mp para actualizaciones\n" +
               "📱 WhatsApp: +54 9 351 265-1111\n\n" +
               "¡Será una experiencia inolvidable!";
    }
    
    if (/(teléfono|telefono|celular|llamar|número|numero|whatsapp|wsap|contacto)/i.test(lowerMessage)) {
        return "📱 **CONTACTO DIRECTO:**\n\n" +
               "• **WhatsApp:** +54 9 351 265-1111\n" +
               "• **Líderes:** Monica y Emmanuel\n" +
               "• **Instagram:** @adolescentes.mp\n" +
               "• **Ubicación:** AV. TILLARD 1318 B° COFICO\n";
    }
    
    if (/(hola|buenos|buenas|saludos|hello|hey)/i.test(lowerMessage)) {
        const greetings = [
            "🔮 ¡Hola! ¿Eres adolescente o padre/madre? ¿En qué puedo ayudarte hoy?",
            "👋 ¡Buenas! Bienvenido/a al Area de Adolescentes. ¿Preguntas sobre nuestra comunidad para 13-18 años?",
            "⚡ ¡Hola! Asistente del Area de Adolescentes aquí. ¿Qué información necesitas?"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (/(gracias|thank|agradecido)/i.test(lowerMessage)) {
        return "🔮 **¡DE NADA!**\n\n" +
               "Es un privilegio acompañar a adolescentes en esta etapa de descubrimiento y crecimiento.\n\n" +
               "¿Hay algo más en lo que pueda ayudarte?";
    }
    
    if (/(quiero ir|quiero unirme|me quiero unir|participar|integrarme)/i.test(lowerMessage)) {
        return "🎯 **¡GENIAL DECISIÓN!**\n\n" +
               "**Para unirte:**\n" +
               "1. Ven este sábado 17:30 HS\n" +
               "2. Auditorio Mayor AV. TILLARD 1318\n" +
               "3. Pregunta por Monica o Emmanuel\n" +
               "4. ¡Listo! Te integras automáticamente\n\n" +
               "**No necesitas:**\n" +
               "• Pago de inscripción\n" +
               "• Documentación especial\n" +
               "• Experiencia previa\n\n" +
               "📱 **Consultas:** +54 9 351 265-1111";
    }
    
    // Preguntas específicas de adolescentes
    if (/(aburrido|divertido|entretenido|hacemos|actividades)/i.test(lowerMessage)) {
        return "⚡ **¿QUÉ HACEMOS?**\n\n" +
               "• **Adoración** contemporánea (música actual)\n" +
               "• **Charlas** sobre temas relevantes\n" +
               "• **Juegos** y competencias grupales\n" +
               "• **Talleres** de desarrollo personal\n" +
               "• **Proyectos** comunitarios\n" +
               "• **Eventos especiales** mensuales\n\n" +
               "¡Nunca te aburrirás con nosotros!";
    }
    
    if (/(amigos|conocer gente|solo|solitario)/i.test(lowerMessage)) {
        return "🤝 **¡HACÉ AMIGOS REALES!**\n\n" +
               "Muchos adolescentes vienen solos y encuentran su tribu aquí.\n\n" +
               "**Por qué funciona:**\n" +
               "• Grupos por edad similar\n" +
               "• Actividades que conectan\n" +
               "• Ambiente de aceptación\n" +
               "• Líderes que facilitan\n\n" +
               "¡Te garantizamos que te sentirás en casa!";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "🔮 No capté bien tu pregunta. ¿Podrías reformularla?",
        "🎯 Puedo ayudarte con info sobre horarios, actividades, líderes o cómo unirte. ¿Qué necesitas saber?",
        "⚡ No estoy seguro de entender. Ejemplos:\n• \"¿A qué hora es la reunión?\"\n• \"¿Cómo me uno?\"\n• \"¿Quiénes son los líderes?\""
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

// Inicializar cuando cargue la página
window.addEventListener('load', function() {
    setTimeout(initializeAdolescentesChatbot, 1000);
});

// También inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeAdolescentesChatbot, 1500);
});

// Funciones públicas para usar desde otros scripts
window.openAdolescentesChatbot = function(type = 'general') {
    if (type === 'padres') {
        openAdolescentesChatbotWithCustomMessage(
            "👨‍👩‍👧‍👦 ¡Hola padres! ¿En qué puedo ayudarles con información sobre el area de Adolescentes?",
            'padres'
        );
    } else if (type === 'unirse') {
        openAdolescentesChatbotWithCustomMessage(
            "🔮 ¡Qué bueno que quieras unirte a nuestra comunidad de adolescentes!",
            'unirse'
        );
    } else if (type === 'lideres') {
        openAdolescentesChatbotWithCustomMessage(
            "👥 ¿Quieres conocer a nuestros líderes del area de Adolescentes?",
            'lideres'
        );
    } else {
        openAdolescentesChatbotWithCustomMessage(
            "🔮 ¡Hola! Asistente del GEN Z CREW aquí. ¿En qué puedo ayudarte?",
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

console.log('🔮 adolescentes-chatbot.js cargado - Listo para inicializar (Versión Responsive)');