# Warning: this project has been deprecated

This action is no longer needed. If you want to use zx in a workflow, use the following:

```yaml
      - name: Install Node.js
        uses: actions/setup-node@v4

      - name: Execute ZX
        shell: npx -y zx --install {0}
        run: |
          await $`echo "hello world"`
```

# zx-action

> Run ZX scripts

A little actions that installs ZX so you can use it as an action shell.

## Example

```yml
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Install Node.js
        uses: actions/setup-node@v4

      - name: Install ZX
        uses: johngeorgewright/zx-action@v1.0.0

      - name: Execute ZX
        id: test
        shell: zx --install {0}
        run: | # javascript
          import core from '@actions/core'
          const README = await $`cat test/fixture.md`
          core.setOutput('test', README.stdout)

      - name: Test output
        shell: node {0}
        run: | # javascript
          const assert = require('assert')
          assert.strictEqual(
            `${{ steps.test.outputs.test }}`,
          `I'm a
          multiline
          test
          file
          `
          )
```
