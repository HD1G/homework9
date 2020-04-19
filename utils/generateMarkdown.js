function generateProjectUrl(github, title) {
  const projectTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${projectTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `### License ###

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `
#### ${data.title} ####
${renderLicenseBadge(data.license, data.github, data.title)}

### Email Address ###

${data.email}

### Description ###

${data.description}

### Table of Contents ###

* Installation

* Usage

* License

* Contributing

* Tests

* Questions

### Installation ###

To install necessary dependencies, run the following command:

${data.installation}

### Usage ###

${data.usage}

${renderLicenseSection(data.license)}
  
### Contributing ###

${data.contributing}

### Tests ###

To run tests, run the following command:

${data.test}

### Questions ###

<img src="${data.avatar_url}" alt="github avatar"/>

For questions or additional information contact [${data.github}](${data.url}) directly at ${data.email}.`;
}

module.exports = generateMarkdown;
