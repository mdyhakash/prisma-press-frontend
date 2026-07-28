import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";

export default function ProfileSettingsPage() {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-20 w-20">
            <AvatarImage src="" alt="Profile photo" />
            <AvatarFallback className="text-xl">M</AvatarFallback>
          </Avatar>
          <button
            aria-label="Change photo"
            className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-foreground"
          >
            <Camera className="h-3.5 w-3.5" />
          </button>
        </div>
        <div>
          <p className="font-display text-lg font-semibold">Md Yasin Hossain</p>
          <p className="text-sm text-muted-foreground">akash@example.com</p>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" defaultValue="Md Yasin Hossain" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue="akash@example.com" />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell readers a little about yourself..."
            className="min-h-25 border-border"
          />
        </div>

        <div>
          <Button>Save changes</Button>
        </div>
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="font-display text-lg font-semibold">Change password</h2>
        <div className="mt-4 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="current-password">Current password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="new-password">New password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div>
            <Button variant="outline">Update password</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
