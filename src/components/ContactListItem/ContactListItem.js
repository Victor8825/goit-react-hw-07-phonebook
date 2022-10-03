import React from 'react';

import PropTypes from 'prop-types';
import { StyledContactListItem } from './StyledContactListItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledContactListItem>
      <li key={id}>
        {name}: {phone}
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </StyledContactListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
