// ======================================================
// CHATBOT PARA ESCUELA MARANATHA
// Ministerio de Músicos - Misionera de Poder
// ======================================================

// Base de conocimiento específica para Músicos
const maranathaChatbotKnowledge = {
    "horarios": [
        "🕐 **Horarios de Escuela Maranatha:**\n• **Clases semanales:** Sin información\n• **Ubicación:** AV. TILLARD 1318 B° COFICO"
    ],
    
    "contacto": [
        "📱 **Contacto directo:**\n🎵 **Directores:** Aixa Castelli y Gamaliel Paz\n📞 **Inscripciones:** +54 9 3512 476433\n📍 **Ubicación:** AV. TILLARD 1318 B° COFICO\n🎵 **Especialidad:** Formación de adoradores de excelencia"
    ],
    
    "instrumentos": [
        "🎵 **INSTRUMENTOS DISPONIBLES:**\n\n• **🎹 PIANO:** Técnica clásica y contemporánea\n• **🎸 GUITARRA:** Acústica y eléctrica\n• **🎸 BAJO:** Grooves y fundamentos\n• **🥁 BATERÍA:** Ritmo y dinámica\n• **🎤 CANTO:** Técnica vocal y armonías"
    ],
    
    "inscripciones": [
        "📝 **INSCRIPCIONES ESCUELA MARANATHA**\n\n*Actualmente las inscripciones están en proceso de apertura.*\n\n**Para más información:**\n📞 **Teléfono:** +54 9 3512 476433\n👥 **Directores:** Aixa Castelli y Gamaliel Paz\n📍 **Consultas presenciales:** AV. TILLARD 1318"
    ],
    
    "unirse": [
        "🎵 **¡BIENVENIDO/A A MARANATHA!**\n\n**Para unirte como estudiante:**\n1. Contacta a los directores\n2. Teléfono: +54 9 3512 476433\n3. Consulta disponibilidad de cupos\n4. Asiste a una entrevista inicial\n5. Comienza tu formación musical\n\n**Para unirte como músico:**\n• Participa en los ensambles\n• Desarrolla tu ministerio\n• Únete a la comunidad"
    ],
    
    "quiero ser adorador": [
        "🎵 **¡TU LLAMADO ES SONORO!**\n\n**Para comenzar:** +54 9 3512 476433"
    ],
    
    "clases": [
        "📚 **NUESTRO PROGRAMA:**\n• **Teoría musical** fundamental y aplicada\n• **Técnica instrumental** especializada\n• **Armonía** y composición\n• **Improvisación** en adoración\n• **Tecnología musical** básica\n• **Desarrollo espiritual** del adorador\n• **Práctica en ensamble**"
    ],
    
    "directores": [
        "👥 **NUESTRO EQUIPO DIRECTIVO:**\n\n• **Aixa Castelli** **Gamaliel Paz** - Director\n• **Profesores** especializados por instrumento\n• **Todos comprometidos** con tu crecimiento\n• **Contacto:** +54 9 3512 476433"
    ],
    
    "vision": [
        "🎯 **NUESTRA VISIÓN SONORA:**\n\nFormar adoradores que no solo tocan bien, sino que comprendan el peso de la gloria que llevan. Sacerdotes sonoros que ministran primero al corazón de Dios."
    ],
    
    "costo": [
        "💰 **INVERSIÓN EN TU FORMACIÓN:**\n\n*Para información específica sobre costos:*\n📞 **Contacta directamente:** +54 9 3512 476433\n\n**Incluye:**\n• Materiales de estudio\n• Acceso a instrumentos\n• Clases personalizadas\n• Certificación al finalizar"
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
    
    // Detectar si es móvil
    checkMobileDevice();
    
    // Crear elementos del DOM
    createMaranathaChatbotElements();
    
    // Configurar eventos
    setupMaranathaChatbotEvents();
    
    // Configurar botones de la página
    setupMaranathaPageButtons();
    
    maranathaChatbotInitialized = true;
    console.log('✅ Chatbot Escuela Maranatha listo');
}

// Detectar dispositivo móvil
function checkMobileDevice() {
    isMobile = window.innerWidth <= 768;
    
    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', () => {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768;
        
        // Si cambió de móvil a escritorio o viceversa
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
        // Ajustes para móvil
        chatbotContainer.style.width = '95vw';
        chatbotContainer.style.right = '2.5vw';
        chatbotContainer.style.left = '2.5vw';
        chatbotContainer.style.bottom = '70px';
        chatbotContainer.style.transform = 'rotate(0deg)';
        chatbotContainer.style.height = '70vh';
        
        toggleBtn.style.width = '55px';
        toggleBtn.style.height = '55px';
        toggleBtn.style.fontSize = '1.5rem';
        toggleBtn.style.bottom = '15px';
        toggleBtn.style.right = '15px';
        
        // Reducir animaciones para mejor rendimiento
        removeMusicNotesDecorations();
    } else {
        // Restaurar valores originales para escritorio
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
    const chatbotHTML = `
        <!-- Chatbot Container -->
        <div id="maranatha-chatbot-container" style="display: none;">
            <!-- Header -->
            <div id="maranatha-chatbot-header">
                <h4>🎵 ESCUELA MARANATHA</h4>
                <button id="maranatha-close-chatbot" title="Cerrar">×</button>
            </div>
            
            <!-- Mensajes -->
            <div id="maranatha-chatbot-messages">
                <div class="maranatha-bot-message">🎶 ¡Hola! Soy tu asistente de Escuela Maranatha.</div>
                <div class="maranatha-bot-message">Estoy aquí para ayudarte con información sobre nuestra escuela de música y adoración.</div>
                <div class="maranatha-bot-message">Pregúntame sobre: instrumentos, inscripciones, directores, horarios, etc.</div>
            </div>
            
            <!-- Input -->
            <div id="maranatha-chatbot-input">
                <input type="text" id="maranatha-user-input" placeholder="Escribe tu pregunta musical..." autocomplete="off">
                <button id="maranatha-send-btn" title="Enviar">🎶</button>
            </div>
            
            <!-- Botones rápidos -->
            <div id="maranatha-quick-questions">
                <button class="maranatha-quick-btn" data-question="¿Qué instrumentos enseñan?">🎵 Instrumentos</button>
                <button class="maranatha-quick-btn" data-question="¿Hay inscripciones abiertas?">📝 Inscripciones</button>
                <button class="maranatha-quick-btn" data-question="¿Quiénes son los directores?">👥 Directores</button>
            </div>
        </div>

        <!-- Botón flotante - SIEMPRE VISIBLE -->
        <button id="maranatha-chatbot-toggle" title="Chat Escuela Maranatha">🎵</button>
    `;
    
    // Insertar en el body
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Aplicar estilos
    addMaranathaChatbotStyles();
    
    // Ajustar para móvil si es necesario
    setTimeout(() => {
        adjustChatbotForMobile();
    }, 100);
}

// Añadir estilos CSS para el chatbot
function addMaranathaChatbotStyles() {
    const styles = `
        <style>
            /* Variables de colores de la página */
            :root {
                --paper-white: #F8F5F0;
                --newsprint: #E8E3D8;
                --black-ink: #121212;
                --gold-vibrant: #FFD000;
                --gold-dark: #E6B400;
                --accent-red: #C41E3A;
                --grid-yellow: #FFF9C4;
            }
            
            /* Chatbot Container - Estilo Partitura */
            #maranatha-chatbot-container {
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 340px;
                max-width: 90vw;
                height: 480px;
                max-height: 65vh;
                background: var(--paper-white);
                border: 3px solid var(--black-ink);
                border-radius: 0;
                box-shadow: 
                    8px 8px 0 var(--gold-vibrant),
                    16px 16px 0 var(--accent-red),
                    inset 0 0 0 1px var(--grid-yellow);
                display: none;
                flex-direction: column;
                z-index: 10000;
                overflow: hidden;
                font-family: 'Roboto Condensed', sans-serif;
                transform: rotate(-1deg);
            }
            
            /* Header */
            #maranatha-chatbot-header {
                background: var(--black-ink);
                color: var(--gold-vibrant);
                padding: 12px 18px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Archivo Black', sans-serif;
                font-size: 1.2rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                border-bottom: 3px solid var(--accent-red);
                position: relative;
                overflow: hidden;
            }
            
            #maranatha-chatbot-header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 5px,
                    var(--gold-vibrant) 5px,
                    var(--gold-vibrant) 10px
                );
            }
            
            #maranatha-close-chatbot {
                background: var(--accent-red);
                border: 2px solid var(--gold-vibrant);
                color: var(--paper-white);
                font-size: 1.8rem;
                cursor: pointer;
                font-weight: bold;
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0;
                transition: all 0.2s ease;
                font-family: 'Anton', sans-serif;
                transform: rotate(0deg);
            }
            
            #maranatha-close-chatbot:hover {
                background: var(--gold-vibrant);
                color: var(--black-ink);
                transform: rotate(90deg) scale(1.1);
                border-color: var(--black-ink);
            }
            
            /* Mensajes */
            #maranatha-chatbot-messages {
                flex: 1;
                padding: 15px;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                gap: 12px;
                background: 
                    linear-gradient(var(--grid-yellow) 1px, transparent 1px),
                    linear-gradient(90deg, var(--grid-yellow) 1px, transparent 1px);
                background-size: 20px 20px;
                background-position: -10px -10px;
            }
            
            .maranatha-bot-message {
                background: var(--paper-white);
                border: 2px solid var(--black-ink);
                border-radius: 0;
                padding: 12px 15px;
                color: var(--black-ink);
                font-size: 0.9rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-start;
                position: relative;
                transform: rotate(-0.5deg);
                box-shadow: 3px 3px 0 var(--accent-red);
                font-family: 'Roboto Condensed', sans-serif;
                word-break: break-word;
                overflow-wrap: break-word;
            }
            
            .maranatha-user-message {
                background: var(--gold-vibrant);
                border: 2px solid var(--black-ink);
                border-radius: 0;
                padding: 12px 15px;
                color: var(--black-ink);
                font-size: 0.9rem;
                line-height: 1.5;
                max-width: 85%;
                align-self: flex-end;
                text-align: right;
                transform: rotate(0.5deg);
                box-shadow: 3px 3px 0 var(--black-ink);
                font-family: 'Oswald', sans-serif;
                font-weight: 600;
                word-break: break-word;
                overflow-wrap: break-word;
            }
            
            /* Input */
            #maranatha-chatbot-input {
                padding: 12px;
                display: flex;
                gap: 8px;
                border-top: 3px solid var(--black-ink);
                background: var(--paper-white);
                position: relative;
                overflow: hidden;
            }
            
            #maranatha-chatbot-input::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: repeating-linear-gradient(
                    90deg,
                    var(--accent-red),
                    var(--accent-red) 2px,
                    transparent 2px,
                    transparent 4px
                );
            }
            
            #maranatha-user-input {
                flex: 1;
                padding: 10px 14px;
                border: 2px solid var(--black-ink);
                border-radius: 0;
                background: var(--paper-white);
                color: var(--black-ink);
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 0.95rem;
                transition: all 0.2s ease;
                transform: rotate(-0.5deg);
                min-width: 0;
            }
            
            #maranatha-user-input:focus {
                outline: none;
                border-color: var(--accent-red);
                transform: rotate(0deg);
                box-shadow: inset 0 0 0 2px var(--gold-vibrant);
            }
            
            #maranatha-send-btn {
                padding: 10px 20px;
                background: var(--accent-red);
                color: var(--paper-white);
                border: 2px solid var(--black-ink);
                border-radius: 0;
                cursor: pointer;
                font-family: 'Bebas Neue', sans-serif;
                font-weight: 600;
                font-size: 1.2rem;
                transition: all 0.2s ease;
                min-width: 50px;
                letter-spacing: 1px;
                transform: rotate(1deg);
                flex-shrink: 0;
            }
            
            #maranatha-send-btn:hover {
                background: var(--gold-vibrant);
                color: var(--black-ink);
                transform: rotate(0deg) scale(1.1);
                box-shadow: 3px 3px 0 var(--black-ink);
            }
            
            /* Botones rápidos */
            #maranatha-quick-questions {
                padding: 12px;
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                border-top: 3px dashed var(--accent-red);
                background: var(--paper-white);
            }
            
            .maranatha-quick-btn {
                padding: 8px 12px;
                background: var(--gold-vibrant);
                border: 2px solid var(--black-ink);
                border-radius: 0;
                color: var(--black-ink);
                cursor: pointer;
                font-size: 0.8rem;
                transition: all 0.2s ease;
                font-family: 'Bebas Neue', sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                font-weight: 600;
                transform: rotate(-0.5deg);
                flex: 1;
                min-width: 100px;
                text-align: center;
                word-break: break-word;
            }
            
            .maranatha-quick-btn:hover {
                background: var(--accent-red);
                color: var(--paper-white);
                border-color: var(--accent-red);
                transform: rotate(0deg) translateY(-2px);
                box-shadow: 3px 3px 0 var(--black-ink);
            }
            
            .maranatha-quick-btn:nth-child(even) {
                transform: rotate(0.5deg);
            }
            
            .maranatha-quick-btn:nth-child(even):hover {
                transform: rotate(0deg) translateY(-2px);
            }
            
            /* Botón flotante - Estilo sticker musical - SIEMPRE VISIBLE */
            #maranatha-chatbot-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--gold-vibrant);
                color: var(--black-ink);
                border: 3px solid var(--black-ink);
                border-radius: 0;
                width: 60px;
                height: 60px;
                font-size: 1.8rem;
                cursor: pointer;
                box-shadow: 
                    5px 5px 0 var(--accent-red),
                    10px 10px 0 var(--black-ink);
                z-index: 9999;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Bebas Neue', sans-serif;
                font-weight: 700;
                transform: rotate(-5deg);
                animation: bounceNote 2s infinite;
            }
            
            #maranatha-chatbot-toggle:hover {
                transform: rotate(0deg) scale(1.1);
                background: var(--accent-red);
                color: var(--paper-white);
                box-shadow: 
                    8px 8px 0 var(--gold-vibrant),
                    16px 16px 0 var(--black-ink);
            }
            
            #maranatha-chatbot-toggle:active {
                transform: scale(0.95);
            }
            
            @keyframes bounceNote {
                0%, 100% { transform: rotate(-5deg) translateY(0); }
                50% { transform: rotate(-5deg) translateY(-10px); }
            }
            
            /* Scrollbar personalizada */
            #maranatha-chatbot-messages::-webkit-scrollbar {
                width: 8px;
            }
            
            #maranatha-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 208, 0, 0.1);
                border: 1px solid var(--black-ink);
            }
            
            #maranatha-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(45deg, var(--accent-red), var(--gold-vibrant));
                border: 1px solid var(--black-ink);
            }
            
            #maranatha-chatbot-messages::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(45deg, var(--gold-vibrant), var(--accent-red));
            }
            
            /* ======================
               RESPONSIVE CHATBOT
               ====================== */
            
            /* Tabletas */
            @media (max-width: 1024px) {
                #maranatha-chatbot-container {
                    width: 380px;
                    max-width: 85vw;
                }
                
                .maranatha-bot-message,
                .maranatha-user-message {
                    font-size: 0.85rem;
                    padding: 10px 12px;
                }
            }
            
            /* Teléfonos */
            @media (max-width: 768px) {
                #maranatha-chatbot-container {
                    width: 95vw !important;
                    height: 70vh !important;
                    max-height: 80vh;
                    bottom: 70px !important;
                    right: 2.5vw !important;
                    left: 2.5vw !important;
                    transform: rotate(0deg) !important;
                    border-width: 2px;
                    box-shadow: 
                        5px 5px 0 var(--gold-vibrant),
                        10px 10px 0 var(--accent-red);
                }
                
                #maranatha-chatbot-toggle {
                    width: 55px;
                    height: 55px;
                    font-size: 1.6rem;
                    bottom: 15px;
                    right: 15px;
                    animation: bounceNoteMobile 2s infinite;
                }
                
                @keyframes bounceNoteMobile {
                    0%, 100% { transform: rotate(-5deg) translateY(0); }
                    50% { transform: rotate(-5deg) translateY(-5px); }
                }
                
                #maranatha-chatbot-header {
                    padding: 10px 15px;
                    font-size: 1rem;
                }
                
                #maranatha-close-chatbot {
                    width: 24px;
                    height: 24px;
                    font-size: 1.5rem;
                }
                
                #maranatha-chatbot-messages {
                    padding: 10px;
                    gap: 8px;
                }
                
                .maranatha-bot-message,
                .maranatha-user-message {
                    max-width: 90%;
                    font-size: 0.8rem;
                    padding: 8px 10px;
                    transform: rotate(0deg) !important;
                    margin: 2px 0;
                }
                
                #maranatha-chatbot-input {
                    padding: 10px;
                }
                
                #maranatha-user-input {
                    padding: 8px 12px;
                    font-size: 0.85rem;
                    transform: rotate(0deg);
                }
                
                #maranatha-send-btn {
                    padding: 8px 15px;
                    font-size: 1rem;
                    min-width: 45px;
                    transform: rotate(0deg);
                }
                
                #maranatha-quick-questions {
                    padding: 10px;
                    gap: 6px;
                }
                
                .maranatha-quick-btn {
                    padding: 6px 8px;
                    font-size: 0.7rem;
                    min-width: 80px;
                    transform: rotate(0deg) !important;
                    flex: 1 1 calc(33.333% - 6px);
                }
                
                .note-decoration {
                    display: none !important;
                }
            }
            
            /* Teléfonos pequeños */
            @media (max-width: 480px) {
                #maranatha-chatbot-container {
                    height: 75vh !important;
                    max-height: 85vh;
                    bottom: 65px !important;
                }
                
                #maranatha-chatbot-toggle {
                    width: 50px;
                    height: 50px;
                    font-size: 1.4rem;
                    bottom: 10px;
                    right: 10px;
                }
                
                #maranatha-chatbot-header h4 {
                    font-size: 0.9rem;
                }
                
                .maranatha-quick-btn {
                    flex: 1 1 100%;
                    margin-bottom: 4px;
                    font-size: 0.65rem;
                    padding: 5px;
                }
                
                #maranatha-quick-questions {
                    flex-direction: column;
                }
                
                .maranatha-bot-message,
                .maranatha-user-message {
                    font-size: 0.75rem;
                    padding: 6px 8px;
                    line-height: 1.4;
                }
                
                #maranatha-user-input {
                    font-size: 0.8rem;
                    padding: 6px 10px;
                }
                
                #maranatha-send-btn {
                    padding: 6px 12px;
                    font-size: 0.9rem;
                }
            }
            
            /* Pantallas muy pequeñas */
            @media (max-width: 360px) {
                #maranatha-chatbot-container {
                    width: 98vw !important;
                    right: 1vw !important;
                    left: 1vw !important;
                }
                
                #maranatha-chatbot-toggle {
                    width: 45px;
                    height: 45px;
                    font-size: 1.2rem;
                }
                
                .maranatha-bot-message,
                .maranatha-user-message {
                    font-size: 0.7rem;
                }
            }
            
            /* Orientación horizontal en móviles */
            @media (max-height: 500px) and (orientation: landscape) {
                #maranatha-chatbot-container {
                    height: 85vh !important;
                    max-height: 90vh;
                    bottom: 60px !important;
                }
                
                .maranatha-bot-message,
                .maranatha-user-message {
                    font-size: 0.7rem;
                    padding: 5px 8px;
                }
                
                #maranatha-quick-questions {
                    padding: 5px;
                }
                
                .maranatha-quick-btn {
                    padding: 4px 6px;
                    font-size: 0.6rem;
                }
            }
            
            /* Efectos de notas musicales */
            .note-decoration {
                position: absolute;
                font-size: 1.5rem;
                opacity: 0.3;
                animation: floatAround 15s infinite linear;
                pointer-events: none;
                z-index: -1;
            }
            
            @keyframes floatAround {
                0% {
                    transform: translate(0, 0) rotate(0deg);
                    opacity: 0.3;
                }
                25% {
                    transform: translate(50px, -30px) rotate(90deg);
                    opacity: 0.5;
                }
                50% {
                    transform: translate(-30px, 40px) rotate(180deg);
                    opacity: 0.3;
                }
                75% {
                    transform: translate(40px, 30px) rotate(270deg);
                    opacity: 0.5;
                }
                100% {
                    transform: translate(0, 0) rotate(360deg);
                    opacity: 0.3;
                }
            }
            
            .music-info-box {
                background: var(--paper-white);
                border: 2px dashed var(--accent-red);
                padding: 10px;
                margin-top: 10px;
                position: relative;
                transform: rotate(-0.5deg);
            }
            
            .music-info-box::before {
                content: '🎵';
                position: absolute;
                top: -10px;
                left: 10px;
                background: var(--paper-white);
                padding: 0 5px;
            }
            
            .info-item {
                margin: 8px 0;
                display: flex;
                align-items: flex-start;
                gap: 10px;
            }
            
            .info-icon {
                color: var(--accent-red);
                min-width: 25px;
                font-size: 1.2rem;
            }
            
            /* Efecto de escritura musical */
            .typing-indicator {
                display: flex;
                gap: 5px;
                padding: 10px;
                background: var(--paper-white);
                border: 2px solid var(--black-ink);
                transform: rotate(-0.5deg);
                width: fit-content;
            }
            
            .typing-note {
                width: 8px;
                height: 8px;
                background: var(--accent-red);
                animation: noteTyping 1.5s infinite ease-in-out;
                transform: rotate(45deg);
            }
            
            .typing-note:nth-child(2) { animation-delay: 0.2s; background: var(--gold-vibrant); }
            .typing-note:nth-child(3) { animation-delay: 0.4s; background: var(--black-ink); }
            
            @keyframes noteTyping {
                0%, 100% { 
                    opacity: 0.3; 
                    transform: rotate(45deg) scale(0.8); 
                }
                50% { 
                    opacity: 1; 
                    transform: rotate(45deg) scale(1.2); 
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Configurar eventos del chatbot - CORREGIDO: No se cierra con menú
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
        e.stopPropagation(); // IMPORTANTE: Evitar que el clic se propague
        
        chatbotContainer.style.display = 'flex';
        
        // Asegurar que esté bien posicionado en móvil
        if (isMobile) {
            chatbotContainer.style.transform = 'rotate(0deg)';
        }
        
        if (userInput) {
            setTimeout(() => {
                userInput.focus();
                if (isMobile && userInput.scrollIntoView) {
                    userInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
        
        // Efecto sutil
        this.style.transform = 'rotate(5deg) scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'rotate(5deg) scale(1)';
        }, 150);
        
        // Agregar notas decorativas solo en escritorio
        if (!isMobile) {
            addMusicNotesDecorations();
        }
    });
    
    // Cerrar chatbot solo con el botón de cerrar
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // IMPORTANTE: Evitar propagación
        chatbotContainer.style.display = 'none';
        removeMusicNotesDecorations();
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
    
    // Cerrar al hacer clic fuera - SOLO cuando no sea en elementos del menú
    document.addEventListener('click', function(e) {
        if (chatbotContainer && chatbotContainer.style.display === 'flex') {
            // Verificar elementos que NO deben cerrar el chatbot
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');
            
            const isClickOnMenuToggle = menuToggle && (e.target === menuToggle || menuToggle.contains(e.target));
            const isClickOnNavMenu = navMenu && (e.target === navMenu || navMenu.contains(e.target));
            const isClickOnChatbot = chatbotContainer.contains(e.target);
            const isClickOnChatbotToggle = toggleBtn && (e.target === toggleBtn || toggleBtn.contains(e.target));
            
            // Solo cerrar si se hace clic fuera del chatbot Y fuera de elementos del menú
            if (!isClickOnChatbot && 
                !isClickOnChatbotToggle && 
                !isClickOnMenuToggle && 
                !isClickOnNavMenu) {
                chatbotContainer.style.display = 'none';
                removeMusicNotesDecorations();
            }
        }
    });
    
    // Manejar teclado virtual en móviles
    if (isMobile) {
        window.addEventListener('resize', function() {
            if (document.activeElement === userInput) {
                setTimeout(() => {
                    const messagesContainer = document.getElementById('maranatha-chatbot-messages');
                    if (messagesContainer) {
                        messagesContainer.scrollTop = messagesContainer.scrollHeight;
                    }
                }, 300);
            }
        });
    }
}

// Configurar botones de la página
function setupMaranathaPageButtons() {
    console.log('🔍 Configurando botones de la página Escuela Maranatha...');
    
    // Botón "¡INSCRÍBETE AHORA!" del Hero
    const inscripcionBtn = document.querySelector('.musicos-hero .musicos-button');
    if (inscripcionBtn && inscripcionBtn.textContent.includes('INSCRÍBETE')) {
        inscripcionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🎵 Botón "¡INSCRÍBETE AHORA!" clickeado');
            openMaranathaChatbotWithCustomMessage(
                "📝 **¡INSCRIPCIONES ESCUELA MARANATHA!**\n\nVeo que estás interesado/a en formarte como adorador/a. Te ayudo con toda la información:",
                'inscripciones'
            );
        });
    }
    
    // Botón "¡QUIERO SER ADORADOR!"
    const serAdoradorBtn = document.getElementById('quiero-ser-adorador-btn');
    if (serAdoradorBtn) {
        serAdoradorBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('🎵 Botón "¡QUIERO SER ADORADOR!" clickeado');
            openMaranathaChatbotWithCustomMessage(
                "🎶 **¡TU LLAMADO ES SONORO!**\n\nExcelente decisión querer desarrollar tu ministerio musical. Te explico cómo funciona:",
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
    
    // Mostrar el chatbot
    chatbotContainer.style.display = 'flex';
    chatbotContainer.style.opacity = '0';
    
    if (isMobile) {
        chatbotContainer.style.transform = 'translateY(15px) scale(0.95)';
    } else {
        chatbotContainer.style.transform = 'translateY(15px) rotate(-5deg) scale(0.95)';
    }
    
    setTimeout(() => {
        chatbotContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        chatbotContainer.style.opacity = '1';
        
        if (isMobile) {
            chatbotContainer.style.transform = 'translateY(0) scale(1)';
        } else {
            chatbotContainer.style.transform = 'translateY(0) rotate(-1deg) scale(1)';
        }
    }, 10);
    
    // Limpiar mensajes anteriores
    const messagesContainer = document.getElementById('maranatha-chatbot-messages');
    if (messagesContainer) {
        const children = Array.from(messagesContainer.children);
        if (children.length > 3) {
            for (let i = 3; i < children.length; i++) {
                messagesContainer.removeChild(children[i]);
            }
        }
    }
    
    // Agregar notas decorativas solo en escritorio
    if (!isMobile) {
        addMusicNotesDecorations();
    }
    
    // Agregar mensaje personalizado
    setTimeout(() => {
        addMaranathaChatbotMessage(message, 'bot');
        
        // Agregar información adicional según el tipo
        setTimeout(() => {
            if (type === 'inscripciones') {
                addMaranathaChatbotMessage(
                    "**📋 PROCESO DE INSCRIPCIÓN:**\n\n" +
                    "**🎵 INSTITUCIONAL:**\n" +
                    "• **Directores:** Aixa Castelli y Gamaliel Paz\n" +
                    "• **Teléfono:** +54 9 3512 476433\n" +
                    "• **Ubicación:** AV. TILLARD 1318 B° COFICO\n\n" +
                    "**📞 PASOS A SEGUIR:**\n" +
                    "1. Contacta\n" +
                    "2. Formaliza tu inscripción\n\n" +
                    "**🎵 ¿NO TIENES INSTRUMENTO?**\n" +
                    "• La escuela provee para prácticas\n" +
                    "¿Alguna pregunta específica sobre el proceso?",
                    'bot'
                );
            } else if (type === 'quiero ser adorador') {
                addMaranathaChatbotMessage(
                    "**🎶 FORMACIÓN INTEGRAL:**\n\n" +
                    "**🎵 ÁREAS DE DESARROLLO:**\n" +
                    "• **Técnica instrumental/vocal**\n" +
                    "• **Teoría musical aplicada**\n" +
                    "• **Ministerio de alabanza**\n" +
                    "• **Composición y arreglos**\n" +
                    "• **Tecnología musical**\n" +
                    "• **Desarrollo espiritual**\n\n" +
                    "**🎵 INSTRUMENTOS DISPONIBLES:**\n" +
                    "• Piano / Teclado\n" +
                    "• Guitarra acústica/eléctrica\n" +
                    "• Bajo eléctrico\n" +
                    "• Batería y percusión\n" +
                    "• Voz y canto\n" +
                    "**📞 Para más info:** +54 9 3512 476433",
                    'bot'
                );
            } else if (type === 'instrumentos') {
                addMaranathaChatbotMessage(
                    "**🎵 NUESTRA OFERTA INSTRUMENTAL:**\n\n" +
                    "**🎹 PIANO/TECLADO:**\n" +
                    "• Técnica clásica y contemporánea\n" +
                    "• Acompañamiento en alabanza\n" +
                    "• Improvisación y arreglos\n\n" +
                    "**🎸 GUITARRA:**\n" +
                    "• Ritmos básicos a avanzados\n" +
                    "• Mantenimiento del instrumento\n\n" +
                    "**🎸 BAJO:**\n" +
                    "• Grooves fundamentales\n" +
                    "• Técnica de mano derecha\n" +
                    "• Rol en la banda de adoración\n\n" +
                    "**🥁 BATERÍA:**\n" +
                    "• Ritmo y dinámica\n" +
                    "• Rudimentos básicos\n" +
                    "• Sensibilidad en adoración\n\n" +
                    "**🎤 CANTO:**\n" +
                    "• Técnica vocal saludable\n" +
                    "• Armonías y afinación\n" +
                    "• Interpretación y expresión\n\n" +
                    "¿Te interesa algún instrumento en particular?",
                    'bot'
                );
            }
        }, 800);
    }, 300);
    
    // Enfocar el input
    if (userInput) {
        setTimeout(() => {
            userInput.focus();
            
            if (isMobile) {
                setTimeout(() => {
                    userInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500);
            }
        }, 500);
    }
}

// Enviar mensaje del usuario
function sendMaranathaChatbotMessage() {
    const userInput = document.getElementById('maranatha-user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    addMaranathaChatbotMessage(message, 'user');
    
    showMaranathaTypingIndicator();
    
    setTimeout(() => {
        removeMaranathaTypingIndicator();
        const response = getMaranathaChatbotResponse(message);
        addMaranathaChatbotMessage(response, 'bot');
    }, 800);
    
    userInput.value = '';
}

// Agregar mensaje al chat
function addMaranathaChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('maranatha-chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'maranatha-bot-message' : 'maranatha-user-message';
    
    const processedText = text.replace(/\n/g, '<br>');
    messageDiv.innerHTML = processedText;
    
    if (isMobile) {
        messageDiv.style.transform = 'rotate(0deg)';
    }
    
    messagesContainer.appendChild(messageDiv);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    if (sender === 'bot') {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.style.transition = 'opacity 0.4s ease';
            messageDiv.style.opacity = '1';
        }, 10);
    }
}

// Obtener respuesta del chatbot
function getMaranathaChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [keyword, responses] of Object.entries(maranathaChatbotKnowledge)) {
        if (lowerMessage.includes(keyword)) {
            const response = responses[Math.floor(Math.random() * responses.length)];
            return response;
        }
    }
    
    if (/(quiero ser adorador|quiero aprender música|aprender a tocar|estudiar música)/i.test(lowerMessage)) {
        return "🎵 **¡EMPEZAMOS TU FORMACIÓN!**\n\n" +
               "**Para comenzar:**\n" +
               "1. Contacta a los directores\n" +
               "2. Teléfono: +54 9 3512 476433\n" +
               "3. Agenda evaluación inicial\n" +
               "4. Define tu instrumento principal\n\n" +
               "**No necesitas:**\n" +
               "• Experiencia previa\n" +
               "• Tener instrumento propio\n" +
               "• Saber leer partituras\n\n" +
               "**Solo necesitas:**\n" +
               "• Ganas de aprender\n" +
               "• Compromiso semanal\n" +
               "• Corazón de adorador\n\n" +
               "📞 **Consultas:** +54 9 3512 476433";
    }
    
    if (/(aixa|gamaliel|castelli|paz|director|directora)/i.test(lowerMessage)) {
        return "👥 **DIRECTORES MARANATHA:**\n\n" +
               "• **Aixa Castelli**\n" +
               "• **Gamaliel Paz**\n" +
               "📞 **Contacto:** +54 9 3512 476433\n";
    }
    
    if (/(inscripciones|inscribirme|matricularme|iniciar clases)/i.test(lowerMessage)) {
        return "📝 **PROCESO DE INSCRIPCIÓN**\n\n" +
               "**Estado actual:** En proceso de apertura\n" +
               "**Pasos para iniciar:**\n" +
               "1. Contactar a directores\n" +
               "**Información importante:**\n" +
               "• Cupos limitados por instrumento\n" +
               "• Horarios rotativos\n" +
               "• Inversión accesible\n\n" +
               "📞 **Para contactarse** +54 9 3512 476433";
    }
    
    if (/(teléfono|telefono|celular|llamar|número|numero|whatsapp|wsap|contacto|email)/i.test(lowerMessage)) {
        return "📱 **CONTACTO DIRECTO:**\n\n" +
               "• **Teléfono/WhatsApp:** +54 9 3512 476433\n" +
               "• **Directores:** Aixa Castelli y Gamaliel Paz\n" +
               "• **Ubicación:** AV. TILLARD 1318 B° COFICO\n" +
               "• **Horarios de atención:** Consultar disponibilidad\n" +
               "• **Redes sociales:** @escuelammaranatha";
    }
    
    if (/(costo|precio|cuota|mensualidad|pago|inversión)/i.test(lowerMessage)) {
        return "💰 **INVERSIÓN EN FORMACIÓN:**\n\n" +
               "*Para información específica sobre costos:*\n" +
               "📞 **Contactar directamente:** +54 9 3512 476433\n\n" +
               "**La inversión incluye:**\n" +
               "• Clases personalizadas\n" +
               "• Material de estudio\n" +
               "• Uso de instrumentos\n" +
               "• Participación en ensambles\n" +
               "• Certificación final\n\n" +
               "**Opciones de pago disponibles**";
    }
    
    if (/(hola|buenos|buenas|saludos|hello|hey)/i.test(lowerMessage)) {
        const greetings = [
            "🎶 ¡Hola! ¿Listo para descubrir tu sonido? ¿En qué puedo ayudarte hoy?",
            "🎵 ¡Buenas! Asistente de Escuela Maranatha aquí. ¿Qué información musical necesitas?",
            "🎹 ¡Hola! ¿Interesado/a en formarte como adorador? Cuéntame cómo puedo asistirte."
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    if (/(gracias|thank|agradecido)/i.test(lowerMessage)) {
        return "🎵 **¡ES UN PLACER ACOMPAÑARTE!**\n\n" +
               "Tu deseo de desarrollar tu ministerio musical honra el corazón de Dios.\n\n" +
               "¿Hay algo más en lo que pueda ayudarte en tu camino musical?";
    }
    
    if (/(piano|teclado|acordeon|acordeón)/i.test(lowerMessage)) {
        return "🎹 **FORMACIÓN EN PIANO:**\n\n" +
               "• Niveles: Principiante a Avanzado\n" +
               "• Técnica: Mano derecha/izquierda\n" +
               "• Repertorio: Clásico y contemporáneo\n" +
               "• Acompañamiento: Alabanza y adoración\n" +
               "• Improvisación: Desarrollo creativo\n\n" +
               "📞 **Info específica:** +54 9 3512 476433";
    }
    
    if (/(guitarra|guitar|acústica|eléctrica)/i.test(lowerMessage)) {
        return "🎸 **FORMACIÓN EN GUITARRA:**\n\n" +
               "• Tipos: Acústica y eléctrica\n" +
               "• Técnicas: Púa y dedos\n" +
               "• Acordes: Básicos a complejos\n" +
               "• Ritmos: Diversidad de géneros\n" +
               "• Mantenimiento: Cuidado del instrumento\n\n" +
               "📞 **Info específica:** +54 9 3512 476433";
    }
    
    if (/(batería|bateria|percusón|tambor)/i.test(lowerMessage)) {
        return "🥁 **FORMACIÓN EN BATERÍA:**\n\n" +
               "• Rudimentos básicos\n" +
               "• Coordinación independiente\n" +
               "• Grooves fundamentales\n" +
               "• Dinámica y sensibilidad\n" +
               "• Rol en la banda de adoración\n\n" +
               "📞 **Info específica:** +54 9 3512 476433";
    }
    
    if (/(canto|voz|vocal|cantar)/i.test(lowerMessage)) {
        return "🎤 **FORMACIÓN VOCAL:**\n\n" +
               "• Técnica vocal saludable\n" +
               "• Respiración diafragmática\n" +
               "• Afinación y armonías\n" +
               "• Interpretación y expresión\n" +
               "• Cuidado de la voz\n\n" +
               "📞 **Info específica:** +54 9 3512 476433";
    }
    
    const defaultResponses = [
        "🎵 No capté bien tu pregunta musical. ¿Podrías reformularla?",
        "🎶 Puedo ayudarte con info sobre instrumentos, inscripciones, directores, costos o horarios. ¿Qué necesitas saber?",
        "🎹 No estoy seguro de entender. Ejemplos:\n• \"¿Qué instrumentos enseñan?\"\n• \"¿Cómo me inscribo?\"\n• \"¿Quiénes son los directores?\"\n• \"¿Cuánto cuesta?\""
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Mostrar indicador de "escribiendo"
function showMaranathaTypingIndicator() {
    const messagesContainer = document.getElementById('maranatha-chatbot-messages');
    if (!messagesContainer) return;
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'maranatha-bot-message typing-indicator';
    typingDiv.id = 'maranatha-typing-indicator';
    
    if (isMobile) {
        typingDiv.style.transform = 'rotate(0deg)';
    }
    
    typingDiv.innerHTML = `
        <div class="typing-note"></div>
        <div class="typing-note"></div>
        <div class="typing-note"></div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Eliminar indicador de "escribiendo"
function removeMaranathaTypingIndicator() {
    const typingIndicator = document.getElementById('maranatha-typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Agregar notas decorativas
function addMusicNotesDecorations() {
    const chatbotContainer = document.getElementById('maranatha-chatbot-container');
    if (!chatbotContainer || isMobile) return;
    
    removeMusicNotesDecorations();
    
    const notes = ['🎵', '🎶', '🎹', '🎸', '🥁', '🎤', '🎼'];
    
    for (let i = 0; i < 5; i++) {
        const note = document.createElement('div');
        note.className = 'note-decoration';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 15;
        const size = Math.random() * 0.5 + 0.8;
        
        note.style.left = `${left}%`;
        note.style.top = `${top}%`;
        note.style.animationDelay = `${delay}s`;
        note.style.animationDuration = `${duration}s`;
        note.style.fontSize = `${size}rem`;
        note.style.opacity = Math.random() * 0.4 + 0.1;
        
        chatbotContainer.appendChild(note);
    }
}

// Remover notas decorativas
function removeMusicNotesDecorations() {
    const notes = document.querySelectorAll('.note-decoration');
    notes.forEach(note => note.remove());
}

// ======================================================
// INICIALIZACIÓN
// ======================================================

window.addEventListener('load', function() {
    setTimeout(initializeMaranathaChatbot, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeMaranathaChatbot, 1500);
});

window.openMaranathaChatbot = function(type = 'general') {
    if (type === 'inscripciones') {
        openMaranathaChatbotWithCustomMessage(
            "📝 ¿Interesado/a en inscribirte?",
            'inscripciones'
        );
    } else if (type === 'instrumentos') {
        openMaranathaChatbotWithCustomMessage(
            "🎵 ¿Quieres saber sobre nuestros instrumentos?",
            'instrumentos'
        );
    } else if (type === 'adorador') {
        openMaranathaChatbotWithCustomMessage(
            "🎶 ¿Listo para ser adorador?",
            'quiero ser adorador'
        );
    } else if (type === 'directores') {
        openMaranathaChatbotWithCustomMessage(
            "👥 ¿Quieres conocer a nuestros directores?",
            'directores'
        );
    } else {
        openMaranathaChatbotWithCustomMessage(
            "🎵 ¡Hola! Asistente de Escuela Maranatha aquí. ¿En qué puedo ayudarte?",
            'general'
        );
    }
};

window.closeMaranathaChatbot = function() {
    const chatbotContainer = document.getElementById('maranatha-chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
        removeMusicNotesDecorations();
    }
};

console.log('🎵 maranatha-chatbot.js cargado - Listo para inicializar');