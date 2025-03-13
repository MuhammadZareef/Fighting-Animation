
let spider = document.getElementById("spider");
let kimDong = document.getElementById("spider-right");
let leftPosition = 50;
let rightPosition = 50;

window.addEventListener("keydown", function (event) {
    const key = event.keyCode;

    if (key == 68 && leftPosition < 1000) {
        leftPosition += 40;
        spider.style.left = `${leftPosition}px`;
        spider.src = "https://fightersgeneration.com/characters3/spidey-walk1.gif";
        setTimeout(function () {
            spider.src = "https://fightersgeneration.com/characters3/spidey-scratchin.gif";
        }, 300);
    } else if (key == 65 && leftPosition >= 20) {
        leftPosition -= 20;
        spider.style.left = `${leftPosition}px`;
        spider.src = "https://fightersgeneration.com/characters3/spidey-walk1.gif";
        setTimeout(function () {
            spider.src = "https://fightersgeneration.com/characters3/spidey-scratchin.gif";
        }, 300);
    } else if (key == 87) {
        spider.src = "https://fightersgeneration.com/characters3/spider-sting.gif";
        setTimeout(function () {
            spider.src = "https://fightersgeneration.com/characters3/spidey-scratchin.gif";
        }, 2500);
    }
});

window.addEventListener("keydown", function (event) {
    let key = event.keyCode;
    if (key == 37 && rightPosition < 1000) {
        rightPosition += 20;
        kimDong.style.right = `${rightPosition}px`;
        kimDong.src = "https://fightersgeneration.com/characters/dong-run.gif";
        setTimeout(function () {
            kimDong.src = "https://fightersgeneration.com/characters/snk-donghwan.gif";
        }, 300);
    } else if (key == 39 && rightPosition > 20) {
        rightPosition -= 20;
        kimDong.style.right = `${rightPosition}px`;
        kimDong.src = "https://fightersgeneration.com/characters/dong-run.gif";
        setTimeout(function () {
            kimDong.src = "https://fightersgeneration.com/characters/snk-donghwan.gif";
        }, 300);
    } else if (key == 83) {
        spider.src = "https://fightersgeneration.com/characters3/spidey-sweep.gif";
        setTimeout(function () {
            spider.src = "https://fightersgeneration.com/characters3/spidey-scratchin.gif";
        }, 3500);
    } else if (key == 38) {
        kimDong.src = "https://fightersgeneration.com/characters/donghwan-bacjk.gif";
        setTimeout(function () {
            kimDong.src = "https://fightersgeneration.com/characters/snk-donghwan.gif";
        }, 1100);
    } else if (key == 40) {
        kimDong.src = "https://fightersgeneration.com/characters/dong-superkick.gif";
        setTimeout(function () {
            kimDong.src = "https://fightersgeneration.com/characters/snk-donghwan.gif";
        }, 2200);
    }
});

let spiderTwo = document.getElementById("spider2-top");
let left = 120;
let goLeft = 1304;

let s = setInterval(function () {
    if (left < 1304) {
        left += 0.8;
        spiderTwo.style.left = `${left}px`;
    } else {
        if(goLeft > 120) {
            goLeft -= 0.8;
            spiderTwo.style.transform = "scaleX(-1)";
            spiderTwo.style.left = `${goLeft}px`;
        } else {
            left = 120;
            spiderTwo.style.transform = "scaleX(1)";
            goLeft = 1304;
        }
    }
});
