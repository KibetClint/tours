import React, { useState } from "react";

function Faqs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      category: "Booking Process",
      questions: [
        {
          question: "How do I book a tour?",
          answer:
            "To book a tour, select your desired destination, choose your travel dates, and complete the booking form. You’ll receive a confirmation email after completing the payment.",
        },
        {
          question: "What payment options are available?",
          answer:
            "We accept credit cards, debit cards, bank transfers, and secure online payment gateways like PayPal.",
        },
      ],
    },
    {
      category: "Pricing and Packages",
      questions: [
        {
          question: "Are there any hidden charges?",
          answer:
            "No, all costs are transparently displayed during the booking process. Additional services or optional activities will be clearly stated.",
        },
        {
          question: "Can I customize my travel package?",
          answer:
            "Yes, we offer customizable packages to suit your preferences. Contact us to tailor your itinerary.",
        },
      ],
    },
    {
      category: "Pre-Trip Preparation",
      questions: [
        {
          question: "What documents do I need to prepare?",
          answer:
            "You’ll need a valid passport, visa (if applicable), and travel insurance. Specific destinations may have additional requirements.",
        },
        {
          question: "What should I pack?",
          answer:
            "We recommend packing light, comfortable clothing, travel essentials, and any items specific to your destination, such as hiking gear or cultural attire.",
        },
      ],
    },
    {
      category: "Safety Concerns",
      questions: [
        {
          question: "Are the tours safe?",
          answer:
            "Yes, we prioritize your safety and work with experienced guides. We also provide 24/7 support for emergencies.",
        },
        {
          question: "What happens in case of an emergency?",
          answer:
            "Our team is equipped to handle emergencies and will assist you promptly. We also recommend travel insurance for additional protection.",
        },
      ],
    },
    {
      category: "Payment and Cancellation Policies",
      questions: [
        {
          question: "What is your cancellation policy?",
          answer:
            "Cancellations made at least 30 days before the tour are eligible for a full refund. Cancellations within 30 days may incur a fee. Please check our full cancellation policy for details.",
        },
        {
          question: "Can I reschedule my booking?",
          answer:
            "Yes, you can reschedule up to 7 days before your travel date, subject to availability and terms.",
        },
      ],
    },
    {
      category: "Travel Insurance",
      questions: [
        {
          question: "Do I need travel insurance?",
          answer:
            "Yes, travel insurance is highly recommended to cover unforeseen events like trip cancellations, medical emergencies, or lost belongings.",
        },
        {
          question: "Can you help me get travel insurance?",
          answer:
            "Yes, we can recommend trusted travel insurance providers or assist you in obtaining coverage.",
        },
      ],
    },
    {
      category: "General Travel Tips",
      questions: [
        {
          question: "How can I stay safe during my trip?",
          answer:
            "Always stay alert, follow local guidelines, and keep your valuables secure. Our team will provide safety tips for your specific destination.",
        },
        {
          question: "Do you provide travel tips for specific destinations?",
          answer:
            "Yes, we provide detailed travel guides and tips for each destination, which you can find on our website or request during the booking process.",
        },
      ],
    },
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white text-center py-10">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-2 text-lg">
          Get answers to common questions about our services and travel packages.
        </p>
      </header>

      {/* FAQs Section */}
      <div className="max-w-6xl mx-auto mt-10 p-6">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {section.category}
            </h2>
            {section.questions.map((faq, index) => (
              <div
                key={index}
                className="border-b py-3 cursor-pointer"
                onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">{faq.question}</p>
                  <span>
                    {activeQuestion === `${sectionIndex}-${index}` ? "-" : "+"}
                  </span>
                </div>
                {activeQuestion === `${sectionIndex}-${index}` && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
