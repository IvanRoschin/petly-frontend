import { UserDeleteButton, UserDeleteIcon } from './DeleteUser.styled';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const DeleteUser = ({ onOpen }) => {
  const { t } = useTranslation();

  return (
    <UserDeleteButton onClick={onOpen}>
      <UserDeleteIcon />
      <span>{t('Delete_user')}</span>
    </UserDeleteButton>
  );
};

export default DeleteUser;

DeleteUser.propsType = {
  onOpen: PropTypes.func.isRequired,
};
