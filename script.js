function stringChop(str, size) {
  if (size <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size)); // Extract substring of length `size`
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
