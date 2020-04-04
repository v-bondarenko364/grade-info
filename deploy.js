const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'deploy',
    repo: 'https://github.com/v-bondarenko364/grade-info.git'
}, () => console.log('---successfully deployed---'));