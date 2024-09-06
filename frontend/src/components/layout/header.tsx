import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import HorizontalLinearStepper from "@/components/Stepper";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
        <div className="flex items-center space-x-2 md:ml-auto md:flex">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="button" className="h-10 w-28 p-6 text-lg">
                  Add user
                </Button>
              </DialogTrigger>
              <DialogContent className="h-full">
                <HorizontalLinearStepper />
              </DialogContent>
            </Dialog>
          </div>
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}