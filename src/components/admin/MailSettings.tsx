"use client";

import { Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

interface MailSettingsProps {
  loading?: boolean;
}

export function MailSettings({ loading = false }: MailSettingsProps) {
  if (loading) {
    return (
      <Card className="border-none shadow-sm rounded-none">
        <CardHeader>
          <Skeleton className="h-6 w-64 mb-2" />
          <Skeleton className="h-4 w-96" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="border-none shadow-sm rounded-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">
          Carbonio Mail Configuration
        </CardTitle>
        <CardDescription>
          Configure your Carbonio SMTP settings for email delivery
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="smtp-host" className="text-gray-700 font-semibold">
              SMTP Host
            </Label>
            <Input
              id="smtp-host"
              type="text"
              placeholder="mail.example.com"
              className="border-gray-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="port" className="text-gray-700 font-semibold">
                Port
              </Label>
              <Input
                id="port"
                type="number"
                placeholder="587"
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="secure" className="text-gray-700 font-semibold">
                Security
              </Label>
              <Select defaultValue="tls">
                <SelectTrigger id="secure" className="border-gray-300">
                  <SelectValue placeholder="Select security" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tls">TLS</SelectItem>
                  <SelectItem value="ssl">SSL</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-700 font-semibold">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="your-email@example.com"
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="border-gray-300"
            />
          </div>

          <Button
            type="submit"
            className="bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Settings
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
