import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from 'redux/auth/operations';

import emptyPets from 'images/emptyPets.jpg';

import { List, Items, Img, ImgContainer } from './PetsList.styled';
import { PetCard } from '../PetCard';
// import { useEffect } from 'react';

export const PetsList = () => {
  // const dispatch = useDispatch();
  const pets = useSelector(selectUser).myPets;
  console.log('pets', pets);

  const card = pets?.map(pet => {
    return (
      <Items key={pet._id}>
        <PetCard pet={pet} />
      </Items>
    );
  });
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      {pets?.length === 0 && (
        <ImgContainer>
          <Img src={emptyPets} alt="No pets were added" />
        </ImgContainer>
      )}
      <List>{card}</List>
    </>
  );
};

export default PetsList;
