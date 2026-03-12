// ======================================================
// CHATBOT EXCLUSIVO PARA HOMBRES DE PODER - VERSIÓN GUERRERA MEJORADA
// Ministerio de Hombres - Misionera de Poder
// ======================================================

// ======================================================
// BASE DE CONOCIMIENTO - HOMBRES DE PODER
// ======================================================

const hombresChatbotKnowledge = {
    // Información general del ministerio
    ministerio: [
        "⚔️ **Hombres de Poder** es una forja espiritual donde los varones se transforman en guerreros del Reino. No buscamos hombres cómodos; buscamos **hombres dispuestos a ser martillados, fundidos y moldeados** por el Espíritu Santo.",
        "🛡️ En una cultura que quiere hombres débiles, levantamos un **estandarte de masculinidad bíblica**. Formamos guerreros espirituales, padres intencionales, esposos apasionados y líderes transformadores."
    ],

    // Horarios y reuniones
    horarios: [
        "⚔️ **Reuniones de Hombres de Poder:**\n\n• **Viernes cada 15 días** (intercalando con Reina Mía)\n• **Horario:** 20:00 PM\n• **Lugar:** Auditorio Mayor - Av. Tillard 1318, B° Cofico\n\n¡Te esperamos en la forja!",
        "🕒 **Agenda de Guerreros:**\n• Viernes (quinzenal): Reunión General - 20:00hs\n• Próximamente: Grupos de discipulado de hombres\n• Retiros especiales (fechas a confirmar)",
        "⏰ **Próxima reunión:** Viernes 20:00 PM en Av. Tillard 1318. No faltes, guerrero."
    ],

    // Eventos
    eventos: [
        "📅 **Eventos de Hombres de Poder:**\n\n**1️⃣ REUNIONES QUINCENALES**\nViernes 20:00 PM\n📍 Auditorio Mayor\n\n**2️⃣ CONGRESOS DE HOMBRES**\nPróximamente - Fechas a confirmar\n\n**3️⃣ RETIROS DE GUERREROS**\nEn preparación - Espiritualidad intensiva",
        "🔥 **Próximos encuentros:**\n• Viernes (quinzenal) - Reunión general\n• Congresos especiales (pronto anunciaremos)\n• Retiros de fin de semana (fechas a definir)"
    ],

    // Contacto
    contacto: [
        "📞 **Contacto Hombres de Poder:**\n\n• **Líder:** Pastor Walter Buchin\n• **Teléfono:** +54 351 627-7684\n• **Email:** hombrespoderiglesia@gmail.com\n• **Ubicación:** Av. Tillard 1318, B° Cofico",
        "📬 **Medios de contacto:**\n• 📱 WhatsApp: +54 351 627-7684\n• 📧 Email: hombrespoderiglesia@gmail.com\n• 📍 Dirección: Av. Tillard 1318, B° Cofico"
    ],

    // Líder / Pastor
    lider: [
        "👑 **Líder de Hombres de Poder:**\n\n**Pastor Walter Buchin**\n\n📞 Contacto directo: +54 351 627-7684\n📧 Email: hombrespoderiglesia@gmail.com\n\nUn hombre de Dios que lidera con ejemplo y valentía.",
        "🦁 **Nuestro líder:** Pastor Walter Buchin\nDisponible para atención personal. Contáctalo al 📱 +54 351 627-7684"
    ],

    // Ubicación
    ubicacion: [
        "📍 **Dónde nos reunimos:**\n\n**Auditorio Mayor Misionera de Poder**\nAv. Tillard 1318, Barrio Cofico, Córdoba\n\n🅿️ Estacionamiento disponible\n♿ Acceso para personas con movilidad reducida",
        "**Dirección exacta:**\nAv. Tillard 1318, B° Cofico\n(Entre calles Libertad y San Martín)"
    ],

    // Valores / Visión
    valores: [
        "🛡️ **Nuestros valores guerreros:**\n\n• 🦁 **VALENTÍA:** Coraje para enfrentar gigantes\n• ⚔️ **INTEGRIDAD:** Carácter inquebrantable\n• 🛡️ **PROTECCIÓN:** Guardianes de su familia\n• 🔥 **PASIÓN:** Hombres que adoran con todo su ser\n• 📖 **VERDAD:** Fundados en la Palabra",
        "💪 **Lo que creemos:**\n• Hombres que lideran con integridad\n• Hombres que protegen con valentía\n• Hombres que proveen con excelencia\n• Hombres que adoran con pasión"
    ],

    // Unirse / Ser parte
    inscribirse: [
        "🎯 **¿QUIERES UNIRTE A HOMBRES DE PODER?**\n\n**Pasos para formar parte de la hermandad:**\n\n1️⃣ **ASISTE** a nuestra reunión de los viernes 20:00 PM\n2️⃣ **HABLA** con nuestros líderes después del servicio\n3️⃣ **PARTICIPA** en las actividades y grupos pequeños\n4️⃣ **CONTACTA** al Pastor Walter al +54 351 627-7684\n\n**¡Te esperamos, guerrero!** ⚔️",
        "🔥 **Para unirte a la forja:**\n\n• 📞 Llama al +54 351 627-7684\n• 📧 Escribe a hombrespoderiglesia@gmail.com\n• 📍 Visítanos: Av. Tillard 1318, B° Cofico (viernes 20hs)\n\n¡No te quedes fuera del mover de Dios!"
    ],

    // Redes sociales (aunque no hay específicas)
    redes: [
        "🌐 Actualmente no tenemos redes sociales específicas publicadas, pero puedes contactarnos:\n\n📞 Teléfono: +54 351 627-7684\n📧 Email: hombrespoderiglesia@gmail.com\n📍 Visítanos en nuestras reuniones de los viernes.",
        "📱 **Contacto directo:**\nWhatsApp: +54 351 627-7684\nEmail: hombrespoderiglesia@gmail.com\n\n¡Pronto tendremos redes oficiales!"
    ],

    // Oración / Apoyo espiritual
    oracion: [
        "🙏 **¿Necesitas oración o consejería?**\n\nNuestro equipo de líderes está disponible para:\n• Oración personal\n• Consejería matrimonial\n• Acompañamiento espiritual\n• Ayuda en momentos difíciles\n\n📞 Contáctanos: +54 351 627-7684",
        "✨ **Línea de oración de hombres:**\n📞 +54 351 627-7684\n\nTambién puedes acercarte los viernes a las 20hs para recibir oración personal."
    ],

    // Versículos / Escrituras
    versiculos: [
        "📖 **Versículo de hoy:**\n\n\"Sed fuertes y valientes. No temáis ni tengáis miedo de ellos, porque Jehová tu Dios es el que va contigo; no te dejará ni te desamparará.\" - Deuteronomio 31:6",
        "⚔️ **Palabra para guerreros:**\n\n\"Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio.\" - 2 Timoteo 1:7",
        "🛡️ **Identidad del guerrero:**\n\n\"Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios.\" - 1 Pedro 2:9"
    ]
};

// ======================================================
// VARIABLES GLOBALES
// ======================================================
let chatbotInitialized = false;

// ======================================================
// FUNCIONES PRINCIPALES DEL CHATBOT
// ======================================================

function initializeHombresChatbot() {
    if (chatbotInitialized) return;
    
    console.log('⚔️ Chatbot Hombres de Poder - Inicializando versión mejorada...');
    
    createChatbotElements();
    setupChatbotEvents();
    setupPageButtons();
    
    chatbotInitialized = true;
    console.log('✅ Chatbot Hombres de Poder listo y mejorado');
}

function createChatbotElements() {
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="hombres-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="hombres-chatbot-header">
                <h4>⚔️ Hombres de Poder - Asistente</h4>
                <button id="hombres-close-chatbot" title="Cerrar">&times;</button>
            </div>
            
            <!-- Mensajes -->
            <div id="hombres-chatbot-messages">
                <div class="hombres-bot-message">⚔️ ¡Bienvenido, guerrero! Soy tu asistente de Hombres de Poder.</div>
                <div class="hombres-bot-message">Estoy aquí para ayudarte con información sobre nuestro ministerio de hombres.</div>
                <div class="hombres-bot-message">Puedes preguntarme sobre: horarios, eventos, contacto, cómo unirte y más.</div>
            </div>
            
            <!-- Indicador de escritura -->
            <div id="hombres-typing-indicator" class="hombres-typing-hidden">
                <span></span><span></span><span></span>
            </div>
            
            <!-- Input -->
            <div id="hombres-chatbot-input">
                <input type="text" id="hombres-user-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
                <button id="hombres-send-btn" title="Enviar">➤</button>
            </div>
            
            <!-- Botones rápidos -->
            <div id="hombres-quick-questions">
                <button class="hombres-quick-btn" data-question="¿Cuándo hay reuniones?">🕒 Horarios</button>
                <button class="hombres-quick-btn" data-question="¿Qué eventos hay?">📅 Eventos</button>
                <button class="hombres-quick-btn" data-question="¿Cómo contacto?">📞 Contacto</button>
                <button class="hombres-quick-btn" data-question="¿Quiero unirme?">⚔️ Unirme</button>
            </div>
        </div>

        <!-- Botón flotante -->
        <button id="hombres-chatbot-toggle" title="Abrir chat de Hombres de Poder">⚔️</button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    addChatbotStyles();
}

// Estilos mejorados con typing indicator
function addChatbotStyles() {
    const styles = `
        <style>
            :root {
                --bronze-dark: #8B4513;
                --bronze-medium: #D2691E;
                --bronze-light: #CD853F;
                --gold-warrior: #D4AF37;
                --gold-light: #F1C40F;
                --steel-dark: #2C3E50;
                --steel-light: #5D6D7E;
            }
            
            #hombres-chatbot-container {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 350px;
                max-width: 90vw;
                height: 500px;
                max-height: 70vh;
                background: linear-gradient(135deg, rgba(20, 20, 20, 0.98), rgba(10, 10, 10, 0.98));
                border: 3px solid var(--bronze-medium);
                border-radius: 10px;
                box-shadow: 
                    0 15px 35px rgba(0, 0, 0, 0.7),
                    0 0 30px rgba(210, 105, 30, 0.3);
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                backdrop-filter: blur(10px);
                font-family: 'Montserrat', sans-serif;
            }
            
            #hombres-chatbot-header {
                background: linear-gradient(90deg, var(--bronze-dark), var(--bronze-medium));
                color: var(--gold-light);
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Cinzel', serif;
                font-size: 1.2rem;
                font-weight: 700;
                border-bottom: 2px solid var(--bronze-medium);
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            #hombres-close-chatbot {
                background: transparent;
                border: none;
                color: var(--gold-light);
                font-size: 2rem;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            
            #hombres-close-chatbot:hover {
                transform: rotate(90deg);
                color: white;
            }
            
            #hombres-chatbot-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;
                background: rgba(10, 10, 10, 0.9);
                scroll-behavior: smooth;
            }
            
            /* Typing Indicator */
            #hombres-typing-indicator {
                padding: 10px 20px;
                display: flex;
                gap: 5px;
                background: rgba(44, 62, 80, 0.9);
                border: 1px solid var(--bronze-dark);
                border-radius: 10px 10px 10px 0;
                margin: 0 20px 10px 20px;
                width: fit-content;
                transition: all 0.3s ease;
            }
            
            #hombres-typing-indicator span {
                width: 8px;
                height: 8px;
                background: var(--gold-warrior);
                border-radius: 50%;
                display: inline-block;
                animation: hombresTyping 1.4s infinite ease-in-out both;
            }
            
            #hombres-typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
            #hombres-typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
            
            @keyframes hombresTyping {
                0%, 80%, 100% { transform: scale(0.6); opacity: 0.6; }
                40% { transform: scale(1); opacity: 1; }
            }
            
            .hombres-typing-hidden {
                display: none !important;
            }
            
            /* Mensajes */
            .hombres-bot-message, .hombres-user-message {
                padding: 15px;
                font-size: 0.95rem;
                line-height: 1.6;
                max-width: 85%;
                word-wrap: break-word;
                overflow-wrap: break-word;
                white-space: pre-line;
                animation: messageAppear 0.3s ease;
            }
            
            @keyframes messageAppear {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .hombres-bot-message {
                background: rgba(44, 62, 80, 0.9);
                border: 1px solid var(--bronze-dark);
                border-radius: 10px 10px 10px 0;
                color: #e0e0e0;
                align-self: flex-start;
                position: relative;
            }
            
            .hombres-bot-message::before {
                content: '⚔️';
                position: absolute;
                left: -10px;
                top: -10px;
                background: var(--bronze-dark);
                color: var(--gold-light);
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                border: 2px solid var(--bronze-medium);
            }
            
            .hombres-user-message {
                background: rgba(139, 69, 19, 0.9);
                border: 1px solid var(--bronze-medium);
                border-radius: 10px 10px 0 10px;
                color: white;
                align-self: flex-end;
                text-align: right;
            }
            
            #hombres-chatbot-input {
                padding: 15px;
                display: flex;
                gap: 10px;
                border-top: 2px solid rgba(205, 133, 63, 0.3);
                background: rgba(20, 20, 20, 0.95);
            }
            
            #hombres-user-input {
                flex: 1;
                padding: 12px 15px;
                border: 2px solid var(--bronze-dark);
                border-radius: 5px;
                background: rgba(30, 30, 30, 0.9);
                color: white;
                font-family: 'Montserrat', sans-serif;
                font-size: 0.95rem;
            }
            
            #hombres-user-input:focus {
                outline: none;
                border-color: var(--bronze-medium);
                box-shadow: 0 0 15px rgba(210, 105, 30, 0.5);
            }
            
            #hombres-send-btn {
                padding: 12px 25px;
                background: linear-gradient(145deg, var(--bronze-medium), var(--bronze-dark));
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-family: 'Cinzel', serif;
                font-weight: 700;
                transition: all 0.3s ease;
                min-width: 60px;
            }
            
            #hombres-send-btn:hover {
                transform: scale(1.05);
                background: linear-gradient(145deg, var(--bronze-light), var(--bronze-medium));
                box-shadow: 0 5px 15px rgba(210, 105, 30, 0.5);
            }
            
            #hombres-quick-questions {
                padding: 15px;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                border-top: 1px solid rgba(205, 133, 63, 0.2);
                background: rgba(28, 40, 51, 0.95);
            }
            
            .hombres-quick-btn {
                padding: 8px 12px;
                background: rgba(44, 62, 80, 0.9);
                border: 1px solid var(--bronze-dark);
                border-radius: 5px;
                color: #ccc;
                cursor: pointer;
                font-size: 0.8rem;
                transition: all 0.3s ease;
                font-family: 'Raleway', sans-serif;
            }
            
            .hombres-quick-btn:hover {
                background: rgba(139, 69, 19, 0.9);
                color: white;
                border-color: var(--bronze-medium);
                transform: translateY(-2px);
            }
            
            #hombres-chatbot-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(145deg, var(--bronze-dark), var(--bronze-medium));
                color: var(--gold-light);
                border: 3px solid var(--bronze-medium);
                border-radius: 50%;
                width: 70px;
                height: 70px;
                font-size: 2.5rem;
                cursor: pointer;
                box-shadow: 
                    0 10px 25px rgba(0, 0, 0, 0.7),
                    0 0 30px rgba(210, 105, 30, 0.4);
                z-index: 9999;
                transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Cinzel', serif;
            }
            
            #hombres-chatbot-toggle:hover {
                transform: scale(1.15) rotate(15deg);
                box-shadow: 
                    0 15px 35px rgba(0, 0, 0, 0.8),
                    0 0 50px rgba(210, 105, 30, 0.6);
            }
            
            #hombres-chatbot-messages::-webkit-scrollbar {
                width: 8px;
            }
            
            #hombres-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
            }
            
            #hombres-chatbot-messages::-webkit-scrollbar-thumb {
                background: var(--bronze-medium);
                border-radius: 4px;
            }
            
            /* Botón "Quiero ser parte" en la página */
            #quiero-ser-parte {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 18px 45px;
                background: linear-gradient(145deg, var(--bronze-medium), var(--bronze-dark));
                color: white;
                border: 2px solid var(--bronze-medium);
                border-radius: 8px;
                font-family: 'Cinzel', serif;
                font-weight: 700;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.4s ease;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
                text-transform: uppercase;
                letter-spacing: 1px;
                min-height: 55px;
            }
            
            #quiero-ser-parte:hover {
                transform: translateY(-5px) scale(1.05);
                background: linear-gradient(145deg, var(--bronze-light), var(--bronze-medium));
                box-shadow: 0 15px 35px rgba(210, 105, 30, 0.5);
                color: var(--gold-light);
            }
            
            #quiero-ser-parte i {
                font-size: 1.3rem;
            }
            
            @media (max-width: 768px) {
                #hombres-chatbot-container {
                    width: 95vw;
                    right: 2.5vw;
                    bottom: 80px;
                    height: 60vh;
                }
                
                #hombres-chatbot-toggle {
                    width: 60px;
                    height: 60px;
                    font-size: 2rem;
                }
                
                #quiero-ser-parte {
                    width: 90%;
                    max-width: 300px;
                }
                
                .hombres-bot-message,
                .hombres-user-message {
                    max-width: 90%;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

function setupChatbotEvents() {
    const toggleBtn = document.getElementById('hombres-chatbot-toggle');
    const closeBtn = document.getElementById('hombres-close-chatbot');
    const sendBtn = document.getElementById('hombres-send-btn');
    const userInput = document.getElementById('hombres-user-input');
    const quickBtns = document.querySelectorAll('.hombres-quick-btn');
    const chatbotContainer = document.getElementById('hombres-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) return;
    
    toggleBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'flex';
        userInput?.focus();
        
        // Efecto visual
        toggleBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            toggleBtn.style.transform = '';
        }, 200);
    });
    
    closeBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendHombresMessage();
    });
    
    sendBtn.addEventListener('click', sendHombresMessage);
    
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            userInput.value = question;
            sendHombresMessage();
        });
    });
}

function setupPageButtons() {
    console.log('🔍 Configurando botones de la página...');
    
    // Botón "Quiero ser parte" (por ID)
    const joinButton = document.getElementById('quiero-ser-parte');
    if (joinButton) {
        // Remover listeners anteriores (por si acaso)
        const newButton = joinButton.cloneNode(true);
        joinButton.parentNode.replaceChild(newButton, joinButton);
        
        newButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🎯 Botón "Quiero ser parte" clickeado');
            openHombresChatbotWithMessage(
                "🎯 **¡EXCELENTE DECISIÓN, GUERRERO!**\n\nVeo que quieres unirte a Hombres de Poder. Soy tu asistente virtual y te guiaré en el proceso:",
                'unirse'
            );
        });
        
        newButton.style.cursor = 'pointer';
        newButton.title = "Habla con nuestro asistente para unirte";
    }
    
    console.log('✅ Botones configurados');
}

// ======================================================
// FUNCIONES DEL CHAT
// ======================================================

function sendHombresMessage() {
    const userInput = document.getElementById('hombres-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addHombresMessage(message, 'user');
    userInput.value = '';
    
    showHombresTypingIndicator();
    
    const thinkTime = Math.min(500 + message.length * 10, 1500);
    
    setTimeout(() => {
        hideHombresTypingIndicator();
        const response = getHombresResponse(message);
        addHombresMessage(response, 'bot');
    }, thinkTime);
}

function showHombresTypingIndicator() {
    const indicator = document.getElementById('hombres-typing-indicator');
    if (indicator) {
        indicator.classList.remove('hombres-typing-hidden');
        setTimeout(() => {
            indicator.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

function hideHombresTypingIndicator() {
    const indicator = document.getElementById('hombres-typing-indicator');
    if (indicator) {
        indicator.classList.add('hombres-typing-hidden');
    }
}

function addHombresMessage(text, sender) {
    const messagesContainer = document.getElementById('hombres-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'hombres-bot-message' : 'hombres-user-message';
    
    // Procesar texto (enlaces, emails, teléfonos)
    let processedText = text;
    
    // URLs
    processedText = processedText.replace(/(https?:\/\/[^\s]+)/g, 
        '<a href="$1" target="_blank" style="color: #D4AF37; text-decoration: underline;">$1</a>');
    
    // Emails
    processedText = processedText.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g, 
        '<a href="mailto:$1" style="color: #D4AF37;">$1</a>');
    
    // Teléfonos
    processedText = processedText.replace(/(\+?\d[\d\s\-\(\)]{8,}\d)/g, 
        '<a href="tel:$1" style="color: #D4AF37;">$1</a>');
    
    messageDiv.innerHTML = processedText;
    messagesContainer.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// ======================================================
// MOTOR DE RESPUESTAS INTELIGENTE
// ======================================================

function getHombresResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Horarios y reuniones
    if (/(horario|horarios|reunión|reuniones|cuándo|cuando|días|dias|viernes)/i.test(lowerMessage)) {
        return randomHombresResponse('horarios');
    }
    
    // Eventos
    if (/(eventos|próximos|proximos|agenda|cronograma|calendario|qué hay|que hay)/i.test(lowerMessage)) {
        return randomHombresResponse('eventos');
    }
    
    // Contacto general
    if (/(contacto|contactar|comunicar|escribir|mail|email|correo|teléfono|telefono|llamar|whatsapp)/i.test(lowerMessage)) {
        return randomHombresResponse('contacto');
    }
    
    // Líder / Pastor
    if (/(pastor|líder|lider|walter|buchin|quien lidera|quién lidera)/i.test(lowerMessage)) {
        return randomHombresResponse('lider');
    }
    
    // Ubicación
    if (/(dónde|donde|ubicación|ubicacion|lugar|dirección|direccion)/i.test(lowerMessage)) {
        return randomHombresResponse('ubicacion');
    }
    
    // Valores / Visión
    if (/(valores|visión|vision|qué es|que es|ministerio|creemos)/i.test(lowerMessage)) {
        return randomHombresResponse('valores');
    }
    
    // Unirse / Ser parte
    if (/(unirme|ser parte|participar|integrarme|inscribirme|sumarme|quiero ser parte)/i.test(lowerMessage)) {
        return randomHombresResponse('inscribirse');
    }
    
    // Redes sociales
    if (/(redes|sociales|facebook|fb|instagram|youtube)/i.test(lowerMessage)) {
        return randomHombresResponse('redes');
    }
    
    // Oración
    if (/(oración|oracion|orar|rezo|intercesión|intercesion|petición|peticion|ayuda|consejería)/i.test(lowerMessage)) {
        return randomHombresResponse('oracion');
    }
    
    // Versículos / Biblia
    if (/(versículo|versiculo|biblia|escritura|palabra|deuteronomio|efesios|timoteo)/i.test(lowerMessage)) {
        return randomHombresResponse('versiculos');
    }
    
    // Saludos
    if (/(hola|buenos días|buenas tardes|buenas noches|saludos)/i.test(lowerMessage)) {
        return "⚔️ ¡Hola, guerrero! Bienvenido al asistente de Hombres de Poder. ¿En qué puedo ayudarte hoy?";
    }
    
    // Gracias
    if (/(gracias|thank|agradezco)/i.test(lowerMessage)) {
        return "🛡️ ¡De nada, guerrero! Recuerda: 'Sed fuertes y valientes' (Deuteronomio 31:6). ¿Necesitas algo más?";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "⚔️ Perdona, no entendí completamente. ¿Podrías ser más específico? Puedo ayudarte con horarios, eventos, contacto, valores o cómo unirte a Hombres de Poder.",
        "Disculpa, no reconozco esa consulta. ¿Te interesaría saber sobre:\n• Horarios de reuniones\n• Próximos eventos\n• Contacto y líder\n• Valores del ministerio\n• Cómo unirte?",
        "No estoy seguro de haber entendido. Como asistente de Hombres de Poder, puedo informarte sobre:\n🕒 Horarios\n📅 Eventos\n📞 Contacto\n⚔️ Cómo ser parte"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function randomHombresResponse(category) {
    const responses = hombresChatbotKnowledge[category];
    if (!responses || responses.length === 0) {
        return "⚔️ Información no disponible. Por favor, contacta al 📞 +54 351 627-7684";
    }
    return responses[Math.floor(Math.random() * responses.length)];
}

function openHombresChatbotWithMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('hombres-chatbot-container');
    const userInput = document.getElementById('hombres-user-input');
    
    if (!chatbotContainer) return;
    
    chatbotContainer.style.display = 'flex';
    
    const messagesContainer = document.getElementById('hombres-chatbot-messages');
    if (messagesContainer) {
        const children = Array.from(messagesContainer.children);
        if (children.length > 3) {
            for (let i = 3; i < children.length; i++) {
                messagesContainer.removeChild(children[i]);
            }
        }
    }
    
    setTimeout(() => {
        addHombresMessage(message, 'bot');
        
        showHombresTypingIndicator();
        
        setTimeout(() => {
            hideHombresTypingIndicator();
            
            if (type === 'unirse') {
                addHombresMessage(randomHombresResponse('inscribirse'), 'bot');
            } else {
                addHombresMessage("¿En qué más puedo ayudarte, guerrero?", 'bot');
            }
        }, 1200);
    }, 300);
    
    if (userInput) setTimeout(() => userInput.focus(), 500);
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

// Inicializar cuando la página esté completamente cargada
window.addEventListener('load', () => setTimeout(initializeHombresChatbot, 1000));
document.addEventListener('DOMContentLoaded', () => setTimeout(initializeHombresChatbot, 2000));

// Funciones públicas
window.openHombresChatbot = openHombresChatbotWithMessage;
window.closeHombresChatbot = function() {
    const container = document.getElementById('hombres-chatbot-container');
    if (container) container.style.display = 'none';
};

console.log('⚔️ chatbot-hombres.js mejorado cargado - Esperando inicialización');