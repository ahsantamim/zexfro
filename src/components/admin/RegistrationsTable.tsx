"use client";

import { Eye, CheckCircle, XCircle, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableSkeleton } from "./loading";

interface RegistrationsTableProps {
  loading?: boolean;
}

export function RegistrationsTable({ loading = false }: RegistrationsTableProps) {
  if (loading) {
    return <TableSkeleton rows={5} columns={6} />;
  }
  // Sample data - replace with actual data from API
  const registrations = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      company: "ABC Trading Co.",
      country: "USA",
      status: "approved",
      date: "Dec 12, 2024"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      company: "Global Imports Ltd.",
      country: "UK",
      status: "pending",
      date: "Dec 11, 2024"
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@example.com",
      company: "Tech Solutions Inc.",
      country: "Singapore",
      status: "rejected",
      date: "Dec 10, 2024"
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="border-none shadow-sm rounded-none overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="font-bold text-gray-900">User</TableHead>
              <TableHead className="font-bold text-gray-900">Company</TableHead>
              <TableHead className="font-bold text-gray-900">Country</TableHead>
              <TableHead className="font-bold text-gray-900">Status</TableHead>
              <TableHead className="font-bold text-gray-900">Date</TableHead>
              <TableHead className="text-right font-bold text-gray-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <UserCheck className="w-12 h-12 text-gray-300" />
                    <p className="text-gray-600">No registrations yet</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              registrations.map((reg) => (
                <TableRow key={reg.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border-2 border-[#0a4a9e]">
                        <AvatarFallback className="bg-gradient-to-br from-[#0a4a9e] to-[#05306b] text-white font-bold text-xs">
                          {getInitials(reg.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{reg.name}</p>
                        <p className="text-sm text-gray-600">{reg.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-gray-900">
                    {reg.company}
                  </TableCell>
                  <TableCell className="text-gray-600">{reg.country}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        reg.status === "approved"
                          ? "bg-green-50 text-green-700 hover:bg-green-50"
                          : reg.status === "pending"
                          ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-50"
                          : "bg-red-50 text-red-700 hover:bg-red-50"
                      }
                    >
                      {reg.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{reg.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      {reg.status === "pending" && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-green-50 hover:text-green-600"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover:bg-red-50 hover:text-red-600"
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
