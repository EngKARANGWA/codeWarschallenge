const orderedCount = function (text) {
  let map = new Map();

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  return Array.from(map.entries());
};