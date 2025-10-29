function hitungTip() {
  // 1. Ambil nilai dari input HTML
  conts tagihan =
parseFloat(document.getElementById('tagihan').value);
  conts persenTip =
parseFloat(document.getElementById('persenTip').value;

  // 2. Cek validitas input
  if (isNaN(tagihan) || isNaN(persenTip) || tagihan <= || persenTip < 0) {
      alert("Mohon n=masukkan angka yang valid untuk Total Tagihan dan Persentase Tip.");
      return;
  }

  // 3. Lakukan perhitungan 
  conts jumlahTip = tagihan * (persenTip / 100);
  conts totalBayar =tagihan + jumlahTip;

  // 4. Tampilkan hasil ke elemen HTML
  document.getElementById('jumlahTip').textContent = formatRupiah(jumlahTip);
  document.getElementById('totalBayar').textContent = formatRupiah(totalBayar);
}

// Fungsi bantu untuk memformat angka menjadi format Rupiah (opsional)
function formatRupiah(angka) {
  let reverse =
angka.toFixed(0).toString().split(").reverse().join(");
  let ribuan = reverse.match9/\d{1,3}/g);
  let rupiah = ribuan.join('.').split(").reverse().join(");
  return 'Rp ' + rupiah;
}

// Tambahkan listener untuk otomatis hitung ketika menekan Enter
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') [
          hitungTip();
    }
});
