// 页面准备好之后开始执行的代码块
// 图片 视频 音频 不会等到这些加载完成之后在执行 ==>  相反的  load
document.addEventListener("DOMContentLoaded", () => {
  var imgList = document.querySelector(".image-list-move");
  let index = 0;
  const movec =  document.querySelector(".image-list-move");
  // //左箭头
  document.querySelector(".image-left").addEventListener("click", () => {
    if (index - 1 < 0) return;
    index--;
    moveImageContent(movec, index);
  });
  //左箭头
  document.querySelector(".image-right").addEventListener("click", () => {
    if (index + 1 > 2) return;
    index++;
    moveImageContent(movec, index);
  });
});

function moveImageContent(parmas, index) {
  parmas.style.left =
  index * -350 + "px";
}
