

function RenderAchievements() {
    const achievements = [
        {
            name: "Getting into ITB",
            icon: "school"
        },
    ];

    return achievements.map((achievement) => {
        return (
            <div key={achievement.name} className="w-36 h-36 flex flex-col justify-center items-center text-center text-2xl">
                <div className="material-symbols-outlined text-9xl" style={{fontVariationSettings: "'FILL' 1"}}>
                    {achievement.icon}
                </div>
                <div>
                    {achievement.name}
                </div>
            </div>
        );
    });
}

export default function Achievements() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-gray-900 rounded-xl flex flex-wrap justify-center items-center h-[32rem] w-[40rem] p-8 gap-24">
                <RenderAchievements/>
            </div>
        </div>
    );
}
