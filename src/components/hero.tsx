export function Hero() {
  return (
    <header className="relative flex flex-col items-center px-5 pt-6 text-center sm:pt-8">
      <img
        src="/latam-logo.png"
        alt="Brasão da guilda LATAM 友"
        className="hero-logo"
        width={640}
        height={640}
      />

      <p className="live-badge">
        <span className="live-dot" />
        Recrutamento aberto
      </p>

      <h1 className="font-display mt-4 max-w-xl text-4xl leading-none tracking-wide text-silver text-balance sm:text-5xl">
        Formulário de recrutamento
      </h1>

      <p className="mt-3 max-w-md text-base leading-normal text-muted-foreground text-pretty">
        Quer fazer parte da LATAM 友? Preencha com informações verdadeiras. A
        liderança analisa o perfil e entra em contato pelo WhatsApp.
      </p>

      <a href="#formulario" className="cta-jump mt-5">
        Preencher candidatura
      </a>
    </header>
  );
}
