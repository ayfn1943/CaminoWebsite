// hearder選單按鈕
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


// 下滑填充背景色 
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  window.addEventListener('scroll', function () {
    var header = document.getElementById('myTopnav');
    var bgimg = document.querySelector('.bgimg');
    var bgimgPosition = bgimg.getBoundingClientRect();

    if (bgimgPosition.bottom <= 0) {
      header.style.backgroundColor = '#FCECCC'; // 當離開 .bgimg 時改變背景顏色
    } else {
      header.style.backgroundColor = 'transparent'; // 恢復初始背景顏色
    }
  });

