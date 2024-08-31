import React from "react";
import Container from "./Container";
import { contrailOne, cookie, greatVibes } from "../Font";

export default function WhereAndWhen() {
  return (
    <Container className="bg-[url(/marcos/marco_2.webp)] bg-no-repeat bg-cover md:bg-contain ">
      <article className="flex flex-col items-center space-y-5">
        <div className="flex flex-col items-center">
          <img src="/imagenes/ceremonia.png" className="w-32 h-32" />
          <h3 className={`${greatVibes.className} text-4xl text-primary`}>
            Ubicación
          </h3>
        </div>
        <p className={`${cookie.className} block text-center text-4xl`}>
          Patios y Mas, C. 13 4, Santo Domingo Este 11706
        </p>
        <h3 className={`${greatVibes.className} text-4xl text-primary`}>
          Inicio
        </h3>
        <p className={`${cookie.className} block text-center text-4xl`}>
          Sábado 28 de Diciembre 2024
        </p>
        <p className={`${contrailOne.className} block text-center text-5xl`}>
          3:30 P.M
        </p>

        <a
          href="https://maps.app.goo.gl/isHB6oK9SMDNLZYb9"
          target="_blank"
          className="border rounded-lg p-2 px-5 flex gap-2 items-center shadow border-primary text-primary"
        >
          <span>VER EN GOOGLE MAPS</span>
          <img src="/imagenes/location.png" alt="" className="w-6 h-6" />
        </a>
      </article>
    </Container>
  );
}
