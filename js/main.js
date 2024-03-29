function comeToGame(){
    window.location.href = '../templates/game.html'
}

let btnPlay = document.getElementById('btnPlay')
let clickMenuSound = document.getElementById('clickMenu')

btnPlay.addEventListener('click', ()=>{
    clickMenuSound.currentTime = 0
    clickMenuSound.play()
    setTimeout(comeToGame, 500)
})
