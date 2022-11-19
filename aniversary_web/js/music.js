const statusTypes = Object.freeze({
  play: 'play', 
  pause: 'pause',
})

const imageStatusTypes = Object.freeze({
  play: 'play_circle_outline', 
  pause: 'pause_circle_outline',
})

const MUSIC_PATH = '../assets/music'
const COVER_IMAGES_PATH = '../assets/albumsCovers'

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const getSongTitle = songPath => songPath.split('/')[3].split('.')[0]

const appData = () => ({
  progress: 30, 
  centralControl: 'play_circle_outline', 
  status: statusTypes.pause,
  currentSong: null,
  songData: {
    currentTime: 0, 
    duration: 0, 
    title: 'Accidentally In Love', 
    info: ''
  },
  movingTime: false, 
  songInfoClass: '', //Borrar la clase de aquí 
  currentSongIndex: 0,
  currentSongCover: `${COVER_IMAGES_PATH}/accidentalyInLove.jpg`,
  songsInfo: [
    'Recuerdo que antes de pedirte que fueras mi novia, estaba en un muy buen momento, estaba a mi máxima concentración, estaba feliz, trabajando y escuchando esta canción. Y no pude impedir que me recordara a ti y que sin darme cuenta estaba enamorado de ti', 
    '… Espero que sepas qué me recuerda esta canción 😏', 
    'Esta, junto con otra, me la enviaste el 20 de noviembre en la madrugada cuando estábamos hablando, el mismo día en que comenzaste a ser mi novia. ', 
    'Esta cancion, aunque si bien su letra no corresponde con nosotros, esta canción me recuerda lo sensible y preciosa que eres. También, fue la primera vez que me dijiste que era alguien especial para ti, porque con nadie compartías tu música.', 
    'Esta canción me recuerda toda la sensualidad que tienes, y lo hermosa que eres.', 
    `Tus ojos son los más bellos del mundo, por eso esta canción me recuerda a ti. Aparte, tú me la mostraste 💕`,
    'Esta también me la enviaste el día que comenzamos a ser novios, para mi representa el gran momento en el sabía que te quedarías más tiempo en mi vida.', 
    'Sé que es tu banda favorita, y al ser esta la única canción que conozco de ellos, pues me recuerda a ti.', 
    'Esta canción tiene un significado muy especial para mi, es mi canción favorita, y nunca la he compartido con nadie, tú me haces más valiente',
  ],
  songsCoverImages: [
    'accidentalyInLove.jpg', 
    'AllINeed.jpg',
    'Fragile.jpg', 
    'Heather.jpg', 
    'HierbaMala.jpg', 
    'OjitosLindos.jpg',
    'Stars.jpg', 
    'SexOnFire.jpg', 
    'Valiente.jpg'
  ],
  songsNames: [
    'Accidentally In Love.mp3', 
    'All i need.mp3', 
    'Fragile.mp3',
    'Heather.mp3',
    'Hierba Mala.mp3',
    'Ojitos Lindos.mp3',
    'Stars.mp3', 
    'Sex On Fire.mp3', 
    'Valiente.mp3',
  ],
  togglePlayPause(){
    const isPlay = this.status === statusTypes.play
    !isPlay ? this.play() : this.pause()
  }, 
  next(){
    if(this.currentSong) this.currentSong.pause()
    const nextSongIndex = this.currentSongIndex + 1
    const isLastSong = nextSongIndex >= this.songsNames.length
    const audioPath = 
      isLastSong
      ? `${MUSIC_PATH}/${this.songsNames[0]}`
      : `${MUSIC_PATH}/${this.songsNames[nextSongIndex]}`
    this.currentSongIndex = isLastSong ? 0 : nextSongIndex
    this.setSong(audioPath)
  },
  prev(){
    if(this.currentSong) this.currentSong.pause()
    const prevSongIndex = this.currentSongIndex - 1
    const isFirstSong = prevSongIndex < 0
    const audioPath = 
      isFirstSong
      ? `${MUSIC_PATH}/${this.songsNames.at(-1)}`
      : `${MUSIC_PATH}/${this.songsNames[prevSongIndex]}`
    this.currentSongIndex = 
      isFirstSong 
      ? this.songsNames.length - 1 
      : prevSongIndex
    this.setSong(audioPath)
  },
  setSong(audioPath){
    this.currentSong = new Audio(audioPath)
    this.currentSong.play()
    this.centralControl = imageStatusTypes[statusTypes.pause]
    this.status = statusTypes.play
    console.log(getSongTitle(audioPath))
    this.songData.title = getSongTitle(audioPath)
    this.currentSongCover = `${COVER_IMAGES_PATH}/${this.songsCoverImages[this.currentSongIndex]}`
    this.songData.info = this.songsInfo[this.currentSongIndex]
    this.currentSong.addEventListener('timeupdate', () => {
      if(this.movingTime) return 
      const currentTime = this.currentSong.currentTime
      this.songData.currentTime = currentTime
      // if(currentTime > 6) 
        // this.songInfoClass = ''
    })
    this.currentSong.addEventListener('loadedmetadata', () => {
      console.log('Duración')
      console.log(this.currentSong.duration);
      this.songData.duration = Math.ceil(this.currentSong.duration)
    })
  },
  pause(){
    this.status = statusTypes.pause
    this.centralControl = imageStatusTypes[statusTypes.play]
    if(!this.currentSong) return 
    this.currentSong.pause()
  },
  play(){
    this.status = statusTypes.play
    this.centralControl = imageStatusTypes[statusTypes.pause]
    if(this.currentSong) {
      this.currentSong.play()
      return 
    }
    this.currentSongIndex = 0
    this.setSong(`${MUSIC_PATH}/${this.songsNames[0]}`)
  }

})

document.addEventListener('alpine:init', () => Alpine.data('app', appData))