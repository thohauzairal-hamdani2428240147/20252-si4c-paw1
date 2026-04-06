// simpan ke local storage 
localStorage.setItem("npm", 123);

// Baca data local storage
// tampilkan di console 
console.log(localStorage.getItem("npm"));

// Tampilkan di paragraf id = npm
document.getElementById("npm").innerHTML = localStorage.getItem("npm");