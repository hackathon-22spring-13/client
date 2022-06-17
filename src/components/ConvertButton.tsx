import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { canvasState } from '../recoil/atoms/canvas';
import { texUrlState } from '../recoil/atoms/texUrl';
import { tikzState } from '../recoil/atoms/tikz';

const ConvertButton: React.FC = () => {
  const setTikz = useSetRecoilState(tikzState);
  const setTexUrl = useSetRecoilState(texUrlState);
  const canvas = useRecoilValue(canvasState);

  async function handleToTikz() {
    if (canvas) {
      const svgBlob = new Blob(
        [
          `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   sodipodi:docname="tikz.svg"
   inkscape:version="1.1-dev (ddb55ca, 2020-02-02)"
   version="1.1"
   id="svg2"
   viewBox="0 0 148 105"
   height="105mm"
   width="148mm">
  <sodipodi:namedview
     units="mm"
     inkscape:window-maximized="0"
     inkscape:window-y="23"
     inkscape:window-x="38"
     inkscape:window-height="717"
     inkscape:window-width="1280"
     showgrid="true"
     inkscape:current-layer="g4182"
     inkscape:document-units="mm"
     inkscape:cy="156.25514"
     inkscape:cx="302.65266"
     inkscape:zoom="1.3279563"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     borderopacity="1.0"
     bordercolor="#666666"
     pagecolor="#ffffff"
     id="base">
    <inkscape:grid
       id="grid4510"
       type="xygrid" />
  </sodipodi:namedview>
  <defs
     id="defs4">
    <marker
       inkscape:isstock="true"
       style="overflow:visible;"
       id="marker1216"
       refX="0.0"
       refY="0.0"
       orient="auto"
       inkscape:stockid="Arrow1Lend">
      <path
         transform="scale(0.8) rotate(180) translate(12.5,0)"
         style="fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1;fill:#000000;fill-opacity:1"
         d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
         id="path1214" />
    </marker>
    <marker
       inkscape:stockid="Arrow1Lstart"
       orient="auto"
       refY="0.0"
       refX="0.0"
       id="marker1182"
       style="overflow:visible"
       inkscape:isstock="true">
      <path
         id="path1180"
         d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
         style="fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1;fill:#000000;fill-opacity:1"
         transform="scale(0.8) translate(12.5,0)" />
    </marker>
    <marker
       inkscape:collect="always"
       inkscape:isstock="true"
       style="overflow:visible"
       id="Arrow1Lstart"
       refX="0.0"
       refY="0.0"
       orient="auto"
       inkscape:stockid="Arrow1Lstart">
      <path
         transform="scale(0.8) translate(12.5,0)"
         style="fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1;fill:#000000;fill-opacity:1"
         d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
         id="path880" />
    </marker>
    <marker
       inkscape:isstock="true"
       style="overflow:visible;"
       id="Arrow1Lend"
       refX="0.0"
       refY="0.0"
       orient="auto"
       inkscape:stockid="Arrow1Lend">
      <path
         transform="scale(0.8) rotate(180) translate(12.5,0)"
         style="fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1;fill:#000000;fill-opacity:1"
         d="M 0.0,0.0 L 5.0,-5.0 L -12.5,0.0 L 5.0,5.0 L 0.0,0.0 z "
         id="path883" />
    </marker>
  </defs>
  <metadata
     id="metadata7">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-191.99994)"
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1" />
  <g
     transform="translate(0,-191.99994)"
     inkscape:label="Hello Planet Layer"
     inkscape:groupmode="layer"
     id="g4511">
    <rect
       ry="2.8033551e-06"
       y="212.33327"
       x="2.6458335"
       height="52.211117"
       width="115.8875"
       id="rect4512"
       style="fill:#a0a0a0;fill-opacity:1;stroke:#00b8b7;stroke-width:0.26458335;stroke-opacity:1" />
    <text
       id="text4503"
       y="220.26411"
       x="5.542479"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:0%;font-family:serif;-inkscape-font-specification:Serif;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none"
       xml:space="preserve"><tspan
         style="font-size:3.95111px;line-height:1.25;font-family:serif"
         y="220.26411"
         x="5.542479"
         id="tspan4525"
         sodipodi:role="line">A la izquierda, arriba</tspan></text>
    <text
       id="text4507"
       y="233.74001"
       x="61.124699"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:0%;font-family:sans-serif;-inkscape-font-specification:Sans;text-align:center;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       xml:space="preserve"><tspan
         style="font-size:5.08px;line-height:1.25;font-family:sans-serif"
         y="233.74001"
         x="61.124699"
         id="tspan2998"
         sodipodi:role="line">Centrado Sans, más grande</tspan></text>
    <text
       id="text4511"
       y="244.38828"
       x="60.8871"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:0%;font-family:serif;-inkscape-font-specification:Serif;text-align:center;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
       xml:space="preserve"><tspan
         id="tspan3000"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.95111px;line-height:125%;font-family:serif;-inkscape-font-specification:Serif;text-align:center;writing-mode:lr-tb;text-anchor:middle"
         y="244.38828"
         x="60.8871"
         sodipodi:role="line">Centrado serif</tspan><tspan
         id="tspan3004"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.95111px;line-height:125%;font-family:serif;-inkscape-font-specification:Serif;text-align:center;writing-mode:lr-tb;text-anchor:middle"
         y="249.91629"
         x="60.8871"
         sodipodi:role="line">con dos lineas</tspan></text>
    <text
       id="text4515"
       y="260.86472"
       x="116.04219"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:0%;font-family:serif;-inkscape-font-specification:Serif;text-align:end;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       xml:space="preserve"><tspan
         style="font-size:3.95111px;line-height:1.25;font-family:serif"
         y="260.86472"
         x="116.04219"
         id="tspan4527"
         sodipodi:role="line">A la derecha, abajo</tspan></text>
    <path
       sodipodi:nodetypes="cc"
       inkscape:connector-curvature="0"
       id="path4511"
       d="M 92.604099,208.61536 131.58605,195.20981"
       style="fill:none;stroke:#000000;stroke-width:0.26458335px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    <path
       inkscape:connector-curvature="0"
       id="path4512"
       d="M 140.22917,281.12494 127,254.6666 l 0,-23.8125 18.52084,0"
       style="fill:none;fill-rule:evenodd;stroke:#00ffff;stroke-width:0.70555556;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none" />
    <path
       inkscape:connector-curvature="0"
       id="path4521"
       d="m 40.550321,203.00897 13.22916,-7.9375 31.749995,0 0,13.22917 -34.395825,0 z"
       style="fill:#ff0000;fill-opacity:1;fill-rule:evenodd;stroke:#0093a8;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <circle
       r="6.6145835"
       cy="205.71869"
       cx="128.32292"
       id="path4522"
       style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.26458335;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="ccccc"
       inkscape:connector-curvature="0"
       id="path2999"
       d="m 7.8578941,207.1464 0,-8.46667 c 4.2333309,4.23333 12.6999979,-4.23333 16.9333339,0 l 0,8.46667 z"
       style="fill:none;stroke:#000000;stroke-width:0.28222224px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="ccccc"
       inkscape:connector-curvature="0"
       id="path2999-7"
       d="m 42.333333,270.47911 0,8 q 8,8 16,0 l 0,-8 z"
       style="fill:none;stroke:#000000;stroke-width:0.28222224px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    <circle
       r="7.9375"
       cy="281.12494"
       cx="74.083336"
       id="path4166"
       style="fill:#466ae4;fill-opacity:1;stroke:none;stroke-width:1.85208333;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
       sodipodi:open="true"
       d="m 67.852124,286.68775 a 8.7312498,8.5989733 0 0 1 3.452156,-9.64013 8.7312498,8.5989733 0 0 1 10.370511,0.42152"
       sodipodi:end="5.3901294"
       sodipodi:start="2.8441577"
       sodipodi:ry="8.5989733"
       sodipodi:rx="8.7312498"
       sodipodi:cy="284.16766"
       sodipodi:cx="76.199997"
       sodipodi:type="arc"
       id="path4168"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
       sodipodi:open="true"
       d="m 73.422665,272.82527 a 8.7312498,8.5989733 0 0 1 5.436544,9.00658 8.7312498,8.5989733 0 0 1 -7.435827,7.49378"
       sodipodi:end="1.4290001"
       sodipodi:start="5.0917228"
       sodipodi:ry="8.5989733"
       sodipodi:rx="8.7312498"
       sodipodi:cy="280.81296"
       sodipodi:cx="70.189468"
       sodipodi:type="arc"
       id="path4168-6"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
       sodipodi:open="true"
       d="m 65.63777,281.26735 a 7.2760415,5.9231963 0 0 1 8.358114,1.30599 7.2760415,5.9231963 0 0 1 1.118361,6.8682"
       sodipodi:end="0.4928988"
       sodipodi:start="4.2773377"
       sodipodi:ry="5.9231963"
       sodipodi:rx="7.2760415"
       sodipodi:cy="286.63879"
       sodipodi:cx="68.704308"
       sodipodi:type="arc"
       id="path4185"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <ellipse
       ry="0.79375505"
       rx="0.6614573"
       cy="275.80832"
       cx="77.051155"
       id="path4187"
       style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <ellipse
       ry="0.79375505"
       rx="0.6614573"
       cy="287.15048"
       cx="75.887985"
       id="path4187-0"
       style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <ellipse
       ry="0.79375505"
       rx="0.6614573"
       cy="280.57581"
       cx="68.279968"
       id="path4187-0-4"
       style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <ellipse
       transform="rotate(-30)"
       ry="5.2916665"
       rx="14.552083"
       cy="298.36237"
       cx="-45.471081"
       id="path4165"
       style="fill:#007f7f;fill-opacity:0.77294683;stroke:#ff0000;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
       d="m 90.644406,272.9367 a 6,3 0 0 1 6.216429,-0.78877 6,3 0 0 1 4.090285,2.46993 6,3 0 0 1 -2.709306,2.90655"
       sodipodi:open="true"
       sodipodi:end="1"
       sodipodi:start="3.9"
       sodipodi:ry="3"
       sodipodi:rx="6"
       sodipodi:cy="275"
       sodipodi:cx="95"
       sodipodi:type="arc"
       id="path4177"
       style="fill:none;fill-opacity:1;stroke:#ffbcb9;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <path
       sodipodi:open="true"
       d="m 98.241814,277.52441 a 6,3 0 0 1 -7.863202,-0.61112 6,3 0 0 1 0.265794,-3.97659"
       sodipodi:end="3.9"
       sodipodi:start="1"
       sodipodi:ry="3"
       sodipodi:rx="6"
       sodipodi:cy="275"
       sodipodi:cx="95"
       sodipodi:type="arc"
       id="path4179"
       style="fill:none;fill-opacity:1;stroke:#ffbc00;stroke-width:0.5;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
    <text
       id="text4167"
       y="257.31244"
       x="60.533772"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:0%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';text-align:center;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:middle;fill:#0000ff;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       xml:space="preserve"><tspan
         style="font-size:6.35px;line-height:1.25;fill:#0000ff;fill-opacity:1;stroke-width:0.264583px"
         y="257.31244"
         x="60.533772"
         id="tspan4169"
         sodipodi:role="line">En azul</tspan></text>
    <text
       id="text4177"
       y="225.56244"
       x="60.632992"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;line-height:0%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:none;font-variant-caps:normal;font-variant-numeric:normal;text-align:center;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:middle;fill:#00ff00;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       xml:space="preserve"><tspan
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93889px;line-height:125%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:none;font-variant-caps:normal;font-variant-numeric:normal;text-align:center;writing-mode:lr-tb;text-anchor:middle;fill:#00ff00;fill-opacity:1;stroke-width:0.264583px"
         y="225.56244"
         x="60.632992"
         id="tspan4179"
         sodipodi:role="line">Green<tspan
   id="tspan4180"
   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.93889px;line-height:125%;font-family:monospace;-inkscape-font-specification:'monospace, Normal';font-variant-ligatures:none;font-variant-caps:normal;font-variant-numeric:normal;text-align:center;writing-mode:lr-tb;text-anchor:middle">terminal</tspan> font</tspan></text>
    <g
       transform="translate(-5.2916667,-6.6145833)"
       id="g4182">
      <path
         style="fill:#b7b7b7;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.26499999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         d="m 10.583333,277.1562 13.229167,0 0,9.26041 c -1.322917,3.96876 -11.90625,3.96876 -13.229167,0 z"
         id="path3375"
         inkscape:connector-curvature="0"
         sodipodi:nodetypes="ccccc" />
      <ellipse
         style="fill:#e0e1e1;fill-opacity:1;stroke:#000000;stroke-width:0.26499999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path4523"
         cx="17.174067"
         cy="277.31345"
         rx="6.6237669"
         ry="2.6689951" />
      <path
         inkscape:connector-curvature="0"
         id="path3372"
         d="m 10.583333,291.70827 13.229167,0 0,6.61458 -6.614583,0 -6.614584,0 z"
         style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
      <path
         inkscape:connector-curvature="0"
         id="path55"
         d="m 127,225.07285 h 21.16666"
         style="fill:none;stroke:#000000;stroke-width:0.265;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none;marker-end:url(#Arrow1Lend)" />
      <path
         inkscape:connector-curvature="0"
         id="path1156"
         d="m 127,233.01035 h 21.16666"
         style="fill:none;stroke:#000000;stroke-width:0.26458300000000001px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#Arrow1Lstart)" />
      <path
         inkscape:connector-curvature="0"
         id="path1178"
         d="m 142.875,246.23952 v 18.52083"
         style="fill:none;stroke:#000000;stroke-width:0.26458300000000001px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#marker1182);marker-end:url(#marker1216)" />
    </g>
    <path
       sodipodi:nodetypes="czcczcc"
       inkscape:connector-curvature="0"
       id="path848"
       d="m 25.135416,271.86452 c 0,0 0,1.32292 5.291667,1.32292 5.291667,0 5.291667,-1.32292 5.291667,-1.32292 v 5.29167 c 0,0 0,1.32292 -5.291667,1.32291 -5.291667,-1e-5 -5.291667,-1.32291 -5.291667,-1.32291 v -5.29167"
       style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="czczc"
       inkscape:connector-curvature="0"
       id="path850"
       d="m 25.135416,271.86454 c 0,0 0,1.3229 5.291667,1.32291 5.291667,10e-6 5.291667,-1.32291 5.291667,-1.32291 0,0 0,-1.32292 -5.291667,-1.32292 -5.291667,0 -5.291667,1.32292 -5.291667,1.32292 z"
       style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    <path
       sodipodi:nodetypes="cczccc"
       inkscape:connector-curvature="0"
       id="path852"
       d="m 25.135416,281.12494 v 5.29166 c 0,0 1.322917,2.64583 5.291667,0 3.96875,-2.64583 5.291667,0 5.291667,0 v -5.29166 z"
       style="fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
  </g>
</svg>
`,
        ],
        { type: 'image/svg+xml' },
      );
      const formData = new FormData();
      formData.append('svg_file', svgBlob);
      const res = await axios.post('http://localhost:5000/file', formData);
      setTikz(res.data);
      const texBlob = new Blob([res.data], { type: 'application/x-tex' });
      setTexUrl(URL.createObjectURL(texBlob));
      alert('succeeded!');
    }
  }

  return (
    <button
      className='rounded-lg bg-purple-500 mx-1 text-white mb-4 w-full p-2 hover:bg-purple-600'
      onClick={handleToTikz}
    >
      変換!
    </button>
  );
};

export default ConvertButton;
