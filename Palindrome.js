function palindromKontrol() {
    var yaziGiris = document.getElementById('yazi').value.replace(/[^a-zA-Z0-9+]/g, "").toLowerCase();
    var cevir = yaziGiris.split('').reverse().join('');
    var sonuc = document.getElementById('sonuc');
    var sonucMesaji;

    if (yaziGiris !== '') {
        if (yaziGiris !== cevir) {
            sonucMesaji = "Kelime palindrom degildir.";
            sonuc.innerHTML = sonucMesaji;
            sonuc.classList.add('basarisiz');
        } else {
            sonucMesaji = "Kelime palindromdur.";
            sonuc.innerHTML = sonucMesaji;
            if (sonuc.classList.contains('basarisiz')) {
                sonuc.classList.remove('basarisiz');
                sonuc.classList.add('basarili');
            }
        }
    } else {
        sonucMesaji = '';
        sonuc.innerHTML = sonucMesaji;
        sonuc.classList.add('basarisiz');
    }
}