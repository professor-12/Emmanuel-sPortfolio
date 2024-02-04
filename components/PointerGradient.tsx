const PointerGradient = ({ position }: any) => {
    return (
        <div>
            <div
                style={{ left: position.x -200, top: position.y-200}}
                className="h-[20rem] hidden  md:flex  w-[20rem] blur-[200px] absolute bg-gradient-to-tr from-[#1d4ed826] to-violet-600"
            />
        </div>
    );
};

export default PointerGradient;
