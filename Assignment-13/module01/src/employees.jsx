let rishi = "Rishita Mote";
let john = "John Hopkins";
let chris = "Chris Padres";
let sam = "Sam Harry";
let shivi = "Shivangi Kochrekar";
let saurabh = "Saurabh Deshpande";
let arash = "Arash Patel";
let eric = "Eric Goldberg";
const element = (
  <ul style={{ color: "black", fontSize: "24px" }}>
    <li>{rishi}</li>
    <li>{john}</li>
    <li>{chris}</li>
    <li>{sam}</li>
    <li>{shivi}</li>
    <li>{saurabh}</li>
    <li>{arash}</li>
    <li>{eric}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
