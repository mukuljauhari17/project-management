import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Plus, Rocket, Search } from 'lucide-react';

const WelcomeCard = () => {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-4 p-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Good morning, John Doe!</h2>
          <p className="text-sm text-muted-foreground">
            Quickly access your recent activities, essential metrics, and
            start new initiatives.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 ">
          <Button className="gap-2 bg-blue-500 text-white hover:bg-blue-600">
            <Plus className="h-4 w-4" />
            Button 1
          </Button>

          <Button variant="outline" className="gap-2">
            <Rocket className="h-4 w-4" />
            Button 2
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default WelcomeCard