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
  
export const agents_cities = ["City 1", "City 2", "City 3", "City 4"];

export const clients = [
  { id: 1, logo: undp, name: ''},
  { id: 2, logo: neu, name: ''},
  { id: 3, logo: jubaili, name: ''},
  { id: 4, logo: army, name: ''},
  { id: 5, logo: UNICEF, name: ''},
  { id: 6, logo: USAID, name: ''},
];

const getClientById = (id) => clients.find((client) => client.id === id);

export const customers = {
    local: {
      "Government": [
        getClientById(4),
        getClientById(2)
      ],
      "Private Sector": [
        getClientById(1),
        getClientById(6)
      ]
    },
    /////////////////////////////
    international: {
      "NGOs": [
        getClientById(3),
        getClientById(5)
      ],
      "Aid Organizations": [
        getClientById(2),
        getClientById(1)
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