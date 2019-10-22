// worked on this with Michelle
const sentence = "hello there from lighthouse labs";

let timer = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, timer);
  timer += 50;
  if (i === sentence.length - 1) {
    timer += 50;
    setTimeout(() => {
      console.log('\n');
    }, timer);
  }
}  