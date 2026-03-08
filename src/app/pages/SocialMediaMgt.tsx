import { useState } from "react";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { mockSocialPosts } from "../data/MockData";
import { Share2, Calendar, BarChart3, Settings,Plus, Instagram, Facebook, X, MessageCircle, TrendingUp, Eye, Heart, MessageSquare,} from "lucide-react";
import { toast } from "sonner";

// Define account type with unique ID
type SocialAccount = {
  id: string;
  platform: string;
  handle: string;
  followers: string;
  connected: boolean;
  icon: any; // Lucide icon component
  color: string;
};

export function SocialMediaManagement() {
  const [activeTab, setActiveTab] = useState("overview");

  // Simulate multiple accounts per platform (real data will come from backend)
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([
    { id: "ig1", platform: "Instagram", handle: "@afixhustlers", followers: "2.4K", connected: true, icon: Instagram, color: "bg-pink-600" },
    { id: "ig2", platform: "Instagram", handle: "@afixbrand", followers: "1.1K", connected: true, icon: Instagram, color: "bg-pink-600" },
    { id: "fb1", platform: "Facebook", handle: "AfixHustlers", followers: "3.1K", connected: true, icon: Facebook, color: "bg-blue-600" },
    { id: "x1", platform: "X", handle: "@afixhustlers", followers: "1.8K", connected: false, icon: X, color: "bg-sky-500" },
    { id: "tt1", platform: "TikTok", handle: "@afixhustlers", followers: "5.2K", connected: true, icon: MessageCircle, color: "bg-black" },
  ]);

  const [connectDialogOpen, setConnectDialogOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [email, setEmail] = useState("");

  const handleOpenConnect = (platform: string) => {
    setSelectedPlatform(platform);
    setUsername("");
    setProfileUrl("");
    setEmail("");
    setConnectDialogOpen(true);
  };

  const handleConnectSubmit = () => {
    if (!username.trim() || !email.trim()) {
      toast.error("Username and email are required");
      return;
    }

    // Simulate adding new account
    const newAccount: SocialAccount = {
      id: `new-${Date.now()}`,
      platform: selectedPlatform!,
      handle: username,
      followers: "0",
      connected: true,
      icon: socialAccounts.find(a => a.platform === selectedPlatform)?.icon || Instagram,
      color: socialAccounts.find(a => a.platform === selectedPlatform)?.color || "bg-gray-600",
    };

    setSocialAccounts((prev) => [...prev, newAccount]);

    toast.success(`Connected ${selectedPlatform} account!`, {
      description: `Handle: ${username} • Verification email sent to ${email}`,
    });

    setConnectDialogOpen(false);
  };

  const handleDisconnect = (accountId: string) => {
    setSocialAccounts((prev) =>
      prev.map((acc) =>
        acc.id === accountId ? { ...acc, connected: false } : acc
      )
    );
    toast.success("Account disconnected");
  };

  const handleReconnect = (accountId: string) => {
    // In real app: trigger silent refresh or re-auth
    toast.success("Reconnecting account... (Mock success)");
    setSocialAccounts((prev) =>
      prev.map((acc) =>
        acc.id === accountId ? { ...acc, connected: true } : acc
      )
    );
  };

  const analytics = {
    totalReach: 12500,
    totalEngagements: 2340,
    postsThisMonth: 24,
    avgEngagementRate: "8.5%",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-700">
                <Share2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Social Media Management</h1>
                <p className="text-gray-600">Control all your social handles in one place</p>
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-5 w-5" />
            New Post
          </Button>
        </div>

        {/* Connected Accounts – now multi-account */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
            <CardDescription>Manage all your social profiles across platforms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {socialAccounts.length === 0 ? (
              <div className="py-12 text-center text-gray-500">
                No accounts connected yet
              </div>
            ) : (
              socialAccounts.map((acc) => (
                <div
                  key={acc.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${acc.color}`}>
                      <acc.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{acc.platform}</p>
                      <p className="text-sm text-gray-600">{acc.handle}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {acc.connected ? (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleReconnect(acc.id)}
                        >
                          Reconnect
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDisconnect(acc.id)}
                        >
                          Disconnect
                        </Button>
                      </>
                    ) : (
                      <Button size="sm" onClick={() => handleOpenConnect(acc.platform)}>
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              ))
            )}

            {/* Add new account button */}
            <Button className="w-full mt-4" onClick={() => handleOpenConnect("")}>
              <Plus className="mr-2 h-4 w-4" />
              Connect another account
            </Button>
          </CardContent>
        </Card>

        {/* Analytics Overview */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Reach</p>
                  <p className="text-2xl font-bold">{analytics.totalReach.toLocaleString()}</p>
                </div>
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Engagements</p>
                  <p className="text-2xl font-bold">{analytics.totalEngagements.toLocaleString()}</p>
                </div>
                <Heart className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Posts This Month</p>
                  <p className="text-2xl font-bold">{analytics.postsThisMonth}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Engagement Rate</p>
                  <p className="text-2xl font-bold">{analytics.avgEngagementRate}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="overview">
              <Share2 className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="scheduled">
              <Calendar className="mr-2 h-4 w-4" />
              Scheduled
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
                <CardDescription>Your latest social media activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSocialPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-start sm:justify-between"
                    >
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <Badge variant="secondary">{post.platform}</Badge>
                          <Badge variant={post.status === "posted" ? "default" : "outline"}>
                            {post.status === "posted" ? "Posted" : "Scheduled"}
                          </Badge>
                        </div>
                        <p className="mb-2 text-sm text-gray-700">{post.content}</p>
                        <p className="text-xs text-gray-500">
                          {post.status === "posted"
                            ? `Posted: ${new Date(post.scheduledFor).toLocaleDateString()}`
                            : `Scheduled: ${new Date(post.scheduledFor).toLocaleDateString()} at ${new Date(post.scheduledFor).toLocaleTimeString()}`}
                        </p>
                      </div>
                      {post.status === "posted" && (
                        <div className="flex gap-6 text-sm">
                          <div className="text-center">
                            <Eye className="mx-auto mb-1 h-4 w-4 text-gray-400" />
                            <p className="font-medium">{post.views}</p>
                            <p className="text-xs text-gray-500">Views</p>
                          </div>
                          <div className="text-center">
                            <Heart className="mx-auto mb-1 h-4 w-4 text-gray-400" />
                            <p className="font-medium">{post.engagements}</p>
                            <p className="text-xs text-gray-500">Likes</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scheduled Tab */}
          <TabsContent value="scheduled" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Scheduled Posts ({mockSocialPosts.filter((p) => p.status === "scheduled").length})
                </CardTitle>
                <CardDescription>Manage your upcoming posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSocialPosts
                    .filter((p) => p.status === "scheduled")
                    .map((post) => (
                      <div
                        key={post.id}
                        className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-start sm:justify-between"
                      >
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <Badge variant="secondary">{post.platform}</Badge>
                            <span className="text-xs text-gray-500">
                              {new Date(post.scheduledFor).toLocaleDateString()} at{" "}
                              {new Date(post.scheduledFor).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700">{post.content}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Delete</Button>
                        </div>
                      </div>
                    ))}
                  {mockSocialPosts.filter((p) => p.status === "scheduled").length === 0 && (
                    <div className="py-12 text-center">
                      <Calendar className="mx-auto mb-4 h-12 w-12 text-gray-300" />
                      <p className="text-gray-500">No scheduled posts</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Engagement by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { platform: "Instagram", engagements: 890, color: "bg-pink-600" },
                      { platform: "Facebook", engagements: 650, color: "bg-blue-600" },
                      { platform: "TikTok", engagements: 800, color: "bg-black" },
                    ].map((item) => (
                      <div key={item.platform}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium">{item.platform}</span>
                          <span className="text-sm font-medium">{item.engagements}</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                          <div
                            className={`h-full ${item.color}`}
                            style={{ width: `${(item.engagements / 1000) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Best Posting Times</CardTitle>
                  <CardDescription>When your audience is most active</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <span className="text-sm">Weekdays 10:00 AM - 12:00 PM</span>
                      <Badge>High</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <span className="text-sm">Weekdays 6:00 PM - 9:00 PM</span>
                      <Badge>High</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                      <span className="text-sm">Weekends 2:00 PM - 5:00 PM</span>
                      <Badge variant="secondary">Medium</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Top Performing Posts</CardTitle>
                <CardDescription>Your most engaging content this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSocialPosts
                    .filter((p) => p.status === "posted")
                    .map((post) => (
                      <div key={post.id} className="flex items-start justify-between rounded-lg border p-4">
                        <div className="flex-1">
                          <Badge variant="secondary" className="mb-2">{post.platform}</Badge>
                          <p className="text-sm text-gray-700">{post.content}</p>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="mb-1 flex items-center gap-1">
                            <Eye className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-medium">{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-medium">{post.engagements}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Posting Preferences</CardTitle>
                <CardDescription>Configure your auto-posting settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-post to all platforms</p>
                    <p className="text-sm text-gray-600">Automatically post to all connected accounts</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Default posting time</p>
                    <p className="text-sm text-gray-600">Set preferred time for scheduled posts</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Connect Dialog */}
      <Dialog open={connectDialogOpen} onOpenChange={setConnectDialogOpen}>
        <DialogContent>
          {selectedPlatform && (
            <>
              <DialogHeader>
                <DialogTitle>Connect {selectedPlatform}</DialogTitle>
                <DialogDescription>
                  Enter your {selectedPlatform} account details to authorize posting.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div>
                  <Label>Username / Handle *</Label>
                  <Input
                    placeholder={`@${selectedPlatform.toLowerCase()}username`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Profile URL (optional)</Label>
                  <Input
                    placeholder={`https://${selectedPlatform.toLowerCase()}.com/yourprofile`}
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                  />
                </div>

                <div>
                  <Label>Email for verification *</Label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    We'll send a one-time OTP to verify ownership
                  </p>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setConnectDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleConnectSubmit}
                  disabled={!username.trim() || !email.trim()}
                >
                  Authorize & Connect
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}