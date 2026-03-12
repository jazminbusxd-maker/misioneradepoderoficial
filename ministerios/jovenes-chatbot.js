    // ======================================================
    // CHATBOT URBANO PARA JÓVENES DE CONQUISTA
    // Ministerio de Jóvenes - Misionera de Poder
    // ======================================================

    // Base de conocimiento específica para Jóvenes
    const jovenesChatbotKnowledge = {
        "horarios": [
            "🕐 **Horarios de Jóvenes de Conquista:**\n• **Sábados:** 20:00 HS - Reunión principal\n• **Ubicación:** AUDITORIO MAYOR AV. TILLARD 1318\n• **Duración:** 2-3 horas"
        ],
        
        "contacto": [
            "📱 **Contacto directo:**\n👥 **Líderes:** Agustina y Joaquín Monje\n📞 **WhatsApp:** 3513390139\n📍 **Ubicación:** AV. TILLARD 1318 B° COFICO\n📸 **Instagram:** @jovenes_de_conquista_cba"
        ],
        
        "encuentro": [
            "🏔️ **ENCUENTRO PROFUNDIZA**\n\n**Fechas:** 27-28 Febrero y 1 Marzo\n**Lugar:** Hotel Parque Siquiman\n**Incluye:**\n• 🚌 Traslado y hospedaje\n• 🍔 Todas las comidas\n• ⚽ Recreación y deportes\n• 📖 Palabra transformadora\n• 💦 Actividades acuáticas\n**Consultas:** 3513390139"
        ],
        
        "unirse": [
            "🎯 **¡BIENVENIDO/A A LA CONQUISTA!**\n\n**Para unirte:**\n1. Ven este sábado 20:00 HS\n2. Ubicación: AV. TILLARD 1318 (Auditorio Mayor)\n3. Pregunta por Agustina o Joaquín\n4. Participa en la reunión\n5. Conéctate con otros jóvenes\n\n📱 **Consultas:** 3513390139"
        ],
        
        "quiero ser parte": [
            "🔥 **¡GENIAL QUE QUIERAS SER PARTE!**\n\n**Te explico el proceso:**\n\n🎯 **PASO 1:** Ven este sábado 20:00 HS\n   - Llegá al Auditorio Mayor\n   - Preguntá por Agustina o Joaquín\n\n🎯 **PASO 2:** Participá en la reunión\n   - Adoración intensa\n   - Palabra relevante\n   - Conexión con otros jóvenes\n\n🎯 **PASO 3:** Integrate\n   - Te presentamos al grupo\n   - Te sumás a actividades\n   - Formás parte de la familia\n\n📱 **¿Consultas?** 3513390139"
        ],
        
        "actividades": [
            "🔥 **LO QUE HACEMOS:**\n• **Adoración** intensa y contemporánea\n• **Enseñanzas** prácticas para la vida\n• **Grupos pequeños** de discusión\n• **Eventos especiales** mensuales\n• **Proyectos** de impacto social\n• **Retiros** transformadores\n• **Conexiones** reales"
        ],
        
        "lideres": [
            "👥 **NUESTRO EQUIPO:**\n\n• **Agustina Monje** - Liderazgo juvenil con pasión\n• **Joaquín Monje** - Especialista en desarrollo de jóvenes\n• **Voluntarios** comprometidos y capacitados\n• **Todos disponibles** para acompañarte\n• **Contacto:** 3513390139"
        ],
        
        "vision": [
            "🎯 **NUESTRA VISIÓN:**\n\nSomos una generación que no se conforma con lo ordinario. Vivimos con fuego y convicción, descubriendo nuestro propósito y transformando nuestra realidad con el poder de Dios."
        ],
        
        "eventos": [
            "📅 **PRÓXIMOS EVENTOS:**\n\n**Sábados:** 20:00 HS - Reunión semanal\n**27-28 Feb, 1 Mar:** Encuentro Profundiza\n**Consultas:** 3513390139"
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
        
        // Crear elementos del DOM
        createJovenesChatbotElements();
        
        // Configurar eventos
        setupJovenesChatbotEvents();
        
        // Configurar botones de la página
        setupJovenesPageButtons();
        
        // Ajustar para móvil
        adjustChatbotForMobile();
        
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
                    <button id="jovenes-close-chatbot" title="Cerrar">&times;</button>
                </div>
                
                <!-- Mensajes -->
                <div id="jovenes-chatbot-messages">
                    <div class="jovenes-bot-message">¡Hola! 🔥 Soy tu asistente de Jóvenes de Conquista.</div>
                    <div class="jovenes-bot-message">Estoy aquí para ayudarte con información sobre nuestro movimiento juvenil.</div>
                    <div class="jovenes-bot-message">Pregúntame sobre: horarios, eventos, cómo unirte, líderes, etc.</div>
                </div>
                
                <!-- Input -->
                <div id="jovenes-chatbot-input">
                    <input type="text" id="jovenes-user-input" placeholder="Escribe tu pregunta..." autocomplete="off">
                    <button id="jovenes-send-btn" title="Enviar">➤</button>
                </div>
                
                <!-- Botones rápidos -->
                <div id="jovenes-quick-questions">
                    <button class="jovenes-quick-btn" data-question="¿Cuáles son los horarios?">🕐 Horarios</button>
                    <button class="jovenes-quick-btn" data-question="¿Evento Profundiza?">🏔️ Evento</button>
                    <button class="jovenes-quick-btn" data-question="¿Quiénes son los líderes?">👥 Líderes</button>
                </div>
            </div>

            <!-- Botón flotante -->
            <button id="jovenes-chatbot-toggle" title="Chat Jóvenes de Conquista">🔥</button>
        `;
        
        // Insertar en el body
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        
        // Aplicar estilos
        addJovenesChatbotStyles();
    }

    // Añadir estilos CSS para el chatbot
    function addJovenesChatbotStyles() {
        const styles = `
            <style>
                /* Variables de colores de la página */
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
                
                /* Chatbot Container - Estilo Urbano equilibrado */
                #jovenes-chatbot-container {
                    position: fixed;
                    bottom: 80px;
                    right: 20px;
                    width: 340px;
                    max-width: calc(100vw - 40px);
                    height: 480px;
                    max-height: 65vh;
                    background: var(--azul-oscuro);
                    border: 3px solid var(--azul-electrico);
                    border-radius: 10px;
                    box-shadow: 
                        0 10px 25px rgba(0, 0, 0, 0.4),
                        0 0 0 2px var(--azul-cielo);
                    display: none;
                    flex-direction: column;
                    z-index: 10000;
                    overflow: hidden;
                    font-family: 'Poppins', sans-serif;
                }
                
                /* Header */
                #jovenes-chatbot-header {
                    background: var(--azul-electrico);
                    color: var(--blanco-hueso);
                    padding: 12px 18px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-family: 'Bebas Neue', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    border-bottom: 3px solid var(--blanco-hueso);
                    flex-shrink: 0;
                }
                
                #jovenes-close-chatbot {
                    background: var(--blanco-hueso);
                    border: 2px solid var(--azul-electrico);
                    color: var(--azul-electrico);
                    font-size: 1.5rem;
                    cursor: pointer;
                    font-weight: bold;
                    width: 26px;
                    height: 26px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }
                
                #jovenes-close-chatbot:hover {
                    background: var(--azul-neon);
                    color: var(--azul-oscuro);
                    transform: rotate(90deg);
                }
                
                /* Mensajes */
                #jovenes-chatbot-messages {
                    flex: 1;
                    padding: 15px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    background: var(--azul-medio);
                    min-height: 0;
                }
                
                .jovenes-bot-message {
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid var(--azul-claro);
                    border-radius: 10px;
                    padding: 12px 15px;
                    color: var(--blanco-hueso);
                    font-size: 0.9rem;
                    line-height: 1.5;
                    max-width: 85%;
                    align-self: flex-start;
                    position: relative;
                    box-shadow: 3px 3px 0 var(--azul-cielo);
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                
                .jovenes-user-message {
                    background: var(--azul-cielo);
                    border: 2px solid var(--azul-electrico);
                    border-radius: 10px;
                    padding: 12px 15px;
                    color: var(--blanco-hueso);
                    font-size: 0.9rem;
                    line-height: 1.5;
                    max-width: 85%;
                    align-self: flex-end;
                    text-align: right;
                    box-shadow: 3px 3px 0 var(--azul-electrico);
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                
                /* Input */
                #jovenes-chatbot-input {
                    padding: 12px;
                    display: flex;
                    gap: 8px;
                    border-top: 3px solid var(--azul-electrico);
                    background: var(--azul-grafito);
                    flex-shrink: 0;
                }
                
                #jovenes-user-input {
                    flex: 1;
                    padding: 10px 14px;
                    border: 2px solid var(--azul-electrico);
                    border-radius: 20px;
                    background: var(--azul-medio);
                    color: var(--blanco-hueso);
                    font-family: 'Poppins', sans-serif;
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                    min-width: 0;
                    -webkit-appearance: none;
                    appearance: none;
                }
                
                #jovenes-user-input:focus {
                    outline: none;
                    border-color: var(--azul-neon);
                    box-shadow: 0 0 10px rgba(6, 214, 160, 0.5);
                }
                
                #jovenes-send-btn {
                    padding: 10px 20px;
                    background: var(--azul-electrico);
                    color: var(--blanco-hueso);
                    border: none;
                    border-radius: 20px;
                    cursor: pointer;
                    font-family: 'Bebas Neue', sans-serif;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.2s ease;
                    min-width: 50px;
                    letter-spacing: 1px;
                    flex-shrink: 0;
                }
                
                #jovenes-send-btn:hover {
                    background: var(--azul-neon);
                    color: var(--azul-oscuro);
                    transform: scale(1.05);
                    box-shadow: 0 0 15px rgba(6, 214, 160, 0.4);
                }
                
                /* Botones rápidos */
                #jovenes-quick-questions {
                    padding: 12px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    border-top: 3px solid var(--azul-cielo);
                    background: var(--azul-grafito);
                    flex-shrink: 0;
                }
                
                .jovenes-quick-btn {
                    padding: 8px 12px;
                    background: var(--azul-cielo);
                    border: 2px solid var(--azul-electrico);
                    border-radius: 16px;
                    color: var(--blanco-hueso);
                    cursor: pointer;
                    font-size: 0.8rem;
                    transition: all 0.2s ease;
                    font-family: 'Poppins', sans-serif;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-weight: 600;
                    flex: 1;
                    min-width: 0;
                    justify-content: center;
                    white-space: nowrap;
                }
                
                .jovenes-quick-btn:hover {
                    background: var(--azul-electrico);
                    border-color: var(--azul-neon);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
                
                /* Botón flotante - Estilo sticker urbano */
                #jovenes-chatbot-toggle {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: var(--azul-electrico);
                    color: var(--blanco-hueso);
                    border: 3px solid var(--blanco-hueso);
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    font-size: 1.8rem;
                    cursor: pointer;
                    box-shadow: 
                        5px 5px 0 var(--azul-cielo),
                        10px 10px 0 var(--accent-amarillo);
                    z-index: 9999;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Bebas Neue', sans-serif;
                    font-weight: 700;
                }
                
                #jovenes-chatbot-toggle:hover {
                    transform: rotate(-5deg) scale(1.1);
                    background: var(--azul-neon);
                    color: var(--azul-oscuro);
                    box-shadow: 
                        8px 8px 0 var(--azul-electrico),
                        16px 16px 0 var(--accent-amarillo);
                }
                
                #jovenes-chatbot-toggle:active {
                    transform: scale(0.95);
                }
                
                /* Scrollbar personalizada */
                #jovenes-chatbot-messages::-webkit-scrollbar {
                    width: 8px;
                }
                
                #jovenes-chatbot-messages::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 4px;
                }
                
                #jovenes-chatbot-messages::-webkit-scrollbar-thumb {
                    background: linear-gradient(var(--azul-electrico), var(--azul-neon));
                    border-radius: 4px;
                }
                
                #jovenes-chatbot-messages::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(var(--azul-neon), var(--azul-electrico));
                }
                
                /* ======================
                MEDIA QUERIES - RESPONSIVE
                ====================== */
                
                /* Tablets */
                @media (max-width: 768px) {
                    #jovenes-chatbot-container {
                        width: calc(100vw - 40px);
                        right: 20px;
                        left: 20px;
                        bottom: 90px;
                        height: 55vh;
                        max-height: 55vh;
                    }
                    
                    #jovenes-chatbot-toggle {
                        width: 55px;
                        height: 55px;
                        font-size: 1.6rem;
                        bottom: 20px;
                        right: 20px;
                    }
                    
                    #jovenes-chatbot-header {
                        padding: 10px 15px;
                        font-size: 1.1rem;
                    }
                    
                    .jovenes-bot-message,
                    .jovenes-user-message {
                        max-width: 90%;
                        font-size: 0.85rem;
                        padding: 10px 12px;
                    }
                    
                    #jovenes-user-input {
                        font-size: 0.9rem;
                        padding: 8px 12px;
                    }
                    
                    #jovenes-send-btn {
                        padding: 8px 16px;
                        font-size: 0.9rem;
                    }
                    
                    .jovenes-quick-btn {
                        font-size: 0.75rem;
                        padding: 7px 10px;
                        flex: 0 0 calc(33.333% - 8px);
                    }
                    
                    #jovenes-quick-questions {
                        padding: 10px;
                        gap: 6px;
                    }
                }
                
                /* Teléfonos móviles */
                @media (max-width: 576px) {
                    #jovenes-chatbot-container {
                        width: calc(100vw - 30px);
                        right: 15px;
                        left: 15px;
                        bottom: 85px;
                        height: 50vh;
                        max-height: 50vh;
                    }
                    
                    #jovenes-chatbot-toggle {
                        width: 50px;
                        height: 50px;
                        font-size: 1.4rem;
                        bottom: 15px;
                        right: 15px;
                    }
                    
                    #jovenes-chatbot-header {
                        padding: 8px 12px;
                        font-size: 1rem;
                    }
                    
                    #jovenes-chatbot-messages {
                        padding: 12px;
                        gap: 10px;
                    }
                    
                    .jovenes-bot-message,
                    .jovenes-user-message {
                        max-width: 95%;
                        font-size: 0.8rem;
                        padding: 8px 10px;
                    }
                    
                    #jovenes-chatbot-input {
                        padding: 10px;
                    }
                    
                    #jovenes-user-input {
                        padding: 8px 10px;
                        font-size: 0.85rem;
                    }
                    
                    #jovenes-send-btn {
                        padding: 8px 14px;
                        min-width: 45px;
                        font-size: 0.85rem;
                    }
                    
                    .jovenes-quick-btn {
                        font-size: 0.7rem;
                        padding: 6px 8px;
                        flex: 0 0 calc(33.333% - 6px);
                        white-space: normal;
                        line-height: 1.2;
                        min-height: 36px;
                    }
                    
                    #jovenes-quick-questions {
                        padding: 8px;
                        gap: 4px;
                    }
                }
                
                /* Teléfonos muy pequeños */
                @media (max-width: 400px) {
                    #jovenes-chatbot-container {
                        width: calc(100vw - 20px);
                        right: 10px;
                        left: 10px;
                        bottom: 80px;
                        height: 45vh;
                        max-height: 45vh;
                    }
                    
                    #jovenes-chatbot-toggle {
                        width: 45px;
                        height: 45px;
                        font-size: 1.2rem;
                        bottom: 10px;
                        right: 10px;
                    }
                    
                    #jovenes-chatbot-header h4 {
                        font-size: 0.9rem;
                    }
                    
                    .jovenes-bot-message,
                    .jovenes-user-message {
                        font-size: 0.75rem;
                        padding: 6px 8px;
                    }
                    
                    .jovenes-quick-btn {
                        font-size: 0.65rem;
                        padding: 5px 6px;
                        flex: 0 0 calc(33.333% - 4px);
                        min-height: 32px;
                    }
                    
                    #jovenes-quick-questions {
                        padding: 6px;
                    }
                }
                
                /* Orientación landscape en móviles */
                @media (max-height: 500px) and (orientation: landscape) {
                    #jovenes-chatbot-container {
                        height: 70vh;
                        max-height: 70vh;
                        bottom: 70px;
                    }
                    
                    .jovenes-quick-btn {
                        flex: 0 0 calc(50% - 8px);
                    }
                }
                
                /* Evitar zoom en inputs en iOS */
                @media screen and (-webkit-min-device-pixel-ratio:0) {
                    #jovenes-user-input {
                        font-size: 16px;
                    }
                }
                
                /* Soporte para navegadores que no soportan backdrop-filter */
                @supports not (backdrop-filter: blur(10px)) {
                    .mobile-nav-overlay {
                        background: rgba(0, 0, 0, 0.85);
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // Ajustar chatbot para móvil
    function adjustChatbotForMobile() {
        const isMobile = window.innerWidth <= 768;
        const chatbotContainer = document.getElementById('jovenes-chatbot-container');
        const chatbotToggle = document.getElementById('jovenes-chatbot-toggle');
        
        if (!chatbotContainer || !chatbotToggle) return;
        
        if (isMobile) {
            // Ajustar posición en móvil
            chatbotToggle.style.bottom = '15px';
            chatbotToggle.style.right = '15px';
            
            // Ajustar tamaño del chatbot abierto
            if (chatbotContainer.style.display === 'flex') {
                chatbotContainer.style.width = 'calc(100vw - 40px)';
                chatbotContainer.style.right = '20px';
                chatbotContainer.style.left = '20px';
            }
        }
        
        // Ajustar para landscape
        const isLandscape = window.innerWidth > window.innerHeight && window.innerWidth <= 900;
        if (isLandscape) {
            chatbotContainer.style.maxHeight = '70vh';
        }
    }

    // Configurar eventos del chatbot
    function setupJovenesChatbotEvents() {
        const toggleBtn = document.getElementById('jovenes-chatbot-toggle');
        const closeBtn = document.getElementById('jovenes-close-chatbot');
        const sendBtn = document.getElementById('jovenes-send-btn');
        const userInput = document.getElementById('jovenes-user-input');
        const quickBtns = document.querySelectorAll('.jovenes-quick-btn');
        const chatbotContainer = document.getElementById('jovenes-chatbot-container');
        
        if (!toggleBtn || !chatbotContainer) {
            console.error('❌ No se encontraron elementos del chatbot');
            return;
        }
        
        // Abrir chatbot
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            chatbotContainer.style.display = 'flex';
            if (userInput) userInput.focus();
            
            // Ajustar para móvil al abrir
            adjustChatbotForMobile();
            
            // Efecto sutil
            this.style.transform = 'rotate(-10deg) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'rotate(-10deg) scale(1)';
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
                e.preventDefault();
                sendJovenesChatbotMessage();
            }
        });
        
        // Enviar con botón
        sendBtn.addEventListener('click', sendJovenesChatbotMessage);
        
        // Botones rápidos
        quickBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const question = this.getAttribute('data-question');
                userInput.value = question;
                sendJovenesChatbotMessage();
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
        
        // Prevenir cierre al hacer clic dentro
        chatbotContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // Ajustar en resize
        window.addEventListener('resize', adjustChatbotForMobile);
        
        // Prevenir zoom en input en móviles
        userInput.addEventListener('focus', function() {
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                }, 300);
            }
        });
    }

    // Configurar botones de la página
    function setupJovenesPageButtons() {
        console.log('🔍 Configurando botones de la página...');
        
        // Botón "¡QUIERO SER PARTE!" (en sección Únete)
        const quieroSerParteBtn = document.getElementById('quiero-ser-parte-btn');
        if (quieroSerParteBtn) {
            quieroSerParteBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🔥 Botón "¡QUIERO SER PARTE!" clickeado');
                openJovenesChatbotWithCustomMessage(
                    "🔥 **¡BIENVENIDO/A A LA CONQUISTA!**\n\nVeo que quieres ser parte de nuestra generación que transforma. ¡Genial decisión! Te explico todo paso a paso:",
                    'quiero ser parte'
                );
            });
        }
        
        // Botón "¡QUIERO UNIRME!" (en Hero) - si existe
        const quieroUnirmeBtn = document.getElementById('quiero-unirme-hero');
        if (quieroUnirmeBtn) {
            quieroUnirmeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('🔥 Botón "¡QUIERO UNIRME!" clickeado');
                openJovenesChatbotWithCustomMessage(
                    "🎯 **¡EXCELENTE QUE QUIERAS UNIRTE!**\n\nTe ayudo con toda la información para que formes parte de Jóvenes de Conquista:",
                    'unirse'
                );
            });
        }
        
        // Botón "¡CONQUISTA AHORA!" (Hero)
        const conquistaBtn = document.querySelector('.sticker-btn-primary[data-scroll="vision"]');
        if (conquistaBtn) {
            conquistaBtn.addEventListener('click', function(e) {
                // Solo activar si no estamos haciendo scroll
                if (!e.target.closest('.sticker-btn-primary[data-scroll]')) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('🔥 Botón "¡CONQUISTA AHORA!" clickeado');
                    openJovenesChatbotWithCustomMessage(
                        "⚡ **¡ES HORA DE LA CONQUISTA!**\n\n¿Listo para vivir tu fe al máximo? Te cuento cómo empezar:",
                        'unirse'
                    );
                }
            });
        }
        
        console.log('✅ Botones configurados');
    }

    // Función para abrir chatbot con mensaje personalizado
    function openJovenesChatbotWithCustomMessage(message, type = 'general') {
        const chatbotContainer = document.getElementById('jovenes-chatbot-container');
        const userInput = document.getElementById('jovenes-user-input');
        
        if (!chatbotContainer) {
            console.error('❌ No se encontró el chatbot container');
            return;
        }
        
        // Ajustar para móvil antes de mostrar
        adjustChatbotForMobile();
        
        // Mostrar el chatbot con animación
        chatbotContainer.style.display = 'flex';
        chatbotContainer.style.opacity = '0';
        chatbotContainer.style.transform = 'translateY(15px) scale(0.95)';
        
        setTimeout(() => {
            chatbotContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            chatbotContainer.style.opacity = '1';
            chatbotContainer.style.transform = 'translateY(0) scale(1)';
        }, 10);
        
        // Limpiar mensajes anteriores
        const messagesContainer = document.getElementById('jovenes-chatbot-messages');
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
            addJovenesChatbotMessage(message, 'bot');
            
            // Agregar información adicional según el tipo
            setTimeout(() => {
                if (type === 'unirse' || type === 'quiero ser parte') {
                    addJovenesChatbotMessage(
                        "**🎯 TODO LO QUE NECESITAS SABER:**\n\n" +
                        "**📍 DÓNDE:**\n" +
                        "• Auditorio Mayor\n" +
                        "• AV. TILLARD 1318 B° COFICO\n\n" +
                        "**🕐 CUÁNDO:**\n" +
                        "• Sábados 20:00 HS\n" +
                        "• ¡No necesitas avisar previamente!\n\n" +
                        "**👥 QUIÉNES:**\n" +
                        "• Jóvenes de 18-30 años\n" +
                        "• Líderes: Agustina y Joaquín\n" +
                        "• Ambiente super amigable\n\n" +
                        "**📱 CONTACTO:** 3513390139\n\n" +
                        "¿Tienes alguna pregunta específica?",
                        'bot'
                    );
                } else if (type === 'eventos') {
                    addJovenesChatbotMessage(
                        "**📅 EVENTOS:**\n\n" +
                        "**Sábados:** 20:00 HS - Reunión semanal\n\n" +
                        "**🏔️ ENCUENTRO PROFUNDIZA:**\n" +
                        "• **Fechas:** 27-28 Febrero y 1 Marzo\n" +
                        "• **Lugar:** Hotel Parque Siquiman\n" +
                        "• **Incluye:** Traslado, hospedaje, comidas, recreación\n" +
                        "• **Consultas:** 3513390139\n\n" +
                        "¿Quieres más información sobre algún evento?",
                        'bot'
                    );
                }
            }, 800);
        }, 300);
        
        // Enfocar el input
        if (userInput) {
            setTimeout(() => {
                userInput.focus();
                // En móviles, desplazar hacia arriba para ver el input
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        window.scrollTo(0, document.body.scrollHeight);
                    }, 100);
                }
            }, 500);
        }
    }

    // Enviar mensaje del usuario
    function sendJovenesChatbotMessage() {
        const userInput = document.getElementById('jovenes-user-input');
        const message = userInput.value.trim();
        
        if (message === '') return;
        
        // Mostrar mensaje del usuario
        addJovenesChatbotMessage(message, 'user');
        
        // Procesar y obtener respuesta
        setTimeout(() => {
            const response = getJovenesChatbotResponse(message);
            addJovenesChatbotMessage(response, 'bot');
        }, 500);
        
        // Limpiar input
        userInput.value = '';
        
        // Mantener foco en input
        userInput.focus();
    }

    // Agregar mensaje al chat
    function addJovenesChatbotMessage(text, sender) {
        const messagesContainer = document.getElementById('jovenes-chatbot-messages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'bot' ? 'jovenes-bot-message' : 'jovenes-user-message';
        messageDiv.textContent = text;
        
        messagesContainer.appendChild(messageDiv);
        
        // Auto-scroll
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Efecto sutil de aparición
        if (sender === 'bot') {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                messageDiv.style.transition = 'opacity 0.4s ease';
                messageDiv.style.opacity = '1';
            }, 10);
        }
    }

    // Obtener respuesta del chatbot
    function getJovenesChatbotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Buscar en base de conocimiento
        for (const [keyword, responses] of Object.entries(jovenesChatbotKnowledge)) {
            if (lowerMessage.includes(keyword)) {
                const response = responses[Math.floor(Math.random() * responses.length)];
                return response;
            }
        }
        
        // Respuestas específicas adicionales
        if (/(quiero ser parte|quiero unirme|unirme|integrarme|formar parte)/i.test(lowerMessage)) {
            return "🔥 **¡GENIAL QUE QUIERAS SER PARTE!**\n\n" +
                "**Te cuento rápido:**\n" +
                "1. Ven este sábado 20:00 HS\n" +
                "2. Auditorio Mayor AV. TILLARD 1318\n" +
                "3. Pregunta por Agustina o Joaquín\n" +
                "4. ¡Listo! Ya formas parte\n\n" +
                "**No necesitas:**\n" +
                "• Pago de inscripción\n" +
                "• Documentación\n" +
                "• Experiencia previa\n\n" +
                "📱 **Consultas:** 3513390139";
        }
        
        if (/(agustina|joaquín|joaquin|monje|líder|lider|lideres)/i.test(lowerMessage)) {
            return "👥 **NUESTROS LÍDERES:**\n\n" +
                "• **Agustina Ocaño**\n" +
                "• **Joaquín Monje**\n" +
                "📱 **Contacto:** 3513390139\n" +
                "📸 **Instagram:** @jovenes_de_conquista_cba";
        }
        
        if (/(profundiza|encuentro|retiro|viaje|hotel|siquiman)/i.test(lowerMessage)) {
            return "🏔️ **ENCUENTRO PROFUNDIZA**\n\n" +
                "**Fechas:** 27-28 Febrero y 1 Marzo\n" +
                "**Lugar:** Hotel Parque Siquiman\n\n" +
                "**INCLUYE TODO:**\n" +
                "• 🚌 Traslado completo\n" +
                "• 🏨 Hospedaje en hotel\n" +
                "• 🍔 Todas las comidas\n" +
                "• ⚽ Deportes y recreación\n" +
                "• 💦 Actividades acuáticas\n" +
                "• 📖 Enseñanzas transformadoras\n\n" +
                "📱 **Consultas e inscripciones:** 3513390139";
        }
        
        if (/(teléfono|telefono|celular|llamar|número|numero|whatsapp|wsap|contacto)/i.test(lowerMessage)) {
            return "📱 **CONTACTO DIRECTO:**\n\n" +
                "• **WhatsApp:** 3513390139\n" +
                "• **Líderes:** Agustina Ocaño y Joaquín Monje\n" +
                "• **Instagram:** @jovenes_de_conquista_cba\n" +
                "• **Ubicación:** AV. TILLARD 1318 B° COFICO\n" +
                "• **Horarios de atención:** De lunes a viernes";
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
            return "🔥 **¡DE NADA!**\n\n" +
                "Es un honor acompañarte en este camino de conquista y transformación.\n\n" +
                "¿Hay algo más en lo que pueda ayudarte?";
        }
        
        // Preguntas específicas
        if (/(aburrido|divertido|entretenido|hacemos|actividades)/i.test(lowerMessage)) {
            return "⚡ **¿QUÉ HACEMOS?**\n\n" +
                "• **Adoración** intensa y poderosa\n" +
                "• **Enseñanzas** prácticas para la vida real\n" +
                "• **Grupos pequeños** de conexión\n" +
                "• **Eventos** especiales mensuales\n" +
                "• **Proyectos** de impacto social\n" +
                "• **Retiros** transformadores\n" +
                "• **Conexiones** reales y duraderas\n\n" +
                "¡Nunca te aburrirás con nosotros!";
        }
        
        // Respuesta por defecto
        const defaultResponses = [
            "🔥 No capté bien tu pregunta. ¿Podrías reformularla?",
            "🎯 Puedo ayudarte con info sobre horarios, eventos, cómo unirte o líderes. ¿Qué necesitas saber?",
            "⚡ No estoy seguro de entender. Ejemplos:\n• \"¿A qué hora es la reunión?\"\n• \"¿Cómo me uno?\"\n• \"¿Qué es el encuentro Profundiza?\""
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    // ======================================================
    // INICIALIZACIÓN
    // ======================================================

    // Inicializar cuando cargue la página
    window.addEventListener('load', function() {
        setTimeout(initializeJovenesChatbot, 1000);
    });

    // También inicializar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeJovenesChatbot, 1500);
    });

    // Funciones públicas para usar desde otros scripts
    window.openJovenesChatbot = function(type = 'general') {
        if (type === 'unirse' || type === 'quiero ser parte') {
            openJovenesChatbotWithCustomMessage(
                "🔥 ¡Hola! ¿Listo para unirte a la conquista?",
                'unirse'
            );
        } else if (type === 'eventos') {
            openJovenesChatbotWithCustomMessage(
                "📅 ¿Quieres saber sobre nuestros próximos eventos?",
                'eventos'
            );
        } else if (type === 'lideres') {
            openJovenesChatbotWithCustomMessage(
                "👥 ¿Quieres conocer a nuestros líderes?",
                'lideres'
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

    // Detectar si es móvil
    window.isMobile = function() {
        return window.innerWidth <= 768;
    };

    console.log('🔥 jovenes-chatbot.js cargado - Listo para inicializar');