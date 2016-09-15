# async-function
Allow change prototype of async functions like Function.prototype but only on async functions, works only on native

```javascript
const AsyncFunction = require('async-function');
const return1 = new AsyncFunction('return 1');
console.log(return1) // 'async function anonymous() {\nreturn 1\n}'
```
