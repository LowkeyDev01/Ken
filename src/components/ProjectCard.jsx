const ProjectCard = ({ image, genre, title, subtext, link }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 items-center rounded-lg border border-black/10 bg-white p-3 md:p-4">

      {/* Project Image */}
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/9] object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="flex h-full flex-col justify-between font-seven py-1 md:py-2">

        <div>
          <p className="text-[0.6em] uppercase tracking-[0.16em] text-black/40">
            {genre}
          </p>

          <h3 className="mt-2 text-[1.05em] tracking-tight text-black">
            {title}
          </h3>

          <p className="mt-2.5 max-w-[280px] text-[0.72em] leading-relaxed text-black/45">
            {subtext}
          </p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-fit text-[0.7em] text-black transition-opacity hover:opacity-50"
        >
          View Project ↗
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;