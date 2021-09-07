import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";

export default function Description({ lang }) {
  const descriptions = {
    fr: ` Bonjour c'est Fatah, developpeur fullstack autodidacte et linux
        enthousiate qui développe actuellement sous Django et React ! Vous pouvez voir ci-dessous certains de mes projets.`,
    en: `Hello I'm Fatah, a self taught full stack software developper and  linux enthusiast
        who loves Django and React ! I'll be describing some of my coding projects here.`,
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

      <div className="font-semibold dark:text-white">{descriptions[lang]}</div>
    </div>
  );
}
