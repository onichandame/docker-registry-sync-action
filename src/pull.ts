import { exec } from "@actions/exec"
import { getInput, info } from "@actions/core"

export const pull = async () => {
  const username = getInput("source_username")
  const password = getInput("source_password")
  const repository = getInput("source_repository")
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
    info(`logged in the source registry`)
  if ((await exec("docker", ["pull", repository])) === 0)
    info(`pulled source image ${repository}`)
}
