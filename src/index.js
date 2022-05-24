const hiragana = ["あ", "い", "う", "え", "お"];
const bango = ["1", "2", "3", "4", "5"];

document.getElementById("moto" + bango[0]).innerText = hiragana[0];
document.getElementById("moto" + bango[1]).innerText = hiragana[1];
document.getElementById("moto" + bango[2]).innerText = hiragana[2];
document.getElementById("moto" + bango[3]).innerText = hiragana[3];
document.getElementById("moto" + bango[4]).innerText = hiragana[4];

const saki = document.getElementById("saki");
////////////////////////////////////////////////////////////////
function kanaFactry1() {
  const kana = moto1;
  const moji = hiragana[1 - 1];
  // ここまで数字を変更
  function idou() {
    kana.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num < hiragana.length + 3) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", "newElement");
        saki.appendChild(newElement);
        kana.innerText = "";
        newElement.innerText = moji;
      }
    });
  }
  idou();

  function modosu() {
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
    });
  }
  modosu();
}
// 関数ファクトリーの数字を変更
kanaFactry1();
/////////////////////////////////////////////////////////////
function kanaFactry2() {
  const kana = moto2;
  const moji = hiragana[2 - 1];

  function idou() {
    kana.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num < hiragana.length + 3) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", "newElement");
        saki.appendChild(newElement);
        kana.innerText = "";
        newElement.innerText = moji;
      }
    });
  }
  idou();

  function modosu() {
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
    });
  }
  modosu();
}
kanaFactry2();

////////////////////////////////////////////////
function kanaFactry3() {
  const kana = moto3;
  const moji = hiragana[3 - 1];

  function idou() {
    kana.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num < hiragana.length + 3) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", "newElement");
        saki.appendChild(newElement);
        kana.innerText = "";
        newElement.innerText = moji;
      }
    });
  }
  idou();

  function modosu() {
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
    });
  }
  modosu();
}
kanaFactry3();
////////////////////////////////////////////////////////////////
function kanaFactry4() {
  const kana = moto4;
  const moji = hiragana[4 - 1];
  // ここまで数字を変更
  function idou() {
    kana.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num < hiragana.length + 3) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", "newElement");
        saki.appendChild(newElement);
        kana.innerText = "";
        newElement.innerText = moji;
      }
    });
  }
  idou();

  function modosu() {
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
    });
  }
  modosu();
}
// 関数ファクトリーの数字を変更
kanaFactry4();
/////////////////////////////////////////////////////////////
function kanaFactry5() {
  const kana = moto5;
  const moji = hiragana[5 - 1];
  // ここまで数字を変更
  function idou() {
    kana.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num < hiragana.length + 3) {
        const newElement = document.createElement("div");
        newElement.setAttribute("id", "newElement");
        saki.appendChild(newElement);
        kana.innerText = "";
        newElement.innerText = moji;
      }
    });
  }
  idou();

  function modosu() {
    saki.addEventListener("click", () => {
      const num = saki.childElementCount;
      if (num >= 1) {
        saki.lastChild.remove();
      }
      kana.innerText = moji;
    });
  }
  modosu();
}
// 関数ファクトリーの数字を変更
kanaFactry5();
/////////////////////////////////////////////////////////////
