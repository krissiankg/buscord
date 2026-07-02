export default function CaseStudyGallery({ study }) {
  if (!study.gallery?.length) return null;

  return (
    <section className="bg-gray-50 px-4 py-10 sm:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="gs-reveal mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
            Photos du <span className="font-serif-italic text-accent">projet</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-500 md:text-base">
            Images du terrain issues de la présentation BUSCORD et des archives du projet.
          </p>
        </div>

        <div className="gs-reveal grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {study.gallery.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[240px] md:h-[260px]"
                loading="lazy"
              />
              <figcaption className="p-4 text-sm leading-relaxed text-gray-600">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
