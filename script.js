const letters = document.querySelectorAll("span");
const body = document.querySelector("body");
let zCounter = -1;

// body:nth
letters.forEach(singleSpan => {
  let counter = 0;
  let spanPosX = singleSpan.offsetLeft;
  let spanPosY = singleSpan.offsetTop;

  singleSpan.addEventListener("mouseover", function() {
    console.log(spanPosX);
    let copies = singleSpan.cloneNode(true);
    copies.classList.add("copySpan");
    counter += 3;
    copies.style.left = spanPosX - counter + "px";
    copies.style.top = spanPosY - counter + "px";
    copies.style.zIndex = zCounter--;
    console.log(copies.offsetLeft);
    // if (copies.offsetLeft ) {
    //   console.log("copies pos X is: " + copies.offsetLeft);
    //   copies.offsetLeft = counter++;
    // }
    // ef að lettersi = counterxi

    body.appendChild(copies);
  });
});

// set the previous span as the closest one with the same content;
