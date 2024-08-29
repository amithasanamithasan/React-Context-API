import { useContext } from "react";
import GrandChild from "../GrandChid/GrandChild";
import { MultiplyContext } from "../../App";


const AnotherChildComponet = () => {
 const Multiply=   useContext(MultiplyContext)
    return (
        <div>
            <button className="bg-lime-400 text-3xl font-serif rounded-xl" type="button" >AnotherChild-{Multiply}</button>
 
            <GrandChild></GrandChild>
        </div>
    );
};

export default AnotherChildComponet;