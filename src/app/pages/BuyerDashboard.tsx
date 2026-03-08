import { useState } from "react";
import { Link } from "react-router";
import { Footer } from "../components/footer.tsx";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx";
import { mockListings } from "../data/MockData.tsx";
import { ShoppingBag, Heart, MapPin, Star, Clock, Package } from "lucide-react";

export function BuyerDashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  const mockOrders = [
    {
      id: "1",
      listing: mockListings[0],
      status: "delivered",
      orderDate: "2026-02-28",
      deliveryDate: "2026-03-02",
      amount: 15000,
    },
    {
      id: "2",
      listing: mockListings[1],
      status: "in_transit",
      orderDate: "2026-03-01",
      deliveryDate: "2026-03-05",
      amount: 3500,
    },
    {
      id: "3",
      listing: mockListings[2],
      status: "confirmed",
      orderDate: "2026-03-02",
      deliveryDate: "2026-03-03",
      amount: 5000,
    },
  ];

  const savedItems = mockListings.slice(3, 6);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">My Account</h1>
          <p className="text-gray-600">Track your orders, saved items, and account details</p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold">{mockOrders.length}</p>
                </div>
                <div className="rounded-full bg-blue-100 p-3">
                  <ShoppingBag className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Saved Items</p>
                  <p className="text-2xl font-bold">{savedItems.length}</p>
                </div>
                <div className="rounded-full bg-red-100 p-3">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Orders</p>
                  <p className="text-2xl font-bold">
                    {mockOrders.filter((o) => o.status !== "delivered").length}
                  </p>
                </div>
                <div className="rounded-full bg-green-100 p-3">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="orders">
              <ShoppingBag className="mr-2 h-4 w-4" />
              My Orders
            </TabsTrigger>
            <TabsTrigger value="saved">
              <Heart className="mr-2 h-4 w-4" />
              Saved Items
            </TabsTrigger>
            <TabsTrigger value="profile">
              <Package className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and track your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex gap-4">
                        <img
                          src={order.listing.images[0]}
                          alt={order.listing.title}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{order.listing.title}</h4>
                          <p className="text-sm text-gray-600">
                            by {order.listing.hustler.name}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-xs text-gray-500">
                              Ordered: {order.orderDate}
                            </span>
                          </div>
                          <p className="mt-1 font-bold text-green-600">
                            ₦{order.amount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge
                          variant={
                            order.status === "delivered"
                              ? "default"
                              : order.status === "in_transit"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {order.status === "delivered"
                            ? "Delivered"
                            : order.status === "in_transit"
                            ? "In Transit"
                            : "Confirmed"}
                        </Badge>
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm">
                            Rate Order
                          </Button>
                        )}
                        <Link to={`/listing/${order.listing.id}`}>
                          <Button variant="outline" size="sm" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Saved Items Tab */}
          <TabsContent value="saved" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Items ({savedItems.length})</CardTitle>
                <CardDescription>Your favorite listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {savedItems.map((item) => (
                    <Link key={item.id} to={`/listing/${item.id}`}>
                      <Card className="group overflow-hidden transition-all hover:shadow-lg">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute right-2 top-2"
                          >
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="mb-2 line-clamp-2 font-semibold">{item.title}</h3>
                          <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            {item.hustler.location}
                          </div>
                          <div className="mb-3 flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{item.rating}</span>
                            </div>
                          </div>
                          <p className="text-xl font-bold text-green-600">
                            ₦{item.price.toLocaleString()}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Full Name</label>
                    <p className="text-gray-900">Tunde Adebayo</p>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <p className="text-gray-900">tunde.adebayo@example.com</p>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Phone</label>
                    <p className="text-gray-900">+234 805 123 4567</p>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Location</label>
                    <p className="text-gray-900">Enugu City</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-green-600 hover:bg-green-700">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Addresses</CardTitle>
                <CardDescription>Manage your saved addresses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="mb-2 bg-green-600">Default</Badge>
                        <p className="font-medium">Home</p>
                        <p className="text-sm text-gray-600">
                          123 Independence Layout, Enugu
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add New Address
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
