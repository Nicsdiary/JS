const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34",
    "#cbc78e",
    "#a8de87",
    "#dfa7b0",
    "#90eaf3",
    "#8e8996",
    "#d9a5aa",
    "#c98a80",
    "#a095e5",
    "#bb88ff",
    "#a0b2f5",
    "#80ba89",
    "#8dcbb3",
    "#cf8ff3",
    "#e4bdad",
    "#9cbf85"

  ];
  
  const body = document.body;
  const btn = document.querySelector("button");
  
  function clickBtn() {
    const nowColor1 = colors[Math.floor(Math.random() * colors.length)];
    const nowColor2 = colors[Math.floor(Math.random() * colors.length)];
    const totalColor = `linear-gradient(to right, ${nowColor1},${nowColor2})`;
    if (nowColor1 == nowColor2) {
      return handleClick();
    }
    console.log(totalColor);
    body.style.background = totalColor;
  }
  
  window.addEventListener("load", clickBtn);
