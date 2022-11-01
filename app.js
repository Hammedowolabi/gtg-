// const heading2 = document.querySelector('h2')
// const btn = document.querySelector('.check')
// const number = document.querySelector('.number')


// function nameChanger (){

//     let randomNumber = Math.ceil(Math.random() * 10)
//     number.textContent = randomNumber 
//     // let sth = heading2.innerText === 'Guess My Number'
//     // if(sth){
//     //     heading2.innerText = 'jasper'
//     // }else{
//     //     heading2.innerText = 'Guess  My Number'
//     // }
// }

// btn.addEventListener('click',nameChanger)


// // handling
// // to get d data from an input feild , u need to pass a , value

// let inputFeild = document.querySelector('.guess')
// inputFeild.value= 20
// console.log(typeof Number (inputFeild.value))

const heading2 = document.querySelector('.message')
const btn = document.querySelector('.check')
const number = document.querySelector('.number')
const button = document.querySelector('.again')



function logic (){
    const message = document.querySelector('.message')
    let gussedNumber = Math.ceil(Math.random()*6)
    const number = document.querySelector('.number ')
    let score= document.querySelector('.score')
    let heading = document.querySelector('h2')
    let body = document.body.style
    number.textContent = gussedNumber
    let guess = Number(document.querySelector('.guess').value)
   
    if(!guess){
        message.textContent = 'no number'
    }else if ( guess === gussedNumber ){
        message.textContent = 'winner 🏆'
        body.backgroundColor = 'green'
        
        
    }else if( guess !== gussedNumber){
        message.textContent = 'loser 😂'
        body.backgroundColor = 'yellow'
        if(score.textContent== 0){
            score.textContent = 0
        }else{
            score.textContent--
        }
    }
    if(score.textContent == 0){
        heading.textContent = 'Trials exceeded, please click on play again button to resart'

    }
    
}

btn.addEventListener('click', logic)


const refresh = document.querySelector('.again')

function reload (){
    window.location.reload()
}

refresh.addEventListener('click',reload)