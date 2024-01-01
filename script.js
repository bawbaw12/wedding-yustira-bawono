document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
  const nama = urlParams.get("n") || "Anonymous";
  // console.log(nama);

  const nama_input = document.getElementById("nama");

  const hero_h4 = document.querySelector(".hero h4");
  const hero_h1 = document.querySelector(".hero h1");
  const hero_p = document.querySelector(".hero p");

  const home_h2 = document.querySelector(".home h2");
  const home_h3 = document.querySelector(".home h3");
  const home_p = document.querySelector(".home p");

  const info_h2 = document.querySelector(".info h2");
  const info_p_alamat = document.querySelector(".info .alamat");
  const info_p_description = document.querySelector(".info .description");

  const story_span = document.querySelector(".story span");
  const story_h2 = document.querySelector(".story h2");
  const story_p = document.querySelector(".story p");
  const story_timeline_panel_h3_1 = document.querySelector(
    ".story li:nth-child(1) h3"
  );
  const story_timeline_panel_span_1 = document.querySelector(
    ".story li:nth-child(1) span"
  );
  const story_timeline_panel_p_1 = document.querySelector(
    ".story li:nth-child(1) p"
  );
  const story_timeline_panel_h3_2 = document.querySelector(
    ".story li:nth-child(2) h3"
  );
  const story_timeline_panel_span_2 = document.querySelector(
    ".story li:nth-child(2) span"
  );
  const story_timeline_panel_p_2 = document.querySelector(
    ".story li:nth-child(2) p"
  );
  const story_timeline_panel_h3_3 = document.querySelector(
    ".story li:nth-child(3) h3"
  );
  const story_timeline_panel_span_3 = document.querySelector(
    ".story li:nth-child(3) span"
  );
  const story_timeline_panel_p_3 = document.querySelector(
    ".story li:nth-child(3) p"
  );

  var i;
  var txt;
  var speed = 100;
  var audio = new Audio("audio/tick.mp3");
  var audio2 = new Audio("audio/mixkit-single-key-type-2533.wav");
  var whoosh = new Audio("audio/whoosh.mp3");
  var mulai = document.getElementById("mulai");
  var interval;

  mulai.addEventListener("click", function () {
    nama_input.value = nama;

    i = 0;
    txt = "Kepada" + " " + pronoun + " " + nama;

    whoosh.currentTime = 0;
    whoosh.play();
    location.hash = "#hero";

    setTimeout(() => {
      interval = setInterval(sq1, speed);
      document.getElementById("mulai").style.visibility = "hidden";
    }, 1000);

    function sq1() {
      if (i < txt.length) {
        hero_h4.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt = "Bawono & Yustira";
        interval = setInterval(sq2, speed);
      }
      i++;
    }

    function sq2() {
      if (i < txt.length) {
        hero_h1.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt = "Akan melangsungkan resepsi pernikahan dalam:";
        interval = setInterval(sq3, speed);
      }

      i++;
    }

    function sq3() {
      if (i < txt.length) {
        hero_p.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        document.querySelector(".simply-countdown").style.visibility =
          "visible";
      }

      if (i == txt.length + 35) {
        whoosh.currentTime = 0;
        whoosh.play();
        location.hash = "#home";
      }

      if (i == txt.length + 45) {
        clearInterval(interval);
        i = -1;
        txt = "Acara Pernikahan";
        interval = setInterval(sq4, speed);
      }
      i++;
    }

    function sq4() {
      if (i < txt.length) {
        home_h2.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt =
          "Diselenggarakan pada tanggal 2 Maret 2024 di Maospati, Jawa Timur.";
        interval = setInterval(sq5, speed);
      }
      i++;
    }

    function sq5() {
      if (i < txt.length) {
        home_h3.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt =
          "Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang " +
          pronoun +
          " " +
          nama +
          ", untuk hadir pada acara pernikahan kami.";
        interval = setInterval(sq6, speed);
      }
      i++;
    }

    function sq6() {
      if (i < txt.length) {
        home_p.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        document.querySelector(".home .person1").classList.toggle("fade");
        document.querySelector(".home .heart").classList.toggle("fade");
        document.querySelector(".home .person2").classList.toggle("fade");
      }

      if (i == txt.length + 95) {
        whoosh.currentTime = 0;
        whoosh.play();
        location.hash = "#info";
      }

      if (i == txt.length + 105) {
        clearInterval(interval);
        i = -1;
        txt = "Informasi Acara";
        interval = setInterval(sq7, speed);
      }

      i++;
    }

    function sq7() {
      if (i < txt.length) {
        info_h2.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt =
          "Alamat: Jalan Ki Ageng Selo, RT.22/RW.6, Kraton, Maospati, Magetan, Jawa Timur";
        interval = setInterval(sq8, speed);
      }
      i++;
    }

    function sq8() {
      if (i < txt.length) {
        info_p_alamat.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        document.querySelector(".info a").style.visibility = "visible";
      }

      if (i == txt.length + 10) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt =
          "Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di tujuan namun tidak ada tanda-tanda sedang dilangsungkan pernikahan, boleh jadi Anda salah jadwal atau salah tempat.";
        interval = setInterval(sq9, speed);
      }

      i++;
    }

    function sq9() {
      if (i < txt.length) {
        info_p_description.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        document.querySelector(".info .rowcard").classList.toggle("fade");
      }

      if (i == txt.length + 95) {
        whoosh.currentTime = 0;
        whoosh.play();
        location.hash = "#story";
      }

      if (i == txt.length + 105) {
        clearInterval(interval);
        i = -1;
        txt = "BAGAIMANA CINTA KAMI BERSEMI";
        interval = setInterval(sq10, speed);
      }

      i++;
    }

    function sq10() {
      if (i < txt.length) {
        story_span.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt = "Cinta Kami";
        interval = setInterval(sq11, speed);
      }
      i++;
    }

    function sq11() {
      if (i < txt.length) {
        story_h2.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        clearInterval(interval);
        i = -1;
        txt =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem illo exercitationem error asperiores consequatur.";
        interval = setInterval(sq12, speed);
      }

      i++;
    }

    function sq12() {
      if (i < txt.length) {
        story_p.innerHTML += txt.charAt(i);
        audio.currentTime = 0;
        audio.play();
      }

      if (i == txt.length + 5) {
        audio2.currentTime = 0;
        audio2.play();
        document
          .querySelector(".story li:nth-child(1) .timeline-image")
          .classList.toggle("fade");
        document
          .querySelector(".story li:nth-child(1) .timeline-panel")
          .classList.toggle("fade");
      }

      if (i == txt.length + 65) {
        audio2.currentTime = 0;
        audio2.play();
        document
          .querySelector(".story li:nth-child(2) .timeline-image")
          .classList.toggle("fade");
        document
          .querySelector(".story li:nth-child(2) .timeline-panel")
          .classList.toggle("fade");
      }

      if (i == txt.length + 125) {
        audio2.currentTime = 0;
        audio2.play();
        document
          .querySelector(".story li:nth-child(3) .timeline-image")
          .classList.toggle("fade");
        document
          .querySelector(".story li:nth-child(3) .timeline-panel")
          .classList.toggle("fade");
      }

      if (i == txt.length + 185) {
        whoosh.currentTime = 0;
        whoosh.play();
        location.hash = "#gallery";
      }

      if (i == txt.length + 195) {
        clearInterval(interval);
        i = -1;
        txt = "Memori Kisah Kami";
        interval = setInterval(sq22, speed);
      }

      i++;
    }
  });
});
