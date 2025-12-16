"use client";

import { Edit, Trash2, Eye, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableSkeleton } from "./loading";

interface ProductsTableProps {
  loading?: boolean;
}

export function ProductsTable({ loading = false }: ProductsTableProps) {
  if (loading) {
    return <TableSkeleton rows={5} columns={6} />;
  }
  // Sample data - replace with actual data from API
  const products = [
    {
      id: 1,
      name: "Electronics - Laptop",
      category: "Electronics",
      price: "$1,299",
      status: "active",
      date: "Dec 10, 2024"
    },
    {
      id: 2,
      name: "Medical Equipment - Stethoscope",
      category: "Medical",
      price: "$249",
      status: "active",
      date: "Dec 8, 2024"
    },
    {
      id: 3,
      name: "Textiles - Cotton Fabric",
      category: "Textiles",
      price: "$45",
      status: "draft",
      date: "Dec 5, 2024"
    },
  ];

  return (
    <Card className="border-none shadow-sm rounded-none overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="font-bold text-gray-900">Product</TableHead>
              <TableHead className="font-bold text-gray-900">Category</TableHead>
              <TableHead className="font-bold text-gray-900">Price</TableHead>
              <TableHead className="font-bold text-gray-900">Status</TableHead>
              <TableHead className="font-bold text-gray-900">Date</TableHead>
              <TableHead className="text-right font-bold text-gray-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-32 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Package className="w-12 h-12 text-gray-300" />
                    <p className="text-gray-600">No products yet</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900">
                    {product.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-[#0a4a9e] text-[#0a4a9e]">
                      {product.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold">{product.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        product.status === "active"
                          ? "bg-green-50 text-green-700 hover:bg-green-50"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{product.date}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-blue-50 hover:text-[#0a4a9e]"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-red-50 hover:text-red-600"
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
  );
}
