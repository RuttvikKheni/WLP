import * as Icons from "lucide-react";

export type Category = {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  icon: keyof typeof Icons;
  providerCount: number;
};

export type City = {
  id: number;
  name: string;
  nameAr: string;
};

export type Provider = {
  id: number;
  name: string;
  avatar: string;
  profession: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  bio: string;
  yearsExperience: number;
  phone: string;
  email?: string;
  cityId: number;
  specialties: string[];
};

export type FormData = {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  serviceType: string;
  cityId: number;
  description: string;
};

export type Review = {
  id: number;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
};
