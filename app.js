// TimingEventsExercise

setTimeout(() => {
    const div1 = document.querySelector(`#first`)
    const p1 = document.createElement(`p`)
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);



setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`)
    const p2 = document.createElement(`p`)
    p2.innerText = `One`;
    div2.append(p2);
    // Nested setTimeout
    setTimeout(() => {
        const p3 = document.createElement(`p`)
        p3.innerText = `Two`;
        div2.append(p3);
    }, 1000);
}, 2000);


let counter = 1;
const stopwatch = setInterval(() => {
    console.log(counter);
    counter++;
}, 1000);

const stop = document.querySelector(`button`);
stop.addEventListener(`click`, () => {
    clearInterval(stopwatch)
});

// Bonus
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;

const countDown = setInterval(() => {
        startingSeconds--;
        const minutes = Math.floor(startingSeconds / 60)
        const seconds = startingSeconds % 60;
    
        // if (seconds < 10){
        //     p4.innerText = `${minutes}:0${seconds}`;
        // } else {
        //     p4.innerText = `${minutes}:${seconds}`;
        // }

        // Ternary version (basically better)
        p4.innerText = (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;

    if (startingSeconds === 0) {
        p4.innerText = `Time is up!`;
        clearInterval(countDown)
    }
}, 100);