import { BookForm } from "@/components/book-form";
import { HeroSlider } from "@/components/hero-slider";

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <div className="container relative">
        <div className="lg:absolute lg:z-30 lg:left-0 lg:-top-12 lg:right-0 p-4 lg:p-0 mt-4 w-full  bg-accent/20 lg:shadow-xl">
          <BookForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
