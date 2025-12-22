"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const router = useRouter();
  const params = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
 const { clientId } = useParams<{ clientId: string }>();


  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Please enter your email"),
      password: Yup.string().required("Please enter your password"),
    }),
    onSubmit: () => {
      // UI-only success simulation
      setLoginSuccess(true);
    },
  });

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
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
              <img
                src="/logo-dark.jpg"
                alt="Client Logo"
                width={140}
                height={140}
                className="rounded-md mb-4"
              />
              <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#424794] to-[#a2bf62] bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Please enter your login credentials to continue.
              </p>
            </motion.div>
          </CardHeader>

          <CardContent className="px-8 pb-12">
            {!loginSuccess ? (
              <form onSubmit={validation.handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="text-lg font-semibold text-[#424794] flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#424794]" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={validation.values.email}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    placeholder="Enter your email"
                    className="h-12 border-2 focus:border-[#a2bf62] text-md rounded-lg"
                  />
                  {validation.touched.email && validation.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {validation.errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="text-lg font-semibold text-[#424794] flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#424794]" />
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={validation.values.password}
                      onChange={validation.handleChange}
                      onBlur={validation.handleBlur}
                      placeholder="Enter your password"
                      className="h-12 border-2 focus:border-[#a2bf62] text-md rounded-lg pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#424794]"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {validation.touched.password &&
                    validation.errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {validation.errors.password}
                      </p>
                    )}
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full text-lg h-12 bg-gradient-to-r from-[#424794] to-[#424794] hover:from-[#424794]/90 hover:to-[#424794]/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
                  >
                    Login
                  </Button>
                </div>

                {/* Forgot Password */}
                <div className="text-center mt-6">
                  <Link
                    href={`/${clientId}/forgot-password`}
                    className="text-[#424794] hover:text-[#a2bf62] font-medium underline transition-colors duration-200"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </form>
            ) : (
              // ✅ Success message
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-green-600">
                  Login successful!
                </h2>
                <p className="text-gray-500 mt-2">
                  Redirecting to dashboard...
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
