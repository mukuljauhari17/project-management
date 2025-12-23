import { pinnedprojects } from '@/lib/data/dashboard.mock'
import Image from 'next/image'
import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PinnedProjects = () => {
  return (
      <section className="space-y-4 mt-4">
        <h2 className="text-lg font-semibold">Pinned Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {pinnedprojects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              {/* Image */}
              <div className="relative h-32 w-full bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="space-y-4 p-4">
                {/* Title */}
                <h3 className="font-medium">{project.title}</h3>
                {/* Progress + Status */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    {/* Status + Percentage together */}
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                        {project.status}
                      </span>
                      <span className="text-muted-foreground">
                        {project.progress}% Complete
                      </span>
                    </div>
                  </div>

                  {/* Blue Progress Bar */}
                  <div className="h-2 w-full rounded-full bg-blue-100">
                    <div
                      className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-semibold"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
  )
}

export default PinnedProjects