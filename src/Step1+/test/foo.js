export function foo1() {
  console.log('foo1');
}

const identity = f => f;

const foo2 = identity(() => {
  console.log('foo2');
});

export { foo2 }

function fn() {
  console.log('fn');
}

function foo3(fn) {
  return fn;
}
