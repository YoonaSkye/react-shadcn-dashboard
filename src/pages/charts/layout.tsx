import { ChartsNav } from '@/components/charts-nav';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const title = 'Beautiful Charts';
const description =
  'Built using Recharts. Copy and paste into your apps. Open Source.';

export default function ChartsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#charts">Browse Charts</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link to="https://ui.shadcn.com/charts" target="_blank">
              Documentation
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ChartsNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container py-6">
          <section id="charts" className="scroll-mt-20">
            {children}
          </section>
        </div>
      </div>
    </>
  );
}
