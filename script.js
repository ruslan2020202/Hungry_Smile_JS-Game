const images = ['angel.png', 'grimasa.png', 'include.png', 'hungry.png', 'mat.png']

const btnSmile = document.querySelector('.btn-smile')
const smileImg = document.querySelector('.smileImg') 
let num = 0
let smileWidth = smileImg.clientWidth  = '160px'
let smileHeigth = smileImg.clientHeight = '160px'
console.log(smileWidth)

btnSmile.addEventListener('click', ()=>{
    num = num + 1
    console.log(num)
    smileHeigth = `${parseInt(smileHeigth) + 5}px`
    smileWidth = `${parseInt(smileWidth) + 5}px`
    smileImg.style.width = smileWidth; 
    smileImg.style.height = smileHeigth; 
    if (num % 10 == 0){
        let newImg = num / 10
        smileImg.src = `images/${images[newImg]}`
        smileHeigth = '160px'
        smileWidth = '160px'
    }
    if (num === 49){
        alert('You Win!')
    }
})
