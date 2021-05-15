let circles_qtd = 7
let distance = .7
let aaa = 0
var mouseToggle = false;

const body = document.body
const scene = document.getElementById("scene")
const holder = document.getElementById('holder')
const dis = document.getElementById('dis').children[1]

create(circles_qtd)
body.addEventListener("mousewheel", circles)
body.addEventListener("mousedown", mouseDown)
body.addEventListener("keypress", keyPress)

function mouseDown(e) {
    if(e.pageY > 90/100 * body.offsetHeight){
        return
    }

    mouseToggle = !mouseToggle
    if(mouseToggle){
        window.addEventListener("mousemove", execMouseDown)
        body.style.cursor = "move"

    }else{
        window.removeEventListener("mousemove", execMouseDown)
        body.style.cursor = "default"
    }
}

function keyPress(e) {
    if(e.key == "r"){
        reset()
    }
}

function execMouseDown(e) {
    let varX = e.pageX - body.offsetWidth*50/100
    let varY = e.pageY - body.offsetHeight*50/100

    let normX = normalize(e.pageX, body.offsetWidth*30/100, body.offsetWidth*70/100)
    let normY = normalize(e.pageY, body.offsetHeight*30/100, body.offsetHeight*70/100)

    if(e.altKey){
        holder.style.transform = `rotateY(-${normX*180}deg) rotateX(${normY*180}deg)`
    }else{
        holder.style.top = varY + "px"
        holder.style.left = varX + "px"
    }
}

function create(qtd){
    for (let i = 1; i <= qtd; i++) {
        let circle = document.createElement('li')
        circle.classList.add('circle')
        circle.style = `--i:${i}`
        holder.appendChild(circle)
    }
}

function reset(){
    holder.style.transform = ""
    holder.style.top = ""
    holder.style.left = ""
}

function circles(e){
    for(let circle of holder.children){
        circle.style.animation = 'none';
        circle.offsetHeight; /* trigger reflow */
    }
    
    if (e.deltaY > 0) {
        if (circles_qtd > 0) {
            holder.lastChild.remove()
            circles_qtd--
        }
    }else{
        let circle = document.createElement('li')
        circle.classList.add('circle')
        circle.style = `--i:${++circles_qtd}`
        holder.appendChild(circle)
    }

    
    for(let circle of holder.children){
        circle.style.animation = null; 
    }
    
}


function changeDistance(value) {
    distance += value;

    distance = Math.min(Math.max(-20, distance), 20);

    document.documentElement.style.setProperty('--circleDistance', `${distance}`);
    dis.innerText = `Distancia: ${distance.toFixed(2)}`
}

function normalize(val, min, max){
    // Shift to positive to avoid issues when crossing the 0 line
    if(min < 0){
      max += 0 - min;
      val += 0 - min;
      min = 0;
    }
    // Shift values from 0 - max
    val = val - min;
    max = max - min;
    return Math.max(0, Math.min(1, val / max));
  }