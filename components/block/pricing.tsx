import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const plans = [
  {
    title: "Basic Clean & Check",
    price: "AED 100",
    features: [
      "Basic stroller and car seat cleaning",
      "Safety inspection",
      "1 minor repair service",
    ],
  },
  {
    title: "Premium Care",
    price: "AED 150",
    features: [
      "Deep cleaning for any baby gear",
      "Comprehensive safety inspection",
      "Up to 3 minor repair services",
      "Priority booking",
    ],
    highlight: true,
  },
  {
    title: "Elite Membership",
    price: "AED 200/Per Month",
    features: [
      "Unlimited cleaning and repairs",
      "Advanced safety inspection",
      "Priority support",
      "Free baby gear rental (1 item per month)",
      "Special discounts on new purchases",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="w-full py-12 items-center justify-center">
      <h2 className="text-3xl font-bold text-center py-4 md:py-10 tracking-tighter sm:text-4xl md:text-4xl">
        Our Pricing
      </h2>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border ${plan.highlight ? "border-purple-500" : "border-gray-300"}`}
            >
              {plan.highlight && (
                <div className="px-3 py-1 text-sm text-white mx-auto text-center w-40 mt-[-40px] bg-gradient-to-r from-blue-700 to-black rounded-full">
                  Popular
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold text-center">{plan.title}</h3>
                <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon className="text-xs  rounded-full mr-2 p-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  className={`${plan.highlight ? "w-full bg-gradient-to-r from-black to-blue-700" : "w-full"}`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
