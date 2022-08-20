//  1- O(1)
const data = ["A", "B", "C"];
console.log(data[0]);

console.log(data[0]); //*1000 ==> O(1000)= O(1)

//2- O(n)
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
} //OutPut => A B C

// O(n+a)
const data1 = ["A", "B", "C"];
const data2 = [1, 2, 3];

//O(n)
for (let j = 0; j < data2.length; j++) {
  console.log(data1[j]); //OutPut => A B C
}
//O(a)
for (let i = 0; i < data1.length; i++) {
  console.log(data2[i]);
} //Output 1 2 3

////////////////// O(n) + O(a) = O(n+a)<=> O(n)

//3- O(n^2)// Nested Loops

for (let j = 0; j < data2.length; j++) {
  for (let i = 0; i < data1.length; i++) {
    console.log(data1[j] + data2[i]);
  }
}

//4 O(n^2 + n)<===> O(n^2)

  for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data1.length; i++) {
      console.log(data[i] + data[j]);
    }// O(n^2)
  }
  for(let i=0; i<data.length; i++){
    console.log(data[i])//O(n)
  }