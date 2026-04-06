let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

console.log(npm.value);
console.log(nama.value);

function simpan() {

    console.log(npm.value);
    console.log(nama.value);

    // localStorage.setItem("npm", npm.value);
    // localStorage.setItem("nama", nama.value);

    // jika local storage belum ada isi atau value
    if (localStorage.getItem("mahasiswa") === null) {
        // simpan ke array kosong []
        localStorage.setItem("mahasiswa", "[]")
    }

    // panggil local storage (konversi string => object )
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data);

    // Simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value
    })

    console.log(data);

    // simpan data terbaru ke dalam locak storage
    // Konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    // Panggil fungsi tampil()
    tampil();
}

function tampil() {
    // Panggil localstorage 
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    // Clelar
    document.getElementById("list-mhs").innerHTML = ""

    // lakukan erulangan (forEach)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li>${element.npm} ${element.nama}</li>`
    });
}

// Panggil tampil saat halaman pertama kali dimuat
tampil();