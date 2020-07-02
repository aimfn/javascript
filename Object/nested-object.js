function NestedObjek() {
    var mahasiswa = {
        nama    : "Abima Nugraha",
        ipk     : {
            semester_1  : 3.8,
            semester_2  : 3.7,
            semester_3  : 4,
            semester_4  : 3.9,
        }
    }
    console.log(mahasiswa.ipk.semester_1)
}

NestedObjek()