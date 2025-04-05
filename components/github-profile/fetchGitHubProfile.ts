// lib/github.js
export const fetchGitHubProfile = async (username:string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};
