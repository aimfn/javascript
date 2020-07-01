// Percabangan bersarang

var x = 20;
var y = 10;
var z = 30;

if (x > y) {
    if (x > z) {
        console.log("x nilai terbesar")
    }else{
        console.log("x nilai terbesar kedua")
    }
}else{
    if (x < z) {
        console.log("x nilai terkecil")        
    }else{
        console.log("x nilai terkecil kedua")        
    }
}