// scope.js

// Global scope variables
const a = 1;
const b = 2;
const c = 3;

(function firstFunction() {
  // firstFunction scope variables
  const b = 5;
  const c = 6;

  (function secondFunction() {
    // secondFunction scope variable
    const b = 8;

    // This console.log is inside secondFunction.
    // Let's analyze the variables it accesses:

    // 'a' is not declared inside secondFunction or firstFunction,
    // so JavaScript looks up the scope chain and finds 'a' in global scope = 1.
    //
    // 'b' is declared in secondFunction as 8, so it uses this local value.
    //
    // 'c' is not declared inside secondFunction,
    // but it is declared in firstFunction as 6, so it uses that.
    //
    // Therefore, this prints: a: 1, b: 8, c: 6
    console.log(`a: ${a}, b: ${b}, c: ${c}`);

    (function thirdFunction() {
      // thirdFunction scope variables
      const a = 7;
      const c = 9;

      (function fourthFunction() {
        // fourthFunction scope variables
        const a = 1;
        const c = 8;
      })();
    })();
  })();
})();
