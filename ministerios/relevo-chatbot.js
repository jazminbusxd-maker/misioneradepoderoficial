// ======================================================
// CHATBOT EL RELEVO - VERSIÓN UNIVERSAL
// Diseñado para ser independiente, siempre visible y responsive
// Ministerio de Niños - Misionera de Poder
// ======================================================

// ======================================================
// EVITAR MÚLTIPLES INSTANCIAS (Singleton Pattern)
// ======================================================
if (window.relevoChatbotInstance) {
    console.log('👶 Chatbot El Relevo ya está cargado - omitiendo duplicado');
} else {
    window.relevoChatbotInstance = true;

    // ======================================================
    // BASE DE CONOCIMIENTO
    // ======================================================
    const relevoChatbotKnowledge = {
        ministerio: [
            "👶 **El Relevo** es el ministerio de niños de Misionera de Poder. No es solo una escuelita bíblica, ¡es una **aventura con Dios!** Aquí los niños descubren que son **hijos del Rey** y que tienen un propósito especial.",
            "🎪 Creemos que los niños **no son el futuro de la iglesia, son el presente.** Aprenden, juegan, adoran y crecen en el amor de Jesús de una manera divertida y significativa."
        ],
        horarios: [
            "🕒 **Horarios de El Relevo:**\n\n• **Domingos:** 9:00 AM - Escuelita Bíblica\n• **Domingos:** 18:00 PM - Escuelita Bíblica\n• **Miércoles:** 18:00 HS - Escuelita Bíblica\n\nLos niños tienen su espacio durante las reuniones generales de la iglesia.\n\n📍 **Lugar:** Auditorio Mayor - Av. Tillard 1318, B° Cofico",
            "📅 **Nuestros encuentros:**\n\n• **Domingo mañana:** 9:00 AM\n• **Domingo tarde:** 18:00 PM\n• **Miércoles:** 18:00 HS\n\n¡Los esperamos!"
        ],
        contacto: [
            "📱 **Contacto para padres:**\n\n• **👩‍🏫 Líder:** Natalia Negreti\n• **📞 Teléfono:** 3518 18-1770\n• **📍 Ubicación:** AUDITORIO MAYOR - AV. TILLARD 1318 B° COFICO\n\nPueden llamar para cualquier consulta sobre el ministerio.",
            "📞 **Información de contacto:**\n\n• **Consultas:** 3518 18-1770 (Natalia Negreti)\n• **Dirección:** Av. Tillard 1318, B° Cofico"
        ],
        lider: [
            "👩‍💼 **Nuestra líder:**\n\n**NATALIA NEGRETI**\n\n• **Experiencia:** +5 años en ministerio infantil\n• **Formación:** Educación cristiana infantil\n• **Contacto:** 3518 18-1770\n• **Disponible:** Para hablar con padres antes o después de las reuniones",
            "👩‍🏫 **Equipo de maestras:**\n\n• Capacitadas en educación infantil\n• Certificadas en primeros auxilios\n• Vocación de servicio y amor por los niños\n• Lideradas por Natalia Negreti"
        ],
        participar: [
            "👶 **¿CÓMO PARTICIPAN LOS NIÑOS?**\n\nEs muy sencillo:\n\n1️⃣ **LLEGA** con tu hijo a cualquiera de nuestras reuniones:\n   • Domingos 9:00 AM o 18:00 PM\n   • Miércoles 18:00 HS\n\n2️⃣ **ACOMPAÑA** a tu hijo al sector de El Relevo\n\n3️⃣ **LAS MAESTRAS** lo recibirán y lo integrarán al grupo correspondiente\n\n4️⃣ **RETÍRALO** al finalizar la reunión\n\n¡No necesitas inscripción previa! Solo llegar y participar.\n\n📞 Consultas al 3518 18-1770",
            "🎊 **¡TUS HIJOS PUEDEN PARTICIPAR!**\n\nSimplemente ven con ellos en nuestros horarios:\n• **Domingos:** 9:00 AM o 18:00 PM\n• **Miércoles:** 18:00 HS\n\nNuestras maestras los recibirán con mucho amor.\n\n📍 Auditorio Mayor - Av. Tillard 1318"
        ],
        edades: [
            "👧👦 **GRUPOS POR EDADES (HASTA 10 AÑOS):**\n\n• **3-4 años:** Maternal\n• **5-6 años:** Principiantes\n• **7-8 años:** Intermedios\n• **9-10 años:** Avanzados\n\nCada grupo tiene actividades apropiadas para su edad y desarrollo.",
            "📊 **Niveles:**\n\n• **Preescolares:** 3-4 años\n• **Infantiles:** 5-8 años\n• **Pre-adolescentes:** 9-10 años\n\n¡Todos son bienvenidos!"
        ],
        actividades: [
            "🎨 **ACTIVIDADES PARA NIÑOS:**\n\n• **📖 Enseñanza bíblica** por edades\n• **🎵 Canciones** con movimientos\n• **🎭 Teatro bíblico** y dramatizaciones\n• **🎨 Manualidades** creativas\n• **🏆 Juegos** educativos\n• **📚 Historias** interactivas\n\n¡Diversión y aprendizaje garantizados!",
            "🎪 **Qué hacemos en El Relevo:**\n\n• Clases bíblicas dinámicas\n• Alabanza infantil con gestos\n• Manualidades que enseñan\n• Juegos con propósito\n• Amistades en Cristo"
        ],
        seguridad: [
            "🛡️ **MEDIDAS DE SEGURIDAD:**\n\n• **Maestras capacitadas** en educación infantil\n• **Certificación** en primeros auxilios\n• **Ambiente seguro** y supervisado permanentemente\n• **Control** durante toda la reunión\n• **Protocolos** para emergencias\n• **Espacio adecuado** para cada edad\n\n¡La seguridad de tus hijos es nuestra prioridad!",
            "🔒 **Compromiso con la seguridad:**\n\n• Personal calificado\n• Supervisión constante\n• Protocolos de emergencia\n• Ambiente preparado"
        ],
        ubicacion: [
            "📍 **NUESTRA UBICACIÓN:**\n\n**Auditorio Mayor Misionera de Poder**\nAv. Tillard 1318, Barrio Cofico, Córdoba\n\n🅿️ Estacionamiento disponible\n♿ Acceso para personas con movilidad reducida\n\n¡Te esperamos!",
            "🗺️ **Cómo llegar:**\n\nDirección: Av. Tillard 1318, B° Cofico\n\nReferencia: Auditorio Mayor (fácil acceso)"
        ],
        padres: [
            "👨‍👩‍👧‍👦 **INFORMACIÓN PARA PADRES:**\n\n• **¿Qué necesitan los niños?** Ropa cómoda, Biblia si tienen, muchas ganas de aprender\n• **¿Hay costo?** Es completamente gratuito\n• **¿Puedo quedarme?** Pueden dejarlos con confianza\n• **¿Hasta qué edad?** Hasta los 10 años\n• **¿Cómo me entero de novedades?** Pregunta a Natalia Negreti al 3518 18-1770\n\n📞 Contacto: 3518 18-1770",
            "💡 **Tips para padres:**\n\n• Lleguen 10 minutos antes\n• Acompañen a sus hijos al sector\n• Comuniquen alergias o necesidades\n• Pregunten lo que necesiten\n• Disfruten sabiendo que están en buenas manos"
        ],
        versiculos: [
            "📖 **Versículo base:**\n\n\"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él.\" - Proverbios 22:6",
            "✨ **Palabra para los niños:**\n\n\"Dejen que los niños vengan a mí, y no se lo impidan, porque el reino de los cielos es de quienes son como ellos.\" - Mateo 19:14"
        ],
        eventos: [
            "📅 **Eventos especiales:**\n\nActualmente no hay eventos especiales programados. Los niños participan en las reuniones regulares:\n• Domingos 9:00 AM y 18:00 PM\n• Miércoles 18:00 HS\n\nPróximamente anunciaremos actividades especiales.\n\n📞 Consultas al 3518 18-1770",
            "🎉 **Próximos eventos:**\n\nPor el momento no tenemos eventos especiales. Los esperamos en nuestros horarios habituales de escuelita bíblica."
        ]
    };

    // ======================================================
    // FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
    // ======================================================
    function initializeRelevoChatbot() {
        // Verificar si ya existe el botón (segunda capa de seguridad)
        if (document.getElementById('relevo-chatbot-toggle')) {
            console.log('👶 Elementos del chatbot ya existen en el DOM');
            return;
        }

        console.log('👶 Inicializando chatbot El Relevo...');
        
        // Crear elementos
        createRelevoChatbotElements();
        
        // Esperar a que los elementos estén en el DOM para configurar eventos
        setTimeout(() => {
            setupRelevoChatbotEvents();
            setupRelevoPageButtons();
        }, 50);
    }

    // ======================================================
    // CREACIÓN DE ELEMENTOS (SIN DUPLICADOS)
    // ======================================================
    function createRelevoChatbotElements() {
        // Verificar nuevamente antes de crear
        if (document.getElementById('relevo-chatbot-toggle')) {
            return;
        }

        // Crear el botón flotante
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'relevo-chatbot-toggle';
        toggleBtn.title = 'Abrir chat de El Relevo';
        toggleBtn.setAttribute('aria-label', 'Abrir chat');
        toggleBtn.innerHTML = '👶';
        
        // Crear el contenedor del chat
        const container = document.createElement('div');
        container.id = 'relevo-chatbot-container';
        container.style.display = 'none';
        
        container.innerHTML = `
            <div id="relevo-chatbot-header">
                <h4>👶 El Relevo - Asistente</h4>
                <button id="relevo-close-chatbot" title="Cerrar">&times;</button>
            </div>
            <div id="relevo-chatbot-messages">
                <div class="relevo-bot-message">👶 ¡Hola, papá/mamá! Soy tu asistente de El Relevo.</div>
                <div class="relevo-bot-message">Estoy aquí para ayudarte con información sobre nuestro ministerio de niños.</div>
                <div class="relevo-bot-message">Puedes preguntarme sobre: horarios, edades, actividades, cómo participar y más.</div>
            </div>
            <div id="relevo-typing-indicator" class="relevo-typing-hidden">
                <span></span><span></span><span></span>
            </div>
            <div id="relevo-chatbot-input">
                <input type="text" id="relevo-user-input" placeholder="Escribe tu pregunta aquí..." autocomplete="off">
                <button id="relevo-send-btn" title="Enviar">➤</button>
            </div>
            <div id="relevo-quick-questions">
                <button class="relevo-quick-btn" data-question="¿Cuáles son los horarios?">🕒 Horarios</button>
                <button class="relevo-quick-btn" data-question="¿Cómo participan los niños?">👶 Participar</button>
                <button class="relevo-quick-btn" data-question="¿Qué edades aceptan?">📊 Edades</button>
                <button class="relevo-quick-btn" data-question="¿Quién es la líder?">👩‍🏫 Líder</button>
            </div>
        `;
        
        // Agregar al final del body
        document.body.appendChild(toggleBtn);
        document.body.appendChild(container);
        
        // Agregar estilos
        addRelevoChatbotStyles();
    }

    // ======================================================
    // ESTILOS (Responsive y Fixed)
    // ======================================================
    function addRelevoChatbotStyles() {
        // Evitar estilos duplicados
        if (document.getElementById('relevo-chatbot-styles')) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'relevo-chatbot-styles';
        style.textContent = `
            :root {
                --rosa-primario: #FF69B4;
                --rosa-secundario: #FFB6C1;
                --salmon: #FFA07A;
                --amarillo: #FFD700;
                --blanco: #FFFFFF;
                --negro: #000000;
            }
            
            /* ===== BOTÓN FLOTANTE - SIEMPRE VISIBLE ===== */
            #relevo-chatbot-toggle {
                position: fixed !important;
                bottom: 20px !important;
                right: 20px !important;
                width: 70px !important;
                height: 70px !important;
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon)) !important;
                border: 3px solid var(--amarillo) !important;
                border-radius: 50% !important;
                color: var(--blanco) !important;
                font-size: 2.5rem !important;
                cursor: pointer !important;
                box-shadow: 0 10px 25px rgba(255, 105, 180, 0.6) !important;
                z-index: 999999 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: all 0.3s ease !important;
                padding: 0 !important;
                margin: 0 !important;
                line-height: 1 !important;
                transform: none !important;
                opacity: 1 !important;
                visibility: visible !important;
                pointer-events: auto !important;
                font-family: 'Fredoka One', cursive !important;
                animation: relevo-pulse 2s infinite !important;
            }
            
            #relevo-chatbot-toggle:hover {
                transform: scale(1.1) rotate(5deg) !important;
                box-shadow: 0 15px 35px rgba(255, 105, 180, 0.8) !important;
            }
            
            @keyframes relevo-pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            /* ===== CONTENEDOR DEL CHAT ===== */
            #relevo-chatbot-container {
                position: fixed !important;
                bottom: 100px !important;
                right: 20px !important;
                width: 350px !important;
                max-width: calc(100vw - 40px) !important;
                height: 500px !important;
                max-height: 70vh !important;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.95)) !important;
                border: 3px solid var(--rosa-primario) !important;
                border-radius: 20px !important;
                box-shadow: 0 15px 35px rgba(255, 105, 180, 0.5) !important;
                z-index: 999998 !important;
                display: none !important;
                flex-direction: column !important;
                overflow: hidden !important;
                backdrop-filter: blur(10px) !important;
                font-family: 'Nunito', sans-serif !important;
                transition: none !important;
                box-sizing: border-box !important;
            }
            
            /* Header */
            #relevo-chatbot-header {
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon)) !important;
                color: var(--blanco) !important;
                padding: 15px 20px !important;
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                font-family: 'Fredoka One', cursive !important;
                font-size: 1.2rem !important;
                border-bottom: 2px solid var(--amarillo) !important;
                flex-shrink: 0 !important;
            }
            
            #relevo-chatbot-header h4 {
                margin: 0 !important;
                color: var(--blanco) !important;
                font-size: 1.2rem !important;
            }
            
            #relevo-close-chatbot {
                background: transparent !important;
                border: none !important;
                color: var(--blanco) !important;
                font-size: 2rem !important;
                cursor: pointer !important;
                width: 30px !important;
                height: 30px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: transform 0.3s ease !important;
                padding: 0 !important;
                line-height: 1 !important;
            }
            
            #relevo-close-chatbot:hover {
                transform: rotate(90deg) !important;
                color: var(--amarillo) !important;
            }
            
            /* Mensajes */
            #relevo-chatbot-messages {
                flex: 1 !important;
                padding: 20px !important;
                overflow-y: auto !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 15px !important;
                background: linear-gradient(rgba(255, 105, 180, 0.05), rgba(255, 182, 193, 0.03)) !important;
            }
            
            .relevo-bot-message, .relevo-user-message {
                padding: 15px !important;
                font-size: 0.95rem !important;
                line-height: 1.5 !important;
                max-width: 85% !important;
                word-wrap: break-word !important;
                white-space: pre-line !important;
                animation: fadeIn 0.3s ease !important;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .relevo-bot-message {
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(255, 182, 193, 0.1)) !important;
                border: 1px solid rgba(255, 182, 193, 0.4) !important;
                border-radius: 15px 15px 15px 5px !important;
                color: var(--blanco) !important;
                align-self: flex-start !important;
                position: relative !important;
            }
            
            .relevo-bot-message::before {
                content: '👶' !important;
                position: absolute !important;
                left: -10px !important;
                top: -10px !important;
                background: var(--rosa-primario) !important;
                color: var(--blanco) !important;
                width: 25px !important;
                height: 25px !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-size: 0.8rem !important;
                border: 2px solid var(--amarillo) !important;
            }
            
            .relevo-user-message {
                background: linear-gradient(135deg, rgba(255, 182, 193, 0.2), rgba(255, 160, 122, 0.25)) !important;
                border: 1px solid rgba(255, 182, 193, 0.4) !important;
                border-radius: 15px 15px 5px 15px !important;
                color: var(--blanco) !important;
                align-self: flex-end !important;
            }
            
            /* Typing indicator */
            #relevo-typing-indicator {
                padding: 10px 20px !important;
                display: flex !important;
                gap: 5px !important;
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.15), rgba(255, 182, 193, 0.1)) !important;
                border: 1px solid rgba(255, 182, 193, 0.4) !important;
                border-radius: 15px 15px 15px 5px !important;
                margin: 0 20px 10px 20px !important;
                width: fit-content !important;
            }
            
            #relevo-typing-indicator span {
                width: 8px !important;
                height: 8px !important;
                background: var(--amarillo) !important;
                border-radius: 50% !important;
                display: inline-block !important;
                animation: typing 1.4s infinite ease-in-out both !important;
            }
            
            #relevo-typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
            #relevo-typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
            
            @keyframes typing {
                0%, 80%, 100% { transform: scale(0.6); opacity: 0.6; }
                40% { transform: scale(1); opacity: 1; }
            }
            
            .relevo-typing-hidden {
                display: none !important;
            }
            
            /* Input */
            #relevo-chatbot-input {
                padding: 15px !important;
                display: flex !important;
                gap: 10px !important;
                border-top: 2px solid rgba(255, 182, 193, 0.3) !important;
                background: rgba(255, 105, 180, 0.1) !important;
                flex-shrink: 0 !important;
            }
            
            #relevo-user-input {
                flex: 1 !important;
                padding: 12px 15px !important;
                border: 2px solid var(--rosa-secundario) !important;
                border-radius: 25px !important;
                background: rgba(0, 0, 0, 0.3) !important;
                color: var(--blanco) !important;
                font-family: 'Nunito', sans-serif !important;
                font-size: 16px !important;
            }
            
            #relevo-user-input:focus {
                outline: none !important;
                border-color: var(--amarillo) !important;
            }
            
            #relevo-send-btn {
                padding: 12px 25px !important;
                background: linear-gradient(135deg, var(--rosa-primario), var(--salmon)) !important;
                color: var(--blanco) !important;
                border: none !important;
                border-radius: 25px !important;
                cursor: pointer !important;
                font-family: 'Fredoka One', cursive !important;
                font-size: 1rem !important;
                transition: all 0.3s ease !important;
                min-width: 60px !important;
            }
            
            #relevo-send-btn:hover {
                transform: scale(1.05) !important;
                box-shadow: 0 5px 15px rgba(255, 105, 180, 0.6) !important;
            }
            
            /* Botones rápidos */
            #relevo-quick-questions {
                padding: 15px !important;
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 8px !important;
                border-top: 2px solid rgba(255, 182, 193, 0.2) !important;
                background: rgba(255, 105, 180, 0.15) !important;
                flex-shrink: 0 !important;
            }
            
            .relevo-quick-btn {
                padding: 8px 12px !important;
                background: linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(255, 182, 193, 0.4)) !important;
                border: 1px solid rgba(255, 182, 193, 0.4) !important;
                border-radius: 20px !important;
                color: var(--amarillo) !important;
                cursor: pointer !important;
                font-size: 0.8rem !important;
                transition: all 0.3s ease !important;
                font-family: 'Nunito', sans-serif !important;
                min-height: 40px !important;
            }
            
            .relevo-quick-btn:hover {
                background: linear-gradient(135deg, rgba(255, 182, 193, 0.5), rgba(255, 105, 180, 0.6)) !important;
                transform: translateY(-2px) !important;
                color: var(--blanco) !important;
            }
            
            /* Scrollbar */
            #relevo-chatbot-messages::-webkit-scrollbar {
                width: 6px !important;
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar-track {
                background: rgba(255, 105, 180, 0.1) !important;
            }
            
            #relevo-chatbot-messages::-webkit-scrollbar-thumb {
                background: linear-gradient(var(--rosa-primario), var(--rosa-secundario)) !important;
                border-radius: 10px !important;
            }
            
            /* ===== RESPONSIVE ===== */
            @media (max-width: 768px) {
                #relevo-chatbot-toggle {
                    width: 60px !important;
                    height: 60px !important;
                    font-size: 2rem !important;
                    bottom: 15px !important;
                    right: 15px !important;
                }
                
                #relevo-chatbot-container {
                    bottom: 85px !important;
                    right: 10px !important;
                    width: calc(100vw - 20px) !important;
                    max-width: none !important;
                    height: 60vh !important;
                }
                
                .relevo-quick-btn {
                    font-size: 0.75rem !important;
                    padding: 8px 10px !important;
                }
            }
            
            @media (max-width: 480px) {
                #relevo-chatbot-container {
                    height: 70vh !important;
                    bottom: 80px !important;
                }
            }
            
            /* iOS fixes */
            @supports (-webkit-touch-callout: none) {
                #relevo-chatbot-toggle,
                #relevo-chatbot-container {
                    -webkit-transform: translateZ(0) !important;
                    transform: translateZ(0) !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    // ======================================================
    // CONFIGURACIÓN DE EVENTOS
    // ======================================================
    function setupRelevoChatbotEvents() {
        const toggleBtn = document.getElementById('relevo-chatbot-toggle');
        const closeBtn = document.getElementById('relevo-close-chatbot');
        const sendBtn = document.getElementById('relevo-send-btn');
        const userInput = document.getElementById('relevo-user-input');
        const quickBtns = document.querySelectorAll('.relevo-quick-btn');
        const chatbotContainer = document.getElementById('relevo-chatbot-container');
        
        if (!toggleBtn || !chatbotContainer) return;
        
        // Abrir chat
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            chatbotContainer.style.display = 'flex';
            if (userInput) {
                setTimeout(() => userInput.focus(), 200);
            }
        });
        
        // Cerrar chat
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                chatbotContainer.style.display = 'none';
            });
        }
        
        // Enviar con Enter
        if (userInput) {
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    sendRelevoMessage();
                }
            });
        }
        
        // Botón de enviar
        if (sendBtn) {
            sendBtn.addEventListener('click', (e) => {
                e.preventDefault();
                sendRelevoMessage();
            });
        }
        
        // Botones rápidos
        quickBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.getAttribute('data-question');
                if (userInput) {
                    userInput.value = question;
                    sendRelevoMessage();
                }
            });
        });
        
        // Cerrar al hacer clic fuera (opcional, mejora UX)
        document.addEventListener('click', (e) => {
            if (chatbotContainer.style.display === 'flex' && 
                !chatbotContainer.contains(e.target) && 
                e.target !== toggleBtn &&
                !toggleBtn.contains(e.target)) {
                chatbotContainer.style.display = 'none';
            }
        });
    }

    // ======================================================
    // CONFIGURACIÓN DE BOTONES DE LA PÁGINA
    // ======================================================
    function setupRelevoPageButtons() {
        // Función para conectar botones existentes
        function connectButton(buttonId, message, type) {
            const button = document.getElementById(buttonId);
            if (button) {
                // Eliminar listeners anteriores para evitar duplicados
                const newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton, button);
                
                newButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    openRelevoChatbotWithMessage(message, type);
                });
            }
        }
        
        // Conectar botones específicos
        connectButton(
            'join-button-relevo',
            "👶 **¡QUÉ ALEGRÍA QUE QUIERAS QUE TUS HIJOS PARTICIPEN!**\n\nTe cuento cómo pueden sumarse a El Relevo:",
            'participar'
        );
        
        connectButton(
            'contact-chatbot-relevo',
            "👨‍👩‍👧‍👦 **¡HOLA, PAPÁ/MAMÁ!**\n\nEstoy aquí para ayudarte con toda la información que necesitas sobre nuestro ministerio de niños:",
            'padres'
        );
    }

    // ======================================================
    // FUNCIONES DEL CHAT
    // ======================================================
    function sendRelevoMessage() {
        const userInput = document.getElementById('relevo-user-input');
        if (!userInput) return;
        
        const message = userInput.value.trim();
        if (message === '') return;
        
        addRelevoMessage(message, 'user');
        userInput.value = '';
        
        showRelevoTyping();
        
        // Simular respuesta
        setTimeout(() => {
            hideRelevoTyping();
            const response = getRelevoResponse(message);
            addRelevoMessage(response, 'bot');
        }, 800);
    }

    function showRelevoTyping() {
        const indicator = document.getElementById('relevo-typing-indicator');
        if (indicator) {
            indicator.classList.remove('relevo-typing-hidden');
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
        
        // Procesar texto para enlaces
        let processedText = text;
        
        // Teléfonos
        processedText = processedText.replace(/3518\s*18-1770/g, 
            '<a href="tel:3518181770" style="color: #FFD700; text-decoration: underline;">3518 18-1770</a>');
        
        messageDiv.innerHTML = processedText;
        messagesContainer.appendChild(messageDiv);
        
        // Scroll al último mensaje
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // ======================================================
    // MOTOR DE RESPUESTAS
    // ======================================================
    function getRelevoResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (/(horario|horarios|cuándo|cuando|días|dias|domingo|miércoles|reuniones)/i.test(lowerMessage)) {
            return randomResponse('horarios');
        }
        if (/(participar|participan|asistir|venir|llevar|dejar|qué hago|como hago)/i.test(lowerMessage)) {
            return randomResponse('participar');
        }
        if (/(edades|edad|grupos|niveles|años|años|hasta)/i.test(lowerMessage)) {
            return randomResponse('edades');
        }
        if (/(contacto|contactar|teléfono|telefono|celular|llamar|whatsapp|consultas|3518)/i.test(lowerMessage)) {
            return randomResponse('contacto');
        }
        if (/(líder|lider|maestra|maestras|natalia|negreti|profesora)/i.test(lowerMessage)) {
            return randomResponse('lider');
        }
        if (/(actividades|qué hacen|que hacen|aprenden|enseñanza|manualidades|canciones|juegos)/i.test(lowerMessage)) {
            return randomResponse('actividades');
        }
        if (/(seguridad|protección|cuidado|supervisión|confianza)/i.test(lowerMessage)) {
            return randomResponse('seguridad');
        }
        if (/(dónde|donde|ubicación|ubicacion|lugar|dirección|direccion)/i.test(lowerMessage)) {
            return randomResponse('ubicacion');
        }
        if (/(padres|papá|mamá|familia|preguntas|dudas)/i.test(lowerMessage)) {
            return randomResponse('padres');
        }
        if (/(versículo|versiculo|biblia|escritura|proverbios|mateo|palabra)/i.test(lowerMessage)) {
            return randomResponse('versiculos');
        }
        if (/(hola|buenos días|buenas tardes|buenas noches|saludos)/i.test(lowerMessage)) {
            return "👶 ¡Hola! Bendiciones. ¿En qué puedo ayudarte con información sobre El Relevo?";
        }
        if (/(gracias|thank|agradezco)/i.test(lowerMessage)) {
            return "👶 ¡De nada! ¿Necesitas algo más?";
        }
        
        const defaultResponses = [
            "👶 Perdona, no entendí. Puedo ayudarte con horarios, cómo participar, edades o actividades.",
            "Disculpa, no reconozco esa consulta. ¿Te interesaría saber sobre horarios o cómo participar?",
            "No entendí bien. Puedo informarte sobre horarios, edades (hasta 10 años), actividades y más."
        ];
        
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        
        function randomResponse(category) {
            const responses = relevoChatbotKnowledge[category];
            if (!responses || responses.length === 0) {
                return "👶 Información no disponible. Contacta al 📞 3518 18-1770 (Natalia Negreti).";
            }
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }

    function openRelevoChatbotWithMessage(message, type = 'general') {
        const chatbotContainer = document.getElementById('relevo-chatbot-container');
        const userInput = document.getElementById('relevo-user-input');
        
        if (!chatbotContainer) return;
        
        // Mostrar el chat
        chatbotContainer.style.display = 'flex';
        
        // Limpiar mensajes (opcional - mantiene los primeros 3)
        const messagesContainer = document.getElementById('relevo-chatbot-messages');
        if (messagesContainer) {
            // Eliminar mensajes después del tercero
            const children = Array.from(messagesContainer.children);
            for (let i = 3; i < children.length; i++) {
                messagesContainer.removeChild(children[i]);
            }
        }
        
        // Añadir mensaje personalizado
        setTimeout(() => {
            addRelevoMessage(message, 'bot');
            
            showRelevoTyping();
            
            setTimeout(() => {
                hideRelevoTyping();
                
                if (type === 'participar') {
                    addRelevoMessage(randomResponse('participar'), 'bot');
                } else if (type === 'padres') {
                    addRelevoMessage(randomResponse('padres'), 'bot');
                } else {
                    addRelevoMessage("¿En qué más puedo ayudarte?", 'bot');
                }
            }, 1000);
        }, 200);
        
        if (userInput) setTimeout(() => userInput.focus(), 500);
        
        function randomResponse(category) {
            const responses = relevoChatbotKnowledge[category];
            return responses ? responses[0] : "Información disponible en la iglesia.";
        }
    }

    // ======================================================
    // INICIALIZACIÓN MÚLTIPLE PERO CONTROLADA
    // ======================================================
    
    // Estrategia: intentar varias veces pero solo la primera funciona
    let initAttempts = 0;
    const maxAttempts = 3;
    
    function tryInit() {
        if (initAttempts >= maxAttempts) return;
        initAttempts++;
        
        if (document.body) {
            initializeRelevoChatbot();
        } else {
            setTimeout(tryInit, 100);
        }
    }
    
    // Intentar en diferentes momentos
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInit);
    } else {
        tryInit();
    }
    
    window.addEventListener('load', () => {
        if (initAttempts < maxAttempts) tryInit();
    });
    
    // Exponer función global para botones
    window.openRelevoChatbotWithCustomMessage = openRelevoChatbotWithMessage;
    window.openCustomRelevoChatbot = openRelevoChatbotWithMessage;

    console.log('👶 Sistema de chatbot El Relevo instalado correctamente');
}