import React, { useState } from "react";
import "./YourComponent.css";

const RedesignComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  
  const toggleImageSelection = (image) => {
    if (selectedImages.includes(image)) {
      // If the image is already selected, unselect it
      setSelectedImages(selectedImages.filter((selected) => selected !== image));
    } else {
      // If the image is not selected, select it (up to 4 images)
      if (selectedImages.length < 4) {
        setSelectedImages([...selectedImages, image]);
      }
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container1">
      <div className="left-box">
        <p>
          You have no credits left. Buy more here to
          <br />
          generate your house.
        </p>
        <div
          style={{
            alignItems: "center",
            border: "1px solid black",
            marginLeft: "19px",
            marginRight: "15rem",
            paddingBottom: "34px",
            borderRadius: "10px",
            borderStyle: "dashed",
            width: "19rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-cloud-upload"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
            />
          </svg>{" "}
          <br />
          Drag and drop <br />
          or <br />
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <button
            className="upload-button"
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            Upload Photo
          </button>
        </div>

        <span> Select Room type</span>
        {selectedImage && (
          <div className="uploaded-image">
            <img
              src={selectedImage}
              alt="Uploaded"
              className="bordered-image"
              style={{ width: "18rem", height: "12rem" }}
            />
          </div>
        )}
        <div className="dropdown-container">
          <select className="dropdown">
            <option value="Show 4 Images">Living Room</option>
            <option value="Show 9 Images">Dining Room</option>
            <option value="Show 9 Images">BedRoom</option>
            <option value="Show 9 Images">Bath Room</option>
            <option value="Show 9 Images">Office</option>
            <option value="Show 9 Images">Kitchen</option>
            <option value="Show 9 Images">Basement</option>
            <option value="Show 9 Images">Arabian Majilis</option>
            <option value="Show 9 Images">Outdoor Patio</option>
            <option value="Show 9 Images">Gaming Room </option>


          </select>
        </div>
        <span style={{ fontWeight: "bold" }}>Selected almost four: </span>
        <div
          className="image-grid"
          style={{ display: "flex", marginRight: "13rem" }}
        >
          <>
            <img  src={process.env.PUBLIC_URL + "/image5.png"}
          alt="Image 1"
          
          onClick={() => toggleImageSelection("Image 1")}
          style={{ border: selectedImages.includes("Image 1") ? '10px solid skyblue' : 'none' , }}  />
          
            <span
              style={{
                position: "absolute",
                marginTop: "5.2rem",
                marginLeft: "1rem",
              }}
            >
              Modern
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image6.png"} 
             onClick={() => toggleImageSelection("Image 2")}
          style={{ border: selectedImages.includes("Image 2") ? '2px solid blue' : 'none' }}
          alt="Image 2" />
            <span
              style={{
                position: "absolute",
                marginTop: "5.2rem",
                marginLeft: "6rem",
              }}
            >
              Minimalist
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image7.png"} alt="Image 1"  onClick={() => toggleImageSelection("Image 3")}
          style={{ border: selectedImages.includes("Image 3") ? '2px solid blue' : 'none' }} />
            <span
              style={{
                position: "absolute",
                marginTop: "5.2rem",
                marginLeft: "11.5rem",
              }}
            >
              Professional
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image 8.png"}  onClick={() => toggleImageSelection("Image 4")}
          style={{ border: selectedImages.includes("Image 4") ? '2px solid blue' : 'none' }} alt="Image 4" />
            <span
              style={{
                position: "absolute",
                marginTop: "12rem",
                marginLeft: "1rem",
              }}
            >
              Tropical
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image 9.png"} alt="Image 3"  onClick={() => toggleImageSelection("Image 5")}
          style={{ border: selectedImages.includes("Image 5") ? '2px solid blue' : 'none' }} />
            <span
              style={{
                position: "absolute",
                marginTop: "12rem",
                marginLeft: "6.2rem",
              }}
            >
              Coastal
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image10.png"}  onClick={() => toggleImageSelection("Image 6")}
          style={{ border: selectedImages.includes("Image 6") ? '2px solid blue' : 'none' }} alt="Image 4" />
            <span
              style={{
                position: "absolute",
                marginTop: "12rem",
                marginLeft: "12rem",
              }}
            >
              Vintage
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image11.png"}  onClick={() => toggleImageSelection("Image 7")}
          style={{ border: selectedImages.includes("Image 7") ? '2px solid blue' : 'none' }} alt="Image 1" />
            <span
              style={{
                position: "absolute",
                marginTop: "19rem",
                marginLeft: "0.5rem",
              }}
            >
              Industrial
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image12.png"}  onClick={() => toggleImageSelection("Image 8")}
          style={{ border: selectedImages.includes("Image 8") ? '2px solid blue' : 'none' }} alt="Image 2" />
            <span
              style={{
                position: "absolute",
                marginTop: "19rem",
                marginLeft: "6rem",
              }}
            >
              Neoclassic
            </span>
            <br />
            <img src={process.env.PUBLIC_URL + "/image7.png"}  onClick={() => toggleImageSelection("Image 9")}
          style={{ border: selectedImages.includes("Image 9") ? '2px solid blue' : 'none' }} alt="Image 3" />
            <span
              style={{
                position: "absolute",
                marginTop: "19rem",
                marginLeft: "13rem",
              }}
            >
              Tribal
            </span>
            <br />
          </>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button className="bo">RENDER DESIGNS</button>{" "}
            <span
              style={{
                alignItems: "center",
                display: "flex",
                marginLeft: "8px",
              }}
            >
              Cost : 3 Credits
            </span>
          </div>
        </div>
      </div>
      <div className="right-box">
      
        <div className="image-row">
          <img src={process.env.PUBLIC_URL + "/image1.png"} alt="Image 1" />
          <span
            style={{
              position: "absolute",
              marginTop: "15rem",
              marginLeft: "5rem",
            }}
          >
            Professional living room
          </span>
          <br />
          <img src={process.env.PUBLIC_URL + "/image2.png"} alt="Image 2" />
          <span
            style={{
              position: "absolute",
              marginTop: "15rem",
              marginLeft: "25rem",
            }}
          >
            Vintage living room
          </span>
          <br />
        </div>
        
        <div className="image-row">
          <img src={process.env.PUBLIC_URL + "/image3.png"} alt="Image 5" />
          <span
            style={{
              position: "absolute",
              marginTop: "15rem",
              marginLeft: "5rem",
            }}
          >
            Tropical living room
          </span>
          <br />
          <img src={process.env.PUBLIC_URL + "/image4.png"} alt="Image 6" />
          <span
            style={{
              position: "absolute",
              marginTop: "15rem",
              marginLeft: "25rem",
            }}
          >
            Coastal living room
          </span>
          <br />
        </div>
        <div className="image-row" style={{display:'flex',flexWrap:'wrap',marginLeft:'7rem',marginRight:'2rem' ,marginTop:'2rem'}}>
        {selectedImages.map((image, index) => (
  <div key={index} style={{  display:'flex' ,flexWrap:"wrap", flexDirection:'column'}}>
     <img
                src={image}
                alt={`Selected Image ${index + 1}`}
                style={{ width: "200px", height: "150px", objectFit: "cover" }}
              />
    <span
      style={{
        position: "absolute",
        marginTop: "15rem",
        marginLeft: `${index * 20}rem`,
      }}
    >
      {image.label}
    </span>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default RedesignComponent;
