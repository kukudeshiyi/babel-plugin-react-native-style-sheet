import test from 'babel-plugin-tester';
import plugin, { PLUGIN_NAME } from '../../../packages/core/src/index';
import allProperties from '../../../packages/core/src/properties';
import path from 'path';

test({
  plugin,
  pluginOptions: {
    configs: [
      {
        properties: allProperties,
        module: 'scaleSize',
        source: 'react-native-style-adaptation-runtime',
      },
    ],
    ignore: (filename?: string) => {
      filename = filename || '';
      return filename.includes('custom_ignore_for_test');
    },
  },
  pluginName: PLUGIN_NAME,
  tests: [
    // base
    {
      fixture: path.join(__dirname, './custom_ignore_for_test/test.code.ts'),
      output: `
          const styles = StyleSheet.create({
            margin: 10,
            padding: 20,
            fontSize: 30,
          });
        `,
    },
  ],
});
