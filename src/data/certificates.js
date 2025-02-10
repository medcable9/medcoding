import edliban6101 from '../assets/certificates/EDLiban6101.png';
import edliban6102 from '../assets/certificates/EDLiban6102.png';
import edliban4092 from '../assets/certificates/EDLiban4092.png';
import edliban4090 from '../assets/certificates/EDLiban4090.png';
import iso14001 from '../assets/certificates/medcables_14001-2015.png';
import iso45001 from '../assets/certificates/medcables_45001-2018.png';

import edliban6101pdf from '../assets/certificates/EDLiban6101.pdf';
import edliban6102pdf from '../assets/certificates/EDLiban6102.pdf';
import edliban4092pdf from '../assets/certificates/EDLiban4092.pdf';
import edliban4090pdf from '../assets/certificates/EDLiban4090.pdf';
import iso14001pdf from '../assets/certificates/medcables_14001-2015.pdf';
import iso45001pdf from '../assets/certificates/medcables_45001-2018.pdf';

export const certificates = [
    {
      id: 1,
      title: 'ED Liban 6101',
      issuer: 'ELECTRICITE DU LIBAN',
      preview: edliban6101,
      file: edliban6101pdf,
      color: '#3498db'
    },
    {
      id: 2,
      title: 'ED Liban 6102',
      issuer: 'ELECTRICITE DU LIBAN',
      preview: edliban6102,
        file: edliban6102pdf,
      color: '#2ecc71'
    },
    {
      id: 3,
      title: 'ED Liban 4092',
      issuer: 'ELECTRICITE DU LIBAN',
      preview: edliban4092,
      file: edliban4092pdf,
      color: '#2ecc71'
    },
    {
      id: 4,
      title: 'ED Liban 4090',
      issuer: 'ELECTRICITE DU LIBAN',
      preview: edliban4090,
      file: edliban4090pdf,
      color: '#2ecc71'
    },
    {
      id: 5,
      title: 'ISO 14001:2015',
      issuer: 'MQA',
      preview: iso14001,
      file: iso14001pdf,
      color: '#2ecc71'
    },
    {
      id: 6,
      title: 'ISO 45001:2018',
      issuer: 'MQA',
      preview: iso45001,
      file: iso45001pdf,
      color: '#2ecc71'
    }
  ];