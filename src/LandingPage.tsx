import { PopupButton } from "@typeform/embed-react";
import React from "react";
import video from '../public/scrible.mp4'

const LandingPage = () => { 
  return(
    <section className="flex jusify-content items-center flex-col my-0 mx-auto">
      <div className="m-5">
        <div className="text lg:text-7xl text-4xl italic text-center underline decoration-indigo-500">scrible</div>
      </div>
      <div className="text-intro m-2 max-w-2xl ">
        <p className="lg:mt-4 mt-2 lg:text-xl text-lg text-gray-500 text-center">scrible makes writing fast, fun and easy. Its AI features give you the confidence to write anything you want.</p>
      </div>
      <section className="flex flex-col mx-auto rounded bg-white lg:my-8 my-5 max-w-2xl w-full drop-shadow-lg">
       <video className="flex p-4" controls>
        <source 
          src={video}
          type="video/mp4"
        />
        </video>
      </section>
      <div className="flex mx-auto max-w-2xl justify-between mt-5">
        <PopupButton
          id="Sah5DUNE"
          className="px-3 py-4 bg-indigo-500 text-white rounded font-medium"
          size={60}
          data-tf-iframe-props="title=scrible"
          enableSandbox
        >
          Join the waitlist
        </PopupButton>
      </div>
    </section>
  );
};

export default LandingPage;
