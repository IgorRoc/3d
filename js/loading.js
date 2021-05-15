let circles_qtd = 7
let distance = 1
let aaa = 0

const holder = document.getElementById('holder')
const dis = document.getElementById('dis').children[1]

create(circles_qtd)
window.addEventListener("mousewheel", circles)



function create(qtd){
    for (let i = 1; i <= qtd; i++) {
        let circle = document.createElement('li')
        circle.classList.add('circle')
        circle.style = `--i:${i}`
        holder.appendChild(circle)
    }
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