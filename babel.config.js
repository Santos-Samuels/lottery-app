module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@shared": "./src/shared",
          "@stacks": "./src/stacks",
          "@store": "./src/store",
        }
      }]
    ]
  };
};
