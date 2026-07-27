"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  return (
    <form action="" className="space-y-4">
      <Card className="p-5 space-y-4">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <Button type="submit">Login</Button>
      </Card>
    </form>
  );
};

export default LoginForm;
