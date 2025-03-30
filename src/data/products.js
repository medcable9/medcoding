import bendingIcon from "../assets/cables/icons/bending.png";
import flameIcon from "../assets/cables/icons/fireproof.png";

import bw from "../assets/images/building-wires.png";

import nya from "../assets/cables/nya.png";
import nya1 from "../assets/cables/nya1.png";
import nya2 from "../assets/cables/nya2.png";
import nya_cat from "../assets/cables/catalogs/NYA Cable.pdf";

import nyaf from "../assets/cables/nyaf.png";
import nyaf_cat from "../assets/cables/catalogs/NYAF Cable.pdf";

import nyz1 from "../assets/cables/nyz1.png";
import nyz2 from "../assets/cables/nyz2.png";
import nyz_cat from "../assets/cables/catalogs/NYZ Cable.pdf";

import nym from "../assets/cables/nym.png";
import nym_cat from "../assets/cables/catalogs/NYM Cable.pdf";

import nymhy from "../assets/cables/nymhy.png";
import nymhy_cat from "../assets/cables/catalogs/NYMHY Cable.pdf";

import nyy from "../assets/cables/nyy.png";
import nyy_cat from "../assets/cables/catalogs/NYY Cable.pdf";

import n2xy from "../assets/cables/n2xy.png";
import n2xy_cat from "../assets/cables/catalogs/N2XY Cable.pdf";

import nayy from "../assets/cables/nayy.png";
import nayy_cat from "../assets/cables/catalogs/NAYY Cable.pdf";

import na2xy from "../assets/cables/na2xy.png";
import na2xy_cat from "../assets/cables/catalogs/NA2XY Cable.pdf";


export const productCategories = [
  {
    name: "Building Wires",
    image: bw,
    subcategories: [
      {
        name: "Solid Conductors",
        products: [
          {
            name: "NYA",
            main_img: nya,
            images_dict: {
              [nya1]: "H05V-U, H07V-U",
              [nya2]: "H07V-R"
            },  
            other_names:["H05V-U", "H07V-U", "H07V-R"],
            other_names_string:"H05V-U, H07V-U/R",
            seriesCode: "1000",
            application: "Appropriate for both power and lighting circuits and for the wiring of buildings. This cable is designed for use in partially visible conduits and fully enclosed installation ducts and is particularly well-suited for the internal wiring of appliances.",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
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
              <li><h3>Insulation</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
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
                </ul>
              </li>
              <li><h3>Marking and Packing</h3>
                <ul>
                  <li>Coil/Drum: from 0.5 mm² to 50 mm²</li>
                  <li>Drum: > 50 mm²</li>
                </ul>
              </li>
            </ul>
          `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating (U0/U)</h3>
                  <ul>
                    <li>Sections up to 1mm²: 300/500V</li>
                    <li>Sections >= 1.5mm²: 450/750V</li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>For 300/500V rated cable: 1.5KV</li>
                    <li>For 450/750V rated cable: 2.5KV</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 70°C</h3></li>
                <li><h3>🌡️ Max Short circuit temperature: 160°C</h3></li>
                <li><h3>🌡️ Cable operating Temp Range: -15°C to +55°C</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
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
          }
        ]
      },
    {
      name: "Flexible Conductors",
        products: [
          {
            name: "NYAF",
            main_img: nyaf,
            images_dict: {
              [nyaf]: ""
            },  
            other_names:["H05V-K","H07V-K","BS 6231"],
            other_names_string:"H05V-K/ and H07V-K / BS 6231",
            seriesCode: "2000",
            application: "For Fixed installation in conduits on or under plaster. Suitable for protected installation in and on lighting facilities or control devices for voltages up to 750V AC or 1000V DC against ground.",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>Class 5 flexible copper conductor</li>
                  <li>Shape: Circular</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
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
                </ul>
              </li>
              <li><h3>Marking and Packing</h3>
                <ul>
                  <li>Coil/Drum: from 0.5 mm2 to 35 mm2</li>
                  <li>Drum: > 35 mm²</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating (U0/U)</h3>
                  <ul>
                    <li>Sections up to 1mm²: 300/500V</li>
                    <li>Sections >= 1.5mm²: 450/750V</li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>For 300/500V rated cable: 1.5KV</li>
                    <li>For 450/750V rated cable: 2.5KV</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 70°C</h3></li>
                <li><h3>🌡️ Max Short circuit temperature: 160°C</h3></li>
                <li><h3>🌡️ Cable operating Temp Range: -15°C to +55°C</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
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
          },
          {
            name: "NYZ",
            main_img: nyz1,
            images_dict: {
              [nyz1]: "",
              [nyz2]: ""
            },  
            other_names:["H03VH-H"],
            other_names_string:"H03VH-H",
            seriesCode: "3000",
            application: "Lightweight cable suitable for usage in homes, kitchens, and businesses, used to supply household machines subjected to very low mechanical stresses.",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>Class 5 flexible copper conductor</li>
                  <li>Shape: Circular, fine annealed copper</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Outer sheath</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul> 
                  <p>Any color can be requested, including the standard colors below:</p>
                  <div class="color-list">
                    <div class="color-item"><div class="color-icon" style="background-color: white;"></div>White</div>
                    <div class="color-item"><div class="color-icon" style="background-color: white;"></div>White</div>
                    <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
                    <div class="color-item"><div class="color-icon" style="background-color: red;"></div>Red</div>
                  </div>
                </ul>
              </li>
              <li><h3>Marking</h3>
                <ul>
                  <li>Coil/Drum: from 0.5 mm2 to 35 mm²</li>
                  <li>Drum: > 35 mm²</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating (U0/U)</h3>
                  <ul>
                    <li>300/500 V</li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>2KV</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 70°C</h3></li>
                <li><h3>🌡️ Max Short circuit temperature: 150°C</h3></li>
                <li><h3>🌡️ Cable operating Temp Range: -15°C to +55°C</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
                  <ul>
                    <li>Single Core: 7.5 x overall diameter</li>
                    <li>Multicore: 4 x overall diameter</li>
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
                <li>DIN VDE 0250</li>
              </ul>
            `,
            catalogPdf: nyz_cat,
          },
          {
            name: "NYM",
            main_img: nym,
            images_dict: {
              [nym]: ""
            },  
            other_names:["NYM-O/J","FR-N05VV"],
            other_names_string:"NYM-O/J, FR-N05VV",
            seriesCode: "5000",
            application: "For fixed indoor installations in dry, damp, or wet conditions, into concrete, in residential, commercial, or industrial situations. Installation in direct sunlight is not recommended without extra shielding.",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>1.5 mm² to 6 mm²: Class 1 solid copper conductor</li>
                  <li>1.5 mm² to 35 mm²: Class 2 stranded copper conductor</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Filler/ bedding</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Outer sheath</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
                  <p>Any color can be requested, including the standard colors below:</p>
                  <div class="color-list">
                    <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
                    <div class="color-item"><div class="color-icon" style="background-color: gray;"></div>Gray</div>
                  </div>
                </ul>
              </li>
              <li><h3>Marking</h3>
                <ul>
                  <li>Applicable only as 100 meter/100 yards or on drum based on customer request</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating (U0/U)</h3>
                  <ul>
                    <li>300/500 V</li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>Test voltage: 2Kv / 50Hz</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 70°C</h3></li>
                <li><h3>🌡️ Max Short circuit temperature: 160°C</h3></li>
                <li><h3>🌡️ Cable operating Temp Range: -15°C to +55°C</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
                  <ul>
                    <li>Single Core: 7.5 x overall diameter</li>
                    <li>Multicore: 4 x overall diameter</li>
                  </ul>
                </li>
              </ul>
            `,
            standards: `
              <ul>
                <li>IEC 60227</li>
                <li>BS 6004</li>
                <li>Conductor acc. to IEC 60228</li>
                <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332-1-2</li>
                <li>DIN VDE 0281-1</li>
                <li>VDE 0250</li>
                <li>For thermoplastic insulation : EN 50525-2-31:2011</li>
              </ul>
            `,
            catalogPdf: nym_cat,
          },
          {
            name: "NYMHY",
            main_img: nymhy,
            images_dict: {
              [nymhy]: ""
            },  
            other_names:["H05VV-F"],
            other_names_string:"H05VV-F",
            seriesCode: "6000",
            application: "Cable suitable for usage in household appliances, kitchens, and offices. For use with portable lighting such as table lamps and office equipment. Outdoor or industrial use is generally not recommended.",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>Class 5 flexible copper conductor</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Outer sheath</h3>
                <ul>
                  <li>PVC</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
                  <p>Any color can be requested, including the standard colors below:</p>
                  <div class="color-list">
                    <div class="color-item"><div class="color-icon" style="background-color: white;"></div>White</div>
                    <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
                  </div>
                </ul>
              </li>
              <li><h3>Marking</h3>
                <ul>
                  <li>by ink jet on one line each one meter based on the request</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating (U0/U)</h3>
                  <ul>
                    <li>300/500 V</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 70°C</h3></li>
                <li><h3>🌡️ Max Short circuit temperature: 160°C</h3></li>
                <li><h3>🌡️ Cable operating Temp Range: -15°C to +50°C</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
                  <ul>
                    <li>6 x overall diameter</li>
                  </ul>
                </li>
              </ul>
            `,
            standards: `
              <ul>
                <li>IEC 60227</li>
                <li>Conductor acc. to IEC 60228</li>
                <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332</li>
                <li>EN 50525-2-11</li>
              </ul>
            `,
            catalogPdf: nymhy_cat,
          },
          {
            name: "NYY",
            main_img: nyy,
            images_dict: {
              [nyy]: ""
            },  
            other_names:[""],
            other_names_string:"",
            seriesCode: "7000",
            application: "NYY cables are designed for power distribution in both industrial and residential settings, suitable for both underground and above-ground installations. They are also weather- resistant, making them ideal for use in outdoor environments",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>1.5 mm² to 6 mm²: Class 1 or 2 solid copper conductor</li>
                  <li>>6mm²: Class 2 stranded copper conductor</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Filler</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
                  <p>Any color can be requested, including the standard colors below:</p>
                  <div class="color-list">
                    <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
                    <div class="color-item"><div class="color-icon" style="background-color: gray;"></div>Gray</div>
                  </div>
                </ul>
              </li>
              <li><h3>Marking</h3>
                <ul>
                  <li>by ink jet on one line each one meter based on the request</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating U0/U(Um):</h3>
                  <ul>
                    <li>0.6/1 (1.2) KV/li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>3.5KV</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 70ºC</h3></li>
                <li><h3>🌡️ Max Short circuit temperature:</h3></li>
                  <ul>
                    <li>sections ≤ 300 mm²: 160ºC</li>
                    <li>sections > 300 mm²: 140ºC</li>
                  </ul>
                <li><h3>🌡️ Cable operating Temp Range: Fixed: -15ºC to +70ºC</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
                  <ul>
                    <li>10 x overall diameter</li>
                  </ul>
                </li>
              </ul>
            `,
            standards: `
              <ul>
                <li>IEC 60502-1</li>
                <li>Conductor acc. to IEC 60228</li>
                <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332</li>
                <li>VDE 0276-603</li>
              </ul>
            `,
            catalogPdf: nyy_cat,
          },
          {
            name: "N2XY",
            main_img: n2xy,
            images_dict: {
              [n2xy]: ""
            },  
            other_names:["U1000R02V"],
            other_names_string:"U1000R02V",
            seriesCode: "8000",
            application: "N2XY cables are designed to deliver electricity to low-voltage installation systems. They are highly suited for underground use in industrial applications, offering additional mechanical protection. These cables can also be installed in cable trays, conduits, or mounted on walls",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>1.5 mm² to 6 mm²: Class 1 or 2 solid copper conductor</li>
                  <li>>6mm²: Class 2 stranded copper conductor</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>XLPE (Cross Linked Polyethylene)</li>
                </ul>
              </li>
              <li><h3>Bedding</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Outer Sheath</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
                  <p>Any color can be requested, including the standard colors below:</p>
                  <div class="color-list">
                    <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
                    <div class="color-item"><div class="color-icon" style="background-color: gray;"></div>Gray</div>
                  </div>
                </ul>
              </li>
              <li><h3>Marking</h3>
                <ul>
                  <li>by ink jet on one line each one meter based on the request</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating U0/U(Um):</h3>
                  <ul>
                    <li>0.6/1 (1.2) KV</li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>3.5KV</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 90ºC</h3></li>
                <li><h3>🌡️ Max Short circuit temperature: 250ºC</h3></li>
                <li><h3>🌡️ Cable operating Temp Range: Fixed: -20ºC to +90ºC</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
                  <ul>
                    <li>10 x overall diameter</li>
                  </ul>
                </li>
              </ul>
            `,
            standards: `
              <ul>
                <li>IEC 60502-1</li>
                <li>Conductor acc. to IEC 60228</li>
                <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332</li>
                <li>VDE 0276-603</li>
              </ul>
            `,
            catalogPdf: n2xy_cat,
          },
          {
            name: "NAYY",
            main_img: nayy,
            images_dict: {
              [nayy]: ""
            },  
            other_names:[""],
            other_names_string:"",
            seriesCode: "9000",
            application: "The NAYY cable is used for power distribution in both industrial and residential settings. It is suitable for indoor and outdoor installations, as well as for use in water and underground",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>≤ 10 mm²: Class 1 solid aluminium conductor</li>
                  <li>>>10mm²: Class 2 stranded aluminum conductor</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Filler</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Outer Sheath</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
                  <p>Any color can be requested, including the standard colors below:</p>
                  <div class="color-list">
                    <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
                    <div class="color-item"><div class="color-icon" style="background-color: gray;"></div>Gray</div>
                  </div>
                </ul>
              </li>
              <li><h3>Marking</h3>
                <ul>
                  <li>by ink jet on one line each one meter based on the request</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating U0/U(Um):</h3>
                  <ul>
                    <li>0.6/1 (1.2) KV</li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>3.5KV</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 70ºC</h3></li>
                <li><h3>🌡️ Max Short circuit temperature:</h3></li>
                  <ul>
                      <li>sections ≤ 300 mm²: 160ºC</li>
                      <li>sections > 300 mm²: 140ºC</li>
                    </ul>
                <li><h3>🌡️ Cable operating Temp Range: Fixed: -15ºC to +70ºC</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
                  <ul>
                    <li>15 x overall diameter</li>
                  </ul>
                </li>
              </ul>
            `,
            standards: `
              <ul>
                <li>IEC 60502-1</li>
                <li>Conductor acc. to IEC 60228</li>
                <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332</li>
                <li>VDE 0276-603</li>
              </ul>
            `,
            catalogPdf: nayy_cat,
          },
          {
            name: "NA2XY",
            main_img: na2xy,
            images_dict: {
              [na2xy]: ""
            },  
            other_names:["U1000AR02V"],
            other_names_string:"U1000AR02V",
            seriesCode: "10000",
            application: "NA2XY cables are designed to deliver electricity to low-voltage installation systems. They are especially suited for underground use in industrial applications, offering enhanced mechanical protection. These cables can also be installed on cable trays, in conduits, or mounted on walls",
            construction: `
            <ul>
              <li><h3>Conductor</h3>
                <ul>
                  <li>≤ 10 mm²: Class 1 solid aluminium conductor</li>
                  <li>>10mm²: Class 2 stranded aluminum conductor</li>
                </ul>
              </li>
              <li><h3>Insulation</h3>
                <ul>
                  <li>XLPE (Cross Linked Polyethylene)</li>
                </ul>
              </li>
              <li><h3>Bedding</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Outer Sheath</h3>
                <ul>
                  <li>PVC (Polyvinyl Chloride)</li>
                </ul>
              </li>
              <li><h3>Jacketing color</h3>
                <ul>
                  <p>Any color can be requested, including the standard colors below:</p>
                  <div class="color-list">
                    <div class="color-item"><div class="color-icon" style="background-color: black;"></div>Black</div>
                    <div class="color-item"><div class="color-icon" style="background-color: gray;"></div>Gray</div>
                  </div>
                </ul>
              </li>
              <li><h3>Marking</h3>
                <ul>
                  <li>by ink jet on one line each one meter based on the request</li>
                </ul>
              </li>
            </ul>
            `,
            technicalCharacteristics: `
              <ul>
                <li><h3>⚡ Voltage Rating U0/U(Um):</h3>
                  <ul>
                    <li>0.6/1 (1.2) KV</li>
                  </ul>
                </li>
                <li><h3>⚡ Test Voltage</h3>
                  <ul>
                    <li>3.5KV</li>
                  </ul>
                </li>
                <li><h3>🌡️ Max continuous operating Temp: 90ºC</h3></li>
                <li><h3>🌡️ Max Short circuit temperature: 250ºC</h3></li>
                <li><h3>🌡️ Cable operating Temp Range: Fixed: Fixed: -20ºC to +90ºC</h3></li>
                <li><h3><img src=${bendingIcon} alt="Bending" class="icon-small"/> Minimum Bending Radius Fixed</h3>
                  <ul>
                    <li>15 x overall diameter</li>
                  </ul>
                </li>
              </ul>
            `,
            standards: `
              <ul>
                <li>IEC 60502-1</li>
                <li>Conductor acc. to IEC 60228</li>
                <li><img src=${flameIcon} alt="Flame" class="icon-small"/> In case of flame retardant/LSZH: IEC/EN 60332</li>
                <li>VDE 0276-603</li>
              </ul>
            `,
            catalogPdf: na2xy_cat,
          }
      ]
    },
    
    ]
  }
];