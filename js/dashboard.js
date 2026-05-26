let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href="../index.html"
}

// menampilkan salam
document.getElementById("welcome").innerHTML =
"Halo! Selamat Datang " + user.nama

// menampilkan data profil
document.getElementById("nama").innerHTML = user.nama
document.getElementById("email").innerHTML = user.email
document.getElementById("password").innerHTML = user.password