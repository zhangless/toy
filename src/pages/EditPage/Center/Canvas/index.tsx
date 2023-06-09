import useEditStore from "src/store/editStore";
import styles from "./index.module.less";
import { memo } from "react";

 function Canvas() {
  const {canvas} = useEditStore();
  const {cmps} = canvas;

  console.log("canvas render"); //sy-log
  return (
    <div id="canvas" className={styles.main} style={canvas.style}>
      {cmps.map((item) => (
        <div key={item.key}>{item.value}</div>
      ))}
    </div>
  );
}


export default memo(Canvas)