// @ts-check
/// <reference path="../node_modules/zx/build/globals.d.ts"/>

import core from '@actions/core'

const README = await $`cat test/fixture.md`
core.setOutput('readme', README.stdout)
