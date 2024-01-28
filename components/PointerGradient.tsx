const PointerGradient = ({ position }: any) => {
    return (
        <div>
            <div
                style={{ left: position.x -200, top: position.y - 100 }}
                className="h-[20rem] hidden md:lg  w-[20rem] blur-[250px] absolute bg-gradient-to-tr from-[#1d4ed826] to-violet-600"
            />
        </div>
    );
};

export default PointerGradient;
