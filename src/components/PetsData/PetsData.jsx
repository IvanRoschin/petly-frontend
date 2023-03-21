import { BsPlusLg } from 'react-icons/bs';

import { Box } from 'components/Box/Box';
import PetsList from '../PetsList';
import { Title, Button } from './PetsData.styled';

import { Container } from 'globalStyles/globalStyle';

export const PetsData = () => {
  return (
    <Box as="section" pt={46} pb={80}>
      <Container>
        <Box
          mb={5}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Title>My pets:</Title>
          <Box display="flex" alignItems="center" gridGap="15px">
            <Title>Add pet</Title>
            <Button type="button">
              <BsPlusLg size={24} />
            </Button>
          </Box>
        </Box>
        <PetsList />
      </Container>
    </Box>
  );
};

export default PetsData;