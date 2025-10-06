var canvas;
let colors = ['#F69220','#F01824','#F21587','#FFBBD8','#c1ea76','#FDF00E','#72D2F8']  
  
let cells = [];
let size = 10;
let radscale =0.75;
let cols, rows, M, N;
let a, b;
let primes = [2,3,5,7,11,13,17,19,23,29,31,37]

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(width / size);
  rows = floor(height / size);
  M = floor(cols / 2);
  N = floor(rows / 2);
  sieve();
  redraw();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.id('matrix');
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  cols = floor(width / size);
  rows = floor(height / size);
  if (cols % 2 === 0) cols += 1;
  if (rows % 2 === 0) rows += 1;
  M = floor(cols / 2);
  N = floor(rows / 2);

  for (let i = 0; i < cols; i++) {
    cells[i] = [];
    for (let j = 0; j < rows; j++) {
      cells[i][j] = true;
    }
  }
  sieve()
}

function draw() {
  noLoop();

  let rects = [];
  let headerRect = rectFromElement('#header');
  if (headerRect) rects.push(headerRect);
  let footerRect = rectFromElement('#footer');
  if (footerRect) rects.push(footerRect);
 let containerRect = rectFromElement('#container');
  if (footerRect) rects.push(containerRect);

  background('#F0FDFD');
  noStroke();
  translate((width - size) / 2, (height - size) / 2);

  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      let x = i - M;
      let y = j - N;
      let visible = cells[i][j];

      for (let div of rects) {
        let [rx, ry, rw, rh] = div;
        if (x >= rx && x <= rx + rw && y >= ry && y <= ry + rh) {
          visible = false;
          break;
        }
      }

      fill(visible ? random(colors) : '#F0FDFD');
      circle((x+1)*size, (y+1)*size, radscale*size);
    }
  }
}


function gcd(x, y) {
  x = abs(x);
  y = abs(y);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

function sieve() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i - M;
      let y = j - N;
      if (x===0 && y===0){
        cells[i][j]=false;
        continue;
      }
      
      let g = gcd(x, y);

      // Keep true only if none of the primes divide gcd(x,y)
      let keep = true;
      for (let p = 0; p < primes.length; p++) {
        if (g % primes[p] === 0 && g !== 0) {
          keep = false;
          break;
        }
      }
      cells[i][j] = keep;
    }
  }
}

function rectFromElement(selector) {
  let el = document.querySelector(selector);
  if (!el) return null;

  let rect = el.getBoundingClientRect();

  let x0 = floor(rect.left / size) - M;
  let y0 = floor(rect.top / size) - N;
  let w = ceil(rect.width / size);
  let h = ceil(rect.height / size);

  return [x0, y0, w, h];
}
