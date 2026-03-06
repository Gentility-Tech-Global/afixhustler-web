import { Link } from "react-router-dom";
// import { Navbar } from "../components/Navbar";
import { Footer } from "../components/footer.tsx";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card.tsx";
import { Badge } from "../components/ui/badge.tsx";
import {
  Zap,
  ShoppingBag,
  Sparkles,
  Share2,
  TrendingUp,
  Shield,
  Users,
//   Target,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

export function LandingPage() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Hyperlocal Marketplace",
      description: "List and discover commodities & services from verified artisans, farmers, and service providers across Nigeria.",
    },
    {
      icon: Sparkles,
      title: "HustleForge AI",
      description: "AI-powered content creation using N-ATLAS for Pidgin, Hausa, Yoruba, Igbo + English. Auto-generate trending posts instantly.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Manage multiple social handles, schedule posts, auto-post content, and track analytics—all from one dashboard.",
    },
    {
      icon: TrendingUp,
      title: "Boost My Hustle",
      description: "One-tap synergy button that generates and posts AI content for any listing, driving measurable sales back to your business.",
    },
    {
      icon: Shield,
      title: "Secure Escrow Payments",
      description: "Funds held securely via Paystack split payments. Direct settlement to your verified bank account after job completion.",
    },
    {
      icon: Users,
      title: "HustleScore Trust Engine",
      description: "Build your reputation with ratings, verified reviews, and a transparent trust score that buyers can rely on.",
    },
  ];

  const stats = [
    { value: "5,000+", label: "Active Hustlers" },
    { value: "₦30M+", label: "GMV Generated" },
    { value: "4.8★", label: "Average Rating" },
    { value: "98%", label: "On-Time Delivery" },
  ];

  const testimonials = [
    {
      name: "Chinedu Okafor",
      role: "Aba Shoemaker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      quote: "AfixHustlers transformed my business! The AI posting feature saves me hours, and I've tripled my sales in just 2 months.",
      hustleScore: 850,
    },
    {
      name: "Mama Ngozi",
      role: "Farmer, Enugu",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
      quote: "I used to struggle to find buyers for my cassava. Now I sell out within days! The escrow payment gives buyers confidence.",
      hustleScore: 720,
    },
    {
      name: "Ada Nwosu",
      role: "Fashion Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      quote: "The social media management tool is a game-changer. I schedule all my posts once a week and focus on creating beautiful designs.",
      hustleScore: 810,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-green-50 via-white to-green-50 px-4 py-12 md:py-20">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100 text-base md:text-lg lg:text-xl">
                <Zap className="mr-1 h-3 w-3" />
                Nigeria's #1 Informal Economy Platform
              </Badge>
              <h1 className="mb-6 text-4xl md:text-6xl">
                One Hustle. One App.{" "}
                <span className="bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  Sell, Book, Promote, Earn
                </span>{" "}
                – All in One Tap.
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                The first super-app for Nigeria's hustlers - Artisans, Farmers, and Creators. List your products such as Farm Produce, Foot wears, Bags, Clothes etc or services, create AI-powered content, 
                manage your social media, and get paid securely—all from one powerful platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Hustling <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/marketplace">
                  <Button size="lg" variant="outline">
                    Browse Marketplace
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 5,000+ hustlers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1723221907187-3e88c1d74b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzcyNTU5NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nigerian entrepreneur"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">GMV This Month</p>
                    <p className="text-xl font-bold text-gray-900">₦85M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-white px-4 py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-green-600 md:text-4xl">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-10">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100 text-base md:text-lg lg:text-xl">
              Features
            </Badge>
            <h2 className="mb-4 text-3xl md:text-5xl">Everything You Need to Grow Your Hustle</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From listing to payment, content creation to social media management—AfixHustlers handles it all.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 transition-all hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Get started in minutes and start earning from your hustle
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Sign Up", desc: "Create your free account in seconds" },
              { step: "02", title: "List Your Hustle", desc: "Add your products or services with photos" },
              { step: "03", title: "Boost & Promote", desc: "Use AI to create and post marketing content" },
              { step: "04", title: "Get Paid", desc: "Receive payments directly to your bank account" },
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-green-200 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl md:text-5xl">Loved by Nigerian Hustlers</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              See how AfixHustlers is transforming businesses across Nigeria
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      HustleScore: {testimonial.hustleScore}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-green-600 to-green-700 px-4 py-20 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl md:text-5xl">Ready to Start Your Hustle?</h2>
          <p className="mb-8 text-lg text-green-100">
            Join thousands of Nigerian entrepreneurs earning daily on AfixHustlers
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-green-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Free to join
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              No hidden fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Secure payments
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}