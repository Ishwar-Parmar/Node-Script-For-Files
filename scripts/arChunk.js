// function arChunk(ar, chunk) {
//   let newAr = [];
//   let i = 0;

//   while (i < ar.length) {
//     let tempAr = [];
//     for (let r = i; r < chunk + i && r < ar.length; r++) {
//       tempAr.push(ar[r]);
//     }
//     newAr.push(tempAr);
//     i = i + chunk;
//   }

//   return newAr;
// }

// let myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 5, 7];
// console.log("🚀 ~ myAr:", myAr);
// let chunk = 4;
// let newArr = arChunk(myAr, chunk);
// console.log("🚀 ~ newArr:", newArr);

function checkPrime(num) {
  let sqr_num = parseInt(Math.sqrt(num));
  console.log("🚀 ~ checkPrime ~ sqr_num:", sqr_num);
  let is_prime = false;

  for (let i = 2; i < sqr_num; i++) {
    if (num % i == 0) {
      console.log("🚀 ~ checkPrime ~ i:", i)
      is_prime = true;
      break;
    }
  }
  is_prime
    ? console.log(num, "is a not a prime number")
    : console.log(num, "is a prime number");
}

checkPrime(14467);
