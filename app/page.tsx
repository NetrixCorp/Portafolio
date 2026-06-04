export default function Home() {
  return (
    <>
      {/* Secciones se integran aquí en orden */}
      {/* <Hero /> */}
      {/* <Servicios /> */}
      {/* <Proceso /> */}
      {/* <CasosDeExito /> */}
      {/* <PorQueNetrix /> */}
      {/* <SobreNosotros /> */}
      {/* <Contacto /> */}

      {/* Placeholder mientras se construyen las secciones */}
      <section className="min-h-screen flex items-center justify-center container-netrix">
        <div className="text-center space-y-4">
          <p className="font-mono text-netrix-gray text-sm tracking-widest uppercase">
            En construcción
          </p>
          <h1 className="font-display text-display-lg text-white">
            NET<span className="text-netrix-red">RIX</span>
          </h1>
          <p className="text-netrix-gray font-body text-lg">
            Tu negocio merece una presencia que vende.
          </p>
        </div>
      </section>
    </>
  )
}
