



// 1. Global Execution Context
// Global Object: In a browser, this refers to the window object. In a Node.js environment, this refers to an empty object (global in Node.js).
// Global Scope: The global execution context is created as soon as the script starts executing and persists for the lifetime of the script.
// 2. Memory Phase (Creation Phase)
// During this phase, the JavaScript engine performs the following tasks:

// Variables: Variables declared with var are hoisted to the top of their scope and initialized with undefined. Variables declared with let and const are also hoisted but are not initialized, resulting in a "temporal dead zone" until they are initialized.
// Functions: Function declarations are hoisted to the top of their scope and are initialized with their function definitions.
// Scope: A lexical environment is created, which includes the global scope and any local scopes for functions.
// 3. Execution Phase
// In this phase, the JavaScript engine executes the code line by line:

// Variable Assignments: Variables declared with var, let, and const are assigned their actual values.
// Function Execution: When a function is called, a new Function Execution Context is created.
// Function Execution Context
// When a function is called, the JavaScript engine creates a new execution context for that function. This context also goes through two phases:

// Memory Phase (Creation Phase):

// Arguments Object: The arguments passed to the function are created.
// Variable Hoisting: Variables and function declarations inside the function are hoisted.
// Execution Phase:

// Code Execution: The code inside the function is executed line by line.
// Return Value: When the function completes, any return value is passed back to the calling context


//EXAMPLE:
let val1= 10;
let val2=5;
function addNum (num2, num2){
    let total = num1+ num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2)
// EXPLANATION:

/*
```

### Global Execution Context

#### Memory Phase

In this phase, the JavaScript engine scans the code and hoists variable declarations and function declarations.

1. **Variable Declarations**:
    - `val1` is declared with `let` and hoisted, but not initialized (remains in the temporal dead zone).
    - `val2` is declared with `let` and hoisted, but not initialized (remains in the temporal dead zone).
    - `result1` is declared with `let` and hoisted, but not initialized (remains in the temporal dead zone).
    - `result2` is declared with `let` and hoisted, but not initialized (remains in the temporal dead zone).

2. **Function Declarations**:
    - `addNum` is declared and initialized to its function definition.

#### Execution Phase

In this phase, the JavaScript engine executes the code line by line.

1. `let val1 = 10;`
    - `val1` is initialized with the value `10`.

2. `let val2 = 5;`
    - `val2` is initialized with the value `5`.

3. The function `addNum` is already initialized with its function definition during the Memory Phase.

4. `let result1 = addNum(val1, val2);`
    - The function `addNum` is called with `val1` and `val2` as arguments, i.e., `addNum(10, 5)`.
    - A new Function Execution Context is created for this call.

### Function Execution Context for `addNum(val1, val2)`

#### Memory Phase

1. **Parameters**:
    - `num1` is initialized with undefined
    - `num2` is initialized with undefined

2. **Variable Declarations**:
    - `total` is declared with `let` and hoisted, but not initialized (remains in the temporal dead zone).

#### Execution Phase
num1 =10
num2 = 5
1. `let total = num1 + num2;`
    - `total` is initialized with the value `num1 + num2` which is `10 + 5 = 15`.

2. `return total;`
    - The function returns the value `15`.

3. The returned value `15` is assigned to `result1`.

Back to the Global Execution Context:

5. `let result2 = addNum(10, 2);`
    - The function `addNum` is called with `10` and `2` as arguments, i.e., `addNum(10, 2)`.
    - A new Function Execution Context is created for this call.

### Function Execution Context for `addNum(10, 2)`

#### Memory Phase

1. **Parameters**:
    - `num1` is initialized with undefined
    - `num2` is initialized with undefined

2. **Variable Declarations**:
    - `total` is declared with `let` and hoisted, but not initialized (remains in the temporal dead zone).

#### Execution Phase
num1 = 10
num2 = 2

1. `let total = num1 + num2;`
    - `total` is initialized with the value `num1 + num2` which is `10 + 2 = 12`.

2. `return total;`
    - The function returns the value `12`.

3. The returned value `12` is assigned to `result2`.

### Final State

- `val1` = 10
- `val2` = 5
- `result1` = 15
- `result2` = 12

### Summary

- The Global Execution Context is created, which initializes `val1`, `val2`, `result1`, and `result2`.
- The function `addNum` is defined and ready to be invoked.
- When `addNum` is called, a new Function Execution Context is created, processes the function's code, and returns the result to be assigned to `result1` and `result2`.

This step-by-step process ensures that the correct values are computed and assigned according to the rules of JavaScript execution contexts. */



// ************* Threads
// In computing, a thread is the smallest unit of processing that can be performed in an operating system. Threads are sometimes called lightweight processes because they share the resources of a process, such as memory and file handles, but can be scheduled to run independently by the operating system.

// ### Single Thread
// When we say a program or environment is "single-threaded," it means that it operates on a single thread of execution. In a single-threaded environment:
// - Only one operation or task can be executed at a time.
// - Tasks are performed sequentially, one after the other.
// - If a task takes a long time to complete, it can block the execution of other tasks, potentially leading to inefficiencies.

// ### Multiple Threads
// When we refer to "multiple threads" or "multithreading," it means that a program or environment can run multiple threads concurrently. In a multithreaded environment:
// - Multiple tasks can be executed simultaneously.
// - Threads can run in parallel on multi-core processors, improving performance and responsiveness.
// - Resources such as memory are shared among threads, which can lead to issues such as race conditions or deadlocks if not managed correctly.

// ### Example in JavaScript
// JavaScript is traditionally single-threaded, meaning it has one call stack and one memory heap. It uses an event loop to handle asynchronous operations, allowing it to appear as though it can handle multiple tasks at once. However, true multithreading in JavaScript can be achieved using Web Workers.

// #### Single-Threaded Example:
// ```javascript
// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 1000);

// console.log("End");
// ```
// Output:
// ```
// Start
// End
// Timeout
// ```
// Here, even though `setTimeout` is asynchronous, it doesn't block the execution of subsequent code due to the event loop.

// #### Multithreaded Example with Web Workers:
// ```javascript
// // main.js
// const worker = new Worker('worker.js');

// worker.onmessage = function(event) {
//     console.log('Message from worker:', event.data);
// };

// worker.postMessage('Hello, Worker!');
// ```

// ```javascript
// // worker.js
// onmessage = function(event) {
//     console.log('Message from main script:', event.data);
//     postMessage('Hello, Main!');
// };
// ```
// In this example, `main.js` spawns a separate thread (`worker.js`) to perform tasks concurrently, allowing for true parallel execution.

// ### Advantages and Disadvantages

// #### Advantages of Multithreading:
// - **Increased Performance**: Especially on multi-core processors, as tasks can run in parallel.
// - **Responsiveness**: Long-running tasks can be handled in the background, keeping the main application responsive.

// #### Disadvantages of Multithreading:
// - **Complexity**: Managing multiple threads can be more complex, especially when dealing with shared resources.
// - **Concurrency Issues**: Potential for race conditions, deadlocks, and other synchronization problems if threads are not managed correctly.

// Understanding the differences between single-threaded and multithreaded environments is crucial for optimizing application performance and responsiveness, especially in environments like web development where user experience is paramount.