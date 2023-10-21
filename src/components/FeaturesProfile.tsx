import { BeakerIcon, AcademicCapIcon, PrinterIcon, UserPlusIcon, WrenchScrewdriverIcon, AdjustmentsVerticalIcon  } from '@heroicons/react/24/solid'

const Features = () => {
  return (
    <section className="">
    <h2 className="text-2xl font-semibold mb-6 text-left">
      What you want to do today?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4">
          <PrinterIcon className="h-6 w-6 text-pink-500"/>
        </div>
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-1xl md:text-2xl md:leading-tight font-bold bg-clip-text bg-gradient-to-br text-slate-500 justify-center"> Create a perfect cover letter </h3>
        </div>
        <p>Answer few questions or provide your cv, It can even adapt the tone and style based on the company's culture</p>
      </div>
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4">
          <AcademicCapIcon className="h-6 w-6 text-slate-600"/>
        </div>
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-1xl md:text-2xl md:leading-tight font-bold bg-clip-text bg-gradient-to-br text-slate-500 justify-center"> CV Enhancer </h3>
        </div>
        <p>Let us enhance your cv with top</p>
      </div>
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4">
          <WrenchScrewdriverIcon className="h-6 w-6 text-black"/>
        </div>
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-1xl md:text-2xl md:leading-tight font-bold bg-clip-text bg-gradient-to-br text-slate-500 justify-center"> AI generate portfolio picture </h3>
        </div>
        <p>We care about your personal brand</p>
      </div>
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4">
           <BeakerIcon className="h-6 w-6 text-yellow-500"/>
        </div>
        <div className="flex items-center justify-center mb-4 ">
          <h3 className="text-1xl md:text-2xl md:leading-tight font-bold bg-clip-text bg-gradient-to-br text-slate-500 justify-center"> Interview Simulator </h3>
        </div>
        <p>An AI-driven chatbot or virtual interviewer that conducts mock interviews with users.</p>
      </div>
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4">
          <UserPlusIcon className="h-6 w-6 text-purple-500"/>
        </div>
        <div className="flex items-center justify-center mb-4">
          <h3 className="text-1xl md:text-2xl md:leading-tight font-bold bg-clip-text bg-gradient-to-br text-slate-500 justify-center"> Skill Gap Analysis </h3>
        </div>
        <p>Helping candidates improve their chances of landing their desired job</p>
      </div>
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4">
          <AdjustmentsVerticalIcon className="h-6 w-6 text-pink-500"/>
        </div>
        <h3 className="font-semibold mb-4">AI-Powered Job Matching</h3>
        <p>It matches candidates to positions they are most suited for</p>
      </div>
    </div>
  </section>
  )
}

export default Features;
