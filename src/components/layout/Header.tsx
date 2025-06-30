'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, PlusCircle, LogIn, LogOut, Menu } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

export default function Header() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold hidden sm:inline-block">BioConnect</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Feed
            </Link>
            <Link
              href="/guias"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Guias
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="hidden sm:flex">
                <Link href="/create-post">
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Postagem
                  </Button>
                </Link>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                      <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.displayName}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="sm:hidden cursor-pointer">
                    <Link href="/create-post">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>Nova Postagem</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
             <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline">
                  <LogIn className="mr-2 h-4 w-4" />
                  Entrar
                </Button>
              </Link>
              <Link href="/register">
                <Button>
                  Cadastre-se
                </Button>
              </Link>
            </div>
          )}
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="grid gap-6 text-lg font-medium mt-6">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-2 font-semibold"
                    >
                      <BookOpen className="h-6 w-6" />
                      <span>BioConnect</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Feed
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/guias"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Guias
                    </Link>
                  </SheetClose>
                  {/* Auth buttons for mobile when not logged in */}
                  {!user && (
                    <div className="sm:hidden flex flex-col gap-4 pt-4 mt-auto border-t">
                      <SheetClose asChild>
                         <Link href="/login">
                          <Button variant="outline" className="w-full">
                            <LogIn className="mr-2 h-4 w-4" />
                            Entrar
                          </Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/register">
                          <Button className="w-full">
                            Cadastre-se
                          </Button>
                        </Link>
                      </SheetClose>
                    </div>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
