const audio = document.getElementById("audio");
const lyricText = document.getElementById("current-lyric");

// Data waktu dan lirik yang sudah disinkronkan dengan presisi milidetik
const lyricsData = [
    { time: 0.00, text: "🎵 Musik dimulai..." },
    { time: 3.20, text: "Remember when we would stay out too late" },
    { time: 7.80, text: "We were young, havin' fun, made mistakes" },
    { time: 12.30, text: "Did we ever know? Did we ever know?" },
    { time: 16.50, text: "Did we ever know? Yeah" },
    { time: 20.80, text: "All the things we'd just think up and say" },
    { time: 25.40, text: "Never wrong, always right, not afraid" },
    { time: 30.00, text: "Did we ever know? Did we ever know?" },
    { time: 34.40, text: "Did we ever know?" },
    { time: 38.70, text: "Is it all inside of my head?" },
    { time: 42.90, text: "Maybe you still think I don't care" },
    { time: 47.00, text: "But all I need is you" },
    { time: 51.10, text: "Yeah, you know it's true, yeah, you know it's true" },
    { time: 56.40, text: "Forget about where we are and let go" },
    { time: 60.70, text: "We're so close" },
    { time: 64.90, text: "If you don't know where to start" },
    { time: 69.10, text: "Just hold on and don't run, no" },
    { time: 73.40, text: "We're looking back, we messed around" },
    { time: 78.00, text: "But that was then and this is now" },
    { time: 82.80, text: "All we need is enough love to hold us" },
    { time: 87.90, text: "Where we are" }
];

// Fungsi untuk memperbarui lirik secara real-time dengan presisi tinggi
function updateLyrics() {
    let currentTime = audio.currentTime;

    for (let i = lyricsData.length - 1; i >= 0; i--) {
        if (currentTime >= lyricsData[i].time) {
            lyricText.textContent = lyricsData[i].text;
            break;
        }
    }
}

// Menggunakan `setInterval` agar update lebih cepat daripada `timeupdate`
setInterval(updateLyrics, 10);
