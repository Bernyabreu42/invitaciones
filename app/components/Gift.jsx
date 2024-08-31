import React from "react";
import Container from "./Container";
import Tabla from "./Tabla";
import Title from "./Title";
import { poltawski } from "../Font";

export default function Gift() {
  return (
    <Container className="bg-[url(/marcos/marco_13.jpg)] bg-cover">
      <div className="space-y-5 backdrop-blur-sm bg-white/30 py-10 px-5 rounded-lg">
        <article className="text-center">
          <Title text="Regalos" />
          <p className={`${poltawski.className}`}>
            El regalo es opcional, la asistencia obligatoria pero si quieres
            tener un detalle con nosotros te damos algunas ideas.
          </p>
          <Title text="Opcion 1" className="text-primary" />

          <div className="flex justify-center my-3">
            <Tabla />
          </div>

          <Title text="Opcion 2" className="text-primary" />
          <p className={`${poltawski.className}`}>
            ¿Quieres darnos una sorpresa? ¡Entonces te encantarán nuestros
            sobres mágicos! Déjanos volar con tu imaginación y ayúdanos a hacer
            realidad nuestros sueños.
          </p>
        </article>
      </div>
    </Container>
  );
}
