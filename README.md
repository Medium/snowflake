# Snowflake

Snowflake is Medium's tool for planning and supporting our engineers' career development that is now being used by Wikimedia Germany. You can read more
about how we use this tool in our [growth framework documentation](https://medium.com/s/engineering-growth-framework).
Our growth tool is hosted [publicly](https://wmde-wmdetest.wedeploy.io/).

[Imgur](https://i.imgur.com/zWaGa6O.png)

## Contributions

You are free to use, change and build on this work to make it useful for your organisation. We will happily consider
unencumbered code contributions to improve functionality, but as this is the actual tool we use within Medium, acceptance is likely to be intentional, and deliberate. Meaning, slow. As such, you may prefer to fork the codebase for your own needs. We will not accept any contributions that modify the text of the application (but, thank you in advance for pointing out any typos).

## Installation

Get yarn if you don’t have it already:

`npm install -g yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.

### Deploying
from the out library run: ```we deploy -p wmdetest```

### Deploying API (for saved useres)

from the data library run: ```we deploy -p wmdetest```

## Future work

* Remove hardcoded values from code (like urls and custom magic like that)
* Add pipeline to build configs
* Split json data file into several (per category) and build them using the build pipeline
* Add restricted job title selection and validation.
