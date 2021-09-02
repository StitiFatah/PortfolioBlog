import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";

export default function Description({ lang }) {
  const descriptions = {
    fr: ` Bonjour c'est Fatah, developpeur fullstack autodidacte et linux
        enthusiate qui travaille actuellement sous Django et React ! Vous pouvez
        me contacter via l'onglet "contact" !`,
    en: `Hello I'm Fatah, a full stack software developper and a linux enthusiast
        who loves Django and React ! You can contact me through the contact
        section !`,
  };

  return (
    <div className="flex flex-col items-center mt-2 mb-6">
      <div className="mb-4">
        <Image
          className="rounded-full"
          height={80}
          width={80}
          src="/images/avatar.png"
          alt="avatar"
        />
      </div>

      <div className="font-semibold">{descriptions[lang]}</div>
    </div>
  );
}
