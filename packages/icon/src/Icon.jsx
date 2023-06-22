import { h } from "vue";

export default {
  name: "Icon",
  props: {
    name: {
      // svg图标名称
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "rgba(0,0,0,0.65)",
    },
    size: {
      // svg尺寸
      type: [
        Number, String,
      ],
      default: "24",
    },
    width: {
      // svg宽度
      type: [
        Number, String,
      ],
      default: "24",
    },
    height: {
      // svg高度
      type: [
        Number, String,
      ],
      default: "24",
    },
  },
  render() {
    return h("svg", {
      style: {
        fontSize: `${this.size}px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
        color: this.color,
      },
    },
    [
      h("use", {
        attrs: {
          "xlink:href": `#${this.name}`,
        },
      }),
    ]);
  },
};

