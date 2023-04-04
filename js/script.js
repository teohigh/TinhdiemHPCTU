// Số hàng ban đầu
var soHang = 3;

// Thêm hàng
function CreateNewRow() {
    soHang++;
    $("div").removeClass("last");
    $( "<div class='row-hp last columns is-mobile'><div class='column is-7'><label class='label'>Điểm HP:</label><input placeholder='Nhập điểm HP:' class='input diemHP is-primary' type='number' name='' id='diemHP"+soHang.toString()+"' min='0' max='10'></div><div class='column is-4'><label class='label'>Số tín chỉ HP:</label><input placeholder='Nhập số TC:' class='input soTC is-primary' type='number' name='' id='soTC"+soHang.toString()+"' min='0' max='4'></div></div>" ).insertBefore( $( ".block" ) );
    soHPs = document.querySelectorAll(".row-hp").length;
}

// Xoá hàng
function RemoveLastRow() {
    $("div").remove(".row-hp.last");
    $("div.row-hp.columns:last").addClass("last");
    soHPs = document.querySelectorAll(".row-hp").length;
    soHang--;
}

// Tính điểm
function Calculate() {
    var diemHPAll = document.querySelectorAll('[id^=diemHP]');
    var soTCAll = document.querySelectorAll('[id^=soTC]');

    var tongDiem=0;
    var tongSoTC = 0;
    
    for(var i=0;i<soHang;i++){
    let diemHP =diemHPAll[i].value;
    let soTC = soTCAll[i].value;
    
    if(!diemHP || diemHP>10) return "Điểm HP không hợp lệ.";
    if(!soTC || soTC< 0 || soTC > 4) return "Số tín chỉ không hợp lệ.";
    if(diemHP>=4) {
        diemHP=CheckDiem(diemHP);
        tongDiem+=diemHP*soTC;
        tongSoTC+= +soTC;
    } else {

        tongSoTC+= +soTC;
    }
        
            // console.log(tongDiem);
            // console.log(tongSoTC);
    }
    return "Điểm trung bình học kì: " + Number.parseFloat(tongDiem/tongSoTC).toFixed(2);
}

function ShowCalculate() {
    document.getElementById("modal-content").innerHTML =  Calculate();
}

// Chuyển từ hệ 10 sang hệ 4
function CheckDiem(diemHP) {
    if(diemHP>10.0) return 0;
    else if(diemHP>=9) return 4;
    else if(diemHP>=8) return 3.5;
    else if(diemHP>=7) return 3;
    else if(diemHP>=6.5) return 2.5;
    else if(diemHP>=5.5) return 2;
    else if(diemHP>=5) return 1.5;
    else if(diemHP>=4) return 1;
    else return 0;
}

// Modal
const calcBtn = document.querySelector('#calcBtn');
const closeModalBtn1 = document.querySelector('#closeModalBtn1');
const closeModalBtn2 = document.querySelector('#closeModalBtn2');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

calcBtn.addEventListener('click', () => {
    modal.classList.add('is-active');
})
closeModalBtn1.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
closeModalBtn2.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
})

// Timer
var countDownDate = new Date("Feb 10, 2024 00:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("day-count").innerHTML = days ;
  document.getElementById("hour-count").innerHTML = hours ;
  document.getElementById("minute-count").innerHTML = minutes ;
  document.getElementById("second-count").innerHTML = seconds ;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HẸN GẶP LẠI NĂM SAU NHÉ";
  }
}, 1000);
let mybutton = document.getElementById("backToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
