"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  LayoutDashboard,
  ListTodo,
  Users,
  Plus,
  List,
  UserPlus,
  BarChart2,
} from "lucide-react";

import PageHeader from "@/components/common/PageHeader";
import StatCard from "@/components/common/StatCard";
import StatCardSkeleton from "@/components/skelton/StatCardSkeleton";
import {
  chartSeries,
  completionSeries,
  liveTaskSeries,
  mockProjectProgress,
  mockRecentTasks,
  mockStats,
  mockTasks,
} from "@/data/dashboard.mock";
import { mockProjects } from "@/data/projects.mock";
import ProjectProgressCardSkeleton from "@/components/skelton/ProjectProgressCardSkeleton";
import {
  chartOptions,
  completionChartOptions,
  liveTaskOptions,
} from "@/lib/chartsConfig";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const stats = mockStats;
  const progress = mockProjectProgress;

  // Filter projects (projectName is guaranteed, so use !)
  const filteredProjects = mockProjects.filter((p) =>
    p.projectName!.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProjectSelect = (name: string) => {
    setSelectedProject(name);
  };

  if (loading && !stats) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        <StatCardSkeleton size="large" variant="light" />
        <StatCardSkeleton size="large" variant="lightRed" />
        <StatCardSkeleton size="large" variant="lightGreen" />
        <StatCardSkeleton size="large" variant="lightYellow" />
      </div>
    );
  }

  if (!stats) return null;

  return (
    <>
      {/* Header */}
      <PageHeader title="Dashboard" breadcrumbs={[]} />

      {/* Section - 1 */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {/* Stat Cards */}
        <StatCard
          label="Total Active Projects"
          value="12"
          subText="↑ +5.2% vs. last month"
          size="medium"
          valueSize="lg"
          icon={<LayoutDashboard className="h-4 w-4 text-blue-500" />}
        />

        <StatCard
          label="Tasks In Progress"
          value="85"
          subText="↑ +10.1% vs. last month"
          size="medium"
          valueSize="lg"
          icon={<ListTodo className="h-4 w-4 text-yellow-500" />}
        />

        <StatCard
          label="Tasks Overdue"
          value="3"
          subText="↓ -25.0% vs. last month"
          size="medium"
          valueSize="lg"
          icon={<Clock className="h-4 w-4 text-red-500" />}
        />

        <StatCard
          label="Team Utilization Rate"
          value="78%"
          subText="vs. last month"
          size="medium"
          icon={<Users className="h-4 w-4 text-green-500" />}
        />
      </div>

      {/* Section - 2 */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Project Completion Rate Card */}
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

        {/* Live task donut  */}
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
      </div>

      {/* Section - 3 */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Recent Activity Card */}
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

        {/* Quick Actions Card */}
        <div className="md:col-span-1">
          <Card className="h-full p-3">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button className="w-full flex items-left gap-2 justify-start bg-blue-500 text-white hover:bg-blue-600">
                <Plus className="w-4 h-4" />
                Create New Project
              </Button>
              <Button className="w-full flex items-center gap-2 justify-start bg-blue-500 text-white hover:bg-blue-600">
                <List className="w-4 h-4" />
                Add New Task
              </Button>
              <Button className="w-full flex items-center gap-2 justify-start bg-blue-500 text-white hover:bg-blue-600">
                <UserPlus className="w-4 h-4" />
                Invite Team Member
              </Button>
              <Button className="w-full flex items-center gap-2 justify-start bg-blue-500 text-white hover:bg-blue-600">
                <BarChart2 className="w-4 h-4" />
                View Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section - 4 */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Project by type chart */}
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

        {/* Project Progress Card start */}
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
      </div>
    </>
  );
}
