// Dashboard JavaScript

// Music Player Functionality
const playBtn = document.querySelector('.player-btn.play');
const prevBtn = document.querySelector('.player-btn.prev');
const nextBtn = document.querySelector('.player-btn.next');
const progressBar = document.querySelector('.player-progress-bar');
const playerTitle = document.querySelector('.player-title');
const playerTime = document.querySelector('.player-time');

let isPlaying = false;
let currentTime = 0;
let duration = 363; // 6:03 in seconds

// Play/Pause Toggle
if (playBtn) {
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
            startProgress();
        } else {
            playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
            stopProgress();
        }
    });
}

// Progress Animation
let progressInterval;

function startProgress() {
    progressInterval = setInterval(() => {
        if (currentTime < duration) {
            currentTime++;
            updateProgress();
        } else {
            currentTime = 0;
            isPlaying = false;
            playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
            clearInterval(progressInterval);
        }
    }, 1000);
}

function stopProgress() {
    clearInterval(progressInterval);
}

function updateProgress() {
    const percent = (currentTime / duration) * 100;
    if (progressBar) {
        progressBar.style.width = `${percent}%`;
    }
    
    const mins = Math.floor(currentTime / 60);
    const secs = currentTime % 60;
    const totalMins = Math.floor(duration / 60);
    const totalSecs = duration % 60;
    
    if (playerTime) {
        playerTime.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} / ${totalMins.toString().padStart(2, '0')}:${totalSecs.toString().padStart(2, '0')}`;
    }
}

// Previous Track
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentTime = 0;
        updateProgress();
    });
}

// Next Track
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentTime = 0;
        updateProgress();
        if (playerTitle) {
            playerTitle.textContent = 'Next Track - Study Music';
        }
    });
}

// Volume Control
const volumeSlider = document.querySelector('.volume-slider');
const volumeLevel = document.querySelector('.volume-level');

if (volumeSlider) {
    volumeSlider.addEventListener('click', (e) => {
        const rect = volumeSlider.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        if (volumeLevel) {
            volumeLevel.style.width = `${percent}%`;
        }
    });
}

// Attendance Card Animations
const attendanceCards = document.querySelectorAll('.attendance-card');
attendanceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'fadeInUp 0.6s ease forwards';
});

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Forum Button
const forumBtn = document.querySelector('.forum-btn');
if (forumBtn) {
    forumBtn.addEventListener('click', () => {
        window.location.href = 'forum.html';
    });
}

// Quick Links
const quickLinks = document.querySelectorAll('.quick-link');
quickLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

console.log('Dashboard loaded successfully!');
