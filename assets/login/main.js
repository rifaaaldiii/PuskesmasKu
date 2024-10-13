const passwordInput = document.getElementById("password");
    const eyeIcon = document.querySelector(".la-eye");
    const eyeSlashIcon = document.querySelector(".la-eye-slash");

    // Fungsi untuk toggle antara show/hide password
    eyeIcon.addEventListener("click", function() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.style.display = "none";  // Sembunyikan ikon 'eye'
        eyeSlashIcon.style.display = "inline";  // Tampilkan ikon 'eye-slash'
      }
    });

    eyeSlashIcon.addEventListener("click", function() {
      if (passwordInput.type === "text") {
        passwordInput.type = "password";
        eyeSlashIcon.style.display = "none";  // Sembunyikan ikon 'eye-slash'
        eyeIcon.style.display = "inline";  // Tampilkan ikon 'eye'
      }
    });

    // Secara default, sembunyikan ikon 'eye-slash'
    eyeSlashIcon.style.display = "none";
