function averageInterviewTime(times) {
  console.log(Array.isArray(times));

  if (!Array.isArray(times)) {
    return "Invalid , please input an array";
  }

  for (let i = 0; i < times.length; i++) {
    let element = times[i];
    if (typeof element !== "number" || times[i] < 0) {
      return "Invalid Input...>XDD";
    }
  }

  let totalTime = 0;
  for (let index = 0; index < times.length; index++) {
    const elementTime = times[index];
    totalTime += elementTime;
  }
  return Math.round(totalTime / times.length);
}

const result = averageInterviewTime(["hello", 5, 8, 7]);
console.log(result);

// Input:
// একটি Array (যারা ইন্টারভিউ দিয়েছে তাদের সময়)।

// Output:
// ইন্টারভিউগুলোর রাউন্ড করা গড় সময়।

// Validation Challenge 📢:
// যদি ইনপুট Array না হয় বা Array এর সকল উপাদান সংখ্যা না হয়, তাহলে "Invalid Input" রিটার্ন করবে।

// Input: [10, 5, 8, 7]
// Output: 8

// Input: [15, 12]
// Output: 14

// Input: "Not an array"
// Output: "Invalid Input"

// 3 => 30/3 => 10

// console.log(Math.round(3.4));
// console.log(Math.round(5.6));
// console.log(Math.round(3.1));
// console.log(Math.round(3.5));
