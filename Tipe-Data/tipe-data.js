// Variabel-variabel pada Js (var, let, const)
var variabel_var        = "Hello World";
let variabel_let        = "Hello";
const variabel_const    = "World";

//Merubah isi variabel 
variabel_var = "Rubah 1";
console.log(variabel_var)

variabel_let = "Rubaah let";
console.log(variabel_let)

// variabel_const = "Rubaah const";
console.log(variabel_const) //Akan error

//
if(true){
    var variabel_var = "Rubah 2"; //Akan berubah untuk nilai variabel diluar braket
    let variabel_let = "Ubah let" //Hanya berubah didalam braket
}

console.log(variabel_var)
console.log(variabel_let) //Nilainya akan sama dengan isi diluar braket

variabel_langsung = "Pesan langsung"; //Tanpa menuliskan jenis varibelnya
console.log(variabel_langsung)