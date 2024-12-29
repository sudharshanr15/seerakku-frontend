import Works from "@/components/works/Works";
import GalleryList from "@/features/gallery/GalleryList";
import Hero from "@/features/gallery/Hero";

function Page() {
  return (
    <main>
      <Hero />
      <GalleryList />
      <Works />
    </main>
  );
}

export default Page;
