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

// Función para cargar la lista de videos
function loadVideoList() {
    videoGrid.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
            </div>
            <div class="video-card-info">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
            </div>
        `;
        
        videoCard.addEventListener('click', () => playVideo(video));
        videoGrid.appendChild(videoCard);
    });
}

// Función para reproducir un video
function playVideo(video) {
    const videoContainer = document.querySelector('.video-container');
    videoContainer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="${video.videoUrl}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
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

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadVideoList();
    
    // Reproducir el primer video por defecto
    if (videos.length > 0) {
        playVideo(videos[0]);
    }
}); 