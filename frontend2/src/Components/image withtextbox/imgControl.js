import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: static;
  //   width: 900px;
  height: 600px;
  border: 2px solid white;
`;

const Img = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-size: 900px 100%;
`;

const BackgroundImg = styled(Img)`
  background-image: url(${process.env.PUBLIC_URL + "/design1.png"});
  object-fit: cover !important;
  
`;

const ForegroundImg = styled(Img)`
  background-image: url(${process.env.PUBLIC_URL + "/design2.png"});
  object-fit: cover;
  width: ${props => props.width || '50%'};
`;

const SliderInput = styled.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100% !important;
  background: transparent;
  outline: none;
  margin: 0;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  
  top: 0;
  left: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 600px;
    background: white;
    cursor: pointer;
    background:  linear-gradient(81.92deg, #F9B233 46.89%, #F6A250 48.21%, #F0856D 50.62%, #ED6979 53.1%, #EA4C7D 55.59%, #E8327E 58.12%, #E7187E 60.69%, #E6007E 63.32%, #E6007E 66.12%, #662483 88.29%, #009FE3 110.87%);

  }
  &::-moz-range-thumb {
    width: 6px;
    height: 600px;
    background: white;
    cursor: pointer;
  }
`;

const SliderButton = styled.div`
  pointer-events: none;
  position: absolute;
  width: 30px;
  height: 30px;
  
  border-radius: 50%;
 background-color: white
  ;
  left: ${(props) => `calc(${props.sliderPos}% - 14px)`};
  top: calc(50% - 18px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowLeft = styled.div`
  content: "";
  padding: 3px;
  display: inline-block;
  border: solid #5d5d5d;
  border-width: 0 2px 2px 0;
  transform: rotate(134deg);
`;

const ArrowRight = styled.div`
  content: "";
  padding: 3px;
  display: inline-block;
  border: solid #5d5d5d;
  border-width: 0 2px 2px 0;
  transform: rotate(317deg);
`;

const ImgControl = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderPos(value);
  };

  return (
    <Container>
      <BackgroundImg className="background-img" />
      <ForegroundImg className="foreground-img" width={`${sliderPos}%`} />
      <SliderInput
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        className="slider"
        name="slider"
        id="slider"
        onChange={handleSliderChange}
      />
      <SliderButton sliderPos={sliderPos}>
        <ArrowLeft />
        <ArrowRight />
      </SliderButton>
    </Container>
  );
};

export default ImgControl;