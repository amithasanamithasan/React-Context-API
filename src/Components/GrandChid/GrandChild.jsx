import { useContext } from "react";
import { CountContext } from "../../App";


const GrandChild = () => {
    const Count =useContext(CountContext)
    return (
        <div>
            <button className="bg-blue-500 text-3xl font-serif rounded-full "  type="button">GrandChid-{Count}</button>
        </div>
    );
};

export default GrandChild;