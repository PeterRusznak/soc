import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserIdl } from './utils'
import NewUser from './NewUser'
import soc from 'ic:canisters/soc';

export const Create = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [desc, setDesc] = useState('');
    const [done, setDone] = useState(false);
    const [user, setUser] = useState({} as UserIdl);


    const submit = async (event) => {
        event.preventDefault();
        let newProfile = {
            firstName: first,
            lastName: last,
            desc: desc,
        };
        let ret: UserIdl = await soc.create(newProfile);
        console.log(ret.id);
        setUser(ret);
        setDone(true);
    }

    if (done) {
        return (<NewUser user={user} />)
    }

    return (
        <div>
            <div className="form-group" >
                <h2 className="text-center">Join us</h2>

                <div>
                    Firstname :
                    <input name="first" type="text" className="form-control"
                        onChange={ev => setFirst(ev.target.value)} />
                </div>
                <div>
                    Lastname :
                    <input name="last" type="text" className="form-control"
                        onChange={ev => setLast(ev.target.value)} />
                </div>

                <div>
                    Misc :
                    <input name="desc" type="text" className="form-control"
                        onChange={ev => setDesc(ev.target.value)} />
                </div>

                <button className="btn btn-success" onClick={submit}>Save</button>

            </div>
        </div>
    )
};

