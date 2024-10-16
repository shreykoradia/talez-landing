import clsx from "clsx";
import React from "react";

function Features() {
  const content = [
    {
      title: "Collaborative Workflows",
      description:
        "Because nothing screams 'teamwork' like trying to organize everyone's scattered ideas in one place! Streamline your chaotic brainstorming sessions, create workflows, and actually get things done — all without needing to wrangle a million email threads.",
      content: (
        <div className="h-full w-full p-8 bg-gradient-to-tr from-indigo-800 via-purple-700 to-pink-600 flex items-center justify-center text-white">
          Brainstorm product ideas without pulling your hair out!
        </div>
      ),
    },
    {
      title: "Get Feedback Before Development Starts",
      description:
        "Why wait until your product is built to hear, 'I don’t like that'? With Talez, get those lovely nuggets of feedback upfront. Save time and frustration by hearing what everyone really thinks before you even touch a line of code.",
      content: (
        <div className="h-full w-full p-8 bg-gradient-to-tr from-green-800 via-teal-700 to-cyan-600 flex items-center justify-center text-white">
          {`Feedbacks on Talez — because 'too late' is never fun`}.
        </div>
      ),
    },
    {
      title: "Create Issues on GitHub",
      description:
        "Talez turns your brilliant ideas and endless feedback into real GitHub issues — because manually creating issues is so 2020. Let us do the boring stuff so you can focus on what really matters: pretending you're not just reading Reddit at work.",
      content: (
        <div className="h-full w-full p-8 bg-gradient-to-tr from-orange-800 via-yellow-700 to-red-600 flex items-center justify-center text-white">
          Auto-magically create GitHub Issues with a click!
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Main Features{" "}
            </h2>
            <p className="mt-3 text-xl text-gray-300 sm:mt-4">
              Here’s why Talez will be your new friendly neighbourhood tool to
              manage workflows and ideas.
            </p>
          </div>

          <div
            className={clsx(
              "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {content.map((feature, index) => (
              <div
                key={index}
                className={clsx("p-6 rounded-lg bg-gray-800 shadow-lg", {
                  "sm:col-span-2 lg:col-span-1": index === content.length - 1,
                })}
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="mb-6 text-gray-400">{feature.description}</p>
                <div className="h-40 rounded-md overflow-hidden">
                  {feature.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
