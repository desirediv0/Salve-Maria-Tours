module.exports = {
  apps: [
    {
      name: "salve-maria-tours",
      cwd: "/root/Salve-Maria-Tours",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 7005
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      error_file: "/root/.pm2/logs/salve-maria-error.log",
      out_file: "/root/.pm2/logs/salve-maria-out.log",
      log_date_format: "DD/MM/YYYY HH:mm:ss"
    }
  ]
};
