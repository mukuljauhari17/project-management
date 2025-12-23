
import PageHeader from "@/components/common/PageHeader";
import WelcomeCard from "@/components/features/dashboard/welcome-card";
import StatsGrid from "@/components/features/dashboard/stats-grid";
import CompletionChart from "@/components/features/dashboard/completion-chart";
import LiveTaskChart from "@/components/features/dashboard/live-task-chart";
import RecentActivity from "@/components/features/dashboard/recent-activity";
import QuickActions from "@/components/features/dashboard/quick-actions";
import PinnedProjects from "@/components/features/dashboard/pinned-projects";
import ProjectProgress from "@/components/features/dashboard/project-progress";
import ProjectType from "@/components/features/dashboard/project-type";

export default function Home() {

  return (
    <>
      {/* Header */}
      <PageHeader title="Dashboard" breadcrumbs={[]} />

      {/* Welcome Card */}

      <WelcomeCard />

    </>
  );
}
