function modifyMultiply(str, loc, num) {
  let words = str.split(" ");
  let word = words[loc];
  let repeated = Array(num).fill(word).join("-");
  return repeated;
}