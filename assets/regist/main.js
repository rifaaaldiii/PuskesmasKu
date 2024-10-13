// Mengambil elemen input password dan tombol show/hide password
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const showPasswordLink = document.getElementById("show-password");
const hidePasswordLink = document.getElementById("hide-password");

// Fungsi untuk menampilkan password
showPasswordLink.addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah default action dari <a>
  
  // Ubah tipe input password menjadi teks
  passwordField.type = "text";
  confirmPasswordField.type = "text";

  // Ubah tampilan tombol
  showPasswordLink.style.display = "none";
  hidePasswordLink.style.display = "inline";
});

// Fungsi untuk menyembunyikan password
hidePasswordLink.addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah default action dari <a>

  // Ubah tipe input password kembali menjadi password
  passwordField.type = "password";
  confirmPasswordField.type = "password";

  // Ubah tampilan tombol
  hidePasswordLink.style.display = "none";
  showPasswordLink.style.display = "inline";
});