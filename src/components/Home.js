import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex w-screen h-screen flex-wrap justify-between p-8 gap-y-8">
      <h1 className="text-8xl w-4/5">Math Magicians</h1>
      <nav className="flex w-1/5 justify-between text-lg">
        <Link to="/">Home</Link>
        <p>|</p>
        <Link to="/calculator">Calculator</Link>
        <p>|</p>
        <Link to="/quote">Quote</Link>
      </nav>
      <h2 className="text-5xl w-full">Welcome to our Page!</h2>
      <h3>
        &emsp; Balzac, en su novela Sarrasine, hablando de un castrado disfrazado de mujer,
        escribe lo siguiente: “Era la mujer, con sus miedos repentinos, sus caprichos irracionales,
        sus instintivas turbaciones, sus audacias sin causa, sus bravatas y su exquisita delicadeza
        de sentimientos”. ¿Quién está hablando así? ¿El héroe de la novela, interesado en
        ignorar al castrado que se esconde bajo la mujer? ¿El individuo Balzac, al que la
        experiencia personal ha provisto de una filosofía sobre la mujer? ¿El autor Balzac,
        haciendo profesión de ciertas ideas “literarias” sobre la feminidad? ¿La sabiduría
        universal? ¿La psicología romántica? Jamás será posible averiguarlo, por la sencilla
        razón de que la escritura es la destrucción de toda voz, de todo origen. La escritura es
        ese lugar neutro, compuesto, oblicuo, al que va a parar nuestro sujeto, el blanco-y-negro
        en donde acaba por perderse toda identidad, comenzando por la propia identidad del
        cuerpo que escribe.
        <br />
        <br />
        &emsp; Siempre ha sido así, sin duda: en cuanto un hecho pasa a ser relatado, con fines
        intransitivos y no con la finalidad de actuar directamente sobre lo real, es decir, en
        definitiva, sin más función que el propio ejercicio del símbolo, se produce esa ruptura,
        la voz pierde su origen, el autor entra en su propia muerte, comienza la escritura. No
        obstante, el sentimiento sobre este fenómeno ha sido variable; en las sociedades
        etnográficas, el relato jamás ha estado a cargo de una persona, sino de un mediador,
        chamán o recitador, del que se puede, en rigor, admirar la “performance” (es decir, el
        dominio del código narrativo), pero nunca el “genio”. El autor es un personaje moderno,
        producido indudablemente por nuestra sociedad, en la medida que ésta, al salir de la
        Edad Media y gracias al empirismo inglés, el racionalismo francés y la fe personal de la
        Reforma, descubre el prestigio del individuo o dicho de manera más noble, de la
        “persona humana”. Es lógico, por lo tanto, que en materia de la literatura sea el
        positivismo, resumen y resultado de la ideología capitalista, el que haya concedido la
        máxima importancia a la “persona” del autor. Aún impera el autor en los manuales de
        historia literaria, las bibliografías de escritores, las entrevistas en revistas, y hasta en
        la conciencia misma de los literatos, que tienen buen cuidado de reunir su persona con su
        obra gracias a su diario íntimo; la imagen de la literatura que es posible encontrar en la
        cultura común tiene su centro, tiránicamente, en el autor, su persona, su historia, sus
        gustos, sus pasiones; la crítica aún consiste, la mayoría de las veces, en decir que la obra
        de Baudelaire es el fracaso de Baudelaire como hombre; la de Van Gogh, su locura; la
        de Tchaikovsky, su vicio: la explicación de la obra se busca siempre en el que la ha
        producido, como si, a través de la alegoría más o menos transparente de la ficción, fuera,
        en definitiva, siempre, la voz de una sola y misma persona, el autor, la que estaría
        entregando sus “confidencias”.
      </h3>
    </div>
  );
}
