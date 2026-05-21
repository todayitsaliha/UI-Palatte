import { P as reactExports, H as jsxRuntimeExports } from "./server-DOVa1EPN.js";
const { min: min$4, max: max$4 } = Math;
const limit = (x, low = 0, high = 1) => {
  return min$4(max$4(low, x), high);
};
const clip_rgb = (rgb2) => {
  rgb2._clipped = false;
  rgb2._unclipped = rgb2.slice(0);
  for (let i = 0; i <= 3; i++) {
    if (i < 3) {
      if (rgb2[i] < 0 || rgb2[i] > 255) rgb2._clipped = true;
      rgb2[i] = limit(rgb2[i], 0, 255);
    } else if (i === 3) {
      rgb2[i] = limit(rgb2[i], 0, 1);
    }
  }
  return rgb2;
};
const classToType = {};
for (let name of [
  "Boolean",
  "Number",
  "String",
  "Function",
  "Array",
  "Date",
  "RegExp",
  "Undefined",
  "Null"
]) {
  classToType[`[object ${name}]`] = name.toLowerCase();
}
function type(obj) {
  return classToType[Object.prototype.toString.call(obj)] || "object";
}
const unpack = (args, keyOrder = null) => {
  if (args.length >= 3) return Array.prototype.slice.call(args);
  if (type(args[0]) == "object" && keyOrder) {
    return keyOrder.split("").filter((k) => args[0][k] !== void 0).map((k) => args[0][k]);
  }
  return args[0].slice(0);
};
const last = (args) => {
  if (args.length < 2) return null;
  const l = args.length - 1;
  if (type(args[l]) == "string") return args[l].toLowerCase();
  return null;
};
const { PI: PI$2, min: min$3, max: max$3 } = Math;
const rnd2 = (a) => Math.round(a * 100) / 100;
const rnd3 = (a) => Math.round(a * 100) / 100;
const TWOPI = PI$2 * 2;
const PITHIRD = PI$2 / 3;
const DEG2RAD = PI$2 / 180;
const RAD2DEG = 180 / PI$2;
function reverse3(arr) {
  return [...arr.slice(0, 3).reverse(), ...arr.slice(3)];
}
const input = {
  format: {},
  autodetect: []
};
class Color {
  constructor(...args) {
    const me = this;
    if (type(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
      return args[0];
    }
    let mode = last(args);
    let autodetect = false;
    if (!mode) {
      autodetect = true;
      if (!input.sorted) {
        input.autodetect = input.autodetect.sort((a, b) => b.p - a.p);
        input.sorted = true;
      }
      for (let chk of input.autodetect) {
        mode = chk.test(...args);
        if (mode) break;
      }
    }
    if (input.format[mode]) {
      const rgb2 = input.format[mode].apply(
        null,
        autodetect ? args : args.slice(0, -1)
      );
      me._rgb = clip_rgb(rgb2);
    } else {
      throw new Error("unknown format: " + args);
    }
    if (me._rgb.length === 3) me._rgb.push(1);
  }
  toString() {
    if (type(this.hex) == "function") return this.hex();
    return `[${this._rgb.join(",")}]`;
  }
}
const version = "3.2.0";
const chroma = (...args) => {
  return new Color(...args);
};
chroma.version = version;
const w3cx11 = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  laserlemon: "#ffff54",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrod: "#fafad2",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  maroon2: "#7f0000",
  maroon3: "#b03060",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  purple2: "#7f007f",
  purple3: "#a020f0",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
const hex2rgb = (hex2) => {
  if (hex2.match(RE_HEX)) {
    if (hex2.length === 4 || hex2.length === 7) {
      hex2 = hex2.substr(1);
    }
    if (hex2.length === 3) {
      hex2 = hex2.split("");
      hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2];
    }
    const u = parseInt(hex2, 16);
    const r = u >> 16;
    const g = u >> 8 & 255;
    const b = u & 255;
    return [r, g, b, 1];
  }
  if (hex2.match(RE_HEXA)) {
    if (hex2.length === 5 || hex2.length === 9) {
      hex2 = hex2.substr(1);
    }
    if (hex2.length === 4) {
      hex2 = hex2.split("");
      hex2 = hex2[0] + hex2[0] + hex2[1] + hex2[1] + hex2[2] + hex2[2] + hex2[3] + hex2[3];
    }
    const u = parseInt(hex2, 16);
    const r = u >> 24 & 255;
    const g = u >> 16 & 255;
    const b = u >> 8 & 255;
    const a = Math.round((u & 255) / 255 * 100) / 100;
    return [r, g, b, a];
  }
  throw new Error(`unknown hex color: ${hex2}`);
};
const { round: round$5 } = Math;
const rgb2hex = (...args) => {
  let [r, g, b, a] = unpack(args, "rgba");
  let mode = last(args) || "auto";
  if (a === void 0) a = 1;
  if (mode === "auto") {
    mode = a < 1 ? "rgba" : "rgb";
  }
  r = round$5(r);
  g = round$5(g);
  b = round$5(b);
  const u = r << 16 | g << 8 | b;
  let str = "000000" + u.toString(16);
  str = str.substr(str.length - 6);
  let hxa = "0" + round$5(a * 255).toString(16);
  hxa = hxa.substr(hxa.length - 2);
  switch (mode.toLowerCase()) {
    case "rgba":
      return `#${str}${hxa}`;
    case "argb":
      return `#${hxa}${str}`;
    default:
      return `#${str}`;
  }
};
Color.prototype.name = function() {
  const hex2 = rgb2hex(this._rgb, "rgb");
  for (let n of Object.keys(w3cx11)) {
    if (w3cx11[n] === hex2) return n.toLowerCase();
  }
  return hex2;
};
input.format.named = (name) => {
  name = name.toLowerCase();
  if (w3cx11[name]) return hex2rgb(w3cx11[name]);
  throw new Error("unknown color name: " + name);
};
input.autodetect.push({
  p: 5,
  test: (h, ...rest) => {
    if (!rest.length && type(h) === "string" && w3cx11[h.toLowerCase()]) {
      return "named";
    }
  }
});
Color.prototype.alpha = function(a, mutate = false) {
  if (a !== void 0 && type(a) === "number") {
    if (mutate) {
      this._rgb[3] = a;
      return this;
    }
    return new Color([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
  }
  return this._rgb[3];
};
Color.prototype.clipped = function() {
  return this._rgb._clipped || false;
};
const labConstants = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  labWhitePoint: "d65",
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  kE: 216 / 24389,
  kKE: 8,
  kK: 24389 / 27,
  RefWhiteRGB: {
    // sRGB
    X: 0.95047,
    Y: 1,
    Z: 1.08883
  },
  MtxRGB2XYZ: {
    m00: 0.4124564390896922,
    m01: 0.21267285140562253,
    m02: 0.0193338955823293,
    m10: 0.357576077643909,
    m11: 0.715152155287818,
    m12: 0.11919202588130297,
    m20: 0.18043748326639894,
    m21: 0.07217499330655958,
    m22: 0.9503040785363679
  },
  MtxXYZ2RGB: {
    m00: 3.2404541621141045,
    m01: -0.9692660305051868,
    m02: 0.055643430959114726,
    m10: -1.5371385127977166,
    m11: 1.8760108454466942,
    m12: -0.2040259135167538,
    m20: -0.498531409556016,
    m21: 0.041556017530349834,
    m22: 1.0572251882231791
  },
  // used in rgb2xyz
  As: 0.9414285350000001,
  Bs: 1.040417467,
  Cs: 1.089532651,
  MtxAdaptMa: {
    m00: 0.8951,
    m01: -0.7502,
    m02: 0.0389,
    m10: 0.2664,
    m11: 1.7135,
    m12: -0.0685,
    m20: -0.1614,
    m21: 0.0367,
    m22: 1.0296
  },
  MtxAdaptMaI: {
    m00: 0.9869929054667123,
    m01: 0.43230526972339456,
    m02: -0.008528664575177328,
    m10: -0.14705425642099013,
    m11: 0.5183602715367776,
    m12: 0.04004282165408487,
    m20: 0.15996265166373125,
    m21: 0.0492912282128556,
    m22: 0.9684866957875502
  }
};
const ILLUMINANTS = /* @__PURE__ */ new Map([
  // ASTM E308-01
  ["a", [1.0985, 0.35585]],
  // Wyszecki & Stiles, p. 769
  ["b", [1.0985, 0.35585]],
  // C ASTM E308-01
  ["c", [0.98074, 1.18232]],
  // D50 (ASTM E308-01)
  ["d50", [0.96422, 0.82521]],
  // D55 (ASTM E308-01)
  ["d55", [0.95682, 0.92149]],
  // D65 (ASTM E308-01)
  ["d65", [0.95047, 1.08883]],
  // E (ASTM E308-01)
  ["e", [1, 1, 1]],
  // F2 (ASTM E308-01)
  ["f2", [0.99186, 0.67393]],
  // F7 (ASTM E308-01)
  ["f7", [0.95041, 1.08747]],
  // F11 (ASTM E308-01)
  ["f11", [1.00962, 0.6435]],
  ["icc", [0.96422, 0.82521]]
]);
function setLabWhitePoint(name) {
  const ill = ILLUMINANTS.get(String(name).toLowerCase());
  if (!ill) {
    throw new Error("unknown Lab illuminant " + name);
  }
  labConstants.labWhitePoint = name;
  labConstants.Xn = ill[0];
  labConstants.Zn = ill[1];
}
function getLabWhitePoint() {
  return labConstants.labWhitePoint;
}
const lab2rgb = (...args) => {
  args = unpack(args, "lab");
  const [L, a, b] = args;
  const [x, y, z] = lab2xyz(L, a, b);
  const [r, g, b_] = xyz2rgb(x, y, z);
  return [r, g, b_, args.length > 3 ? args[3] : 1];
};
const lab2xyz = (L, a, b) => {
  const { kE, kK, kKE, Xn, Yn, Zn } = labConstants;
  const fy = (L + 16) / 116;
  const fx = 2e-3 * a + fy;
  const fz = fy - 5e-3 * b;
  const fx3 = fx * fx * fx;
  const fz3 = fz * fz * fz;
  const xr = fx3 > kE ? fx3 : (116 * fx - 16) / kK;
  const yr = L > kKE ? Math.pow((L + 16) / 116, 3) : L / kK;
  const zr = fz3 > kE ? fz3 : (116 * fz - 16) / kK;
  const x = xr * Xn;
  const y = yr * Yn;
  const z = zr * Zn;
  return [x, y, z];
};
const compand = (linear) => {
  const sign = Math.sign(linear);
  linear = Math.abs(linear);
  return (linear <= 31308e-7 ? linear * 12.92 : 1.055 * Math.pow(linear, 1 / 2.4) - 0.055) * sign;
};
const xyz2rgb = (x, y, z) => {
  const { MtxAdaptMa, MtxAdaptMaI, MtxXYZ2RGB, RefWhiteRGB, Xn, Yn, Zn } = labConstants;
  const As = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  const Bs = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  const Cs = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  const Ad = RefWhiteRGB.X * MtxAdaptMa.m00 + RefWhiteRGB.Y * MtxAdaptMa.m10 + RefWhiteRGB.Z * MtxAdaptMa.m20;
  const Bd = RefWhiteRGB.X * MtxAdaptMa.m01 + RefWhiteRGB.Y * MtxAdaptMa.m11 + RefWhiteRGB.Z * MtxAdaptMa.m21;
  const Cd = RefWhiteRGB.X * MtxAdaptMa.m02 + RefWhiteRGB.Y * MtxAdaptMa.m12 + RefWhiteRGB.Z * MtxAdaptMa.m22;
  const X1 = (x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20) * (Ad / As);
  const Y1 = (x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21) * (Bd / Bs);
  const Z1 = (x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22) * (Cd / Cs);
  const X2 = X1 * MtxAdaptMaI.m00 + Y1 * MtxAdaptMaI.m10 + Z1 * MtxAdaptMaI.m20;
  const Y2 = X1 * MtxAdaptMaI.m01 + Y1 * MtxAdaptMaI.m11 + Z1 * MtxAdaptMaI.m21;
  const Z2 = X1 * MtxAdaptMaI.m02 + Y1 * MtxAdaptMaI.m12 + Z1 * MtxAdaptMaI.m22;
  const r = compand(
    X2 * MtxXYZ2RGB.m00 + Y2 * MtxXYZ2RGB.m10 + Z2 * MtxXYZ2RGB.m20
  );
  const g = compand(
    X2 * MtxXYZ2RGB.m01 + Y2 * MtxXYZ2RGB.m11 + Z2 * MtxXYZ2RGB.m21
  );
  const b = compand(
    X2 * MtxXYZ2RGB.m02 + Y2 * MtxXYZ2RGB.m12 + Z2 * MtxXYZ2RGB.m22
  );
  return [r * 255, g * 255, b * 255];
};
const rgb2lab = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const [x, y, z] = rgb2xyz(r, g, b);
  const [L, a, b_] = xyz2lab(x, y, z);
  return [L, a, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function xyz2lab(x, y, z) {
  const { Xn, Yn, Zn, kE, kK } = labConstants;
  const xr = x / Xn;
  const yr = y / Yn;
  const zr = z / Zn;
  const fx = xr > kE ? Math.pow(xr, 1 / 3) : (kK * xr + 16) / 116;
  const fy = yr > kE ? Math.pow(yr, 1 / 3) : (kK * yr + 16) / 116;
  const fz = zr > kE ? Math.pow(zr, 1 / 3) : (kK * zr + 16) / 116;
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}
function gammaAdjustSRGB(companded) {
  const sign = Math.sign(companded);
  companded = Math.abs(companded);
  const linear = companded <= 0.04045 ? companded / 12.92 : Math.pow((companded + 0.055) / 1.055, 2.4);
  return linear * sign;
}
const rgb2xyz = (r, g, b) => {
  r = gammaAdjustSRGB(r / 255);
  g = gammaAdjustSRGB(g / 255);
  b = gammaAdjustSRGB(b / 255);
  const { MtxRGB2XYZ, MtxAdaptMa, MtxAdaptMaI, Xn, Yn, Zn, As, Bs, Cs } = labConstants;
  let x = r * MtxRGB2XYZ.m00 + g * MtxRGB2XYZ.m10 + b * MtxRGB2XYZ.m20;
  let y = r * MtxRGB2XYZ.m01 + g * MtxRGB2XYZ.m11 + b * MtxRGB2XYZ.m21;
  let z = r * MtxRGB2XYZ.m02 + g * MtxRGB2XYZ.m12 + b * MtxRGB2XYZ.m22;
  const Ad = Xn * MtxAdaptMa.m00 + Yn * MtxAdaptMa.m10 + Zn * MtxAdaptMa.m20;
  const Bd = Xn * MtxAdaptMa.m01 + Yn * MtxAdaptMa.m11 + Zn * MtxAdaptMa.m21;
  const Cd = Xn * MtxAdaptMa.m02 + Yn * MtxAdaptMa.m12 + Zn * MtxAdaptMa.m22;
  let X = x * MtxAdaptMa.m00 + y * MtxAdaptMa.m10 + z * MtxAdaptMa.m20;
  let Y = x * MtxAdaptMa.m01 + y * MtxAdaptMa.m11 + z * MtxAdaptMa.m21;
  let Z = x * MtxAdaptMa.m02 + y * MtxAdaptMa.m12 + z * MtxAdaptMa.m22;
  X *= Ad / As;
  Y *= Bd / Bs;
  Z *= Cd / Cs;
  x = X * MtxAdaptMaI.m00 + Y * MtxAdaptMaI.m10 + Z * MtxAdaptMaI.m20;
  y = X * MtxAdaptMaI.m01 + Y * MtxAdaptMaI.m11 + Z * MtxAdaptMaI.m21;
  z = X * MtxAdaptMaI.m02 + Y * MtxAdaptMaI.m12 + Z * MtxAdaptMaI.m22;
  return [x, y, z];
};
Color.prototype.lab = function() {
  return rgb2lab(this._rgb);
};
const lab$1 = (...args) => new Color(...args, "lab");
Object.assign(chroma, { lab: lab$1, getLabWhitePoint, setLabWhitePoint });
input.format.lab = lab2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "lab");
    if (type(args) === "array" && args.length === 3) {
      return "lab";
    }
  }
});
Color.prototype.darken = function(amount = 1) {
  const me = this;
  const lab2 = me.lab();
  lab2[0] -= labConstants.Kn * amount;
  return new Color(lab2, "lab").alpha(me.alpha(), true);
};
Color.prototype.brighten = function(amount = 1) {
  return this.darken(-amount);
};
Color.prototype.darker = Color.prototype.darken;
Color.prototype.brighter = Color.prototype.brighten;
Color.prototype.get = function(mc) {
  const [mode, channel] = mc.split(".");
  const src = this[mode]();
  if (channel) {
    const i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
    if (i > -1) return src[i];
    throw new Error(`unknown channel ${channel} in mode ${mode}`);
  } else {
    return src;
  }
};
const { pow: pow$6 } = Math;
const EPS = 1e-7;
const MAX_ITER = 20;
Color.prototype.luminance = function(lum2, mode = "rgb") {
  if (lum2 !== void 0 && type(lum2) === "number") {
    if (lum2 === 0) {
      return new Color([0, 0, 0, this._rgb[3]], "rgb");
    }
    if (lum2 === 1) {
      return new Color([255, 255, 255, this._rgb[3]], "rgb");
    }
    let cur_lum = this.luminance();
    let max_iter = MAX_ITER;
    const test = (low, high) => {
      const mid = low.interpolate(high, 0.5, mode);
      const lm = mid.luminance();
      if (Math.abs(lum2 - lm) < EPS || !max_iter--) {
        return mid;
      }
      return lm > lum2 ? test(low, mid) : test(mid, high);
    };
    const rgb2 = (cur_lum > lum2 ? test(new Color([0, 0, 0]), this) : test(this, new Color([255, 255, 255]))).rgb();
    return new Color([...rgb2, this._rgb[3]]);
  }
  return rgb2luminance(...this._rgb.slice(0, 3));
};
const rgb2luminance = (r, g, b) => {
  r = luminance_x(r);
  g = luminance_x(g);
  b = luminance_x(b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const luminance_x = (x) => {
  x /= 255;
  return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
};
const index = {};
const mix = (col1, col2, f = 0.5, ...rest) => {
  let mode = rest[0] || "lrgb";
  if (!index[mode] && !rest.length) {
    mode = Object.keys(index)[0];
  }
  if (!index[mode]) {
    throw new Error(`interpolation mode ${mode} is not defined`);
  }
  if (type(col1) !== "object") col1 = new Color(col1);
  if (type(col2) !== "object") col2 = new Color(col2);
  return index[mode](col1, col2, f).alpha(
    col1.alpha() + f * (col2.alpha() - col1.alpha())
  );
};
Color.prototype.mix = Color.prototype.interpolate = function(col2, f = 0.5, ...rest) {
  return mix(this, col2, f, ...rest);
};
Color.prototype.premultiply = function(mutate = false) {
  const rgb2 = this._rgb;
  const a = rgb2[3];
  if (mutate) {
    this._rgb = [rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a];
    return this;
  } else {
    return new Color([rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a], "rgb");
  }
};
const { sin: sin$3, cos: cos$4 } = Math;
const lch2lab = (...args) => {
  let [l, c, h] = unpack(args, "lch");
  if (isNaN(h)) h = 0;
  h = h * DEG2RAD;
  return [l, cos$4(h) * c, sin$3(h) * c];
};
const lch2rgb = (...args) => {
  args = unpack(args, "lch");
  const [l, c, h] = args;
  const [L, a, b_] = lch2lab(l, c, h);
  const [r, g, b] = lab2rgb(L, a, b_);
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
const hcl2rgb = (...args) => {
  const hcl2 = reverse3(unpack(args, "hcl"));
  return lch2rgb(...hcl2);
};
const { sqrt: sqrt$4, atan2: atan2$2, round: round$4 } = Math;
const lab2lch = (...args) => {
  const [l, a, b] = unpack(args, "lab");
  const c = sqrt$4(a * a + b * b);
  let h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
  if (round$4(c * 1e4) === 0) h = Number.NaN;
  return [l, c, h];
};
const rgb2lch = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const [l, a, b_] = rgb2lab(r, g, b);
  const [L, c, h] = lab2lch(l, a, b_);
  return [L, c, h, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
Color.prototype.lch = function() {
  return rgb2lch(this._rgb);
};
Color.prototype.hcl = function() {
  return reverse3(rgb2lch(this._rgb));
};
const lch$1 = (...args) => new Color(...args, "lch");
const hcl = (...args) => new Color(...args, "hcl");
Object.assign(chroma, { lch: lch$1, hcl });
input.format.lch = lch2rgb;
input.format.hcl = hcl2rgb;
["lch", "hcl"].forEach(
  (m) => input.autodetect.push({
    p: 2,
    test: (...args) => {
      args = unpack(args, m);
      if (type(args) === "array" && args.length === 3) {
        return m;
      }
    }
  })
);
Color.prototype.saturate = function(amount = 1) {
  const me = this;
  const lch2 = me.lch();
  lch2[1] += labConstants.Kn * amount;
  if (lch2[1] < 0) lch2[1] = 0;
  return new Color(lch2, "lch").alpha(me.alpha(), true);
};
Color.prototype.desaturate = function(amount = 1) {
  return this.saturate(-amount);
};
Color.prototype.set = function(mc, value, mutate = false) {
  const [mode, channel] = mc.split(".");
  const src = this[mode]();
  if (channel) {
    const i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
    if (i > -1) {
      if (type(value) == "string") {
        switch (value.charAt(0)) {
          case "+":
            src[i] += +value;
            break;
          case "-":
            src[i] += +value;
            break;
          case "*":
            src[i] *= +value.substr(1);
            break;
          case "/":
            src[i] /= +value.substr(1);
            break;
          default:
            src[i] = +value;
        }
      } else if (type(value) === "number") {
        src[i] = value;
      } else {
        throw new Error(`unsupported value for Color.set`);
      }
      const out = new Color(src, mode);
      if (mutate) {
        this._rgb = out._rgb;
        return this;
      }
      return out;
    }
    throw new Error(`unknown channel ${channel} in mode ${mode}`);
  } else {
    return src;
  }
};
Color.prototype.tint = function(f = 0.5, ...rest) {
  return mix(this, "white", f, ...rest);
};
Color.prototype.shade = function(f = 0.5, ...rest) {
  return mix(this, "black", f, ...rest);
};
const rgb$1 = (col1, col2, f) => {
  const xyz0 = col1._rgb;
  const xyz1 = col2._rgb;
  return new Color(
    xyz0[0] + f * (xyz1[0] - xyz0[0]),
    xyz0[1] + f * (xyz1[1] - xyz0[1]),
    xyz0[2] + f * (xyz1[2] - xyz0[2]),
    "rgb"
  );
};
index.rgb = rgb$1;
const { sqrt: sqrt$3, pow: pow$5 } = Math;
const lrgb = (col1, col2, f) => {
  const [x1, y1, z1] = col1._rgb;
  const [x2, y2, z2] = col2._rgb;
  return new Color(
    sqrt$3(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f),
    sqrt$3(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f),
    sqrt$3(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f),
    "rgb"
  );
};
index.lrgb = lrgb;
const lab = (col1, col2, f) => {
  const xyz0 = col1.lab();
  const xyz1 = col2.lab();
  return new Color(
    xyz0[0] + f * (xyz1[0] - xyz0[0]),
    xyz0[1] + f * (xyz1[1] - xyz0[1]),
    xyz0[2] + f * (xyz1[2] - xyz0[2]),
    "lab"
  );
};
index.lab = lab;
const interpolate_hsx = (col1, col2, f, m) => {
  let xyz0, xyz1;
  if (m === "hsl") {
    xyz0 = col1.hsl();
    xyz1 = col2.hsl();
  } else if (m === "hsv") {
    xyz0 = col1.hsv();
    xyz1 = col2.hsv();
  } else if (m === "hcg") {
    xyz0 = col1.hcg();
    xyz1 = col2.hcg();
  } else if (m === "hsi") {
    xyz0 = col1.hsi();
    xyz1 = col2.hsi();
  } else if (m === "lch" || m === "hcl") {
    m = "hcl";
    xyz0 = col1.hcl();
    xyz1 = col2.hcl();
  } else if (m === "oklch") {
    xyz0 = col1.oklch().reverse();
    xyz1 = col2.oklch().reverse();
  }
  let hue0, hue1, sat0, sat1, lbv0, lbv1;
  if (m.substr(0, 1) === "h" || m === "oklch") {
    [hue0, sat0, lbv0] = xyz0;
    [hue1, sat1, lbv1] = xyz1;
  }
  let sat, hue, lbv, dh;
  if (!isNaN(hue0) && !isNaN(hue1)) {
    if (hue1 > hue0 && hue1 - hue0 > 180) {
      dh = hue1 - (hue0 + 360);
    } else if (hue1 < hue0 && hue0 - hue1 > 180) {
      dh = hue1 + 360 - hue0;
    } else {
      dh = hue1 - hue0;
    }
    hue = hue0 + f * dh;
  } else if (!isNaN(hue0)) {
    hue = hue0;
    if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") sat = sat0;
  } else if (!isNaN(hue1)) {
    hue = hue1;
    if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") sat = sat1;
  } else {
    hue = Number.NaN;
  }
  if (sat === void 0) sat = sat0 + f * (sat1 - sat0);
  lbv = lbv0 + f * (lbv1 - lbv0);
  return m === "oklch" ? new Color([lbv, sat, hue], m) : new Color([hue, sat, lbv], m);
};
const lch = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "lch");
};
index.lch = lch;
index.hcl = lch;
const num2rgb = (num2) => {
  if (type(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
    const r = num2 >> 16;
    const g = num2 >> 8 & 255;
    const b = num2 & 255;
    return [r, g, b, 1];
  }
  throw new Error("unknown num color: " + num2);
};
const rgb2num = (...args) => {
  const [r, g, b] = unpack(args, "rgb");
  return (r << 16) + (g << 8) + b;
};
Color.prototype.num = function() {
  return rgb2num(this._rgb);
};
const num$1 = (...args) => new Color(...args, "num");
Object.assign(chroma, { num: num$1 });
input.format.num = num2rgb;
input.autodetect.push({
  p: 5,
  test: (...args) => {
    if (args.length === 1 && type(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
      return "num";
    }
  }
});
const num = (col1, col2, f) => {
  const c1 = col1.num();
  const c2 = col2.num();
  return new Color(c1 + f * (c2 - c1), "num");
};
index.num = num;
const { floor: floor$3 } = Math;
const hcg2rgb = (...args) => {
  args = unpack(args, "hcg");
  let [h, c, _g] = args;
  let r, g, b;
  _g = _g * 255;
  const _c = c * 255;
  if (c === 0) {
    r = g = b = _g;
  } else {
    if (h === 360) h = 0;
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 60;
    const i = floor$3(h);
    const f = h - i;
    const p = _g * (1 - c);
    const q = p + _c * (1 - f);
    const t = p + _c * f;
    const v = p + _c;
    switch (i) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
    }
  }
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
const rgb2hcg = (...args) => {
  const [r, g, b] = unpack(args, "rgb");
  const minRgb = min$3(r, g, b);
  const maxRgb = max$3(r, g, b);
  const delta = maxRgb - minRgb;
  const c = delta * 100 / 255;
  const _g = minRgb / (255 - delta) * 100;
  let h;
  if (delta === 0) {
    h = Number.NaN;
  } else {
    if (r === maxRgb) h = (g - b) / delta;
    if (g === maxRgb) h = 2 + (b - r) / delta;
    if (b === maxRgb) h = 4 + (r - g) / delta;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, c, _g];
};
Color.prototype.hcg = function() {
  return rgb2hcg(this._rgb);
};
const hcg$1 = (...args) => new Color(...args, "hcg");
chroma.hcg = hcg$1;
input.format.hcg = hcg2rgb;
input.autodetect.push({
  p: 1,
  test: (...args) => {
    args = unpack(args, "hcg");
    if (type(args) === "array" && args.length === 3) {
      return "hcg";
    }
  }
});
const hcg = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hcg");
};
index.hcg = hcg;
const { cos: cos$3 } = Math;
const hsi2rgb = (...args) => {
  args = unpack(args, "hsi");
  let [h, s, i] = args;
  let r, g, b;
  if (isNaN(h)) h = 0;
  if (isNaN(s)) s = 0;
  if (h > 360) h -= 360;
  if (h < 0) h += 360;
  h /= 360;
  if (h < 1 / 3) {
    b = (1 - s) / 3;
    r = (1 + s * cos$3(TWOPI * h) / cos$3(PITHIRD - TWOPI * h)) / 3;
    g = 1 - (b + r);
  } else if (h < 2 / 3) {
    h -= 1 / 3;
    r = (1 - s) / 3;
    g = (1 + s * cos$3(TWOPI * h) / cos$3(PITHIRD - TWOPI * h)) / 3;
    b = 1 - (r + g);
  } else {
    h -= 2 / 3;
    g = (1 - s) / 3;
    b = (1 + s * cos$3(TWOPI * h) / cos$3(PITHIRD - TWOPI * h)) / 3;
    r = 1 - (g + b);
  }
  r = limit(i * r * 3);
  g = limit(i * g * 3);
  b = limit(i * b * 3);
  return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
};
const { min: min$2, sqrt: sqrt$2, acos } = Math;
const rgb2hsi = (...args) => {
  let [r, g, b] = unpack(args, "rgb");
  r /= 255;
  g /= 255;
  b /= 255;
  let h;
  const min_ = min$2(r, g, b);
  const i = (r + g + b) / 3;
  const s = i > 0 ? 1 - min_ / i : 0;
  if (s === 0) {
    h = NaN;
  } else {
    h = (r - g + (r - b)) / 2;
    h /= sqrt$2((r - g) * (r - g) + (r - b) * (g - b));
    h = acos(h);
    if (b > g) {
      h = TWOPI - h;
    }
    h /= TWOPI;
  }
  return [h * 360, s, i];
};
Color.prototype.hsi = function() {
  return rgb2hsi(this._rgb);
};
const hsi$1 = (...args) => new Color(...args, "hsi");
chroma.hsi = hsi$1;
input.format.hsi = hsi2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "hsi");
    if (type(args) === "array" && args.length === 3) {
      return "hsi";
    }
  }
});
const hsi = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hsi");
};
index.hsi = hsi;
const hsl2rgb = (...args) => {
  args = unpack(args, "hsl");
  const [h, s, l] = args;
  let r, g, b;
  if (s === 0) {
    r = g = b = l * 255;
  } else {
    const t3 = [0, 0, 0];
    const c = [0, 0, 0];
    const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const t1 = 2 * l - t2;
    const h_ = h / 360;
    t3[0] = h_ + 1 / 3;
    t3[1] = h_;
    t3[2] = h_ - 1 / 3;
    for (let i = 0; i < 3; i++) {
      if (t3[i] < 0) t3[i] += 1;
      if (t3[i] > 1) t3[i] -= 1;
      if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];
      else if (2 * t3[i] < 1) c[i] = t2;
      else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
      else c[i] = t1;
    }
    [r, g, b] = [c[0] * 255, c[1] * 255, c[2] * 255];
  }
  if (args.length > 3) {
    return [r, g, b, args[3]];
  }
  return [r, g, b, 1];
};
const rgb2hsl$1 = (...args) => {
  args = unpack(args, "rgba");
  let [r, g, b] = args;
  r /= 255;
  g /= 255;
  b /= 255;
  const minRgb = min$3(r, g, b);
  const maxRgb = max$3(r, g, b);
  const l = (maxRgb + minRgb) / 2;
  let s, h;
  if (maxRgb === minRgb) {
    s = 0;
    h = Number.NaN;
  } else {
    s = l < 0.5 ? (maxRgb - minRgb) / (maxRgb + minRgb) : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
  }
  if (r == maxRgb) h = (g - b) / (maxRgb - minRgb);
  else if (g == maxRgb) h = 2 + (b - r) / (maxRgb - minRgb);
  else if (b == maxRgb) h = 4 + (r - g) / (maxRgb - minRgb);
  h *= 60;
  if (h < 0) h += 360;
  if (args.length > 3 && args[3] !== void 0) return [h, s, l, args[3]];
  return [h, s, l];
};
Color.prototype.hsl = function() {
  return rgb2hsl$1(this._rgb);
};
const hsl$1 = (...args) => new Color(...args, "hsl");
chroma.hsl = hsl$1;
input.format.hsl = hsl2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "hsl");
    if (type(args) === "array" && args.length === 3) {
      return "hsl";
    }
  }
});
const hsl = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hsl");
};
index.hsl = hsl;
const { floor: floor$2 } = Math;
const hsv2rgb = (...args) => {
  args = unpack(args, "hsv");
  let [h, s, v] = args;
  let r, g, b;
  v *= 255;
  if (s === 0) {
    r = g = b = v;
  } else {
    if (h === 360) h = 0;
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 60;
    const i = floor$2(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - s * f);
    const t = v * (1 - s * (1 - f));
    switch (i) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
    }
  }
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
const { min: min$1, max: max$2 } = Math;
const rgb2hsl = (...args) => {
  args = unpack(args, "rgb");
  let [r, g, b] = args;
  const min_ = min$1(r, g, b);
  const max_ = max$2(r, g, b);
  const delta = max_ - min_;
  let h, s, v;
  v = max_ / 255;
  if (max_ === 0) {
    h = Number.NaN;
    s = 0;
  } else {
    s = delta / max_;
    if (r === max_) h = (g - b) / delta;
    if (g === max_) h = 2 + (b - r) / delta;
    if (b === max_) h = 4 + (r - g) / delta;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s, v];
};
Color.prototype.hsv = function() {
  return rgb2hsl(this._rgb);
};
const hsv$1 = (...args) => new Color(...args, "hsv");
chroma.hsv = hsv$1;
input.format.hsv = hsv2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "hsv");
    if (type(args) === "array" && args.length === 3) {
      return "hsv";
    }
  }
});
const hsv = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "hsv");
};
index.hsv = hsv;
function multiplyMatrices(A, B) {
  let m = A.length;
  if (!Array.isArray(A[0])) {
    A = [A];
  }
  if (!Array.isArray(B[0])) {
    B = B.map((x) => [x]);
  }
  let p = B[0].length;
  let B_cols = B[0].map((_, i) => B.map((x) => x[i]));
  let product = A.map(
    (row) => B_cols.map((col) => {
      if (!Array.isArray(row)) {
        return col.reduce((a, c) => a + c * row, 0);
      }
      return row.reduce((a, c, i) => a + c * (col[i] || 0), 0);
    })
  );
  if (m === 1) {
    product = product[0];
  }
  if (p === 1) {
    return product.map((x) => x[0]);
  }
  return product;
}
const oklab2rgb = (...args) => {
  args = unpack(args, "lab");
  const [L, a, b, ...rest] = args;
  const [X, Y, Z] = OKLab_to_XYZ([L, a, b]);
  const [r, g, b_] = xyz2rgb(X, Y, Z);
  return [r, g, b_, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function OKLab_to_XYZ(OKLab) {
  var LMStoXYZ = [
    [1.2268798758459243, -0.5578149944602171, 0.2813910456659647],
    [-0.0405757452148008, 1.112286803280317, -0.0717110580655164],
    [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]
  ];
  var OKLabtoLMS = [
    [1, 0.3963377773761749, 0.2158037573099136],
    [1, -0.1055613458156586, -0.0638541728258133],
    [1, -0.0894841775298119, -1.2914855480194092]
  ];
  var LMSnl = multiplyMatrices(OKLabtoLMS, OKLab);
  return multiplyMatrices(
    LMStoXYZ,
    LMSnl.map((c) => c ** 3)
  );
}
const rgb2oklab = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const xyz = rgb2xyz(r, g, b);
  const oklab2 = XYZ_to_OKLab(xyz);
  return [...oklab2, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
function XYZ_to_OKLab(XYZ) {
  const XYZtoLMS = [
    [0.819022437996703, 0.3619062600528904, -0.1288737815209879],
    [0.0329836539323885, 0.9292868615863434, 0.0361446663506424],
    [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]
  ];
  const LMStoOKLab = [
    [0.210454268309314, 0.7936177747023054, -0.0040720430116193],
    [1.9779985324311684, -2.42859224204858, 0.450593709617411],
    [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]
  ];
  const LMS = multiplyMatrices(XYZtoLMS, XYZ);
  return multiplyMatrices(
    LMStoOKLab,
    LMS.map((c) => Math.cbrt(c))
  );
}
Color.prototype.oklab = function() {
  return rgb2oklab(this._rgb);
};
const oklab$1 = (...args) => new Color(...args, "oklab");
Object.assign(chroma, { oklab: oklab$1 });
input.format.oklab = oklab2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "oklab");
    if (type(args) === "array" && args.length === 3) {
      return "oklab";
    }
  }
});
const oklab = (col1, col2, f) => {
  const xyz0 = col1.oklab();
  const xyz1 = col2.oklab();
  return new Color(
    xyz0[0] + f * (xyz1[0] - xyz0[0]),
    xyz0[1] + f * (xyz1[1] - xyz0[1]),
    xyz0[2] + f * (xyz1[2] - xyz0[2]),
    "oklab"
  );
};
index.oklab = oklab;
const oklch$1 = (col1, col2, f) => {
  return interpolate_hsx(col1, col2, f, "oklch");
};
index.oklch = oklch$1;
const { pow: pow$4, sqrt: sqrt$1, PI: PI$1, cos: cos$2, sin: sin$2, atan2: atan2$1 } = Math;
const average = (colors, mode = "lrgb", weights = null) => {
  const l = colors.length;
  if (!weights) weights = Array.from(new Array(l)).map(() => 1);
  const k = l / weights.reduce(function(a, b) {
    return a + b;
  });
  weights.forEach((w, i) => {
    weights[i] *= k;
  });
  colors = colors.map((c) => new Color(c));
  if (mode === "lrgb") {
    return _average_lrgb(colors, weights);
  }
  const first = colors.shift();
  const xyz = first.get(mode);
  const cnt = [];
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < xyz.length; i++) {
    xyz[i] = (xyz[i] || 0) * weights[0];
    cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
    if (mode.charAt(i) === "h" && !isNaN(xyz[i])) {
      const A = xyz[i] / 180 * PI$1;
      dx += cos$2(A) * weights[0];
      dy += sin$2(A) * weights[0];
    }
  }
  let alpha = first.alpha() * weights[0];
  colors.forEach((c, ci) => {
    const xyz2 = c.get(mode);
    alpha += c.alpha() * weights[ci + 1];
    for (let i = 0; i < xyz.length; i++) {
      if (!isNaN(xyz2[i])) {
        cnt[i] += weights[ci + 1];
        if (mode.charAt(i) === "h") {
          const A = xyz2[i] / 180 * PI$1;
          dx += cos$2(A) * weights[ci + 1];
          dy += sin$2(A) * weights[ci + 1];
        } else {
          xyz[i] += xyz2[i] * weights[ci + 1];
        }
      }
    }
  });
  for (let i = 0; i < xyz.length; i++) {
    if (mode.charAt(i) === "h") {
      let A = atan2$1(dy / cnt[i], dx / cnt[i]) / PI$1 * 180;
      while (A < 0) A += 360;
      while (A >= 360) A -= 360;
      xyz[i] = A;
    } else {
      xyz[i] = xyz[i] / cnt[i];
    }
  }
  alpha /= l;
  return new Color(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
};
const _average_lrgb = (colors, weights) => {
  const l = colors.length;
  const xyz = [0, 0, 0, 0];
  for (let i = 0; i < colors.length; i++) {
    const col = colors[i];
    const f = weights[i] / l;
    const rgb2 = col._rgb;
    xyz[0] += pow$4(rgb2[0], 2) * f;
    xyz[1] += pow$4(rgb2[1], 2) * f;
    xyz[2] += pow$4(rgb2[2], 2) * f;
    xyz[3] += rgb2[3] * f;
  }
  xyz[0] = sqrt$1(xyz[0]);
  xyz[1] = sqrt$1(xyz[1]);
  xyz[2] = sqrt$1(xyz[2]);
  if (xyz[3] > 0.9999999) xyz[3] = 1;
  return new Color(clip_rgb(xyz));
};
const { pow: pow$3 } = Math;
function scale(colors) {
  let _mode = "rgb";
  let _nacol = chroma("#ccc");
  let _spread = 0;
  let _positions = [0, 1];
  let _domain = [0, 1];
  let _pos = [];
  let _padding = [0, 0];
  let _classes = false;
  let _colors = [];
  let _out = false;
  let _min = 0;
  let _max = 1;
  let _correctLightness = false;
  let _colorCache = {};
  let _useCache = true;
  let _gamma = 1;
  const setColors = function(colors2) {
    colors2 = colors2 || ["#fff", "#000"];
    if (colors2 && type(colors2) === "string" && chroma.brewer && chroma.brewer[colors2.toLowerCase()]) {
      colors2 = chroma.brewer[colors2.toLowerCase()];
    }
    if (type(colors2) === "array") {
      if (colors2.length === 1) {
        colors2 = [colors2[0], colors2[0]];
      }
      colors2 = colors2.slice(0);
      for (let c = 0; c < colors2.length; c++) {
        colors2[c] = chroma(colors2[c]);
      }
      _pos.length = 0;
      for (let c = 0; c < colors2.length; c++) {
        _pos.push(c / (colors2.length - 1));
      }
    }
    resetCache();
    return _colors = colors2;
  };
  const getClass = function(value) {
    if (_classes != null) {
      const n = _classes.length - 1;
      let i = 0;
      while (i < n && value >= _classes[i]) {
        i++;
      }
      return i - 1;
    }
    return 0;
  };
  let tMapLightness = (t) => t;
  let tMapDomain = (t) => t;
  const getColor = function(val, bypassMap) {
    let col, t;
    if (bypassMap == null) {
      bypassMap = false;
    }
    if (isNaN(val) || val === null) {
      return _nacol;
    }
    if (!bypassMap) {
      if (_classes && _classes.length > 2) {
        const c = getClass(val);
        t = c / (_classes.length - 2);
      } else if (_max !== _min) {
        t = (val - _min) / (_max - _min);
      } else {
        t = 1;
      }
    } else {
      t = val;
    }
    t = tMapDomain(t);
    if (!bypassMap) {
      t = tMapLightness(t);
    }
    if (_gamma !== 1) {
      t = pow$3(t, _gamma);
    }
    t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
    t = limit(t, 0, 1);
    const k = Math.floor(t * 1e4);
    if (_useCache && _colorCache[k]) {
      col = _colorCache[k];
    } else {
      if (type(_colors) === "array") {
        for (let i = 0; i < _pos.length; i++) {
          const p = _pos[i];
          if (t <= p) {
            col = _colors[i];
            break;
          }
          if (t >= p && i === _pos.length - 1) {
            col = _colors[i];
            break;
          }
          if (t > p && t < _pos[i + 1]) {
            t = (t - p) / (_pos[i + 1] - p);
            col = chroma.interpolate(
              _colors[i],
              _colors[i + 1],
              t,
              _mode
            );
            break;
          }
        }
      } else if (type(_colors) === "function") {
        col = _colors(t);
      }
      if (_useCache) {
        _colorCache[k] = col;
      }
    }
    return col;
  };
  var resetCache = () => _colorCache = {};
  setColors(colors);
  const f = function(v) {
    const c = chroma(getColor(v));
    if (_out && c[_out]) {
      return c[_out]();
    } else {
      return c;
    }
  };
  f.classes = function(classes) {
    if (classes != null) {
      if (type(classes) === "array") {
        _classes = classes;
        _positions = [classes[0], classes[classes.length - 1]];
      } else {
        const d = chroma.analyze(_positions);
        if (classes === 0) {
          _classes = [d.min, d.max];
        } else {
          _classes = chroma.limits(d, "e", classes);
        }
      }
      return f;
    }
    return _classes;
  };
  f.domain = function(domain) {
    if (!arguments.length) {
      return _domain;
    }
    _domain = domain.slice(0);
    _min = domain[0];
    _max = domain[domain.length - 1];
    _pos = [];
    const k = _colors.length;
    if (domain.length === k && _min !== _max) {
      for (let d of Array.from(domain)) {
        _pos.push((d - _min) / (_max - _min));
      }
    } else {
      for (let c = 0; c < k; c++) {
        _pos.push(c / (k - 1));
      }
      if (domain.length > 2) {
        const tOut = domain.map((d, i) => i / (domain.length - 1));
        const tBreaks = domain.map((d) => (d - _min) / (_max - _min));
        if (!tBreaks.every((val, i) => tOut[i] === val)) {
          tMapDomain = (t) => {
            if (t <= 0 || t >= 1) return t;
            let i = 0;
            while (t >= tBreaks[i + 1]) i++;
            const f2 = (t - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
            const out = tOut[i] + f2 * (tOut[i + 1] - tOut[i]);
            return out;
          };
        }
      }
    }
    _positions = [_min, _max];
    return f;
  };
  f.mode = function(_m) {
    if (!arguments.length) {
      return _mode;
    }
    _mode = _m;
    resetCache();
    return f;
  };
  f.range = function(colors2, _pos2) {
    setColors(colors2);
    return f;
  };
  f.out = function(_o) {
    _out = _o;
    return f;
  };
  f.spread = function(val) {
    if (!arguments.length) {
      return _spread;
    }
    _spread = val;
    return f;
  };
  f.correctLightness = function(v) {
    if (v == null) {
      v = true;
    }
    _correctLightness = v;
    resetCache();
    if (_correctLightness) {
      tMapLightness = function(t) {
        const L0 = getColor(0, true).lab()[0];
        const L1 = getColor(1, true).lab()[0];
        const pol = L0 > L1;
        let L_actual = getColor(t, true).lab()[0];
        const L_ideal = L0 + (L1 - L0) * t;
        let L_diff = L_actual - L_ideal;
        let t0 = 0;
        let t1 = 1;
        let max_iter = 20;
        while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
          (function() {
            if (pol) {
              L_diff *= -1;
            }
            if (L_diff < 0) {
              t0 = t;
              t += (t1 - t) * 0.5;
            } else {
              t1 = t;
              t += (t0 - t) * 0.5;
            }
            L_actual = getColor(t, true).lab()[0];
            return L_diff = L_actual - L_ideal;
          })();
        }
        return t;
      };
    } else {
      tMapLightness = (t) => t;
    }
    return f;
  };
  f.padding = function(p) {
    if (p != null) {
      if (type(p) === "number") {
        p = [p, p];
      }
      _padding = p;
      return f;
    } else {
      return _padding;
    }
  };
  f.colors = function(numColors, out) {
    if (arguments.length < 2) {
      out = "hex";
    }
    let result = [];
    if (arguments.length === 0) {
      result = _colors.slice(0);
    } else if (numColors === 1) {
      result = [f(0.5)];
    } else if (numColors > 1) {
      const dm = _positions[0];
      const dd = _positions[1] - dm;
      result = __range__(0, numColors).map(
        (i) => f(dm + i / (numColors - 1) * dd)
      );
    } else {
      colors = [];
      let samples = [];
      if (_classes && _classes.length > 2) {
        for (let i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
          samples.push((_classes[i - 1] + _classes[i]) * 0.5);
        }
      } else {
        samples = _positions;
      }
      result = samples.map((v) => f(v));
    }
    if (chroma[out]) {
      result = result.map((c) => c[out]());
    }
    return result;
  };
  f.cache = function(c) {
    if (c != null) {
      _useCache = c;
      return f;
    } else {
      return _useCache;
    }
  };
  f.gamma = function(g) {
    if (g != null) {
      _gamma = g;
      return f;
    } else {
      return _gamma;
    }
  };
  f.nodata = function(d) {
    if (d != null) {
      _nacol = chroma(d);
      return f;
    } else {
      return _nacol;
    }
  };
  return f;
}
function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = right;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}
const binom_row = function(n) {
  let row = [1, 1];
  for (let i = 1; i < n; i++) {
    let newrow = [1];
    for (let j = 1; j <= row.length; j++) {
      newrow[j] = (row[j] || 0) + row[j - 1];
    }
    row = newrow;
  }
  return row;
};
const bezier = function(colors) {
  let I, lab0, lab1, lab2;
  colors = colors.map((c) => new Color(c));
  if (colors.length === 2) {
    [lab0, lab1] = colors.map((c) => c.lab());
    I = function(t) {
      const lab3 = [0, 1, 2].map((i) => lab0[i] + t * (lab1[i] - lab0[i]));
      return new Color(lab3, "lab");
    };
  } else if (colors.length === 3) {
    [lab0, lab1, lab2] = colors.map((c) => c.lab());
    I = function(t) {
      const lab3 = [0, 1, 2].map(
        (i) => (1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]
      );
      return new Color(lab3, "lab");
    };
  } else if (colors.length === 4) {
    let lab3;
    [lab0, lab1, lab2, lab3] = colors.map((c) => c.lab());
    I = function(t) {
      const lab4 = [0, 1, 2].map(
        (i) => (1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]
      );
      return new Color(lab4, "lab");
    };
  } else if (colors.length >= 5) {
    let labs, row, n;
    labs = colors.map((c) => c.lab());
    n = colors.length - 1;
    row = binom_row(n);
    I = function(t) {
      const u = 1 - t;
      const lab3 = [0, 1, 2].map(
        (i) => labs.reduce(
          (sum, el, j) => sum + row[j] * u ** (n - j) * t ** j * el[i],
          0
        )
      );
      return new Color(lab3, "lab");
    };
  } else {
    throw new RangeError("No point in running bezier with only one color.");
  }
  return I;
};
const bezier$1 = (colors) => {
  const f = bezier(colors);
  f.scale = () => scale(f);
  return f;
};
const { round: round$3 } = Math;
Color.prototype.rgb = function(rnd = true) {
  if (rnd === false) return this._rgb.slice(0, 3);
  return this._rgb.slice(0, 3).map(round$3);
};
Color.prototype.rgba = function(rnd = true) {
  return this._rgb.slice(0, 4).map((v, i) => {
    return i < 3 ? rnd === false ? v : round$3(v) : v;
  });
};
const rgb = (...args) => new Color(...args, "rgb");
Object.assign(chroma, { rgb });
input.format.rgb = (...args) => {
  const rgba = unpack(args, "rgba");
  if (rgba[3] === void 0) rgba[3] = 1;
  return rgba;
};
input.autodetect.push({
  p: 3,
  test: (...args) => {
    args = unpack(args, "rgba");
    if (type(args) === "array" && (args.length === 3 || args.length === 4 && type(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
      return "rgb";
    }
  }
});
const blend = (bottom, top, mode) => {
  if (!blend[mode]) {
    throw new Error("unknown blend mode " + mode);
  }
  return blend[mode](bottom, top);
};
const blend_f = (f) => (bottom, top) => {
  const c0 = chroma(top).rgb();
  const c1 = chroma(bottom).rgb();
  return chroma.rgb(f(c0, c1));
};
const each = (f) => (c0, c1) => {
  const out = [];
  out[0] = f(c0[0], c1[0]);
  out[1] = f(c0[1], c1[1]);
  out[2] = f(c0[2], c1[2]);
  return out;
};
const normal = (a) => a;
const multiply = (a, b) => a * b / 255;
const darken = (a, b) => a > b ? b : a;
const lighten = (a, b) => a > b ? a : b;
const screen = (a, b) => 255 * (1 - (1 - a / 255) * (1 - b / 255));
const overlay = (a, b) => b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
const burn = (a, b) => 255 * (1 - (1 - b / 255) / (a / 255));
const dodge = (a, b) => {
  if (a === 255) return 255;
  a = 255 * (b / 255) / (1 - a / 255);
  return a > 255 ? 255 : a;
};
blend.normal = blend_f(each(normal));
blend.multiply = blend_f(each(multiply));
blend.screen = blend_f(each(screen));
blend.overlay = blend_f(each(overlay));
blend.darken = blend_f(each(darken));
blend.lighten = blend_f(each(lighten));
blend.dodge = blend_f(each(dodge));
blend.burn = blend_f(each(burn));
const { pow: pow$2, sin: sin$1, cos: cos$1 } = Math;
function cubehelix(start = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [0, 1]) {
  let dh = 0, dl;
  if (type(lightness) === "array") {
    dl = lightness[1] - lightness[0];
  } else {
    dl = 0;
    lightness = [lightness, lightness];
  }
  const f = function(fract) {
    const a = TWOPI * ((start + 120) / 360 + rotations * fract);
    const l = pow$2(lightness[0] + dl * fract, gamma);
    const h = dh !== 0 ? hue[0] + fract * dh : hue;
    const amp = h * l * (1 - l) / 2;
    const cos_a = cos$1(a);
    const sin_a = sin$1(a);
    const r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
    const g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
    const b = l + amp * (1.97294 * cos_a);
    return chroma(clip_rgb([r * 255, g * 255, b * 255, 1]));
  };
  f.start = function(s) {
    if (s == null) {
      return start;
    }
    start = s;
    return f;
  };
  f.rotations = function(r) {
    if (r == null) {
      return rotations;
    }
    rotations = r;
    return f;
  };
  f.gamma = function(g) {
    if (g == null) {
      return gamma;
    }
    gamma = g;
    return f;
  };
  f.hue = function(h) {
    if (h == null) {
      return hue;
    }
    hue = h;
    if (type(hue) === "array") {
      dh = hue[1] - hue[0];
      if (dh === 0) {
        hue = hue[1];
      }
    } else {
      dh = 0;
    }
    return f;
  };
  f.lightness = function(h) {
    if (h == null) {
      return lightness;
    }
    if (type(h) === "array") {
      lightness = h;
      dl = h[1] - h[0];
    } else {
      lightness = [h, h];
      dl = 0;
    }
    return f;
  };
  f.scale = () => chroma.scale(f);
  f.hue(hue);
  return f;
}
const digits = "0123456789abcdef";
const { floor: floor$1, random } = Math;
const random$1 = (rng = random) => {
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code += digits.charAt(floor$1(rng() * 16));
  }
  return new Color(code, "hex");
};
const { log: log$1, pow: pow$1, floor, abs: abs$1 } = Math;
function analyze(data, key = null) {
  const r = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  if (type(data) === "object") {
    data = Object.values(data);
  }
  data.forEach((val) => {
    if (key && type(val) === "object") val = val[key];
    if (val !== void 0 && val !== null && !isNaN(val)) {
      r.values.push(val);
      r.sum += val;
      if (val < r.min) r.min = val;
      if (val > r.max) r.max = val;
      r.count += 1;
    }
  });
  r.domain = [r.min, r.max];
  r.limits = (mode, num2) => limits(r, mode, num2);
  return r;
}
function limits(data, mode = "equal", num2 = 7) {
  if (type(data) == "array") {
    data = analyze(data);
  }
  const { min: min2, max: max2 } = data;
  const values = data.values.sort((a, b) => a - b);
  if (num2 === 1) {
    return [min2, max2];
  }
  const limits2 = [];
  if (mode.substr(0, 1) === "c") {
    limits2.push(min2);
    limits2.push(max2);
  }
  if (mode.substr(0, 1) === "e") {
    limits2.push(min2);
    for (let i = 1; i < num2; i++) {
      limits2.push(min2 + i / num2 * (max2 - min2));
    }
    limits2.push(max2);
  } else if (mode.substr(0, 1) === "l") {
    if (min2 <= 0) {
      throw new Error(
        "Logarithmic scales are only possible for values > 0"
      );
    }
    const min_log = Math.LOG10E * log$1(min2);
    const max_log = Math.LOG10E * log$1(max2);
    limits2.push(min2);
    for (let i = 1; i < num2; i++) {
      limits2.push(pow$1(10, min_log + i / num2 * (max_log - min_log)));
    }
    limits2.push(max2);
  } else if (mode.substr(0, 1) === "q") {
    limits2.push(min2);
    for (let i = 1; i < num2; i++) {
      const p = (values.length - 1) * i / num2;
      const pb = floor(p);
      if (pb === p) {
        limits2.push(values[pb]);
      } else {
        const pr = p - pb;
        limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
      }
    }
    limits2.push(max2);
  } else if (mode.substr(0, 1) === "k") {
    let cluster;
    const n = values.length;
    const assignments = new Array(n);
    const clusterSizes = new Array(num2);
    let repeat = true;
    let nb_iters = 0;
    let centroids = null;
    centroids = [];
    centroids.push(min2);
    for (let i = 1; i < num2; i++) {
      centroids.push(min2 + i / num2 * (max2 - min2));
    }
    centroids.push(max2);
    while (repeat) {
      for (let j = 0; j < num2; j++) {
        clusterSizes[j] = 0;
      }
      for (let i = 0; i < n; i++) {
        const value = values[i];
        let mindist = Number.MAX_VALUE;
        let best;
        for (let j = 0; j < num2; j++) {
          const dist = abs$1(centroids[j] - value);
          if (dist < mindist) {
            mindist = dist;
            best = j;
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
      }
      const newCentroids = new Array(num2);
      for (let j = 0; j < num2; j++) {
        newCentroids[j] = null;
      }
      for (let i = 0; i < n; i++) {
        cluster = assignments[i];
        if (newCentroids[cluster] === null) {
          newCentroids[cluster] = values[i];
        } else {
          newCentroids[cluster] += values[i];
        }
      }
      for (let j = 0; j < num2; j++) {
        newCentroids[j] *= 1 / clusterSizes[j];
      }
      repeat = false;
      for (let j = 0; j < num2; j++) {
        if (newCentroids[j] !== centroids[j]) {
          repeat = true;
          break;
        }
      }
      centroids = newCentroids;
      nb_iters++;
      if (nb_iters > 200) {
        repeat = false;
      }
    }
    const kClusters = {};
    for (let j = 0; j < num2; j++) {
      kClusters[j] = [];
    }
    for (let i = 0; i < n; i++) {
      cluster = assignments[i];
      kClusters[cluster].push(values[i]);
    }
    let tmpKMeansBreaks = [];
    for (let j = 0; j < num2; j++) {
      tmpKMeansBreaks.push(kClusters[j][0]);
      tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
    }
    tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b) => a - b);
    limits2.push(tmpKMeansBreaks[0]);
    for (let i = 1; i < tmpKMeansBreaks.length; i += 2) {
      const v = tmpKMeansBreaks[i];
      if (!isNaN(v) && limits2.indexOf(v) === -1) {
        limits2.push(v);
      }
    }
  }
  return limits2;
}
const contrast$1 = (a, b) => {
  a = new Color(a);
  b = new Color(b);
  const l1 = a.luminance();
  const l2 = b.luminance();
  return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
};
const W_offset = 0.027;
const P_in = 5e-4;
const P_out = 0.1;
const R_scale = 1.14;
const B_threshold = 0.022;
const B_exp = 1.414;
const contrastAPCA = (text, bg) => {
  text = new Color(text);
  bg = new Color(bg);
  if (text.alpha() < 1) {
    text = mix(bg, text, text.alpha(), "rgb");
  }
  const l_text = lum(...text.rgb());
  const l_bg = lum(...bg.rgb());
  const Y_text = l_text >= B_threshold ? l_text : l_text + Math.pow(B_threshold - l_text, B_exp);
  const Y_bg = l_bg >= B_threshold ? l_bg : l_bg + Math.pow(B_threshold - l_bg, B_exp);
  const S_norm = Math.pow(Y_bg, 0.56) - Math.pow(Y_text, 0.57);
  const S_rev = Math.pow(Y_bg, 0.65) - Math.pow(Y_text, 0.62);
  const C = Math.abs(Y_bg - Y_text) < P_in ? 0 : Y_text < Y_bg ? S_norm * R_scale : S_rev * R_scale;
  const S_apc = Math.abs(C) < P_out ? 0 : C > 0 ? C - W_offset : C + W_offset;
  return S_apc * 100;
};
function lum(r, g, b) {
  return 0.2126729 * Math.pow(r / 255, 2.4) + 0.7151522 * Math.pow(g / 255, 2.4) + 0.072175 * Math.pow(b / 255, 2.4);
}
const { sqrt, pow, min, max: max$1, atan2, abs, cos, sin, exp, PI } = Math;
function deltaE(a, b, Kl = 1, Kc = 1, Kh = 1) {
  var rad2deg = function(rad) {
    return 360 * rad / (2 * PI);
  };
  var deg2rad = function(deg) {
    return 2 * PI * deg / 360;
  };
  a = new Color(a);
  b = new Color(b);
  const [L1, a1, b1] = Array.from(a.lab());
  const [L2, a2, b2] = Array.from(b.lab());
  const avgL = (L1 + L2) / 2;
  const C1 = sqrt(pow(a1, 2) + pow(b1, 2));
  const C2 = sqrt(pow(a2, 2) + pow(b2, 2));
  const avgC = (C1 + C2) / 2;
  const G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
  const a1p = a1 * (1 + G);
  const a2p = a2 * (1 + G);
  const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
  const C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
  const avgCp = (C1p + C2p) / 2;
  const arctan1 = rad2deg(atan2(b1, a1p));
  const arctan2 = rad2deg(atan2(b2, a2p));
  const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
  const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
  const avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
  const T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
  let deltaHp = h2p - h1p;
  deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
  deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
  const deltaL = L2 - L1;
  const deltaCp = C2p - C1p;
  const sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
  const sc = 1 + 0.045 * avgCp;
  const sh = 1 + 0.015 * avgCp * T;
  const deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
  const Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
  const Rt = -Rc * sin(2 * deg2rad(deltaTheta));
  const result = sqrt(
    pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh))
  );
  return max$1(0, min(100, result));
}
function distance(a, b, mode = "lab") {
  a = new Color(a);
  b = new Color(b);
  const l1 = a.get(mode);
  const l2 = b.get(mode);
  let sum_sq = 0;
  for (let i in l1) {
    const d = (l1[i] || 0) - (l2[i] || 0);
    sum_sq += d * d;
  }
  return Math.sqrt(sum_sq);
}
const valid = (...args) => {
  try {
    new Color(...args);
    return true;
  } catch (e) {
    return false;
  }
};
const scales = {
  cool() {
    return scale([chroma.hsl(180, 1, 0.9), chroma.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return scale(["#000", "#f00", "#ff0", "#fff"]).mode(
      "rgb"
    );
  }
};
const colorbrewer = {
  // sequential
  OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
  PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
  BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
  Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
  BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
  YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
  YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
  Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
  RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
  Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
  YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
  Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
  GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
  Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
  YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
  PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
  Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
  PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
  Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
  // diverging
  Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
  RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
  RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
  PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
  PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
  RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
  BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
  RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
  PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
  // qualitative
  Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
  Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
  Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
  Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
  Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
  Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
  Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
  Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
};
const colorbrewerTypes = Object.keys(colorbrewer);
const typeMap = new Map(colorbrewerTypes.map((key) => [key.toLowerCase(), key]));
const colorbrewerProxy = typeof Proxy === "function" ? new Proxy(colorbrewer, {
  get(target, prop) {
    const lower = prop.toLowerCase();
    if (typeMap.has(lower)) {
      return target[typeMap.get(lower)];
    }
  },
  getOwnPropertyNames() {
    return Object.getOwnPropertyNames(colorbrewerTypes);
  }
}) : colorbrewer;
const cmyk2rgb = (...args) => {
  args = unpack(args, "cmyk");
  const [c, m, y, k] = args;
  const alpha = args.length > 4 ? args[4] : 1;
  if (k === 1) return [0, 0, 0, alpha];
  return [
    c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
    // r
    m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
    // g
    y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
    // b
    alpha
  ];
};
const { max } = Math;
const rgb2cmyk = (...args) => {
  let [r, g, b] = unpack(args, "rgb");
  r = r / 255;
  g = g / 255;
  b = b / 255;
  const k = 1 - max(r, max(g, b));
  const f = k < 1 ? 1 / (1 - k) : 0;
  const c = (1 - r - k) * f;
  const m = (1 - g - k) * f;
  const y = (1 - b - k) * f;
  return [c, m, y, k];
};
Color.prototype.cmyk = function() {
  return rgb2cmyk(this._rgb);
};
const cmyk = (...args) => new Color(...args, "cmyk");
Object.assign(chroma, { cmyk });
input.format.cmyk = cmyk2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "cmyk");
    if (type(args) === "array" && args.length === 4) {
      return "cmyk";
    }
  }
});
const hsl2css = (...args) => {
  const hsla = unpack(args, "hsla");
  let mode = last(args) || "lsa";
  hsla[0] = rnd2(hsla[0] || 0) + "deg";
  hsla[1] = rnd2(hsla[1] * 100) + "%";
  hsla[2] = rnd2(hsla[2] * 100) + "%";
  if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
    hsla[3] = "/ " + (hsla.length > 3 ? hsla[3] : 1);
    mode = "hsla";
  } else {
    hsla.length = 3;
  }
  return `${mode.substr(0, 3)}(${hsla.join(" ")})`;
};
const lab2css = (...args) => {
  const laba = unpack(args, "lab");
  let mode = last(args) || "lab";
  laba[0] = rnd2(laba[0]) + "%";
  laba[1] = rnd2(laba[1]);
  laba[2] = rnd2(laba[2]);
  if (mode === "laba" || laba.length > 3 && laba[3] < 1) {
    laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
  } else {
    laba.length = 3;
  }
  return `lab(${laba.join(" ")})`;
};
const lch2css = (...args) => {
  const lcha = unpack(args, "lch");
  let mode = last(args) || "lab";
  lcha[0] = rnd2(lcha[0]) + "%";
  lcha[1] = rnd2(lcha[1]);
  lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
  if (mode === "lcha" || lcha.length > 3 && lcha[3] < 1) {
    lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
  } else {
    lcha.length = 3;
  }
  return `lch(${lcha.join(" ")})`;
};
const oklab2css = (...args) => {
  const laba = unpack(args, "lab");
  laba[0] = rnd2(laba[0] * 100) + "%";
  laba[1] = rnd3(laba[1]);
  laba[2] = rnd3(laba[2]);
  if (laba.length > 3 && laba[3] < 1) {
    laba[3] = "/ " + (laba.length > 3 ? laba[3] : 1);
  } else {
    laba.length = 3;
  }
  return `oklab(${laba.join(" ")})`;
};
const rgb2oklch = (...args) => {
  const [r, g, b, ...rest] = unpack(args, "rgb");
  const [l, a, b_] = rgb2oklab(r, g, b);
  const [L, c, h] = lab2lch(l, a, b_);
  return [L, c, h, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
const oklch2css = (...args) => {
  const lcha = unpack(args, "lch");
  lcha[0] = rnd2(lcha[0] * 100) + "%";
  lcha[1] = rnd3(lcha[1]);
  lcha[2] = isNaN(lcha[2]) ? "none" : rnd2(lcha[2]) + "deg";
  if (lcha.length > 3 && lcha[3] < 1) {
    lcha[3] = "/ " + (lcha.length > 3 ? lcha[3] : 1);
  } else {
    lcha.length = 3;
  }
  return `oklch(${lcha.join(" ")})`;
};
const { round: round$2 } = Math;
const rgb2css = (...args) => {
  const rgba = unpack(args, "rgba");
  let mode = last(args) || "rgb";
  if (mode.substr(0, 3) === "hsl") {
    return hsl2css(rgb2hsl$1(rgba), mode);
  }
  if (mode.substr(0, 3) === "lab") {
    const prevWhitePoint = getLabWhitePoint();
    setLabWhitePoint("d50");
    const cssColor = lab2css(rgb2lab(rgba), mode);
    setLabWhitePoint(prevWhitePoint);
    return cssColor;
  }
  if (mode.substr(0, 3) === "lch") {
    const prevWhitePoint = getLabWhitePoint();
    setLabWhitePoint("d50");
    const cssColor = lch2css(rgb2lch(rgba), mode);
    setLabWhitePoint(prevWhitePoint);
    return cssColor;
  }
  if (mode.substr(0, 5) === "oklab") {
    return oklab2css(rgb2oklab(rgba));
  }
  if (mode.substr(0, 5) === "oklch") {
    return oklch2css(rgb2oklch(rgba));
  }
  rgba[0] = round$2(rgba[0]);
  rgba[1] = round$2(rgba[1]);
  rgba[2] = round$2(rgba[2]);
  if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
    rgba[3] = "/ " + (rgba.length > 3 ? rgba[3] : 1);
    mode = "rgba";
  }
  return `${mode.substr(0, 3)}(${rgba.slice(0, mode === "rgb" ? 3 : 4).join(" ")})`;
};
const oklch2rgb = (...args) => {
  args = unpack(args, "lch");
  const [l, c, h, ...rest] = args;
  const [L, a, b_] = lch2lab(l, c, h);
  const [r, g, b] = oklab2rgb(L, a, b_);
  return [r, g, b, ...rest.length > 0 && rest[0] < 1 ? [rest[0]] : []];
};
const INT_OR_PCT = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source;
const FLOAT_OR_PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source;
const PCT = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source;
const RE_S = /\s*/.source;
const SEP = /\s+/.source;
const COMMA = /\s*,\s*/.source;
const ANLGE = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source;
const ALPHA = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source;
const RE_RGB = new RegExp(
  "^rgba?\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_RGB_LEGACY = new RegExp(
  "^rgb\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT].join(COMMA) + RE_S + "\\)$"
);
const RE_RGBA_LEGACY = new RegExp(
  "^rgba\\(" + RE_S + [INT_OR_PCT, INT_OR_PCT, INT_OR_PCT, FLOAT_OR_PCT].join(COMMA) + RE_S + "\\)$"
);
const RE_HSL = new RegExp(
  "^hsla?\\(" + RE_S + [ANLGE, PCT, PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_HSL_LEGACY = new RegExp(
  "^hsl?\\(" + RE_S + [ANLGE, PCT, PCT].join(COMMA) + RE_S + "\\)$"
);
const RE_HSLA_LEGACY = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
const RE_LAB = new RegExp(
  "^lab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_LCH = new RegExp(
  "^lch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
);
const RE_OKLAB = new RegExp(
  "^oklab\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, FLOAT_OR_PCT].join(SEP) + ALPHA + "\\)$"
);
const RE_OKLCH = new RegExp(
  "^oklch\\(" + RE_S + [FLOAT_OR_PCT, FLOAT_OR_PCT, ANLGE].join(SEP) + ALPHA + "\\)$"
);
const { round: round$1 } = Math;
const roundRGB = (rgb2) => {
  return rgb2.map((v, i) => i <= 2 ? limit(round$1(v), 0, 255) : v);
};
const percentToAbsolute = (pct, min2 = 0, max2 = 100, signed = false) => {
  if (typeof pct === "string" && pct.endsWith("%")) {
    pct = parseFloat(pct.substring(0, pct.length - 1)) / 100;
    if (signed) {
      pct = min2 + (pct + 1) * 0.5 * (max2 - min2);
    } else {
      pct = min2 + pct * (max2 - min2);
    }
  }
  return +pct;
};
const noneToValue = (v, noneValue) => {
  return v === "none" ? noneValue : v;
};
const css2rgb = (css2) => {
  css2 = css2.toLowerCase().trim();
  if (css2 === "transparent") {
    return [0, 0, 0, 0];
  }
  let m;
  if (input.format.named) {
    try {
      return input.format.named(css2);
    } catch (e) {
    }
  }
  if ((m = css2.match(RE_RGB)) || (m = css2.match(RE_RGB_LEGACY))) {
    let rgb2 = m.slice(1, 4);
    for (let i = 0; i < 3; i++) {
      rgb2[i] = +percentToAbsolute(noneToValue(rgb2[i], 0), 0, 255);
    }
    rgb2 = roundRGB(rgb2);
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_RGBA_LEGACY)) {
    const rgb2 = m.slice(1, 5);
    for (let i = 0; i < 4; i++) {
      rgb2[i] = +percentToAbsolute(rgb2[i], 0, 255);
    }
    return rgb2;
  }
  if ((m = css2.match(RE_HSL)) || (m = css2.match(RE_HSL_LEGACY))) {
    const hsl2 = m.slice(1, 4);
    hsl2[0] = +noneToValue(hsl2[0].replace("deg", ""), 0);
    hsl2[1] = +percentToAbsolute(noneToValue(hsl2[1], 0), 0, 100) * 0.01;
    hsl2[2] = +percentToAbsolute(noneToValue(hsl2[2], 0), 0, 100) * 0.01;
    const rgb2 = roundRGB(hsl2rgb(hsl2));
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_HSLA_LEGACY)) {
    const hsl2 = m.slice(1, 4);
    hsl2[1] *= 0.01;
    hsl2[2] *= 0.01;
    const rgb2 = hsl2rgb(hsl2);
    for (let i = 0; i < 3; i++) {
      rgb2[i] = round$1(rgb2[i]);
    }
    rgb2[3] = +m[4];
    return rgb2;
  }
  if (m = css2.match(RE_LAB)) {
    const lab2 = m.slice(1, 4);
    lab2[0] = percentToAbsolute(noneToValue(lab2[0], 0), 0, 100);
    lab2[1] = percentToAbsolute(noneToValue(lab2[1], 0), -125, 125, true);
    lab2[2] = percentToAbsolute(noneToValue(lab2[2], 0), -125, 125, true);
    const wp = getLabWhitePoint();
    setLabWhitePoint("d50");
    const rgb2 = roundRGB(lab2rgb(lab2));
    setLabWhitePoint(wp);
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_LCH)) {
    const lch2 = m.slice(1, 4);
    lch2[0] = percentToAbsolute(lch2[0], 0, 100);
    lch2[1] = percentToAbsolute(noneToValue(lch2[1], 0), 0, 150, false);
    lch2[2] = +noneToValue(lch2[2].replace("deg", ""), 0);
    const wp = getLabWhitePoint();
    setLabWhitePoint("d50");
    const rgb2 = roundRGB(lch2rgb(lch2));
    setLabWhitePoint(wp);
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_OKLAB)) {
    const oklab2 = m.slice(1, 4);
    oklab2[0] = percentToAbsolute(noneToValue(oklab2[0], 0), 0, 1);
    oklab2[1] = percentToAbsolute(noneToValue(oklab2[1], 0), -0.4, 0.4, true);
    oklab2[2] = percentToAbsolute(noneToValue(oklab2[2], 0), -0.4, 0.4, true);
    const rgb2 = roundRGB(oklab2rgb(oklab2));
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
  if (m = css2.match(RE_OKLCH)) {
    const oklch2 = m.slice(1, 4);
    oklch2[0] = percentToAbsolute(noneToValue(oklch2[0], 0), 0, 1);
    oklch2[1] = percentToAbsolute(noneToValue(oklch2[1], 0), 0, 0.4, false);
    oklch2[2] = +noneToValue(oklch2[2].replace("deg", ""), 0);
    const rgb2 = roundRGB(oklch2rgb(oklch2));
    const alpha = m[4] !== void 0 ? +percentToAbsolute(m[4], 0, 1) : 1;
    rgb2[3] = alpha;
    return rgb2;
  }
};
css2rgb.test = (s) => {
  return (
    // modern
    RE_RGB.test(s) || RE_HSL.test(s) || RE_LAB.test(s) || RE_LCH.test(s) || RE_OKLAB.test(s) || RE_OKLCH.test(s) || // legacy
    RE_RGB_LEGACY.test(s) || RE_RGBA_LEGACY.test(s) || RE_HSL_LEGACY.test(s) || RE_HSLA_LEGACY.test(s) || s === "transparent"
  );
};
Color.prototype.css = function(mode) {
  return rgb2css(this._rgb, mode);
};
const css = (...args) => new Color(...args, "css");
chroma.css = css;
input.format.css = css2rgb;
input.autodetect.push({
  p: 5,
  test: (h, ...rest) => {
    if (!rest.length && type(h) === "string" && css2rgb.test(h)) {
      return "css";
    }
  }
});
input.format.gl = (...args) => {
  const rgb2 = unpack(args, "rgba");
  rgb2[0] *= 255;
  rgb2[1] *= 255;
  rgb2[2] *= 255;
  return rgb2;
};
const gl = (...args) => new Color(...args, "gl");
chroma.gl = gl;
Color.prototype.gl = function() {
  const rgb2 = this._rgb;
  return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
};
Color.prototype.hex = function(mode) {
  return rgb2hex(this._rgb, mode);
};
const hex = (...args) => new Color(...args, "hex");
chroma.hex = hex;
input.format.hex = hex2rgb;
input.autodetect.push({
  p: 4,
  test: (h, ...rest) => {
    if (!rest.length && type(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
      return "hex";
    }
  }
});
const { log } = Math;
const temperature2rgb = (kelvin) => {
  const temp2 = kelvin / 100;
  let r, g, b;
  if (temp2 < 66) {
    r = 255;
    g = temp2 < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp2 - 2) + 104.49216199393888 * log(g);
    b = temp2 < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp2 - 10) + 115.67994401066147 * log(b);
  } else {
    r = 351.97690566805693 + 0.114206453784165 * (r = temp2 - 55) - 40.25366309332127 * log(r);
    g = 325.4494125711974 + 0.07943456536662342 * (g = temp2 - 50) - 28.0852963507957 * log(g);
    b = 255;
  }
  return [r, g, b, 1];
};
const { round } = Math;
const rgb2temperature = (...args) => {
  const rgb2 = unpack(args, "rgb");
  const r = rgb2[0], b = rgb2[2];
  let minTemp = 1e3;
  let maxTemp = 4e4;
  const eps = 0.4;
  let temp2;
  while (maxTemp - minTemp > eps) {
    temp2 = (maxTemp + minTemp) * 0.5;
    const rgb3 = temperature2rgb(temp2);
    if (rgb3[2] / rgb3[0] >= b / r) {
      maxTemp = temp2;
    } else {
      minTemp = temp2;
    }
  }
  return round(temp2);
};
Color.prototype.temp = Color.prototype.kelvin = Color.prototype.temperature = function() {
  return rgb2temperature(this._rgb);
};
const temp = (...args) => new Color(...args, "temp");
Object.assign(chroma, { temp, kelvin: temp, temperature: temp });
input.format.temp = input.format.kelvin = input.format.temperature = temperature2rgb;
Color.prototype.oklch = function() {
  return rgb2oklch(this._rgb);
};
const oklch = (...args) => new Color(...args, "oklch");
Object.assign(chroma, { oklch });
input.format.oklch = oklch2rgb;
input.autodetect.push({
  p: 2,
  test: (...args) => {
    args = unpack(args, "oklch");
    if (type(args) === "array" && args.length === 3) {
      return "oklch";
    }
  }
});
Object.assign(chroma, {
  analyze,
  average,
  bezier: bezier$1,
  blend,
  brewer: colorbrewerProxy,
  Color,
  colors: w3cx11,
  contrast: contrast$1,
  contrastAPCA,
  cubehelix,
  deltaE,
  distance,
  input,
  interpolate: mix,
  limits,
  mix,
  random: random$1,
  scale,
  scales,
  valid
});
function contrast(a, b) {
  return chroma.contrast(a, b);
}
function rateContrast(ratio) {
  if (ratio >= 7) return "AAA";
  if (ratio >= 4.5) return "AA";
  return "Fail";
}
function bestTextOn(bg) {
  return chroma.contrast(bg, "#ffffff") >= chroma.contrast(bg, "#000000") ? "#ffffff" : "#000000";
}
function fixContrast(text, bg, target = 4.5) {
  if (chroma.contrast(text, bg) >= target) return text;
  const bgL = chroma(bg).luminance();
  const goLight = bgL < 0.5;
  let c = chroma(text);
  for (let i = 0; i < 100; i++) {
    c = goLight ? c.brighten(0.15) : c.darken(0.15);
    if (chroma.contrast(c, bg) >= target) return c.hex();
  }
  return bestTextOn(bg);
}
function chromaOf(hex2) {
  return chroma(hex2).hsl()[1] || 0;
}
function lumOf(hex2) {
  return chroma(hex2).luminance();
}
function midScore(hex2) {
  return Math.abs(lumOf(hex2) - 0.45);
}
function mapSemantics(colors, mode = "light", scheme = "vibrant") {
  const palette = colors.length > 0 ? [...colors] : ["#888888"];
  const sortedByLum = [...palette].sort((a, b) => lumOf(b) - lumOf(a));
  const bgSource = mode === "light" ? sortedByLum[0] : sortedByLum[sortedByLum.length - 1];
  const bgMix = scheme === "accessible" ? 0.96 : scheme === "muted" ? 0.88 : 0.82;
  const background = mode === "light" ? chroma.mix(bgSource, "#ffffff", bgMix, "lab").hex() : chroma.mix(bgSource, "#0a0a0a", bgMix, "lab").hex();
  const surface = mode === "light" ? chroma(background).darken(0.18).hex() : chroma(background).brighten(0.25).hex();
  const border = mode === "light" ? chroma(background).darken(0.5).hex() : chroma(background).brighten(0.5).hex();
  const muted = mode === "light" ? chroma(background).darken(0.35).hex() : chroma(background).brighten(0.4).hex();
  const scored = palette.map((c) => ({ hex: c, score: chromaOf(c) * (1 - midScore(c) * 1.4) })).sort((a, b) => b.score - a.score);
  let primary = scored[0]?.hex ?? palette[0];
  if (scheme === "muted") {
    primary = chroma(primary).desaturate(1.2).hex();
  } else if (scheme === "accessible") {
    primary = chroma(primary).saturate(0.8).hex();
    let p = chroma(primary);
    const goDark = lumOf(background) > 0.5;
    for (let i = 0; i < 40 && chroma.contrast(p, background) < 4.5; i++) {
      p = goDark ? p.darken(0.2) : p.brighten(0.2);
    }
    primary = p.hex();
  }
  const primaryHue = chroma(primary).hsl()[0] || 0;
  let secondary = scored.slice(1).map((s) => ({
    ...s,
    hueDist: Math.min(
      Math.abs(((chroma(s.hex).hsl()[0] || 0) - primaryHue + 540) % 360 - 180),
      180
    )
  })).sort((a, b) => b.hueDist + b.score * 30 - (a.hueDist + a.score * 30))[0]?.hex ?? primary;
  if (scheme === "muted") secondary = chroma(secondary).desaturate(1.2).hex();
  let accent = [...palette].sort((a, b) => chromaOf(b) - chromaOf(a))[0];
  if (scheme === "muted") accent = chroma(accent).desaturate(0.6).hex();
  else if (scheme === "accessible") accent = chroma(accent).saturate(0.8).hex();
  const target = scheme === "accessible" ? 7 : 4.5;
  const textOnBackground = fixContrast(bestTextOn(background), background, target);
  const textOnSurface = fixContrast(bestTextOn(surface), surface, target);
  const textOnPrimary = fixContrast(bestTextOn(primary), primary, target);
  const textOnSecondary = fixContrast(bestTextOn(secondary), secondary, target);
  const textOnAccent = fixContrast(bestTextOn(accent), accent, target);
  const textMuted = mode === "light" ? chroma(textOnBackground).brighten(1.4).hex() : chroma(textOnBackground).darken(1.4).hex();
  return {
    background,
    surface,
    border,
    primary,
    secondary,
    accent,
    muted,
    textOnBackground,
    textOnSurface,
    textOnPrimary,
    textOnSecondary,
    textOnAccent,
    textMuted
  };
}
const defaultLandscape = "/assets/default-landscape-U53fOFTd.jpg";
const DEFAULT_COLORS = [
  "#d9e2e0",
  // sky pale
  "#1c2a30",
  // mountain shadow
  "#c75a3a",
  // sunset alpenglow
  "#7d8c8a",
  // misty lake
  "#3a4a4f",
  // deep teal
  "#e8b89a",
  // warm light
  "#5a6663",
  // mid neutral
  "#0d1418"
  // near black
];
const Ctx = reactExports.createContext(null);
const SURFACE_KEYS = ["background", "surface", "primary", "secondary", "accent"];
const TEXT_MAP = {
  background: "textOnBackground",
  surface: "textOnSurface",
  primary: "textOnPrimary",
  secondary: "textOnSecondary",
  accent: "textOnAccent"
};
function ThemeProvider({ children }) {
  const [imageSrc, setImageSrc] = reactExports.useState(defaultLandscape);
  const [rawColors, setRawColors] = reactExports.useState(DEFAULT_COLORS);
  const [mode, setMode] = reactExports.useState("light");
  const [appMode, setAppMode] = reactExports.useState("light");
  const [scheme, setSchemeState] = reactExports.useState("vibrant");
  const [overrides, setOverrides] = reactExports.useState({});
  const computed = reactExports.useMemo(() => mapSemantics(rawColors, mode, scheme), [rawColors, mode, scheme]);
  const theme = reactExports.useMemo(() => {
    const merged = { ...computed, ...overrides };
    for (const key of SURFACE_KEYS) {
      if (overrides[key]) {
        const textKey = TEXT_MAP[key];
        if (!overrides[textKey]) {
          merged[textKey] = fixContrast(bestTextOn(merged[key]), merged[key], 4.5);
        }
      }
    }
    return merged;
  }, [computed, overrides]);
  const setImage = reactExports.useCallback((src, colors) => {
    setImageSrc(src);
    setRawColors(colors);
    setOverrides({});
  }, []);
  const setScheme = reactExports.useCallback((s) => {
    setSchemeState(s);
    setOverrides({});
  }, []);
  const overrideColor = reactExports.useCallback((key, hex2) => {
    setOverrides((o) => ({ ...o, [key]: hex2 }));
  }, []);
  const resetOverrides = reactExports.useCallback(() => setOverrides({}), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ctx.Provider,
    {
      value: {
        imageSrc,
        rawColors,
        theme,
        mode,
        appMode,
        scheme,
        hasOverrides: Object.keys(overrides).length > 0,
        setImage,
        setMode,
        setAppMode,
        setScheme,
        overrideColor,
        resetOverrides
      },
      children
    }
  );
}
function useTheme() {
  const v = reactExports.useContext(Ctx);
  if (!v) throw new Error("useTheme must be used within ThemeProvider");
  return v;
}
const mergeClasses = (...classes) => classes.filter((className, index2, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index2;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$3 = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode);
function ThemeToggle() {
  const { appMode, setAppMode, mode, setMode } = useTheme();
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", appMode === "dark");
  }, [appMode]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setMode(mode === "light" ? "dark" : "light"),
        className: "border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900",
        title: "Toggle palette mode (light/dark theme target)",
        children: [
          "Palette · ",
          mode
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setAppMode(appMode === "light" ? "dark" : "light"),
        className: "inline-flex items-center gap-1.5 border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-900",
        title: "Toggle app shell theme",
        children: [
          appMode === "light" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-3 w-3" }),
          "Shell"
        ]
      }
    )
  ] });
}
export {
  Github as G,
  Sparkles as S,
  ThemeProvider as T,
  ThemeToggle as a,
  createLucideIcon as b,
  contrast as c,
  rateContrast as r,
  useTheme as u
};
