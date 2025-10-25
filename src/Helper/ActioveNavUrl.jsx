import { useLocation } from 'react-router-dom';

export const ActiveNavLinkUrl = (path, active) => {
  const location = useLocation();
  return location.pathname === path ? (active ? active : true) : '';
};
