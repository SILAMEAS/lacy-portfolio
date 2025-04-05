import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Github } from "lucide-react";

interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
}

interface Repo {
    name: string;
    html_url: string;
}

const GitHubProfile: React.FC = () => {
    const [profile, setProfile] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("https://api.github.com/users/SILAMEAS").then((res) => res.json()),
            fetch("https://api.github.com/users/SILAMEAS/repos").then((res) => res.json()),
        ])
            .then(([userData, repoData]) => {
                setProfile(userData);
                setRepos(repoData.slice(0, 5)); // Show only 5 repos
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading)
        return (
            <Card className="w-[400px] p-4 text-center">
                <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                <Skeleton className="w-32 h-5 mx-auto mb-2" />
                <Skeleton className="w-48 h-4 mx-auto mb-2" />
                <Skeleton className="w-40 h-4 mx-auto mb-4" />
                <Skeleton className="w-full h-10" />
            </Card>
        );

    if (!profile) return <p className="text-red-500 text-center">Failed to load profile</p>;

    return (
        <Card className="w-[400px] p-4 text-center">
            <CardContent>
                <Avatar className="w-24 h-24 mx-auto">
                    <img src={profile.avatar_url} alt={profile.login} className="rounded-full" />
                </Avatar>
                <h2 className="text-xl font-semibold mt-2">{profile.login}</h2>
                <p className="text-gray-500 text-sm">👥 {profile.followers} Followers | {profile.following} Following</p>
                <p className="text-gray-500 text-sm">📦 {profile.public_repos} Repositories</p>

                <Button variant="default" className="mt-4 w-full" asChild>
                    <a href={profile.html_url} target="_blank">
                        <Github className="mr-2 w-5 h-5" /> Visit GitHub Profile
                    </a>
                </Button>

                <h3 className="text-lg font-medium mt-4">Top Repositories</h3>
                <div className="mt-2 space-y-2">
                    {repos.map((repo) => (
                        <Button key={repo.name} variant="outline" className="w-full" asChild>
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default GitHubProfile;
