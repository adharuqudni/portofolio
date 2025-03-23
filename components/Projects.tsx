import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ImageIcon } from 'lucide-react';
import SpotlightCard from './ui/spotlight-card';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://project-demo.com',
  },
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-12">
        <div>
          <Badge
            variant="outline"
            className="text-secondary border-secondary mb-4"
          >
            PROJECTS
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Optimizing Data Pipelines & Scalable Architecture
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of Data Engineering projects focused on building
            efficient data pipelines and scalable architectures.
          </p>
        </div>

        <div className="space-y-8">
          {/* Project 1 */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(255, 240, 222, 0.2)"
          >
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 p-3 ">
                <div className="aspect-video bg-neutral-800 flex items-center justify-center self-center">
                  <ImageIcon className="w-12 h-12 text-neutral-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">
                    Computer Vision with YOLO V8 for Road Hole Detection
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Overview</h4>
                      <p className="text-muted-foreground">
                        Developed a computer vision model using YOLO V8 to
                        automatically detect and classify holes in roads for a
                        manual automation process. This solution was designed to
                        streamline road inspection procedures and reduce human
                        labor.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>
                          Achieved high accuracy in detecting holes from road
                          images.
                        </li>
                        <li>
                          Reduced inspection time and cost by automating the
                          detection process.
                        </li>
                        <li>
                          Real-time detection on a pre-trained dataset of road
                          images.
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      <Badge variant="secondary">YOLOv8</Badge>
                      <Badge variant="secondary">OpenCV</Badge>
                      <Badge variant="secondary">TensorFlow</Badge>
                      <Badge variant="secondary">PyTorch</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(255, 240, 222, 0.2)"
          >
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 p-3 self-center">
                <div className="aspect-video bg-neutral-800 flex items-center justify-center self-center">
                  <ImageIcon className="w-12 h-12 text-neutral-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">
                    Computer Vision with YOLO V8 for Road Hole Detection
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Overview</h4>
                      <p className="text-muted-foreground">
                        Developed a computer vision model using YOLO V8 to
                        automatically detect and classify holes in roads for a
                        manual automation process. This solution was designed to
                        streamline road inspection procedures and reduce human
                        labor.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>
                          Achieved high accuracy in detecting holes from road
                          images.
                        </li>
                        <li>
                          Reduced inspection time and cost by automating the
                          detection process.
                        </li>
                        <li>
                          Real-time detection on a pre-trained dataset of road
                          images.
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      <Badge variant="secondary">YOLOv8</Badge>
                      <Badge variant="secondary">OpenCV</Badge>
                      <Badge variant="secondary">TensorFlow</Badge>
                      <Badge variant="secondary">PyTorch</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        <div className="text-center">
          <Button className="rounded-full px-8">Load More</Button>
        </div>
      </div>
    </section>
  );
}
