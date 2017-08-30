import React, { Component } from "react";
import { graphql, gql } from "react-apollo";

class CreateLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      url: ""
    };

    this.saveLink = this.saveLink.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  async saveLink() {
    const { url, description } = this.state;

    await this.props.createLinkMutation({
      variables: {
        url,
        description
      }
    });

    this.props.history.push("/");
  }

  updateInputValue(fieldName, fieldValue) {
    this.setState(
      Object.assign(this.state, {
        [fieldName]: fieldValue
      })
    );
  }

  render() {
    return (
      <section className="component_createlink">
        <input
          type="text"
          className="input_field url"
          placeholder="Enter a url"
          value={this.state.url}
          onChange={e => this.updateInputValue("url", e.target.value)}
        />

        <textarea
          type="text"
          className="input_field description"
          placeholder="Enter a description for this url"
          value={this.state.description}
          onChange={e => this.updateInputValue("description", e.target.value)}
          rows="6"
          cols="10"
        />

        <button className="submit trigger" onClick={this.saveLink}>
          Save
        </button>
      </section>
    );
  }
}

const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($url: String!, $description: String!) {
    createLink(url: $url, description: $description) {
      id
      url
      description
      createdAt
    }
  }
`;

export default graphql(CREATE_LINK_MUTATION, { name: "createLinkMutation" })(
  CreateLink
);
