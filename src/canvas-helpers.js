export const createCanvas = (
  title = "Canvas",
  width = "256",
  height = "256"
) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("canvas-wrapper");

  const h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode(title));

  wrapper.appendChild(h2);

  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  canvas.style.border = "1px dashed black";

  wrapper.appendChild(canvas);

  const canvases = document.getElementById("canvases");
  canvases.appendChild(wrapper);

  return canvas.getContext("2d");
};
