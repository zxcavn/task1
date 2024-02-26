import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { StateType } from '../redux/reducers';
import { fetchUsersRequest, filterPostsByUser, resetPostFilter } from '../redux/actions';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const users = useSelector((state: StateType) => state.users);
  const [selectedUserId, setSelectedUserId] = useState<string>('');

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    if (location.search) {
      const userId = new URLSearchParams(location.search).get('user');
      if (userId && users.length > 0) {
        const user = users.find((user) => user.id === Number(userId));
        if (user) {
          setSelectedUserId(user.id.toString());
          dispatch(filterPostsByUser(user.id));
        }
      }
    } else {
      setSelectedUserId('');
    }
  }, [users, dispatch, location.search]);

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = event.target.value;
    setSelectedUserId(userId);
    if (userId !== '') {
      dispatch(filterPostsByUser(Number(userId)));
      navigate(`/?user=${userId}`);
    } else {
      dispatch(resetPostFilter());
      navigate('/');
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'end'}} className="user-list">
      <select style={{border:'2px solid black', marginRight:'15px', fontSize:'16px', padding:'6px'}} value={selectedUserId} onChange={handleUserChange}>
        <option value="">Выберите имя</option>
        {users.map((user) => (
          <option key={user.id} value={user.id.toString()}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserList;
