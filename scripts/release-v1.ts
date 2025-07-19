import Git from 'simple-git'

const git = Git()

const hash = await git.revparse(['v1.0.0'])

console.log('Checkout release branch')
await git.checkout('release')

console.log(`Reset to v1.0.0 branch (${hash})`)
await git.reset(['--hard', hash])

console.log('Push to release branch')
await git.push(['--force'])

console.log('Checkout v1.0.0 branch')
await git.checkout('v1.0.0')
