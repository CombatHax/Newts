/*
FIRST LAW: An object in motion stays in motion and an object at rest stays in rest
SECOND LAW: An object's acceleration increases with more force and less mass.
*/

const cnv = document.getElementById("cnv");
let size = [cnv.clientWidth, cnv.clientHeight]
let mass = 40
window.addEventListener("resize", e => {
    const tar = e.currentTarget;
    size = [tar.innerWidth, tar.innerHeight]
})
window.addEventListener("keydown", e => {
    if(e.key == "+") mass++;
    if(e.key == "-" || e.key == "_") mass--;
    console.log(`Key: ${e.key}\nMass: ${mass}`);
})
const ctx = cnv.getContext("2d");
const backOff = [0, 0]
const getBlock = () => {
    console.log(size);
    return [(size[0] - mass) / 2, (size[1] - mass) / 2];
}
let vel = [0, 0]
const draw = () => {
    // Background
    let ind = 0;
    for(let x = -100; x <= 800 + 100; x += 10) {
        for(let y = -100; y <= 600 + 100; y += 10) {
            ctx.fillStyle = ind % 2 ? "#ddd" : "#aaa"
            ctx.fillRect(x + backOff[0] % 100, y + backOff[1] % 100, 10, 10);
            ind++;
        }
    }
    // Dude
    ctx.fillStyle = "#f00"
    block = getBlock()
    ctx.fillRect(block[0], block[1], mass, mass);
    // Arrows
    // UI
    ctx.font = "50px Comic Sans MS"
    ctx.fillStyle = "#000"
    ctx.textBaseline = "top"
    ctx.fillText(`Mass: ${mass}`, 0, 0, 800)
}
const run = () => {
    draw();
    window.requestAnimationFrame(run);
}
run();