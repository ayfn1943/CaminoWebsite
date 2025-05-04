document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");
  const panels = document.querySelectorAll(".panel");
  const mapAreas = document.querySelectorAll("area[data-target]");
  const toggleSwitch = document.querySelector(".switch input");
  const popup = document.getElementById("myPopup");

  let multiOpenMode = false; // 預設為關閉

  // 監聽開關狀態變化
  toggleSwitch.addEventListener("change", function () {
    multiOpenMode = this.checked;

    if (multiOpenMode) {
      popup.style.display = "block"; // 顯示提示文字
      map.style.opacity = "0.7"
    } else {
      popup.style.display = "none"; // 隱藏提示文字
      map.style.opacity = "1"

      // **當開關關閉時，重置所有手風琴**
      panels.forEach((panel) => {
        panel.style.maxHeight = "0px"; // 設為 0px 讓動畫正常生效
        panel.classList.remove("active"); // 移除 active class
      });

      accordions.forEach((accordion) => {
        accordion.classList.remove("active"); // 確保按鈕的 active 狀態也被移除
      });

      // **強制瀏覽器重新渲染 (Reflow)**
      document.body.offsetHeight; // 讓瀏覽器重新計算樣式
    }
  });

  // 切換手風琴狀態的函數
  function toggleAccordion(targetPanel, clickedAccordion) {
    if (!multiOpenMode) {
      // 單開模式：關閉所有其他面板
      panels.forEach((panel) => {
        if (panel !== targetPanel) {
          panel.style.maxHeight = "0px"; // 確保能關閉
          panel.classList.remove("active");
        }
      });

      accordions.forEach((accordion) => {
        if (accordion !== clickedAccordion) {
          accordion.classList.remove("active");
        }
      });
    }

    // 切換當前面板
    if (targetPanel.style.maxHeight !== "0px" && targetPanel.style.maxHeight !== "") {
      targetPanel.style.maxHeight = "0px";
      targetPanel.classList.remove("active");
      clickedAccordion.classList.remove("active");
    } else {
      targetPanel.style.maxHeight = targetPanel.scrollHeight + "px";
      targetPanel.classList.add("active");
      clickedAccordion.classList.add("active");
    }

    // 自動滾動避免 header 擋住
    setTimeout(() => {
      const headerHeight = 55;
      const accordionOffset = clickedAccordion.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: accordionOffset - headerHeight - 10, behavior: "smooth" });
    }, 300);
  }

  // 手風琴點擊事件
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);
      toggleAccordion(targetPanel, this);
    });
  });

  // 地圖區域點擊事件
  mapAreas.forEach((area) => {
    area.addEventListener("click", function (event) {
      if (multiOpenMode) {
        event.preventDefault(); // 多開模式時，阻止地圖點擊
        return;
      }

      const targetId = this.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);

      toggleAccordion(targetPanel, document.querySelector(`.accordion[data-target="${targetId}"]`));
    });
  });

  // 預設隱藏所有面板
  panels.forEach((panel) => {
    panel.style.maxHeight = "0px";
  });

  // 預設隱藏提示文字
  popup.style.display = "none";
});
