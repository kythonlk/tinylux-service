import Image from "next/image";
import st8 from "@/assets/images/st8.jpeg";
import { CheckIcon } from "lucide-react";

export default function About() {
  return (
    <section>
      <div className="flex justify-between p-4 md:p-20 bg-gray-100">
        <Image
          src={st8}
          alt="About"
          height={500}
          width={800}
          className="hidden md:block"
        />
        <div className="md:pl-20 my-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto py-10 text-gray-500 md:text-xl">
            Our team is dedicated to providing the best care for your baby gear.
            Here are a few reasons why parents trust us:
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-base">
              <CheckIcon className="inline-block h-6 w-6 text-black bg-blue-100 rounded-full p-1 mr-4" />
              Only the safest, eco-friendly cleaning products touch your baby
              gear, guaranteeing a clean environment free of harmful chemicals
              for your little ones.
            </p>
            <p className="text-base">
              <CheckIcon className="inline-block h-6 w-6 text-black bg-blue-100 rounded-full p-1 mr-4" />
              Our team comprises dedicated professionals with specialized
              training in baby gear care, ready to restore and maintain your
              items to the highest standards.
            </p>
            <p className="text-base">
              <CheckIcon className="inline-block h-6 w-6 text-black bg-blue-100 rounded-full p-1 mr-4" />
              Experience hassle-free service with our flexible booking and
              personalized pick-up and delivery options, designed to fit
              seamlessly into your busy life.
            </p>
            <p className="text-base">
              <CheckIcon className="inline-block h-6 w-6 text-black bg-blue-100 rounded-full p-1 mr-4" />
              From thorough cleanings to repairs and rentals, we offer a full
              spectrum of services for your baby gear, making us your one-stop
              shop for all baby gear maintenance needs."
            </p>
            <p className="text-base">
              <CheckIcon className="inline-block h-6 w-6 text-black bg-blue-100 rounded-full p-1 mr-4" />
              We stand behind our work with a satisfaction guarantee, committed
              to resolving any concerns and ensuring your complete peace of
              mind.
            </p>
            <p className="text-base">
              <CheckIcon className="inline-block h-6 w-6 text-black bg-blue-100 rounded-full p-1 mr-4" />
              Count on our friendly support team for prompt assistance, expert
              advice, and support throughout your service experience, ensuring
              your needs are met with the utmost care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
