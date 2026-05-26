function logout(){

// menghapus data user yang sedang login
localStorage.removeItem("userLogin")

alert("Anda berhasil logout")

// kembali ke halaman login
window.location.href = "../index.html"

}