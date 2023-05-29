import type { DefaultTheme } from 'vitepress'

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam extends Partial<DefaultTheme.TeamMember> {
  avatar: string
  name: string
  // required to download avatars from GitHub
  github: string
  twitter?: string
  webtools?: string
  discord?: string
  youtube?: string
  sponsor?: string
  title?: string
  org?: string
  desc?: string
}

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: 'github', link: `https://github.com/${tm.github}` }]
  if (tm.webtools)
    tm.links.push({ icon: 'mastodon', link: `https://elk.zone/m.webtoo.ls/@${tm.webtools}` })
  if (tm.discord)
    tm.links.push({ icon: 'discord', link: tm.discord })
  if (tm.youtube)
    tm.links.push({ icon: 'youtube', link: `https://www.youtube.com/@${tm.youtube}` })
  tm.links.push({ icon: 'twitter', link: `https://twitter.com/${tm.twitter}` })
  return tm
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: 'https://github.com/phojie.png',
    name: 'Phojie rengel',
    github: 'phojie',
    webtools: 'phojie',
    youtube: 'phojie',
    twitter: 'phojiee',
    sponsor: 'https://github.com/sponsors/phojie',
    title: 'Software engineer',
    org: 'Nexvelt Technologies',
    orgLink: 'https://nexvelt.com/',
    desc: 'The creator of Nexvelt UI and the founder of Nexvelt Technologies.',
  },
]

const teamMembers = plainTeamMembers.map(tm => createLinks(tm))

export { teamMembers }
