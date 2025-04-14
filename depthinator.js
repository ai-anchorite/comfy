module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "app/custom_nodes",
        message: [ "git clone https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite" ],
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/custom_nodes/ComfyUI-VideoHelperSuite",
        message: [ "git pull" ],
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "app/env",
        path: "app/custom_nodes/ComfyUI-VideoHelperSuite",
        message: [ "pip install -r requirements.txt", ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/custom_nodes",
        message: [ "git clone https://github.com/DepthAnything/Video-Depth-Anything.git" ],
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/custom_nodes/Video-Depth-Anything",
        message: [ "git pull" ],
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "app/env",
        path: "app/custom_nodes/Video-Depth-Anything",
        message: [ "pip install -r requirements.txt", ]
      }
    },
  ]
}
