
//function vowelCount(str){
  //  let vowels= 0
   // let Consonants= 0
    //str.toLowerCase ()
//for (let i=0; i< str.length; i++ ){
 //    if(str[i]=== "a" || 
        ///str[i]=== "e" ||
        //str[i]=== "i" ||
        //str[i]=== "o" ||
      ///  str[i]=== "u"){
         ///   vowels++
      //  }
      //  else Consonants++
       /// }
       //// console.log(vowels);

   // }
//vowelCount("hello")

//6
 //function thenumbs(){
   // let rows= 5
//for(let i=1; i<=rows; i++){
   // let nums= ""
//for(let j=1; j<=i; j++){
  //  nums+= j
//} 
//console.log(nums);
//}
//} 

  //  thenumbs()

//  let arr = [[1, 2], [3, 4], [5, 6]];
//let sum = 0;

//function totSum() {
//for (let i = 0; i < arr.length; i++) {
  //  for (let j = 0; j < arr[i].length; j++) { 
   //   sum += arr[i][j]; 
    //}
  //}
  //console.log(sum); 
//}

//totSum(); 


let arr = [[1, 2], [3, 4], [5, 6]]

let newArr=[]
function pushNewArr(arr){
    let countArr=0
    let newArr=[]
    for(let i=0; i<arr.length; i++){
for(let j=0; j<arr[i].length; j++){
    newArr[countArr]=arr[i][j]
    countArr++
}
}console.log(newArr);
}
pushNewArr(arr)