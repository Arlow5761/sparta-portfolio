import Image from "next/image";
import Link from "next/link";

function RenderProjects() {
    const projects = [
        {
            name: "Roga Doesn't Like Cheating!",
            thumbnail: "/rogadoesntlikecheating.png",
            link: "https://aldoyfa.itch.io/11-fisika-dasar"
        },
        {
            name: "Hololive: Starlight Idol Music Parade",
            thumbnail: "/holosimp.jpg",
            link: "https://arlow5761.itch.io/hololive-starlight-idol-music-parade"
        },
    ];

    return projects.map((project) => {
        return (
            <Link key={project.name} href={project.link}>
                <div className="bg-blue-950 rounded-md w-52 h-52 flex flex-col justify-center items-center text-center text-lg">
                    <Image
                        src={project.thumbnail}
                        alt={project.name}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="w-48 h-36"
                        style={{objectFit: "cover"}}
                    />
                    <div>
                        {project.name}
                    </div>
                </div>
            </Link>
        );
    });
}

export default function Projects() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-gray-900 rounded-xl flex flex-wrap justify-center items-center h-[32rem] w-[40rem] p-8 gap-24">
                <RenderProjects/>
            </div>
        </div>
    );
}
