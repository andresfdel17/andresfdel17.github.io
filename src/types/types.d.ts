export type socialLink = {
  name: string,
  url: string,
  className: string
}

export type education = {
  UniversityName: string,
  specialization: string,
  MonthOfPassing: string
  YearOfPassing: string
  Achievements: string
}

export type work = {
  CompanyName: string,
  specialization: string,
  MonthOfLeaving: string,
  YearOfLeaving: string,
  Achievements: string
}

export type skills = {
  skillname: string,
  level?: number
}

export type portfolio = {
  name: string,
  description: string,
  imgurl: string
}

export type testimonials = {
  description: string,
  name: string
}

export type resumeData = {
  imagebaseurl: string,
  name: string,
  role: string,
  linkedinId: string,
  skypeid: string,
  roleDescription: string,
  socialLinks: socialLink[],
  aboutme: string,
  address: string,
  website: string,
  education: education[],
  work: work[],
  skillsDescription: string,
  skills: skills[],
  portfolio: portfolio[],
  testimonials: testimonials[]
}