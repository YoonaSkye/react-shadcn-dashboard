import { useRouter } from '@/routes/hooks';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="grid h-screen items-center bg-background pb-8 lg:grid-cols-2 lg:pb-0">
      <div className="text-center">
        <p className="text-base font-semibold text-muted-foreground">403</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-7xl">
          No authorization
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          You do not appear to have permission to access this page
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-2">
          <Button onClick={() => router.push('/')}>Go back home</Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src="/images/403.svg"
          alt="Login visual"
          className="object-contain"
        />
      </div>
    </div>
  );
}
