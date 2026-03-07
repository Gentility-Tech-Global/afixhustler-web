import { useState } from "react";
import { useParams, Link } from "react-router";
import { Footer } from "../components/footer.tsx";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator.tsx";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { BoostButton } from "../components/BoostButton.tsx";
import { mockListings } from "../data/MockData.tsx";
import { MapPin, Star, Shield, Phone, MessageCircle, TrendingUp, Sparkles, CheckCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export function ListingDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);

  const listing = mockListings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold">Listing Not Found</h2>
            <Link to="/marketplace">
              <Button>Back to Marketplace</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    setShowBookingDialog(true);
    // Show signup prompt after viewing listing details
    setTimeout(() => {
      setShowSignupPrompt(true);
    }, 2000);
  };

  const handleConfirmBooking = () => {
    toast.success("Booking request sent! Please sign up to complete your order.");
    setShowBookingDialog(false);
    // Redirect to signup
    window.location.href = "/signup?from=booking";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/marketplace" className="mb-6 inline-flex items-center text-sm text-gray-600 hover:text-green-600">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Marketplace
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Images */}
          <div>
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={listing.images[selectedImage]}
                alt={listing.title}
                className="h-125 w-full object-cover"
              />
            </div>
            {listing.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {listing.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`overflow-hidden rounded-lg border-2 ${
                      selectedImage === idx ? "border-green-600" : "border-gray-200"
                    }`}
                  >
                    <img src={img} alt={`${listing.title} ${idx + 1}`} className="h-20 w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="secondary">{listing.category === "commodity" ? "Product" : "Service"}</Badge>
              {listing.tags.map((tag, idx) => (
                <Badge key={idx} className="bg-green-600">{tag}</Badge>
              ))}
              <Badge variant="outline">
                {listing.availability === "available" ? "✓ Available" : "Out of Stock"}
              </Badge>
            </div>

            <h1 className="mb-4 text-3xl font-bold">{listing.title}</h1>

            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{listing.rating}</span>
                <span className="text-gray-600">({listing.reviews} reviews)</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-green-600">₦{listing.price.toLocaleString()}</span>
              {listing.quantity && (
                <p className="mt-1 text-sm text-gray-600">{listing.quantity} units available</p>
              )}
            </div>

            <Separator className="my-6" />

            {/* Hustler Info */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-500">SOLD BY</h3>
              <Card className="p-4">
                <div className="flex items-start gap-4">
                  <img
                    src={listing.hustler.avatar}
                    alt={listing.hustler.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{listing.hustler.name}</h4>
                      {listing.hustler.verified && (
                        <Badge variant="secondary" className="text-xs">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                    <p className="mb-2 flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {listing.hustler.location}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        HustleScore: {listing.hustler.hustleScore}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-500">DESCRIPTION</h3>
              <p className="leading-relaxed text-gray-700">{listing.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleBooking}
                disabled={listing.availability !== "available"}
              >
                {listing.category === "service" ? "Book Service" : "Order Now"}
              </Button>
              {/* ── ADD THE BOOST BUTTON HERE ── */}
                <BoostButton 
                    listingId={listing.id} 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-purple-600 text-purple-700 hover:bg-purple-50"
                />
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Message
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 space-y-3 rounded-lg bg-green-50 p-4">
              <div className="flex items-center gap-2 text-sm text-green-700">
                <Shield className="h-5 w-5" />
                <span>Secure escrow payment via Paystack</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-700">
                <CheckCircle className="h-5 w-5" />
                <span>Verified seller with HustleScore {listing.hustler.hustleScore}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-700">
                <Sparkles className="h-5 w-5" />
                <span>Boosted with HustleForge AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Listings */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Similar Listings</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockListings
              .filter((l) => l.id !== listing.id && l.category === listing.category)
              .slice(0, 4)
              .map((item) => (
                <Link key={item.id} to={`/listing/${item.id}`}>
                  <Card className="group overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 line-clamp-2 font-semibold">{item.title}</h3>
                      <p className="text-xl font-bold text-green-600">₦{item.price.toLocaleString()}</p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Signup Prompt Dialog */}
      <Dialog open={showSignupPrompt} onOpenChange={setShowSignupPrompt}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a free account to continue</DialogTitle>
            <DialogDescription>
              Sign up to save this listing, track your booking, and get notifications about your order.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Save favorites and track bookings</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Get real-time order notifications</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Faster re-bookings & personalized recommendations</span>
            </div>
          </div>
          <DialogFooter className="flex gap-2 sm:gap-2">
            <Button variant="outline" onClick={() => setShowSignupPrompt(false)}>
              Maybe Later
            </Button>
            <Link to="/signup" className="flex-1">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Sign Up Free
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Booking Dialog */}
      <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Booking</DialogTitle>
            <DialogDescription>
              You're about to {listing.category === "service" ? "book" : "order"}: {listing.title}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-gray-600">Price:</span>
              <span className="text-xl font-bold text-green-600">₦{listing.price.toLocaleString()}</span>
            </div>
            <p className="text-sm text-gray-600">
              You'll need to create a free account to complete this booking and make the secure payment.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBookingDialog(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleConfirmBooking}>
              Continue to Sign Up
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}