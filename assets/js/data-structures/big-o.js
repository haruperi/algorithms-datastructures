/************************ Exercises *****************************/
// Calculate the time complexities for each of the exercise code snippets.

function someFunction(n) {
     for (var i=0;i<n*1000;i++) {
         for (var j=0;j<n*20;j++) {
             console.log(i+j);
             }
         }
     }
     //n^2

function someFunction(n) {
     for (var i=0;i<n;i++) {
         for (var j=0;j<n;j++) {
             for (var k=0;k<n;k++) {
                 for (var l=0;l<10;l++) {
                     console.log(i+j+k+l);
                     }
                 }
             }
         }
}
// n^3

function someFunction(n) {
     for (var i=0;i<1000;i++) {
         console.log("hi");
         }
     }
     //k

function someFunction(n) {
     for (var i=0;i<n*10;i++) {
         console.log(n);
         }
     }
     //n

function someFunction(n) {
     for (var i=0;i<n;i*2) {
         console.log(n);
         }
     }
     //log n

function someFunction(n) {
     while (true){
         console.log(n);
         }
     }
     //infinity