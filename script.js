var nama = "Zero";
var peran = "Penyihir";

if (nama === "") {
    console.log("Nama harus diisi")
} else if (peran === "") {
    console.log ("Halo Hendra, Pilih peranmu")
} else if (nama === "Nina" && peran == "Ksatria") {
    console.log ("Selamat datang di Dunia Proxytia, Nina. Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!")
} else if (nama === "Danu" && peran == "Tabib") {
    console.log ("Selamat datang di Dunia Proxytia, Danu. Halo Tabib Danu, kamu dapat menyerang dengan senjatamu!")
} else if (nama !== "" && peran !== "") {
    console.log ("Selamat datang di Dunia Proxytia, Zero. Halo Penyihir Zero, kamu dapat menyerang dengan senjatamu!")
}