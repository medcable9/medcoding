import img1 from "../assets/images/cable.png";

export const productCategories = [
  {
    name: "Power Cables",
    image: img1,
    description: "Power Cables Description",
    subcategories: [
      {
        name: "High Cables",
        products: [
          {
            name: "HV Cable 1",
            images: [img1, img1],
            construction: "Copper core, XLPE insulation",
            application: "Power transmission",
            technicalCharacteristics: "Resistance to high temperatures",
            standards: "IEC 60502",
            coreIdentification: "Color-coded",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "HV Cable 2",
            images: [img1, img1],
            construction: "Aluminum core, PVC insulation",
            application: "Medium voltage distribution",
            technicalCharacteristics: "Flame retardant",
            standards: "IEC 60332",
            coreIdentification: "Number-coded",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          }
        ]
      }
    ]
  },
  {
    name: "Overhead Conductor Cables",
    image: img1,
    description: "Overhead Conductor Cables Description",
    subcategories: [
      {
        name: "High Cables",
        products: [
          {
            name: "HV Cable 3",
            images: [img1, img1],
            construction: "Steel-reinforced aluminum",
            application: "Overhead power transmission",
            technicalCharacteristics: "High tensile strength",
            standards: "ASTM B232",
            coreIdentification: "Bare conductor",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "HV Cable 4",
            images: [img1, img1],
            construction: "Copper-clad aluminum",
            application: "Urban power grids",
            technicalCharacteristics: "Corrosion resistant",
            standards: "IEC 61089",
            coreIdentification: "Red stripe",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          }
        ]
      }
    ]
  },
  {
    name: "Medium Voltage Cables",
    image: img1,
    description: "Medium Voltage Cables Description",
    subcategories: [
      {
        name: "Underground Cables",
        products: [
          {
            name: "MV Cable 1",
            images: [img1, img1],
            construction: "XLPE insulated, copper core",
            application: "Underground power transmission",
            technicalCharacteristics: "Water resistant",
            standards: "IEC 60502-2",
            coreIdentification: "Green insulation",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "MV Cable 2",
            images: [img1, img1],
            construction: "PVC insulated, aluminum core",
            application: "Substation wiring",
            technicalCharacteristics: "Low capacitance",
            standards: "IEC 60227",
            coreIdentification: "Blue stripe",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          }
        ]
      }
    ]
  },
  {
    name: "Category 2",
    image: img1,
    description: "Category 2 Description",
    subcategories: [
      {
        name: "SubCat2 Cables",
        products: [
          {
            name: "My Cable 1",
            images: [img1, img1],
            construction: "Copper core, rubber insulation",
            application: "Industrial wiring",
            technicalCharacteristics: "Flexible",
            standards: "VDE 0282",
            coreIdentification: "Black sheath",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "My Cable 2",
            images: [img1, img1],
            construction: "Fiber optic",
            application: "Data transmission",
            technicalCharacteristics: "High-speed, low-loss",
            standards: "ITU-T G.652",
            coreIdentification: "Single-mode",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "My Cable 3",
            images: [img1, img1],
            construction: "Steel wire armored",
            application: "Heavy-duty applications",
            technicalCharacteristics: "Impact resistant",
            standards: "IEC 60502-1",
            coreIdentification: "Yellow stripe",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "My Cable 4",
            images: [img1, img1],
            construction: "Polyethylene insulated",
            application: "Telecom networks",
            technicalCharacteristics: "UV resistant",
            standards: "EN 50290",
            coreIdentification: "Gray sheath",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "My Cable 5",
            images: [img1, img1],
            construction: "Copper twisted pair",
            application: "Ethernet networks",
            technicalCharacteristics: "Category 6",
            standards: "TIA/EIA-568",
            coreIdentification: "Color-coded pairs",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          },
          {
            name: "My Cable 6",
            images: [img1, img1],
            construction: "Coaxial",
            application: "Cable TV distribution",
            technicalCharacteristics: "75 Ohm impedance",
            standards: "SCTE IPS-SP-002",
            coreIdentification: "White sheath",
            datasheetPdf: "datasheet.pdf",
            catalogPdf: "catalog.pdf",
          }
        ]
      }
    ]
  }
];
