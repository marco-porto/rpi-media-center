import ks from "node-key-sender";
export default function handler(req, res) {
   ks.sendCombination(['alt', 'tab']);
   res.status(200).json({ message: "Minimize" }); //macro => alt + h
}
/*
See this
https://www.tomshardware.com/news/raspberry-pi-custom-keyboard-shortcuts,40215.html
https://www.raspberrypi.org/forums/viewtopic.php?t=238080
*/
