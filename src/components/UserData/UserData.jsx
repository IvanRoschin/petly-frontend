import { Container } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import {
  UserTitle,
  UserSection,
  UserPhoto,
  UserPhotoButton,
  UserDataList,
} from './UserData.styled';
import UserDataItem from 'components/UserDataItem';
import Logout from 'components/Logout';

export const UserData = () => {
  return (
    <Box pt="61px" as="section">
      <Container>
        <UserTitle>My information:</UserTitle>

        <UserSection>
          <UserPhoto>{/* <svg></svg> */}</UserPhoto>
          <UserPhotoButton>
            {/* <svg></svg> */}
            Edit photo
          </UserPhotoButton>

          <UserDataList>
            <UserDataItem></UserDataItem>
          </UserDataList>

          <Logout />
        </UserSection>
      </Container>
    </Box>
  );
};

export default UserData;