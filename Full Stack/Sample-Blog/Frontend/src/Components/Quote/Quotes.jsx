import React from "react";

const Quotes = () => {
  return (
    <section class="bg-gray-900">
      <div class="w-full px-4 py-20 mx-auto text-center max-w-7xl md:w-4/5 lg:w-4/6">
        <h1 class="mt-3 mb-10 text-xl font-extrabold text-white md:leading-snug md:text-3xl">
          “Implementation is a breeze, particularly because the team at
          Hellonext is
          <span class="text-white bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500">
            {" "}
            very fast to respond and help{" "}
          </span>
          where needed, even if it means rolling out new features on their
          platform.  We're super happy and are loving how Hellonext brings us
          closer to the members of our community“
        </h1>
        <p class="text-base font-medium text-gray-200">Praveen Juge</p>
        <p class="text-xs font-medium text-gray-400">CEO, Birds</p>
      </div>
    </section>
  );
};

export default Quotes;
