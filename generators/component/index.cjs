/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What is the component's name?",
    },
  ],
  actions: () => {
    const componentGeneratePath = 'packages/web/src/components/ui';
    return [
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
        templateFile: 'generators/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx`,
        templateFile: 'generators/component/component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/{{kebabCase name}}.test.tsx`,
        templateFile: 'generators/component/component.test.tsx.hbs',
      },
    ];
  },
};
