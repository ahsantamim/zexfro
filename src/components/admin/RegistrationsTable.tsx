"use client";

import { useState, useEffect } from "react";
import {
  Eye,
  CheckCircle,
  XCircle,
  UserCheck,
  FileText,
  Phone,
  Mail,
  Building,
  MapPin,
  Briefcase,
  ExternalLink,
  Trash2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableSkeleton } from "./loading";

interface Registration {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  designation?: string;
  clientType?: string;
  telephone?: string;
  documentUrl?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface RegistrationsTableProps {
  loading?: boolean;
}

export function RegistrationsTable({
  loading: initialLoading = false,
}: RegistrationsTableProps) {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(initialLoading);
  const [selectedReg, setSelectedReg] = useState<Registration | null>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [updating, setUpdating] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [registrationToDelete, setRegistrationToDelete] = useState<
    string | null
  >(null);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/registrations");
      const data = await response.json();

      if (response.ok) {
        setRegistrations(data.registrations);
      }
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      setUpdating(id);
      const response = await fetch("/api/admin/registrations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        // Update local state
        setRegistrations((prev) =>
          prev.map((reg) => (reg.id === id ? { ...reg, status } : reg)),
        );
        if (selectedReg && selectedReg.id === id) {
          setSelectedReg({ ...selectedReg, status });
        }
      }
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setUpdating(null);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setDeleting(id);
      const response = await fetch(`/api/admin/registrations?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove from local state
        setRegistrations((prev) => prev.filter((reg) => reg.id !== id));
        if (selectedReg && selectedReg.id === id) {
          setViewDialogOpen(false);
          setSelectedReg(null);
        }
      } else {
        alert("Failed to delete registration");
      }
    } catch (error) {
      console.error("Error deleting registration:", error);
      alert("An error occurred while deleting the registration");
    } finally {
      setDeleting(null);
      setDeleteDialogOpen(false);
      setRegistrationToDelete(null);
    }
  };

  const confirmDelete = (id: string) => {
    setRegistrationToDelete(id);
    setDeleteDialogOpen(true);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return <TableSkeleton rows={5} columns={7} />;
  }

  return (
    <>
      <Card className="border-none shadow-sm rounded-none overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead className="font-bold text-gray-900">User</TableHead>
                <TableHead className="font-bold text-gray-900">
                  Company
                </TableHead>
                <TableHead className="font-bold text-gray-900">
                  Country
                </TableHead>
                <TableHead className="font-bold text-gray-900">Type</TableHead>
                <TableHead className="font-bold text-gray-900">
                  Submitted File
                </TableHead>
                <TableHead className="font-bold text-gray-900">
                  Status
                </TableHead>
                <TableHead className="font-bold text-gray-900">Date</TableHead>
                <TableHead className="text-right font-bold text-gray-900">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-32 text-center">
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
                          <p className="font-medium text-gray-900">
                            {reg.name}
                          </p>
                          <p className="text-sm text-gray-600">{reg.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-gray-900">
                      {reg.company || "—"}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {reg.country || "—"}
                    </TableCell>
                    <TableCell>
                      {reg.clientType ? (
                        <Badge variant="outline" className="capitalize">
                          {reg.clientType}
                        </Badge>
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell>
                      {reg.documentUrl ? (
                        <a
                          href={reg.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium"
                        >
                          <FileText className="w-4 h-4" />
                          View
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </TableCell>
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
                    <TableCell className="text-gray-600">
                      {formatDate(reg.createdAt)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                          onClick={() => {
                            setSelectedReg(reg);
                            setViewDialogOpen(true);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {reg.status === "pending" && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-green-50 hover:text-green-600"
                              onClick={() =>
                                handleStatusUpdate(reg.id, "approved")
                              }
                              disabled={updating === reg.id}
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="hover:bg-red-50 hover:text-red-600"
                              onClick={() =>
                                handleStatusUpdate(reg.id, "rejected")
                              }
                              disabled={updating === reg.id}
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-red-50 hover:text-red-600"
                          onClick={() => confirmDelete(reg.id)}
                          disabled={deleting === reg.id}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registration Details</DialogTitle>
            <DialogDescription>
              Complete information for this registration
            </DialogDescription>
          </DialogHeader>

          {selectedReg && (
            <div className="space-y-6">
              {/* User Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500">Full Name</label>
                    <p className="font-medium">{selectedReg.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Email</label>
                    <p className="font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {selectedReg.email}
                    </p>
                  </div>
                  {selectedReg.phone && (
                    <div>
                      <label className="text-sm text-gray-500">Phone</label>
                      <p className="font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {selectedReg.phone}
                      </p>
                    </div>
                  )}
                  {selectedReg.telephone && (
                    <div>
                      <label className="text-sm text-gray-500">Telephone</label>
                      <p className="font-medium flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {selectedReg.telephone}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Business Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">
                  Business Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedReg.company && (
                    <div>
                      <label className="text-sm text-gray-500">Company</label>
                      <p className="font-medium flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-400" />
                        {selectedReg.company}
                      </p>
                    </div>
                  )}
                  {selectedReg.designation && (
                    <div>
                      <label className="text-sm text-gray-500">
                        Designation
                      </label>
                      <p className="font-medium flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        {selectedReg.designation}
                      </p>
                    </div>
                  )}
                  {selectedReg.country && (
                    <div>
                      <label className="text-sm text-gray-500">Country</label>
                      <p className="font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {selectedReg.country}
                      </p>
                    </div>
                  )}
                  {selectedReg.clientType && (
                    <div>
                      <label className="text-sm text-gray-500">
                        Client Type
                      </label>
                      <Badge variant="outline" className="capitalize mt-1">
                        {selectedReg.clientType}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Document */}
              {selectedReg.documentUrl && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg border-b pb-2">
                    Document
                  </h3>
                  <a
                    href={selectedReg.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <FileText className="w-4 h-4" />
                    View uploaded document
                  </a>
                </div>
              )}

              {/* Status & Actions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">
                  Status & Actions
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm text-gray-500">
                      Current Status
                    </label>
                    <div className="mt-1">
                      <Badge
                        variant="secondary"
                        className={
                          selectedReg.status === "approved"
                            ? "bg-green-50 text-green-700"
                            : selectedReg.status === "pending"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-red-50 text-red-700"
                        }
                      >
                        {selectedReg.status}
                      </Badge>
                    </div>
                  </div>
                  {selectedReg.status === "pending" && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="bg-green-50 text-green-700 hover:bg-green-100"
                        onClick={() => {
                          handleStatusUpdate(selectedReg.id, "approved");
                          setViewDialogOpen(false);
                        }}
                        disabled={updating === selectedReg.id}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-red-50 text-red-700 hover:bg-red-100"
                        onClick={() => {
                          handleStatusUpdate(selectedReg.id, "rejected");
                          setViewDialogOpen(false);
                        }}
                        disabled={updating === selectedReg.id}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div>
                    <label>Registered At</label>
                    <p className="font-medium text-gray-900">
                      {formatDate(selectedReg.createdAt)}
                    </p>
                  </div>
                  <div>
                    <label>Last Updated</label>
                    <p className="font-medium text-gray-900">
                      {formatDate(selectedReg.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              registration from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                registrationToDelete && handleDelete(registrationToDelete)
              }
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
