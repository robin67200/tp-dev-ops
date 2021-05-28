const core = require("@actions/core");
const github = require("@actions/github")

const run = async() => {
  try {
    coreconsole.log('env', process.env)
    const GITHUB_TOKEN = "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"
    const SONAR_TOKEN = "a2c556936cb882c6ee105f462fe691fc341db1ab"
    const heroku_api_key = "533c1b61-0466-4b77-95aa-b14f764287ab"
    const heroku_app_name = "tpril"
    const heroku_email = "rrobin-vilmus@hotmail.com"
    console.log('token ?', !!GITHUB_TOKEN)
    console.log('token ?', !!SONAR_TOKEN)
  } catch {
    core.setFailed(error.message);
  }
}

run()
