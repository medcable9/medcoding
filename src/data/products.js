import img1 from "../assets/images/cable.png";

export const productCategories = [
  {
    name: "Power Cables",
    subcategories: [
      {
        name: "High Voltage Cables",
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
          }
        ]
      }
    ]
  }
];
