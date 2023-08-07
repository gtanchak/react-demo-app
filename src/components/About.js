import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  render() {
    return (
      <div>
        <User name="Ghanshyam Tanchak (Function)" />
        <UserClass name="Ghanshyam Tanchak (class)" />
      </div>
    );
  }
}

export default About;
