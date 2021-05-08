import React, { useState } from 'react';
import soc from 'ic:canisters/soc';

const Create = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [desc, setDesc] = useState('');

    const [done, setDone] = useState(false);
    const [saving, setSaving] = useState(false);

    interface UserIdl {
        id: { toNumber(): number };
        firstName: string;
        lastName: string;
        desc: string;
    };


    const submit = async () => {
        setSaving(true)
        let newProfile = {
            firstName: first,
            lastName: last,
            desc: desc,
        };
        soc.create(newProfile).then((ret: UserIdl) => {
            console.log("Itt jön");
            console.log(ret);
        })
        setDone(true);
    }
    if (done) {
        setSaving(false);
    }

    if (saving) {
        return (<progress />);
    }

    return (
        <div>
            <form name="new-user" className="form-group" onSubmit={() => submit()}>
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

                <div >
                    <button className="btn btn-primary" type="submit">
                        Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Create
