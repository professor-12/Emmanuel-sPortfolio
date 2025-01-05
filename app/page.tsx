import Experience from "@/components/Experience";
import HomePage from "@/components/HomePage";
import Main from "@/components/Main";
import Header from "@/components/Navigation/Header";
import Project from "@/components/Projects/Project";
const Home = () => {
    return (
        <HomePage>
            <div className="mx-auto max-md:container lg:w-[90%] xl:w-[80%] justify-between">
                <Header />
                <div className="relative max-md:mt-12">
                    <main className="lg:max-w-[650px] lg:w-[50%] absolute top-0 right-0">
                        <Main />
                        <Experience />
                        <Project />
                    </main>
                </div>
            </div>
        </HomePage>

    );
};

export default Home;
