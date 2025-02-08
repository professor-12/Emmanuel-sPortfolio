import Link from 'next/link'
import React from 'react'


export const metadata = {
      title: "All Projects | Badejo Emmanuel"
}

// {
//       image: "/dot.webp",
//             title: "Dot ai clone",
//                   source_code: "https://github.com/professor-12/dot-ai-clone",
//                         live_link: "https://emmanuel-dot-clone.netlify.app/",
//     },

const projects = [
      {
            year: "2025",
            projectname: "Cloud Store",
            link: {
                  href: "https://cloud-store-hlzk.onrender.com/home",
                  name: "cloud-store.com"
            },
            buitWith: ["React", "Javascript", "Tailwindcss"]
      },
      {
            year: "2024",
            projectname: "Dot Ai",
            link: {
                  href: "ttps://emmanuel-dot-clone.netlify.app/",
                  name: "dot.ai.com"
            },
            buitWith: ["Astro", "Typescript", "Tailwindcss"]
      },
      {
            year: "2024",
            projectname: "Reweb",
            link: {
                  href: "https://reweb.oauife.uk",
                  name: "reweb.oauife.uk"
            },
            buitWith: ["React", "Javascript", "Tailwindcss"]
      },

      {
            year: "2024",
            projectname: "Chat Application",
            link: {
                  href: "https://ay-messsanger.netlify.app/",
                  name: "messanger.app"
            },
            buitWith: ["React", "Typescript", "Tailwindcss"]
      },
      {
            year: "2023",
            projectname: "Money Lover",
            link: { href: "https://next-money-lover.netlify.app/", name: "money-lover.app" },
            buitWith: ["React", "NextJs", "Typescript", "Tailwindcss",]
      },
      {
            year: "2023",
            projectname: "Movie Box",
            link: {
                  href: "https://emmanuelmoviebox.netlify.app/",
                  name: "emmanuelmoviebox.netlify.app"
            },
            buitWith: ["React", "Javascript", "Tailwindcss"]
      },
]

const AllProjects = () => {
      return (
            <div className='!font-sans'>
                  <div className='w-full text-slate-200 max-w-[1200px] mx-auto  py-12 px-2 md:px-6'>
                        <div className='space-y-4 mt-6 group'>
                              <Link href="/" className='inline'>
                                    <div className='inline-flex tracking-wide text-teal-300 items-center font-[600]'>
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                                          Badejo Emmanuel
                                    </div>
                              </Link>
                              <h1 className='text-3xl lg:text-5xl text-slate-200 font-extrabold '>All Projects</h1>
                        </div>
                        <div className='w-full overflow-auto'>
                              <table className='text-left  min-w-[870px] border-collapse text w-full mt-12'>
                                    <thead className='sticky top-0'>
                                          <tr className=''>
                                                <th className=" py-4 pr-8  font-medium text-slate-200 lg:table-cell">
                                                      Year
                                                </th>
                                                <th className=" py-4 pr-8 font-medium text-slate-200 lg:table-cell">
                                                      Project
                                                </th>
                                                <th className=" py-4 pr-8  font-medium text-slate-200 lg:table-cell">
                                                      Built with
                                                </th>
                                                <th className=" py-4 pr-8 text-sm font-medium text-slate-200 lg:table-cell">
                                                      Link
                                                </th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {
                                                projects.map(({ buitWith, link, projectname, year }) => {
                                                      return (<tr key={link.name} className='border-b border-slate-500/30 h-[12px]'>
                                                            <td className='text-sm py-4 text-slate-400'>{year}</td>
                                                            <td className='py-4'>{projectname}</td>
                                                            <td className='py-4 space-x-3 '>
                                                                  {
                                                                        buitWith.map((tech) => (

                                                                              <button key={tech} className="bg-[#122B39] text-[#5EEAD4] text-sm p-1 px-3  rounded-full">
                                                                                    {tech}
                                                                              </button>
                                                                        ))
                                                                  }
                                                            </td>
                                                            <td>
                                                                  <Link href={link.href} target='_blank' className="flex items-center group hover:text-cyan-500 text-slate-400">
                                                                        {link.name} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-[-45deg] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                                                                  </Link>
                                                            </td>
                                                      </tr>)
                                                })
                                          }

                                    </tbody>
                              </table>
                        </div>

                  </div>
            </div>
      )
}

export default AllProjects