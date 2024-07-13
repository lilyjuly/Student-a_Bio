
const img = document.getElementById("mybio");
img.addEventListener("click", changeShape);

const shapeArr = [
      // Hexagon
    "25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%",
    //Paralleogon
    "25% 0%, 100% 0%, 75% 100%, 0% 100%",
    // Trapezoid
    "20% 0%, 80% 0%, 100% 100%, 0% 100%",
    // Left point
    "25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%",
    // Frame
    // "0% 0%, 0% 100%, 25% 100%, 12% 12%, 92% 11%, 91% 90%, 0 91%, 25% 100%, 100% 100%, 100% 0%",
];
function changeShape() {
    const randomShape = Math.floor(Math.random()
    * shapeArr.length);
    const newClipPart = shapeArr[randomShape]
    const currentClipPart = getComputedStyle(img).getPropertyValue("--shpae");
    // img.style.setProperty("--shape", shapeArr[randomShape]);
    if (currentClipPart !== newClipPart) {
        img.style.setProperty("--shape", newClipPart)
    } else {
        img.style.setProperty("--shape, shapeArr")
        console.log(shapeArr[randomShape + 1])
    }
}





