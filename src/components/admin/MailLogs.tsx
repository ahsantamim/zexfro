"use client";

import { Mail, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableSkeleton } from "./loading";

interface MailLogsProps {
  loading?: boolean;
}

export function MailLogs({ loading = false }: MailLogsProps) {
  if (loading) {
    return <TableSkeleton rows={5} columns={4} />;
  }
  // Sample data - replace with actual data from API
  const logs = [
    {
      id: 1,
      time: "2 mins ago",
      to: "john@example.com",
      subject: "Welcome to Zexfro",
      status: "sent"
    },
    {
      id: 2,
      time: "15 mins ago",
      to: "sarah@example.com",
      subject: "Your registration is approved",
      status: "sent"
    },
    {
      id: 3,
      time: "1 hour ago",
      to: "mike@example.com",
      subject: "Monthly Newsletter",
      status: "failed"
    },
    {
      id: 4,
      time: "2 hours ago",
      to: "contact@company.com",
      subject: "New inquiry from website",
      status: "sent"
    },
    {
      id: 5,
      time: "3 hours ago",
      to: "admin@test.com",
      subject: "System notification",
      status: "pending"
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <CheckCircle className="w-4 h-4" />;
      case "failed":
        return <XCircle className="w-4 h-4" />;
      case "pending":
        return <Clock className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <Card className="border-none shadow-sm rounded-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">
          Email Activity Logs
        </CardTitle>
        <CardDescription>
          Recent email delivery logs and status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-bold text-gray-900">Time</TableHead>
                <TableHead className="font-bold text-gray-900">Recipient</TableHead>
                <TableHead className="font-bold text-gray-900">Subject</TableHead>
                <TableHead className="font-bold text-gray-900">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <Mail className="w-12 h-12 text-gray-300" />
                      <p className="text-gray-600">No email logs yet</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                logs.map((log) => (
                  <TableRow key={log.id} className="hover:bg-gray-50">
                    <TableCell className="text-gray-600 font-medium">
                      {log.time}
                    </TableCell>
                    <TableCell className="font-medium text-gray-900">
                      {log.to}
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {log.subject}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={`flex items-center gap-1 w-fit ${
                          log.status === "sent"
                            ? "bg-green-50 text-green-700 hover:bg-green-50"
                            : log.status === "failed"
                            ? "bg-red-50 text-red-700 hover:bg-red-50"
                            : "bg-yellow-50 text-yellow-700 hover:bg-yellow-50"
                        }`}
                      >
                        {getStatusIcon(log.status)}
                        {log.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
