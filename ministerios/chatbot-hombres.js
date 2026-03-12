// chatbot-hombres.js
document.addEventListener('DOMContentLoaded', function() {
    // Extraer información del HTML de Hombres de Poder
    function extractHombresInfo() {
        const info = {
            nombre: "Hombres de Poder",
            descripcion: "Forjados en la fragua de Dios",
            reuniones: "Viernes cada 15 días a las 20:00 PM",
            lugar: "Auditorio Mayor - Av. Tillard 1318 B° Cofico",
            lider: "Pastor Walter Buchin",
            contacto: {
                telefono: "+54 351 627-7684",
                email: "hombrespoderiglesia@gmail.com",
                ubicacion: "Av. Tillard 1318 B° Cofico"
            },
            eventos: [
                "Reunión cada 15 días - Viernes 20 PM",
                "Congresos - Por anunciar",
                "Retiros - En preparación"
            ],
            valores: ["Valentía", "Integridad", "Protección"]
        };
        
        return info;
    }

    const hombresInfo = extractHombresInfo();

    // Variable para saber si el chatbot ya está inicializado
    let chatbotInitialized = false;

    // Crear elementos del chatbot
    function createChatbotElements() {
        if (chatbotInitialized) return;
        
        console.log('⚔️ Creando elementos del chatbot...');
        
        const chatbotHTML = `
            <style>
                /* Estilos del chatbot basados en la página Hombres de Poder */
                :root {
                    --bronze-dark: #8B4513;
                    --bronze-medium: #D2691E;
                    --bronze-light: #CD853F;
                    --gold-warrior: #D4AF37;
                    --gold-light: #F1C40F;
                }
                
                /* Chatbot Container */
                #hombres-chatbot-container {
                    position: fixed;
                    bottom: 90px;
                    right: 20px;
                    width: 350px;
                    height: 500px;
                    background: rgba(20, 20, 20, 0.98);
                    border: 2px solid var(--bronze-medium);
                    border-radius: 10px;
                    box-shadow: 
                        0 10px 30px rgba(0, 0, 0, 0.7),
                        0 0 50px rgba(210, 105, 30, 0.2);
                    z-index: 10000;
                    flex-direction: column;
                    overflow: hidden;
                    backdrop-filter: blur(10px);
                    font-family: 'Montserrat', sans-serif;
                    display: none; /* Inicialmente oculto */
                }
                
                /* Header */
                #hombres-chatbot-header {
                    background: linear-gradient(90deg, var(--bronze-dark), var(--bronze-medium));
                    padding: 15px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 2px solid var(--bronze-medium);
                }
                
                #hombres-chatbot-header h4 {
                    font-family: 'Cinzel', serif;
                    color: var(--gold-light);
                    margin: 0;
                    font-size: 1.3rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                #hombres-close-chatbot {
                    background: transparent;
                    border: none;
                    color: var(--gold-light);
                    font-size: 1.8rem;
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s;
                    line-height: 1;
                }
                
                #hombres-close-chatbot:hover {
                    background: rgba(212, 175, 55, 0.2);
                    transform: rotate(90deg);
                }
                
                /* Mensajes */
                #hombres-chatbot-messages {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    background: rgba(10, 10, 10, 0.9);
                }
                
                .hombres-bot-message {
                    background: rgba(44, 62, 80, 0.9);
                    border: 1px solid var(--bronze-dark);
                    border-radius: 10px 10px 10px 0;
                    padding: 12px 15px;
                    color: #ccc;
                    max-width: 85%;
                    align-self: flex-start;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    word-wrap: break-word;
                }
                
                .hombres-user-message {
                    background: rgba(139, 69, 19, 0.9);
                    border: 1px solid var(--bronze-medium);
                    border-radius: 10px 10px 0 10px;
                    padding: 12px 15px;
                    color: #fff;
                    max-width: 85%;
                    align-self: flex-end;
                    text-align: right;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    word-wrap: break-word;
                }
                
                /* Input */
                #hombres-chatbot-input {
                    padding: 15px;
                    display: flex;
                    gap: 10px;
                    border-top: 1px solid rgba(205, 133, 63, 0.3);
                    background: rgba(20, 20, 20, 0.95);
                }
                
                #hombres-user-input {
                    flex: 1;
                    padding: 10px 15px;
                    background: rgba(30, 30, 30, 0.9);
                    border: 1px solid var(--bronze-dark);
                    border-radius: 5px;
                    color: #fff;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 0.9rem;
                }
                
                #hombres-user-input:focus {
                    outline: none;
                    border-color: var(--bronze-medium);
                    box-shadow: 0 0 10px rgba(210, 105, 30, 0.3);
                }
                
                #hombres-send-btn {
                    background: linear-gradient(145deg, var(--bronze-medium), var(--bronze-dark));
                    color: #fff;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-family: 'Cinzel', serif;
                    font-weight: 600;
                    transition: all 0.3s;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    min-width: 60px;
                }
                
                #hombres-send-btn:hover {
                    background: linear-gradient(145deg, var(--bronze-light), var(--bronze-medium));
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(210, 105, 30, 0.4);
                }
                
                /* Botones rápidos */
                #hombres-quick-questions {
                    padding: 15px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    border-top: 1px solid rgba(205, 133, 63, 0.2);
                    background: rgba(28, 40, 51, 0.9);
                }
                
                .hombres-quick-btn {
                    background: rgba(44, 62, 80, 0.9);
                    border: 1px solid var(--bronze-dark);
                    color: #bbb;
                    padding: 8px 12px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 0.8rem;
                    transition: all 0.2s;
                    font-family: 'Raleway', sans-serif;
                }
                
                .hombres-quick-btn:hover {
                    background: rgba(139, 69, 19, 0.9);
                    color: #fff;
                    border-color: var(--bronze-medium);
                    transform: translateY(-2px);
                }
                
                /* Botón flotante */
                #hombres-chatbot-toggle {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(145deg, var(--bronze-dark), var(--bronze-medium));
                    color: var(--gold-light);
                    border: 2px solid var(--bronze-medium);
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    font-size: 1.8rem;
                    cursor: pointer;
                    box-shadow: 
                        0 5px 20px rgba(0, 0, 0, 0.7),
                        0 0 20px rgba(210, 105, 30, 0.3);
                    z-index: 9999;
                    transition: all 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Cinzel', serif;
                }
                
                #hombres-chatbot-toggle:hover {
                    transform: scale(1.1);
                    box-shadow: 
                        0 8px 25px rgba(0, 0, 0, 0.8),
                        0 0 30px rgba(210, 105, 30, 0.5);
                }
                
                /* Botón "Quiero ser parte" para la página */
                .quiero-ser-parte-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 30px;
                    padding: 15px 30px;
                    background: linear-gradient(145deg, var(--bronze-medium), var(--bronze-dark));
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-family: 'Cinzel', serif;
                    font-weight: 600;
                    font-size: 1.1rem;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                }
                
                .quiero-ser-parte-btn:hover {
                    background: linear-gradient(145deg, var(--bronze-light), var(--bronze-medium));
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(210, 105, 30, 0.4);
                    color: var(--gold-light);
                }
                
                /* Scrollbar */
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
                
                /* Responsive */
                @media (max-width: 768px) {
                    #hombres-chatbot-container {
                        width: 95vw;
                        right: 2.5vw;
                        bottom: 80px;
                        height: 60vh;
                        max-height: 70vh;
                    }
                    
                    #hombres-chatbot-toggle {
                        width: 50px;
                        height: 50px;
                        font-size: 1.5rem;
                    }
                    
                    .quiero-ser-parte-btn {
                        padding: 12px 25px;
                        font-size: 1rem;
                        margin-top: 20px;
                    }
                    
                    .hombres-bot-message,
                    .hombres-user-message {
                        max-width: 90%;
                    }
                }
            </style>

            <!-- Chatbot Container -->
            <div id="hombres-chatbot-container">
                <!-- Header -->
                <div id="hombres-chatbot-header">
                    <h4>⚔️ Hombres de Poder</h4>
                    <button id="hombres-close-chatbot" title="Cerrar">&times;</button>
                </div>
                
                <!-- Mensajes -->
                <div id="hombres-chatbot-messages">
                    <div class="hombres-bot-message">⚔️ ¡Bienvenido, guerrero! Soy tu asistente de Hombres de Poder.</div>
                    <div class="hombres-bot-message">Estoy aquí para ayudarte con información sobre nuestro ministerio de hombres.</div>
                    <div class="hombres-bot-message">Puedes preguntarme sobre: reuniones, eventos, contacto, líder, etc.</div>
                </div>
                
                <!-- Input -->
                <div id="hombres-chatbot-input">
                    <input type="text" id="hombres-user-input" placeholder="Escribe tu pregunta..." autocomplete="off">
                    <button id="hombres-send-btn" title="Enviar">Enviar</button>
                </div>
                
                <!-- Botones rápidos -->
                <div id="hombres-quick-questions">
                    <button class="hombres-quick-btn" data-question="¿Cuándo hay reuniones?">🕒 Reuniones</button>
                    <button class="hombres-quick-btn" data-question="¿Cuáles eventos hay?">📅 Eventos</button>
                    <button class="hombres-quick-btn" data-question="¿Quién es el líder?">👤 Líder</button>
                    <button class="hombres-quick-btn" data-question="¿Cómo me contacto?">📞 Contacto</button>
                </div>
            </div>

            <!-- Botón flotante -->
            <button id="hombres-chatbot-toggle" title="Abrir chat de Hombres de Poder">⚔️</button>
        `;
        
        // Insertar en el body
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        chatbotInitialized = true;
        console.log('✅ Elementos del chatbot creados');
    }

    // Función para agregar botón "Quiero ser parte" a la página
    function addJoinButtonToPage() {
        console.log('🔍 Buscando lugares para añadir botón "Quiero ser parte"...');
        
        // Buscar la sección de contacto en el footer
        const footerContactSection = document.querySelector('.hombres-footer');
        
        // Buscar la sección "Únete"
        const joinSection = document.getElementById('unete');
        
        let targetElement = null;
        
        // 1. Intentar agregar en la sección "Únete"
        if (joinSection) {
            console.log('✅ Encontrada sección "Únete"');
            targetElement = joinSection;
        } 
        // 2. Si no, en el footer
        else if (footerContactSection) {
            console.log('✅ Encontrado footer');
            targetElement = footerContactSection;
        }
        // 3. Si no, en el body
        else {
            targetElement = document.body;
        }
        
        if (targetElement) {
            // Buscar un buen lugar para insertar
            const existingButton = targetElement.querySelector('#btn-quiero-ser-parte');
            if (existingButton) {
                console.log('✅ Botón ya existe');
                return true;
            }
            
            const joinButtonHTML = `
                <div style="text-align: center; margin: 40px 0; padding: 20px;">
                    <button id="btn-quiero-ser-parte" class="quiero-ser-parte-btn">
                        <i class="fas fa-fist-raised"></i> QUIERO SER PARTE
                    </button>
                    <p style="margin-top: 15px; color: #bbb; font-size: 0.9rem; font-family: 'Montserrat', sans-serif;">
                        Haz clic para hablar con nuestro asistente y unirte a Hombres de Poder
                    </p>
                </div>
            `;
            
            // Insertar en el targetElement
            targetElement.insertAdjacentHTML('beforeend', joinButtonHTML);
            
            console.log('✅ Botón "Quiero ser parte" añadido a la página');
            
            // Configurar evento del botón
            const joinButton = document.getElementById('btn-quiero-ser-parte');
            if (joinButton) {
                joinButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    console.log('🎯 Botón "Quiero ser parte" clickeado');
                    
                    // Asegurarse de que el chatbot esté creado
                    if (!chatbotInitialized) {
                        createChatbotElements();
                        setupChatbotEvents();
                    }
                    
                    openChatbotWithCustomMessage(
                        "🎯 ¡EXCELENTE DECISIÓN, GUERRERO! \n\nVeo que quieres unirte a Hombres de Poder. Soy tu asistente virtual y te voy a guiar en el proceso paso a paso:",
                        'unirse'
                    );
                });
            }
            
            return true;
        } else {
            console.warn('⚠️ No se encontró un lugar adecuado para añadir el botón');
            return false;
        }
    }

    // Función para abrir chatbot con mensaje personalizado
    function openChatbotWithCustomMessage(message, type = 'general') {
        console.log('📱 Abriendo chatbot...');
        
        const chatbotContainer = document.getElementById('hombres-chatbot-container');
        const userInput = document.getElementById('hombres-user-input');
        
        if (!chatbotContainer) {
            console.error('❌ No se encontró el chatbot container');
            // Intentar crear de nuevo
            createChatbotElements();
            setupChatbotEvents();
            
            // Reintentar después de un breve delay
            setTimeout(() => {
                const newContainer = document.getElementById('hombres-chatbot-container');
                if (newContainer) {
                    showChatbotWithMessage(message, type);
                }
            }, 100);
            return;
        }
        
        showChatbotWithMessage(message, type);
    }
    
    // Función auxiliar para mostrar el chatbot con mensaje
    function showChatbotWithMessage(message, type) {
        const chatbotContainer = document.getElementById('hombres-chatbot-container');
        const userInput = document.getElementById('hombres-user-input');
        
        console.log('📱 Mostrando chatbot...');
        
        // Mostrar el chatbot
        chatbotContainer.style.display = 'flex';
        
        // Forzar repaint para asegurar la transición
        chatbotContainer.offsetHeight;
        
        // Efecto de animación
        chatbotContainer.style.opacity = '0';
        chatbotContainer.style.transform = 'translateY(20px) scale(0.95)';
        
        setTimeout(() => {
            chatbotContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            chatbotContainer.style.opacity = '1';
            chatbotContainer.style.transform = 'translateY(0) scale(1)';
        }, 10);
        
        // Limpiar mensajes anteriores (dejar solo los 3 primeros de bienvenida)
        const messagesContainer = document.getElementById('hombres-chatbot-messages');
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
            addHombresMessage(message, 'bot');
            
            // Agregar información adicional según el tipo
            setTimeout(() => {
                if (type === 'unirse') {
                    addHombresMessage(
                        "**PASOS PARA UNIRTE A HOMBRES DE PODER:**\n\n" +
                        "1️⃣ **ASISTE** a nuestra reunión de los viernes 20:00 PM\n" +
                        "2️⃣ **CONOCE** a nuestros líderes y hermanos\n" + 
                        "3️⃣ **PARTICIPA** en las actividades de bienvenida\n" +
                        "4️⃣ **INSCRÍBETE** formalmente para ser miembro\n\n" +
                        "**INFORMACIÓN DE CONTACTO:**\n" +
                        "📞 Teléfono: " + hombresInfo.contacto.telefono + "\n" +
                        "📧 Email: " + hombresInfo.contacto.email + "\n" +
                        "📍 Lugar: " + hombresInfo.lugar + "\n\n" +
                        "¿Te gustaría saber más sobre algún paso en particular?",
                        'bot'
                    );
                }
            }, 800);
        }, 300);
        
        // Enfocar el input después de 500ms
        if (userInput) {
            setTimeout(() => {
                userInput.focus();
            }, 500);
        }
    }

    // Función para procesar preguntas
    function getHombresResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('reunión') || lowerMessage.includes('reuniones') || lowerMessage.includes('cuándo') || lowerMessage.includes('horario')) {
            return `⚔️ Las reuniones de <strong>Hombres de Poder</strong> son:<br>
                    <strong>Día:</strong> Viernes cada 15 días<br>
                    <strong>Hora:</strong> 20:00 PM<br>
                    <strong>Lugar:</strong> ${hombresInfo.lugar}`;
        }
        else if (lowerMessage.includes('evento') || lowerMessage.includes('próximo') || lowerMessage.includes('próximos')) {
            let eventosText = `<strong>Eventos próximos:</strong><br><ul>`;
            hombresInfo.eventos.forEach(evento => {
                eventosText += `<li>${evento}</li>`;
            });
            eventosText += `</ul>`;
            return eventosText;
        }
        else if (lowerMessage.includes('líder') || lowerMessage.includes('pastor') || lowerMessage.includes('quién')) {
            return `👤 El líder de <strong>Hombres de Poder</strong> es:<br>
                    <strong>${hombresInfo.lider}</strong><br>
                    Puedes contactarlo a: ${hombresInfo.contacto.telefono}`;
        }
        else if (lowerMessage.includes('contacto') || lowerMessage.includes('dónde') || lowerMessage.includes('teléfono') || lowerMessage.includes('email')) {
            return `📞 <strong>Información de contacto:</strong><br>
                    • Teléfono: ${hombresInfo.contacto.telefono}<br>
                    • Email: ${hombresInfo.contacto.email}<br>
                    • Ubicación: ${hombresInfo.contacto.ubicacion}<br><br>
                    📍 <strong>Reuniones en:</strong> ${hombresInfo.lugar}`;
        }
        else if (lowerMessage.includes('redes') || lowerMessage.includes('social') || lowerMessage.includes('facebook') || lowerMessage.includes('instagram')) {
            return `🌐 No hay redes sociales específicas mencionadas en la página.<br>
                    Para información, contacta al: ${hombresInfo.contacto.telefono}<br>
                    O envía un email a: ${hombresInfo.contacto.email}`;
        }
        else if (lowerMessage.includes('valores') || lowerMessage.includes('qué es') || lowerMessage.includes('ministerio')) {
            return `🛡️ <strong>Hombres de Poder</strong> es un ministerio donde los varones se transforman en guerreros del Reino.<br><br>
                    <strong>Valores:</strong> ${hombresInfo.valores.join(', ')}<br><br>
                    Formamos guerreros espirituales, padres intencionales, esposos apasionados y líderes transformadores.`;
        }
        else if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('saludos')) {
            return `⚔️ ¡Hola, guerrero! Bienvenido al asistente de Hombres de Poder. ¿En qué puedo ayudarte hoy?`;
        }
        else if (lowerMessage.includes('gracias') || lowerMessage.includes('thank')) {
            return `🛡️ ¡De nada, guerrero! Recuerda: "Sed fuertes y valientes" (Deuteronomio 31:6)<br>¿Hay algo más en lo que pueda ayudarte?`;
        }
        else if (lowerMessage.includes('unirme') || lowerMessage.includes('participar') || lowerMessage.includes('integrarme') || lowerMessage.includes('quiero ser parte')) {
            return `🎯 <strong>PARA UNIRTE A HOMBRES DE PODER:</strong><br>
                    1. Asiste a nuestra reunión de los viernes 20:00 PM<br>
                    2. Contacta al: ${hombresInfo.contacto.telefono}<br>
                    3. O envía un email a: ${hombresInfo.contacto.email}<br>
                    4. También puedes usar el botón "QUIERO SER PARTE" en la página<br><br>
                    ¡Te esperamos! ⚔️`;
        }
        else {
            return `⚔️ Puedo ayudarte con información sobre:<br>
                    • Fechas y horarios de reuniones<br>
                    • Próximos eventos<br>
                    • Información del líder<br>
                    • Cómo contactarnos<br>
                    • Valores del ministerio<br><br>
                    ¿Qué necesitas saber específicamente?`;
        }
    }

    // Función para agregar mensaje al chat
    function addHombresMessage(text, sender) {
        const messagesContainer = document.getElementById('hombres-chatbot-messages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'bot' ? 'hombres-bot-message' : 'hombres-user-message';
        messageDiv.innerHTML = text;
        
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

    // Función para enviar mensaje
    function sendHombresMessage() {
        const userInput = document.getElementById('hombres-user-input');
        const message = userInput.value.trim();
        
        if (message === '') return;
        
        // Mostrar mensaje del usuario
        addHombresMessage(message, 'user');
        
        // Procesar y obtener respuesta
        setTimeout(() => {
            const response = getHombresResponse(message);
            addHombresMessage(response, 'bot');
        }, 600);
        
        // Limpiar input
        userInput.value = '';
        userInput.focus();
    }

    // Configurar eventos del chatbot
    function setupChatbotEvents() {
        console.log('⚙️ Configurando eventos del chatbot...');
        
        const toggleBtn = document.getElementById('hombres-chatbot-toggle');
        const closeBtn = document.getElementById('hombres-close-chatbot');
        const sendBtn = document.getElementById('hombres-send-btn');
        const userInput = document.getElementById('hombres-user-input');
        const quickBtns = document.querySelectorAll('.hombres-quick-btn');
        const chatbotContainer = document.getElementById('hombres-chatbot-container');
        
        if (!toggleBtn || !chatbotContainer) {
            console.error('❌ No se encontraron elementos del chatbot');
            return;
        }
        
        console.log('✅ Elementos encontrados:', {
            toggleBtn: !!toggleBtn,
            chatbotContainer: !!chatbotContainer,
            closeBtn: !!closeBtn,
            sendBtn: !!sendBtn,
            userInput: !!userInput,
            quickBtns: quickBtns.length
        });
        
        // Abrir chatbot con botón flotante
        toggleBtn.addEventListener('click', function() {
            console.log('🔼 Botón flotante clickeado');
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
            console.log('🔽 Cerrando chatbot');
            chatbotContainer.style.display = 'none';
        });
        
        // Enviar con Enter
        if (userInput) {
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    sendHombresMessage();
                }
            });
        }
        
        // Enviar con botón
        if (sendBtn) {
            sendBtn.addEventListener('click', sendHombresMessage);
        }
        
        // Botones rápidos
        quickBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const question = this.getAttribute('data-question');
                if (userInput) {
                    userInput.value = question;
                    sendHombresMessage();
                }
            });
        });
        
        console.log('✅ Eventos del chatbot configurados');
    }

    // Inicializar el chatbot
    function initializeHombresChatbot() {
        console.log('⚔️ Inicializando chatbot de Hombres de Poder...');
        createChatbotElements();
        setupChatbotEvents();
        
        // Agregar botón "Quiero ser parte" a la página
        setTimeout(() => {
            const success = addJoinButtonToPage();
            if (!success) {
                console.warn('⚠️ No se pudo agregar el botón "Quiero ser parte". Intentando de nuevo en 1 segundo...');
                setTimeout(addJoinButtonToPage, 1000);
            }
        }, 500);
        
        console.log('✅ Chatbot de Hombres de Poder listo');
    }

    // Inicializar cuando cargue la página
    setTimeout(initializeHombresChatbot, 1000);

    // Funciones globales
    window.openHombresChatbot = function(type = 'general') {
        if (type === 'unirse') {
            openChatbotWithCustomMessage(
                "🎯 ¡EXCELENTE DECISIÓN, GUERRERO! \n\nVeo que quieres unirte a Hombres de Poder.",
                'unirse'
            );
        } else {
            openChatbotWithCustomMessage(
                "⚔️ ¡Hola, guerrero! Soy tu asistente de Hombres de Poder. ¿En qué puedo ayudarte?",
                'general'
            );
        }
    };

    window.closeHombresChatbot = function() {
        const chatbotContainer = document.getElementById('hombres-chatbot-container');
        if (chatbotContainer) {
            chatbotContainer.style.display = 'none';
        }
    };
});

console.log('⚔️ chatbot-hombres.js cargado - Esperando inicialización');