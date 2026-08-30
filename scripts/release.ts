import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

const rootDirectory = resolve(
  fileURLToPath(new URL('.', import.meta.url)),
  '..',
)
const releaseDirectory = resolve(rootDirectory, 'release')
const packageJsonPath = resolve(rootDirectory, 'package.json')

const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))

for (const name of ['preinstall', 'postinstall']) {
  delete packageJson?.scripts?.[name]
}

for (const field of ['simple-git-hooks', 'lint-staged', 'packageManager']) {
  delete packageJson?.[field]
}

rmSync(releaseDirectory, { recursive: true, force: true })
mkdirSync(releaseDirectory, { recursive: true })

cpSync(resolve(rootDirectory, 'dist'), resolve(releaseDirectory, 'dist'), {
  recursive: true,
})
cpSync(
  resolve(rootDirectory, 'README.md'),
  resolve(releaseDirectory, 'README.md'),
)
cpSync(resolve(rootDirectory, 'LICENSE'), resolve(releaseDirectory, 'LICENSE'))

writeFileSync(
  resolve(releaseDirectory, 'package.json'),
  JSON.stringify(packageJson, null, 2) + '\n',
  'utf-8',
)
