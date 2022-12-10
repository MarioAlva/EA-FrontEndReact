import React from 'react'
import '../css/Profile.css'
import { useNavigate } from "react-router-dom"
import * as userService from '../services/UserServices'
import { useEffect, useState } from 'react'
import { User } from '../models/User'
import axios from 'axios'
import ImageUploading, { ImageListType } from "react-images-uploading";




const Profile: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/updateuser');
    const [user, setUser] = useState<User>();
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
      ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
      };

	const loadUser = async () => {
		const user = await userService.getProfile();
        const getUser = user.data as User;
        setUser(getUser);
	  }
	useEffect(() => {
		loadUser()
	  }, [])

    return (
        
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-image">
                <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button className="image-button"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Choose your profile picture
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="profile1-image">
                <img src={image.dataURL} alt="" width="100" margin-top="10%" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      </div>
			</div>                        
            <div className="profile-titles">{user?.username}</div>
            <button className="profile-config-button" onClick={handleClick}>Configuration</button>
            
            {/* <input
            style = {{display: 'none'}}
            type="file"
            onChange={this.fileSelectHandler}
            ref={fileInput => this.fileInput = fileInput}/>
            <button onClick={() => this.fileInput.click()}>Select File</button> */}
            {/* <input type="file" onChange={this.fileSelectHandler}/>
            <button onClick={this.fileUploadHandler}>Upload</button> */}
		</div>
        
            
    )
}
export default Profile