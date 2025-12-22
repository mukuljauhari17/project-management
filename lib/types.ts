// --------------    Dashboard stat types interface -----------------
export interface TaskStatusCount {
  name: string;
  count: number;
}

export interface PriorityCount {
  name: string;
  count: number;
}

export interface DashboardStats {
  totalTask: number;
  totalBugs: number;
  teamMembers: number;
  totalTeams: number;
  taskStatus: TaskStatusCount[];
  priorityCounts: PriorityCount[];
}

export interface ProjectProgress {
  projectName: string;
  totalTasks: number;
  completedTasks: number;
  totalBugs: number;
  progressPercent: number;
  daysLeft: number;
  projectStatus: "Active" | "Completed" | "On Hold";
}

export interface RecentTask {
  _id: string;
  title: string;
  status: string;
  priority: string;
  createdAt: string;
  projectId: { _id: string; projectName: string };
}


export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface Attachment {
  _id: string;
  filename: string;
  originalName: string;
  url: string;
  size: number;
  mimeType: string;
}

export interface StatusLog {
  status: string;
  changedAt: string;
  changedBy: string;
  comment: string;
  _id: string;
}

export interface SubTask {
  _id: string;
  uid: string;
  taskId: string;
  title: string;
  estimatedHours: number;
  assignTo: User;
  createdBy: User;
  isArchived: boolean;
  comments: any[];
  statusLogs: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Task {
  _id: string;
  uid: string;
  clientId: string;
  workspaceId: string;
  title: string;
  description?: string;
  status: string;
  priority?: string;
  labels: string[];
  activeSprintId?: string;
  estimatedHours: number;
  assignTo?: User;
  createdBy: User;
  updatedBy?: User;
  isArchived: boolean;
  sprintLogsTrack: any[];
  attachments: Attachment[];
  comments: any[];
  statusLogs: StatusLog[];
  subTasks: SubTask[];
  subTasksCount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface StatusGroup {
  status: string;
  statusCount: number;
  statusTasks: Task[];
}

export interface Project {
  // ---------- IDs ----------
  _id?: string;
  uid?: string;
  clientId?: string;
  workspaceId?: string;
  teamId?: string;

  // ---------- Core Info ----------
  projectName?: string;
  description?: string;
  status?: ProjectStatus;
  priority?: string;
  activeSprint?: string;
  assignTo?: string;

  // ---------- Dates ----------
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  updatedAt?: string;

  // ---------- Task / Kanban Data ----------
  taskCounts?: number;
  subTasksCount?: number;
  tasks?: StatusGroup[];
}

type ProjectStatus =
  | "planning"
  | "in-progress"
  | "on-hold"
  | "completed"
  | "cancelled"
  | "archived";
  
export interface ProjectGroup {
  projectId: Project;
}