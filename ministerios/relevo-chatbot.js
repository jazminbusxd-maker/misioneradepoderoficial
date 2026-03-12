// ======================================================
// CHATBOT EXCLUSIVO PARA EL RELEVO - VERSIÓN MÓVIL CORREGIDA
// Ministerio de Niños - Misionera de Poder
// ======================================================

// Base de conocimiento específica para El Relevo (padres)
const relevoChatbotKnowledge = {
    "horarios": [
        "👶 **Horarios de El Relevo:**\n• **Domingos:** 9:00 AM y 18:00 PM - Escuelita Bíblica\n• **Miércoles:** 18:00 HS - Escuelita Bíblica\n• **Vacaciones:** Campamentos especiales programados"
    ],
    
    "contacto": [
        "📱 **Contacto para padres:**\n👩‍🏫 **Líder:** Natalia Negreti\n📍 **Ubicación:** AUDITORIO MAYOR - AV. TILLARD 1318 B° COFICO\n📞 **Teléfono para consultas:** +54 351 318-3910"
    ],
    
    "campamento": [
        "🏕️ **CAMPAMENTO 2026 'SUMERGIDOS'** 🫧\n📖 **Versículo:** Salmos 107:24\n\n**Información para padres:**\n• **Edades:** 5 a 9 años\n• **Inscripciones:** ¡ABIERTAS!\n• **Consultas:** Llamar al +54 351 318-3910\n• **Actividades:** Juegos, fogata, canciones y más"
    ],
    
    "inscribir": [
        "🎊 **¡Excelente que quieras inscribir a tu hijo!**\n\n**Pasos para inscribir:**\n1. **Asiste** a cualquiera de nuestras reuniones\n2. **Habla** con nuestra líder Natalia Negreti\n3. **Llena** la ficha de inscripción\n4. **Informa** sobre alergias o necesidades especiales\n\n📞 **WhatsApp para consultas:** +54 351 318-3910"
    ],
    
    "edades": [
        "👧👦 **Grupos por edades:**\n• **3-4 años:** Grupo de Maternal\n• **5-6 años:** Grupo de Principiantes\n• **7-8 años:** Grupo de Intermedios\n• **9-12 años:** Grupo de Avanzados\n\nCada grupo tiene actividades apropiadas para su edad."
    ],

    "actividades": [
        "🎨 **Actividades para niños:**\n\n• **📖 Enseñanza bíblica** por edades\n• **🎵 Canciones** con movimientos\n• **🎭 Teatro bíblico**\n• **🎨 Manualidades** creativas\n• **🏆 Juegos** educativos\n• **📚 Historias** interactivas"
    ],
    
    "seguridad": [
        "🛡️ **Medidas de seguridad:**\n\n• **Maestras capacitadas** en educación infantil\n• **Ambiente seguro** y supervisado\n• **Control de ingreso y salida**\n• **Protocolos** para emergencias\n• **Comunicación directa** con padres\n• **Espacio adecuado** para cada edad"
    ],
    
    "maestras": [
        "👩‍🏫 **Nuestro equipo:**\n\n• **Líder:** Natalia Negreti\n• **Maestras capacitadas** en educación cristiana\n• **Voluntarias** con vocación de servicio\n• **Todas certificadas** en primeros auxilios\n• **Amor y paciencia** para cada niño"
    ],
    
    "lider": [
        "👩‍💼 **Nuestra líder:**\n\n**Natalia Negreti**\n📞 **Contacto:** +54 351 318-3910\n💼 **Experiencia:** Más de 5 años en ministerio infantil\n❤️ **Pasión:** Ver a los niños crecer en el amor de Dios\n👶 **Especialidad:** Educación bíblica infantil"
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let relevoChatbotInitialized = false;
let isMobile = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

// Inicializar el chatbot cuando se cargue la página
function initializeRelevoChatbot() {
    if (relevoChatbotInitialized) return;
    
    console.log('👶 Chatbot El Relevo - Inicializando para móvil...');
    
    // Detectar si es móvil
    isMobile = window.innerWidth <= 768;
    
    // Crear elementos del DOM
    createRelevoChatbotElements();
    
    // Configurar eventos del chatbot
    setupRelevoChatbotEvents();
    
    // Configurar los botones de la página
    setupRelevoPageButtons();
    
    relevoChatbotInitialized = true;
    console.log('✅ Chatbot El Relevo (móvil) listo');
}

// Crear elementos HTML del chatbot
function createRelevoChatbotElements() {
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="relevo-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="relevo-chatbot-header">
                <h4>👶 El Relevo - Asistente</h4>
                <button id="relevo-close-chatbot" title="Cerrar">&times;</button>
            </div>
            
            <!-- Mensajes -->
            <div id="relevo-chatbot-messages">
                <div class="relevo-bot-message">¡Hola, papá/mamá! 👶 Soy tu asistente de El Relevo.</div>
                <div class="relevo-bot-message">Estoy aquí para ayudarte con información sobre nuestro ministerio de niños.</div>
                <div class="relevo-bot-message">Puedes preguntarme sobre: horarios, inscripciones, campamentos, seguridad, edades, actividades, etc.</div>
            </div>
            
            <!-- Input -->
            <div id="relevo-chatbot-input">
                <input type="text" id="relevo-user-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
                <button id="relevo-send-btn" title="Enviar">➤</button>
            </div>
            
            <!-- Botones rápidos -->
            <div id="relevo-quick-questions">
                <button class="relevo-quick-btn" data-question="¿Cuáles son los horarios?">🕒 Horarios</button>
                <button class="relevo-quick-btn" data-question="¿Cómo inscribo a mi hijo?">📝 Inscribir</button>
                <button class="relevo-quick-btn" data-question="¿Qué edades aceptan?">👶 Edades</button>
                <button class="relevo-quick-btn" data-question="¿Quién es la líder?">👩‍💼 Líder</button>
            </div>
        </div>

        <!-- Botón flotante para abrir chatbot - SIEMPRE VISIBLE EN MÓVIL -->
        <button id="relevo-chatbot-toggle" title="Abrir chat de El Relevo">👶</button>
    `;
    
    // Insertar en el body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Aplicar estilos
    addRelevoChatbotStyles();
}

// Añadir estilos CSS para el chatbot - ESPECIAL PARA MÓVIL
function addRelevoChatbotStyles() {
    const styles = `
        <style>
            /* VARIABLES EL RELEVO */
            :root {
                --rosa-primario: #FF69B4;
                --rosa-secundario: #FFB6C1;
                --rosa-claro: #FFE4E9;
                --salmon: #FFA07A;
                --coral: #FF7F50;
                --amarillo: #FFD700;
                --negro: #000000;
                --blanco: #FFFFFF;
            }
            
            /* Chatbot Container - ESPECIAL PARA MÓVIL */
            #relevo-chatbot-container {
                position: fixed;
                bottom: 80px; /* Justo arriba del botón flotante */
                right: 2.5vw;
                left: 2.5vw;
                width: 95vw;
                height: 60vh;
                max-height: 60vh;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0.95));
                border: 3px solid var(--rosa-primario);
                border-radius: 20px;
                box-shadow: 
                    0 15px 35px rgba(255, 105, 180, 0.5),
                    0 0 50px rgba(255, 182, 193, 0.3) inset;
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                backdrop-filter: blur(10px);
                font-family: 'Nunito', sans-serif;
                animation: slideUpChatbot 0.3s ease-out;
            }
            
            @keyframes slideUpChatbot {
                from {
                    opacity: 0;
                    transform: translateY(30px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            
            /* Header */
            #relevo-chatbot-header {
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon));
                color: var(--blanco);
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Fredoka One', cursive;
                font-size: 1.4rem;
                font-weight: 700;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                border-bottom: 2px solid var(--amarillo);
            }
            
            #relevo-close-chatbot {
                background: transparent;
                border: none;
                color: var(--blanco);
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
            
            #relevo-close-chatbot:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: rotate(90deg);
            }
            
            /* Mensajes - OPTIMIZADO PARA MÓVIL */
            #relevo-chatbot-messages {
                flex: 1;
                padding: 15px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: linear-gradient(rgba(255, 105, 180, 0.05), rgba(255, 182, 193, 0.03));
            }
            
            .relevo-bot-message {
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(255, 182, 193, 0.1));
                border: 1px solid rgba(255, 182, 193, 0.4);
                border-radius: 15px 15px 15px 5px;
                padding: 12px 15px;
                color: var(--blanco);
                font-size: 0.9rem;
                line-height: 1.4;
                max-width: 85%;
                align-self: flex-start;
                position: relative;
                box-shadow: 0 3px 10px rgba(255, 105, 180, 0.2);
                word-wrap: break-word;
                overflow-wrap: break-word;
                white-space: pre-line;
            }
            
            .relevo-bot-message::before {
                content: '👶';
                position: absolute;
                left: -10px;
                top: -10px;
                background: var(--rosa-primario);
                color: var(--blanco);
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                border: 2px solid var(--amarillo);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            }
            
            .relevo-user-message {
                background: linear-gradient(135deg, rgba(255, 182, 193, 0.2), rgba(255, 160, 122, 0.25));
                border: 1px solid rgba(255, 182, 193, 0.4);
                border-radius: 15px 15px 5px 15px;
                padding: 12px 15px;
                color: var(--blanco);
                font-size: 0.9rem;
                line-height: 1.4;
                max-width: 85%;
                align-self: flex-end;
                text-align: right;
                box-shadow: 0 3px 10px rgba(255, 182, 193, 0.2);
                word-wrap: break-word;
                overflow-wrap: break-word;
                white-space: pre-line;
            }
            
            /* Input - OPTIMIZADO PARA TECLADO MÓVIL */
            #relevo-chatbot-input {
                padding: 12px 15px;
                display: flex;
                gap: 10px;
                border-top: 2px solid rgba(255, 182, 193, 0.3);
                background: rgba(255, 105, 180, 0.1);
            }
            
            #relevo-user-input {
                flex: 1;
                padding: 12px 15px;
                border: 2px solid var(--rosa-secundario);
                border-radius: 25px;
                background: rgba(0, 0, 0, 0.3);
                color: var(--blanco);
                font-family: 'Nunito', sans-serif;
                font-size: 16px; /* Para prevenir zoom en iOS */
                transition: all 0.3s ease;
            }
            
            #relevo-user-input:focus {
                outline: none;
                border-color: var(--amarillo);
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
                background: rgba(0, 0, 0, 0.4);
            }
            
            #relevo-send-btn {
                padding: 12px 20px;
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon));
                color: var(--blanco);
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Fredoka One', cursive;
                font-weight: 400;
                font-size: 1rem;
                transition: all 0.3s ease;
                min-width: 50px;
            }
            
            #relevo-send-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(255, 105, 180, 0.6);
                background: linear-gradient(135deg, var(--salmon), var(--rosa-primario));
            }
            
            /* Botones rápidos - OPTIMIZADOS PARA TACTO */
            #relevo-quick-questions {
                padding: 12px 15px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                border-top: 2px solid rgba(255, 182, 193, 0.2);
                background: rgba(255, 105, 180, 0.15);
            }
            
            .relevo-quick-btn {
                padding: 10px 12px;
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(255, 182, 193, 0.4));
                border: 1px solid rgba(255, 182, 193, 0.4);
                border-radius: 20px;
                color: var(--amarillo);
                cursor: pointer;
                font-size: 0.8rem;
                transition: all 0.3s ease;
                font-family: 'Nunito', sans-serif;
                display: flex;
                align-items: center;
                gap: 5px;
                min-height: 44px; /* Tamaño mínimo para tacto */
            }
            
            .relevo-quick-btn:hover {
                background: linear-gradient(135deg, rgba(255, 182, 193, 0.5), rgba(255, 105, 180, 0.6));
                transform: translateY(-2px);
                box-shadow: 0 5px 10px rgba(255, 182, 193, 0.3);
                color: var(--blanco);
            }
            
            /* Botón flotante - VISIBLE SIEMPRE EN MÓVIL */
            #relevo-chatbot-toggle {
                position: fixed;
                bottom: 15px;
                right: 15px;
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon));
                color: var(--blanco);
                border: 3px solid var(--amarillo);
                border-radius: 50%;
                width: 60px;
                height: 60px;
                font-size: 1.8rem;
                cursor: pointer;
                box-shadow: 
                    0 10px 25px rgba(255, 105, 180, 0.6),
                    0 0 30px rgba(255, 182, 193, 0.4);
                z-index: 9999;
                transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                display: flex !important;
                align-items: center;
                justify-content: center;
                font-family: 'Fredoka One', cursive;
                font-weight: 400;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                animation: pulseRelevoMobile 2s infinite;
                /* Asegurar visibilidad */
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            @keyframes pulseRelevoMobile {
                0%, 100% {
                    transform: scale(1);
                    box-shadow: 
                        0 10px 25px rgba(255, 105, 180, 0.6),
                        0 0 30px rgba(255, 182, 193, 0.4);
                }
                50% {
                    transform: scale(1.05);
                    box-shadow: 
                        0 10px 25px rgba(255, 105, 180, 0.8),
                        0 0 40px rgba(255, 182, 193, 0.6);
                }
            }
            
            #relevo-chatbot-toggle:hover {
                transform: scale(1.1) rotate(15deg);
                box-shadow: 
                    0 15px 35px rgba(255, 105, 180, 0.8),
                    0 0 40px rgba(255, 182, 193, 0.6);
            }
            
            #relevo-chatbot-toggle:active {
                transform: scale(0.95);
            }
            
            /* Scrollbar personalizada */
            #relevo-chatbot-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 105, 180, 0.1);
                border-radius: 10px;
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(var(--rosa-primario), var(--rosa-secundario));
                border-radius: 10px;
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(var(--rosa-secundario), var(--rosa-primario));
            }
            
            /* Enlaces dentro del chat */
            .relevo-bot-message a,
            .relevo-user-message a {
                color: var(--amarillo);
                text-decoration: underline;
                word-break: break-all;
            }
            
            .relevo-bot-message a:hover,
            .relevo-user-message a:hover {
                color: var(--blanco);
                text-decoration: none;
            }
            
            /* Responsive para desktop */
            @media (min-width: 769px) {
                #relevo-chatbot-container {
                    width: 350px;
                    height: 500px;
                    max-height: 70vh;
                    bottom: 90px;
                    right: 20px;
                    left: auto;
                }
                
                #relevo-chatbot-toggle {
                    width: 70px;
                    height: 70px;
                    font-size: 2rem;
                    bottom: 20px;
                    right: 20px;
                }
                
                .relevo-quick-btn {
                    font-size: 0.85rem;
                    padding: 10px 15px;
                }
                
                .relevo-bot-message,
                .relevo-user-message {
                    font-size: 0.95rem;
                    line-height: 1.5;
                    padding: 15px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Configurar eventos del chatbot
function setupRelevoChatbotEvents() {
    const toggleBtn = document.getElementById('relevo-chatbot-toggle');
    const closeBtn = document.getElementById('relevo-close-chatbot');
    const sendBtn = document.getElementById('relevo-send-btn');
    const userInput = document.getElementById('relevo-user-input');
    const quickBtns = document.querySelectorAll('.relevo-quick-btn');
    const chatbotContainer = document.getElementById('relevo-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) {
        console.error('❌ No se encontraron elementos del chatbot de El Relevo');
        return;
    }
    
    // Asegurar que la burbuja sea visible en móvil
    toggleBtn.style.visibility = 'visible';
    toggleBtn.style.opacity = '1';
    toggleBtn.style.display = 'flex';
    
    // Si es móvil, ajustar posición
    if (isMobile) {
        toggleBtn.style.bottom = '15px';
        toggleBtn.style.right = '15px';
        toggleBtn.style.zIndex = '9999';
    }
    
    // Abrir chatbot con botón flotante
    toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que se cierre inmediatamente
        chatbotContainer.style.display = 'flex';
        
        // Enfocar el input después de un breve delay
        setTimeout(() => {
            if (userInput) userInput.focus();
        }, 300);
        
        // Efecto visual
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Cerrar chatbot
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        chatbotContainer.style.display = 'none';
    });
    
    // Enviar con Enter
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendRelevoChatbotMessage();
        }
    });
    
    // Enviar con botón
    sendBtn.addEventListener('click', sendRelevoChatbotMessage);
    
    // Botones rápidos
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendRelevoChatbotMessage();
        });
    });
    
    // Cerrar al hacer clic fuera (solo en móvil)
    if (isMobile) {
        document.addEventListener('click', function(e) {
            if (chatbotContainer && chatbotContainer.style.display === 'flex') {
                if (!chatbotContainer.contains(e.target) && 
                    !toggleBtn.contains(e.target)) {
                    chatbotContainer.style.display = 'none';
                }
            }
        });
        
        // Evitar que el teclado mueva el chatbot
        userInput.addEventListener('focus', function() {
            setTimeout(() => {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
            }, 100);
        });
    }
}

// Configurar los botones de la página
function setupRelevoPageButtons() {
    console.log('🔍 Configurando botones de la página de El Relevo para móvil...');
    
    // 1. Botón "¡SI, QUIERO!"
    const joinButton = document.getElementById('join-button-relevo');
    if (joinButton) {
        joinButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('📱 Botón "¡SI, QUIERO!" clickeado en móvil');
            
            // Cerrar menú móvil si está abierto
            closeMobileMenu();
            
            // Abrir chatbot
            setTimeout(() => {
                openRelevoChatbotWithCustomMessage(
                    "👶 **¡QUÉ ALEGRÍA QUE QUIERAS QUE TU HIJO SEA PARTE!**\n\nVoy a ayudarte con toda la información necesaria para inscribir a tu pequeño en El Relevo:",
                    'inscribir'
                );
            }, 300);
        });
        
        joinButton.style.cursor = 'pointer';
        joinButton.title = "Habla con nuestro asistente para inscribir a tu hijo";
    }
    
    // 2. Botón "INFORMACIÓN PARA PADRES"
    const contactButton = document.getElementById('contact-chatbot-relevo');
    if (contactButton) {
        contactButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('📱 Botón "INFORMACIÓN PARA PADRES" clickeado en móvil');
            
            // Cerrar menú móvil si está abierto
            closeMobileMenu();
            
            // Abrir chatbot
            setTimeout(() => {
                openRelevoChatbotWithCustomMessage(
                    "👨‍👩‍👧‍👦 **¡HOLA, PAPÁ/MAMÁ!**\n\nComo padres, sabemos que tienen muchas preguntas. Estoy aquí para ayudarte con toda la información que necesitas sobre nuestro ministerio de niños:",
                    'padres'
                );
            }, 300);
        });
        
        contactButton.style.cursor = 'pointer';
        contactButton.title = "Habla con nuestro asistente para información para padres";
    }
    
    console.log('✅ Botones de El Relevo configurados correctamente para móvil');
}

// Función para cerrar menú móvil
function closeMobileMenu() {
    const menuToggle = document.querySelector('.relevo-menu-toggle');
    const navMobile = document.querySelector('.relevo-nav-mobile');
    const menuOverlay = document.querySelector('.relevo-menu-overlay');
    
    if (menuToggle && navMobile && menuOverlay) {
        menuToggle.classList.remove('active');
        navMobile.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
}

// Función para abrir chatbot con mensaje personalizado
function openRelevoChatbotWithCustomMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('relevo-chatbot-container');
    const userInput = document.getElementById('relevo-user-input');
    
    if (!chatbotContainer) {
        console.error('❌ No se encontró el chatbot container de El Relevo');
        return;
    }
    
    // Asegurar posición correcta en móvil
    if (isMobile) {
        chatbotContainer.style.bottom = '80px';
        chatbotContainer.style.right = '2.5vw';
        chatbotContainer.style.left = '2.5vw';
        chatbotContainer.style.width = '95vw';
        chatbotContainer.style.height = '60vh';
        chatbotContainer.style.maxHeight = '60vh';
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
    
    // Limpiar mensajes anteriores
    const messagesContainer = document.getElementById('relevo-chatbot-messages');
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
        addRelevoChatbotMessage(message, 'bot');
        
        // Agregar información adicional según el tipo
        setTimeout(() => {
            if (type === 'inscribir') {
                addRelevoChatbotMessage(
                    "**📝 PROCESO DE INSCRIPCIÓN:**\n\n" +
                    "1️ **VISÍTANOS** en cualquiera de nuestros horarios:\n   - Domingos 9:00 AM o 18:00 PM\n   - Miércoles 18:00 HS\n" +
                    "2️ **HABLA** con nuestra líder Natalia Negreti\n" +
                    "3️ **LLENA** la ficha de inscripción\n" +
                    "4️ **INFORMA** sobre alergias o necesidades especiales\n\n" +
                    "¿Te gustaría saber más sobre algún paso en particular?",
                    'bot'
                );
            } else if (type === 'padres') {
                addRelevoChatbotMessage(
                    "**👨‍👩‍👧‍👦 INFORMACIÓN IMPORTANTE PARA PADRES:**\n\n" +
                    "• **👩‍🏫 LÍDER:** Natalia Negreti\n" +
                    "• **📞 CONTACTO:** +54 351 318-3910\n" +
                    "• **📍 UBICACIÓN:** AUDITORIO MAYOR - AV. TILLARD 1318\n" +
                    "• **🛡️ SEGURIDAD:** Protocolos estrictos de seguridad\n" +
                    "• **👶 GRUPOS:** Divididos por edades (3-12 años)\n" +
                    "• **🏕️ CAMPAMENTOS:** Actividades especiales en vacaciones\n\n" +
                    "¿Qué información necesitas específicamente?",
                    'bot'
                );
            } else if (type === 'campamento') {
                addRelevoChatbotMessage(
                    "**🏕️ CAMPAMENTO 2026 'SUMERGIDOS'**\n\n" +
                    "• **📖 VERSÍCULO:** Salmos 107:24\n" +
                    "• **👧🏻👦🏻 EDADES:** 5 a 9 años\n" +
                    "• **🗓️ INSCRIPCIONES:** ¡ABIERTAS!\n" +
                    "• **📞 CONSULTAS:** +54 351 318-3910\n" +
                    "• **🎯 ACTIVIDADES:** Juegos, fogata, canciones\n\n" +
                    "¡Una experiencia inolvidable para tus hijos!",
                    'bot'
                );
            }
        }, 1000);
    }, 300);
    
    // Enfocar el input
    if (userInput) {
        setTimeout(() => {
            userInput.focus();
            
            // En móvil, hacer scroll para mostrar el chatbot
            if (isMobile) {
                setTimeout(() => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });
                }, 500);
            }
        }, 500);
    }
}

// Enviar mensaje del usuario
function sendRelevoChatbotMessage() {
    const userInput = document.getElementById('relevo-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Mostrar mensaje del usuario
    addRelevoChatbotMessage(message, 'user');
    
    // Procesar y obtener respuesta
    setTimeout(() => {
        const response = getRelevoChatbotResponse(message);
        addRelevoChatbotMessage(response, 'bot');
    }, 600);
    
    // Limpiar input
    userInput.value = '';
    
    // En móvil, mantener el foco en el input
    if (isMobile) {
        setTimeout(() => {
            userInput.focus();
        }, 100);
    }
}

// Agregar mensaje al chat
function addRelevoChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('relevo-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'relevo-bot-message' : 'relevo-user-message';
    
    // Convertir URLs en enlaces clickeables
    let processedText = text;
    
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    processedText = processedText.replace(urlRegex, function(url) {
        return `<a href="${url}" target="_blank" style="color: #FFD700; text-decoration: underline; word-break: break-all;">${url}</a>`;
    });
    
    const phoneRegex = /(\+?\d[\d\s\-\(\)]{8,}\d)/g;
    processedText = processedText.replace(phoneRegex, function(phone) {
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        return `<a href="tel:${cleanPhone}" style="color: #FFD700; text-decoration: underline;">${phone}</a>`;
    });
    
    messageDiv.innerHTML = processedText;
    
    messagesContainer.appendChild(messageDiv);
    
    // Auto-scroll al último mensaje
    setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 50);
    
    // Efecto de aparición
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
function getRelevoChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar en base de conocimiento
    for (const [keyword, responses] of Object.entries(relevoChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            const response = responses[Math.floor(Math.random() * responses.length)];
            return response;
        }
    }
    
    // Respuestas específicas
    if (/(natalia|negreti|líder|lider)/i.test(lowerMessage)) {
        return "👩‍💼 **NATALIA NEGRETI - NUESTRA LÍDER**\n\n" +
               "• **Experiencia:** Más de 5 años en ministerio infantil\n" +
               "• **Formación:** Capacitada en educación cristiana infantil\n" +
               "• **Pasión:** Ver a los niños crecer en el amor de Dios\n" +
               "• **Contacto:** +54 351 318-3910\n" +
               "• **Disponible:** Para hablar con padres y resolver dudas";
    }
    
    if (/(campamento|sumergidos|vacaciones)/i.test(lowerMessage)) {
        return "🏕️ **CAMPAMENTO 2026 'SUMERGIDOS'** 🫧\n\n" +
               "**Salmos 107:24:** *'Ellos han visto las obras de Jehová, Y sus maravillas en las profundidades'*\n\n" +
               "**Información:**\n" +
               "• **Edades:** 5 a 9 años\n" +
               "• **Inscripciones:** ¡ABIERTAS!\n" +
               "• **Consultas:** +54 351 318-3910\n" +
               "• **Actividades:** Juegos, fogata, canciones, enseñanza\n" +
               "• **Seguridad:** Protocolos estrictos de supervisión";
    }
    
    if (/(teléfono|telefono|celular|llamar|número|numero|whatsapp|wsap|contacto)/i.test(lowerMessage)) {
        return "📞 **CONTACTO PARA PADRES:**\n\n" +
               "• **Teléfono principal:** +54 351 318-3910\n" +
               "• **Líder:** Natalia Negreti\n" +
               "• **Horarios de atención:**\n   - Domingos antes/después de las reuniones\n   - Miércoles antes/después de las reuniones\n" +
               "• **Ubicación:** AUDITORIO MAYOR - AV. TILLARD 1318";
    }
    
    if (/(hola|buenos|buenas|saludos|hello)/i.test(lowerMessage)) {
        const greetings = [
            "👶 ¡Hola, papá/mamá! ¿En qué puedo ayudarte hoy con información sobre El Relevo?",
            "👋 ¡Buenas! Bienvenido al asistente de El Relevo. ¿Tienes preguntas sobre nuestro ministerio de niños?",
            "😊 ¡Hola! Soy tu asistente para El Relevo. ¿Qué información necesitas sobre nuestras actividades infantiles?"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (/(gracias|thank|agradecido)/i.test(lowerMessage)) {
        return "👶 **¡DE NADA!**\n\n" +
               "Es un privilegio servir a las familias y ayudar a los niños a crecer en el amor de Dios.\n\n" +
               "¿Hay algo más en lo que pueda ayudarte?";
    }
    
    if (/(seguridad|protección|cuidado|supervisión)/i.test(lowerMessage)) {
        return "🛡️ **NUESTRO COMPROMISO CON LA SEGURIDAD:**\n\n" +
               "• **Maestras capacitadas** y certificadas\n" +
               "• **Protocolos estrictos** de supervisión\n" +
               "• **Control de ingreso y salida**\n" +
               "• **Ambientes seguros** para cada edad\n" +
               "• **Comunicación directa** con padres\n" +
               "¡La seguridad de tus hijos es nuestra prioridad!";
    }
    
    if (/(quiero inscribir|inscribir a mi hijo|quiero que venga|matricular)/i.test(lowerMessage)) {
        return "🎊 **¡EXCELENTE DECISIÓN!**\n\n" +
               "**Para inscribir a tu hijo:**\n" +
               "1. Ven a cualquiera de nuestros horarios\n" +
               "2. Habla con Natalia Negreti (nuestra líder)\n" +
               "3. Llena la ficha de inscripción\n" +
               "4. Informa sobre necesidades especiales\n\n" +
               "**Horarios:**\n" +
               "• Domingos 9:00 AM o 18:00 PM\n" +
               "• Miércoles 18:00 HS\n\n" +
               "📞 **Consultas:** +54 351 318-3910";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "👶 ¡Vaya, no estoy seguro de entender tu pregunta! ¿Podrías reformularla o ser más específico?",
        "🎯 Puedo ayudarte con información sobre horarios, inscripciones, campamentos, seguridad o actividades. ¿Qué necesitas saber?",
        "🤔 No capté bien tu pregunta. ¿Podrías ser más específico?\n\nEjemplos:\n• \"¿A qué hora es la escuelita?\"\n• \"¿Cómo inscribo a mi hijo?\"\n• \"¿Qué edades aceptan?\"",
        "💡 Para consultas específicas, puedes contactar directamente:\n📞 +54 351 318-3910\n👩‍💼 Pregunta por Natalia Negreti"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

// Esperar a que cargue completamente la página
window.addEventListener('load', function() {
    setTimeout(initializeRelevoChatbot, 800);
});

// También inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeRelevoChatbot, 1200);
});

// Exponer funciones globalmente para que el HTML pueda usarlas
window.openCustomRelevoChatbot = openRelevoChatbotWithCustomMessage;
window.openRelevoChatbotWithCustomMessage = openRelevoChatbotWithCustomMessage;

console.log('👶 Chatbot El Relevo - Versión móvil cargada');