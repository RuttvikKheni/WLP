import { NextResponse } from "next/server";

export async function GET() {
  // Mock data for development
  const mockProviders = [
    {
      id: 1,
      name: "Ahmed Al-Baghdadi",
      profession: "Master Plumber",
      professionAr: "سباك خبير",
      bio: "15+ years of experience in residential and commercial plumbing. Specializes in emergency repairs and installations.",
      cityId: 1,
      categoryId: 1,
      rating: "4.9",
      reviewCount: 127,
      phone: "+964 770 123 4567",
      email: "ahmed.plumber@khadamati.iq",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      verified: true,
      yearsExperience: 15,
      specialties: [
        "Emergency Repairs",
        "Pipe Installation",
        "Water Heater Repair",
      ],
    },
    {
      id: 2,
      name: "Fatima Al-Basri",
      profession: "Premium Cleaning Specialist",
      professionAr: "أخصائية تنظيف محترفة",
      bio: "Professional deep cleaning services for homes and offices. Eco-friendly products and reliable team.",
      cityId: 2,
      categoryId: 4,
      rating: "4.8",
      reviewCount: 89,
      phone: "+964 780 234 5678",
      email: "fatima.cleaning@khadamati.iq",
      avatar:
        "https://pixabay.com/get/g0c40ed0c31cea3d8695f2d21770b9f814dec2bc26629ca1c0f3c23ad397b5c73143855b216b2b6292c3036d5c935054ba2e8904658960ef902104a53869a4b6b_1280.jpg",
      verified: true,
      yearsExperience: 8,
      specialties: [
        "Deep Cleaning",
        "Office Cleaning",
        "Eco-friendly Products",
      ],
    },
    {
      id: 3,
      name: "Omar Al-Kurdish",
      profession: "Licensed Electrician",
      professionAr: "كهربائي مرخص",
      bio: "Certified electrical contractor with expertise in home wiring, panel upgrades, and smart home installations.",
      cityId: 3,
      categoryId: 2,
      rating: "5.0",
      reviewCount: 156,
      phone: "+964 750 345 6789",
      email: "omar.electric@khadamati.iq",
      avatar:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      verified: true,
      yearsExperience: 12,
      specialties: ["Home Wiring", "Panel Upgrades", "Smart Home Installation"],
    },
  ];

  return NextResponse.json(mockProviders);
}
