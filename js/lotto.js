const numbesEl = document.querySelector('.numbers');
const startEl = document.querySelector('#start');
const resetEl = document.querySelector('#reset');

const lottoNumber = [];

function createNumber(number) {
    const i = lottoNumber.length;
    setTimeout(function () {
        const ballEl = document.createElement('div');
        ballEl.classList.add('show');
        ballEl.textContent = number;
        numbesEl.appendChild(ballEl)
    }, i * 550)
}

startEl.addEventListener('click', function () {
    while(lottoNumber.length < 8) {
        let num = Math.floor(Math.random()*45)+1;
        if(lottoNumber.indexOf(num) === -1){
            if(lottoNumber.length == 6) {
                num = "+";
            }
            lottoNumber.push(num)
            createNumber(num);
        }
    }
})

resetEl.addEventListener('click', function () {
    lottoNumber.splice(0, 8);
    numbesEl.innerHTML = "";
    history.go(0)
})