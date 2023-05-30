import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectError,
  selectPet,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const pet = useSelector(selectPet);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    pet,
    error,
  };
};
