///////////////////////////////////////////
//アコーディオン
//////////////////////////////////////////
$(".faq-list dd").hide();
$(".faq-list dt").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).next(".faq-list dd").slideToggle(300);
});

////////////////////////////////////////////////////////////////////////////////////////
// GSAP アニメーション
///////////////////////////////////////////////////////////////////////////////////////
// GSAPフェードイン
const textElements = document.querySelectorAll(".fadeIn");
if (textElements.length > 0) {
  textElements.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element, // 各要素をトリガーに
        start: "top 60%",
        once: true,
      },
    });
  });
}
