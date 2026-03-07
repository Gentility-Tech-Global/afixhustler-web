import { useNavigate } from "react-router-dom"; // ← useNavigate instead of window.location
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

interface BoostButtonProps {
  listingId: string;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  size?: "sm" | "default" | "lg" | "icon";
  className?: string;
}

export function BoostButton({
  listingId,
  variant = "default",
  size = "default",
  className = "",
}: BoostButtonProps) {
  const navigate = useNavigate();

  const handleBoost = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // prevent parent Link clicks if nested

    toast.success("Generating AI content for this listing...", {
      description: "Redirecting to HustleForge AI",
    });

    // Option A: Simple redirect (current behavior)
    // window.location.href = "/hustleforge";

    // Option B: Better SPA navigation (recommended)
    // You can pass listingId via state or URL query
    navigate("/hustleforge", {
      state: { fromListingId: listingId }, // ← uses listingId meaningfully
    });

    // Future: you could also do navigate(`/hustleforge?listing=${listingId}`);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`bg-purple-600 hover:bg-purple-700 text-white ${className}`}
      onClick={handleBoost}
    >
      <Sparkles className="mr-2 h-4 w-4" />
      Boost My Hustle
    </Button>
  );
}