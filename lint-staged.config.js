module.exports = {
  '*.{js,jsx,ts,tsx,md,html,css,json,yaml,yml}': 'prettier --write',
  'Caddyfile*': 'docker run --rm -v ./:/files -w /files caddy:2 caddy fmt --overwrite',
};
