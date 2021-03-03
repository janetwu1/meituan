module.exports = {
  apps: [{
    name: 'meituan',
    script: '/usr/local/bin/npm',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false
  }]
}
