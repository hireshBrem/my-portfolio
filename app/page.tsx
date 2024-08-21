import Tutorials from "@/components/Tutorials";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import TechStack from "@/components/TechStack";
import Recommendations from "@/components/Recommendations";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Home - DevFolio",
  description: "Page description",
};

export default async function Home() {
  return (
    <>
        <Articles />
        <Experience />
        {/* <Tutorials /> */}
        <TechStack />
        {/* <Recommendations /> */}
        {/* <Newsletter /> */}
    </>
  );
}
