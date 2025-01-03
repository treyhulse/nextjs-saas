"use client"
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data: any) => {


    };
    return (
        <footer className="border-t dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b   py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="mt-8 space-y-4 lg:mt-0">

                            <div>
                                <h3 className="text-2xl font-medium">Print Shop Success Newsletter</h3>
                                <p className="mt-4 max-w-lg">
                                    Get weekly tips on growing your print shop, industry trends, and early access 
                                    to new features. Join hundreds of successful print shops already subscribed.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col border rounded-xl p-4 gap-3 mt-6 w-full">
                                <Input
                                    {...register('email', { required: true })}
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Button type="submit">
                                    Sign Up
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">


                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">

                            <div>
                                <p className="font-medium">Resources</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href="/blog" className="transition hover:opacity-75">Print Shop Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/tutorials" className="transition hover:opacity-75">Video Tutorials</Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/takeoutthreads" target="_blank" className="transition hover:opacity-75">Twitter</Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/@takeoutthreads" target="_blank" className="transition hover:opacity-75">YouTube</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium">Support</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link href="/docs" target="_blank" className="transition hover:opacity-75">Documentation</Link>
                                    </li>
                                    <li>
                                        <Link href="/help" className="transition hover:opacity-75">Help Center</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" className="transition hover:opacity-75">Pricing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 border-t   pt-8">
                            <ul className="flex flex-wrap gap-4 text-xs">
                                <li>
                                    <Link href="/terms" className="transition hover:opacity-75">Terms & Conditions</Link>
                                </li>

                                <li>
                                    <Link href="/privacy" className="transition hover:opacity-75">Privacy Policy</Link>
                                </li>
                            </ul>

                            <p className="mt-8 text-xs  ">&copy; 2024 Takeout Threads. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
