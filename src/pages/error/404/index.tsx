import { useRouter } from '@/routes/hooks';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="grid h-screen items-center bg-background pb-8 lg:grid-cols-2 lg:pb-0">
      <div className="text-center">
        <p className="text-base font-semibold text-muted-foreground">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-2">
          <Button onClick={() => router.push('/')}>Go back home</Button>
          <Button variant="outline">
            Contack support <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="/images/404.svg"
          alt="Login visual"
          className="object-contain"
        />
      </div>
    </div>
  );
}
