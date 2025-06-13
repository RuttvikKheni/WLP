import { NextResponse } from "next/server";

export async function GET() {
  // Mock data for development
  const mockCities = [
    { id: 1, name: "Baghdad", nameAr: "بغداد" },
    { id: 2, name: "Basra", nameAr: "البصرة" },
    { id: 3, name: "Erbil", nameAr: "أربيل" },
    { id: 4, name: "Mosul", nameAr: "الموصل" },
    { id: 5, name: "Najaf", nameAr: "النجف" },
    { id: 6, name: "Karbala", nameAr: "كربلاء" },
  ];

  return NextResponse.json(mockCities);
}
