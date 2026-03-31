// alert('Belajar javascript');

function kirim() {
    // ambil value
    let nama = document.getElementById('nama').value;
    console.log("Nama : " + nama);
    let saran = document.getElementById('saran').value;
    console.log("Saran : " + saran);

    // tampilkan nama ke ul id = list-pesan
    // 1
    // document.getElementById('list-pesan').innerHTML = "<li>" + nama + "</li>";

    // 2
    // document.getElementById('list-pesan').innerHTML += `<li> ${nama} -${saran} </li>`;

    document.getElementById('list-pesan').innerHTML += `<tr><td> ${nama} </td><td> ${saran} </td></tr>`;
}