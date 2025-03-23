import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'Tech Corp',
    position: 'Senior Frontend Developer',
    period: '2021 - Present',
    description:
      'Led the development of multiple high-impact web applications using React and Next.js.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    company: 'StartupX',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description:
      'Built and maintained scalable web applications using modern JavaScript frameworks.',
    skills: ['Node.js', 'Express', 'React', 'MongoDB'],
  },
];

export default function Experience() {
  return (
    <div className="space-y-12 flex flex-row gap-6">
        <div >
          <Badge
            variant="outline"
            className="text-secondary border-secondary mb-4"
          >
            EXPERIENCES
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Highlights of My Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Here are some of my work experiences that shaped my journey.
          </p>
        </div>

        <div className=" space-y-8">
          {/* Tiket.com Experience */}
          <div className="bg-neutral-900 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=80"
                alt="Tiket.com"
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Data Engineer</h3>
                    <p className="text-muted-foreground">@ tiket.com</p>
                  </div>
                  <span className="text-muted-foreground">
                    Feb 2022 — Present
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">
                    Associate Data Engineer (Feb 2023 — Present)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      Developed real-time dashboards and ad-hoc data mining
                      systems.
                    </li>
                    <li>
                      Built scalable web services with Docker, Terraform & GCP.
                    </li>
                    <li>
                      Improved performance & security through reverse
                      engineering.
                    </li>
                    <li>
                      Managed data pipelines for hotel & flight pricing in
                      BigQuery.
                    </li>
                  </ul>

                  <h4 className="font-medium mt-4">
                    Intern Data Engineer (Feb 2022 — Jan 2023)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      Built a PWA with Next.js, documented components, and
                      conducted E2E testing.
                    </li>
                    <li>
                      Optimized hotel data collection, cutting costs by 90%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other Experiences */}
          <div className="bg-neutral-900 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=80"
                alt="Decorps"
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex justify-between items-start flex-1">
                <div>
                  <h3 className="text-xl font-semibold">Founder</h3>
                  <p className="text-muted-foreground">@ decorps</p>
                </div>
                <span className="text-muted-foreground">
                  Aug 2022 — Apr 2024
                </span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=80"
                alt="Elnusa"
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex justify-between items-start flex-1">
                <div>
                  <h3 className="text-xl font-semibold">Full Stack Engineer</h3>
                  <p className="text-muted-foreground">@ PT Elnusa Tbk</p>
                </div>
                <span className="text-muted-foreground">
                  Apr 2021 — Feb 2023
                </span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=80"
                alt="Agni"
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex justify-between items-start flex-1">
                <div>
                  <h3 className="text-xl font-semibold">Full Stack Engineer</h3>
                  <p className="text-muted-foreground">@ PT Agni</p>
                </div>
                <span className="text-muted-foreground">
                  Oct 2021 — Dec 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
