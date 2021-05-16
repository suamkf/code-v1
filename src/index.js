const { getColor } = require('./apiMock');

const { Green, Blue, Red, White, Black } = require('./classes');

async function getColors(
  green,
  blue,
  red,
  white,
  black,
  order,
  sinc,
  callback
) {
  const colors = [];
  if (green === 'true') {
    green = new Green();
    colors[order.indexOf(green.name)] = await getColor(green.name);
  }
  if (blue === 'true') {
    blue = new Blue();
    colors[order.indexOf(blue.name)] = await getColor(blue.name);
  }
  if (red === 'true') {
    red = new Red();
    colors[order.indexOf(red.name)] = await getColor(red.name);
  }
  if (white === 'true') {
    white = new White();
    colors[order.indexOf(white.name)] = await getColor(white.name);
  }
  if (black === 'true') {
    black = new Black();
    colors[order.indexOf(black.name)] = await getColor(black.name);
  }
  callback(colors, sinc);
  return colors;
}

function colors() {
  console.log('DEBUG: ', process.argv);
  let green = process.argv[2];
  let blue = process.argv[3];
  let red = process.argv[4];
  let white = process.argv[5];
  let black = process.argv[6];
  const colorOrder = process.argv[7];
  const sinc = process.argv[8];

  getColors(
    green,
    blue,
    red,
    white,
    black,
    JSON.parse(colorOrder),
    sinc,
    async function (colors, sinc) {
      if (sinc === 'async') {
        colors = await Promise.all(colors);
        var hexColors = [];
        colors.forEach((color) => (color ? hexColors.push(color.RGB) : null));
        console.log(hexColors);
      } else {
        colors.forEach(async (color) => console.log(await color.RGB));
      }
    }
  );
}

try {
  colors();
} catch (error) {}

/*
Params:
1 - green : true/false (show or not)
2 - blue : true/false (show or not)
3 - red : true/false (show or not)
4 - white : true/false (show or not)
5 - black : true/false (show or not)
6 - array with the order to print color in string split by "," ["red", "blue", "green", "white", "black"]
7 - async/sync : if you want to show all under one promise async or one by one sync

Example to run application:
node ~/code-challenge/src/index.js true true true true true '["red", "blue", "green", "white", "black"]' sync
out put:
{ R: 255, G: 0, B: 0 }
{ R: 0, G: 0, B: 255 }
{ R: 0, G: 255, B: 0 }
{ R: 255, G: 255, B: 255 }
{ R: 0, G: 0, B: 0 }

Example to run application:
node ~/code-challenge/src/index.js true true true true true '["red", "blue", "green", "white", "black"]' async
out put:
[
  { R: 255, G: 0, B: 0 },
  { R: 0, G: 0, B: 255 },
  { R: 0, G: 255, B: 0 },
  { R: 255, G: 255, B: 255 },
  { R: 0, G: 0, B: 0 }
]
*/
