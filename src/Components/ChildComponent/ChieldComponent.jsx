import AnotherChildComponet from "../AnotherChild/AnotherChildComponet";


const ChieldComponent = () => {
    return (

        <div>
 
            <button className="bg-yellow-400 text-3xl font-serif rounded-xl">Child-</button>
    
            <AnotherChildComponet></AnotherChildComponet>
        </div>
    );
};

export default ChieldComponent;