import React from 'react';

const Users = (props) => {
    return (
        <div>
            <ul>
                {props.usersProps.map(user => <li>{user}</li>)}
            </ul>

            <ul>
                <li>name: {props.userProps.name}</li>
                <li>position: {props.userProps.position}</li>
            </ul>
        </div>

    );
};

export default Users;