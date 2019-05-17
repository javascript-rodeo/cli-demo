#!/usr/bin/env node

const program = require('commander')
const ora = require('ora')
const { delay } = require('@kev_nz/async-tools')

program
  .version('1.0.0', '-v, --version')
  .command('on <req>')
  .description('Do something interesting from the command line')
  .action(async (req) => {
    const spinner = ora({ text: `Doing something on ${req}`, spinner: 'shark' }).start()
    await delay(5000)

    spinner.fail('There was a problem');
    await delay(1000)
    spinner.info('Trying to recover');
    await delay(2000)
    spinner.start()
    await delay(5000)
    spinner.succeed('Complete');
  })

program.parse(process.argv)