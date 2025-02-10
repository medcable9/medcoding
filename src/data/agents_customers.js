import army from "../assets/clients/army.png";
import jubaili from "../assets/clients/jubaili.png";
import undp from "../assets/clients/undp.png";
import UNICEF from "../assets/clients/UNICEF.png";
import USAID from "../assets/clients/USAID.png";
import neu from "../assets/clients/neu.jfif";

export const agents = [
    { name: "Agent One", logo: army },
    { name: "Agent Two", logo: jubaili },
  ];
  
export const agents_cities = ["Bekaa", "Beirut", "North Lebanon", "South Lebanon"];

export const clients = [
  { id: 1, logo: undp, description: 'Leading technology solutions provider'},
  { id: 2, logo: neu, description: 'Leading technology solutions provider'},
  { id: 3, logo: jubaili, description: 'Leading technology solutions provider'},
  { id: 4, logo: army, description: 'Leading technology solutions provider'},
  { id: 5, logo: UNICEF, description: 'Leading technology solutions provider'},
  { id: 6, logo: USAID, description: 'Leading technology solutions provider'},
];
  
export const customers = {
    local: {
      "Government": [
        { name: "Ministry of Energy", logo: army },
        { name: "Department of Infrastructure", logo: army }
      ],
      "Private Sector": [
        { name: "National Electric Company", logo: jubaili },
        { name: "TechCorp Industries", logo: jubaili }
      ]
    },
    international: {
      "NGOs": [
        { name: "UNICEF", logo: UNICEF },
        { name: "UNDP", logo: undp }
      ],
      "Aid Organizations": [
        { name: "USAID", logo: USAID },
        { name: "International Relief", logo: USAID }
      ]
    }
  };

export const globalExportCountries = [
    { name: "USA", lat: 37.0902, lng: -95.7129 },
    { name: "Germany", lat: 51.1657, lng: 10.4515 },
    { name: "France", lat: 46.2276, lng: 2.2137 },
    { name: "Italy", lat: 41.8719, lng: 12.5674 },
    { name: "UAE", lat: 23.4241, lng: 53.8478 },
    { name: "China", lat: 35.8617, lng: 104.1954 },
    { name: "Brazil", lat: -14.2350, lng: -51.9253 },
    { name: "India", lat: 20.5937, lng: 78.9629 }
  ];