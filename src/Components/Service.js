// import React from "react";

// export default function Service() {
//   return (
//     <>
//       <section className="w-full py-6 md:py-12">
//         <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
//           <div className="space-y-3">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Our Services
//             </h2>
//             <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
//               Let us take care of the details. Focus on what you do best.
//             </p>
//           </div>
//           <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
//             <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:flex-row md:space-y-0 md:space-x-4 md:p-6 shadow-sm dark:border-gray-800">
//               <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square md:w-16 md:h-16">
//                 <img
//                   alt="Icon"
//                   className="rounded-lg object-cover object-center"
//                   height="64"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "64/64",
//                     objectFit: "cover",
//                   }}
//                   width="64"
//                 />
//               </div>
//               <div className="space-y-2 text-center md:text-left">
//                 <h3 className="text-lg font-bold tracking-wide">Service One</h3>
//                 <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
//                   This is a description of the first service offered.
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:flex-row md:space-y-0 md:space-x-4 md:p-6 shadow-sm dark:border-gray-800">
//               <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square md:w-16 md:h-16">
//                 <img
//                   alt="Icon"
//                   className="rounded-lg object-cover object-center"
//                   height="64"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "64/64",
//                     objectFit: "cover",
//                   }}
//                   width="64"
//                 />
//               </div>
//               <div className="space-y-2 text-center md:text-left">
//                 <h3 className="text-lg font-bold tracking-wide">Service Two</h3>
//                 <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
//                   This is a description of the second service offered.
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 md:flex-row md:space-y-0 md:space-x-4 md:p-6 shadow-sm dark:border-gray-800">
//               <div className="w-12 h-12 rounded-lg overflow-hidden aspect-square md:w-16 md:h-16">
//                 <img
//                   alt="Icon"
//                   className="rounded-lg object-cover object-center"
//                   height="64"
//                   src="/placeholder.svg"
//                   style={{
//                     aspectRatio: "64/64",
//                     objectFit: "cover",
//                   }}
//                   width="64"
//                 />
//               </div>
//               <div className="space-y-2 text-center md:text-left">
//                 <h3 className="text-lg font-bold tracking-wide">
//                   Service Three
//                 </h3>
//                 <p className="text-sm text-gray-500 md:text-base/relaxed dark:text-gray-400">
//                   This is a description of the third service offered.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React from 'react';

export default function Component() {
  return (
    <section className="container-fluid py-4">
      <div className="container grid items-center justify-center gap-4 px-4 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-600px text-gray-500 md:text-xl xl:text-base dark:text-gray-400">
            Let us take care of the details. Focus on what you do best.
          </p>
        </div>
        <div className="row row-cols-1 gap-4 md:row-cols-3 md:gap-8">
          <div className="col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
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
              <h3 className="text-lg font-bold tracking-wide">Service One</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                This is a description of the first service offered.
              </p>
            </div>
          </div>
          <div className="col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
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
          <div className="col flex flex-col items-center justify-center space-y-2 border border-gray-200 rounded-lg p-4 shadow-sm dark:border-gray-800">
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
  )
}

