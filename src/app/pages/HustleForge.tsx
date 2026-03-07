import { useState } from "react";
import { Footer } from "../components/footer.tsx";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea.tsx";
import { Input } from "../components/ui/input.tsx";
import { Label } from "../components/ui/label.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Sparkles, Upload, Calendar, TrendingUp, Send, Mic, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

export function HustleForge() {
  const [inputText, setInputText] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const niches = [
    "Educational",
    "Political",
    "Business",
    "Agriculture",
    "Fashion",
    "Technology",
    "Entertainment",
  ];

  const platforms = [
    { id: "instagram", name: "Instagram", connected: true },
    { id: "facebook", name: "Facebook", connected: true },
    { id: "twitter", name: "Twitter/X", connected: false },
    { id: "tiktok", name: "TikTok", connected: true },
    { id: "whatsapp", name: "WhatsApp Status", connected: true },
  ];

  const handleGenerate = () => {
    if (!inputText.trim() || !selectedNiche) {
      toast.error("Please provide content and select a niche");
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      const mockContent = [
        {
          day: "Monday",
          content: `🚀 ${inputText}\n\nReady to level up your hustle? 💪 Visit our marketplace today! #MadeInNigeria #${selectedNiche}`,
          platform: "Instagram",
          scheduledTime: "10:00 AM",
        },
        {
          day: "Tuesday",
          content: `Did you know? ${inputText}\n\nSupport local businesses and grow the Nigerian economy! 🇳🇬 #NigeriaFirst`,
          platform: "Facebook",
          scheduledTime: "2:00 PM",
        },
        {
          day: "Wednesday",
          content: `${inputText}\n\nQuality meets affordability. Shop now! ✨ #AfixHustlers #${selectedNiche}`,
          platform: "TikTok",
          scheduledTime: "6:00 PM",
        },
        {
          day: "Thursday",
          content: `🔥 Hot offer alert!\n\n${inputText}\n\nDon't miss out! Limited stock available. #HustleHard`,
          platform: "Instagram",
          scheduledTime: "9:00 AM",
        },
        {
          day: "Friday",
          content: `Weekend special! 🎉\n\n${inputText}\n\nGet yours today and thank us later! #FridayVibes #${selectedNiche}`,
          platform: "WhatsApp Status",
          scheduledTime: "7:00 PM",
        },
      ];

      setGeneratedContent(mockContent);
      setIsGenerating(false);
      toast.success("Content generated successfully!");
    }, 2000);
  };

  const handleAutoPost = () => {
    toast.success("Content scheduled for auto-posting across your connected platforms!");
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-purple-700">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl md:text-4xl">HustleForge AI</h1>
          <p className="text-gray-600">
            AI-powered content creation using N-ATLAS for Nigerian languages
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Pidgin
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Hausa
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Yoruba
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              Igbo
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              English
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="ai-generate" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto">
            <TabsTrigger value="ai-generate">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Generate
            </TabsTrigger>
            <TabsTrigger value="manual">
              <Upload className="mr-2 h-4 w-4" />
              Manual Upload
            </TabsTrigger>
          </TabsList>

          {/* AI Generate Tab */}
          <TabsContent value="ai-generate" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Content</CardTitle>
                  <CardDescription>
                    Describe your product or service, and our AI will generate trending content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Content Input</Label>
                    <Textarea
                      placeholder="E.g., Premium Aba leather shoes, handcrafted with finest materials, available in brown and black..."
                      rows={6}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm">
                        <Mic className="mr-2 h-4 w-4" />
                        Voice Note
                      </Button>
                      <Button variant="outline" size="sm">
                        <ImageIcon className="mr-2 h-4 w-4" />
                        Add Images
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>Content Niche</Label>
                    <Select value={selectedNiche} onValueChange={setSelectedNiche}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select niche" />
                      </SelectTrigger>
                      <SelectContent>
                        {niches.map((niche) => (
                          <SelectItem key={niche} value={niche}>
                            {niche}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="pidgin">Pidgin</SelectItem>
                        <SelectItem value="hausa">Hausa</SelectItem>
                        <SelectItem value="yoruba">Yoruba</SelectItem>
                        <SelectItem value="igbo">Igbo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={handleGenerate}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>Generating Content...</>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate AI Content
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Preview Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Generated Content Preview</CardTitle>
                  <CardDescription>
                    7-day content calendar optimized for engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {generatedContent.length === 0 ? (
                    <div className="flex min-h-100 flex-col items-center justify-center text-center">
                      <Calendar className="mb-4 h-16 w-16 text-gray-300" />
                      <p className="text-gray-500">
                        Your generated content will appear here
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {generatedContent.map((item, idx) => (
                        <div key={idx} className="rounded-lg border p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <Badge variant="secondary">{item.day}</Badge>
                            <span className="text-xs text-gray-500">
                              {item.platform} • {item.scheduledTime}
                            </span>
                          </div>
                          <p className="whitespace-pre-line text-sm text-gray-700">
                            {item.content}
                          </p>
                        </div>
                      ))}
                      <div className="flex gap-2 pt-4">
                        <Button
                          className="flex-1 bg-green-600 hover:bg-green-700"
                          onClick={handleAutoPost}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Auto-Post All
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Calendar className="mr-2 h-4 w-4" />
                          Edit Schedule
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Connected Platforms */}
            <Card>
              <CardHeader>
                <CardTitle>Connected Platforms</CardTitle>
                <CardDescription>
                  Manage your social media connections for auto-posting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div>
                        <p className="font-medium">{platform.name}</p>
                        <Badge
                          variant={platform.connected ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {platform.connected ? "Connected" : "Not Connected"}
                        </Badge>
                      </div>
                      <Button
                        variant={platform.connected ? "outline" : "default"}
                        size="sm"
                      >
                        {platform.connected ? "Disconnect" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manual Upload Tab */}
          <TabsContent value="manual" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Manual Content Creation</CardTitle>
                <CardDescription>
                  Upload your own content and schedule posts manually
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Post Content</Label>
                  <Textarea
                    placeholder="Type or paste your content here..."
                    rows={6}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Platform</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="twitter">Twitter/X</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Schedule Time</Label>
                    <Input type="datetime-local" />
                  </div>
                </div>

                <div>
                  <Label>Upload Media</Label>
                  <div className="mt-2 flex h-32 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-purple-600">
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Upload images or videos
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="mr-2 h-5 w-5" />
                  Schedule Post
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Performance Insights */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
            <CardDescription>
              Track how your AI-generated content performs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <div className="rounded-full bg-purple-100 p-3">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold">2,340</p>
                <p className="text-sm text-gray-600">Total Engagements</p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <div className="rounded-full bg-green-100 p-3">
                    <Sparkles className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-gray-600">Posts This Month</p>
              </div>
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <div className="rounded-full bg-blue-100 p-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold">₦45,000</p>
                <p className="text-sm text-gray-600">GMV from Boosts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
