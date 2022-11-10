import { createButton } from "./common/button";

//label - это тeперь функция

export class StatefulButton {
  //state: boolean
  //label

  constructor(props) {
    this.state = false;
    this.onClick = props.onClick;
    this.label = props.label;
    this.activeClassName = props?.activeClassName || "";
    this.entity = createButton({
      ...props,
      label: props.label(this.state),
      onClick: () => this.toogle()
    });
  }

  toogle() {
    this.state = !this.state;
    this.onClick(this.state);
    this.entity.innerText = this.label(this.state);
    if (this.state && this.activeClassName) {
      this.entity.classList.add(this.activeClassName);
    }

    if (!this.state && this.activeClassName) {
      this.entity.classList.remove(this.activeClassName);
    }
  }
}
