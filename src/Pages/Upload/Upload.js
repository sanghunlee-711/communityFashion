import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

function Upload() {
  const [imagefiles, setImagefiles] = useState({ fileName: "", prevUrl: "" });
  const [typing, setTyping] = useState("w");
  const [editable, setEditable] = useState(false);
  const ref = useRef();

  const submitImg = (e) => {
    e.preventDefault();
    console.log("imagefiles", imagefiles);
  };

  const changeImg = (e) => {
    //Obj in Array로 만들어서 하나씩 붙여놓고 count 올려서 다음순서 보여주도록 하면 될듯 ??
    e.preventDefault();
    let count = 0;
    let reader = new FileReader();
    let file = e.target.files[count];
    console.log(file);
    reader.onloadend = (file) => {
      setImagefiles({
        fileName: file,
        prevUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);

    count += 1;
  };
  const checkFunction = () => {
    console.log(imagefiles);
  };

  const TypingChange = (e) => {
    console.log(e);
    setEditable(true);
  };

  const TypingCheck = (e) => {
    // setTyping(e.target);
  };

  const makeImage = () => {
    console.log("typedValue");
    // const ifImg = typedValue.split(".").charAt(typedValue.length);
    // console.log(ifImg);
  };

  return (
    <UploadContainer>
      <form>
        <span onClick={checkFunction}>HElloUpload</span>
        <input onChange={(e) => changeImg(e)} type="file" name="file" />
        <input onSubmit={(e) => submitImg(e)} type="submit" value="Upload" />
        <ImageWrapper>
          <img className="check" src={imagefiles.prevUrl} alt="uploadimage" />
        </ImageWrapper>
        <div>
          <img className="check" src={imagefiles.prevUrl} alt="uploadimage" />
          <TextArea
            onClick={(e) => TypingChange(e)}
            onKeyUp={(e) => TypingCheck(e)}
            contentEditable={editable}
            onChange={(e) => makeImage(e)}
          >
            {typing}
          </TextArea>
        </div>
      </form>
    </UploadContainer>
  );
}

const UploadContainer = styled.section`
  width: 80vw;
  margin: 0 auto;
  background-color: red;
`;

const TextArea = styled.textarea`
  outline: none;
  color: blue;
  background-color: green;
`;

const ImageWrapper = styled.div`
  width: 20vw;
  height: 20vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Upload;
