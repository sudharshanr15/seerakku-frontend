function PageHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-black pt-24">
      <div className="text-center layout-section-sm">{children}</div>
    </section>
  );
}

export default PageHero;
