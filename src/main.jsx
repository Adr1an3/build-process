import Plotly from "plotly.js-dist-min";
console.dir(Plotly);

const root = document.getElementById("root");

Plotly.newPlot(root, [{ x: [1, 2, 3, 4, 5], y: [1, 5, 4, 8, 16] }], {
  margin: { t: 0 },
});
