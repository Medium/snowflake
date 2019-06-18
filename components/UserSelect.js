import * as React from 'react';
import { Label } from 'glamorous'

const UserSelect = ({ users, selectUser, selectedUser }) => (
  <div>
    <Label marginRight="20px" fontWeight="600">Select a user</Label>
    <select value={selectedUser} onChange={selectUser}>
      <option value=""></option>
      {
        users.map(user => (
          <option key={user} value={user}>{user}</option>
        ))
      }
    </select>
  </div>
)

export default UserSelect;