import { NextResponse } from "next/server";

export async function GET() {
  // Mock data for development
  const mockStates = {
    verifiedProviders: 70000,
    completedServices: 245,
    averageRating: 4.9,
    cities: 20,
  };

  return NextResponse.json(mockStates);
}
