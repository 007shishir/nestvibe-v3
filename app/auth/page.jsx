'use client';

import React, { useState } from 'react';
import { Tabs, Tab, Input, Button, Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

export default function AuthPage() {
  const [selected, setSelected] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = selected === "login" ? "/api/auth/login" : "/api/auth/register";
      const payload = selected === "login" ? { email, password } : { name, email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        // Success
        router.push('/admin');
        router.refresh();
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome to NestVibe</h1>
            <p className="text-slate-500">Your premium real estate destination.</p>
          </div>

          <Card className="w-full shadow-2xl border-none p-2 rounded-3xl">
            <CardBody className="overflow-hidden">
              <Tabs
                fullWidth
                size="md"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={(key) => {
                  setSelected(key);
                  setError("");
                }}
                classNames={{
                  tabList: "bg-slate-100 rounded-xl p-1",
                  cursor: "bg-white shadow-sm rounded-lg",
                  tab: "h-10",
                  tabContent: "group-data-[selected=true]:text-[#005162] group-data-[selected=true]:font-bold font-medium"
                }}
              >
                <Tab key="login" title="Sign In">
                  <form className="flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
                    {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">{error}</div>}

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <Input
                        isRequired
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                        size="md"
                        startContent={<Mail className="w-4 h-4 text-slate-400" />}
                        value={email}
                        onValueChange={setEmail}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Password <span className="text-red-500">*</span></label>
                      <Input
                        isRequired
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                        size="md"
                        startContent={<Lock className="w-4 h-4 text-slate-400" />}
                        value={password}
                        onValueChange={setPassword}
                      />
                    </div>

                    <div className="flex justify-end -mt-2">
                      <a href="#" className="text-sm text-[#005162] font-medium hover:underline">Forgot password?</a>
                    </div>

                    <Button
                      fullWidth
                      color="primary"
                      type="submit"
                      isLoading={loading}
                      className="bg-[#005162] text-white font-bold shadow-lg shadow-[#005162]/20 h-12 rounded-xl text-base"
                    >
                      Sign In
                    </Button>
                  </form>
                </Tab>

                <Tab key="sign-up" title="Sign Up">
                  <form className="flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
                    {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">{error}</div>}

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <Input
                        isRequired
                        placeholder="Enter your full name"
                        type="text"
                        variant="bordered"
                        size="md"
                        startContent={<User className="w-4 h-4 text-slate-400" />}
                        value={name}
                        onValueChange={setName}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <Input
                        isRequired
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                        size="md"
                        startContent={<Mail className="w-4 h-4 text-slate-400" />}
                        value={email}
                        onValueChange={setEmail}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Password <span className="text-red-500">*</span></label>
                      <Input
                        isRequired
                        placeholder="Create a password"
                        type="password"
                        variant="bordered"
                        size="md"
                        startContent={<Lock className="w-4 h-4 text-slate-400" />}
                        value={password}
                        onValueChange={setPassword}
                      />
                    </div>

                    <p className="text-xs text-slate-500 -mt-2">
                      By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>

                    <Button
                      fullWidth
                      color="primary"
                      type="submit"
                      isLoading={loading}
                      className="bg-[#005162] text-white font-bold shadow-lg shadow-[#005162]/20 h-12 rounded-xl text-base"
                    >
                      Create Account
                    </Button>
                  </form>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>

          <div className="mt-8 text-center text-sm text-slate-500">
            <p>Protected by NestVibe Security.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
