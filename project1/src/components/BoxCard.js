import { useState } from "react";


export const BoxCard = ({ result, children }) => {

    const [show, setshow] = useState(true);

    return (
        <div className={show ? '':'hidden'}>
            <div className={`box ${result}`}>
                {children}
            </div>
            <button onClick={() => setshow(!show)}>Hide</button>
        </div>

    )
}
