# 🧩 AlgoVision: Interactive Algorithm Engine by Fatehin Alam

**AlgoVision** is a high-performance Data Structure and Algorithm (DSA) visualizer designed to demystify sorting logic through real-time animation. By bridging the gap between theoretical Big O notation and visual execution, this engine provides a "system defrag" style analysis of how data moves through various computational patterns.

![Status](https://img.shields.io/badge/status-active-success)
![Focus](https://img.shields.io/badge/focus-DSA_Optimization-blue)
![Engineer](https://img.shields.io/badge/System_Architect-Fatehin_Alam-white)

---

## 🚀 Key Features

- **Real-Time Execution:** Watch sorting algorithms (Bubble Sort, Selection Sort) operate on live data arrays with millisecond-precision.
- **Dynamic Data Generation:** Generate randomized datasets on the fly to test algorithmic efficiency across different edge cases.
- **Live Metrics Dashboard:** Tracks total **Comparisons** and **Swaps** in real-time to demonstrate the tangible cost of each operation.
- **Futuristic Visuals:** A "JetBrains Mono" inspired dark-mode interface with color-coded states:
  - 🔴 **Red:** Comparison phase
  - 🟡 **Yellow:** Memory swap/movement
  - 🟢 **Green:** Final sorted state
- **Adaptive Architecture:** Responsive layout that scales the number of data bars based on the user's screen resolution.



## 🛠️ Technical Deep Dive

### **Async/Await Animation Engine**
Traditional loops run too fast for the human eye to track. AlgoVision utilizes a custom `sleep()` utility wrapped in **Asynchronous JavaScript** to pause execution between iterations. This allows for a smooth, cinematic frame rate while maintaining the integrity of the algorithm's logic.

### **Big O Visualization**
The app helps users visualize time complexity:
* **Bubble Sort:** Demonstrates $O(n^2)$ complexity through its repeated passes.
* **Selection Sort:** Shows the efficiency of finding the minimum element in each pass.

## 📦 Installation & Use

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Fatehin03/algovision.git](https://github.com/Fatehin03/algovision.git)
