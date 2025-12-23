'use client'
import React from 'react'
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { chartOptions } from '@/lib/charts/dashboard.charts';
import { chartSeries } from '@/lib/data/dashboard.mock';
import dynamic from 'next/dynamic';

const ProjectType = () => {
  return (
      <Card className="h-full">
          <CardHeader>
            <CardTitle>Projects by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              height={250}
            />
          </CardContent>
        </Card>
  )
}

export default ProjectType