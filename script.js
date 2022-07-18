const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let songIndex = 0;

const songs = [
  {
    title: 'Let Me Down Slowly',
    artist: 'Alec Benjamin',
    coverPath: 'images/cover1.jpg',
    discPath: 'music/music1.mp3',
    duration: '2:49',
  },
  {
    title: 'Infinity',
    artist: 'Jaymes Young',
    coverPath: 'images/cover2.jpg',
    discPath: 'music/music2.mp3',
    duration: '3:57',
  },
  {
    title: 'Unstoppable',
    artist: 'SIA',
    coverPath: 'images/cover3.jpg',
    discPath: 'music/music3.mp3',
    duration: '4:06',
  },
  {
    title: 'The Way You Felt',
    artist: 'Alec Benjamin',
    coverPath: 'images/cover4.jpg',
    discPath: 'music/music4.mp3',
    duration: '3:03',
  },
  {
    title: 'Run into Trouble',
    artist: 'Alok',
    coverPath: 'images/cover5.jpg',
    discPath: 'music/music5.mp3',
    duration: '3:02',
  },
  {
    title: 'Adiye - Bachelor',
    artist: 'G.V. Prakash',
    coverPath: 'images/cover6.jpg',
    discPath: 'music/music6.mp3',
    duration: '4:40',
  },
  {
    title: 'Little Little',
    artist: 'Dhanush, Hiral Viradia',
    coverPath: 'images/cover7.jpg',
    discPath: 'music/music7.mp3',
    duration: '4:18',
  },
  {
    title: 'Kadhalai Solla Mudiyaadha',
    artist: 'Yazin Nizar, Shashaa Tirupati',
    coverPath: 'images/cover8.jpg',
    discPath: 'music/music8.mp3',
    duration: '4:18',
  },
  {
    title: 'Kaadhal Theevey',
    artist: 'Sid Sriram, Sean Roldan',
    coverPath: 'images/cover9.jpg',
    discPath: 'music/music9.mp3',
    duration: '4:18',
  },
  {
    title: 'Baby Oh Baby',
    artist: 'Ben Human',
    coverPath: 'images/cover10.jpg',
    discPath: 'music/music10.mp3',
    duration: '3:57',
  },
  {
    title: 'Gaandu Kannamma',
    artist: 'Vivek, Mervin',
    coverPath: 'images/cover11.jpg',
    discPath: 'music/music11.mp3',
    duration: '3:25',
  },
  {
    title: 'Arakkiyae',
    artist: 'Hip Hop Tamizha',
    coverPath: 'images/cover12.jpg',
    discPath: 'music/music12.mp3',
    duration: '3:01',
  },
  {
    title: 'Mayakirriye',
    artist: 'Anirudh Ravichander',
    coverPath: 'images/cover13.jpg',
    discPath: 'music/music13.mp3',
    duration: '3:09',
  },
  {
    title: 'Two Two Two',
    artist: 'Anirudh Ravichander',
    coverPath: 'images/cover14.jpg',
    discPath: 'music/music14.mp3',
    duration: '2:56',
  },
  {
    title: 'Rendu Kaadhal',
    artist: 'Anirudh Ravichander',
    coverPath: 'images/cover15.jpg',
    discPath: 'music/music15.mp3',
    duration: '4:54',
  },
  {
    title: 'Adi Penne',
    artist: 'Stephen Zechariah',
    coverPath: 'images/cover16.jpg',
    discPath: 'music/music16.mp3',
    duration: '5:01',
  },
  {
    title: 'Thodakkam Mangalyam',
    artist: 'Divya, Vijay Yesudas',
    coverPath: 'images/cover17.jpg',
    discPath: 'music/music17.mp3',
    duration: '3:21',
  },
  {
    title: 'Yaaraiyum Ivlo Azhaga',
    artist: 'Silambarasan TR',
    coverPath: 'images/cover18.jpg',
    discPath: 'music/music18.mp3',
    duration: '3:21',
  },
  {
    title: 'Uruttu',
    artist: 'Vivek - Mervin',
    coverPath: 'images/cover19.jpg',
    discPath: 'music/music19.mp3',
    duration: '3:21',
  },
  {
    title: 'Vaathi Raid',
    artist: 'Anirudh Ravichander',
    coverPath: 'images/cover20.jpg',
    discPath: 'music/music20.mp3',
    duration: '3:29',
  },
  {
    title: 'Bullet - The Warrior',
    artist: 'Silambarasan TR',
    coverPath: 'images/cover21.jpg',
    discPath: 'music/music21.mp3',
    duration: '3:59',
  },
  {
    title: 'Yaar Azhaippadhu',
    artist: 'Sid Sriram',
    coverPath: 'images/cover22.jfif',
    discPath: 'music/music22.mp3',
    duration: '4:10',
  }, 
  {
    title: 'Reunion',
    artist: 'Dimitri, Like Mike, Kshmr And Alok',
    coverPath: 'images/cover23.jpg',
    discPath: 'music/music23.mp3',
    duration: '2:42',
  },
];

loadSong(songs[songIndex]);

function loadSong(song) {
  cover.src = song.coverPath;
  disc.src = song.discPath;
  title.textContent = song.title;
  artist.textContent = song.artist;
  duration.textContent = song.duration;
}

function playPauseMedia() {
  if (disc.paused) {
    disc.play();
  } else {
    disc.pause();
  }
}

function updatePlayPauseIcon() {
  if (disc.paused) {
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
  } else {
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
  }
}

function updateProgress() {
  progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

  let minutes = Math.floor(disc.currentTime / 60);
  let seconds = Math.floor(disc.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
}

function resetProgress() {
  progress.style.width = 0 + '%';
  timer.textContent = '0:00';
}

function gotoPreviousSong() {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex = songIndex - 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow) {
    playPauseMedia();
  }
}

function gotoNextSong(playImmediately) {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex = songIndex + 1;
  }

  const isDiscPlayingNow = !disc.paused;
  loadSong(songs[songIndex]);
  resetProgress();
  if (isDiscPlayingNow || playImmediately) {
    playPauseMedia();
  }
}

function setProgress(ev) {
  const totalWidth = this.clientWidth;
  const clickWidth = ev.offsetX;
  const clickWidthRatio = clickWidth / totalWidth;
  disc.currentTime = clickWidthRatio * disc.duration;
}

play.addEventListener('click', playPauseMedia);
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextSong.bind(null, true));
prev.addEventListener('click', gotoPreviousSong);

next.addEventListener('click', gotoNextSong.bind(null, false));

progressContainer.addEventListener('click', setProgress);
