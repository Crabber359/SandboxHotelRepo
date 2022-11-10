import { hotelImitation } from "../lib/imitation";
import { showHistory } from "../lib/database";
import { createButton } from "./common/button";
import { createBlock } from "./common/block";
import { StatefulButton } from "./StatefulButton";

function createRow(props) {
  return createBlock({
    ...props,
    className: "row"
  });
}

export function createImitiationController() {
  const app = document.getElementById("app");

  const imitiationToggleButton = new StatefulButton({
    label: (state) => {
      if (state) return "Stop";
      return "Start";
    },
    className: "button",
    activeClassName: "active-button",
    onClick: (state) => {
      if (state) return hotelImitation.start();
      hotelImitation.stop();
    }
  });

  const showHistoryButton = createButton({
    className: "button",
    label: "Show History",
    onClick: showHistory
  });

  const row = createRow({
    children: [imitiationToggleButton.entity]
  });
  const row1 = createRow({
    children: [showHistoryButton]
  });
  const container = createBlock({
    className: "imitation-controller",
    children: [row, row1]
  });

  app.appendChild(container);
}
