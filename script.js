// Datos de ejemplo de videos
const videos = [
    {
        id: 1,
        title: "Clase 1 - Fundamentos del Karate - Postura y Respiración",
        description: "Aprende los principios básicos del karate: postura correcta, respiración y concentración. Fundamentos esenciales para todo practicante.",
        videoUrl: "https://www.youtube.com/embed/_8bmMYCwJCM",
        thumbnail: "https://img.youtube.com/vi/_8bmMYCwJCM/maxresdefault.jpg"
    },
    {
        id: 2,
        title: "Clase 2 - Posiciones Básicas: Dachi y Kamae",
        description: "Domina las posiciones fundamentales del karate: zenkutsu-dachi, kokutsu-dachi y kiba-dachi. Aprende la correcta alineación y distribución del peso.",
        videoUrl: "https://www.youtube.com/embed/CB2KFb88gbc",
        thumbnail: "https://img.youtube.com/vi/CB2KFb88gbc/maxresdefault.jpg"
    },
    {
        id: 3,
        title: "Clase 3 - Técnicas de Puño: Tsuki y Uchi",
        description: "Aprende las técnicas básicas de puño: oi-tsuki, gyaku-tsuki y uraken-uchi. Técnicas esenciales para el combate y katas.",
        videoUrl: "https://www.youtube.com/embed/tlN8u7lMcJI",
        thumbnail: "https://img.youtube.com/vi/tlN8u7lMcJI/maxresdefault.jpg"
    },
    {
        id: 4,
        title: "Clase 4 - Técnicas de Patada: Geri y Mawashi",
        description: "Domina las patadas fundamentales: mae-geri, yoko-geri y mawashi-geri. Aprende la técnica correcta y el equilibrio.",
        videoUrl: "https://www.youtube.com/embed/GBaM9GJLwhI",
        thumbnail: "https://img.youtube.com/vi/GBaM9GJLwhI/maxresdefault.jpg"
    },
    {
        id: 5,
        title: "Clase 5 - Técnica de Defensa Baja y Golpe de Puño",
        description: "Aprende la correcta ejecución y técnica de la defensa baja (gedan-barai) y el golpe de puño básico. Ejercicios para mejorar tu precisión y efectividad en la defensa y el ataque.",
        videoUrl: "https://www.youtube.com/embed/KG58XGqE0D0",
        thumbnail: "https://img.youtube.com/vi/KG58XGqE0D0/maxresdefault.jpg"
    },
    {
        id: 6,
        title: "Clase 6 - Técnicas de Empuje y Golpes de Puño",
        description: "Aprende las técnicas de empuje (oshi) y los diferentes tipos de golpes con el puño. Ejercicios para mejorar tu potencia y precisión en los ataques.",
        videoUrl: "https://www.youtube.com/embed/YjM2xWJduXQ",
        thumbnail: "https://img.youtube.com/vi/YjM2xWJduXQ/maxresdefault.jpg"
    },
    {
        id: 7,
        title: "Clase 7 - Hikite, Tsukite y Kiba Dachi",
        description: "Aprende la técnica de hikite (tirar el brazo) para aumentar la potencia de los golpes, la técnica de puño tsukite y la postura fundamental kiba dachi. Ejercicios para mejorar tu técnica y estabilidad.",
        videoUrl: "https://www.youtube.com/embed/dLqezGc0Q54",
        thumbnail: "https://img.youtube.com/vi/dLqezGc0Q54/maxresdefault.jpg"
    },
    {
        id: 8,
        title: "Clase 8 - Shuto Uke y Posturas Fundamentales",
        description: "Aprende la técnica de defensa con el canto de la mano (shuto uke) y dos posturas fundamentales del karate. Ejercicios para mejorar tu estabilidad y técnica defensiva.",
        videoUrl: "https://www.youtube.com/embed/0GKc2TBE8-M",
        thumbnail: "https://img.youtube.com/vi/0GKc2TBE8-M/maxresdefault.jpg"
    },
    {
        id: 9,
        title: "Clase 9 - Parada de Defensa y Patada Básica",
        description: "Aprende la técnica de parada de defensa (gedan kakiwake) y la patada básica (mae-geri). Ejercicios para mejorar tu precisión y efectividad en la defensa y el ataque.",
        videoUrl: "https://www.youtube.com/embed/_EqXdEBs7iE",
        thumbnail: "https://img.youtube.com/vi/_EqXdEBs7iE/maxresdefault.jpg"
    },
    {
        id: 10,
        title: "Clase 10 - Patadas y Golpes de Puño",
        description: "Aprende las técnicas fundamentales de patada: mikazuki geri, ura mikazuki geri y los golpes de puño básicos: oi-tsuki, gyaku-tsuki. Ejercicios para mejorar tu técnica y potencia.",
        videoUrl: "https://www.youtube.com/embed/Ze7WWjhlRrA",
        thumbnail: "https://img.youtube.com/vi/Ze7WWjhlRrA/maxresdefault.jpg"
    },
    {
        id: 11,
        title: "Clase 11 - Perfección de Defensas Básicas",
        description: "Perfecciona las técnicas básicas de defensa: gedan-barai, age-uke y soto-uke. Ejercicios detallados para mejorar tu precisión y efectividad en la defensa.",
        videoUrl: "https://www.youtube.com/embed/s-LH4styDbA",
        thumbnail: "https://img.youtube.com/vi/s-LH4styDbA/maxresdefault.jpg"
    },
    {
        id: 12,
        title: "Clase 12 - Defensas en Todas las Direcciones",
        description: "Aprende las técnicas de defensa en todas las direcciones: jodan, chudan y gedan. Ejercicios para mejorar tu capacidad de reacción y protección.",
        videoUrl: "https://www.youtube.com/embed/X6R2Q6rVRhU",
        thumbnail: "https://img.youtube.com/vi/X6R2Q6rVRhU/maxresdefault.jpg"
    },
    {
        id: 13,
        title: "Clase 13 - Kihones Complementarios",
        description: "Aprende los kihones complementarios esenciales para perfeccionar tu técnica. Ejercicios adicionales para mejorar tu ejecución y control.",
        videoUrl: "https://www.youtube.com/embed/ygTBq-KtIxE",
        thumbnail: "https://img.youtube.com/vi/ygTBq-KtIxE/maxresdefault.jpg"
    },
    {
        id: 14,
        title: "Clase 14 - Etiqueta en el Dojo: Reigi",
        description: "Aprende las normas de conducta y etiqueta en el dojo tradicional. Saludos, respeto, disciplina y protocolos esenciales para la práctica del karate.",
        videoUrl: "https://www.youtube.com/embed/p9t2JM0B7lA",
        thumbnail: "https://img.youtube.com/vi/p9t2JM0B7lA/maxresdefault.jpg"
    },
    {
        id: 15,
        title: "Clase 15 - Examen de Ingreso al Dojo",
        description: "Preparación para el examen de ingreso al dojo. Demuestra tu dominio de las técnicas básicas aprendidas y tu actitud marcial.",
        videoUrl: "https://www.youtube.com/embed/MhkrmOtpDAc",
        thumbnail: "https://img.youtube.com/vi/MhkrmOtpDAc/maxresdefault.jpg"
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
        };
        return;
    }
    
    // Cargar la miniatura
    const img = new Image();
    img.onload = () => {
        thumbnailContainer.removeChild(spinner);
        thumbnailContainer.appendChild(img);
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
    };
    
    img.src = video.thumbnail;
}

// Función para cargar la lista de videos
function loadVideoList() {
    videoGrid.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <!-- La miniatura se cargará aquí -->
            </div>
            <div class="video-card-info">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
                <div class="video-progress">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${userProgress.watchTime[video.id] || 0}%"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Cargar la miniatura
        loadThumbnail(video, videoCard);
        
        videoCard.addEventListener('click', () => playVideo(video));
        videoGrid.appendChild(videoCard);
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

// Función para reproducir un video
function playVideo(video) {
    const videoContainer = document.querySelector('.video-container');
    
    // Limpiar el contenedor antes de agregar el nuevo iframe
    videoContainer.innerHTML = '';
    
    // Crear un nuevo iframe con la URL del video y los parámetros necesarios
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('src', `${video.videoUrl}?enablejsapi=1&origin=${window.location.origin}&cc_load_policy=0&cc_lang_pref=es&hl=es&iv_load_policy=3&modestbranding=1&rel=0`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('id', 'youtube-player');
    
    // Agregar el iframe al contenedor
    videoContainer.appendChild(iframe);
    
    // Actualizar el caché
    videoCache.set(video.id, video);
    
    // Actualizar la información del video
    updateVideoPlayer(video);

    // Actualizar el estado del botón de completado
    updateCompleteButton(video.id);

    // Actualizar último video visto
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

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
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
        loadVideoList(); // Actualizar la lista de videos para mostrar el estado actualizado
    }
});

// Event Listeners para los controles
speedControl.addEventListener('click', changeVideoSpeed);
fullscreenToggle.addEventListener('click', toggleFullscreen);

// Event listener para cuando se sale del modo pantalla completa
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        videoContainer.classList.remove('fullscreen');
    }
});

// Event listener para cuando se recarga la página
window.addEventListener('load', scrollToTop);

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadUserProgress();
    loadVideoList();
    loadTheme();
    scrollToTop(); // Asegurar que la página comience desde arriba
    
    // Reproducir el último video visto o el primero, pero sin desplazar la página
    const videoToPlay = userProgress.lastWatchedVideo 
        ? videos.find(v => v.id === userProgress.lastWatchedVideo)
        : videos[0];
    
    if (videoToPlay) {
        // Llamar a playVideo sin evento para evitar el scroll automático
        const fakeEvent = { type: 'init' };
        playVideo.call({ event: fakeEvent }, videoToPlay);
    }
}); 