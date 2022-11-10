export function createBlock(props) {
  const block = document.createElement("div");

  if (props?.className) {
    block.classList.add(props.className);
  }
  if (props?.children) {
    block.append(...props.children);
  }

  return block;
}
