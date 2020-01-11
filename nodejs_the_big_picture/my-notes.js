/**
 * useful dev tools
 * vscode, npm, mocha, chai, nyc
 */

// EventEmitter
emitter.on("data", msg => {
  console.log(msg);
});
emitter.emit("data", "Hello World");
