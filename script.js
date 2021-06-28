var nama = "Hendra";
var peran = "Tabib"; // Ksatria, Tabib, Penyihir

if (nama === "") {
  console.log("Nama harus diisi");
} else if (peran === "") {
  console.log("Halo Hendra, Pilih peranmu");
} else if (peran == "Ksatria") {
  console.log(
    `Selamat datang di Dunia Proxytia, ${nama}. Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`
  );
} else if (peran == "Tabib") {
  console.log(
    `Selamat datang di Dunia Proxytia, ${nama}. Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka`
  );
} else if (peran === "Penyihir") {
  console.log(
    `Selamat datang di Dunia Proxytia, ${nama}. Halo ${peran} ${nama}, ciptakan keajaiban yang dapat membantu kemenanganmu!`
  );
} else {
  console.log("invalid");
}
