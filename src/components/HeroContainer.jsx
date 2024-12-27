export default function HeroContainer({ title, desc }) {
  return (
    <section className="bg-black py-32 px-5">
      <div className="text-center max-w-[540px] mx-auto">
        <h1 className=" heading-2 sm:heading-1 mb-4 text-white">{title}</h1>
        <p className="text-lg text-center text-white">{desc}</p>
      </div>
    </section>
  );
}
