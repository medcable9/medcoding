import nya from "../assets/cables/nya.jpeg";
import nya1 from "../assets/cables/nya1.jpeg";
import nya_cat from "../assets/cables/catalogs/NYA Cable.pdf";

import nyaf from "../assets/cables/nyaf.jpg";
import nyaf_cat from "../assets/cables/catalogs/NYAF Cable.pdf";

import bendingIcon from "../assets/cables/icons/fireproof.png";
import flameIcon from "../assets/cables/icons/bending.png";


export const productCategories = [
  {
    name: "Building Wires",
    image: nya,
    description: "",
    products: [
      {
        name: "NYA",
        images_dict: {
          [nya]: "H05V-U, H07V-U",
          [nya1]: "H07V-R"
        },  
        other_names:"H05V-U, H07V-U and H07V-R",
        seriesCode: "1000",
        application: "Appropriate for both power and lighting circuits and for the wiring of buildings. This cable is designed for use in partially visible conduits and fully enclosed installation ducts and is particularly well-suited for the internal wiring of appliances.",
        construction: `
        <ul>
          <li><h3>Layer 1: Conductor</h3>
            <ul>
              <li>Solid copper Class 1 NYAe for H05V-U, H07V-U</li>
              <li>Stranded copper Class 2 NYA for H07V-R</li>
              <li>Shape: Circular
                <ul>
                  <li>Round stranded copper</li>
                  <li>Compact stranded copper >= 16 mm²</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><h3>Layer 2: Insulation</h3>
            <ul>
              <li>PVC</li>
            </ul>
          </li>
          <li><h3>Jacketing color:</h3>
            <p>Any color can be requested, including the standard colors below:</p>
            <div class="color-list">
              <div class="color-item"><div class="color-icon" style="background-color: red;"></div>Red</div>
              <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
              <div class="color-item"><div class="color-icon" style="background-color: blue;"></div>Blue</div>
              <div class="color-item"><div class="color-icon" style="background-color: yellow;"></div>Yellow</div>
              <div class="color-item"><div class="color-icon" style="background-color: white;"></div>White</div>
              <div class="color-item">
                <div class="color-icon" style="
                    background: yellow; 
                    position: relative;
                    display: flex; 
                    align-items: center; 
                    justify-content: center;">
                    <div style="
                        background: green; 
                        width: 100%;
                        height: 4px; 
                        position: absolute;">
                    </div>
                </div>
                Green/Yellow
            </div>
              <div class="color-item"><div class="color-icon" style="background-color: gray;"></div>Gray</div>
              <div class="color-item"><div class="color-icon" style="background-color: brown;"></div>Brown</div>
            </div>
          </li>
          <li><h3>Marking and Packing:</h3>
            <ul>
              <li>Coil/Drum: from 0.5 mm² to 50 mm²</li>
              <li>Drum: > 50 mm²</li>
            </ul>
          </li>
        </ul>
      `,
        technicalCharacteristics: `
          <ul>
            <li><h3>⚡ Voltage Rating (U0/U):</h3>
              <ul>
                <li>Sections up to 1mm²: 300/500V</li>
                <li>Sections >= 1.5mm²: 450/750V</li>
              </ul>
            </li>
            <li><h3>⚡ Test Voltage:</h3>
              <ul>
                <li>For 300/500V rated cable: 1.5KV</li>
                <li>For 450/750V rated cable: 2.5KV</li>
              </ul>
            </li>
            <li><h3>🌡️ Max continuous operating Temp: 70°C</h3></li>
            <li><h3>🌡️ Max Short circuit temperature: 160°C</h3></li>
            <li><h3>🌡️ Cable operating Temp Range: -15°C to +55°C</h3></li>
            <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed:</h3>
              <ul>
                <li>5 x overall diameter for sections <= 16 mm²</li>
                <li>6 x overall diameter for sections > 16 mm²</li>
              </ul>
            </li>
          </ul>
        `,
        standards: `
          <ul>
            <li>IEC 60228 for copper conductor</li>
            <li>IEC 60227 / EN 50525-2-31</li>
            <li>Conductor acc. to IEC 60228</li>
            <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332-1-2</li>
          </ul>
        `,
        catalogPdf: nya_cat,
      },
      {
        name: "NYAF",
        images_dict: {
          [nyaf]: ""
        },  
        other_names:"H05V-K/ and H07V-K / BS 6231",
        seriesCode: "2000",
        application: "For Fixed installation in conduits on or under plaster. Suitable for protected installation in and on lighting facilities or control devices for voltages up to 750V AC or 1000V DC against ground.",
        construction: `
        <ul>
          <li><h3>Layer 1: Conductor</h3>
            <ul>
              <li>Class 5 flexible copper conductor</li>
              <li>Shape: Circular</li>
            </ul>
          </li>
          <li><h3>Layer 2: Insulation</h3>
            <ul>
              <li>PVC</li>
            </ul>
          </li>
          <li><h3>Jacketing color:</h3>
            <p>Any color can be requested, including the standard colors below:</p>
            <div class="color-list">
              <div class="color-item"><div class="color-icon" style="background-color: red;"></div>Red</div>
              <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
              <div class="color-item"><div class="color-icon" style="background-color: blue;"></div>Blue</div>
              <div class="color-item"><div class="color-icon" style="background-color: yellow;"></div>Yellow</div>
              <div class="color-item"><div class="color-icon" style="background-color: white;"></div>White</div>
              <div class="color-item">
                <div class="color-icon" style="
                    background: yellow; 
                    position: relative;
                    display: flex; 
                    align-items: center; 
                    justify-content: center;">
                    <div style="
                        background: green; 
                        width: 100%;
                        height: 4px; 
                        position: absolute;">
                    </div>
                </div>
                Green/Yellow
              </div>
              <div class="color-item"><div class="color-icon" style="background-color: gray;"></div>Gray</div>
              <div class="color-item"><div class="color-icon" style="background-color: brown;"></div>Brown</div>
              <div class="color-item"><div class="color-icon" style="background-color: green;"></div>Green</div>
            </div>
          </li>
          <li><h3>Marking and Packing:</h3>
            <ul>
              <li>Coil/Drum: from 0.5 mm2 to 35 mm2</li>
              <li>Drum: > 35 mm²</li>
            </ul>
          </li>
        </ul>
      `,
        technicalCharacteristics: `
          <ul>
            <li><h3>⚡ Voltage Rating (U0/U):</h3>
              <ul>
                <li>Sections up to 1mm²: 300/500V</li>
                <li>Sections >= 1.5mm²: 450/750V</li>
              </ul>
            </li>
            <li><h3>⚡ Test Voltage:</h3>
              <ul>
                <li>For 300/500V rated cable: 1.5KV</li>
                <li>For 450/750V rated cable: 2.5KV</li>
              </ul>
            </li>
            <li><h3>🌡️ Max continuous operating Temp: 70°C</h3></li>
            <li><h3>🌡️ Max Short circuit temperature: 160°C</h3></li>
            <li><h3>🌡️ Cable operating Temp Range: -15°C to +55°C</h3></li>
            <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed:</h3>
              <ul>
                <li>3 x overall diameter for sections <= 16 mm²</li>
                <li>4 x overall diameter for sections > 16 mm²</li>
              </ul>
            </li>
          </ul>
        `,
        standards: `
          <ul>
            <li>IEC 60227</li>
            <li>Conductor acc. to IEC 60228</li>
            <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332-1-2</li>
            <li>EN 50525-2-31</li>
            <li>For temperature, BS 6231 Type CK</li>
          </ul>
        `,
        catalogPdf: nyaf_cat,
      }
    ]
  }
];
