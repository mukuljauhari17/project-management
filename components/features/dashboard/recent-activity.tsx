import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockTasks } from '@/lib/data/dashboard.mock';


const RecentActivity = () => {
  return (
     <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockTasks.map((task, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start gap-2"
                >
                  <div className="flex items-center gap-2">
                    <task.icon className="h-4 w-4 text-blue-500" />
                    <p className="text-sm">{task.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {task.timeAgo}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
  )
}

export default RecentActivity