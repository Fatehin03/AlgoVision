const container = document.getElementById("container");
const statusText = document.getElementById("statusText");
const compDisplay = document.getElementById("compCount");
const swapDisplay = document.getElementById("swapCount");

let bars = [];
let audioCtx = null;

// Generate Random Array on Load
document.addEventListener("DOMContentLoaded", generateArray);

function generateArray(count = 50) {
    container.innerHTML = "";
    bars = [];
    resetStats();
    statusText.innerText = "Data Generated";
    statusText.className = "text-emerald-500";

    for (let i = 0; i < count; i++) {
        // Random height between 5 and 100%
        const value = Math.floor(Math.random() * 90) + 5; 
        
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}%`;
        
        // Calculate dynamic width based on screen size
        bar.style.width = `${Math.floor(window.innerWidth / count) - 4}px`;
        
        container.appendChild(bar);
        bars.push(bar);
    }
}

// Utility: Sleep function to create animation delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ALGORITHM 1: Bubble Sort
async function bubbleSort() {
    updateStatus("Processing: Bubble Sort...", "text-blue-400");
    let c = 0, s = 0;

    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            
            // Highlight comparing
            bars[j].classList.add("comparing");
            bars[j + 1].classList.add("comparing");
            
            // Logic
            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j + 1].style.height);
            
            c++;
            compDisplay.innerText = c;
            await sleep(20); // Animation Delay

            if (height1 > height2) {
                // Swap Visuals
                bars[j].classList.replace("comparing", "swapping");
                bars[j + 1].classList.replace("comparing", "swapping");
                
                await sleep(20);
                
                // Swap Heights
                bars[j].style.height = `${height2}%`;
                bars[j + 1].style.height = `${height1}%`;
                s++;
                swapDisplay.innerText = s;
            }

            // Remove classes
            bars[j].classList.remove("comparing", "swapping");
            bars[j + 1].classList.remove("comparing", "swapping");
        }
        // Mark sorted item (end of array)
        bars[bars.length - i - 1].classList.add("sorted");
    }
    // Finish
    bars[0].classList.add("sorted");
    updateStatus("Operation Complete", "text-green-400");
}

// ALGORITHM 2: Selection Sort
async function selectionSort() {
    updateStatus("Processing: Selection Sort...", "text-purple-400");
    let c = 0, s = 0;

    for (let i = 0; i < bars.length; i++) {
        let minIndex = i;
        bars[i].classList.add("swapping"); // Mark current target

        for (let j = i + 1; j < bars.length; j++) {
            bars[j].classList.add("comparing");
            
            let minHeight = parseInt(bars[minIndex].style.height);
            let currHeight = parseInt(bars[j].style.height);
            
            c++;
            compDisplay.innerText = c;
            await sleep(10);

            if (currHeight < minHeight) {
                if(minIndex !== i) bars[minIndex].classList.remove("swapping");
                minIndex = j;
                bars[minIndex].classList.add("swapping");
            } else {
                bars[j].classList.remove("comparing");
            }
        }

        // Swap
        if (minIndex !== i) {
            let temp = bars[i].style.height;
            bars[i].style.height = bars[minIndex].style.height;
            bars[minIndex].style.height = temp;
            s++;
            swapDisplay.innerText = s;
        }

        // Cleanup visuals
        bars[minIndex].classList.remove("comparing", "swapping");
        bars[i].classList.remove("swapping");
        bars[i].classList.add("sorted");
    }
    updateStatus("Operation Complete", "text-green-400");
}

function updateStatus(msg, colorClass) {
    statusText.innerText = msg;
    statusText.className = colorClass;
}

function resetStats() {
    compDisplay.innerText = "0";
    swapDisplay.innerText = "0";
}

// Branded Console Log
console.log("%c Engineered by Fatehin Alam ", "background: #3b82f6; color: white; font-weight: bold; padding: 4px; border-radius: 4px;");
