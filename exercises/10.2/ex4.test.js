const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

it('pegar a lista de repositórios ', async () => {
  const url = await getRepos('https://api.github.com/orgs/tryber/repos');

    expect(url).toContain('sd-01-week4-5-project-todo-list');
    expect(url).toContain('sd-01-week4-5-project-meme-generator');
  });