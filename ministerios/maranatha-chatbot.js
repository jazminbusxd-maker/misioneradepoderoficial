// ======================================================
// CHATBOT PARA ESCUELA MARANATHA - VERSIÓN CORREGIDA
// ======================================================

// Base de conocimiento específica para Músicos
const maranathaChatbotKnowledge = {
    "horarios": [
        "🕐 Horarios de Escuela Maranatha:\n\n• Clases semanales: Consultar disponibilidad\n• Ubicación: AV. TILLARD 1318 B° COFICO"
    ],
    
    "contacto": [
        "📱 Contacto directo:\n\n🎵 Directores: Aixa Castelli y Gamaliel Paz\n📞 Inscripciones: +54 9 3512 476433\n📍 Ubicación: AV. TILLARD 1318 B° COFICO\n🎵 Especialidad: Formación de adoradores de excelencia"
    ],
    
    "instrumentos": [
        "🎵 INSTRUMENTOS DISPONIBLES:\n\n• 🎹 PIANO: Técnica clásica y contemporánea\n• 🎸 GUITARRA: Acústica y eléctrica\n• 🎸 BAJO: Grooves y fundamentos\n• 🥁 BATERÍA: Ritmo y dinámica\n• 🎤 CANTO: Técnica vocal y armonías"
    ],
    
    "inscripciones": [
        "📝 INSCRIPCIONES ESCUELA MARANATHA\n\nActualmente las inscripciones están en proceso de apertura.\n\nPara más información:\n📞 Teléfono: +54 9 3512 476433\n👥 Directores: Aixa Castelli y Gamaliel Paz\n📍 Consultas presenciales: AV. TILLARD 1318"
    ],
    
    "unirse": [
        "🎵 ¡BIENVENIDO/A A MARANATHA!\n\nPara unirte como estudiante:\n1. Contacta a los directores\n2. Teléfono: +54 9 3512 476433\n3. Consulta disponibilidad de cupos\n4. Asiste a una entrevista inicial\n5. Comienza tu formación musical\n\nPara unirte como músico:\n• Participa en los ensambles\n• Desarrolla tu ministerio\n• Únete a la comunidad"
    ],
    
    "quiero ser adorador": [
        "🎵 ¡TU LLAMADO ES SONORO!\n\nPara comenzar: +54 9 3512 476433"
    ],
    
    "clases": [
        "📚 NUESTRO PROGRAMA:\n\n• Teoría musical fundamental y aplicada\n• Técnica instrumental especializada\n• Armonía y composición\n• Improvisación en adoración\n• Tecnología musical básica\n• Desarrollo espiritual del adorador\n• Práctica en ensamble"
    ],
    
    "directores": [
        "👥 NUESTRO EQUIPO DIRECTIVO:\n\n• Aixa Castelli\n• Gamaliel Paz\n• Profesores especializados por instrumento\n• Todos comprometidos con tu crecimiento\n• Contacto: +54 9 3512 476433"
    ],
    
    "vision": [
        "🎯 NUESTRA VISIÓN SONORA:\n\nFormar adoradores que no solo tocan bien, sino que comprendan el peso de la gloria que llevan. Sacerdotes sonoros que ministran primero al corazón de Dios."
    ],
    
    "costo": [
        "💰 INVERSIÓN EN TU FORMACIÓN:\n\nPara información específica sobre costos:\n📞 Contacta directamente: +54 9 3512 476433\n\nIncluye:\n• Materiales de estudio\n• Acceso a instrumentos\n• Clases personalizadas\n• Certificación al finalizar"
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let maranathaChatbotInitialized = false;
let isMobile = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

// Inicializar el chatbot
function initializeMaranathaChatbot() {
    if (maranathaChatbotInitialized) return;
    
    console.log('🎵 Chatbot Escuela Maranatha - Inicializando...');
    
    checkMobileDevice();
    
    createMaranathaChatbotElements();
    
    setupMaranathaChatbotEvents();
    
    setupMaranathaPageButtons();
    
    maranathaChatbotInitialized = true;
    console.log('✅ Chatbot Escuela Maranatha listo');
}

// Detectar dispositivo móvil
function checkMobileDevice() {
    isMobile = window.innerWidth <= 768;
    
    window.addEventListener('resize', () => {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768;
        
        if (wasMobile !== isMobile) {
            adjustChatbotForMobile();
        }
    });
}

// Ajustar chatbot para móvil
function adjustChatbotForMobile() {
    const chatbotContainer = document.getElementById('maranatha-chatbot-container');
    const toggleBtn = document.getElementById('maranatha-chatbot-toggle');
    
    if (!chatbotContainer || !toggleBtn) return;
    
    if (isMobile) {
        chatbotContainer.style.width = 'calc(100vw - 20px)';
        chatbotContainer.style.right = '10px';
        chatbotContainer.style.left = 'auto';
        chatbotContainer.style.bottom = '70px';
        chatbotContainer.style.transform = 'rotate(0deg)';
        chatbotContainer.style.height = '70vh';
        
        toggleBtn.style.width = '55px';
        toggleBtn.style.height = '55px';
        toggleBtn.style.fontSize = '1.5rem';
        toggleBtn.style.bottom = '15px';
        toggleBtn.style.right = '15px';
        
        removeMusicNotesDecorations();
    } else {
        chatbotContainer.style.width = '340px';
        chatbotContainer.style.right = '20px';
        chatbotContainer.style.left = 'auto';
        chatbotContainer.style.bottom = '80px';
        chatbotContainer.style.transform = 'rotate(-1deg)';
        chatbotContainer.style.height = '480px';
        
        toggleBtn.style.width = '60px';
        toggleBtn.style.height = '60px';
        toggleBtn.style.fontSize = '1.8rem';
        toggleBtn.style.bottom = '20px';
        toggleBtn.style.right = '20px';
    }
}

// Crear elementos HTML del chatbot
function createMaranathaChatbotElements() {
    // Eliminar elementos existentes si los hay
    const existingContainer = document.getElementById('maranatha-chatbot-container');
    const existingToggle = document.getElementById('maranatha-chatbot-toggle');
    if (existingContainer) existingContainer.remove();
    if (existingToggle) existingToggle.remove();
    
    const container = document.createElement('div');
    container.id = 'maranatha-chatbot-container';
    
    // Estilos base inline
    container.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 340px;
        height: 480px;
        background: #F8F5F0;
        border: 3px solid #121212;
        border-radius: 12px;
        box-shadow: 5px 5px 0 #FFD000, 10px 10px 0 #C41E3A;
        display: none;
        flex-direction: column;
        z-index: 10000;
        overflow: hidden;
        font-family: 'Roboto Condensed', sans-serif;
        transform: rotate(-1deg);
    `;
    
    container.innerHTML = `
        <!-- Header -->
        <div id="maranatha-chatbot-header" style="
            background: #121212;
            color: #FFD000;
            padding: 12px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Archivo Black', sans-serif;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 3px solid #C41E3A;
        ">
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.2rem;">🎵</span>
                <span>ESCUELA MARANATHA</span>
            </div>
            <button id="maranatha-close-chatbot" style="
                background: #C41E3A;
                border: 2px solid #FFD000;
                color: #F8F5F0;
                font-size: 1.5rem;
                cursor: pointer;
                font-weight: bold;
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                padding: 0;
                line-height: 1;
            ">×</button>
        </div>
        
        <!-- Mensajes -->
        <div id="maranatha-chatbot-messages" style="
            flex: 1;
            padding: 12px;
            overflow-y: auto;
            display: flex;
            flex-direction: column-reverse;
            gap: 8px;
            background: rgba(248, 245, 240, 0.9);
        "></div>
        
        <!-- Indicador de escritura -->
        <div id="maranatha-typing-indicator" style="
            display: none;
            padding: 6px 12px;
            background: #F8F5F0;
            border-top: 1px dashed #C41E3A;
            color: #121212;
            font-size: 0.85rem;
            align-items: center;
            gap: 8px;
        ">
            <span>🎵 escribiendo</span>
            <span style="display: inline-flex; gap: 2px;">
                <span style="animation: typingDot 1.4s infinite;">.</span>
                <span style="animation: typingDot 1.4s infinite; animation-delay: 0.2s;">.</span>
                <span style="animation: typingDot 1.4s infinite; animation-delay: 0.4s;">.</span>
            </span>
        </div>
        
        <!-- Input -->
        <div id="maranatha-chatbot-input" style="
            padding: 10px;
            display: flex;
            gap: 8px;
            border-top: 2px solid #121212;
            background: #F8F5F0;
        ">
            <input type="text" id="maranatha-user-input" placeholder="Escribe tu pregunta..." autocomplete="off" style="
                flex: 1;
                padding: 8px 12px;
                border: 2px solid #121212;
                border-radius: 20px;
                background: #FFFFFF;
                color: #121212;
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 0.9rem;
            ">
            <button id="maranatha-send-btn" style="
                padding: 8px 16px;
                background: #C41E3A;
                color: #F8F5F0;
                border: 2px solid #121212;
                border-radius: 20px;
                cursor: pointer;
                font-family: 'Bebas Neue', sans-serif;
                font-weight: 600;
                font-size: 1rem;
                min-width: 50px;
            ">🎶</button>
        </div>
        
        <!-- Botones rápidos - MÁS PEQUEÑOS Y MEJOR DISTRIBUIDOS -->
        <div id="maranatha-quick-questions" style="
            padding: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            border-top: 1px dashed #C41E3A;
            background: #F8F5F0;
            justify-content: center;
        ">
            <button class="maranatha-quick-btn" data-question="instrumentos" style="
                background: #FFD000;
                border: 1px solid #121212;
                border-radius: 16px;
                padding: 4px 8px;
                font-size: 0.7rem;
                color: #121212;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                font-weight: 600;
                flex: 0 0 auto;
            ">🎹 Instrumentos</button>
            
            <button class="maranatha-quick-btn" data-question="inscripciones" style="
                background: #FFD000;
                border: 1px solid #121212;
                border-radius: 16px;
                padding: 4px 8px;
                font-size: 0.7rem;
                color: #121212;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                font-weight: 600;
                flex: 0 0 auto;
            ">📝 Inscripciones</button>
            
            <button class="maranatha-quick-btn" data-question="directores" style="
                background: #FFD000;
                border: 1px solid #121212;
                border-radius: 16px;
                padding: 4px 8px;
                font-size: 0.7rem;
                color: #121212;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                font-weight: 600;
                flex: 0 0 auto;
            ">👥 Directores</button>
            
            <button class="maranatha-quick-btn" data-question="horarios" style="
                background: #FFD000;
                border: 1px solid #121212;
                border-radius: 16px;
                padding: 4px 8px;
                font-size: 0.7rem;
                color: #121212;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                font-weight: 600;
                flex: 0 0 auto;
            ">🕐 Horarios</button>
            
            <button class="maranatha-quick-btn" data-question="contacto" style="
                background: #FFD000;
                border: 1px solid #121212;
                border-radius: 16px;
                padding: 4px 8px;
                font-size: 0.7rem;
                color: #121212;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                font-weight: 600;
                flex: 0 0 auto;
            ">📱 Contacto</button>
            
            <button class="maranatha-quick-btn" data-question="costo" style="
                background: #FFD000;
                border: 1px solid #121212;
                border-radius: 16px;
                padding: 4px 8px;
                font-size: 0.7rem;
                color: #121212;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                font-weight: 600;
                flex: 0 0 auto;
            ">💰 Costo</button>
        </div>
    `;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'maranatha-chatbot-toggle';
    toggleBtn.innerHTML = '🎵';
    toggleBtn.title = 'Abrir chat Escuela Maranatha';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #FFD000;
        color: #121212;
        border: 3px solid #121212;
        border-radius: 50%;
        font-size: 1.8rem;
        cursor: pointer;
        box-shadow: 3px 3px 0 #C41E3A, 6px 6px 0 #121212;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Bebas Neue', sans-serif;
        transform: rotate(-5deg);
        transition: all 0.3s ease;
    `;
    
    // Agregar estilos CSS adicionales
    const styles = document.createElement('style');
    styles.textContent = `
        #maranatha-chatbot-messages::-webkit-scrollbar {
            width: 5px;
        }
        #maranatha-chatbot-messages::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.05);
        }
        #maranatha-chatbot-messages::-webkit-scrollbar-thumb {
            background: #C41E3A;
            border-radius: 10px;
        }
        
        .maranatha-bot-message {
            background: #F8F5F0;
            border: 2px solid #121212;
            border-radius: 12px 12px 12px 4px;
            padding: 10px 12px;
            color: #121212;
            font-size: 0.85rem;
            line-height: 1.5;
            max-width: 85%;
            align-self: flex-start;
            box-shadow: 2px 2px 0 #C41E3A;
            margin-bottom: 4px;
            margin-top: 4px;
            word-wrap: break-word;
            white-space: pre-wrap;
        }
        
        .maranatha-user-message {
            background: #FFD000;
            border: 2px solid #121212;
            border-radius: 12px 12px 4px 12px;
            padding: 10px 12px;
            color: #121212;
            font-size: 0.85rem;
            line-height: 1.5;
            max-width: 85%;
            align-self: flex-end;
            text-align: right;
            box-shadow: 2px 2px 0 #121212;
            margin-bottom: 4px;
            margin-top: 4px;
            word-wrap: break-word;
            white-space: pre-wrap;
        }
        
        .maranatha-bot-message p, .maranatha-user-message p {
            margin: 5px 0;
        }
        
        .maranatha-bot-message p:first-child, .maranatha-user-message p:first-child {
            margin-top: 0;
        }
        
        .maranatha-bot-message p:last-child, .maranatha-user-message p:last-child {
            margin-bottom: 0;
        }
        
        .maranatha-quick-btn:hover {
            background: #C41E3A !important;
            color: #F8F5F0 !important;
            transform: translateY(-1px);
        }
        
        #maranatha-chatbot-toggle:hover {
            transform: rotate(0deg) scale(1.1) !important;
            background: #C41E3A !important;
            color: #F8F5F0 !important;
        }
        
        #maranatha-send-btn:hover {
            background: #FFD000 !important;
            color: #121212 !important;
        }
        
        #maranatha-close-chatbot:hover {
            background: #FFD000 !important;
            color: #121212 !important;
            transform: rotate(90deg);
        }
        
        @keyframes typingDot {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.7; }
            30% { transform: translateY(-3px); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            #maranatha-chatbot-container {
                width: calc(100vw - 20px) !important;
                right: 10px !important;
                left: auto !important;
                height: 70vh !important;
                transform: rotate(0deg) !important;
            }
            
            .maranatha-quick-btn {
                font-size: 0.65rem !important;
                padding: 3px 6px !important;
            }
            
            .maranatha-bot-message, .maranatha-user-message {
                max-width: 90%;
                font-size: 0.8rem;
                padding: 8px 10px;
            }
        }
        
        @media (max-width: 480px) {
            .maranatha-quick-btn {
                font-size: 0.6rem !important;
                padding: 2px 5px !important;
            }
            
            #maranatha-quick-questions {
                gap: 3px;
            }
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(container);
    document.body.appendChild(toggleBtn);
    
    // Agregar mensajes de bienvenida
    setTimeout(() => {
        addMaranathaChatbotMessage("🎶 ¡Hola! Soy tu asistente de Escuela Maranatha.", 'bot');
        setTimeout(() => {
            addMaranathaChatbotMessage("Estoy aquí para ayudarte con información sobre nuestra escuela de música y adoración.", 'bot');
            setTimeout(() => {
                addMaranathaChatbotMessage("Pregúntame sobre instrumentos, inscripciones, directores, horarios o costos.", 'bot');
            }, 600);
        }, 600);
    }, 300);
    
    console.log('✅ Elementos del chatbot Maranatha creados');
}

// Configurar eventos del chatbot
function setupMaranathaChatbotEvents() {
    const toggleBtn = document.getElementById('maranatha-chatbot-toggle');
    const closeBtn = document.getElementById('maranatha-close-chatbot');
    const sendBtn = document.getElementById('maranatha-send-btn');
    const userInput = document.getElementById('maranatha-user-input');
    const quickBtns = document.querySelectorAll('.maranatha-quick-btn');
    const chatbotContainer = document.getElementById('maranatha-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) {
        console.error('❌ No se encontraron elementos del chatbot');
        return;
    }
    
    // Abrir chatbot
    toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        chatbotContainer.style.display = 'flex';
        
        if (userInput) {
            setTimeout(() => {
                userInput.focus();
            }, 300);
        }
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'rotate(-5deg) scale(1)';
        }, 150);
    });
    
    // Cerrar chatbot
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        chatbotContainer.style.display = 'none';
    });
    
    // Enviar con Enter
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMaranathaChatbotMessage();
        }
    });
    
    // Enviar con botón
    sendBtn.addEventListener('click', sendMaranathaChatbotMessage);
    
    // Botones rápidos
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            userInput.value = question;
            sendMaranathaChatbotMessage();
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

// Configurar botones de la página
function setupMaranathaPageButtons() {
    console.log('🔍 Configurando botones de la página Escuela Maranatha...');
    
    const inscripcionBtn = document.querySelector('.musicos-hero .musicos-button');
    if (inscripcionBtn && inscripcionBtn.textContent.includes('INSCRÍBETE')) {
        inscripcionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMaranathaChatbotWithCustomMessage(
                "📝 ¡INSCRIPCIONES ESCUELA MARANATHA!\n\nVeo que estás interesado/a en formarte como adorador/a. Te ayudo con toda la información:",
                'inscripciones'
            );
        });
    }
    
    const serAdoradorBtn = document.getElementById('quiero-ser-adorador-btn');
    if (serAdoradorBtn) {
        serAdoradorBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMaranathaChatbotWithCustomMessage(
                "🎶 ¡TU LLAMADO ES SONORO!\n\nExcelente decisión querer desarrollar tu ministerio musical. Te explico cómo funciona:",
                'quiero ser adorador'
            );
        });
    }
    
    console.log('✅ Botones configurados');
}

// Función para abrir chatbot con mensaje personalizado
function openMaranathaChatbotWithCustomMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('maranatha-chatbot-container');
    const userInput = document.getElementById('maranatha-user-input');
    
    if (!chatbotContainer) {
        console.error('❌ No se encontró el chatbot container');
        return;
    }
    
    chatbotContainer.style.display = 'flex';
    
    const messagesContainer = document.getElementById('maranatha-chatbot-messages');
    if (messagesContainer) {
        messagesContainer.innerHTML = '';
    }
    
    setTimeout(() => {
        addMaranathaChatbotMessage(message, 'bot');
        
        setTimeout(() => {
            if (type === 'inscripciones') {
                addMaranathaChatbotMessage(
                    "📋 PROCESO DE INSCRIPCIÓN:\n\n" +
                    "🎵 Directores: Aixa Castelli y Gamaliel Paz\n" +
                    "📞 Teléfono: +54 9 3512 476433\n" +
                    "📍 Ubicación: AV. TILLARD 1318 B° COFICO\n\n" +
                    "Pasos a seguir:\n" +
                    "1. Contacta a los directores\n" +
                    "2. Consulta disponibilidad\n" +
                    "3. Formaliza tu inscripción\n\n" +
                    "¿Alguna pregunta específica?",
                    'bot'
                );
            } else if (type === 'quiero ser adorador') {
                addMaranathaChatbotMessage(
                    "🎶 FORMACIÓN INTEGRAL:\n\n" +
                    "Áreas de desarrollo:\n" +
                    "• Técnica instrumental/vocal\n" +
                    "• Teoría musical aplicada\n" +
                    "• Ministerio de alabanza\n" +
                    "• Desarrollo espiritual\n\n" +
                    "Instrumentos disponibles:\n" +
                    "• Piano / Teclado\n" +
                    "• Guitarra acústica/eléctrica\n" +
                    "• Bajo eléctrico\n" +
                    "• Batería y percusión\n" +
                    "• Voz y canto\n\n" +
                    "📞 +54 9 3512 476433",
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
function showMaranathaTypingIndicator() {
    const indicator = document.getElementById('maranatha-typing-indicator');
    if (indicator) {
        indicator.style.display = 'flex';
    }
}

// Ocultar indicador de escritura
function hideMaranathaTypingIndicator() {
    const indicator = document.getElementById('maranatha-typing-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// Enviar mensaje del usuario
function sendMaranathaChatbotMessage() {
    const userInput = document.getElementById('maranatha-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addMaranathaChatbotMessage(message, 'user');
    userInput.value = '';
    
    showMaranathaTypingIndicator();
    
    setTimeout(() => {
        hideMaranathaTypingIndicator();
        const response = getMaranathaChatbotResponse(message);
        
        setTimeout(() => {
            addMaranathaChatbotMessage(response, 'bot');
        }, 200);
    }, 1200);
}

// Agregar mensaje al chat (los nuevos mensajes aparecen arriba)
function addMaranathaChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('maranatha-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'maranatha-bot-message' : 'maranatha-user-message';
    
    // Formatear texto en párrafos
    const paragraphs = text.split('\n\n');
    let formattedText = '';
    
    paragraphs.forEach(paragraph => {
        if (paragraph.trim()) {
            const lines = paragraph.split('\n');
            if (lines.length > 1) {
                formattedText += '<p>' + lines.join('<br>') + '</p>';
            } else {
                formattedText += '<p>' + paragraph + '</p>';
            }
        }
    });
    
    messageDiv.innerHTML = formattedText || text;
    
    messagesContainer.insertBefore(messageDiv, messagesContainer.firstChild);
    
    messagesContainer.scrollTop = 0;
    
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        messageDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 10);
}

// Obtener respuesta del chatbot
function getMaranathaChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Buscar en base de conocimiento
    for (const [keyword, responses] of Object.entries(maranathaChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            return responses[0];
        }
    }
    
    // Respuestas específicas
    if (/(instrumentos|piano|guitarra|batería|canto|bajo)/i.test(lowerMessage)) {
        return maranathaChatbotKnowledge.instrumentos[0];
    }
    
    if (/(inscripciones|inscribirme|matricularme)/i.test(lowerMessage)) {
        return maranathaChatbotKnowledge.inscripciones[0];
    }
    
    if (/(directores|aixa|gamaliel|profesores)/i.test(lowerMessage)) {
        return maranathaChatbotKnowledge.directores[0];
    }
    
    if (/(horarios|horario|clases)/i.test(lowerMessage)) {
        return maranathaChatbotKnowledge.horarios[0];
    }
    
    if (/(contacto|teléfono|telefono|whatsapp|celular)/i.test(lowerMessage)) {
        return maranathaChatbotKnowledge.contacto[0];
    }
    
    if (/(costo|precio|cuota|pago|inversión)/i.test(lowerMessage)) {
        return maranathaChatbotKnowledge.costo[0];
    }
    
    if (/(hola|buenos|buenas)/i.test(lowerMessage)) {
        return "🎵 ¡Hola! ¿En qué puedo ayudarte con información sobre la Escuela Maranatha?";
    }
    
    if (/(gracias|thank)/i.test(lowerMessage)) {
        return "🎵 ¡De nada! Que Dios bendiga tu ministerio musical. ¿Necesitas algo más?";
    }
    
    return "🎵 Puedo ayudarte con información sobre instrumentos, inscripciones, directores, horarios, contacto o costos. ¿Qué te gustaría saber?";
}

// Funciones para notas decorativas (simplificadas)
function addMusicNotesDecorations() {}
function removeMusicNotesDecorations() {}

// ======================================================
// INICIALIZACIÓN
// ======================================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎵 DOM cargado - Iniciando chatbot Maranatha...');
    setTimeout(initializeMaranathaChatbot, 1000);
});

window.addEventListener('load', function() {
    console.log('🎵 Página cargada - Asegurando chatbot...');
    if (!maranathaChatbotInitialized) {
        setTimeout(initializeMaranathaChatbot, 500);
    }
});

// Funciones públicas
window.openMaranathaChatbot = function(type = 'general') {
    openMaranathaChatbotWithCustomMessage(
        "🎵 ¡Hola! Asistente de Escuela Maranatha aquí. ¿En qué puedo ayudarte?",
        type
    );
};

console.log('✅ maranatha-chatbot.js cargado - VERSIÓN CORREGIDA');