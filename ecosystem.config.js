module.exports = {
  apps: [{
    name: 'meituan',
    script: '/usr/local/bin/npm',
    instances: 1,
    autorestart: true,
    watch: false
  }]
}
