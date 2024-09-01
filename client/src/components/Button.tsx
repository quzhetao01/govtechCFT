import React from "react";
import axios from "axios";

export default function Button({
  name,
  numbers,
  setResult,
}: {
  name: string;
  numbers: {
    first: string;
    second: string;
  };
  setResult: React.Dispatch<React.SetStateAction<number>>;
}) {
  const submitData = () => {
    console.log("Submitting");
    console.log(numbers);
    var url = "";
    if (name === "Add") {
      url = "http://127.0.0.1:5000/api/add";
    } else if (name === "Subtract") {
      url = "http://127.0.0.1:5000/api/subtract";
    }
    axios
      .post(url, numbers, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setResult(Number(res.data.result));
      });
  };

  return (
    <>
      <button onClick={submitData}>{name} </button>
    </>
  );
}
