import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const contact_info = [
    {
      email: "email@gmail.com",
      phone: "+ (1) 123-456",
      address: "My Address",
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