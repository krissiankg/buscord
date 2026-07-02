export default function AboutStory() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="gs-reveal">
            <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              Notre histoire
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              De l&apos;expérience ONG à un{' '}
              <span className="font-serif-italic text-accent">bureau d&apos;exécution</span> de confiance
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-gray-500 md:text-base">
              Après plusieurs années passées dans les ONG et les bureaux d&apos;études, le promoteur de BUSCORD a voulu
              mettre son expertise en montage de projets, suivi-contrôle et construction au profit de son pays.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-gray-500 md:text-base">
              L&apos;ambition : concevoir des projets humanitaires et de développement au profit des communautés pauvres et
              vulnérables, en partenariat avec des bailleurs internationaux, des ONG et des collectivités locales.
            </p>

            <div className="flex flex-wrap gap-8 border-t border-gray-100 pt-8">
              <div>
                <h3 className="text-4xl font-bold text-primary md:text-5xl">6+</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">Projets majeurs livrés</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary md:text-5xl">440M+</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">FCFA de projets montés</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary md:text-5xl">15+</h3>
                <p className="mt-1 text-sm font-medium text-gray-500">Années d&apos;expérience</p>
              </div>
            </div>
          </div>

          <div className="gs-reveal relative">
            <img
              src="/images/projects/yamwaya-inauguration.jpg"
              alt="Inauguration du Lycée Yamwaya"
              className="h-[400px] w-full rounded-3xl object-cover md:h-[500px]"
            />
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl md:-left-8 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-lg">
                  BF
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">Burkina Faso</p>
                  <p className="text-xs text-gray-500">Ancrage local, standards internationaux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
