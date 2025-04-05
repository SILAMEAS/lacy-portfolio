"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
    Users,
    FileCode,
    MapPin,
    Building,
    LinkIcon,
    Mail,
    Twitter,
    Calendar,
    RefreshCw,
    ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

// Define the GitHub user data type
interface GitHubUser {
    login: string
    name: string | null
    avatar_url: string
    bio: string | null
    location: string | null
    company: string | null
    blog: string | null
    email: string | null
    twitter_username: string | null
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
    html_url: string
}

export default function GitHubProfile() {
    const [userData, setUserData] = useState<GitHubUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchGitHubData() {
            try {
                setLoading(true)
                const response = await fetch("https://api.github.com/users/SILAMEAS")

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`)
                }

                const data = await response.json()
                setUserData(data)
                setError(null)
            } catch (error) {
                console.error("Error fetching GitHub data:", error)
                setError("Failed to load GitHub profile")
            } finally {
                setLoading(false)
            }
        }

        fetchGitHubData()
    }, [])

    if (loading) {
        return <ProfileSkeleton />
    }

    if (error) {
        return (
            <Card className="w-full max-w-4xl mx-auto">
                <CardContent className="pt-6 text-center">
                    <div className="text-destructive mb-2">
                        <RefreshCw className="h-8 w-8 mx-auto mb-2" />
                        <p>{error}</p>
                    </div>
                    <Button onClick={() => window.location.reload()}>Try Again</Button>
                </CardContent>
            </Card>
        )
    }

    if (!userData) return null

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
            <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                        <AvatarImage src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                        <AvatarFallback>{userData.login.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div className="space-y-1 flex-1">
                        <CardTitle className="text-2xl md:text-3xl">{userData.name || userData.login}</CardTitle>
                        <CardDescription className="text-lg">@{userData.login}</CardDescription>
                        {userData.bio && <p className="text-muted-foreground mt-2">{userData.bio}</p>}
                    </div>

                    <Button variant="outline" size="sm" className="hidden md:flex" asChild>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View on GitHub
                        </a>
                    </Button>
                </div>
            </CardHeader>

            <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Profile Information</h3>

                        <div className="space-y-3">
                            {userData.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    <span>{userData.location}</span>
                                </div>
                            )}

                            {userData.company && (
                                <div className="flex items-center gap-2">
                                    <Building className="h-4 w-4 text-muted-foreground" />
                                    <span>{userData.company}</span>
                                </div>
                            )}

                            {userData.blog && (
                                <div className="flex items-center gap-2">
                                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                                    <a
                                        href={userData.blog.startsWith("http") ? userData.blog : `https://${userData.blog}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        {userData.blog}
                                    </a>
                                </div>
                            )}

                            {userData.email && (
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <a href={`mailto:${userData.email}`} className="text-primary hover:underline">
                                        {userData.email}
                                    </a>
                                </div>
                            )}

                            {userData.twitter_username && (
                                <div className="flex items-center gap-2">
                                    <Twitter className="h-4 w-4 text-muted-foreground" />
                                    <a
                                        href={`https://twitter.com/${userData.twitter_username}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        @{userData.twitter_username}
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="pt-2">
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Joined on {formatDate(userData.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RefreshCw className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Last updated on {formatDate(userData.updated_at)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">GitHub Stats</h3>

                        <div className="grid grid-cols-2 gap-3">
                            <StatCard icon={<FileCode className="h-5 w-5" />} label="Repositories" value={userData.public_repos} />

                            <StatCard icon={<FileCode className="h-5 w-5" />} label="Gists" value={userData.public_gists} />

                            <StatCard icon={<Users className="h-5 w-5" />} label="Followers" value={userData.followers} />

                            <StatCard icon={<Users className="h-5 w-5" />} label="Following" value={userData.following} />
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                <Button variant="outline" size="sm" className="w-full sm:w-auto flex md:hidden" asChild>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on GitHub
                    </a>
                </Button>

                <p className="text-xs text-muted-foreground">Data fetched from GitHub API on {new Date().toLocaleString()}</p>
            </CardFooter>
        </Card>
    )
}

// Stat card component for displaying GitHub statistics
function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
                {icon}
                <span className="font-medium">{label}</span>
            </div>
            <Badge variant="secondary" className="text-lg px-3 py-1 mt-1">
                {value.toLocaleString()}
            </Badge>
        </div>
    )
}

// Loading skeleton
function ProfileSkeleton() {
    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <Skeleton className="h-24 w-24 rounded-full" />
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-full max-w-md mt-2" />
                    </div>
                    <Skeleton className="h-9 w-32 hidden md:block" />
                </div>
            </CardHeader>

            <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <Skeleton className="h-6 w-36" />
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <Skeleton className="h-4 w-4" />
                                    <Skeleton className="h-4 w-full max-w-xs" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <Skeleton className="h-6 w-28" />
                        <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                                <Skeleton key={i} className="h-24 w-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

