import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { MDBInput } from "mdbreact";

function Search({ fileService }) {
  const [keyword, setKeyword] = useState("");
  const [exception, setException] = useState("");
  const [result, setResult] = useState("");
  const [first, setFirst] = useState(true);
  const history = useHistory();
  console.log("result", result);
  const onSubmit = async (event) => {
    event.preventDefault();
    setFirst(false);
    if (exception !== null) {
      history.push(`/search?keyword=${keyword}&exception=${exception}`);
      await fileService
        .getAllByKeyword_with_exception(keyword, exception)
        .then((data) => {
          setKeyword("");
          setException("");
          setResult(data);
        })
        .catch(console.log);
    } else {
      history.push(`/search?keyword=${keyword}`);
      await fileService
        .getAllByKeyword(keyword)
        .then((data) => {
          // console.log("created", created);
          setKeyword("");
          setResult(data);
          // onCreated(created); <---- soketIo에서 만들어줄것임!!
        })
        .catch(console.log);
    }
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onChangeException = (event) => {
    setException(event.target.value);
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="Search_Box">
      <div className="Go_Main" onClick={goHome}>
        X
      </div>
      <form className="search-form" onSubmit={onSubmit}>
        <div className="input_Box">
          <label className="label_design first_input">
            Search Word
            <input
              type="text"
              placeholder="Search By Word..."
              value={keyword}
              name="keyword"
              required
              autoFocus
              onChange={onChange}
              className="form-input"
            />
          </label>
          <label className="label_design">
            Exception Word
            <input
              type="text"
              placeholder="Word To Exclude.."
              value={exception}
              name="exception"
              autoFocus
              onChange={onChangeException}
              className="form-input"
            />
          </label>
        </div>
        <button type="submit" className="Common_Button Search_Button">
          Search
        </button>
      </form>
      <div>
        <div className="result_box">
          <div className="search_left">
            <div className="total_result_number">
              Total Result:{" "}
              {result?.totalResult?.length > 0
                ? `${result?.totalResult?.length}`
                : 0}
            </div>
            <div className="search_result_left">
              {result?.totalResult?.length > 0
                ? result.totalResult.map((eachResult, index) => {
                    return <div key={index}>{eachResult}</div>;
                  })
                : first
                ? null
                : "No result.."}
            </div>
          </div>
          <div className="search_right">
            <div className="total_result_number">The 3 Most Similar Words</div>
            <div className="search_result_right">
              {result?.finalResult?.length > 0
                ? result.finalResult.map((eachResult, index) => {
                    return <div key={index}>{eachResult}</div>;
                  })
                : first
                ? null
                : "No result.."}
            </div>
          </div>
        </div>
        <Link to={"/update"}>
          <div className="Common_Button Upload_Button">Update New Text</div>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Search;
