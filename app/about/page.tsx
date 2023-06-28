import Image from "next/image";
import React from "react";
import profilePic from "../../public/mab-mila.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col px-[24px] w-full p-2 sm:p-4 my-6 justify-center items-center gap-10 max-w-[900px]">
        <div className="flex max-w-[500px] sm:max-w-[400px]  justify-center items-center ">
          <Image
            src={profilePic}
            alt="Matthias Brose"
            sizes="sm:max-w-[1200px]"
            className="rounded-xl"
          />
        </div>
        <div className="flex-1 text-white">
          Matthias Brose ist ein wagemutiger Hobby-Fotograf mit einer großen
          Leidenschaft für das Einfangen magischer Momente mit seiner Kamera. Ob
          Surfer in den reißenden Fluten des Atlantiks, die schönsten Strände
          Frankreichs oder das bunte Treiben auf den bretonischen Märkten -
          Matthias ist immer bereit, die Schönheit an den ungewöhnlichsten Orten
          zu entdecken. <br /> <br />
          Eine besondere Leidenschaft entwickelte Matthias für die
          Tierfotografie. Er träumte davon, majestätische Löwen und elegante
          Gazellen in der Wildnis einzufangen. Doch das Schicksal hatte andere
          Pläne. Da Audierne, Hamburg oder Putzbrunn neben Enten, Pferden und
          Robben nur wenig Exotik zu bieten haben, fand Matthias ein oft wenig
          fotogenes Tier, welches wider Erwarten seine große Muse werden sollte
          – seine Hündin Mila. So entstanden zahlreiche wundervolle, bewegende
          und teilweise auch verstörende Fotografien von Mila und ihren vielen
          pelzigen Freunden. <br /> <br />
          Doch neben Landschaften, Veranstaltungen, Baustellen, Häfen, Tieren
          und Alltagsmotiven, gilt Matthias‘ große Leidenschaft dem
          Fotografieren seiner Familie. So entstanden in Vergangenheit die
          schönsten Gruppenbilder, fantastische Baby-Fotos und unvergessliche
          Hochzeitsbilder. Doch nicht nur das. Egal, ob auf Geburtstagspartys
          oder beim Weihnachtsessen, Matthias schafft es stets auf den Auslöser
          zu drücken, wenn mindestens ein Familienmitglied sich sein Essen
          gerade seinen Mund schiebt. Und auch diese Aufnahmen bleiben
          unvergesslich. <br /> <br />
          Matthias ist der Inbegriff eines Fotografen mit einer
          unerschütterlichen Hingabe und einer außergewöhnlichen Fähigkeit, die
          Welt auf unkonventionelle Weise zu betrachten. Egal, ob er hin und
          wieder für beabsichtigte oder unbeabsichtigte Lacher mit seinen
          Bildern sorgt, seine einzigartigen Werke bescheren uns immer große
          Freude und Unterhaltung. Und dafür sind wir alle mehr als dankbar!
          Happy birthday!
        </div>
      </div>
    </div>
  );
};

export default About;
