import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
const HeroSection = () => {
  return (
    <section className="md:py-10 py-10 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our FullStack Bootcamp</h1>
        <p className="text-lg mb-4">
          Unlock Your Potential with Our Full-Stack Web Development Bootcamp
        </p>
        <p className="text-center text-lg">Course duration: 9 month</p>

        <Badge color="red" className="p-4 mt-4 text-lg">class starting from May-06-2024</Badge>


        
        <div className="flex gap-4 justify-center pt-5">
          <Button asChild variant="destructive"><Link href='/auth/register'>Get Started</Link></Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
