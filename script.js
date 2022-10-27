const cnv = document.getElementById("cnv");
let size = [cnv.clientWidth, cnv.clientHeight]
window.addEventListener("resize", (e) => {
    const tar = e.currentTarget;
    size = [tar.innerWidth, tar.innerHeight]
})
const ctx = cnv.getContext("2d");
const backOff = [0, 0]
const block = []
const draw = () => {
    // Background
    let ind = 0;
    for(let x = -100; x <= size[0] + 100; x += 10) {
        for(let y = -100; y <= size[1] + 100; y += 10) {
            ctx.fillStyle = ind % 2 ? "#ddd" : "#aaa"
            ctx.fillRect(x + backOff[0] % 100, y + backOff[1] % 100, 10, 10);
            ind++;
        }
    }
}
const run = () => {
    draw();
    window.requestAnimationFrame(run);
}
run();