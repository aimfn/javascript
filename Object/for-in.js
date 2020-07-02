// Menampilkan objek dengan perulangan
function ForIn() {
    var mahasiswa = {
        nama    : 'Abima Nugraha',
        umur    : 23,
        nim     : 1700018148,
        jurusan : 'Teknik Informatika',
        semester: 6,
    }
    for (const x in mahasiswa) {
        if (mahasiswa.hasOwnProperty(x)) {
            const element = mahasiswa[x];
            console.log(element)
            
        }
    }
}

ForIn()