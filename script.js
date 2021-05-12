let speed = 0.7
let zoom = 70
const vel = document.getElementById('vel')
const zoo = document.getElementById('zoo')

function changeSpeed(value) {
    speed += value;

    speed = Math.min(Math.max(.1, speed), 20);

    document.documentElement.style.setProperty('--ballBounce', `${speed}s`);
    vel.children[1].innerText = `Velocidade: ${speed.toFixed(2)}s`
}

function changeZoom(value) {
    zoom += value;

    zoom = Math.min(Math.max(1, zoom), 200);

    document.documentElement.style.setProperty('--fontSize', `${zoom}px`);
    zoo.children[1].innerText = `Zoom: ${zoom}px`
}