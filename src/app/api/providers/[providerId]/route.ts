import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ providerId: string }> }
) {
  const { providerId } = await context.params;

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
      reviews: [
        {
          id: 1,
          customerName: "Alice Johnson",
          rating: 5,
          comment: "Excellent service, highly recommended!",
          date: "2025-06-10",
          providerId: 1,
        },
        {
          id: 2,
          customerName: "Bob Smith",
          rating: 4,
          comment: "Very professional and courteous.",
          date: "2025-06-08",
          providerId: 1,
        },
        {
          id: 3,
          customerName: "Clara Evans",
          rating: 3,
          comment: "Service was okay, but arrived a bit late.",
          date: "2025-06-05",
          providerId: 1,
        },
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
      reviews: [
        {
          id: 4,
          customerName: "David Lee",
          rating: 5,
          comment: "Outstanding experience, will use again!",
          date: "2025-06-12",
          providerId: 2,
        },
        {
          id: 5,
          customerName: "Ella Martinez",
          rating: 4,
          comment: "Great job, minor issues but resolved quickly.",
          date: "2025-06-09",
          providerId: 2,
        },
        {
          id: 6,
          customerName: "Frank Wilson",
          rating: 2,
          comment: "Not satisfied with the quality of work.",
          date: "2025-06-07",
          providerId: 2,
        },
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
      reviews: [
        {
          id: 7,
          customerName: "Grace Kim",
          rating: 4,
          comment: "Prompt and reliable, will recommend.",
          date: "2025-06-11",
          providerId: 3,
        },
        {
          id: 8,
          customerName: "Henry Thompson",
          rating: 3,
          comment: "Average service, nothing special.",
          date: "2025-06-06",
          providerId: 3,
        },
        {
          id: 9,
          customerName: "Irene Brooks",
          rating: 5,
          comment: "Fantastic work and friendly staff.",
          date: "2025-06-04",
          providerId: 3,
        },
      ],
    },
  ];

  const provider = mockProviders.find((p) => p.id === Number(providerId));

  return NextResponse.json(provider);
}
