
import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
                Fname:""
              Name:
              <input
                type="text"
                name="name"
                value={Fname}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="Email"
                name="Email"
                value={Email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
