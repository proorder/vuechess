export default function(event) {
  let { x: startX, y: startY } = { x: event.clientX, y: event.clientY };
  const el = event.target;
  if (el.classList.contains("hands")) {
    const mouseMove = e => {
      let endX = el.offsetLeft + (e.clientX - startX);
      let endY = el.offsetTop + (e.clientY - startY);
      if (endX > 0) {
        if (endX + el.offsetWidth < this.$refs.previewImage.offsetWidth) {
          el.style.left = endX + "px";
        } else {
          el.style.left =
            this.$refs.previewImage.offsetWidth - el.offsetWidth + "px";
        }
      } else {
        el.style.left = "0px";
      }
      if (endY > 0) {
        if (endY + el.offsetHeight < this.$refs.previewImage.offsetHeight) {
          el.style.top = endY + "px";
        } else {
          el.style.top =
            this.$refs.previewImage.offsetHeight - el.offsetHeight + "px";
        }
      } else {
        el.style.top = "0px";
      }
      startX = e.clientX;
      startY = e.clientY;
    };
    const mouseUp = () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  } else if (el.classList.contains("first-hand")) {
    const hands = document.querySelector(".hands");
    const mouseMove = e => {
      let endY = hands.offsetTop + (e.clientY - startY);
      if (endY > 0) {
        if (hands.offsetHeight - (e.clientY - startY) > 100) {
          if (hands.offsetLeft + (e.clientX - startX > 0)) {
            hands.style.top = endY + "px";
            hands.style.height =
              hands.offsetHeight - (e.clientY - startY) + "px";
            hands.style.left =
              hands.offsetLeft + ((e.clientY - startY) / 100) * 85 + "px";
            hands.style.width =
              ((hands.offsetHeight - (e.clientY - startY)) / 100) * 85 + "px";
          }
        }
      } else {
        hands.style.top = "0px";
      }
      startX = e.clientX;
      startY = e.clientY;
    };
    const mouseUp = () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  } else {
    const hands = document.querySelector(".hands");
    const mouseMove = e => {
      let endY = hands.offsetHeight + (e.clientY - startY);
      if (endY < this.$refs.previewImage.offsetHeight - hands.offsetTop) {
        if (endY > 100) {
          if (
            hands.offsetLeft +
              ((e.clientY - startY) / 100) * 85 +
              (endY / 100) * 85 <
            this.$refs.previewImage.offsetWidth
          ) {
            hands.style.height = endY + "px";
            hands.style.width = (endY / 100) * 85 + "px";
          }
        }
      } else {
        hands.style.height =
          this.$refs.previewImage.offsetHeight - hands.offsetTop + "px";
      }
      startX = e.clientX;
      startY = e.clientY;
    };
    let mouseUp = () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  }
  return false;
}
