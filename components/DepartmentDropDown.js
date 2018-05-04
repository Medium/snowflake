// @flow
import * as React from 'react';
import glamorous from 'glamorous';
import { departments }  from './../constants';


type DropDownStates = {
  value: string,
}

class DepartmentDropDown extends React.Component<{}, DropDownStates> {
  constructor() {
    super()

    this.state = {
        value: "ENGINEERING",
    }

  }

  handleChange = (e: any) => {
    e.preventDefault();
    this.setState({value: e.target.value})
  }

  render() {
      const departmentOptions = departments.map((department, index) => {
        return (
        <option value={department} key={index}>{department}</option>
        )
    });
      return (
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
          {departmentOptions} 
          </select>
        </label>
      )
  }

}

export default DepartmentDropDown