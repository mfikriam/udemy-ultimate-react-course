import { useNavigate } from 'react-router-dom';
import { useFakeAuthContext } from '../../hooks';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useFakeAuthContext();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate('/');
    },
    [isAuthenticated, navigate],
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
