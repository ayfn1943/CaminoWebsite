// 圖片1200xp
function scaleMapAreas() {
  var img = document.getElementById('map');
  var originalWidth = 1200; // 原始圖片寬度
  var scaleFactor = img.clientWidth / originalWidth;

  var areas = document.querySelectorAll('map[name="caminoMap"] area');
  areas.forEach(function (area) {
    var coords = area.dataset.coords.split(',').map(function (coord) {
      return Math.round(coord * scaleFactor);
    });
    area.coords = coords.join(',');
  });
}

window.addEventListener('load', scaleMapAreas);
window.addEventListener('resize', scaleMapAreas);




// 查看座標
// document.getElementById("map").addEventListener("click", function(event) {
// let img = event.target;
// let rect = img.getBoundingClientRect(); // 取得圖片的位置
// let scaleX = img.naturalWidth / img.width; // 縮放比例
// let scaleY = img.naturalHeight / img.height; // 縮放比例

// let x = (event.clientX - rect.left) * scaleX;
// let y = (event.clientY - rect.top) * scaleY;

// console.log("點擊座標: X=" + Math.round(x) + ", Y=" + Math.round(y));
// });

