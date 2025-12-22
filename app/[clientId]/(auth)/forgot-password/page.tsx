"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ResetForm() {
  const { clientId } = useParams<{ clientId: string }>();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // UI-only simulation
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-muted/20 via-muted/30 to-muted/40 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <Card className="bg-background rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
          <CardHeader className="text-center pt-10 pb-8 px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Image
                src="/logo-dark.jpg"
                alt="DailyTM Logo"
                width={140}
                height={140}
                className="rounded-md mb-4"
              />

              <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#424794] to-[#a2bf62] bg-clip-text text-transparent">
                Forgot Password
              </h1>

              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Enter your email and we’ll send you a reset link.
              </p>
            </motion.div>
          </CardHeader>

          <CardContent className="px-8 pb-12">
            {!success ? (
              /* ---------- FORM ---------- */
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-lg font-semibold text-[#424794] flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Address
                  </label>

                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-12 border-2 focus:border-[#a2bf62] rounded-lg"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 text-lg bg-gradient-to-r from-[#424794] to-[#424794] hover:opacity-90 text-white shadow-lg"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>

                <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <Link
                    href={`/${clientId}/login`}
                    className="text-[#424794] hover:text-[#a2bf62] underline"
                  >
                    Back to login
                  </Link>
                </div>
              </form>
            ) : (
              /* ---------- SUCCESS UI ---------- */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

                <h2 className="text-2xl font-semibold text-green-600">
                  Email sent successfully!
                </h2>

                <p className="text-gray-500 mt-2">
                  Please check your inbox for the password reset link.
                </p>

                <div className="mt-8">
                  <Link href={`/${clientId}/login`}>
                    <Button variant="outline">Back to Login</Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
