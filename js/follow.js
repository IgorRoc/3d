const delay = 40
let timeOut = 0
const circle_life = 1000
let circles_qtd = 0
let distance = .7

const body = document.body
const scene = document.getElementById("scene")
const holder = document.getElementById('holder')
const dis = document.getElementById('dis').children[1]


// INITIAL FUNCTIONS
document.documentElement.style.setProperty('--circleLife', `${circle_life}ms`);
body.addEventListener("mousemove", follow)
body.addEventListener("keypress", keyPress)

function keyPress(e) {
    if(e.key == "r"){
        reset()
    }
}

function reset(){
    holder.style.transform = ""
    holder.style.top = ""
    holder.style.left = ""
}

function create(e){
    let varX = e.pageX - body.offsetWidth*50/100
    let varY = e.pageY - body.offsetHeight*50/100

    // let normX = normalize(e.pageX, body.offsetWidth*30/100, body.offsetWidth*70/100)
    // let normY = normalize(e.pageY, body.offsetHeight*30/100, body.offsetHeight*70/100)

    let wrapper = document.createElement("li")
    wrapper.classList.add('wrapper')
    wrapper.style.top = varY+ "px"
    wrapper.style.left = varX+ "px"
    
    let circle = document.createElement('span')
    circle.classList.add('circle')

    wrapper.appendChild(circle)
    holder.appendChild(wrapper)

}

function follow(e){
    timeOut++
    if (timeOut < delay) {
        return
    }
    timeOut = 0

    let varX = e.pageX - body.offsetWidth*50/100
    let varY = e.pageY - body.offsetHeight*50/100

    // let normX = normalize(e.pageX, body.offsetWidth*30/100, body.offsetWidth*70/100)
    // let normY = normalize(e.pageY, body.offsetHeight*30/100, body.offsetHeight*70/100)

    let wrapper = document.createElement("li")
    wrapper.classList.add('wrapper')
    wrapper.style.top = varY+ "px"
    wrapper.style.left = varX+ "px"
    
    let circle = document.createElement('span')
    circle.classList.add('circle')

    wrapper.appendChild(circle)
    holder.appendChild(wrapper)

    setTimeout(() => {
        wrapper.remove()
        circles_qtd--
    }, circle_life);
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