


window.addEventListener("scroll", muncul)

//animasi home
// fungsi untuk memberikan efek elemen muncul ketika scroll
function muncul(event) {
    // menangkap setiap tag dengan class elemen
    let elements = document.querySelectorAll(".myPopup");
    //perulangan untuk setiap tag dengan class elemen
    for (let i = 0; i < elements.length; i++) {
      //   mengambil ukuran tinggi layar
      let tinggiLayar = window.innerHeight;
      //menangkap ukuran elemen dan posisinya relatif terhadap viewport
      let jarakAtasElemen = elements[i].getBoundingClientRect().top;
      // menentukan ukuran scroll untuk memunculkan elemen
      let ukuranScroll = 150;
      // jika jarak atas elemen kurang dari tinggi layar dikurangi ukuran scroll maka tambahkan class tampil di setiap tag dengan class elemen
      if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
        elements[i].classList.add("show");
      }
      // jika tidak maka hapus class tampil
      else {
        elements[i].classList.remove("show");
      }
    }
  }

  //animasi popup saat onload
  
window.onload = function() {
  let pop = document.querySelectorAll(".mypopup2");
  for (let i2 = 0; i2 < pop.length; i2++) {
  pop[i2].classList.add("tampil");
  }
  let pip = document.querySelector(".li2");
  pip.classList.add("turun");
  
}

//home

//tombol navigasi
function about(){
  window.location.href = "About.html";
}
function ourp(){
  window.location.href = "ourprogram.html";
}
function jr(){
  window.location.href = "jrs.html";
}
function dest(){
  window.location.href = "dest.html";
}
function con(){
  window.location.href = "contact.html";
}
function home() {
  window.location.href = "Sjsermarangsolo.html";
  }
//destinasi
let search = document.querySelectorAll(".search");

for (let i3 = 0; i3 <search.length; i3++) {
console.log(i3)
search[i3].addEventListener("mouseenter", ganti);
function ganti(event) {
search[i3].classList.add("ganti");
}

search[i3].addEventListener("mouseleave", ganti2);
function ganti2(event) {
    search[i3].classList.remove("ganti");  

}
search[i3].addEventListener("click",link)
function link() {
  if( i3==0) {
    window.open("https://seedeka.com/listing/panti-asuhan-al-amanah/")
  }
  else if (i3==1) {
    window.open("https://mytrip123.com/museum-ronggowarsito/")
  }
  else if (i3==2) {
    window.open("https://www.idntimes.com/travel/destination/dimas-hutama/fakta-menarik-dari-masjid-menara-kudus-exp-c1c2")
  }
  else if (i3==3) {
    window.open("https://www.idntimes.com/travel/destination/pak/7-fakta-unik-masjid-terbesar-yang-jadi-kebanggaan-kota-semarang-c1c2")
  }
  else if (i3==4) {
    window.open("https://www.zenius.net/blog/universitas-diponegoro-undip")
  }
  else if (i3==5) {
    window.open("https://mytrip123.com/klenteng-sam-poo-kong/")
  }
  else if (i3==6) {
    window.open("https://sikidang.com/lawang-sewu/")
  }
  else if (i3==7) {
    window.open("https://www.liputan6.com/citizen6/read/2837533/museum-batik-danar-hadi-warisan-budaya-bangsa-yang-mendunia")
  }
  else if (i3==8) {
    window.open("https://www.nativeindonesia.com/grojogan-sewu/")
  }
  else if (i3==9) {
    window.open("https://www.instagram.com/shoffmujahid/?hl=id")
  }
}
}
//contact
let kontak = document.querySelectorAll(".email");
for (let i4 = 0; i4 <kontak.length; i4++) {
  kontak[i4].addEventListener("click", ko4ntak);
  function ko4ntak() {
    if (i4==0) {
      window.open("https://mail.google.com/mail/u/0/?tab=km#inbox?compose=GTvVlcRwPxSQsmDpZphNxnQLSWvfhrwzrCqCrBqnhkRgjsLCpgqFqJtHzDxKCVlJFKDPCZWGNCgbX")
    }
    else if (i4==1) {
      window.open("https://mail.google.com/mail/u/0/?tab=km#inbox?compose=GTvVlcRwPxSQsmDpZphNxnQLSWvfhrwzrCqCrBqnhkRgjsLCpgqFqJtHzDxKCVlJFKDPCZWGNCgbX")
    }
    else if (i4==2) {
      window.open("https://www.instagram.com/nfbsbogorofficial/")
    }
    else if (i4==3) {
      window.open("https://www.instagram.com/nfbsbogorsmait/")
    }
    else if (i4==4) {
      window.open("https://www.instagram.com/nfbsbogor.updates/")
    }
    else if (i4==5) {
      window.open("https://www.instagram.com/t.reveus/")
    }
    else if (i4==6) {
      window.open("https://www.youtube.com/@NurulFikriBoardingSchoolBogor")
    }
    else if (i4==7) {
      window.open("https://www.google.com/search?q=nfbs+bogor&oq=nfbs+bogor&aqs=chrome..69i57j69i60l3.3119j0j15&sourceid=chrome&ie=UTF-8")
    }
  }
  }
