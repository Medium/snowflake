import React from "react";

type Props = {
  name: string,
  setNameFn: (string) => void,
}

class NameInput extends React.Component<Props> {
  nameChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.setNameFn(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="name-input"
        value={this.props.name}
        onChange={this.nameChanged.bind(this)}
        placeholder="Name"
        />
    )
  }
}

export default NameInput;
