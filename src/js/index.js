let counter = document.getElementById("counter");
let count = 0;
entries = document.getElementById("entries");

function updateCounter() {
    counter.innerText = count;
}

function increment() {
    count = count + 1;
    updateCounter();
}


function save() {
    entries.textContent+=count+" - ";
    count = 0;
    updateCounter();

}


