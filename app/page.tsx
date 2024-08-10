import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-gray-900 rounded-xl flex flex-col h-[32rem] w-[40rem] p-8 gap-4">
        <div className="w-full text-center text-7xl mb-4">
          Arlow (5761)
        </div>
        <div className="flex gap-4">
          <Image
            src="/ppsparta.png"
            width={0}
            height={0}
            alt="foto"
            sizes="100vw"
            className="min-h-48 min-w-48 h-48 w-48 object-cover"
          />
          <div className="h-full text-xl text-center content-center">
            My name is Arlow Emmanuel Hergara and people usually call me Arlow. I am a student at Institut Teknologi Bandung majoring in Informatics.
          </div>
        </div>
        <div className="w-full text-center text-3xl mt-4 mb-1">
          Contact Me
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            arlow5761@gmail.com (e-mail)
          </div>
          <Link href="https://github.com/Arlow5761">
            https://github.com/Arlow5761 (github)
          </Link>
          <Link href="https://arlow5761.itch.io/">
            https://arlow5761.itch.io/ (itch.io)
          </Link>
        </div>
      </div>
    </div>
  );
}
