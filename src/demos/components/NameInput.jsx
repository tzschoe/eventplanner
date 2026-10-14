import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");

    function handleChange(event) {
            setName(event.target.value)
    }

    return(
        
        <>
            <label htmlFor="name"></label>

            <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
            ></input>

            <p>
                Hallo {name}!
            </p>
        </>
    );
}

export default NameInput;