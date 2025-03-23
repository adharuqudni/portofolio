import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const recommendations = [
  {
    name: "Sarah Johnson",
    position: "Engineering Manager at Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    text: "An exceptional developer who consistently delivers high-quality work. Their technical expertise and problem-solving skills are outstanding."
  },
  {
    name: "Michael Chen",
    position: "CTO at StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    text: "A talented developer with a great eye for detail. They have a unique ability to transform complex requirements into elegant solutions."
  }
];

export default function Recommendations() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
    <div className="space-y-12">
      <div>
        <Badge variant="outline" className="text-secondary border-secondary mb-4">
          RECOMMENDATIONS
        </Badge>
        <h2 className="text-4xl font-bold mb-4">
          What Others Say About My Work
        </h2>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {/* Recommendation 1 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-neutral-900 rounded-lg p-8 h-full">
              <p className="text-lg text-muted-foreground mb-8">
                "Annas is an exceptional data engineer who consistently delivers high-quality solutions. His expertise in building scalable data pipelines and implementing machine learning models has been invaluable to our team."
              </p>
              <div>
                <h4 className="text-xl font-semibold">Sarah Chen</h4>
                <p className="text-muted-foreground">Lead Data Scientist @ Tech Corp</p>
              </div>
            </div>
          </CarouselItem>

          {/* Recommendation 2 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-neutral-900 rounded-lg p-8 h-full">
              <p className="text-lg text-muted-foreground mb-8">
                "Working with Annas was a great experience. His deep understanding of data engineering principles and attention to detail resulted in significant improvements to our data infrastructure."
              </p>
              <div>
                <h4 className="text-xl font-semibold">James Wilson</h4>
                <p className="text-muted-foreground">Engineering Manager @ DataFlow</p>
              </div>
            </div>
          </CarouselItem>

          {/* Recommendation 3 */}
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-neutral-900 rounded-lg p-8 h-full">
              <p className="text-lg text-muted-foreground mb-8">
                "Annas brings both technical expertise and innovative thinking to every project. His contributions to our machine learning infrastructure have been transformative."
              </p>
              <div>
                <h4 className="text-xl font-semibold">Emily Rodriguez</h4>
                <p className="text-muted-foreground">AI Research Lead @ ML Solutions</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
  );
}