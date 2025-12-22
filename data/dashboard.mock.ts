
// ----------------- MOCK DATA -----------------

import { DashboardStats, ProjectProgress, RecentTask } from "@/lib/types";
import { AlertCircle, Check, ClipboardList, Users } from "lucide-react";



export const mockStats: DashboardStats = {
  totalTask: 125,
  totalBugs: 17,
  teamMembers: 12,
  totalTeams: 4,
  taskStatus: [
    { name: "To Do", count: 50 },
    { name: "In Progress", count: 40 },
    { name: "Review", count: 20 },
    { name: "Done", count: 15 },
  ],
  priorityCounts: [
    { name: "High", count: 40 },
    { name: "Medium", count: 60 },
    { name: "Low", count: 25 },
  ],
};

export const mockProjectProgress: ProjectProgress[] = [
  {
    projectName: "Client Website Redesign",
    totalTasks: 50,
    completedTasks: 35,
    totalBugs: 5,
    progressPercent: 70,
    daysLeft: 15,
    projectStatus: "Active",
  },
  {
    projectName: "Mobile App Development",
    totalTasks: 40,
    completedTasks: 25,
    totalBugs: 3,
    progressPercent: 62,
    daysLeft: 20,
    projectStatus: "Active",
  },
  {
    projectName: "API Integration",
    totalTasks: 30,
    completedTasks: 30,
    totalBugs: 0,
    progressPercent: 100,
    daysLeft: 0,
    projectStatus: "Completed",
  },
  {
    projectName: "Internal Dashboard",
    totalTasks: 25,
    completedTasks: 10,
    totalBugs: 2,
    progressPercent: 40,
    daysLeft: 10,
    projectStatus: "On Hold",
  },
];

export const mockRecentTasks: RecentTask[] = [
  {
    _id: "task-001",
    title: "Design homepage layout",
    status: "In Progress",
    priority: "High",
    createdAt: "2025-12-15T10:00:00Z",
    projectId: { _id: "project-001", projectName: "Client Website Redesign" },
  },
  {
    _id: "task-002",
    title: "Setup API endpoints",
    status: "To Do",
    priority: "Medium",
    createdAt: "2025-12-16T12:30:00Z",
    projectId: { _id: "project-003", projectName: "API Integration" },
  },
  {
    _id: "task-003",
    title: "Fix mobile login bug",
    status: "Review",
    priority: "High",
    createdAt: "2025-12-17T09:20:00Z",
    projectId: { _id: "project-002", projectName: "Mobile App Development" },
  },
  {
    _id: "task-004",
    title: "Update dashboard charts",
    status: "Done",
    priority: "Low",
    createdAt: "2025-12-18T11:45:00Z",
    projectId: { _id: "project-004", projectName: "Internal Dashboard" },
  },
];

export const completionSeries = [
  {
    name: "Planned",
    data: [30, 35, 40, 45, 50, 55],
  },
  {
    name: "Completed",
    data: [10, 15, 22, 28, 35, 42],
  },
];

export const liveTaskSeries = [3, 2]; 

export const mockTasks = [
  {
    description: 'Mark Johnson completed "Design Homepage Mockups" task.',
    timeAgo: '5 mins ago',
    icon: Check, // import { Check } from lucide-react
  },
  {
    description: 'Sarah Lee updated "Project Scope Document".',
    timeAgo: '1 hour ago',
    icon: ClipboardList,
  },
  {
    description: 'New team member, Alex Chen, joined "Marketing Campaign".',
    timeAgo: '3 hours ago',
    icon: Users,
  },
  {
    description: 'Task "Review Q3 Report" is now overdue.',
    timeAgo: 'Yesterday',
    icon: AlertCircle,
  },
  {
    description: 'You were assigned a new task: "Prepare client presentation".',
    timeAgo: '2 days ago',
    icon: ClipboardList,
  },
];

 export const chartSeries = [
    {
      name: "Projects",
      data: [4, 10, 8, 3], // Example data matching your image
    },
  ];
