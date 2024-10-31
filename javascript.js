const container = document.querySelector("#container");
const newgridbutton = document.querySelector("#newgridbutton");
newgridbutton.addEventListener("click", () => {
    drawGrid(prompt("Enter the size of the new grid: "));
});

let darkenpercentage = 0;

function getColor() {
    darkenpercentage += 0.1;
    let R = Math.floor(Math.random() * 256);
    R = R - (darkenpercentage * R);
    let B = Math.floor(Math.random() * 256);
    B = B - (darkenpercentage * B);
    let G = Math.floor(Math.random() * 256);
    G = G - (darkenpercentage * G);
    return "rgb(" + R + "," + G + "," + B + ")"
}

function drawGrid(gridsize) {
    if (gridsize > 0 && gridsize < 101) {
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
        for (i = 0; i < gridsize; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            for (j = 0; j < gridsize; j++) {
                const div = document.createElement("div");
                div.classList.add("gridsquare");
                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = getColor();
                })
                row.appendChild(div);
            }
            container.appendChild(row);
        }
    }
}

drawGrid(16);