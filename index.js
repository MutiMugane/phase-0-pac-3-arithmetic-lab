
function add (a,b,result){
    result=a+b;
    return (`${result}`)
}
add(900,19);

function subtract (a,b,result){
    result=a-b;
    return (`${result}`)
}
subtract(612,1);

function multiply (a,b,result){
    result=a*b;
    return (`${result}`)
}
multiply(11568,10);

function divide (a,b,result){
    result=a/b;
    return (`${result}`)
}
divide(20,5);

function increment (n,result){
    n++;
    return (`${n}`);
}
increment(278);

function decrement (n,result){
    n--;
    return (`${n}`);
}
decrement(278);

function makeInt(n){
    return parseInt(n , 10);    
     
    
}
makeInt("test",10);


function preserveDecimal(n){
    return parseFloat(n);
     
}
preserveDecimal("2.2222", 10);


