import React from "react";

export default function Component() {
  return (
    <section className="container-fluid py-4">
      <div className="container grid items-center justify-center gap-4 px-4 text-center">
        <div className="space-y-3">
          <div className="container display-4">
            Our <b>Services</b>
          </div>
          <p className="mx-auto my-4 max-w-600px text-gray-500 md:text-xl xl:text-base dark:text-gray-400">
            Let us take care of the details. Focus on what you do best.
          </p>
        </div>
        <div className="row row-cols-1 gap-4 md:row-cols-3 md:gap-8 my-4">
          <div className="col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800 mx-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square ">
              <img
                alt="Icon"
                className="rounded-lg object-cover object-center"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-wide">Service One</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                This is a description of the first service offered.
              </p>
            </div>
          </div>
          <div className="mx-4 col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
            <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square">
              <img
                alt="Icon"
                className="rounded-lg object-cover object-center"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-wide">Service Two</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                This is a description of the second service offered.
              </p>
            </div>
          </div>
          <div className="mx-4 col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
            <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square">
              <img
                alt="Icon"
                className="rounded-lg object-cover object-center"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-wide">Service Three</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                This is a description of the third service offered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
