
import {} from "piu/MC";

const Fonts = {
  UIMain: "OpenSans-Semibold-28"
};

const Colors = {
  tan: "#d2b48c",
  coral: "#ff7f50",
  lightyellow: "#ffffe0",
  orange: "#ffa500"
};

/*
 * border付きのラベル
 */
const borderSkin = new Skin({
  fill: Colors.lightyellow,
  stroke: Colors.orange, borders: { left: 1, right: 1, top: 1, bottom: 1 }
});

let TileLabel = Label.template($ => ({
  width: 50, height: 100,
  skin: borderSkin, 
  style: new Style({ font: Fonts.UIMain, color: Colors.coral }),
  string: $
}));

/*
 * 追加した要素を行方向へ並べる「Row object」
 */
let sampleRow = new Row(null, {
  contents: [
    new TileLabel("A"),
    new TileLabel("B"),
    new TileLabel("C"),
    new TileLabel("D"),
    new TileLabel("E"),
    new TileLabel("F")
  ]
});

let application = new Application(null, {
  skin: new Skin({ fill: Colors.tan }),
  contents: [
    sampleRow
  ]
});

export default application; 

