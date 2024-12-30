import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from "@/components/wrapper/page-wrapper";
import { VideoPlayer } from '@/components/video-player';

export const metadata: Metadata = {
  metadataBase: new URL("https://starter.rasmic.xyz"),
  keywords: [''],
  title: 'Marketing page',
  openGraph: {
    description: 'Put description of the page.',
    images: ['']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing page',
    description: 'Put description of the page.',
    siteId: "",
    creator: "@treyhulse",
    creatorId: "",
    images: [''],
  },
}


export default async function MarketingPage() {

  return (
    <PageWrapper>
      <div className='flex flex-col min-h-screen items-center mt-[2.5rem] p-3 w-full'>
        <h1 className="scroll-m-20 max-w-[600px] text-5xl font-bold tracking-tight text-center">
          Launch Your Print Shop&apos;s Online Presence
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
          Create a professional website with built-in product designer, quote forms, and gallery. 
          The complete solution for screen printers and apparel decorators.
        </p>
        <div className='flex gap-2 mt-2'>
          <Link href="/dashboard" className="mt-2">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link href="/dashboard" className="mt-2">
            <Button size="lg" variant="outline">View Demo Store</Button>
          </Link>
        </div>
        <div className='mb-3 mt-[1.5rem] max-w-[900px] w-full'>
          <VideoPlayer videoSrc="https://utfs.io/f/08b0a37f-afd7-4623-b5cc-e85184528fce-1f02.mp4" />
        </div>
        <div className='flex flex-col min-h-screen max-w-[900px] items-center mb-[2rem]'>
          <article className="w-full mx-auto pb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">Transform Your Print Shops Online Experience</h1>

            <section className="mb-8">
              <p className="text-md leading-relaxed">
                Give your customers the power to design, quote, and order custom apparel directly through your website. 
                Our platform is built specifically for screen printers and apparel decorators who want to streamline their business.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Powerful Features for Print Shops
              </h2>
              <p className="text-md mb-5 leading-relaxed">
                Our product designer lets customers visualize their designs on your products, with multiple print locations and pricing rules you control.
              </p>
              <p className="text-md mb-5 leading-relaxed">
                Custom quote forms capture all the details you need, from quantity breaks to ink colors, making it easier to provide accurate estimates.
              </p>
              <p className="text-md mb-5 leading-relaxed">
                Showcase your best work with a professional gallery that helps convince potential customers of your print shops capabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Built for Growth
              </h2>
              <p className="text-md mb-5 leading-relaxed">
                Our platform scales with your business:
              </p>
              <ol className="flex flex-col gap-1 list-decimal ml-8 mb-4">
                <li className="mb-2"><strong>Easy Setup:</strong> Launch your website in minutes with our pre-built templates and setup wizard.</li>
                <li className="mb-2"><strong>Flexible Pricing:</strong> Set custom pricing rules for different quantities, colors, and locations.</li>
                <li className="mb-2"><strong>Order Management:</strong> Track quotes, orders, and customer communications in one place.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Professional Tools
              </h2>
              <p className="text-md mb-5 leading-relaxed">
                Everything you need to run your print shop online:
              </p>
              <ul className="flex flex-col gap-1 list-disc ml-8 mb-4">
                <li className="mb-2"><strong>Product Designer:</strong> Let customers create and preview their designs instantly.</li>
                <li className="mb-2"><strong>Quote Builder:</strong> Capture all job details with customizable quote forms.</li>
                <li className="mb-2"><strong>Gallery Management:</strong> Showcase your work with an easy-to-update portfolio.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Start Growing Your Print Shop Today
              </h2>
              <p className="text-md mb-5 leading-relaxed">
                Join print shops across the country who are streamlining their business with our platform. 
                Start your free trial today and see how easy it is to bring your print shop online.
              </p>
              <p className="text-md mb-5 leading-relaxed">
                All plans include a 14-day free trial with full access to all features. No credit card required to get started.
              </p>
            </section>
          </article>
        </div>

      </div>
    </PageWrapper>
  )
}
