import React from "react";
import * as Switch from "@radix-ui/react-switch";
import styles from "./switch.module.scss";

function SwitchDemo() {
  return (
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Switch.Root
          className={styles.switchRoot}
          id="airplane-mode"
          onCheckedChange={(test) => console.log("test", test)}
        >
          <Switch.Thumb className={styles.switchThumb} />
        </Switch.Root>
      </div>
    </form>
  );
}

export default SwitchDemo;
