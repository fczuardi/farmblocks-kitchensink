const React = require("react");
const ReactDOM = require("react-dom");
const Alert = require("@crave/farmblocks-alert").default;
const { AlertTypes } = require("@crave/farmblocks-alert");

const root = document.createElement("div");

ReactDOM.render(
  <Alert
    dismissable
    type={AlertTypes.POSITIVE}
    text="Positive alert!"
    onDismiss={() => {
      console.log("dismiss button clicked");
    }}
  />,
  root
);

document.body.appendChild(root);
