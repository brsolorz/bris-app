
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import InlineLink from '@/components/shared/InlineLink'
import constants from '@/variables'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/components/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const github: LinkProps = {
  label: 'Source code',
  icon: <GithubFillIcon size={22} />
}

const live: LinkProps = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={22} />
}

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }]
  if (url) {
    links.push({ ...live, url })
  }
  return links
}

const filters: string[] = [
  'Work Experience',
  'Side Project'
]

const projects: ProjectProps[] = [
  {
    slug: 'AdminDashboard',
    featured: true,
    title: 'Admin Bulk Subscribe/Unsubscribe Dashboard',
    description:
      'Was the tech lead for a new feature that allowed account owners to bulk subscribe or unsubscribe their users from emails enhancing user experience for many account owners and reduced manually tracked email lists.',
    techStacks: ['React', 'TypeScript', 'Elixir', 'SnowFlake', 'SQL'],
    category: 'Fullstack development',
    type: 'Work Experience',
  },
  {
    slug: 'TypescriptConversion',
    featured: true,
    title: `Initiating Team's Typescript Conversion`,
    description:
    'Company wide initiative to convert all JavaScript code to TypeScript. I took the lead for the team and helped with the conversion of 3 React projects.',
    techStacks: ['React', 'TypeScript'],
    category: 'Frontend development',
    type: 'Work Experience',
  },
  {
    slug: 'AddingScriptType',
    featured: true,
    title: `Adding Script Variable Option on  Automation Actions`,
    description:
    `In PagerDuty there's a type of Automation Action that allows users to run a script. I was the tech lead for this project that added the option to add a alert data as a script variable.`,
    techStacks: ['React', 'TypeScript', 'Elixir'],
    category: 'Fullstack development',
    type: 'Work Experience',
  },
  {
    slug: 'canyoubrilieveit',
    featured: true,
    title: `Bri's Portfolio Site`,
    description:
      'This personal website, learning Vite, Next.js, Tailwind CSS classes. And strengthening skills in React and TypeScript.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('bris-app', 'https://canyoubrilieveit.com'),
    type: 'Side Project'
  },
  {
    slug: 'gtcchatbot',
    featured: true,
    title: `Global Training Center's Chatbot`,
    description:
      `GTC is a company that provides training in multiple topics related to trade and they have a podcast called Simply Trade. I am creating a chatbot for their customers to find information from their courses and podcast epidodes. I'm using Replit to help me learn about chatbots and how to create them.`,
    techStacks: ['Replit', 'TypeScript', 'Python', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Fullstack development',
    type: 'Side Project'
  },
]

export { filters, projects }
