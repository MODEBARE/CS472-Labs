var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();

//Expected Output

10


// Lexical Environment Diagrams



// Global Execution Context Creation:
// Outer: null
// LE: { foo: undefined, bar: <function> }
// TDZ: {}



// Global Execution Context Execution:
// Outer: null
// LE: { foo: 1, bar: <function> }
// TDZ: {}



// Function bar Execution Context Creation:
// Outer: Global LE
// LE: { foo: undefined }
// TDZ: {}



// Function bar Execution Context Execution:
// Outer: Global LE
// LE: { foo: 10 }
// TDZ: {}