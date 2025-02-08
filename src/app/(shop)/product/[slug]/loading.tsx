"use client"

import { Skeleton } from "@/components"

export default function Loading () {
    return (
        <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <Skeleton className="h-4 w-1/2" />

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <Skeleton className="h-6 w-1/2 mt-6" />
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-2/3" />

                        <div className="mt-6 flex space-x-4">
                            <Skeleton className="h-10 w-32" />
                            <Skeleton className="h-10 w-32" />
                        </div>

                        <Skeleton className="h-8 w-24 mt-6" />
                        <Skeleton className="h-12 w-full mt-4" />
                    </div>
                </div>
            </div>
        </section>
    )
}
