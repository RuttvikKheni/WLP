"use client";
import { useQuery } from "@tanstack/react-query"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Users } from "lucide-react";
import ProviderCard from "@/components/provider-card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Category, City, Provider } from "@/shared/schema";

export default function Providers() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch('/api/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      return response.json();
    }
  });

  const { data: cities = [] } = useQuery({
    queryKey: ['cities'],
    queryFn: async () => {
      const response = await fetch('/api/cities');
      if (!response.ok) throw new Error('Failed to fetch cities');
      return response.json();
    }
  });

  const { data: providers = [], isLoading } = useQuery({
    queryKey: ['featuredProviders'],
    queryFn: async () => {
      const response = await fetch('/api/providers/featured');
      if (!response.ok) throw new Error('Failed to fetch featuredProviders');
      return response.json();
    }
  });

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-iraq-green mr-3 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Service Providers</h1>
          </div>
          <p className="text-lg text-gray-600">
            Browse our network of verified professionals across Iraq
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Providers
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Provider name or service..."
                  className="pl-10 py-3 border-2 border-green-500 cursor-pointer bg-white text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-green-300 focus:ring-0 focus:ring-offset-0 focus:border-green-500 transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="py-3 border-2 border-green-500 cursor-pointer bg-white text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-green-300 focus:ring-0 focus:ring-offset-0 focus:border-green-500 transition-colors">
                  <SelectValue placeholder="All Services" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="all">All Services</SelectItem>
                  {categories.map((category: Category) => (
                    <SelectItem key={category.id} value={category.id.toString()} className="hover:bg-gray-200 cursor-pointer">
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="py-3 border-2 border-green-500 cursor-pointer bg-white text-gray-900 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-green-300 focus:ring-0 focus:ring-offset-0 focus:border-green-500 transition-colors">
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900">
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map((city: City) => (
                    <SelectItem key={city.id} value={city.id.toString()} className="hover:bg-gray-200 cursor-pointer">
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end justify-center pb-3 font-bold">
              <div className="text-sm text-gray-600">
                <strong>{providers.length}</strong> provider{providers.length !== 1 ? 's' : ''} available
              </div>
            </div>
          </div>
        </Card>

        {/* Provider Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading skeletons
            Array.from({ length: 9 }, (_, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-16 w-full mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </Card>
            ))
          ) : providers.length > 0 ? (
            providers.map((provider: Provider) => {
              const city = cities.find((c: City) => c.id === provider.cityId);
              return (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  city={city}
                  onClick={() => router.push(`/providers/${provider.id}`)}
                  onContact={() => {
                    alert(`Contact form for ${provider.name} would open in a real application`);
                  }}
                />
              );
            })
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 mb-4">
                <Users className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse different service categories.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}