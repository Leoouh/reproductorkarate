const videoListItems = document.querySelectorAll('.video-list li');
const videoFrame = document.getElementById('video');

videoListItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoId = item.getAttribute('data-video');
        videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    });
});
