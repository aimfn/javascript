function TambahProperti() {
    var mobil = {
        type    : 'Sedan',
        harga   : 200000000,
        warna   : 'Putih',        
    }
    mobil.harga = 100000000; // Merubah properti
    mobil.tahun = 2020; // Menambah Properti
    
    console.log(mobil)
}

TambahProperti()