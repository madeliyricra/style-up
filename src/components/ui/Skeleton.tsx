import React from "react"

export function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={`animate-pulse p-4 border rounded-lg bg-gray-300 ${className}`}
            {...props}
        />
    )
}
