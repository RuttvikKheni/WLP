import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ providerId: string }> }
) {
  const { providerId } = await context.params;

  const mockProvidersReview = [
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

    // Reviews for Provider 2
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

    // Reviews for Provider 3
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
  ];

  const provider = mockProvidersReview.filter(
    (p) => p.providerId === Number(providerId)
  );

  return NextResponse.json(provider);
}
