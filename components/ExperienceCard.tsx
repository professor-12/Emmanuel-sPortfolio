import React from 'react'

interface IExperienceCard {
      startyear: string;
      endyear?: string;
      title: string;
      content: string;
      technologies: string[];
}


const ExperienceCard = ({ startyear, endyear, content, technologies }: IExperienceCard) => {
      return (
            <div className="card cursor-pointer p-6 lg:flex justify-between gap-4  border-transparent border hover:bg-teal-700/10  hover:border-slate-800/40   rounded-lg">
                  <p className="text-sm flex-auto flex font-semibold text-slate-400">
                        <span>{startyear}</span>
                        {
                              endyear &&
                              <>
                                    <span className="mx-1"> - </span>
                                    <span>{endyear}</span>
                              </>
                        }
                  </p>
                  <div>
                        <p className="text-sm  text-slate-400 font-medium">
                              {content}
                        </p>
                        <div className="flex flex-wrap py-3 gap-2">
                              {
                                    technologies.map((text, index) => {
                                          return <button key={text + index} className="bg-[#122B39] text-[#5EEAD4] p-1 px-3 rounded-full">
                                                {text}
                                          </button>
                                    })
                              }


                        </div>
                  </div>
            </div>
      )
}

export default ExperienceCard