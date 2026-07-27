import Git from 'simple-git'

const git = Git()

// Fully-qualified so this is unambiguous when a tag could also be named v1.0.0.
// It has to be refs/heads: the tags bumpp writes are v1.0.0-alpha.N, so
// refs/tags/v1.0.0 does not exist until an actual 1.0.0 release.
const hash = await git.revparse(['refs/heads/v1.0.0'])

console.log('Checkout release branch')
await git.checkout('release')

console.log(`Reset to v1.0.0 tag (${hash})`)
await git.reset(['--hard', hash])

console.log('Push to release branch')
await git.push(['--force'])

console.log('Checkout v1.0.0 branch')
await git.checkout('v1.0.0')
