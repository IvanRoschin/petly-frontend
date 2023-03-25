import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';
import toast from 'react-hot-toast';
import {
  AddAvatarBtn,
  HiddenInput,
  EditPhotoBtn,
  Kamera,
  Check,
} from './UserPhoto.styled';
import { ReactComponent as AvatarPlus } from 'images/svg/addAvatar.svg';

export const UserPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const dispatch = useDispatch();
  const filePicker = useRef(null);

  const handleUpload = e => {
    e.preventDefault();

    if (!selectedFile) {
      console.log('CHOOSE FILE PLS');
      return;
    }
    const data = new FormData();
    data.append('avatar', selectedFile);
    dispatch(updateAvatar(data));
  };

  const handleChange = e => {
    const chosenImg = e.target.files[0];

    if (!e.target.files.length || !chosenImg) {
      setSelectedFile(null);
      toast.warning('Choose an image to change your avatar!');
      return;
    }
    setSelectedFile(chosenImg);
    setIsFileSelected(true);
    toast.success(
      'Photo selected. Confirm your choice by clicking on the "Edit photo" button'
    );
  };

  return (
    <div>
      <AddAvatarBtn onClick={() => filePicker.current.click()}>
        {isFileSelected ? <Check /> : <AvatarPlus />}
        {/* <AvatarPlus /> */}
      </AddAvatarBtn>

      <HiddenInput
        ref={filePicker}
        type="file"
        name="avatar"
        onChange={handleChange}
        accept="image/*,.png,.jpg,.gif,.web"
      />
      <EditPhotoBtn type="submit" onClick={handleUpload}>
        <Kamera />
        <span>Edit photo</span>
      </EditPhotoBtn>
    </div>
  );
};

export default UserPhoto;