
import {} from "piu/MC";

const Fonts = {
  UIMain: "OpenSans-Semibold-28"
};

const Colors = {
  tan:   "#d2b48c",
  coral: "#ff7f50",
  lightyellow: "#ffffe0"
};

let helloLabel = new Label(null, {
  top: 0, left:0,
  skin: new Skin({ fill: Colors.lightyellow }),
  style: new Style({ font: Fonts.UIMain, color: Colors.coral }),
  string: "hello world." 
});

let application = new Application(null, {
  skin: new Skin({ fill: Colors.tan }),
  contents: [
    helloLabel
  ]
});

export default application; 

