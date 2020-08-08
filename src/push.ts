import { exec } from "@actions/exec"
import { getInput, info } from "@actions/core"

export const push = async () => {
  const source = getInput("source_repository")
  const username = getInput("target_username")
  const password = getInput("target_password")
  const repository = getInput("target_repository")
  const registry = repository.split("/")[0]
  if (
    username &&
    (await exec("docker", [
      "login",
      `--username=${username}`,
      password && `--password=${password}`,
      registry,
    ])) === 0
  )
    info(`logged in the target registry`)
  if (
    ((await exec("docker", ["tag", source, repository])) === 0 &&
      (await exec("docker", ["push", repository]))) === 0
  )
    info(`pushed ${source} to ${repository}`)
}
