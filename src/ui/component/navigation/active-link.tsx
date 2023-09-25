import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router"
import { useMemo } from "react";

interface Props {
    className?: string,
    children: React.ReactNode
    href: string
}
export const ActiveLink = ({ className, children, href }: Props) => {

    const router = useRouter()

    const isActive: boolean = useMemo(() => {
        return router.pathname === href
    }, [router.pathname, href])

    

    return (
    <Link href={href} className={clsx(isActive && "text-primary font-medium")} >
        {children}
    </Link>
  )
}
