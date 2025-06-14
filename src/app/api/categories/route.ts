import { NextResponse } from "next/server";

export async function GET() {
  const mockCategories = [
    {
      id: 1,
      name: "Home Cleaning",
      nameAr: "تنظيف المنازل",
      description: "Professional house cleaning services",
      icon: "Home",
      providerCount: 24,
    },
    {
      id: 2,
      name: "Plumbing",
      nameAr: "السباكة",
      description: "Expert plumbing repairs and installations",
      icon: "Wrench",
      providerCount: 18,
    },
    {
      id: 3,
      name: "Electrical",
      nameAr: "الكهرباء",
      description: "Licensed electrical services",
      icon: "Zap",
      providerCount: 15,
    },
    {
      id: 4,
      name: "Landscaping",
      nameAr: "تنسيق الحدائق",
      description: "Garden and lawn maintenance",
      icon: "Leaf",
      providerCount: 12,
    },
    {
      id: 5,
      name: "Air Condition",
      nameAr: "التكييف والتدفئة",
      description: "Heating and cooling services",
      icon: "Droplet",
      providerCount: 10,
    },
    {
      id: 6,
      name: "Painting",
      nameAr: "الدهان",
      description: "Interior and exterior painting",
      icon: "Brush",
      providerCount: 20,
    },
    {
      id: 7,
      name: "Carpentry",
      nameAr: "النجارة",
      description: "Custom woodwork and repairs",
      icon: "Hammer",
      providerCount: 14,
    },
    {
      id: 8,
      name: "Pest Control",
      nameAr: "مكافحة الحشرات",
      description: "Safe and effective pest management",
      icon: "Bug",
      providerCount: 9,
    },
  ];

  return NextResponse.json(mockCategories);
}
