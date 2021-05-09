import React, { useState, useEffect } from 'react';
import soc from 'ic:canisters/soc';
import { UserIdl } from './utils'

const NewUser = (props: { user: UserIdl }) => {
    const user = props.user;

    useEffect(() => {

    }, []);


    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>
                            < input name="name" value={user.firstName} type="text"
                            />
                        </td>
                        <td>
                            < input name="address" value={user.lastName} type="text"
                            />
                        </td>
                        <td>
                            < input name="email" value={user.desc} type="text"
                            />
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
};

export default NewUser;



