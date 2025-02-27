import React from "react";

const tiers = [
  {
    name: "Essential",
    id: "tier-essential",
    href: "#",
    priceMonthly: "$1,999",
    description:
      "For those who need top-tier design solutions delivered at lightning speed.",
    features: [
      "Unlimited design requests",
      "Up to 3 active design revisions",
      "Priority delivery (3-5 days)",
      "Minimalist & high-impact designs",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Elite",
    id: "tier-elite",
    href: "#",
    priceMonthly: "$2,999",
    description:
      "The ultimate plan for those who demand perfection and exclusivity.",
    features: [
      "Unlimited design requests",
      "Unlimited revisions",
      "Express delivery (1-2 days)",
      "Custom branding solutions",
      "Dedicated design expert",
      "Exclusive member perks",
      "24/7 priority support",
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="min-h-screen mt-[50vh] md:mt-[0vh] md:mb-[20vh] px-[30px] lg:mt-[60vh]"
    >
      <div className=" mt-[4vh] sm:mt-4 sm:mb-1 px-[4vw] md:px-[2vw]">
        <hr className="border border-zinc-700" />
      </div>
      <div className="services md:px-[2vw]">
        <div className="flex flex-row items-center justify-between gap-2 text-center">
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            05
          </p>
          <p className="text-white uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            //pricing
          </p>
          <p className="text-zinc-400 uppercase text-[3vw] sm:text-[3.5vw] md:text-[1.8vw] lg:text-[1.1vw] font-semibold tracking-tight">
            explore plans
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-20 md:items-center md:justify-between md:gap-[13vw]">
          <div className="mb-[1vh] mt-[10vh] sm:my-[0vh]">
            <p className="font-bold text-white md:text-[7vw] md:tracking-tighter text-[18vw] font-jetbrainmono tracking-tighter uppercase text-center">
              pricing
            </p>
          </div>
          <div className="h-auto w-full mb-20 sm:max-w-[60vw] md:max-w-[25vw] flex flex-col items-center justify-center text-center">
            <div className="flex h-auto w-full flex-col items-center sm:items-end justify-end">
              <p className="font-semibold text-white uppercase text-[5vw] sm:text-[3vw] md:text-[16px] lg:text-lg leading-5 tracking-tighter font-jetbrainmono text-center">
                big or small, we have plans for everyone
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate bg-[#171717] px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        ></div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-[#E2E2DF]">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-[#E2E2DF] sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-[#121212] shadow-2xl"
                  : "bg-[#121212] sm:mx-8 lg:mx-0",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-white" : "text-white",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-white",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-[#E2E2DF]" : "text-[#E2E2DF]",
                    "text-base"
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-[#E2E2DF]" : "text-[#E2E2DF]",
                  "mt-6 text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-[#E2E2DF]" : "text-[#E2E2DF]",
                  "mt-8 space-y-3 text-sm/6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    {/* <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  /> */}
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-[#E2E2DF] ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
