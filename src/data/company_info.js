import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const company_info = [
    {
      email: "email@gmail.com",
      phone: "+ (1) 123-456",
      address: {
        name: "Med cables, Tefahta, Lebanon",
        lat: 33.45133343518141, 
        lng: 35.361417915341946
      },
      footer_description: "Innovative solutions for your business needs. Committed to excellence and customer satisfaction.",
      about_description: "Mediterranean Cables is a leading manufacturer of high-quality cables for a variety of industries, with over 14 years of experience. We've built a reputation for providing reliable, durable, and cost-effective solutions that meet the needs of our clients. Our state-of-the-art facility and advanced technology allow us to produce cables that meet the highest standards for performance, reliability, and safety.",
      the_four_features: [
        {
          icon: "💰",
          title: "Competitive Pricing",
          desc: "Best value for your budget",
        },
        {
          icon: "⏱️",
          title: "On-Time, Every Time",
          desc: "Reliable delivery schedules",
        },
        {
          icon: "✅",
          title: "ISO Certified",
          desc: "Standards you can trust",
        },
        {
          icon: "🛠️",
          title: "Advanced Testing",
          desc: "Reliable testing methods",
        }
      ],
      workingHours: [
        { days: "Monday - Friday", hours: "8:00 AM - 3:00 PM" },
        { days: "Saturday", hours: "8:00 AM - 2:00 PM" },
        { days: "Sunday", hours: "Closed" },
      ],
      socialLinks: [
        { icon: FaFacebook, url: "#" },
        { icon: FaTwitter, url: "#" },
        { icon: FaInstagram, url: "#" },
        { icon: FaLinkedin, url: "#" },
      ]
    }
]