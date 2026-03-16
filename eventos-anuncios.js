// ============================================
// SISTEMA DE ANUNCIOS DE EVENTOS - GUARDADO PARA ABRIL
// ============================================

/* 
const eventosMinisterios = [
    {
        id: 2,
        titulo: "🚨 ¡HOY! Congreso de Mujeres Reina Mía",
        fecha: "13 de Marzo - APERTURA 20:00hs",
        descripcion: "CONGRESO DE MUJERES 'TOCANDO SU TRONO' - ¡Una noche de adoración y empoderamiento que no te puedes perder!",
        ministerio: "mujeres",
        tipo: "banner",
        activo: true,
        enlace: "ministerios/ministerio-mujeres.html#eventos",
        mostrarCada: 0
    }
];

let anuncioActual = 0;
let intervaloAnuncios;
let sistemaAnunciosIniciado = false;

function inicializarSistemaAnuncios() {
    if (sistemaAnunciosIniciado) return;
    sistemaAnunciosIniciado = true;
    
    console.log('🎪 Inicializando sistema de anuncios');
    
    if (!document.getElementById('eventoBanner')) {
        crearElementosAnuncios();
    }
    
    setTimeout(() => {
        const eventosActivos = eventosMinisterios.filter(e => e.activo);
        
        if (eventosActivos.length === 0) {
            console.log('📭 No hay eventos activos');
            return;
        }
        
        mostrarAnuncio(eventosActivos[0]);
        
        intervaloAnuncios = setInterval(() => {
            const eventosActivos = eventosMinisterios.filter(e => e.activo);
            if (eventosActivos.length > 0) {
                mostrarAnuncio(eventosActivos[0]);
            }
        }, 120000);
        
        console.log('✅ Sistema de anuncios activo');
        
    }, 1000);
}

function crearElementosAnuncios() {
    const anunciosHTML = `
        <!-- Banner superior -->
        <div id="eventoBanner" class="evento-banner" style="display: none;">
            <div class="banner-content">
                <span class="banner-badge">🔥 ¡MAÑANA! 🔥</span>
                <p id="bannerTitulo">Cargando eventos...</p>
                <a href="javascript:void(0);" id="bannerEnlace" class="banner-btn">Más información</a>
            </div>
            <button class="close-banner" id="closeBanner">×</button>
        </div>

        <!-- Notificación flotante -->
        <div id="eventoFlotante" class="evento-flotante" style="display: none;">
            <div class="flotante-header">
                <span>📢 EVENTO ESPECIAL</span>
                <button class="close-flotante">×</button>
            </div>
            <div class="flotante-content">
                <h4 id="flotanteTitulo">Cargando evento...</h4>
                <p class="fecha-evento" id="flotanteFecha">Fecha por confirmar</p>
                <p class="desc-evento" id="flotanteDesc">Descripción del evento</p>
                <a href="javascript:void(0);" id="flotanteEnlace" class="btn-flotante">Ver detalles</a>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', anunciosHTML);
}

function mostrarAnuncio(evento) {
    if (!evento || !evento.activo) return;
    mostrarBanner(evento);
}

function mostrarBanner(evento) {
    const banner = document.getElementById('eventoBanner');
    const titulo = document.getElementById('bannerTitulo');
    const enlace = document.getElementById('bannerEnlace');
    
    if (!banner || !titulo || !enlace) return;
    
    titulo.textContent = `${evento.titulo} - ${evento.fecha}`;
    enlace.removeAttribute('onclick');
    
    enlace.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const pathParts = window.location.pathname.split('/');
        let basePath = '';
        
        if (window.location.pathname.includes('/ministerios/')) {
            basePath = '../';
        }
        
        const url = basePath + evento.enlace;
        console.log('🔗 Navegando a:', url);
        window.location.href = url;
        return false;
    };
    
    enlace.href = 'javascript:void(0);';
    enlace.textContent = '¡Ver detalles del Congreso!';
    
    banner.style.background = 'linear-gradient(135deg, #b8860b, #d4af37, #ffd700)';
    banner.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.6)';
    banner.style.borderBottom = '2px solid white';
    banner.style.display = 'flex';
    
    const closeBtn = document.getElementById('closeBanner');
    if (closeBtn) {
        closeBtn.replaceWith(closeBtn.cloneNode(true));
        const newCloseBtn = document.getElementById('closeBanner');
        newCloseBtn.onclick = function() {
            banner.style.display = 'none';
        };
    }
    
    setTimeout(() => {
        if (banner.style.display === 'flex') {
            banner.style.display = 'none';
        }
    }, 30000);
}
*/