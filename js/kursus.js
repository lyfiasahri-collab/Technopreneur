function daftarKursus(namaKursus, biaya, durasi){

let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Please log in first")
    window.location.href="../index.html"
    return
}

let data = JSON.parse(localStorage.getItem("kursus")) || []

let sudahDaftar = data.find(
    item => item.email === user.email && item.namaKursus === namaKursus
)

if(sudahDaftar){
    alert("You are already registered for this course")
    return
}

data.push({
    email: user.email,
    namaKursus: namaKursus,
    biaya: biaya,
    durasi: durasi
})

localStorage.setItem("kursus", JSON.stringify(data))

alert("Successfully Enroll in Courses")

window.location.href="riwayat.html"

}