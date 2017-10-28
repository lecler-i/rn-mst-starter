module.exports = function(plop) {

  /* TODO
  -----------
  ** __specs__ for module generator
  ** Additional prompt for stateless module generator
  ** Better way to append reducers ? If dev deletes the commented lines it won't work.
  ** Component generator
  ** Any way to get name inline ? Like ` plop module name `
  **/

  plop.setGenerator('screen', {
    description: 'Generates new screen',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Screen name (Casing will be modified)'
    }],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{properCase name}}/index.js',
        templateFile: 'generators/screen/ScreenIndex.js.hbs'
      },
      {
        type: 'add',
        path: 'src/screens/{{properCase name}}/styles.js',
        templateFile: 'generators/screen/ScreenStyles.js.hbs'
      },
      {
        type: 'add',
        path: 'src/screens/{{properCase name}}/{{properCase name}}.js',
        templateFile: 'generators/screen/ScreenView.js.hbs'
      }
      /* { */
      // type: 'modify',
      // path: 'src/redux/reducer.js',
      // pattern: /\/\/ ## Generator Reducer Imports/gi,
      // template: '// ## Generator Reducer Imports\r\nimport {{properCase name}}Reducer from \'../modules/{{camelCase name}}/{{properCase name}}State\';'
      // },
      // {
      // type: 'modify',
      // path: 'src/redux/reducer.js',
      // pattern: /\/\/ ## Generator Reducers/gi,
      // template: '// ## Generator Reducers\r\n  {{camelCase name}}: {{properCase name}}Reducer,'
      /* } */
    ]
  });

  plop.setGenerator('store', {
    description: 'Generates new store',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name of the store (Casing will be modified)'
    }],
    actions: [
      {
        type: 'add',
        path: 'src/stores/{{properCase name}}.js',
        templateFile: 'generators/store/Store.js.hbs'
      },
      {
        type: 'add',
        path: 'src/stores/__specs__/{{properCase name}}.spec.js',
        templateFile: 'generators/store/__specs__/Store.spec.js.hbs'
      },
      {
        type: 'modify',
        path: 'src/stores/index.js',
        pattern: /\/\/ ## Generated Stores Imports/gi,
        template: '// ## Generated Stores Imports\nimport {{properCase name}}Store from \'./{{properCase name}}\';'
      },
      {
        type: 'modify',
        path: 'src/stores/index.js',
        pattern: /\/\/ ## Generated Stores Includes/gi,
        template: '// ## Generated Stores Includes\n  {{properCase name}}Store,'
      }
      // {
      // type: 'modify',
      // path: 'src/redux/reducer.js',
      // pattern: /\/\/ ## Generator Reducers/gi,
      // template: '// ## Generator Reducers\r\n  {{camelCase name}}: {{properCase name}}Reducer,'
      /* } */
    ]
  });
};
