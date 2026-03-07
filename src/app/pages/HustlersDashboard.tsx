import { useState } from "react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer.tsx";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch.tsx";
import { currentUser, mockListings, mockEarnings } from "../data/MockData.tsx";
import {
  LayoutDashboard,
  ShoppingBag,
  TrendingUp,
  Wallet,
  User,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Sparkles,
  Upload,
  Package,
  DollarSign,
  Star,
//   Clock,
} from "lucide-react";
import { toast } from "sonner";

export function HustlerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const myListings = mockListings.filter((l) => l.hustler.id === currentUser.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Hustler Dashboard</h1>
            <p className="text-gray-600">Manage your business, earnings, and listings</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/hustleforge">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Sparkles className="mr-2 h-5 w-5" />
                HustleForge AI
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="mr-2 h-5 w-5" />
                  Add Listing
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Create New Listing</DialogTitle>
                  <DialogDescription>Add a new product or service to the marketplace</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Listing Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="commodity">Product/Commodity</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Title</Label>
                    <Input placeholder="e.g., Premium Leather Shoes" />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="footwear">Footwear</SelectItem>
                        <SelectItem value="agriculture">Agriculture</SelectItem>
                        <SelectItem value="fashion">Fashion</SelectItem>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Price (₦)</Label>
                    <Input type="number" placeholder="15000" />
                  </div>
                  <div>
                    <Label>Quantity Available</Label>
                    <Input type="number" placeholder="25" />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea placeholder="Describe your product or service..." rows={4} />
                  </div>
                  <div>
                    <Label>Upload Images</Label>
                    <div className="mt-2 flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-green-600">
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Click to upload images</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Availability Status</Label>
                    <Switch defaultChecked />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Create Listing
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold">₦{mockEarnings.totalEarnings.toLocaleString()}</p>
                  <p className="text-xs text-green-600">+12% this month</p>
                </div>
                <div className="rounded-full bg-green-100 p-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Listings</p>
                  <p className="text-2xl font-bold">{myListings.length}</p>
                  <p className="text-xs text-gray-500">{myListings.filter(l => l.availability === 'available').length} available</p>
                </div>
                <div className="rounded-full bg-blue-100 p-3">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">HustleScore</p>
                  <p className="text-2xl font-bold">{currentUser.hustleScore}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <p className="text-xs text-gray-500">Excellent</p>
                  </div>
                </div>
                <div className="rounded-full bg-yellow-100 p-3">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold">₦{mockEarnings.thisMonth.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{mockEarnings.transactions.filter(t => t.status === 'pending').length} pending</p>
                </div>
                <div className="rounded-full bg-purple-100 p-3">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid w-full grid-cols-2 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="overview">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="listings">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Listings
            </TabsTrigger>
            <TabsTrigger value="earnings">
              <Wallet className="mr-2 h-4 w-4" />
              Earnings
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="account">
              <User className="mr-2 h-4 w-4" />
              Account
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest transactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockEarnings.transactions.slice(0, 5).map((txn) => (
                    <div key={txn.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-green-100 p-2">
                          <DollarSign className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{txn.item}</p>
                          <p className="text-sm text-gray-500">{txn.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">₦{txn.amount.toLocaleString()}</p>
                        <Badge variant={txn.status === 'completed' ? 'default' : 'secondary'} className="mt-1">
                          {txn.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Listings Tab */}
          <TabsContent value="listings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Listings ({myListings.length})</CardTitle>
                <CardDescription>Manage your products and services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <div key={listing.id} className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex gap-4">
                        <img
                          src={listing.images[0]}
                          alt={listing.title}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{listing.title}</h4>
                          <p className="text-sm text-gray-600">{listing.subcategory}</p>
                          <p className="mt-1 font-bold text-green-600">₦{listing.price.toLocaleString()}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <Badge variant={listing.availability === 'available' ? 'default' : 'secondary'}>
                              {listing.availability}
                            </Badge>
                            {listing.quantity && (
                              <span className="text-xs text-gray-500">{listing.quantity} available</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Link to={`/listing/${listing.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" onClick={() => toast.success("Listing deleted")}>
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                        <Link to="/hustleforge">
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <Sparkles className="mr-1 h-4 w-4" />
                            Boost
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Earnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">₦{mockEarnings.totalEarnings.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-yellow-600">₦{mockEarnings.pending.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-gray-900">₦{mockEarnings.completed.toLocaleString()}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockEarnings.transactions.map((txn) => (
                    <div key={txn.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                      <div>
                        <p className="font-medium">{txn.item}</p>
                        <p className="text-sm text-gray-500">{txn.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">₦{txn.amount.toLocaleString()}</p>
                        <Badge variant={txn.status === 'completed' ? 'default' : 'secondary'}>
                          {txn.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Views & Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Views</span>
                      <span className="font-bold">3,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Click-through Rate</span>
                      <span className="font-bold">8.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-bold">4.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Media Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Posts This Month</span>
                      <span className="font-bold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Engagement</span>
                      <span className="font-bold">2,340</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">GMV from Boosts</span>
                      <span className="font-bold text-green-600">₦45,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your public profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Change Photo
                  </Button>
                </div>
                <div>
                  <Label>Full Name</Label>
                  <Input defaultValue={currentUser.name} />
                </div>
                <div>
                  <Label>Bio</Label>
                  <Textarea defaultValue={currentUser.bio} rows={3} />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input defaultValue={currentUser.location} />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input defaultValue={currentUser.phone} />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input defaultValue={currentUser.email} />
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payout & Banking Details</CardTitle>
                <CardDescription>Manage how you receive payments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Bank Name</Label>
                  <Input defaultValue={currentUser.bankDetails?.bankName} />
                </div>
                <div>
                  <Label>Account Number</Label>
                  <Input defaultValue={currentUser.bankDetails?.accountNumber} />
                </div>
                <div>
                  <Label>Account Name</Label>
                  <Input defaultValue={currentUser.bankDetails?.accountName} disabled />
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <div className="flex items-start gap-2">
                    <Settings className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-900">Verified Account</p>
                      <p className="text-xs text-green-700">
                        Your bank details are verified via Paystack. Payments settle automatically after job completion.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Update Banking Details</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
