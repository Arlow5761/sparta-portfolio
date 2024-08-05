import Image from "next/image";

function Projects() {
  const projects = [
    {
      thumb : "/holosimp.jpg",
      title : "Hololive: Idol Starlight Parade",
      desc : "A hololive rhythm fan game",
      link : ""
    },
    {
      thumb : "/rogadoesntlikecheating.png",
      title : "Roga Doesn't Like Cheating!",
      desc : "An infinite runner game",
      link : ""
    }
  ];
  
  const renderedProjects = projects.map((project) => {
    return (
      <div key={project.title} className="flex flex-row">
        <Image
          src={project.thumb}
          width={0}
          height={0}
          sizes="100vw"
          style={{ height:"5em", width:"7em"}}
          alt={project.title}
        />
        <div className="flex flex-col">
          <div>
            {project.title}
          </div>
          <div>
            {project.desc}
          </div>
        </div>
      </div>
    );
  });

  return renderedProjects;
}

function Hobbies() {
  const hobbies = [
    "Playing games",
    "Making games",
    "Sleeping"
  ];

  const renderedHobbies = hobbies.map((hobby) => {
    return (
      <div key={hobby}>
        {hobby}
      </div>
    );
  });

  return renderedHobbies;
}

function Abilities() {
  const abilities = [
    "Living",
    "Breathing"
  ];

  const renderedAbilities = abilities.map((ability) => {
    return (
      <div key={ability}>
        {ability}
      </div>
    );
  });

  return renderedAbilities;
}

function Skills() {
  const skills = [
    "Unity Game Development",
    "C/C++ Programming",
    "Python Programming",
    "C# Programming"
  ];

  const renderedSkills = skills.map((skill) => {
    return (
      <div key={skill}>
        {skill}
      </div>
    );
  });

  return renderedSkills;
}

export default function Home() {
  return (
    <div>
      <div className="block content-center justify-center text-center bg-gray-950 text-white text-9xl h-48 border-b-8 border-b-black dark:border-b-gray-800">
            <div className="block align-middle content-center">
              Hello World!
            </div>
      </div>
      <main className="m-16">
        <div className="block m-8">
          <div className="text-7xl text-center">
            About Me
          </div>
          <div className="flex flex-row">
            <Image
              src="/pasfoto.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ height:"7rem", width:"auto", marginRight:"1rem"}}
              alt="pasfoto"
            />
            <div className="flex flex-col text-3xl">
              <div>
                Nama : Arlow Emmanuel Hergara
              </div>
              <div>
                Jurusan : Teknik Informatika
              </div>
              <div>
                &quot;Manusia sederhana&quot;
              </div>
            </div>
          </div>
        </div>
        <div className="block m-8">
          <div className="text-7xl text-center">
            Hobbies & Abilities
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow">
              <div className="text-5xl text-center">
                Hobbies
              </div>
              <div>
                <Hobbies/>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-5xl text-center">
                Abilites
              </div>
              <div>
                <Abilities/>
              </div>
            </div>
          </div>
        </div>
        <div className="block m-8">
          <div className="text-7xl text-center">
            Projects
          </div>
          <div className="flex flex-col">
            <Projects/>
          </div>
        </div>
        <div className="block m-8">
          <div className="text-7xl text-center">
            Skills
          </div>
          <div>
            <Skills/>
          </div>
        </div>
      </main>
    </div>
  );
}
