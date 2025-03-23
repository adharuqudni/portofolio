import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from './ui/badge';
import { CodeIcon, ServerIcon } from 'lucide-react';
import { HopIcon as PhpIcon } from 'lucide-react';
import { Button } from './ui/button';
import SplitText from './ui/split-text';
import ShinyText from './ui/shiny-text';
import TrueFocus from './ui/focus-text';

export default function AboutMe() {
  return (
    <div className="min-h-screen ">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-[#2C5D4B] to-secondary">
              <img
                src="static/profile.png"
                alt="Profile"
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="text-left">
            <div className="space-y-6">
              <div>
                <Badge
                  variant="outline"
                  className="text-secondary border-secondary mb-4"
                >
                  ABOUT ME
                </Badge>

                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                  <ShinyText
                    className="mb-5"
                    text="Experienced!"
                    disabled={false}
                    speed={3}
                  />

                  <br />
                  <div className="text-primary mt-4">
                    <TrueFocus
                      sentence="Data-Engineer Fullstack-Developer"
                      manualMode={false}
                      blurAmount={5}
                      borderColor="#FF885B"
                      animationDuration={1}
                      pauseBetweenAnimations={2}
                    />
                  </div>
                </h1>
                <p className="text-neutral-500 text-lg">
                  Hello! I&apos;m Annas Adharuqdni, I am an experienced Data
                  Engineer with a strong background in developing scalable data
                  architectures using Docker, Terraform, and Google Cloud. I am
                  skilled in reverse engineering, web scraping, and optimizing
                  data pipelines for pricing calculations at PT Global Tiket
                  Network. Previously led a team of 20+ as a Product Manager at
                  decorps, mentoring members to build SaaS applications. Also
                  developed enterprise systems at PT Elnusa Tbk, winning first
                  place in the CIP Forum Elnusa 2021.
                </p>
              </div>

              <Button className="rounded-full px-8" size="lg">
                See My Resume
              </Button>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm rounded-full"
                >
                  <PhpIcon className="w-4 h-4 mr-2" />
                  PHP
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm rounded-full"
                >
                  <CodeIcon className="w-4 h-4 mr-2" />
                  Laravel
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm rounded-full"
                >
                  <ServerIcon className="w-4 h-4 mr-2" />
                  Next.js
                </Badge>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm rounded-full"
                >
                  <ServerIcon className="w-4 h-4 mr-2" />
                  Express.js
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
