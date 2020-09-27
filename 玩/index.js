export class textRun {
  constructor() {
    this.BtnListener();
  }

  BtnListener() {
    document.querySelector("button").addEventListener("click", () => {
      this.textValue = document.querySelector("input").value;

      this.createCanvas();
    });
  }

  createCanvas() {
    let textRun = document.querySelector("#textRun");

    let ctx = textRun.getContext("2d");

    textRun.width = document.body.clientWidth / 2;
    textRun.height = document.body.clientHeight / 2;

    //ctx.beginPath();
    ctx.font = '30px "微软雅黑"';
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.textValue, textRun.width / 2, textRun.height / 2);

    // ctx.beginPath();
    // console.log(ctx.arc(0, 0, textRun.width / 2, 0, 2 * Math.PI));
    // console.log();
    let cx = 10;
    let cy = 10;
    let radius = 5;
    // 绘制第一个圆
    ctx.beginPath();
    ctx.fillStyle = "tomato";
    ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
    console.log(ctx.clip(1, 1));
    ctx.fill();
  }
}

// var image = new Image();
// image.src = textRun.toDataURL("image/png");
//image.crossOrigin = ‘Anonymous’;
// image.onload = function () {
//   ctx.drawImage(image, 0, 0, this.width, this.height);

//   console.log(ctx.getImageData(0, 0, this.width, this.height).data);
// };

//ctx.close();
