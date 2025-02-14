import { defineEventHandler } from 'h3'

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
        let page = 1
        let totalCommits = 0
        let hasNextPage = true
        let lastCommitDate

        while (hasNextPage) {
            const response = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${PER_PAGE}&page=${page}`,
                {
                    headers: {
                        'Authorization': `Bearer ${config.github.token}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }
            )

            // Prüfe HTTP Status
            if (!response.ok) {
                throw createError({
                    statusCode: response.status,
                    message: `GitHub API error: ${response.statusText}`
                })
            }

            // Prüfe Rate Limit
            const rateLimit = response.headers.get('x-ratelimit-remaining')
            if (rateLimit === '0') {
                throw createError({
                    statusCode: 429,
                    message: 'GitHub API rate limit exceeded'
                })
            }

            const commits = await response.json()

            if (commits.length === 0) {
                hasNextPage = false
            } else {
                totalCommits += commits.length

                if (page === 1) {
                    const date = new Date(commits[0].commit.author.date)
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
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'Failed to fetch GitHub stats'
        })
    }
}) 