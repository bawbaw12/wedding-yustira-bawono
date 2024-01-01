// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcpbdXFPuDaT1VCH2y6_ItWuHnSRPpUow",
  authDomain: "undangan-dfc4d.firebaseapp.com",
  databaseURL:
    "https://undangan-dfc4d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "undangan-dfc4d",
  storageBucket: "undangan-dfc4d.appspot.com",
  messagingSenderId: "668539498819",
  appId: "1:668539498819:web:e3d940a1b7dae0ad743ff6",
  measurementId: "G-J27DYCRS01",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const namadb = document.getElementById("nama");
const jumlahdb = document.getElementById("jumlah");
const statusdb = document.getElementById("status");
const ucapandb = document.getElementById("ucapan");
const ucapancard = document.getElementById("ucapan-card");
let st = "";

function createData() {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

  const data = {
    tanggal: date,
    nama: namadb.value,
    jumlah: jumlahdb.value,
    status: statusdb.value,
    ucapan: ucapandb.value,
  };
  db.ref("undangan").push(data);
  statusdb.value = '';
  ucapandb.value = '';
}

db.ref("undangan").on("value", readData);
function readData(snapshoot) {
  let sendhtml = "";

  snapshoot.forEach((data) => {
    st = data.val().status;

    if (st == "hadir") {
      sendhtml += `
        <div class="card  mt-3">
        <div class="card-header">
        ${data.val().nama} <span><i class="bi bi-check-circle"></i></span>
        </div>
        <div class="card-body">
        <p class="card-text">
        ${data.val().ucapan}
        </p>
        </div>
        </div>
        `;
    } else {
      sendhtml += `
        <div class="card  mt-3">
        <div class="card-header">
        ${data.val().nama} <span><i class="bi bi-x-circle"></i></span>
        </div>
        <div class="card-body">
        <p class="card-text">
        ${data.val().ucapan}
        </p>
        </div>
        </div>
        `;
    }
  });

  ucapancard.innerHTML = sendhtml;
}
