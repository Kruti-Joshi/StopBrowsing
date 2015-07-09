var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var { ToggleButton } = require('sdk/ui/button/toggle');
var { setTimeout } = require("sdk/timers");
var notifications = require("sdk/notifications");

var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("get-text.js")
});

var button = ToggleButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./clock-16.ico",
    "32": "./clock-32.ico",
    "64": "./clock-64.ico"
  },
  onChange: handleChange
});

function handleChange(state) {
  if (state.checked) {
   text_entry.show({
     position: button
  });
 }

}

function handleHide() {
  button.state('window', {checked: false});
}

text_entry.on("show", function() {
  text_entry.port.emit("show");
});

text_entry.on("close", handleHide);

text_entry.port.on("text-entered", function (text) {
  text_entry.hide();
  setTimeout(function() { inform(); },text*1000);
});

function inform(){
  notifications.notify({
  title: "Oops! Time up!",
  text: "You should close the browser now.",
  });
}
