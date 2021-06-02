// rollup.config.js
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/js/select-a11y.js',
    output: [
      {
        file: 'dist/js/select-a11y.js',
        format: 'iife',
        name: 'Select',
      },
      {
        file: 'dist/js/select-a11y.min.js',
        format: 'iife',
        name: 'Select',
        plugins: [terser()],
      },
    ],
  },
  {
    input: 'src/js/prototype-select.js',
    external: ['Drupal', 'jQuery'],
    output: [
      {
        file: 'dist/js/prototype-select.js',
        format: 'iife',
        globals: {
          Drupal: 'Drupal',
          jQuery: '$',
        },
      },
      {
        file: 'dist/js/prototype-select.min.js',
        format: 'iife',
        plugins: [terser()],
        globals: {
          Drupal: 'Drupal',
          jQuery: '$',
        },
      },
    ],
  },
];
