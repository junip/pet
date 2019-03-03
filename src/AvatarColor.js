function AvatarColor() {
  const colorArray = [
    "#70d9e7",
    "#bedd9a",
    "#f381a7",
    "70c4bc",
    "#6573c3",
    "#c786d3",
    "#f381a7",
    "#70d9e7",
    "#f3f6cf",
    "#c1e5e2",
    "#d0d4ed"
  ];
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

  return randomColor;
}

let color = AvatarColor();

export default color;
