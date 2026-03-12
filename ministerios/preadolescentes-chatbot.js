// ======================================================
// CHATBOT EXCLUSIVO PARA PREADOLESCENTES - VERSIÓN TECNOLÓGICA
// Ministerio de Preadolescentes - Misionera de Poder
// ======================================================

// Base de conocimiento específica para Preadolescentes
const preadolescentesChatbotKnowledge = {
    "horarios": [
        "🕒 **Horarios de Pre-Adolescentes:**\n• **Domingos:** 18:00 HS - Reunión especial para preadolescentes\n• **Ubicación:** AV. TILLARD 1318\n• **Duración:** 1.5 a 2 horas"
    ],
    
    "contacto": [
        "📱 **Contacto para padres/pre-adolescentes:**\n👨‍🏫 **Líderes:** Prof. Yohana y Prof. Juan\n📍 **Ubicación:** AV. TILLARD 1318\n📞 **Teléfono para consultas:** +54 351-350-0778\n📧 **Instagram:** @preadolescentes.mp"
    ],
    
    "campamento": [
        "🏕️ **CAMPAMENTO PRE EXPLOSIVOS 2026** 💣\n\n**Información para pre-adolescentes:**\n• **Fechas:** 16, 17 y 18 de enero 2026\n• **Lugar:** Hotel Gran Giardino\n• **Edades:** 10 a 13 años\n• **Consultas:** +54 351-350-0778\n• **Actividades:** Juegos, enseñanzas, recreación, fogata y más"
    ],
    
    "inscribir": [
        "🎯 **¡Excelente que quieras ser parte!**\n\n**Para unirte a Pre-Adolescentes:**\n1. **Ven** a nuestra reunión los domingos 18:00 HS\n2. **Conoce** a nuestros líderes Prof. Yohana y Prof. Juan\n3. **Participa** en las actividades de bienvenida\n4. **Inscríbete** en el campamento si quieres\n\n📞 **WhatsApp para consultas:** +54 351-350-0778"
    ],
    
    "edades": [
        "👦👧 **Edades aceptadas:**\n• **10 a 13 años** - Etapa pre-adolescente."
    ],

    "actividades": [
        "🎮 **Actividades para pre-adolescentes:**\n\n• **📖 Enseñanza bíblica** relevante para su edad\n• **💬 Diálogos** sobre temas actuales\n• **🎮 Juegos** y competencias saludables\n• **🎨 Talleres** creativos\n• **🏀 Deportes** y actividades físicas\n• **🤝 Grupos pequeños** de discusión"
    ],
    
    "seguridad": [
        "🛡️ **Medidas de seguridad:**\n\n• **Líderes capacitados** en trabajo con pre-adolescentes\n• **Ambiente supervisado** y protegido\n• **Protocolos** específicos para la edad\n• **Comunicación directa** con padres\n• **Control de acceso** al salón\n• **Primeros auxilios** disponibles"
    ],
    
    "lideres": [
        "👨‍🏫 **NUESTRO EQUIPO DE LÍDERES:**\n\n• **Líderes principales:** Prof. Yohana y Prof. Juan\n• **Voluntarios** jóvenes y capacitados\n• **Todos certificados** en primeros auxilios\n• **Experiencia** en trabajo con pre-adolescentes\n• **Amor** y comprensión para esta etapa especial\n• **Contacto directo:** +54 351-350-0778\n\n📱 **Siguenos en:** @preadolescentes.mp"
    ],
    
    "padres": [
        "👨‍👩‍👧‍👦 **Información para padres:**\n\n• **Comunicación** directa con líderes\n• **Reuniones** informativas trimestrales\n• **Protocolos** de seguridad detallados\n• **Acompañamiento** en la transición infantil-adolescente\n• **Contacto** permanente: +54 351-350-0778"
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let preadolescentesChatbotInitialized = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

// Inicializar el chatbot cuando se cargue la página
function initializePreadolescentesChatbot() {
    if (preadolescentesChatbotInitialized) return;
    
    console.log('🎯 Chatbot Pre-Adolescentes - Inicializando...');
    
    // Crear elementos del DOM
    createPreadolescentesChatbotElements();
    
    // Configurar eventos del chatbot
    setupPreadolescentesChatbotEvents();
    
    // Configurar los botones de la página
    setupPreadolescentesPageButtons();
    
    preadolescentesChatbotInitialized = true;
    console.log('✅ Chatbot Pre-Adolescentes listo');
}

// Crear elementos HTML del chatbot
function createPreadolescentesChatbotElements() {
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="preadolescentes-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="preadolescentes-chatbot-header">
                <h4>🎯 Pre-Adolescentes - Asistente</h4>
                <button id="preadolescentes-close-chatbot" title="Cerrar">&times;</button>
            </div>
            
            <!-- Mensajes -->
            <div id="preadolescentes-chatbot-messages">
                <div class="preadolescentes-bot-message">¡Hola! 🎯 Soy tu asistente de Pre-Adolescentes.</div>
                <div class="preadolescentes-bot-message">Estoy aquí para ayudarte con información sobre nuestro ministerio para jóvenes de 10 a 13 años.</div>
                <div class="preadolescentes-bot-message">Puedes preguntarme sobre: horarios, campamento, líderes, actividades, seguridad, etc.</div>
            </div>
            
            <!-- Input -->
            <div id="preadolescentes-chatbot-input">
                <input type="text" id="preadolescentes-user-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
                <button id="preadolescentes-send-btn" title="Enviar">➤</button>
            </div>
            
            <!-- Botones rápidos -->
            <div id="preadolescentes-quick-questions">
                <button class="preadolescentes-quick-btn" data-question="¿Cuáles son los horarios?">🕒 Horarios</button>
                <button class="preadolescentes-quick-btn" data-question="¿Quiénes son los líderes?">👨‍🏫 Líderes</button>
                <button class="preadolescentes-quick-btn" data-question="¿Qué edades?">👦👧 Edades</button>
                <button class="preadolescentes-quick-btn" data-question="¿Campamento?">🏕️ Campamento</button>
            </div>
        </div>

        <!-- Botón flotante para abrir chatbot -->
        <button id="preadolescentes-chatbot-toggle" title="Abrir chat de Pre-Adolescentes">🎯</button>
    `;
    
    // Insertar en el body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Aplicar estilos
    addPreadolescentesChatbotStyles();
}

// Añadir estilos CSS para el chatbot - RESPONSIVE
function addPreadolescentesChatbotStyles() {
    const styles = `
        <style>
            /* VARIABLES TECNOLÓGICAS */
            :root {
                --red-primary: #FF0000;
                --red-secondary: #CC0000;
                --red-light: #FF3333;
                --red-neon: #FF2D2D;
                --gray-primary: #333333;
                --gray-secondary: #555555;
                --gray-dark: #222222;
                --black: #000000;
                --white: #FFFFFF;
                --silver: #C0C0C0;
            }
            
            /* Chatbot Container - ESTILO TECNOLÓGICO */
            #preadolescentes-chatbot-container {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 350px;
                max-width: 90vw;
                height: 500px;
                max-height: 70vh;
                background: rgba(0, 0, 0, 0.98);
                border: 3px solid var(--red-primary);
                border-radius: 20px;
                box-shadow: 
                    0 15px 35px rgba(255, 0, 0, 0.5),
                    0 0 40px rgba(255, 51, 51, 0.3) inset;
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                backdrop-filter: blur(10px);
                font-family: 'Montserrat', sans-serif;
            }
            
            /* Header Tecnológico */
            #preadolescentes-chatbot-header {
                background: linear-gradient(135deg, var(--gray-primary), var(--gray-dark), var(--black));
                color: var(--white);
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Orbitron', sans-serif;
                font-size: 1.4rem;
                font-weight: 700;
                text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
                border-bottom: 2px solid var(--red-primary);
            }
            
            #preadolescentes-close-chatbot {
                background: transparent;
                border: none;
                color: var(--red-light);
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
            
            #preadolescentes-close-chatbot:hover {
                background: rgba(255, 0, 0, 0.2);
                transform: rotate(90deg);
                color: var(--red-primary);
            }
            
            /* Mensajes - RESPONSIVE */
            #preadolescentes-chatbot-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;
                background: linear-gradient(rgba(51, 51, 51, 0.05), rgba(34, 34, 34, 0.03));
            }
            
            .preadolescentes-bot-message {
                background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(204, 0, 0, 0.08));
                border: 1px solid rgba(255, 51, 51, 0.3);
                border-radius: 15px 15px 15px 5px;
                padding: 15px;
                color: var(--silver);
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-start;
                position: relative;
                box-shadow: 0 3px 10px rgba(255, 0, 0, 0.2);
                word-wrap: break-word;
                overflow-wrap: break-word;
                white-space: pre-line;
                min-width: 50px;
            }
            
            .preadolescentes-bot-message::before {
                content: '🎯';
                position: absolute;
                left: -10px;
                top: -10px;
                background: var(--red-primary);
                color: var(--white);
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            }
            
            .preadolescentes-user-message {
                background: linear-gradient(135deg, rgba(51, 51, 51, 0.2), rgba(34, 34, 34, 0.15));
                border: 1px solid rgba(255, 51, 51, 0.4);
                border-radius: 15px 15px 5px 15px;
                padding: 15px;
                color: var(--white);
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-end;
                text-align: right;
                box-shadow: 0 3px 10px rgba(255, 0, 0, 0.2);
                word-wrap: break-word;
                overflow-wrap: break-word;
                white-space: pre-line;
            }
            
            /* Input Tecnológico */
            #preadolescentes-chatbot-input {
                padding: 15px;
                display: flex;
                gap: 10px;
                border-top: 2px solid rgba(255, 0, 0, 0.4);
                background: rgba(0, 0, 0, 0.9);
            }
            
            #preadolescentes-user-input {
                flex: 1;
                padding: 12px 15px;
                border: 2px solid var(--red-primary);
                border-radius: 25px;
                background: rgba(0, 0, 0, 0.8);
                color: var(--silver);
                font-family: 'Montserrat', sans-serif;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            
            #preadolescentes-user-input:focus {
                outline: none;
                box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
                background: rgba(0, 0, 0, 0.9);
                border-color: var(--red-neon);
            }
            
            #preadolescentes-send-btn {
                padding: 12px 25px;
                background: linear-gradient(135deg, var(--red-primary), var(--red-secondary));
                color: var(--white);
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Orbitron', sans-serif;
                font-weight: 700;
                font-size: 1.1rem;
                transition: all 0.3s ease;
                min-width: 60px;
                letter-spacing: 1px;
            }
            
            #preadolescentes-send-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(255, 0, 0, 0.6);
                background: linear-gradient(135deg, var(--red-secondary), var(--red-primary));
            }
            
            /* Botones rápidos tecnológicos */
            #preadolescentes-quick-questions {
                padding: 15px;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                border-top: 2px solid rgba(255, 0, 0, 0.3);
                background: rgba(0, 0, 0, 0.95);
            }
            
            .preadolescentes-quick-btn {
                padding: 10px 15px;
                background: rgba(255, 0, 0, 0.12);
                border: 1px solid rgba(255, 51, 51, 0.4);
                border-radius: 20px;
                color: var(--red-light);
                cursor: pointer;
                font-size: 0.85rem;
                transition: all 0.3s ease;
                font-family: 'Montserrat', sans-serif;
                display: flex;
                align-items: center;
                gap: 5px;
            }
            
            .preadolescentes-quick-btn:hover {
                background: rgba(255, 0, 0, 0.2);
                transform: translateY(-3px);
                box-shadow: 0 5px 10px rgba(255, 0, 0, 0.3);
                color: var(--white);
                border-color: var(--red-neon);
            }
            
            /* Botón flotante tecnológico */
            #preadolescentes-chatbot-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, var(--red-primary), var(--red-secondary));
                color: var(--white);
                border: 3px solid var(--red-neon);
                border-radius: 50%;
                width: 70px;
                height: 70px;
                font-size: 2rem;
                cursor: pointer;
                box-shadow: 
                    0 10px 25px rgba(255, 0, 0, 0.6),
                    0 0 30px rgba(255, 51, 51, 0.4);
                z-index: 9999;
                transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Orbitron', sans-serif;
                font-weight: 700;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                animation: pulseRedButton 2s infinite;
            }
            
            @keyframes pulseRedButton {
                0%, 100% {
                    box-shadow: 
                        0 10px 25px rgba(255, 0, 0, 0.6),
                        0 0 30px rgba(255, 51, 51, 0.4);
                }
                50% {
                    box-shadow: 
                        0 10px 25px rgba(255, 0, 0, 0.8),
                        0 0 40px rgba(255, 51, 51, 0.6);
                }
            }
            
            #preadolescentes-chatbot-toggle:hover {
                transform: scale(1.15) rotate(15deg);
                box-shadow: 
                    0 15px 35px rgba(255, 0, 0, 0.8),
                    0 0 50px rgba(255, 51, 51, 0.6);
                background: linear-gradient(135deg, var(--red-secondary), var(--red-primary));
            }
            
            #preadolescentes-chatbot-toggle:active {
                transform: scale(0.95);
            }
            
            /* Scrollbar personalizada */
            #preadolescentes-chatbot-messages::-webkit-scrollbar {
                width: 8px;
            }
            
            #preadolescentes-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 0, 0, 0.1);
                border-radius: 10px;
            }
            
            #preadolescentes-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(var(--red-primary), var(--red-secondary));
                border-radius: 10px;
            }
            
            #preadolescentes-chatbot-messages::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(var(--red-secondary), var(--red-primary));
            }
            
            /* Responsive para móviles */
            @media (max-width: 768px) {
                #preadolescentes-chatbot-container {
                    width: 95vw;
                    right: 2.5vw;
                    bottom: 80px;
                    height: 60vh;
                    max-height: 70vh;
                    border-width: 2px;
                }
                
                #preadolescentes-chatbot-toggle {
                    width: 60px;
                    height: 60px;
                    font-size: 1.8rem;
                    bottom: 15px;
                    right: 15px;
                }
                
                #preadolescentes-chatbot-header {
                    padding: 12px 15px;
                    font-size: 1.2rem;
                }
                
                .preadolescentes-bot-message,
                .preadolescentes-user-message {
                    max-width: 90%;
                    font-size: 0.9rem;
                    padding: 12px;
                    margin-bottom: 10px;
                }
                
                #preadolescentes-quick-questions {
                    padding: 10px;
                }
                
                .preadolescentes-quick-btn {
                    font-size: 0.75rem;
                    padding: 8px 12px;
                    flex: 1 0 calc(50% - 5px);
                    min-height: 40px;
                }
                
                #preadolescentes-chatbot-input {
                    padding: 10px;
                }
                
                #preadolescentes-user-input {
                    padding: 10px 15px;
                    font-size: 1rem;
                }
                
                #preadolescentes-send-btn {
                    padding: 10px 20px;
                    font-size: 1rem;
                }
            }
            
            /* Para móviles muy pequeños */
            @media (max-width: 400px) {
                #preadolescentes-chatbot-container {
                    height: 65vh;
                }
                
                .preadolescentes-quick-btn {
                    font-size: 0.7rem;
                    padding: 6px 8px;
                }
                
                .preadolescentes-bot-message,
                .preadolescentes-user-message {
                    font-size: 0.85rem;
                    padding: 10px;
                }
            }
            
            /* Enlaces dentro del chat */
            .preadolescentes-bot-message a,
            .preadolescentes-user-message a {
                color: var(--red-light);
                text-decoration: underline;
                word-break: break-all;
            }
            
            .preadolescentes-bot-message a:hover,
            .preadolescentes-user-message a:hover {
                color: var(--white);
                text-decoration: none;
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Configurar eventos del chatbot
function setupPreadolescentesChatbotEvents() {
    const toggleBtn = document.getElementById('preadolescentes-chatbot-toggle');
    const closeBtn = document.getElementById('preadolescentes-close-chatbot');
    const sendBtn = document.getElementById('preadolescentes-send-btn');
    const userInput = document.getElementById('preadolescentes-user-input');
    const quickBtns = document.querySelectorAll('.preadolescentes-quick-btn');
    const chatbotContainer = document.getElementById('preadolescentes-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) {
        console.error('❌ No se encontraron elementos del chatbot de Pre-Adolescentes');
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
            sendPreadolescentesChatbotMessage();
        }
    });
    
    // Enviar con botón
    sendBtn.addEventListener('click', sendPreadolescentesChatbotMessage);
    
    // Botones rápidos
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendPreadolescentesChatbotMessage();
        });
    });
    
    // Cerrar al hacer clic fuera
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
function setupPreadolescentesPageButtons() {
    console.log('🔍 Configurando botones de la página de Pre-Adolescentes...');
    
    // Botón "¡QUIERO IR!" (por ID)
    const joinButton = document.getElementById('join-button-preadolescentes');
    if (joinButton) {
        joinButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🎯 Botón "¡QUIERO IR!" clickeado');
            openPreadolescentesChatbotWithCustomMessage(
                "🎯 **¡QUÉ BIEN QUE QUIERAS UNIRTE!**\n\nVoy a ayudarte con toda la información para ser parte de Pre-Adolescentes:",
                'unirse'
            );
        });
        
        // Agregar indicador visual
        joinButton.style.cursor = 'pointer';
        joinButton.title = "Habla con nuestro asistente para unirte a Pre-Adolescentes";
    }
    
    // Botón "INFO PARA PADRES" (por ID)
    const contactButton = document.getElementById('contact-chatbot-preadolescentes');
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🎯 Botón "INFO PARA PADRES" clickeado');
            openPreadolescentesChatbotWithCustomMessage(
                "👨‍👩‍👧‍👦 **¡HOLA, PAPÁ/MAMÁ!**\n\nEsta etapa de 10 a 13 años es especial. Estoy aquí para responder todas tus preguntas sobre nuestro ministerio de Pre-Adolescentes:",
                'padres'
            );
        });
        
        // Agregar indicador visual
        contactButton.style.cursor = 'pointer';
        contactButton.title = "Información específica para padres de pre-adolescentes";
    }
    
    console.log('✅ Botones de Pre-Adolescentes configurados correctamente');
}

// Función para abrir chatbot con mensaje personalizado
function openPreadolescentesChatbotWithCustomMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('preadolescentes-chatbot-container');
    const userInput = document.getElementById('preadolescentes-user-input');
    
    if (!chatbotContainer) {
        console.error('❌ No se encontró el chatbot container de Pre-Adolescentes');
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
    const messagesContainer = document.getElementById('preadolescentes-chatbot-messages');
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
        addPreadolescentesChatbotMessage(message, 'bot');
        
        // Agregar información adicional según el tipo
        setTimeout(() => {
            if (type === 'unirse') {
                addPreadolescentesChatbotMessage(
                    "**🎯 PROCESO PARA UNIRSE:**\n\n" +
                    "1️ **VENÍ** a nuestra reunión:\n   - Domingo 18:00 HS\n   - Lugar: AV. TILLARD 1318\n" +
                    "2️ **CONOCÉ** a nuestros líderes:\n   - Prof. Yohana y Prof. Juan\n" +
                    "3️ **PARTICIPÁ** en actividades de bienvenida\n" +
                    "4️ **INTEGRATE** a grupos según tu edad\n" +
                    "5️ **ANOTATE** en el campamento (opcional)\n\n" +
                    "¿Te gustaría saber más sobre algún paso en particular?",
                    'bot'
                );
            } else if (type === 'padres') {
                addPreadolescentesChatbotMessage(
                    "**👨‍👩‍👧‍👦 INFORMACIÓN IMPORTANTE PARA PADRES:**\n\n" +
                    "• **👨‍🏫 LÍDERES:** Prof. Yohana y Prof. Juan\n" +
                    "• **📞 CONTACTO:** +54 351-350-0778\n" +
                    "• **📍 UBICACIÓN:** AV. TILLARD 1318\n" +
                    "• **🛡️ SEGURIDAD:** Protocolos específicos para 10-13 años\n" +
                    "• **🏕️ CAMPAMENTO:** Pre EXPLOSIVOS - Enero 2026\n\n" +
                    "¿Qué información necesitas específicamente?",
                    'bot'
                );
            } else if (type === 'lideres') {
                addPreadolescentesChatbotMessage(
                    "**👨‍🏫 NUESTRO EQUIPO DE LÍDERES:**\n\n" +
                    "• **LÍDERES PRINCIPALES:**\n   - Prof. Yohana y Prof. Juan\n" +
                    "• **DISPONIBILIDAD:**\n   - Para consultas de padres\n   - Para acompañar a pre-adolescentes\n" +
                    "• **CONTACTO:** +54 351-350-0778\n\n" +
                    "¿Te gustaría conocer más sobre algún líder en particular?",
                    'bot'
                );
            } else if (type === 'campamento') {
                addPreadolescentesChatbotMessage(
                    "**🏕️ CAMPAMENTO PRE EXPLOSIVOS 2026** 💣\n\n" +
                    "• **📆 FECHAS:** 16, 17 y 18 de enero\n" +
                    "• **🏨 LUGAR:** Hotel Gran Giardino\n" +
                    "• **👦👧 EDADES:** 10 a 13 años\n" +
                    "• **📞 CONSULTAS:** +54 351-350-0778\n" +
                    "• **🎯 ACTIVIDADES:** Juegos, enseñanzas, recreación\n\n" +
                    "¡Una experiencia inolvidable para pre-adolescentes!",
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
function sendPreadolescentesChatbotMessage() {
    const userInput = document.getElementById('preadolescentes-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Mostrar mensaje del usuario
    addPreadolescentesChatbotMessage(message, 'user');
    
    // Procesar y obtener respuesta
    setTimeout(() => {
        const response = getPreadolescentesChatbotResponse(message);
        addPreadolescentesChatbotMessage(response, 'bot');
    }, 600);
    
    // Limpiar input
    userInput.value = '';
}

// Agregar mensaje al chat
function addPreadolescentesChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('preadolescentes-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'preadolescentes-bot-message' : 'preadolescentes-user-message';
    
    // Convertir URLs en enlaces clickeables
    let processedText = text;
    
    // Detectar y convertir enlaces
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    processedText = processedText.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" style="color: #FF3333; text-decoration: underline; word-break: break-all;">${url}</a>`;
    });
    
    // Detectar y convertir emails
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
    processedText = processedText.replace(emailRegex, function(email) {
        return `<a href="mailto:${email}" style="color: #FF3333; text-decoration: underline;">${email}</a>`;
    });
    
    // Detectar y convertir teléfonos
    const phoneRegex = /(\+?\d[\d\s\-\(\)]{8,}\d)/g;
    processedText = processedText.replace(phoneRegex, function(phone) {
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        return `<a href="tel:${cleanPhone}" style="color: #FF3333; text-decoration: underline;">${phone}</a>`;
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

// Obtener respuesta del chatbot
function getPreadolescentesChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar en base de conocimiento
    for (const [keyword, responses] of Object.entries(preadolescentesChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            const response = responses[Math.floor(Math.random() * responses.length)];
            return response;
        }
    }
    
    // Respuestas específicas adicionales
    if (/(yohana|profesor|profesora|prof|líder|lider|lideres)/i.test(lowerMessage)) {
        return "👨‍🏫 **NUESTRO EQUIPO DE LÍDERES:**\n\n" +
               "• **Prof. Yohana:** Especialista en desarrollo de pre-adolescentes, con años de experiencia trabajando con jóvenes de 10 a 13 años.\n" +
               "• **Prof. Juan:** Experto en actividades recreativas y enseñanza cristiana para esta edad.\n" +
               "• **Formación:** Todos nuestros líderes están capacitados en psicología adolescente y educación cristiana.\n" +
               "• **Certificación:** Certificados en primeros auxilios y protocolos de seguridad.\n" +
               "• **Contacto directo:** +54 351-350-0778\n" +
               "• **Redes sociales:** @preadolescentes.mp\n\n" +
               "¿Te gustaría saber más sobre la formación de nuestros líderes?";
    }
    
    if (/(campamento|explosivos|gran giardino|enero|vacaciones)/i.test(lowerMessage)) {
        return "🏕️ **CAMPAMENTO PRE EXPLOSIVOS 2026** 💣\n\n" +
               "**Fechas:** 16, 17 y 18 de enero 2026\n\n" +
               "**Información completa:**\n" +
               "• **Lugar:** Hotel Gran Giardino\n" +
               "• **Edades:** 10 a 13 años exclusivamente\n" +
               "• **Líderes acompañantes:** Prof. Yohana y todo el equipo de líderes\n" +
               "• **Inscripciones:** Abiertas - Cupos limitados\n" +
               "• **Consultas:** +54 351-350-0778\n" +
               "• **Actividades:**\n   - Enseñanzas bíblicas relevantes\n   - Juegos y competencias\n   - Recreación dirigida\n   - Fogatas y noche de talentos\n   - Talleres especiales";
    }
    
    if (/(teléfono|telefono|celular|llamar|número|numero|whatsapp|wsap|contacto)/i.test(lowerMessage)) {
        return "📞 **CONTACTO PARA PADRES/PRE-ADOLESCENTES:**\n\n" +
               "• **Teléfono principal:** +54 351-350-0778\n" +
               "• **Líderes:** Prof. Yohana y Prof. Juan - Disponibles para consultas\n" +
               "• **Instagram:** @preadolescentes.mp\n" +
               "• **Ubicación:** AV. TILLARD 1318\n" +
               "• **Horarios de contacto:** Lunes a sábado 9:00 a 20:00 HS";
    }
    
    if (/(hola|buenos|buenas|saludos|hello|hey)/i.test(lowerMessage)) {
        const greetings = [
            "🎯 ¡Hola! ¿Eres pre-adolescente o padre/madre? ¿En qué puedo ayudarte hoy?",
            "👋 ¡Buenas! Bienvenido al asistente de Pre-Adolescentes. ¿Tienes preguntas sobre nuestra comunidad para jóvenes de 10 a 13 años?",
            "😊 ¡Hola! Soy tu asistente para Pre-Adolescentes. ¿Qué información necesitas sobre nuestras actividades o líderes?"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (/(gracias|thank|agradecido)/i.test(lowerMessage)) {
        return "🎯 **¡DE NADA!**\n\n" +
               "Es un privilegio acompañar a los pre-adolescentes en esta etapa especial de descubrimiento y crecimiento.\n\n" +
               "¿Hay algo más en lo que pueda ayudarte? ¿Quizás conocer más sobre nuestros líderes?";
    }
    
    if (/(quiero ir|quiero unirme|me quiero unir|participar|integrarme)/i.test(lowerMessage)) {
        return "🎯 **¡EXCELENTE DECISIÓN!**\n\n" +
               "**Para unirte a Pre-Adolescentes:**\n" +
               "1. Ven este domingo 18:00 HS\n" +
               "2. Ubicación: AV. TILLARD 1318\n" +
               "3. Pregunta por los líderes Prof. Yohana o Prof. Juan\n" +
               "4. Participa en las actividades\n" +
               "5. Si quieres, inscríbete en el campamento\n\n" +
               "**No necesitas:**\n" +
               "• Pago de inscripción\n" +
               "• Documentación especial\n" +
               "• Experiencia previa\n\n" +
               "📞 **Consultas con líderes:** +54 351-350-0778";
    }
    
    if (/(quienes son|quiénes son|equipo|profesores|maestros|quien dirige)/i.test(lowerMessage)) {
        return "👨‍🏫 **NUESTRO EQUIPO DE LÍDERES:**\n\n" +
               "• **LÍDERES PRINCIPALES:**\n   - Prof. Yohana\n   - Prof. Juan\n" +
               "• **EXPERIENCIA:**\n   - Más de 5 años trabajando con pre-adolescentes\n   - Formación en psicología adolescente\n   - Capacitación constante\n" +
               "• **CERTIFICACIONES:**\n   - Primeros auxilios\n   - Protocolos de seguridad\n   - Manejo de grupos juveniles\n" +
               "• **CONTACTO:** +54 351-350-0778\n\n" +
               "Nuestros líderes están siempre disponibles para hablar con padres y pre-adolescentes.";
    }
    
    if (/(aburrido|divertido|entretenido|hacemos|actividades)/i.test(lowerMessage)) {
        return "🎮 **¿QUÉ HACEMOS EN PRE-ADOLESCENTES?**\n\n" +
               "• **Enseñanzas:** Temas relevantes para tu edad\n" +
               "• **Juegos:** Competencias y retos divertidos\n" +
               "• **Talleres:** Arte, música, expresión\n" +
               "• **Deportes:** Fútbol, básquet, actividades\n" +
               "• **Grupos:** Discusiones con otros de tu edad\n" +
               "• **Eventos:** Noches especiales mensuales\n" +
               "• **Campamentos:** Experiencias inolvidables\n\n" +
               "¡Nunca te aburrirás con nosotros! Todo dirigido por nuestros líderes capacitados.";
    }
    
    if (/(amigos|conocer gente|solo|solitario)/i.test(lowerMessage)) {
        return "🤝 **¡HAZ AMIGOS REALES AQUÍ!**\n\n" +
               "Muchos pre-adolescentes vienen solos y terminan haciendo amigos para toda la vida.\n\n" +
               "**Por qué funciona:**\n" +
               "• Grupos pequeños por edad\n" +
               "• Actividades que fomentan la amistad\n" +
               "• Líderes que facilitan la integración\n" +
               "• Ambiente seguro y de confianza\n\n" +
               "¡Te garantizamos que no te sentirás solo! Nuestros líderes están especialmente entrenados para ayudar en la integración.";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "🎯 ¡Vaya, no estoy seguro de entender tu pregunta! ¿Podrías reformularla o ser más específico?",
        "🎮 Puedo ayudarte con información sobre horarios, líderes, campamento, actividades o seguridad. ¿Qué necesitas saber?",
        "🤔 No capté bien tu pregunta. ¿Podrías ser más específico?\n\nEjemplos:\n• \"¿Quiénes son los líderes?\"\n• \"¿A qué hora es la reunión?\"\n• \"¿Cómo me inscribo en el campamento?\"",
        "💡 Para consultas específicas sobre líderes, puedes contactar directamente:\n📞 +54 351-350-0778\n👨‍🏫 Pregunta por Prof. Yohana o Prof. Juan"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

// Esperar a que cargue completamente la página
window.addEventListener('load', function() {
    // Inicializar después de 1 segundo para asegurar que todo esté listo
    setTimeout(initializePreadolescentesChatbot, 1000);
});

// También inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar después de 2 segundos
    setTimeout(initializePreadolescentesChatbot, 2000);
});

// Funciones públicas para usar desde otros scripts
window.openPreadolescentesChatbot = function(type = 'general') {
    if (type === 'padres') {
        openPreadolescentesChatbotWithCustomMessage(
            "👨‍👩‍👧‍👦 ¡Hola, papá/mamá! ¿En qué puedo ayudarte hoy con información sobre Pre-Adolescentes?",
            'padres'
        );
    } else if (type === 'unirse') {
        openPreadolescentesChatbotWithCustomMessage(
            "🎯 ¡Qué bien que quieras unirte a Pre-Adolescentes!",
            'unirse'
        );
    } else if (type === 'lideres') {
        openPreadolescentesChatbotWithCustomMessage(
            "👨‍🏫 ¡Hola! ¿Quieres conocer a nuestros líderes de Pre-Adolescentes?",
            'lideres'
        );
    } else if (type === 'campamento') {
        openPreadolescentesChatbotWithCustomMessage(
            "🏕️ ¿Quieres información sobre nuestro campamento Pre EXPLOSIVOS?",
            'campamento'
        );
    } else {
        openPreadolescentesChatbotWithCustomMessage(
            "🎯 ¡Hola! Soy tu asistente de Pre-Adolescentes. ¿En qué puedo ayudarte?",
            'general'
        );
    }
};

window.closePreadolescentesChatbot = function() {
    const chatbotContainer = document.getElementById('preadolescentes-chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
    }
};

console.log('🎯 preadolescentes-chatbot.js cargado - Esperando inicialización');