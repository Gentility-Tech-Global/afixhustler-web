import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Zap, User, Briefcase, } from "lucide-react";
import { toast } from "sonner";

export function SignUp() {
  const [userType, setUserType] = useState<"buyer" | "hustler">("hustler");
  const [hustlerMode, setHustlerMode] = useState<"individual" | "company">("individual");
  const [businessType, setBusinessType] = useState("");
  const [customBusinessType, setCustomBusinessType] = useState("");

  const isOtherBusinessType = businessType === "other";

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for hustler
    if (userType === "hustler") {
      if (hustlerMode === "company") {
        const companyName = (e.target as any).companyName?.value?.trim();
        if (!companyName) {
          toast.error("Company name is required");
          return;
        }
      }

      if (isOtherBusinessType && !customBusinessType.trim()) {
        toast.error("Please specify your business type");
        return;
      }
    }

    toast.success("Account created successfully! Redirecting...");
    setTimeout(() => {
      window.location.href = userType === "hustler" ? "/dashboard/hustler" : "/dashboard/buyer";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <Link to="/" className="mb-6 inline-flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-green-600 to-green-700">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">AfixHustlers</span>
            </Link>
            <h1 className="mb-2 text-3xl font-bold">Create Your Account</h1>
            <p className="text-gray-600">Join thousands of Nigerian hustlers earning daily</p>
          </div>

          <Tabs value={userType} onValueChange={(v) => setUserType(v as "buyer" | "hustler")} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="hustler" className="gap-2">
                <Briefcase className="h-4 w-4" />
                I'm a Hustler (Seller)
              </TabsTrigger>
              <TabsTrigger value="buyer" className="gap-2">
                <User className="h-4 w-4" />
                I'm a Buyer
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>
                {userType === "hustler"
                  ? hustlerMode === "company"
                    ? "Register Your Company"
                    : "Start Selling & Earning"
                  : "Start Shopping"}
              </CardTitle>
              <CardDescription>
                {userType === "hustler"
                  ? hustlerMode === "company"
                    ? "Create your company profile, list products/services, and scale your business"
                    : "Create listings, manage inventory, and grow with AI-powered tools"
                  : "Browse local products and services, book trusted artisans, and support Nigerian hustlers"}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSignUp} className="space-y-6">
                {userType === "hustler" && (
                  <div className="rounded-lg border bg-muted/40 p-4">
                    <Label className="mb-3 block text-sm font-medium">
                      Account Type
                    </Label>
                    <RadioGroup
                      value={hustlerMode}
                      onValueChange={(v) => setHustlerMode(v as "individual" | "company")}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <label className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="individual" id="individual" />
                        <div>
                          <div className="font-medium">Individual / Freelancer</div>
                          <p className="text-sm text-muted-foreground">
                            Artisans, farmers, creators, service providers
                          </p>
                        </div>
                      </label>

                      <label className="flex items-center space-x-3 rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                        <RadioGroupItem value="company" id="company" />
                        <div>
                          <div className="font-medium">Registered Company</div>
                          <p className="text-sm text-muted-foreground">
                            Businesses, brands, cooperatives, enterprises
                          </p>
                        </div>
                      </label>
                    </RadioGroup>
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  {userType === "hustler" && hustlerMode === "company" ? (
                    <div className="md:col-span-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        placeholder="e.g., Afix Ventures Ltd, Enugu Agro Co-op"
                        required
                      />
                    </div>
                  ) : (
                    <>
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@company.com or john.doe@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+234 803 123 4567" required />
                </div>

                {userType === "hustler" && (
                  <>
                    <div>
                      <Label htmlFor="location">Business / Company Location</Label>
                      <Input id="location" placeholder="e.g., Enugu, Aba, Lagos Island" required />
                    </div>

                    <div>
                      <Label htmlFor="businessType">Business / Company Type</Label>
                      <select
                        id="businessType"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select type</option>
                        <option value="artisan">Artisan / Craftsperson</option>
                        <option value="farmer">Farmer / Agriculture</option>
                        <option value="service">Service Provider</option>
                        <option value="creator">Content Creator / Media</option>
                        <option value="agent">Agent / Facilitator</option>
                        <option value="cooperative">Cooperative / Group</option>
                        <option value="limited">Registered Limited Company</option>
                        <option value="enterprise">Enterprise / Manufacturer</option>
                        <option value="other">Other (specify below)</option>
                      </select>
                    </div>

                    {/* Custom business type field – appears only when "Other" selected */}
                    {isOtherBusinessType && (
                      <div>
                        <Label htmlFor="customBusinessType">Specify Your Business Type *</Label>
                        <Input
                          id="customBusinessType"
                          value={customBusinessType}
                          onChange={(e) => setCustomBusinessType(e.target.value)}
                          placeholder="e.g., Waste Recycling, Event Planning Agency"
                          required
                        />
                      </div>
                    )}
                  </>
                )}

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-600 hover:underline">
                      Privacy Policy (NDPR Compliant)
                    </a>
                  </label>
                </div>

                {userType === "hustler" && (
                  <div className="rounded-lg bg-green-50 p-4">
                    <h4 className="mb-2 font-semibold text-green-900">
                      {hustlerMode === "company" ? "Company" : "Hustler"} Benefits:
                    </h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>✓ List unlimited products & services</li>
                      <li>✓ AI-powered content creation with HustleForge</li>
                      <li>✓ Social media management tools</li>
                      <li>✓ Secure escrow payments via Paystack</li>
                      <li>✓ Build your HustleScore and reputation</li>
                      <li>✓ Sell more and grow your visibility</li>
                    </ul>
                  </div>
                )}

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  Create Account
                </Button>

                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-green-600 hover:underline">
                    Sign In
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Made in Nigeria 🇳🇬 • NDPR Compliant • Secure Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}