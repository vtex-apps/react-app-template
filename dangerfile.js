// dangerfile.js
const { verify } = require('@vtex/danger')

const config = {
  // Set to true to enforce keepachangelog rules.
  keepachangelog: {
    changeVersion: false,
  },
  rules: {
    description: ['fail', { minLength: 20 }],
    assignee: 'fail',
    reviewers: 'fail',
    pr_size: ['warn', { additionLimit: 800, deletionLimit: -1 }],
    lock_file: 'warn',
    no_ignored_test: ['fail', { pattern: /test|spec/i }],
    no_debugger: ['fail', { pattern: /\.[tj]sx?$/i }],
    enforce_graphql_provider: 'off',
  },
}

verify(config)
