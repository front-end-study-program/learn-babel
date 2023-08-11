const fn = (a, b) => a + b

export function addAll() {
  return Array.from(arguments).reduce(function(a, b) {
    return a + b;
  });
}

class Foo {
  method() {}
}