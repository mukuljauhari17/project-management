'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { liveTaskOptions } from '@/lib/charts/dashboard.charts';
import { liveTaskSeries } from '@/lib/data/dashboard.mock';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LiveTaskChart = () => {
  return (
        <div className="md:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Live Task Status</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tasks due today vs. completed.
              </p>
            </CardHeader>

            <CardContent className="flex flex-col items-center justify-center h-[300px]">
              {/* Donut */}
              <Chart
                options={liveTaskOptions}
                series={liveTaskSeries}
                type="donut"
                height={180}
              />

              {/* Stats BELOW donut */}
              <div className="mt-6 w-full max-w-xs space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">Completed</span>
                  </div>
                  <span className="font-semibold">3</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-gray-300" />
                    <span className="text-muted-foreground">Due Today</span>
                  </div>
                  <span className="font-semibold">5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  )
}

export default LiveTaskChart