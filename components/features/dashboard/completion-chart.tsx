'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { completionChartOptions } from '@/lib/charts/dashboard.charts';
import { completionSeries } from '@/lib/data/dashboard.mock';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CompletionChart = () => {
  return (
   <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Project Completion Rate</CardTitle>
              <p className="text-sm text-muted-foreground">
                Monthly overview of task completion across all projects.
              </p>
            </CardHeader>

            <CardContent>
              <Chart
                options={completionChartOptions}
                series={completionSeries}
                type="line"
                height={300}
              />
            </CardContent>
          </Card>
        </div>
  )
}

export default CompletionChart