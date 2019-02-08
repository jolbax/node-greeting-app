colors = [
  "\x1b[30m",
  "\x1b[31m",
  "\x1b[32m",
  "\x1b[33m",
  "\x1b[34m",
  "\x1b[35m",
  "\x1b[36m",
  "\x1b[37m"
];

exports.decorateGreeting = function(f, name) {
  let colorIndex = Math.floor(Math.random() * colors.length);

  console.log(`${colors[colorIndex]}%s\x1b[0m`, "================");
  f();
  console.log(name);
  console.log(`${colors[colorIndex]}%s\x1b[0m`, "================");
};
