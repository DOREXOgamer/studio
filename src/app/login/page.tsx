import { LoginForm } from "@/components/auth/LoginForm";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
           <Link href="/" className="mb-4 flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl">BioConnect</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground">
            Enter your credentials to access your account.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
