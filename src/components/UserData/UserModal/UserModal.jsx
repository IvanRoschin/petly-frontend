import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { deleteUser } from 'redux/auth/operations';
import { useTranslation } from 'react-i18next';
import { ModalText } from './UserModal.styled';
import { ModalButton } from 'components/commonComponents';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';

export const UserModal = ({ onClose }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    onClose();
    dispatch(logOut());
  };

  return (
    <Box p="32px 16px" textAlign="center">
      <ModalText>🐾 {t('Want_leave')}</ModalText>
      <Box display="flex" justifyContent="center" gridGap="24px">
        <ModalButton type="button" onClick={onClose}>
          {t('No')}
        </ModalButton>
        <ModalButton type="button" onClick={handleLogOut}>
          {t('Yes')} 🐾
        </ModalButton>
      </Box>
    </Box>
  );
};

export const UserDeleteModal = ({ onClose }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    onClose();
    dispatch(deleteUser());
  };

  return (
    <Box p="32px 16px" textAlign="center">
      <ModalText>🐾 {t('Want_delete')}</ModalText>

      <Box display="flex" justifyContent="center" gridGap="24px">
        <ModalButton type="button" onClick={onClose}>
          {t('No')}
        </ModalButton>
        <ModalButton type="button" onClick={handleDeleteUser}>
          {t('Yes')} 🐾
        </ModalButton>
      </Box>
    </Box>
  );
};

UserDeleteModal.propsType = {
  onClose: PropTypes.func.isRequired,
};

UserModal.propsType = {
  onClose: PropTypes.func.isRequired,
};
