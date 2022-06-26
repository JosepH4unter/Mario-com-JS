const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const game_over = document.querySelector('.game-over');
const reiniciar = document.querySelector('.reiniciar')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500)//espera dar o tempo dps executa a funçao

}

const loop = setInterval(()=>{

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        //se mario encostar no cano reinicia

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        game_over.append('GAME OVER');

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);//ele ira ficar olhando qualquer açao no teclado e quando clicar algo ira executar a funçao