const names: string[] = [];

function addNamesArray(name: string) {
  names.push(name);
}

addNamesArray("mateus");
addNamesArray("john");
addNamesArray("alien");

names.sort();
names.reverse();
console.log(names);
