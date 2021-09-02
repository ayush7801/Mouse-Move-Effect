const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; //100px

function shadow(e){
    //equivalent
    //const width = hero.offsetWidth;
    //const height = hero.offsetHeight;
    const {offsetWidth: width, offsetHeight: height} = hero;//Es6 destructuring
    let {offsetX: x, offsetY: y} = e; 
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);
    text.style = `
        text-shadow: ${xWalk}px ${yWalk}px 0px rgba(200,300,0,1),
        ${xWalk * -1}px ${yWalk}px 0px rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk*-1}px 0px rgba(100,0,300,1),
        ${-yWalk}px ${xWalk}px 0px rgba(255,100,255,1);
    `;
    console.log(xWalk , x, yWalk, y);
}

hero.addEventListener('mousemove', shadow); 