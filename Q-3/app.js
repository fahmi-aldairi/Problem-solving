// Q-3 Reverse a String: Write a program that Reverses a string

function reveseSt(str) {
  if (str === "") {
    return "";
  } else {
    return reveseSt(str.substr(1)) + str.charAt(0);
  }
}

console.log(reveseSt("stressed"));
