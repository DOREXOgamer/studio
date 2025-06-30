import { RegisterForm } from "@/components/auth/RegisterForm";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <Link href="/" className="mb-4 flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl">BioConnect</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Create an Account</h1>
          <p className="text-muted-foreground">
            Join the community of biomedical innovators.
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
