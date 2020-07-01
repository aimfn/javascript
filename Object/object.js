function Objek() {
    var mobil = {
        type    : 'Sedan',
        harga   : 200000000,
        warna   : 'Putih'
    }
    
    console.log(mobil)
    console.log(mobil.warna)
    console.log(mobil.type)
}

Objek()

function Objek2() {
    var mobil = {
        type    : 'Sedan',
        harga   : 200000000,
        warna   : 'Putih',
        tahun   : [2000, 2001, 2002, 2003]
    }
    
    console.log(mobil)
    console.log(mobil.warna)
    console.log(mobil.type)
    console.log(mobil.tahun[0])
}

Objek2()