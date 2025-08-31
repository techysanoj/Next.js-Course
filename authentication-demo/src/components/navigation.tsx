import { SignInButton , SignOutButton, UserButton} from "@clerk/nextjs"
import Link from "next/link"
export const Navigation = () => {
    return (
        <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10 cursor-pointer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-semibold text-[var(--foreground)]">
                            Next.JS App
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <SignInButton mode="modal"></SignInButton>
                        <SignOutButton></SignOutButton>
                        {/* <UserButton></UserButton> */}
                        <Link href= "/user-profile">Profile</Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}