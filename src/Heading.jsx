const React = require("react");

const date = new Date();
const currentime = date.getHours();
let greeting;
const customstyle = {
  color: ""
};
if (currentime < 12) {
  greeting = "Good Morning";
  customstyle.color = "red";
} else if (greeting < 18) {
  greeting = "Good Afternoon";
  customstyle.color = "green";
} else {
  greeting = "Good Evening";
  customstyle.color = "blue";
}
function Heading() {
  return (
    <h1 className="heading" style={customstyle}>
      {greeting}
    </h1>
  );
}
export default Heading;
