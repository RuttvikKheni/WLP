import { NextResponse } from "next/server";

export async function GET() {
  // Mock data for development
  const mockCities = [
    { name: "Baghdad", nameAr: "بغداد" },
    { name: "Basra", nameAr: "البصرة" },
    { name: "Erbil", nameAr: "أربيل" },
    { name: "Mosul", nameAr: "الموصل" },
    { name: "Najaf", nameAr: "النجف" },
    { name: "Karbala", nameAr: "كربلاء" },
  ];

  return NextResponse.json(mockCities);
}
