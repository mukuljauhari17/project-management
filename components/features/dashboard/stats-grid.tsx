'use client'
import StatCardSkeleton from '@/components/common/skelton/StatCardSkeleton';
import StatCard from '@/components/common/StatCard'
import { mockStats } from '@/lib/data/dashboard.mock';
import { Clock, LayoutDashboard, ListTodo, Users } from 'lucide-react'
import React, { useState } from 'react'

const StatsGrid = () => {
     const stats = mockStats;
    const [loading, setLoading] = useState(false);
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
  )
}

export default StatsGrid