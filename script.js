// Datos de ejemplo de videos
const videos = [
    {
        id: 1,
        title: "Clase 1 - Fundamentos del Karate - Postura y Respiración",
        description: "Aprende los principios básicos del karate: postura correcta, respiración y concentración. Fundamentos esenciales para todo practicante.",
        videoUrl: "https://www.youtube.com/embed/_8bmMYCwJCM",
        thumbnail: "https://img.youtube.com/vi/_8bmMYCwJCM/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 2,
        title: "Clase 2 - Posiciones Básicas: Dachi y Kamae",
        description: "Domina las posiciones fundamentales del karate: zenkutsu-dachi, kokutsu-dachi y kiba-dachi. Aprende la correcta alineación y distribución del peso.",
        videoUrl: "https://www.youtube.com/embed/CB2KFb88gbc",
        thumbnail: "https://img.youtube.com/vi/CB2KFb88gbc/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 3,
        title: "Clase 3 - Técnicas de Puño: Tsuki y Uchi",
        description: "Aprende las técnicas básicas de puño: oi-tsuki, gyaku-tsuki y uraken-uchi. Técnicas esenciales para el combate y katas.",
        videoUrl: "https://www.youtube.com/embed/tlN8u7lMcJI",
        thumbnail: "https://img.youtube.com/vi/tlN8u7lMcJI/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 4,
        title: "Clase 4 - Técnicas de Patada: Geri y Mawashi",
        description: "Domina las patadas fundamentales: mae-geri, yoko-geri y mawashi-geri. Aprende la técnica correcta y el equilibrio.",
        videoUrl: "https://www.youtube.com/embed/GBaM9GJLwhI",
        thumbnail: "https://img.youtube.com/vi/GBaM9GJLwhI/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 5,
        title: "Clase 5 - Técnica de Defensa Baja y Golpe de Puño",
        description: "Aprende la correcta ejecución y técnica de la defensa baja (gedan-barai) y el golpe de puño básico. Ejercicios para mejorar tu precisión y efectividad en la defensa y el ataque.",
        videoUrl: "https://www.youtube.com/embed/KG58XGqE0D0",
        thumbnail: "https://img.youtube.com/vi/KG58XGqE0D0/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 6,
        title: "Clase 6 - Técnicas de Empuje y Golpes de Puño",
        description: "Aprende las técnicas de empuje (oshi) y los diferentes tipos de golpes con el puño. Ejercicios para mejorar tu potencia y precisión en los ataques.",
        videoUrl: "https://www.youtube.com/embed/YjM2xWJduXQ",
        thumbnail: "https://img.youtube.com/vi/YjM2xWJduXQ/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 7,
        title: "Clase 7 - Hikite, Tsukite y Kiba Dachi",
        description: "Aprende la técnica de hikite (tirar el brazo) para aumentar la potencia de los golpes, la técnica de puño tsukite y la postura fundamental kiba dachi. Ejercicios para mejorar tu técnica y estabilidad.",
        videoUrl: "https://www.youtube.com/embed/dLqezGc0Q54",
        thumbnail: "https://img.youtube.com/vi/dLqezGc0Q54/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 8,
        title: "Clase 8 - Shuto Uke y Posturas Fundamentales",
        description: "Aprende la técnica de defensa con el canto de la mano (shuto uke) y dos posturas fundamentales del karate. Ejercicios para mejorar tu estabilidad y técnica defensiva.",
        videoUrl: "https://www.youtube.com/embed/0GKc2TBE8-M",
        thumbnail: "https://img.youtube.com/vi/0GKc2TBE8-M/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 9,
        title: "Clase 9 - Parada de Defensa y Patada Básica",
        description: "Aprende la técnica de parada de defensa (gedan kakiwake) y la patada básica (mae-geri). Ejercicios para mejorar tu precisión y efectividad en la defensa y el ataque.",
        videoUrl: "https://www.youtube.com/embed/_EqXdEBs7iE",
        thumbnail: "https://img.youtube.com/vi/_EqXdEBs7iE/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 10,
        title: "Clase 10 - Patadas y Golpes de Puño",
        description: "Aprende las técnicas fundamentales de patada: mikazuki geri, ura mikazuki geri y los golpes de puño básicos: oi-tsuki, gyaku-tsuki. Ejercicios para mejorar tu técnica y potencia.",
        videoUrl: "https://www.youtube.com/embed/Ze7WWjhlRrA",
        thumbnail: "https://img.youtube.com/vi/Ze7WWjhlRrA/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 11,
        title: "Clase 11 - Perfección de Defensas Básicas",
        description: "Perfecciona las técnicas básicas de defensa: gedan-barai, age-uke y soto-uke. Ejercicios detallados para mejorar tu precisión y efectividad en la defensa.",
        videoUrl: "https://www.youtube.com/embed/s-LH4styDbA",
        thumbnail: "https://img.youtube.com/vi/s-LH4styDbA/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 12,
        title: "Clase 12 - Defensas en Todas las Direcciones",
        description: "Aprende las técnicas de defensa en todas las direcciones: jodan, chudan y gedan. Ejercicios para mejorar tu capacidad de reacción y protección.",
        videoUrl: "https://www.youtube.com/embed/X6R2Q6rVRhU",
        thumbnail: "https://img.youtube.com/vi/X6R2Q6rVRhU/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 13,
        title: "Clase 13 - Kihones Complementarios",
        description: "Aprende los kihones complementarios esenciales para perfeccionar tu técnica. Ejercicios adicionales para mejorar tu ejecución y control.",
        videoUrl: "https://www.youtube.com/embed/ygTBq-KtIxE",
        thumbnail: "https://img.youtube.com/vi/ygTBq-KtIxE/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 14,
        title: "Clase 14 - Etiqueta en el Dojo: Reigi",
        description: "Aprende las normas de conducta y etiqueta en el dojo tradicional. Saludos, respeto, disciplina y protocolos esenciales para la práctica del karate.",
        videoUrl: "https://www.youtube.com/embed/p9t2JM0B7lA",
        thumbnail: "https://img.youtube.com/vi/p9t2JM0B7lA/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 15,
        title: "Clase 15 - Examen de Ingreso al Dojo",
        description: "Preparación para el examen de ingreso al dojo. Demuestra tu dominio de las técnicas básicas aprendidas y tu actitud marcial.",
        videoUrl: "https://www.youtube.com/embed/MhkrmOtpDAc",
        thumbnail: "https://img.youtube.com/vi/MhkrmOtpDAc/maxresdefault.jpg",
        level: "10kyu"
    },
    {
        id: 16,
        title: "Clase 16 - Primer Kihon: Oi Zuki, Fumi Dachi y Ayumi Ashi",
        description: "Aprende el primer kihon fundamental del karate: Oi Zuki (golpe de puño con avance), Fumi Dachi (postura de paso) y Ayumi Ashi (desplazamiento). Técnicas esenciales para el desarrollo de la potencia y la movilidad.",
        videoUrl: "https://www.youtube.com/embed/tXtYhh25UVE",
        thumbnail: "https://img.youtube.com/vi/tXtYhh25UVE/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 17,
        title: "Clase 17 - Segundo Kihon 9 Kyu: Jodan Age Uke y Fortalecimiento",
        description: "Aprende el segundo kihon del nivel 9 kyu: Jodan Age Uke (defensa alta) y ejercicios de fortalecimiento. Técnicas fundamentales para desarrollar la defensa superior y mejorar la condición física.",
        videoUrl: "https://www.youtube.com/embed/jmwlXhEVjVk",
        thumbnail: "https://img.youtube.com/vi/jmwlXhEVjVk/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 18,
        title: "Clase 18 - Tercer Kihon 9 Kyū: Chudan Soto Uke y Técnicas de Desplazamiento",
        description: "Aprende el tercer kihon del nivel 9 kyū: Chudan Soto Uke (defensa media exterior) y las técnicas fundamentales de desplazamiento. Ejercicios esenciales para mejorar la movilidad y la defensa media.",
        videoUrl: "https://www.youtube.com/embed/aW7bwyrrpQQ",
        thumbnail: "https://img.youtube.com/vi/aW7bwyrrpQQ/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 19,
        title: "Clase 19 - Cuarto Kihon 9 Kyū: Gedan Barai y Técnicas de Desplazamiento",
        description: "Aprende el cuarto kihon del nivel 9 kyū: Gedan Barai (defensa baja) y las técnicas avanzadas de desplazamiento. Ejercicios fundamentales para desarrollar la defensa inferior y mejorar la movilidad en combate.",
        videoUrl: "https://www.youtube.com/embed/U4I3mz0TBco",
        thumbnail: "https://img.youtube.com/vi/U4I3mz0TBco/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 20,
        title: "Clase 20 - Quinto Kihon 9 Kyū: Gedan Kakiwake y Chudan Mae Geri en Desplazamiento",
        description: "Aprende el quinto kihon del nivel 9 kyū: Gedan Kakiwake (defensa doble baja) y Chudan Mae Geri (patada frontal media) en desplazamiento. Técnicas avanzadas para desarrollar la defensa doble y las patadas con movimiento.",
        videoUrl: "https://www.youtube.com/embed/rxf6qXY-CsY",
        thumbnail: "https://img.youtube.com/vi/rxf6qXY-CsY/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 21,
        title: "Clase 21 - Sexto Kihon 9 Kyū: Kokutsu Dachi y Shuto Uke en Desplazamiento",
        description: "Aprende el sexto kihon del nivel 9 kyū: Kokutsu Dachi (postura trasera) y Shuto Uke (defensa con canto de mano) en desplazamiento. Técnicas avanzadas para desarrollar la postura trasera y la defensa con canto de mano en movimiento.",
        videoUrl: "https://www.youtube.com/embed/cPdQ1JwYCLM",
        thumbnail: "https://img.youtube.com/vi/cPdQ1JwYCLM/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 22,
        title: "Clase 22 - Ashi Waza 9 Kyū y Primeros Pasos del Kata",
        description: "Aprende todas las técnicas de pierna (ashi waza) del nivel 9 kyū y los primeros movimientos del kata. Repaso completo de patadas fundamentales y transición hacia la práctica de kata.",
        videoUrl: "https://www.youtube.com/embed/xF69LRpo_tg",
        thumbnail: "https://img.youtube.com/vi/xF69LRpo_tg/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 23,
        title: "Clase 23 - Jo No Kata Completo para 9 Kyū",
        description: "Aprende la forma completa del Jo No Kata correspondiente al nivel 9 kyū. Ejecución detallada de todos los movimientos, secuencias y aplicaciones de este kata fundamental.",
        videoUrl: "https://www.youtube.com/embed/Uury4DxcuBo",
        thumbnail: "https://img.youtube.com/vi/Uury4DxcuBo/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 24,
        title: "Clase 24 - Kihon Sanbon Kumite para 9 Kyū",
        description: "Aprende el Kihon Sanbon Kumite (combate preestablecido a 3 pasos) del nivel 9 kyū. Técnicas fundamentales de ataque y defensa en secuencia, desarrollando el timing y la distancia en combate.",
        videoUrl: "https://www.youtube.com/embed/R02gJ8dRmPs",
        thumbnail: "https://img.youtube.com/vi/R02gJ8dRmPs/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 25,
        title: "Clase 25 - Aplicación del Jo No Kata en Kumite y Preparación para 9 Kyū",
        description: "Aprende las aplicaciones prácticas del Jo No Kata en situaciones de combate y la preparación completa para el examen de 9 kyū. Repaso integral de todas las técnicas, katas y requisitos necesarios para la promoción.",
        videoUrl: "https://www.youtube.com/embed/LYbCbDIJdPw",
        thumbnail: "https://img.youtube.com/vi/LYbCbDIJdPw/maxresdefault.jpg",
        level: "9kyu"
    },
    {
        id: 26,
        title: "Clase 26 - Examen para Cinturón Blanco - 9 Kyū (Shiro Obi)",
        description: "Demostración completa del examen para cinturón blanco - 9 kyū (Shiro Obi). Evaluación de kihon, kata, kumite y todos los requisitos necesarios para obtener el grado de 9 kyū.",
        videoUrl: "https://www.youtube.com/embed/jOifsU9ILAI",
        thumbnail: "https://img.youtube.com/vi/jOifsU9ILAI/maxresdefault.jpg",
        level: "9kyu"
    }
];

// Elementos del DOM
const mainVideo = document.getElementById('main-video');
const videoTitle = document.getElementById('video-title');
const videoDescription = document.getElementById('video-description');
const videoGrid = document.getElementById('video-grid');
const themeToggle = document.getElementById('theme-toggle');
const completeButton = document.getElementById('complete-video');
const speedControl = document.getElementById('speed-control');
const fullscreenToggle = document.getElementById('fullscreen-toggle');
const videoContainer = document.querySelector('.video-container');
const classSelect = document.getElementById('class-select');

// Velocidades disponibles para el video
const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
let currentSpeedIndex = 2; // Inicia en 1x

// Sistema de caché para videos
const videoCache = new Map();

// Sistema de caché para miniaturas
const thumbnailCache = new Map();

// Sistema de progreso del usuario
const userProgress = {
    completedVideos: new Set(),
    lastWatchedVideo: null,
    watchTime: {}
};

// Almacén para guardar el texto original
const originalTexts = new Map();

// Función para guardar el texto original de un elemento
function saveOriginalText(element) {
    if (!element) return;

    function saveNodeText(node) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            const path = getNodePath(node);
            originalTexts.set(path, node.textContent);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Guardar atributos específicos
            ['alt', 'title', 'placeholder'].forEach(attr => {
                if (node.hasAttribute(attr)) {
                    const path = getNodePath(node) + `[${attr}]`;
                    originalTexts.set(path, node.getAttribute(attr));
                }
            });
            // Procesar nodos hijos
            for (const child of node.childNodes) {
                saveNodeText(child);
            }
        }
    }

    saveNodeText(element);
}

// Función para obtener la ruta única de un nodo
function getNodePath(node) {
    const path = [];
    let current = node;
    while (current && current !== document) {
        let index = 0;
        let sibling = current;
        while (sibling = sibling.previousSibling) {
            if (sibling.nodeType === current.nodeType) index++;
        }
        path.unshift(`${current.nodeType === Node.TEXT_NODE ? 'text' : current.tagName.toLowerCase()}[${index}]`);
        current = current.parentNode;
    }
    return path.join(' > ');
}

// Función para restaurar el texto original
function restoreOriginalText(element) {
    if (!element) return;

    function restoreNodeText(node) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
            const path = getNodePath(node);
            const originalText = originalTexts.get(path);
            if (originalText) {
                node.textContent = originalText;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Restaurar atributos específicos
            ['alt', 'title', 'placeholder'].forEach(attr => {
                if (node.hasAttribute(attr)) {
                    const path = getNodePath(node) + `[${attr}]`;
                    const originalText = originalTexts.get(path);
                    if (originalText) {
                        node.setAttribute(attr, originalText);
                    }
                }
            });
            // Procesar nodos hijos
            for (const child of node.childNodes) {
                restoreNodeText(child);
            }
        }
    }

    restoreNodeText(element);
}

// Función para cargar una miniatura con manejo de errores
function loadThumbnail(video, videoCard) {
    const thumbnailContainer = videoCard.querySelector('.video-thumbnail');
    
    // Mostrar spinner de carga
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    thumbnailContainer.appendChild(spinner);
    
    // Verificar si la miniatura está en caché
    if (thumbnailCache.has(video.id)) {
        const img = new Image();
        img.src = thumbnailCache.get(video.id);
        img.onload = () => {
            thumbnailContainer.removeChild(spinner);
            thumbnailContainer.appendChild(img);
            // Agregar el badge de completado si el video está marcado como completado
            if (userProgress.completedVideos.has(video.id)) {
                const completedBadge = document.createElement('div');
                completedBadge.className = 'completed-badge';
                completedBadge.textContent = '✓';
                thumbnailContainer.appendChild(completedBadge);
            }
        };
        return;
    }
    
    // Cargar la miniatura
    const img = new Image();
    img.onload = () => {
        thumbnailContainer.removeChild(spinner);
        thumbnailContainer.appendChild(img);
        // Agregar el badge de completado si el video está marcado como completado
        if (userProgress.completedVideos.has(video.id)) {
            const completedBadge = document.createElement('div');
            completedBadge.className = 'completed-badge';
            completedBadge.textContent = '✓';
            thumbnailContainer.appendChild(completedBadge);
        }
        thumbnailCache.set(video.id, video.thumbnail);
    };
    
    img.onerror = () => {
        thumbnailContainer.removeChild(spinner);
        const placeholder = document.createElement('div');
        placeholder.className = 'thumbnail-placeholder';
        placeholder.innerHTML = `
            <i class="fas fa-video"></i>
            <span>${video.title}</span>
        `;
        thumbnailContainer.appendChild(placeholder);
        // Agregar el badge de completado si el video está marcado como completado
        if (userProgress.completedVideos.has(video.id)) {
            const completedBadge = document.createElement('div');
            completedBadge.className = 'completed-badge';
            completedBadge.textContent = '✓';
            thumbnailContainer.appendChild(completedBadge);
        }
    };
    
    img.src = video.thumbnail;
}

// Función para cargar la lista de videos
function loadVideoList(level = 'all') {
    const videoGrid = document.getElementById('video-grid');
    if (!videoGrid) return;
    
    console.log('Cargando videos para nivel:', level);
    
    // Filtrar videos según el nivel seleccionado
    const filteredVideos = level === 'all' 
        ? videos 
        : videos.filter(video => video.level === level);
    
    console.log('Videos filtrados:', filteredVideos.length);
    
    videoGrid.innerHTML = '';
    
    filteredVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.setAttribute('data-video-id', video.id);
        
        const isCompleted = userProgress.completedVideos.has(video.id);
        const progress = userProgress.watchTime[video.id] || 0;
        
        videoCard.innerHTML = `
            <div class="video-thumbnail"></div>
            <div class="video-info">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
                <div class="video-meta">
                    <span class="video-level">
                        <i class="fas fa-belt"></i>
                        ${video.level === '10kyu' ? 'Cinturón Blanco (10 Kyū)' : 'Cinturón Blanco-Amarillo (9 Kyū)'}
                    </span>
                </div>
                <div class="video-progress">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${progress}%"></div>
                    </div>
                </div>
            </div>
        `;
        
        videoCard.addEventListener('click', () => {
            playVideo(video);
            document.querySelector('.video-player')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
        
        videoGrid.appendChild(videoCard);
        loadThumbnail(video, videoCard);
    });
}

// Función para actualizar el estado del botón de completado
function updateCompleteButton(videoId) {
    if (userProgress.completedVideos.has(videoId)) {
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i> Completado';
    } else {
        completeButton.classList.remove('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i> Marcar como completado';
    }
}

// Función para mantener la página en la parte superior
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para mostrar el mensaje de error sin conexión
function showOfflineMessage(videoContainer) {
    const offlineMessage = document.createElement('div');
    offlineMessage.className = 'offline-message';
    offlineMessage.innerHTML = `
        <i class="fas fa-wifi-slash"></i>
        <h3>Sin conexión a internet</h3>
        <p>Parece que no tienes conexión a internet. Por favor, verifica tu conexión y vuelve a intentarlo.</p>
        <button class="retry-button">
            <i class="fas fa-sync-alt"></i> Reintentar
        </button>
    `;
    
    // Agregar el event listener al botón
    const retryButton = offlineMessage.querySelector('.retry-button');
    retryButton.addEventListener('click', () => {
        // Obtener el último video visto
        const lastVideo = userProgress.lastWatchedVideo 
            ? videos.find(v => v.id === userProgress.lastWatchedVideo)
            : videos[0];
            
        if (lastVideo) {
            // Intentar reproducir el video nuevamente
            playVideo(lastVideo);
        }
    });
    
    videoContainer.appendChild(offlineMessage);
}

// Función para reproducir un video
function playVideo(video) {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = '';

    // Verificar la conexión a internet
    if (!navigator.onLine) {
        showOfflineMessage(videoContainer);
        return;
    }

    // Crear el overlay personalizado con la miniatura y el botón de play
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.cursor = 'pointer';
    overlay.style.background = 'rgba(0,0,0,0.35)';
    overlay.style.zIndex = '2';
    overlay.className = 'custom-video-overlay';

    // Miniatura
    const img = document.createElement('img');
    img.src = video.thumbnail;
    img.alt = video.title;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '8px';
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.zIndex = '1';

    // Botón de play personalizado
    const playBtn = document.createElement('div');
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    playBtn.style.background = 'rgba(0,0,0,0.7)';
    playBtn.style.color = '#fff';
    playBtn.style.borderRadius = '50%';
    playBtn.style.width = '80px';
    playBtn.style.height = '80px';
    playBtn.style.display = 'flex';
    playBtn.style.alignItems = 'center';
    playBtn.style.justifyContent = 'center';
    playBtn.style.fontSize = '2.5rem';
    playBtn.style.zIndex = '3';
    playBtn.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)';
    playBtn.style.transition = 'transform 0.2s';
    playBtn.className = 'custom-play-btn';
    playBtn.onmouseover = () => playBtn.style.transform = 'scale(1.1)';
    playBtn.onmouseout = () => playBtn.style.transform = 'scale(1)';

    overlay.appendChild(playBtn);
    videoContainer.appendChild(img);
    videoContainer.appendChild(overlay);

    // Al hacer clic, reemplazar por el iframe de YouTube con autoplay
    overlay.onclick = () => {
        videoContainer.innerHTML = '';
        
        // Crear el iframe
        const iframe = document.createElement('iframe');
        iframe.setAttribute('width', '100%');
        iframe.setAttribute('height', '100%');
        iframe.setAttribute('src', `${video.videoUrl}?autoplay=1&enablejsapi=1&origin=${window.location.origin}&cc_load_policy=0&cc_lang_pref=es&hl=es&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0&controls=0&fs=1&playsinline=1&disablekb=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('id', 'youtube-player');
        videoContainer.appendChild(iframe);

        // Crear bloqueadores para diferentes áreas
        const createBlocker = (styles) => {
            const blocker = document.createElement('div');
            Object.assign(blocker.style, {
                position: 'absolute',
                zIndex: '9999',
                pointerEvents: 'auto',
                touchAction: 'none',
                webkitTouchCallout: 'none',
                webkitUserSelect: 'none',
                userSelect: 'none',
                ...styles
            });
            
            const preventEvents = (e) => {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };
            
            ['touchstart', 'touchmove', 'touchend', 'click'].forEach(eventType => {
                blocker.addEventListener(eventType, preventEvents, { passive: false });
            });
            
            return blocker;
        };

        // Bloqueador superior
        videoContainer.appendChild(createBlocker({
            top: '0',
            left: '0',
            width: '100%',
            height: '60px'
        }));

        // Bloqueador inferior (excepto donde están los controles)
        videoContainer.appendChild(createBlocker({
            bottom: '50px', // Dejamos espacio para los controles
            left: '0',
            width: '100%',
            height: '60px'
        }));

        // Bloqueador derecho
        videoContainer.appendChild(createBlocker({
            top: '0',
            right: '0',
            width: '200px',
            height: '100%'
        }));

        // Bloqueador izquierdo
        videoContainer.appendChild(createBlocker({
            top: '0',
            left: '0',
            width: '200px',
            height: '100%'
        }));

        // Bloqueador central
        videoContainer.appendChild(createBlocker({
            top: '60px',
            left: '200px',
            right: '200px',
            bottom: '110px', // Dejamos espacio para los controles
            width: 'auto',
            height: 'auto'
        }));

        // Crear controles personalizados
        const controlsContainer = document.createElement('div');
        controlsContainer.style.position = 'absolute';
        controlsContainer.style.bottom = '0';
        controlsContainer.style.left = '0';
        controlsContainer.style.width = '100%';
        controlsContainer.style.height = '50px';
        controlsContainer.style.zIndex = '10000';
        controlsContainer.style.pointerEvents = 'auto';
        controlsContainer.style.display = 'flex';
        controlsContainer.style.justifyContent = 'center';
        controlsContainer.style.alignItems = 'center';
        controlsContainer.style.background = 'linear-gradient(transparent, rgba(0,0,0,0.7))';
        controlsContainer.style.gap = '10px';
        controlsContainer.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
        controlsContainer.style.opacity = '0';
        controlsContainer.style.transform = 'translateY(100%)';

        // Crear botón de toggle para los controles
        const toggleControlsBtn = document.createElement('button');
        toggleControlsBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        toggleControlsBtn.style.position = 'absolute';
        toggleControlsBtn.style.bottom = '10px';
        toggleControlsBtn.style.right = '10px';
        toggleControlsBtn.style.background = 'rgba(0,0,0,0.7)';
        toggleControlsBtn.style.border = 'none';
        toggleControlsBtn.style.color = 'white';
        toggleControlsBtn.style.width = '30px';
        toggleControlsBtn.style.height = '30px';
        toggleControlsBtn.style.borderRadius = '50%';
        toggleControlsBtn.style.cursor = 'pointer';
        toggleControlsBtn.style.display = 'flex';
        toggleControlsBtn.style.alignItems = 'center';
        toggleControlsBtn.style.justifyContent = 'center';
        toggleControlsBtn.style.zIndex = '10001';
        toggleControlsBtn.style.transition = 'transform 0.3s ease-in-out';
        toggleControlsBtn.style.pointerEvents = 'auto';

        let controlsVisible = false;

        // Función para mostrar los controles
        const showControls = () => {
            controlsContainer.style.opacity = '1';
            controlsContainer.style.transform = 'translateY(0)';
            toggleControlsBtn.style.transform = 'rotate(180deg)';
            controlsVisible = true;
        };

        // Función para ocultar los controles
        const hideControls = () => {
            controlsContainer.style.opacity = '0';
            controlsContainer.style.transform = 'translateY(100%)';
            toggleControlsBtn.style.transform = 'rotate(0deg)';
            controlsVisible = false;
        };

        // Toggle de controles
        toggleControlsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (controlsVisible) {
                hideControls();
            } else {
                showControls();
            }
        });

        // Mostrar controles al inicio
        showControls();

        // Función para crear botones de control
        const createControlButton = (icon, action) => {
            const button = document.createElement('button');
            button.innerHTML = `<i class="fas ${icon}"></i>`;
            button.style.background = 'none';
            button.style.border = 'none';
            button.style.color = 'white';
            button.style.fontSize = '20px';
            button.style.cursor = 'pointer';
            button.style.padding = '10px';
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
            button.style.transition = 'transform 0.2s';
            button.style.opacity = '0.8';
            
            button.onmouseover = () => {
                button.style.transform = 'scale(1.1)';
                button.style.opacity = '1';
            };
            button.onmouseout = () => {
                button.style.transform = 'scale(1)';
                button.style.opacity = '0.8';
            };
            
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                action();
            });
            return button;
        };

        // Botón de retroceso 5 segundos
        const rewindBtn = createControlButton('fa-backward', () => {
            if (player) {
                const currentTime = player.getCurrentTime();
                player.seekTo(Math.max(0, currentTime - 5), true);
            }
        });

        // Botón de play/pause
        const playPauseBtn = createControlButton('fa-pause', () => {
            if (player) {
                const state = player.getPlayerState();
                if (state === YT.PlayerState.PLAYING) {
                    player.pauseVideo();
                } else {
                    player.playVideo();
                }
            }
        });

        // Botón de avance 5 segundos
        const forwardBtn = createControlButton('fa-forward', () => {
            if (player) {
                const currentTime = player.getCurrentTime();
                const duration = player.getDuration();
                player.seekTo(Math.min(duration, currentTime + 5), true);
            }
        });

        // Agregar los botones al contenedor
        controlsContainer.appendChild(rewindBtn);
        controlsContainer.appendChild(playPauseBtn);
        controlsContainer.appendChild(forwardBtn);
        videoContainer.appendChild(controlsContainer);
        videoContainer.appendChild(toggleControlsBtn);

        // Inicializar el reproductor
        let player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('youtube-player', {
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        function onPlayerStateChange(event) {
            if (event.data === YT.PlayerState.PLAYING) {
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                hideControls(); // Ocultar controles cuando el video está reproduciendo
            } else if (event.data === YT.PlayerState.PAUSED) {
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                showControls(); // Mostrar controles cuando el video está pausado
            }
        }

        playPauseBtn.addEventListener('click', () => {
            if (player) {
                const state = player.getPlayerState();
                if (state === YT.PlayerState.PLAYING) {
                    player.pauseVideo();
                } else {
                    player.playVideo();
                }
            }
        });

        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        } else {
            onYouTubeIframeAPIReady();
        }
    };

    // Actualizar la información del video y el botón de completado
    updateVideoPlayer(video);
    updateCompleteButton(video.id);
    userProgress.lastWatchedVideo = video.id;
    saveUserProgress();

    // Desplazar la página al reproductor de video solo si el usuario hace clic en un video
    const videoPlayerSection = document.querySelector('.video-player');
    if (this.event && this.event.type === 'click') {
        videoPlayerSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para actualizar el reproductor de video
function updateVideoPlayer(video) {
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
}

// Función para guardar el progreso del usuario
function saveUserProgress() {
    const progressData = {
        completedVideos: Array.from(userProgress.completedVideos),
        lastWatchedVideo: userProgress.lastWatchedVideo,
        watchTime: userProgress.watchTime,
        thumbnailCache: Array.from(thumbnailCache.entries())
    };
    localStorage.setItem('userProgress', JSON.stringify(progressData));
}

// Función para cargar el progreso del usuario
function loadUserProgress() {
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
        const progressData = JSON.parse(savedProgress);
        userProgress.completedVideos = new Set(progressData.completedVideos);
        userProgress.lastWatchedVideo = progressData.lastWatchedVideo;
        userProgress.watchTime = progressData.watchTime || {};
        
        // Cargar el caché de miniaturas
        if (progressData.thumbnailCache) {
            progressData.thumbnailCache.forEach(([id, thumbnail]) => {
                thumbnailCache.set(parseInt(id), thumbnail);
            });
        }
    }
}

// Función para marcar un video como completado
function markVideoAsCompleted(videoId) {
    userProgress.completedVideos.add(videoId);
    saveUserProgress();
    loadVideoList(); // Actualizar la vista
    
    // Actualizar el badge de completado en el video actual
    const videoCard = document.querySelector(`.video-card[data-video-id="${videoId}"]`);
    if (videoCard) {
        const thumbnailContainer = videoCard.querySelector('.video-thumbnail');
        const existingBadge = thumbnailContainer.querySelector('.completed-badge');
        if (!existingBadge) {
            const completedBadge = document.createElement('div');
            completedBadge.className = 'completed-badge';
            completedBadge.textContent = '✓';
            thumbnailContainer.appendChild(completedBadge);
        }
    }
}

// Función para actualizar el tiempo de visualización
function updateWatchTime(videoId, percentage) {
    userProgress.watchTime[videoId] = Math.max(userProgress.watchTime[videoId] || 0, percentage);
    saveUserProgress();
}

// Función para manejar el cambio de tema
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Actualizar el ícono
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Cargar el tema guardado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Función para cambiar la velocidad del video
function changeVideoSpeed() {
    currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
    const newSpeed = speeds[currentSpeedIndex];
    
    // Actualizar el texto del botón
    speedControl.innerHTML = `<i class="fas fa-tachometer-alt"></i> Velocidad: ${newSpeed}x`;
    
    // Cambiar la velocidad del video si está cargado
    const iframe = document.getElementById('youtube-player');
    if (iframe) {
        iframe.contentWindow.postMessage(JSON.stringify({
            event: 'command',
            func: 'setPlaybackRate',
            args: [newSpeed]
        }), '*');
    }
}

// Función para alternar el modo de pantalla completa
function toggleFullscreen() {
    const videoContainer = document.querySelector('.video-container');
    if (!document.fullscreenElement) {
        videoContainer.classList.add('fullscreen');
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
        }
    } else {
        videoContainer.classList.remove('fullscreen');
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Función para manejar el popup de bienvenida
function handleWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    const closeButton = document.getElementById('welcomePopupClose');
    
    // Verificar si el usuario ya ha visto el popup
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenPopup) {
        // Mostrar el popup si no lo ha visto antes
        setTimeout(() => {
            popup.classList.add('active');
        }, 500);
    }
    
    // Manejar el cierre del popup
    closeButton.addEventListener('click', () => {
        popup.classList.remove('active');
        // Siempre guardar que ya vio el popup
        localStorage.setItem('hasSeenWelcomePopup', 'true');
    });
}

// Funcionalidad del selector de idiomas
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.querySelector('.language-dropdown');
    const currentLanguage = document.querySelector('.current-language');
    const languageOptions = document.querySelectorAll('.language-option');

    // Función para traducir el texto
    async function translateText(text, targetLang) {
        try {
            const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
            const data = await response.json();
            return data[0][0][0];
        } catch (error) {
            console.error('Error al traducir:', error);
            return text;
        }
    }

    // Función para traducir un elemento y sus hijos
    async function translateElement(element, targetLang) {
        if (!element) return;

        // Lista de elementos que no deben traducirse
        const skipElements = ['SCRIPT', 'STYLE', 'IFRAME', 'INPUT', 'TEXTAREA'];
        
        // Función recursiva para traducir nodos
        async function translateNode(node) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                const originalText = node.textContent;
                const translatedText = await translateText(originalText, targetLang);
                if (translatedText !== originalText) {
                    node.textContent = translatedText;
                }
            } else if (node.nodeType === Node.ELEMENT_NODE && !skipElements.includes(node.tagName)) {
                // Traducir atributos específicos
                if (node.hasAttribute('alt')) {
                    node.setAttribute('alt', await translateText(node.getAttribute('alt'), targetLang));
                }
                if (node.hasAttribute('title')) {
                    node.setAttribute('title', await translateText(node.getAttribute('title'), targetLang));
                }
                if (node.hasAttribute('placeholder')) {
                    node.setAttribute('placeholder', await translateText(node.getAttribute('placeholder'), targetLang));
                }

                // Traducir nodos hijos
                for (const child of node.childNodes) {
                    await translateNode(child);
                }
            }
        }

        await translateNode(element);
    }

    // Función para cambiar el idioma
    async function changeLanguage(lang) {
        console.log('Cambiando idioma a:', lang);
        
        // Bloquear el scroll del body
        document.body.style.overflow = 'hidden';
        
        // Crear y mostrar el loader de traducción
        const loader = document.createElement('div');
        loader.className = 'translation-loader';
        loader.innerHTML = `
            <div class="spinner"></div>
            <div class="text">${lang === 'es' ? 'Restaurando idioma...' : 'Traduzindo...'}</div>
        `;
        document.body.appendChild(loader);

        // Timeout de seguridad para remover el loader después de 10 segundos
        const safetyTimeout = setTimeout(() => {
            const loaderElement = document.querySelector('.translation-loader');
            if (loaderElement) {
                loaderElement.style.opacity = '0';
                setTimeout(() => {
                    loaderElement.remove();
                    // Restaurar el scroll
                    document.body.style.overflow = '';
                }, 300);
            }
        }, 10000);

        try {
            const mainContent = document.querySelector('main');
            const header = document.querySelector('header');

            if (lang === 'es') {
                // Si volvemos a español, restaurar el texto original
                if (mainContent) restoreOriginalText(mainContent);
                if (header) restoreOriginalText(header);
            } else {
                // Si es la primera vez que guardamos el texto original
                if (originalTexts.size === 0) {
                    if (mainContent) saveOriginalText(mainContent);
                    if (header) saveOriginalText(header);
                }
                // Traducir al nuevo idioma
                if (mainContent) await translateElement(mainContent, lang);
                if (header) await translateElement(header, lang);
            }

            // Actualizar el idioma actual
            currentLanguage.textContent = lang.toUpperCase();
            
            // Guardar preferencia de idioma
            localStorage.setItem('preferredLanguage', lang);
            
            // Actualizar clases y atributos según el idioma
            document.documentElement.lang = lang;
            
        } catch (error) {
            console.error('Error durante la traducción:', error);
        } finally {
            clearTimeout(safetyTimeout);
            
            // Remover el loader con una transición suave
            const loaderElement = document.querySelector('.translation-loader');
            if (loaderElement) {
                loaderElement.style.transition = 'opacity 0.3s ease';
                loaderElement.style.opacity = '0';
                setTimeout(() => {
                    loaderElement.remove();
                    // Restaurar el scroll
                    document.body.style.overflow = '';
                }, 300);
            }
        }
    }

    // Toggle del dropdown de idiomas
    languageToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });

    // Cerrar el dropdown al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });

    // Manejar la selección de idioma
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });

    // Cargar idioma preferido al iniciar
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        const option = document.querySelector(`.language-option[data-lang="${savedLanguage}"]`);
        if (option) {
            currentLanguage.textContent = savedLanguage.toUpperCase();
            changeLanguage(savedLanguage);
        }
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando...');
    
    // Cargar el progreso del usuario y el tema
    loadUserProgress();
    loadTheme();
    
    // Inicializar el popup de bienvenida
    handleWelcomePopup();
    
    // Elementos del DOM
    const videoGrid = document.getElementById('video-grid');
    const beltLevelButtons = document.querySelectorAll('.belt-level-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const completeButton = document.getElementById('complete-video');
    const speedControl = document.getElementById('speed-control');
    const fullscreenToggle = document.getElementById('fullscreen-toggle');
    const classSelect = document.getElementById('class-select');
    
    console.log('Botones encontrados:', beltLevelButtons.length);
    
    // Agregar event listeners solo si los elementos existen
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (completeButton) {
        completeButton.addEventListener('click', () => {
            const currentVideo = videos.find(v => v.id === userProgress.lastWatchedVideo);
            if (currentVideo) {
                if (userProgress.completedVideos.has(currentVideo.id)) {
                    userProgress.completedVideos.delete(currentVideo.id);
                } else {
                    userProgress.completedVideos.add(currentVideo.id);
                }
                saveUserProgress();
                updateCompleteButton(currentVideo.id);
                loadVideoList();
            }
        });
    }
    
    if (speedControl) {
        speedControl.addEventListener('click', changeVideoSpeed);
    }
    
    if (fullscreenToggle) {
        fullscreenToggle.addEventListener('click', toggleFullscreen);
    }
    
    if (classSelect) {
        classSelect.addEventListener('change', () => loadVideoList(classSelect.value));
    }
    
    // Event listener para cuando se sale del modo pantalla completa
    document.addEventListener('fullscreenchange', () => {
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer && !document.fullscreenElement) {
            videoContainer.classList.remove('fullscreen');
        }
    });
    
    // Event listener para cuando se recarga la página
    window.addEventListener('load', scrollToTop);
    
    // Event listeners para cambios en la conexión
    window.addEventListener('online', () => {
        const videoContainer = document.querySelector('.video-container');
        const offlineMessage = videoContainer?.querySelector('.offline-message');
        if (offlineMessage) {
            const lastVideo = userProgress.lastWatchedVideo 
                ? videos.find(v => v.id === userProgress.lastWatchedVideo)
                : videos[0];
            if (lastVideo) {
                playVideo(lastVideo);
            }
        }
    });
    
    window.addEventListener('offline', () => {
        const videoContainer = document.querySelector('.video-container');
        const iframe = videoContainer?.querySelector('iframe');
        if (iframe) {
            showOfflineMessage(videoContainer);
        }
    });
    
    // Función para actualizar el contador de clases
    function updateClassCount() {
        const counts = {
            '10kyu': videos.filter(v => v.level === '10kyu').length,
            '9kyu': videos.filter(v => v.level === '9kyu').length
        };
        
        const count10Kyu = document.querySelector('[data-level="10kyu"] .belt-count');
        const count9Kyu = document.querySelector('[data-level="9kyu"] .belt-count');
        
        if (count10Kyu) count10Kyu.textContent = `${counts['10kyu']} clases`;
        if (count9Kyu) count9Kyu.textContent = `${counts['9kyu']} clases`;
    }
    
    // Agregar event listeners a los botones de nivel
    if (beltLevelButtons.length > 0) {
        beltLevelButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Botón clickeado:', this.getAttribute('data-level'));
                
                // Remover clase active de todos los botones
                beltLevelButtons.forEach(btn => btn.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                // Filtrar videos según el nivel seleccionado
                const level = this.getAttribute('data-level');
                loadVideoList(level);
            });
        });
    }
    
    // Inicializar
    updateClassCount();
    loadVideoList();
    
    // Reproducir el último video visto o el primero
    const videoToPlay = userProgress.lastWatchedVideo 
        ? videos.find(v => v.id === userProgress.lastWatchedVideo)
        : videos[0];
    
    if (videoToPlay) {
        playVideo(videoToPlay);
    }
}); 