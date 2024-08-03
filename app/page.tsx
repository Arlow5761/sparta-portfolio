import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div className="text-5xl">
          Profile
        </div>
        <div className="flex flex-row">
          <Image
            src="/pasfoto.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ height:"5em", width:"auto"}}
            alt="pasfoto"
          />
          <div className="flex flex-col">
            <div>
              Nama : Arlow Emmanuel Hergara
            </div>
            <div>
              Jurusan : Teknik Informatika
            </div>
            <div>
              "Manusia sederhana"
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-5xl">
          Hobbies & Abilities
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="text-2xl">
              Hobbies
            </div>
            <div>
              <div>
                Playing games
              </div>
              <div>
                Making games
              </div>
              <div>
                Sleeping
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-2xl">
              Abilites
            </div>
            <div>
              <div>
                Living
              </div>
              <div>
                Breathing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-5xl">
          Projects
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image
              src="/holosimp.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ height:"5em", width:"7em"}}
              alt="holosimp"
            />
            <div className="flex flex-col">
              <div>
                Hololive: Idol Starlight Parade
              </div>
              <div>
                A hololive rhythm fan game
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/rogadoesntlikecheating.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ height:"5em", width:"7em"}}
              alt="roga doesnt like cheating"
            />
            <div className="flex flex-col">
              <div>
                Roga Doesn't Like Cheating!
              </div>
              <div>
                An infinite runner game
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-5xl">
          Skills
        </div>
        <div>
          <div>
            Unity Game Development
          </div>
          <div>
            C/C++ Programming
          </div>
          <div>
            Python Programming
          </div>
          <div>
            C# Programming
          </div>
        </div>
      </div>
    </main>
  );
}
