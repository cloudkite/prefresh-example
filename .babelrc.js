const alias = {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
};

module.exports = {
    presets: [
        '@babel/env',
        '@babel/react',
        '@babel/typescript',
    ],
    plugins: [
        '@babel/proposal-class-properties',
        ['babel-plugin-module-resolver', { alias }],
        '@prefresh/babel-plugin'
    ],
};
  
