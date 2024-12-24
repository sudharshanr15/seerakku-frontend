function PageHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-black py-32 pt-56">
      <div className="text-center max-w-[540px] mx-auto">{children}</div>
    </section>
  );
}

export default PageHero;
