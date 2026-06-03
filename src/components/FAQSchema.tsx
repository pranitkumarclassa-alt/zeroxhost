import JsonLd from './JsonLd';

const faqs = [
  {
    question: "What is ZeroXHost?",
    answer: "ZeroXHost is a premium India-based hosting provider specializing in ultra-low latency game servers, high-performance Cloud VPS, and dedicated VDS solutions."
  },
  {
    question: "Where are ZeroXHost servers located?",
    answer: "Our primary infrastructure is located in Tier-IV datacenters in Mumbai and Delhi, India."
  },
  {
    question: "Does ZeroXHost offer DDoS protection?",
    answer: "Yes, every ZeroXHost plan comes with advanced Layer 7 DDoS protection as standard."
  },
  {
    question: "What makes ZeroXHost different from other providers?",
    answer: "ZeroXHost uses only the latest enterprise hardware, including Ryzen 9 7950X processors and NVMe Gen4 storage."
  },
  {
    question: "Can I upgrade my ZeroXHost plan later?",
    answer: "Absolutely! ZeroXHost allows for instant vertical scaling directly from our client area."
  }
];

export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <JsonLd data={schema} />;
}
