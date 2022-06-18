import React from "react";
import Users from "../../components/users/Users";

function UsersPage() {
    const users = ["Dastan", "Zainab", "Islam", "Sanzhar"];

    const user = {
        name: "Dastan",
        position: "Front end 22"
    }

    return (
        <div>
            <Users usersProps={users} userProps={user}/>
        </div>
    )
}

export default UsersPage;