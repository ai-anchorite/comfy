module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",                
        env: {
          PYTORCH_ENABLE_MPS_FALLBACK: "1",
          TOKENIZERS_PARALLELISM: "false"
        },                  
        path: "app",               
        message: [
          "python main.py {{platform === 'win32' && gpu === 'amd' ? '--directml' : args.sage ? '--use-sage-attention' : args.flash ? '--use-flash-attention' : ''}}"
        ],
        on: [{
          "event": "/starting server.+(http:\/\/[a-zA-Z0-9.]+:[0-9]+)/i",
          "done": true
        }, {
          "event": "/errno/i",
          "break": false
        }, {
          "event": "/error:/i",
          "break": false
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ]
}
