import { NextRequest, NextResponse } from "next/server";
import {
  getAllRegistrations,
  updateRegistrationStatus,
  deleteRegistration,
} from "@/lib/api/registrations";
import { auth } from "@/auth";

export async function GET(request: NextRequest) {
  try {
    const session = await auth();

    if (!session || session.user?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const registrations = await getAllRegistrations();

    return NextResponse.json({ registrations }, { status: 200 });
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return NextResponse.json(
      { error: "Failed to fetch registrations" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth();

    if (!session || session.user?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const registration = await updateRegistrationStatus(id, status);

    return NextResponse.json({ registration }, { status: 200 });
  } catch (error) {
    console.error("Error updating registration:", error);
    return NextResponse.json(
      { error: "Failed to update registration" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await auth();

    if (!session || session.user?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Registration ID is required" },
        { status: 400 },
      );
    }

    const success = await deleteRegistration(id);

    if (!success) {
      return NextResponse.json(
        { error: "Failed to delete registration" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Registration deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting registration:", error);
    return NextResponse.json(
      { error: "Failed to delete registration" },
      { status: 500 },
    );
  }
}
