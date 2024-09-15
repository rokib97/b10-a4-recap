function containsSpecialChars(name) {
  console.log(typeof name != "string");
  if (typeof name != "string") {
    return "Invalid Input";
  }
  for (var i = 0; i < name.length; i++) {
    let char = name.charAt(i);

    // !true = false
    // a - z ==>
    // A - Z  ==>
    // 0 - 9 ==>

    if (
      !(char >= "a" && char <= "z") &&
      !(char >= "A" && char <= "Z") &&
      !(char >= "0" && char <= "9")
    ) {
      return true;
    }
  }
  return false;
}

const result = containsSpecialChars("Raj123!");
console.log(result);

// Raj123!	true
// n@ayeem	true
// e1mu3	false
// Suman	false
// Name2024$	true
// !@#	true
// ["Raj"]	Invalid Input
