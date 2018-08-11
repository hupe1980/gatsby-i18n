import fs from 'fs-extra';

export const onPreBootstrap = ({ store, reporter }) => {
  const activity = reporter.activityTimer('@wapps: copy redirect component');
  activity.start();

  const program = store.getState().program;

  const module = `
      const { Redirect } = require('@wapps/gatsby-i18n');
      module.exports = Redirect;
  `;

  const dir = `${program.directory}/.cache/@wapps`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFileSync(`${dir}/redirect.js`, module);

  activity.end();
};

export default onPreBootstrap;
