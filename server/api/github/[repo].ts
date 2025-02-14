import { defineEventHandler } from 'h3'
interface GitHubStats {
    totalCommits: number
    lastCommitDate: string
    commit: {
        author: {
            date: string
        }
    }
}

export default defineEventHandler(async (event) => {
    const owner = 'FChad'
    const repo = event.context.params?.repo
    const PER_PAGE = 100

    if (!repo) {
        throw createError({
            statusCode: 400,
            message: 'Repository parameter is required'
        })
    }

    try {
        const config = useRuntimeConfig()
        const token = config.github?.token

        if (!token) {
            throw createError({
                statusCode: 500,
                message: 'GitHub token is not configured'
            })
        }

        let page = 1
        let totalCommits = 0
        let hasNextPage = true
        let lastCommitDate

        while (hasNextPage) {
            const response = await $fetch<GitHubStats[]>(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${PER_PAGE}&page=${page}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'User-Agent': 'FChad-App'
                    }
                }
            )

            if (response.length === 0) {
                hasNextPage = false
            } else {
                totalCommits += response.length

                if (page === 1) {
                    const date = new Date(response[0].commit.author.date)
                    lastCommitDate = new Intl.DateTimeFormat('de-DE', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                    }).format(date)
                }

                page++
            }
        }

        return {
            totalCommits,
            lastCommitDate
        }
    } catch (error: any) {
        console.error('GitHub API Error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to fetch GitHub stats',
            cause: error
        })
    }
}) 