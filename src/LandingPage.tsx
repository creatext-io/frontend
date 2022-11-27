import React from "react";

const LandingPage = () => {
  return(
    <section className="flex jusify-content items-center flex-col my-0 mx-auto">
      <div className="m-5">
        <div className="text-4xl">start writing something good with</div>
        <div className="text text-7xl italic text-center underline decoration-indigo-500">scrible</div>
      </div>
      <div className="text-intro m-2">
        <p className="mt-4 text-xl text-gray-500">built for hobbist writers & professionals to make the writing experience more smooth</p>
      </div>
      <section className="flex flex-col mx-auto rounded bg-white my-8 max-w-2xl w-full drop-shadow-lg">
       <video controls>
        <source src="https://www.youtube.com/watch?v=PTU-H6Wwbh8" type="video/mp4" />
       </video>
      </section>
      <div className="flex mx-auto max-w-2xl justify-between mt-5">
          <input className="mr-5 p-3 rounded w-96" placeholder="write your email..."/>
          <button className="w-40 px-4 py-3 font-medium bg-indigo-500 hover:bg-indigo-700 text-white rounded">Join waitlist</button>
      </div>
    </section>
  )
}

export default LandingPage;