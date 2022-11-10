export function createButton(props) {
  const button = document.createElement("button");
  if (props?.className) {
    button.classList.add(props.className);
  }

  if (props?.label) {
    button.innerText = props.label;
  }

  if (props?.onClick) {
    button.addEventListener("click", props.onClick);
  }

  return button;
}
