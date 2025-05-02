import constants from '@/variables'

export default function getGitHubUrl(repoName: string): string {
  const githubUrl = `https://github.com/${constants.social.github}`
  return `${githubUrl}/${repoName}`
}
