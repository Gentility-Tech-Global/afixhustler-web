import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "../components/footer.tsx";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { mockListings, industries } from "../data/MockData";
import { Search, MapPin, Star, Grid, Briefcase, Wrench, Users, ShoppingCart } from "lucide-react"; // Updated icons for main categories

export function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [listingType, setListingType] = useState<"all" | "Products" | "Services" | "Equipment" | "Skilled Labor">("all");
  const [industrySearch, setIndustrySearch] = useState(""); // New state for industry search

  const filteredIndustries = industries.filter((ind) =>
    ind.name.toLowerCase().includes(industrySearch.toLowerCase())
  );

  const filteredListings = mockListings.filter((listing) => {
    const lowerQuery = searchQuery.toLowerCase();
    const matchesSearch =
      listing.title.toLowerCase().includes(lowerQuery) ||
      listing.description.toLowerCase().includes(lowerQuery) ||
      listing.subcategory.toLowerCase().includes(lowerQuery) ||
      listing.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));

    const matchesIndustry =
      selectedIndustry === "all" ||
      listing.industry === industries.find((i) => i.id === selectedIndustry)?.name;

    const matchesType =
      listingType === "all" || listing.mainCategory === listingType;

    return matchesSearch && matchesIndustry && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="border-b bg-white px-4 py-12">
        <div className="container mx-auto">
          <h1 className="mb-2 text-3xl md:text-4xl">Discover Local Hustles</h1>
          <p className="text-gray-600">
            Browse verified products and services from Nigerian artisans, farmers, and service providers
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by keyword, product, service, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2">
                  <Input
                    placeholder="Search industry..."
                    value={industrySearch}
                    onChange={(e) => setIndustrySearch(e.target.value)}
                    className="mb-2"
                  />
                </div>
                <SelectItem value="all">All Industries</SelectItem>
                {filteredIndustries.map((ind) => (
                  <SelectItem key={ind.id} value={ind.id}>
                    {ind.name}
                  </SelectItem>
                ))}
                {filteredIndustries.length === 0 && (
                  <div className="p-2 text-center text-sm text-gray-500">
                    No industries found
                  </div>
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Tabs for main category type */}
            <Tabs value={listingType} onValueChange={(v) => setListingType(v as any)} className="w-full">
            <TabsList 
                className={`
                flex flex-wrap justify-center gap-2 sm:gap-3 
                max-w-4xl mx-auto 
                md:flex-nowrap md:justify-center md:gap-4 lg:gap-6
                `}
            >
                <TabsTrigger 
                value="all" 
                className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap shrink-0"
                >
                <Grid className="mr-1.5 h-4 w-4 sm:mr-2" />
                All
                </TabsTrigger>
                
                <TabsTrigger 
                value="Products" 
                className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap shrink-0"
                >
                <ShoppingCart className="mr-1.5 h-4 w-4 sm:mr-2" />
                Products
                </TabsTrigger>
                
                <TabsTrigger 
                value="Services" 
                className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap shrink-0"
                >
                <Wrench className="mr-1.5 h-4 w-4 sm:mr-2" />
                Services
                </TabsTrigger>
                
                <TabsTrigger 
                value="Equipment" 
                className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap shrink-0"
                >
                <Briefcase className="mr-1.5 h-4 w-4 sm:mr-2" />
                Equipment
                </TabsTrigger>
                
                <TabsTrigger 
                value="Skilled Labor" 
                className="text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap shrink-0"
                >
                <Users className="mr-1.5 h-4 w-4 sm:mr-2" />
                Skilled Labor
                </TabsTrigger>
            </TabsList>
            </Tabs>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {filteredListings.length} {filteredListings.length === 1 ? "listing" : "listings"}
          </p>
        </div>

        {/* Listings Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredListings.map((listing) => (
            <Link key={listing.id} to={`/listing/${listing.id}`}>
              <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  {listing.availability === "out_of_stock" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Badge variant="secondary">Out of Stock</Badge>
                    </div>
                  )}
                  {listing.tags.includes("Made-in-Naija") && (
                    <Badge className="absolute right-2 top-2 bg-green-600">
                      🇳🇬 Made in Naija
                    </Badge>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute left-2 top-2 bg-white/90"
                  >
                    {listing.mainCategory}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
                    {listing.title}
                  </h3>
                  <div className="mb-3 flex items-center gap-2">
                    <img
                      src={listing.hustler.avatar}
                      alt={listing.hustler.name}
                      className="h-6 w-6 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{listing.hustler.name}</span>
                    {listing.hustler.verified && (
                      <Badge variant="secondary" className="text-xs">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {listing.hustler.location}
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{listing.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">({listing.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        ₦{listing.price.toLocaleString()}
                      </span>
                      {listing.quantity && (
                        <p className="text-xs text-gray-500">{listing.quantity} available</p>
                      )}
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="flex min-h-[50vh] flex-col items-center justify-center">
            <div className="mb-4 rounded-full bg-gray-100 p-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">No listings found</h3>
            <p className="mb-4 text-gray-600">Try adjusting your search or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedIndustry("all");
                setListingType("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}