import React from "react";

function CollageBanner({
  imageUrl = "https://placehold.co/1600x900?text=Figma+Collage+Placeholder",
  alt = "",
}) {
  return (
    <section className="relative pb-10">
      {/* Full-width collage background, similar to the home hero */}
      {/* TODO: Replace this placeholder URL with your exported Figma collage image. */}
      <div
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      {/* White gradient overlay to keep content readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40" />

      {/* Spacer to give the band height and match layout */}
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="h-[220px] sm:h-[260px] md:h-[320px]" />
      </div>
    </section>
  );
}

export default CollageBanner;

