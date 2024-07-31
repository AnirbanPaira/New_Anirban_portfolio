import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({ }: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) =>
    (window.location.href = `mailto:2002lucky30kail@gmail.com?subject=${formData.subject} &body=hi, my name is ${formData.name}.${formData.message}(${formData.email})`);
  return (
    <div className="h-screen flex relative flex-col text-center md:text-right md:flex-row max-w-3xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        contact
      </h3>
      <div className="flex flex-col space-y-3 mt-24">
        <h4 className="font-semibold text-center text-2xl">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">{`let's Talk`}</span>
        </h4>

        {/* icon */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="">{`+917061433171`}</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="">pairaanirban2002@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="">{`New colony tungri Chaibasa, Jharkhand-833201 `}  </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto lg:mx-10"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput  md:w-1/2"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput mb-2 md:w-1/2"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput mb-2"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput mb-2"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-8 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
