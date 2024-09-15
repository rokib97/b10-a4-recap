function generateGreeting(profileUrl) {
  if (typeof profileUrl != "string") {
    return "Invalid Input";
  }
  if (!profileUrl.includes("@")) {
    return "Invalid Input";
  }
  const parts = profileUrl.split("@");

  const firstPart = parts[0]; // john_doe
  const secondPart = parts[1]; //facebook.com"

  //   return "Welcome " + firstPart + " to the " + secondPart + " platform";
  return `Welcome ${firstPart} to the ${secondPart} platform`;
}

const result = generateGreeting("jane_smith@twitter.com");
console.log(result);

// output
// Welcome john_doe to the Facebook platform!
// jane_smith@twitter.com
