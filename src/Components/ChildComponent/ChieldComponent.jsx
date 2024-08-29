import { useContext } from "react";
import AnotherChildComponet from "../AnotherChild/AnotherChildComponet";
import { Devided } from "../../App";


const ChieldComponent = () => {
  const[dvide, setDevide] = useContext(Devided)
    return (

        <div>
 
            <button onClick={() => setDevide((dvide) => dvide/2)} className="bg-yellow-400 text-3xl font-serif rounded-xl">Child-{dvide}</button>
    
            <AnotherChildComponet></AnotherChildComponet>
        </div>
    );
};

export default ChieldComponent;