import { useState } from 'react';
import UserPhoto from 'components/UserData/UserPhoto';
import Modal from 'components/Modal';
import UserModal from './UserModal';
import {
  UserWrapper,
  TitleContainer,
  Title,
  UserSection,
  UserContainer,
  UserDataList,
  UserThumb,
} from './UserData.styled';
import UserDataItem from 'components/UserDataItem';
import Logout from 'components/Logout';
import DeleteUser from 'components/DeleteUser';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box/Box';

export const UserData = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <UserWrapper>
      <TitleContainer>
        <Title>{t('My_information')}:</Title>
      </TitleContainer>

      <UserContainer>
        <UserSection>
          <UserPhoto />

          <UserThumb>
            <UserDataList>
              <UserDataItem />
            </UserDataList>
            <Box display="flex" justifyContent="space-between" gridGap="24px">
              <Logout onOpen={toggleModal} />
              <DeleteUser onOpen={toggleModal} />
            </Box>
            ;
          </UserThumb>
        </UserSection>
      </UserContainer>
      {showModal ? (
        <Modal onClose={toggleModal}>
          <UserModal onClose={toggleModal} />
        </Modal>
      ) : null}
    </UserWrapper>
  );
};

export default UserData;
