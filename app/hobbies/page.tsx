
function RenderHobbies() {
    const hobbies = [
        {
            name: "Gaming",
            icon: "stadia_controller"
        },
        {
            name: "Anime",
            icon: "movie"
        },
        {
            name: "Game Dev",
            icon: "code"
        }
    ];

    return hobbies.map((hobby) => {
        return (
            <div key={hobby.name} className="w-36 h-36 flex flex-col justify-center items-center text-center text-2xl">
                <div className="material-symbols-outlined text-9xl" style={{fontVariationSettings: "'FILL' 1"}}>
                    {hobby.icon}
                </div>
                <div>
                    {hobby.name}
                </div>
            </div>
        );
    });
}

export default function Hobbies() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-gray-900 rounded-xl flex flex-wrap justify-center items-center h-[32rem] w-[40rem] p-8 gap-24">
                <RenderHobbies/>
            </div>
        </div>
    );
}
