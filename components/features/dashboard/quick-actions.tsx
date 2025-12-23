import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { BarChart2, List, Plus, UserPlus } from 'lucide-react';

const QuickActions = () => {
  return (
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
  )
}

export default QuickActions