import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Update({ fileService }) {
  const [text, setText] = useState("");

  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (text !== null) {
      await fileService
        .updateByText(text)
        .then((data) => {
          setText("");
          alert("File is Updated!!");
        })
        .catch(console.log);
    }
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="Upload_Box">
      <div className="Go_Main" onClick={goHome}>
        X
      </div>

      <form className="upload-form" onSubmit={onSubmit}>
        <div className="input_upload_Box">
          <label className="label_design first_input">
            Text To Add
            <input
              type="text"
              placeholder="Update by word..."
              value={text}
              name="text"
              required
              autoFocus
              onChange={onChange}
              className="form-input-upload"
            />
          </label>
        </div>

        <button type="submit" className="Common_Button Upload_Button ">
          Update New Text
        </button>
      </form>
      <Link to={"/search"}>
        <div className="Common_Button Search_To_Button">Go To Search Page</div>
      </Link>
    </div>
  );
}

export default Update;
