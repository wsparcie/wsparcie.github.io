// GitHub Repositories Widget
async function fetchGitHubRepos() {
  const reposContainer = document.getElementById('github-repos')

  try {
    const response = await fetch(
      'https://api.github.com/users/wsparcie/repos?sort=updated&direction=desc'
    )
    const repos = await response.json()

    if (!response.ok) {
      throw new Error(repos.message || 'Failed to fetch repositories')
    }

    let html = '<div class="repos-grid">'

    repos.forEach((repo) => {
      if (!repo.fork) {
        // Skip forked repositories
        const updatedAt = new Date(repo.updated_at).toLocaleDateString()
        html += `
                    <div class="repo-card">
                        <h3 class="repo-name">
                            <a href="${repo.html_url}" target="_blank">
                                ${repo.name}
                            </a>
                        </h3>
                        <p class="repo-description">
                            ${repo.description || 'No description provided'}
                        </p>
                        <div class="repo-stats">
                            <span class="stat-item">
                                ⭐ ${repo.stargazers_count}
                            </span>
                            <span class="stat-item">
                                🍴 ${repo.forks_count}
                            </span>
                            <span class="stat-item">
                                📅 ${updatedAt}
                            </span>
                            ${
                              repo.language
                                ? `
                                <span class="stat-item">
                                    ${repo.language}
                                </span>`
                                : ''
                            }
                        </div>
                        <a href="${
                          repo.html_url
                        }" target="_blank" class="view-code-link">
                            [VIEW CODE]
                        </a>
                    </div>
                `
      }
    })

    html += '</div>'
    reposContainer.innerHTML = html
  } catch (error) {
    reposContainer.innerHTML = `
            <div class="error-container">
                <p>ERROR: Could not load GitHub repositories</p>
                <p class="error-message">${error.message}</p>
                <a href="https://github.com/wsparcie?tab=repositories" target="_blank" class="github-link">
                    [VIEW ON GITHUB]
                </a>
            </div>
        `
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchGitHubRepos)
