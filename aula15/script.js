var num = [1 ,2, 3, 9, 4, 6]
num.sort    
console.log(num.length)
/*for(var c = 0; c <= num.length; c++){
    console.log(num[c])
}*/

for(var c in num){
    console.log(num[c])
}
console.log('-------------------')
console.log(num.indexOf(2))