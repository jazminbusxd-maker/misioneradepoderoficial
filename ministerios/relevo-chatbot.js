// ======================================================
// CHATBOT EXCLUSIVO PARA EL RELEVO - VERSIÓN MEJORADA CON ANIMACIONES
// Ministerio de Niños - Misionera de Poder
// ======================================================

// ======================================================
// BASE DE CONOCIMIENTO COMPLETA - EL RELEVO
// ======================================================

const relevoChatbotKnowledge = {
    // Información general del ministerio
    ministerio: [
        "👶 **El Relevo** es el ministerio de niños de Misionera de Poder. No es solo una escuelita bíblica, ¡es una **aventura con Dios!** Aquí los niños descubren que son **hijos del Rey** y que tienen un propósito especial.",
        "🎪 Creemos que los niños **no son el futuro de la iglesia, son el presente.** Aprenden, juegan, adoran y crecen en el amor de Jesús de una manera divertida y significativa."
    ],

    // Horarios de las reuniones (los niños tienen su espacio)
    horarios: [
        "🕒 **Horarios de El Relevo:**\n\n• **Domingos:** 9:00 AM - Escuelita Bíblica\n• **Domingos:** 18:00 PM - Escuelita Bíblica\n• **Miércoles:** 18:00 HS - Escuelita Bíblica\n\nLos niños tienen su espacio durante las reuniones generales de la iglesia.\n\n📍 **Lugar:** Auditorio Mayor - Av. Tillard 1318, B° Cofico",
        "📅 **Nuestros encuentros:**\n\n• **Domingo mañana:** 9:00 AM\n• **Domingo tarde:** 18:00 PM\n• **Miércoles:** 18:00 HS\n\n¡Los esperamos!"
    ],

    // Contacto con el nuevo número de la líder
    contacto: [
        "📱 **Contacto para padres:**\n\n• **👩‍🏫 Líder:** Natalia Negreti\n• **📞 Teléfono:** 3518 18-1770\n• **📍 Ubicación:** AUDITORIO MAYOR - AV. TILLARD 1318 B° COFICO\n\nPueden llamar para cualquier consulta sobre el ministerio.",
        "📞 **Información de contacto:**\n\n• **Consultas:** 3518 18-1770 (Natalia Negreti)\n• **Dirección:** Av. Tillard 1318, B° Cofico"
    ],

    // Líder / Maestras
    lider: [
        "👩‍💼 **Nuestra líder:**\n\n**NATALIA NEGRETI**\n\n• **Experiencia:** +5 años en ministerio infantil\n• **Formación:** Educación cristiana infantil\n• **Contacto:** 3518 18-1770\n• **Disponible:** Para hablar con padres antes o después de las reuniones",
        "👩‍🏫 **Equipo de maestras:**\n\n• Capacitadas en educación infantil\n• Certificadas en primeros auxilios\n• Vocación de servicio y amor por los niños\n• Lideradas por Natalia Negreti"
    ],

    // Cómo participar (sin inscripción formal)
    participar: [
        "👶 **¿CÓMO PARTICIPAN LOS NIÑOS?**\n\nEs muy sencillo:\n\n1️⃣ **LLEGA** con tu hijo a cualquiera de nuestras reuniones:\n   • Domingos 9:00 AM o 18:00 PM\n   • Miércoles 18:00 HS\n\n2️⃣ **ACOMPAÑA** a tu hijo al sector de El Relevo\n\n3️⃣ **LAS MAESTRAS** lo recibirán y lo integrarán al grupo correspondiente\n\n4️⃣ **RETÍRALO** al finalizar la reunión\n\n¡No necesitas inscripción previa! Solo llegar y participar.\n\n📞 Consultas al 3518 18-1770",
        "🎊 **¡TUS HIJOS PUEDEN PARTICIPAR!**\n\nSimplemente ven con ellos en nuestros horarios:\n• **Domingos:** 9:00 AM o 18:00 PM\n• **Miércoles:** 18:00 HS\n\nNuestras maestras los recibirán con mucho amor.\n\n📍 Auditorio Mayor - Av. Tillard 1318"
    ],

    // Edades / Grupos (hasta 10 años)
    edades: [
        "👧👦 **GRUPOS POR EDADES (HASTA 10 AÑOS):**\n\n• **3-4 años:** Maternal\n• **5-6 años:** Principiantes\n• **7-8 años:** Intermedios\n• **9-10 años:** Avanzados\n\nCada grupo tiene actividades apropiadas para su edad y desarrollo.",
        "📊 **Niveles:**\n\n• **Preescolares:** 3-4 años\n• **Infantiles:** 5-8 años\n• **Pre-adolescentes:** 9-10 años\n\n¡Todos son bienvenidos!"
    ],

    // Actividades
    actividades: [
        "🎨 **ACTIVIDADES PARA NIÑOS:**\n\n• **📖 Enseñanza bíblica** por edades\n• **🎵 Canciones** con movimientos\n• **🎭 Teatro bíblico** y dramatizaciones\n• **🎨 Manualidades** creativas\n• **🏆 Juegos** educativos\n• **📚 Historias** interactivas\n\n¡Diversión y aprendizaje garantizados!",
        "🎪 **Qué hacemos en El Relevo:**\n\n• Clases bíblicas dinámicas\n• Alabanza infantil con gestos\n• Manualidades que enseñan\n• Juegos con propósito\n• Amistades en Cristo"
    ],

    // Seguridad
    seguridad: [
        "🛡️ **MEDIDAS DE SEGURIDAD:**\n\n• **Maestras capacitadas** en educación infantil\n• **Certificación** en primeros auxilios\n• **Ambiente seguro** y supervisado permanentemente\n• **Control** durante toda la reunión\n• **Protocolos** para emergencias\n• **Espacio adecuado** para cada edad\n\n¡La seguridad de tus hijos es nuestra prioridad!",
        "🔒 **Compromiso con la seguridad:**\n\n• Personal calificado\n• Supervisión constante\n• Protocolos de emergencia\n• Ambiente preparado"
    ],

    // Ubicación
    ubicacion: [
        "📍 **NUESTRA UBICACIÓN:**\n\n**Auditorio Mayor Misionera de Poder**\nAv. Tillard 1318, Barrio Cofico, Córdoba\n\n🅿️ Estacionamiento disponible\n♿ Acceso para personas con movilidad reducida\n\n¡Te esperamos!",
        "🗺️ **Cómo llegar:**\n\nDirección: Av. Tillard 1318, B° Cofico\n\nReferencia: Auditorio Mayor (fácil acceso)"
    ],

    // Padres / Preguntas frecuentes
    padres: [
        "👨‍👩‍👧‍👦 **INFORMACIÓN PARA PADRES:**\n\n• **¿Qué necesitan los niños?** Ropa cómoda, Biblia si tienen, muchas ganas de aprender\n• **¿Hay costo?** Es completamente gratuito\n• **¿Puedo quedarme?** Pueden dejarlos con confianza\n• **¿Hasta qué edad?** Hasta los 10 años\n• **¿Cómo me entero de novedades?** Pregunta a Natalia Negreti al 3518 18-1770\n\n📞 Contacto: 3518 18-1770",
        "💡 **Tips para padres:**\n\n• Lleguen 10 minutos antes\n• Acompañen a sus hijos al sector\n• Comuniquen alergias o necesidades\n• Pregunten lo que necesiten\n• Disfruten sabiendo que están en buenas manos"
    ],

    // Versículos
    versiculos: [
        "📖 **Versículo base:**\n\n\"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.\" - Proverbios 22:6",
        "✨ **Palabra para los niños:**\n\n\"Dejen que los niños vengan a mí, y no se lo impidan, porque el reino de los cielos es de quienes son como ellos.\" - Mateo 19:14"
    ],

    // Eventos especiales (actualmente no hay)
    eventos: [
        "📅 **Eventos especiales:**\n\nActualmente no hay eventos especiales programados. Los niños participan en las reuniones regulares:\n• Domingos 9:00 AM y 18:00 PM\n• Miércoles 18:00 HS\n\nPróximamente anunciaremos actividades especiales.\n\n📞 Consultas al 3518 18-1770",
        "🎉 **Próximos eventos:**\n\nPor el momento no tenemos eventos especiales. Los esperamos en nuestros horarios habituales de escuelita bíblica."
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

function initializeRelevoChatbot() {
    if (relevoChatbotInitialized) return;
    
    console.log('👶 Chatbot El Relevo - Inicializando versión mejorada...');
    
    isMobile = window.innerWidth <= 768;
    
    createRelevoChatbotElements();
    setupRelevoChatbotEvents();
    setupRelevoPageButtons();
    
    relevoChatbotInitialized = true;
    console.log('✅ Chatbot El Relevo listo');
}

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
                <div class="relevo-bot-message">👶 ¡Hola, papá/mamá! Soy tu asistente de El Relevo.</div>
                <div class="relevo-bot-message">Estoy aquí para ayudarte con información sobre nuestro ministerio de niños.</div>
                <div class="relevo-bot-message">Puedes preguntarme sobre: horarios, edades, actividades, cómo participar y más.</div>
            </div>
            
            <!-- Indicador de escritura -->
            <div id="relevo-typing-indicator" class="relevo-typing-hidden">
                <span></span><span></span><span></span>
            </div>
            
            <!-- Input -->
            <div id="relevo-chatbot-input">
                <input type="text" id="relevo-user-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
                <button id="relevo-send-btn" title="Enviar">➤</button>
            </div>
            
            <!-- Botones rápidos -->
            <div id="relevo-quick-questions">
                <button class="relevo-quick-btn" data-question="¿Cuáles son los horarios?">🕒 Horarios</button>
                <button class="relevo-quick-btn" data-question="¿Cómo participan los niños?">👶 Participar</button>
                <button class="relevo-quick-btn" data-question="¿Qué edades aceptan?">📊 Edades</button>
                <button class="relevo-quick-btn" data-question="¿Quién es la líder?">👩‍🏫 Líder</button>
            </div>
        </div>

        <!-- Botón flotante -->
        <button id="relevo-chatbot-toggle" title="Abrir chat de El Relevo">👶</button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    addRelevoChatbotStyles();
}

// Estilos con typing indicator
function addRelevoChatbotStyles() {
    const styles = `
        <style>
            :root {
                --rosa-primario: #FF69B4;
                --rosa-secundario: #FFB6C1;
                --salmon: #FFA07A;
                --coral: #FF7F50;
                --amarillo: #FFD700;
                --negro: #000000;
                --blanco: #FFFFFF;
            }
            
            #relevo-chatbot-container {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 350px;
                max-width: 90vw;
                height: 500px;
                max-height: 70vh;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.97), rgba(0, 0, 0, 0.95));
                border: 3px solid var(--rosa-primario);
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(255, 105, 180, 0.5);
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                backdrop-filter: blur(10px);
                font-family: 'Nunito', sans-serif;
            }
            
            #relevo-chatbot-header {
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon));
                color: var(--blanco);
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Fredoka One', cursive;
                font-size: 1.2rem;
                border-bottom: 2px solid var(--amarillo);
            }
            
            #relevo-close-chatbot {
                background: transparent;
                border: none;
                color: var(--blanco);
                font-size: 2rem;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            
            #relevo-close-chatbot:hover {
                transform: rotate(90deg);
                color: var(--amarillo);
            }
            
            #relevo-chatbot-messages {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;
                background: linear-gradient(rgba(255, 105, 180, 0.05), rgba(255, 182, 193, 0.03));
                scroll-behavior: smooth;
            }
            
            /* Typing Indicator */
            #relevo-typing-indicator {
                padding: 10px 20px;
                display: flex;
                gap: 5px;
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(255, 182, 193, 0.1));
                border: 1px solid rgba(255, 182, 193, 0.4);
                border-radius: 15px 15px 15px 5px;
                margin: 0 20px 10px 20px;
                width: fit-content;
                transition: all 0.3s ease;
            }
            
            #relevo-typing-indicator span {
                width: 8px;
                height: 8px;
                background: var(--amarillo);
                border-radius: 50%;
                display: inline-block;
                animation: relevo-typing 1.4s infinite ease-in-out both;
            }
            
            #relevo-typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
            #relevo-typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
            
            @keyframes relevo-typing {
                0%, 80%, 100% { transform: scale(0.6); opacity: 0.6; }
                40% { transform: scale(1); opacity: 1; }
            }
            
            .relevo-typing-hidden {
                display: none !important;
            }
            
            /* Mensajes */
            .relevo-bot-message, .relevo-user-message {
                padding: 15px;
                font-size: 0.95rem;
                line-height: 1.5;
                max-width: 85%;
                word-wrap: break-word;
                overflow-wrap: break-word;
                white-space: pre-line;
                animation: relevo-message-appear 0.3s ease;
            }
            
            @keyframes relevo-message-appear {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .relevo-bot-message {
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(255, 182, 193, 0.1));
                border: 1px solid rgba(255, 182, 193, 0.4);
                border-radius: 15px 15px 15px 5px;
                color: var(--blanco);
                align-self: flex-start;
                position: relative;
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
            }
            
            .relevo-user-message {
                background: linear-gradient(135deg, rgba(255, 182, 193, 0.2), rgba(255, 160, 122, 0.25));
                border: 1px solid rgba(255, 182, 193, 0.4);
                border-radius: 15px 15px 5px 15px;
                color: var(--blanco);
                align-self: flex-end;
                text-align: right;
            }
            
            #relevo-chatbot-input {
                padding: 15px;
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
                font-size: 16px;
            }
            
            #relevo-user-input:focus {
                outline: none;
                border-color: var(--amarillo);
                background: rgba(0, 0, 0, 0.4);
            }
            
            #relevo-send-btn {
                padding: 12px 25px;
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon));
                color: var(--blanco);
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-family: 'Fredoka One', cursive;
                font-size: 1rem;
                transition: all 0.3s ease;
                min-width: 60px;
            }
            
            #relevo-send-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(255, 105, 180, 0.6);
            }
            
            #relevo-quick-questions {
                padding: 15px;
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
                min-height: 44px;
            }
            
            .relevo-quick-btn:hover {
                background: linear-gradient(135deg, rgba(255, 182, 193, 0.5), rgba(255, 105, 180, 0.6));
                transform: translateY(-2px);
                color: var(--blanco);
            }
            
            #relevo-chatbot-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon));
                color: var(--blanco);
                border: 3px solid var(--amarillo);
                border-radius: 50%;
                width: 70px;
                height: 70px;
                font-size: 2.5rem;
                cursor: pointer;
                box-shadow: 0 10px 25px rgba(255, 105, 180, 0.6);
                z-index: 9999;
                transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Fredoka One', cursive;
                animation: relevo-pulse 2s infinite;
            }
            
            @keyframes relevo-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            #relevo-chatbot-toggle:hover {
                transform: scale(1.15) rotate(15deg);
                box-shadow: 0 15px 35px rgba(255, 105, 180, 0.8);
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar {
                width: 6px;
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 105, 180, 0.1);
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(var(--rosa-primario), var(--rosa-secundario));
                border-radius: 10px;
            }
            
            /* Botones de la página */
            #join-button-relevo, #contact-chatbot-relevo {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 18px 50px;
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon));
                color: var(--blanco);
                border: none;
                border-radius: 50px;
                font-family: 'Fredoka One', cursive;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.4s ease;
                box-shadow: 0 5px 20px rgba(255, 105, 180, 0.5);
                text-transform: uppercase;
                letter-spacing: 1px;
                min-height: 55px;
            }
            
            #join-button-relevo:hover, #contact-chatbot-relevo:hover {
                transform: translateY(-5px) scale(1.05);
                box-shadow: 0 8px 25px rgba(255, 105, 180, 0.7);
            }
            
            #join-button-relevo.secondary, #contact-chatbot-relevo.secondary {
                background: transparent;
                border: 3px solid var(--rosa-secundario);
                color: var(--rosa-claro);
            }
            
            #join-button-relevo.secondary:hover, #contact-chatbot-relevo.secondary:hover {
                background: rgba(255, 182, 193, 0.1);
                color: var(--blanco);
            }
            
            @media (max-width: 768px) {
                #relevo-chatbot-container {
                    width: 95vw;
                    right: 2.5vw;
                    bottom: 80px;
                    height: 60vh;
                }
                
                #relevo-chatbot-toggle {
                    width: 60px;
                    height: 60px;
                    font-size: 2rem;
                }
                
                #join-button-relevo, #contact-chatbot-relevo {
                    padding: 15px 30px;
                    font-size: 1rem;
                    width: 100%;
                    max-width: 300px;
                    margin: 10px auto;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

function setupRelevoChatbotEvents() {
    const toggleBtn = document.getElementById('relevo-chatbot-toggle');
    const closeBtn = document.getElementById('relevo-close-chatbot');
    const sendBtn = document.getElementById('relevo-send-btn');
    const userInput = document.getElementById('relevo-user-input');
    const quickBtns = document.querySelectorAll('.relevo-quick-btn');
    const chatbotContainer = document.getElementById('relevo-chatbot-container');
    
    if (!toggleBtn || !chatbotContainer) return;
    
    toggleBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'flex';
        userInput?.focus();
        
        toggleBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            toggleBtn.style.transform = '';
        }, 200);
    });
    
    closeBtn.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });
    
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendRelevoMessage();
    });
    
    sendBtn.addEventListener('click', sendRelevoMessage);
    
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.getAttribute('data-question');
            userInput.value = question;
            sendRelevoMessage();
        });
    });
}

function setupRelevoPageButtons() {
    console.log('🔍 Configurando botones de El Relevo...');
    
    const joinButton = document.getElementById('join-button-relevo');
    const contactButton = document.getElementById('contact-chatbot-relevo');
    
    if (joinButton) {
        joinButton.addEventListener('click', (e) => {
            e.preventDefault();
            openRelevoChatbotWithMessage(
                "👶 **¡QUÉ ALEGRÍA QUE QUIERAS QUE TUS HIJOS PARTICIPEN!**\n\nTe cuento cómo pueden sumarse a El Relevo:",
                'participar'
            );
        });
    }
    
    if (contactButton) {
        contactButton.addEventListener('click', (e) => {
            e.preventDefault();
            openRelevoChatbotWithMessage(
                "👨‍👩‍👧‍👦 **¡HOLA, PAPÁ/MAMÁ!**\n\nEstoy aquí para ayudarte con toda la información que necesitas sobre nuestro ministerio de niños:",
                'padres'
            );
        });
    }
    
    console.log('✅ Botones configurados');
}

// ======================================================
// FUNCIONES DEL CHAT
// ======================================================

function sendRelevoMessage() {
    const userInput = document.getElementById('relevo-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addRelevoMessage(message, 'user');
    userInput.value = '';
    
    showRelevoTyping();
    
    const thinkTime = Math.min(500 + message.length * 10, 1500);
    
    setTimeout(() => {
        hideRelevoTyping();
        const response = getRelevoResponse(message);
        addRelevoMessage(response, 'bot');
    }, thinkTime);
}

function showRelevoTyping() {
    const indicator = document.getElementById('relevo-typing-indicator');
    if (indicator) {
        indicator.classList.remove('relevo-typing-hidden');
        setTimeout(() => {
            indicator.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

function hideRelevoTyping() {
    const indicator = document.getElementById('relevo-typing-indicator');
    if (indicator) {
        indicator.classList.add('relevo-typing-hidden');
    }
}

function addRelevoMessage(text, sender) {
    const messagesContainer = document.getElementById('relevo-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'relevo-bot-message' : 'relevo-user-message';
    
    // Procesar texto - SOLO HTML SEGURO
    let processedText = text;
    
    // Convertir URLs en enlaces clickeables
    processedText = processedText.replace(/(https?:\/\/[^\s]+)/g, 
        '<a href="$1" target="_blank" style="color: #FFD700; text-decoration: underline;">$1</a>');
    
    // Convertir el número específico 3518 18-1770 a enlace clickeable (SIN MOSTRAR STYLE)
    processedText = processedText.replace(/3518\s*18-1770/g, 
        '<a href="tel:3518181770" style="color: #FFD700; text-decoration: underline;">3518 18-1770</a>');
    
    // Convertir otros teléfonos a enlaces
    processedText = processedText.replace(/(\+?\d[\d\s\-\(\)]{8,}\d)/g, function(match) {
        // No procesar si ya es parte de un enlace
        if (match.includes('3518 18-1770')) return match;
        const cleanPhone = match.replace(/[\s\-\(\)]/g, '');
        return `<a href="tel:${cleanPhone}" style="color: #FFD700; text-decoration: underline;">${match}</a>`;
    });
    
    messageDiv.innerHTML = processedText;
    messagesContainer.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// ======================================================
// MOTOR DE RESPUESTAS INTELIGENTE
// ======================================================

function getRelevoResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Horarios
    if (/(horario|horarios|cuándo|cuando|días|dias|domingo|miércoles|reuniones)/i.test(lowerMessage)) {
        return randomRelevoResponse('horarios');
    }
    
    // Participación (sin inscripción)
    if (/(participar|participan|asistir|venir|llevar|dejar|qué hago|como hago|como es)/i.test(lowerMessage)) {
        return randomRelevoResponse('participar');
    }
    
    // Edades / Grupos
    if (/(edades|edad|grupos|niveles|años|años|hasta)/i.test(lowerMessage)) {
        return randomRelevoResponse('edades');
    }
    
    // Eventos especiales
    if (/(eventos|próximos|proximos|especial|actividades especiales|campamento)/i.test(lowerMessage)) {
        return randomRelevoResponse('eventos');
    }
    
    // Contacto
    if (/(contacto|contactar|teléfono|telefono|celular|llamar|whatsapp|wp|consultas|3518)/i.test(lowerMessage)) {
        return randomRelevoResponse('contacto');
    }
    
    // Líder / Maestras
    if (/(líder|lider|maestra|maestras|natalia|negreti|profesora|quien)/i.test(lowerMessage)) {
        return randomRelevoResponse('lider');
    }
    
    // Actividades
    if (/(actividades|qué hacen|que hacen|aprenden|enseñanza|manualidades|canciones|juegos)/i.test(lowerMessage)) {
        return randomRelevoResponse('actividades');
    }
    
    // Seguridad
    if (/(seguridad|protección|cuidado|supervisión|protocolo|confianza)/i.test(lowerMessage)) {
        return randomRelevoResponse('seguridad');
    }
    
    // Ubicación
    if (/(dónde|donde|ubicación|ubicacion|lugar|dirección|direccion)/i.test(lowerMessage)) {
        return randomRelevoResponse('ubicacion');
    }
    
    // Padres / Preguntas frecuentes
    if (/(padres|papá|mamá|familia|preguntas|dudas)/i.test(lowerMessage)) {
        return randomRelevoResponse('padres');
    }
    
    // Versículos
    if (/(versículo|versiculo|biblia|escritura|proverbios|mateo|palabra)/i.test(lowerMessage)) {
        return randomRelevoResponse('versiculos');
    }
    
    // Saludos
    if (/(hola|buenos días|buenas tardes|buenas noches|saludos|buenas)/i.test(lowerMessage)) {
        return "👶 ¡Hola, papá/mamá! Bendiciones. ¿En qué puedo ayudarte con información sobre El Relevo?";
    }
    
    // Gracias
    if (/(gracias|thank|agradezco|graciass)/i.test(lowerMessage)) {
        return "👶 ¡De nada! Es un privilegio servir a las familias. ¿Necesitas algo más?";
    }
    
    // Respuesta por defecto
    const defaultResponses = [
        "👶 Perdona, no entendí completamente. ¿Podrías ser más específico? Puedo ayudarte con horarios, cómo participan los niños, edades, actividades o información para padres.",
        "Disculpa, no reconozco esa consulta. ¿Te interesaría saber sobre:\n• Horarios de El Relevo\n• Cómo participan los niños\n• Edades y grupos\n• Información para padres",
        "No estoy seguro de haber entendido. Como asistente de El Relevo, puedo informarte sobre:\n🕒 Horarios\n👶 Participación\n📊 Edades (hasta 10 años)\n👩‍🏫 Maestras\n📍 Ubicación"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function randomRelevoResponse(category) {
    const responses = relevoChatbotKnowledge[category];
    if (!responses || responses.length === 0) {
        return "👶 Información no disponible. Por favor, contacta al 📞 3518 18-1770 y pregunta por Natalia Negreti.";
    }
    return responses[Math.floor(Math.random() * responses.length)];
}

function openRelevoChatbotWithMessage(message, type = 'general') {
    const chatbotContainer = document.getElementById('relevo-chatbot-container');
    const userInput = document.getElementById('relevo-user-input');
    
    if (!chatbotContainer) return;
    
    chatbotContainer.style.display = 'flex';
    
    const messagesContainer = document.getElementById('relevo-chatbot-messages');
    if (messagesContainer) {
        const children = Array.from(messagesContainer.children);
        if (children.length > 3) {
            for (let i = 3; i < children.length; i++) {
                messagesContainer.removeChild(children[i]);
            }
        }
    }
    
    setTimeout(() => {
        addRelevoMessage(message, 'bot');
        
        showRelevoTyping();
        
        setTimeout(() => {
            hideRelevoTyping();
            
            if (type === 'participar') {
                addRelevoMessage(randomRelevoResponse('participar'), 'bot');
            } else if (type === 'padres') {
                addRelevoMessage(randomRelevoResponse('padres'), 'bot');
            } else {
                addRelevoMessage("¿En qué más puedo ayudarte?", 'bot');
            }
        }, 1200);
    }, 300);
    
    if (userInput) setTimeout(() => userInput.focus(), 500);
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

window.addEventListener('load', () => setTimeout(initializeRelevoChatbot, 800));
document.addEventListener('DOMContentLoaded', () => setTimeout(initializeRelevoChatbot, 1200));

// Funciones públicas
window.openRelevoChatbotWithCustomMessage = openRelevoChatbotWithMessage;
window.openCustomRelevoChatbot = openRelevoChatbotWithMessage;

console.log('👶 Chatbot El Relevo - Versión mejorada cargada');