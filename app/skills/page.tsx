import Image from "next/image";

function RenderSkills() {
    const skills = [
        {
            name: "C/C++ Programming",
            icon: "/cpplogo.svg"
        },
        {
            name: "C# Programming",
            icon: "/csharplogo.svg"
        },
        {
            name: "Python Programming",
            icon: "pythonlogo.svg"
        },
        {
            name: "Unity Development",
            icon: "/unitylogo.svg"
        }
    ];

    return skills.map((skill) => {
        return (
            <div key={skill.name} className="w-36 h-36 flex flex-col justify-center items-center text-center text-2xl">
                <Image
                    src={skill.icon}
                    alt={skill.name}
                    height={0}
                    width={0}
                    className="w-24 h-24"
                />
                <div>
                    {skill.name}
                </div>
            </div>
        );
    });
}

export default function Skills() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-gray-900 rounded-xl flex flex-wrap justify-center items-center h-[32rem] w-[40rem] p-8 gap-24">
                <RenderSkills/>
            </div>
        </div>
    );
}
