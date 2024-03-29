const images = ['angel.png', 'grimasa.png', 'include.png', 'hungry.png', 'mat.png']

const btnSmile = document.querySelector('.btn-smile')
const smileImg = document.querySelector('.smileImg')
const textGame = document.querySelector('.click-text')
let num = 0
let smileWidth = smileImg.clientWidth  = '160px'
let smileHeigth = smileImg.clientHeight = '160px'
let timer = document.querySelector('.timer')
const soundWin = document.getElementById('soundWin')
const gameOver = document.getElementById('gameOver')
const fitelSound = document.getElementById('fitelSound')

btnSmile.addEventListener('click', ()=>{
    let clickSound = document.getElementById('clickSound')
    clickSound.currentTime = 0
    clickSound.play()
    num = num + 1
    console.log(num)
    smileHeigth = `${parseInt(smileHeigth) + 2}px`
    smileWidth = `${parseInt(smileWidth) + 2}px`
    smileImg.style.width = smileWidth; 
    smileImg.style.height = smileHeigth; 
    if (num % 10 == 0){
        let newImg = num / 10
        smileImg.src = `../images/${images[newImg]}`
        smileHeigth = '160px'
        smileWidth = '160px'
    }
    if(num === 49){
        soundWin.play()
        alert('You win!')
        window.location.href = '../templates/index.html'
    }
    
})

endTime = Number(String(Date.now()).slice(0, 10)) + 10

function updaterTime() {
    let currentTime = Number(String(Date.now()).slice(0, 10))
    let remainingTime = endTime - currentTime
    if (remainingTime <= 0) {
        clearInterval(timerInterval)
        if(num < 49){
            smileImg.src = '../images/bomba.png'
            textGame.textContent = 'OOOPS!'
            btnSmile.disabled = true
            let numIncrese = 0
            function increaseBomb(){
                fitelSound.play()
                smileHeigth = `${parseInt(smileHeigth) + 2}px`
                smileWidth = `${parseInt(smileWidth) + 2}px`
                smileImg.style.width = smileWidth; 
                smileImg.style.height = smileHeigth;
                numIncrese++
                console.log(numIncrese)
                if(numIncrese===40){
                    clearInterval(increase)
                    smileImg.src = '../images/explosion.png'
                    textGame.textContent = 'BOOM!'
                    setTimeout(alertTime, 1000)
                }
            }
            let increase = setInterval(increaseBomb, 100)
            function alertTime(){
                gameOver.play()
                alert('You lose!')
                window.location.href = '../templates/index.html'

            }
        }
    } else {
        let minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        timer.textContent = `${minutes}:${seconds}`
    }
}


let timerInterval = setInterval(updaterTime, 1000)
updaterTime()

