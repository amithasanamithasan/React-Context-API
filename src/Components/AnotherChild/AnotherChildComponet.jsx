import GrandChild from "../GrandChid/GrandChild";


const AnotherChildComponet = () => {
    return (
        <div>
            <button className="bg-lime-400 text-3xl font-serif rounded-xl" type="button" >AnotherChild-</button>
 
            <GrandChild>s</GrandChild>
        </div>
    );
};

export default AnotherChildComponet;