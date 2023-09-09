import React, { SyntheticEvent } from "react";
import Input from "../components/Input/input";

function text() {

  const formSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={formSubmit} >
        <Input
          required
          label="Text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
          errorMessage="required"
        />
        <Input label="name"  multiline errorMessage="error" />
        <Input label="name" styles={{root:{width:400},label:{textAlign:"center"}}} />

        <button type="submit"  >submit</button>
      </form>
    </div>
  );
}

export default text;
