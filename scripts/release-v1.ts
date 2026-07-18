import Git from 'simple-git'

const git = Git()

// Prefer the release tag so this is unambiguous when the branch is also named v1.0.0
const hash = await git.revparse(['refs/tags/v1.0.0'])

console.log('Checkout release branch')
await git.checkout('release')

console.log(`Reset to v1.0.0 tag (${hash})`)
await git.reset(['--hard', hash])

console.log('Push to release branch')
await git.push(['--force'])

console.log('Checkout v1.0.0 branch')
await git.checkout('v1.0.0')
