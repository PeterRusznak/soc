import React, { useState } from 'react';
import soc from 'ic:canisters/soc';

const Create = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [desc, setDesc] = useState('');



    interface UserIdl {
        id: { toNumber(): number };
        firstName: string;
        lastName: string;
        desc: string;
    };


    const submit = async (event) => {
        event.preventDefault();

        let newProfile = {
            firstName: first,
            lastName: last,
            desc: desc,
        };
        soc.create(newProfile).then((ret: UserIdl) => {
            console.log(ret);
        })
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
}

export default Create
