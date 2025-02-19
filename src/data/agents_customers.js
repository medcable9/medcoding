import army from "../assets/clients/army.png";
import jubaili from "../assets/clients/jubaili.png";
import undp from "../assets/clients/undp.png";
import UNICEF from "../assets/clients/UNICEF.png";
import USAID from "../assets/clients/USAID.png";
import neu from "../assets/clients/neu.png";
import Agent1 from "../assets/clients/Agent1.jpg";
import Agent2 from "../assets/clients/Agent2.jpg";
import KVA from "../assets/clients/KVA.jfif";
import mrad from "../assets/clients/mrad.jpg";
import edz from "../assets/clients/edz.png";
import litani from "../assets/clients/litani.png";
import redcross from "../assets/clients/redcross.png";
import asaco from "../assets/clients/asaco.jfif";
import ghaddar from "../assets/clients/ghaddar.jpg";
import albonyan from "../assets/clients/albonyan.jfif";


export const agents = [
    { name: "Kawtharani Electric Co", image: Agent1 },
    { name: "Kawtharani General Trading", image: Agent2 },
  ];
  
// export const agents_cities = ["Beqaa", "Beirut", "South Lebanon", "North Lebanon"];

export const clients = [
  { id: 1, logo: undp, name: ''},
  { id: 2, logo: neu, name: ''},
  { id: 3, logo: jubaili, name: ''},
  { id: 4, logo: army, name: ''},
  { id: 5, logo: UNICEF, name: ''},
  { id: 6, logo: USAID, name: ''},
  { id: 7, logo: KVA, name: ''},
  { id: 8, logo: mrad, name: ''},
  { id: 9, logo: edz, name: ''},
  { id: 10, logo: litani, name: ''},
  { id: 11, logo: redcross, name: ''},
  { id: 12, logo: asaco, name: ''},
  { id: 13, logo: ghaddar, name: ''},
  { id: 14, logo: albonyan, name: ''},
];

const getClientById = (id) => clients.find((client) => client.id === id);

export const customers = {
    local: {
      "Electricity Du Liban": [
        getClientById(2),
        getClientById(7),
        getClientById(8),
        getClientById(9)
      ],
      "Intergovernmental Institutions": [
        getClientById(4),
        getClientById(10)
      ],
      "Others": [
        getClientById(3),
        getClientById(12),
        getClientById(13),
        getClientById(14)
      ]
    },
    /////////////////////////////
    international: {
      "NGOs": [
        getClientById(1),
        getClientById(5)
      ],
      "Aid Organizations": [
        getClientById(6),
        getClientById(11)
      ]
    }
  };

export const globalExportCountries = [
  { name: "Lebanon", lat: 33.8736, lng: 35.8637 },
  { name: "Iraq", lat: 33.223191, lng: 43.679291},
  { name: "Kuwait", lat: 29.18, lng: 47.29 },
  { name: "Saudi Arabia", lat: 23.885942, lng: 45.079162 },
  { name: "UAE", lat: 23.4241, lng: 53.8478 },
  { name: "Sudan", lat: 15.508457, lng: 32.522854 },
  { name: "Angola", lat: -11.2135, lng: 17.8770 },
  { name: "DRC", lat: -4.0383, lng: 21.7587 },
  { name: "Congo", lat: -0.2280, lng: 15.8277 },
  { name: "Nigeria", lat: 9.0778, lng:  8.6775 },
  { name: "Ghana", lat: 7.9465, lng:  -1.0232 },
  { name: "Abidjan", lat: 5.3453, lng:  -4.0244 },
  { name: "Sierra Leone", lat: 8.4606, lng:  -11.7799 },
  { name: "Liberia", lat: 6.4281, lng:  -9.4295 },
  ];