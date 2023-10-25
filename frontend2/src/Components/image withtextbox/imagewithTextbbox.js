import React from "react";
import "./ImageWithText.css";
import ImgControl from "./imgControl";
const ImageWithText = () => {
  return (
    <div className="container" style={{marginTop:'8rem'}}>
      <div className="row">
        <div className="col-xl-9 m-auto col-lg-8 col-md-12 col-sm-12 col-xs-12">
       
            <ImgControl />
            <div className="comp-1">
              <div className="mar-top-nuum">
                <p className="num-set" style={{ marginBottom: "0" }}>
                  1
                </p>
              </div>
              <p style={{ marginBottom: "0" }}>
                Click the ‘’Transform your <br /> House’’ button to get started
              </p>
            </div>
            <div className="comp-2">
              <div className="mar-top-nuum">
                <p className="num-set2" style={{ marginBottom: "0" }}>
                  2
                </p>
              </div>
              <p style={{ marginBottom: "0" }}>
                Upload or drag and <br /> drop your image
              </p>
            </div>
            <div className="comp-3">
              <div className="mar-top-nuum">
                <p className="num-set2" style={{ marginBottom: "0" }}>
                  3
                </p>
              </div>
              <p style={{ marginBottom: "0" }}>
                Generate and download <br /> your images
              </p>
            </div>
          
        </div>
      </div>
    </div>
    // <div className="image-text-container">

    // </div>
  );
};

export default ImageWithText;