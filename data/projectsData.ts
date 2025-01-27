interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'XSS Mania',
    description: `Demonstrating the power of XSS through basic DOM Baseed XSS examples. This is a static page with no backend, or router capabilities therefore Reflected XSS and Stored XSS will not work here.`,
    imgSrc: '/static/images/xssmania.jpeg',
    href: '/static/pages/xssmania.html',
  },
]

export default projectsData
