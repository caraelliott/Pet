const petMood = document.getElementById("mood");
const petHunger = document.getElementById("hunger");
const petEnergy = document.getElementById("energy");
const petHealth = document.getElementById("health");
const play = document.getElementById("play");
const feed = document.getElementById("feed");
const nap = document.getElementById("nap");
const go = document.getElementById("go");


function editName() {
    // this doesnt need to be in a function. this can be on its own line which would trigger the prompt to run when the page loads.
    document.querySelector("p.Pet").innerHTML = prompt("Change Pet name")
}

// go.addEventListener("click", () =>{
//     go.style.visibility = "hidden";
//     petStats = setInterval(() => {
//         petEnergy.value -= 2;
//         petHunger.value -= 2;
//         petMood.value -= 2.5;
//         if (petEnergy.value == 0 && petHunger.value == 0){
//             petHealth.value -= 3
//         }
//         if (petHealth.value == 0){
//             clearInterval(petStats);
//             alert("Game Over!");
//             window.location.reload();
//         }
//     }, 200 );
// })

feed.addEventListener("click", () => {
    petHunger.value -= 6;
})
nap.addEventListener("click", () => {
    petEnergy.value -= 6;
})
play.addEventListener("click", () => {
    petMood.value -= 6;
})
