
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

      {/* Section - 1 */}
      <StatsGrid />

      {/* Section - 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <CompletionChart />
        <LiveTaskChart />
      </div>

      {/* Section - 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <RecentActivity />
        <QuickActions />
      </div>

      {/* Section - 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <ProjectType />
        <ProjectProgress />
      </div>

      {/* section - 5 */}
      <PinnedProjects />
    </>
  );
}
