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
    const componentGeneratePath = 'src/components/ui';
    return [
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/index.ts`,
        templateFile: 'generators/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
        templateFile: 'generators/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/__stories__/{{kebabCase name}}.playground.stories.tsx`,
        templateFile: 'generators/component/component.playground.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/__stories__/{{kebabCase name}}.features.stories.tsx`,
        templateFile: 'generators/component/component.features.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: `${componentGeneratePath}/{{kebabCase name}}/__tests__//{{kebabCase name}}.test.tsx`,
        templateFile: 'generators/component/component.test.tsx.hbs',
      },
    ];
  },
};
