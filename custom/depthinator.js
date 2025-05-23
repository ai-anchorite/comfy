module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        path: "../app/custom_nodes",
        message: [ "git clone https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite" ],
      }
    },
    {
      method: "shell.run",
      params: {
        path: "../app/custom_nodes/ComfyUI-VideoHelperSuite",
        message: [ "git pull" ],
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "../../env",
        path: "../app/custom_nodes/ComfyUI-VideoHelperSuite",
        message: [ "pip install -r requirements.txt", ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "../app/custom_nodes",
        message: [ "git clone https://github.com/yuvraj108c/ComfyUI-Video-Depth-Anything" ],
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "../../env",
        path: "../app/custom_nodes/ComfyUI-Video-Depth-Anything",
        message: [ 
           "pip install -r requirements.txt", 
           "pip install xformers"
           ]
       }
    }
  ]
}
