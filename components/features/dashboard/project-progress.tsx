'use client'
import ProjectProgressCardSkeleton from '@/components/common/skelton/ProjectProgressCardSkeleton'
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockProjectProgress } from '@/lib/data/dashboard.mock';
import React, { useState } from 'react'

const ProjectProgress = () => {
      const progress = mockProjectProgress;
      const [loading, setLoading] = useState(false);
      
  return (
   <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
          </CardHeader>

          <CardContent className="space-y-5 max-h-96 overflow-y-auto shadow-md">
            {loading && <ProjectProgressCardSkeleton />}

            {!loading &&
              progress?.map((proj) => (
                <div key={proj.projectName} className=" pb-3 last:border-b-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium text-[15px]">
                      {proj.projectName}
                    </h3>

                    <Badge
                      variant="outline"
                      className={
                        proj.projectStatus === "Active"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }
                    >
                      {proj.projectStatus}
                    </Badge>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${proj.progressPercent}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-sm mt-1 text-gray-600">
                    <span>
                      {proj.completedTasks}/{proj.totalTasks} tasks
                    </span>
                    <span>{proj.daysLeft} days left</span>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
  )
}

export default ProjectProgress