module.exports {
  run  [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/comfyanonymous/ComfyUI app",
        ]
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": [
          "git clone https://github.com/comfyanonymous/ComfyUI_examples"
        ],
        "path": "workflows"
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": [
          "git clone https://github.com/ltdrdata/ComfyUI-Manager",
        ],
        "path": "app/custom_nodes"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",  
        // venv_python: "3.11",        
        path: "app",                
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install -U bitsandbytes"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                
          path: "app",               
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    }
  ]
}
