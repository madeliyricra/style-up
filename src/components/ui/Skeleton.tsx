import React from "react"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse p-4 border rounded-lg bg-gray-300 ${className}`}
            {...props}
        />
    )
}
