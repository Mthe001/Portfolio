import About from "@/components/About/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact/Contact";
import Showcase from "@/components/ShowCase/Showcase";

import { ScrollProgress } from "@/components/ui/scroll-progress";


export default function Home() {
  return (
    <div className="min-h-screen h-auto">
      <ScrollProgress />
      <Banner/>
      <About/>
      <Showcase/>
      <Contact/>
    </div>
  );
}
