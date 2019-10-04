


var a = require("./userdata");


function abc(){

    for(i=0;i<a.length;i++){
if(a[i].age<=100){
    console.log("age is correct  "+ a[i].age);
}
else{

    console.log("not correct    "+ a[i].age);

}


if(a[i].mobile.length!=10){
    console.log("number is not correct   "+ a[i].mobile);
}
else{

    console.log("successful     "+ a[i].mobile);

}
}
}
abc();