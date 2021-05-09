import React, { useState, useEffect } from 'react';
import soc from 'ic:canisters/soc';
import { UserIdl } from './utils'

const NewUser = (props: { user: UserIdl }) => {
    const user = props.user;

    useEffect(() => {

    }, []);


    return (
        <div>
            {user.firstName}{user.lastName}{user.desc}
        </div>
    )
};

export default NewUser;



