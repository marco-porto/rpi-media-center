export default function handler(req, res) {
  const exec = require("child_process").exec,
    script = exec("git status"); //sudo shutdown -h 1 (shutdown 1 min)
  script.on("exit", (code) => {
    if (code == 0) res.status(200).json({ message: "Shutting down in a minute" });
    else res.status(500).json({ message: "Error while shutting down" });
  });
}
