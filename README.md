# Tola Data

> The first in a series of product sites for software in the Tola family, a group within Mercy Corps.

We were approached to develop a set of visual communication tools for Tola, the second phase of which is an informational landing site for Tola Data, the flagship product within the larger Tola software ecosystem.

## Technology

To keep our codebase lean and avoid managing raw HTML, CSS and JS, we're using [Middleman](http://middlemanapp.com/), a free and open-source static site generator. We anticipate being able to extract pieces consistent across all projects into a template.

## Getting Started

Middleman requires a modern Ruby installation.

```
$ git clone https://github.com/augustmiller/tola-data tola-data
$ cd tola-data
$ bundle install
```

Bundler will fetch the project's dependences, declared in its `Gemfile`. This may take a moment, based on your local cache of gems and network conditions.

Run the development server with:

```
$ middleman server
```

Changes to any files in the `source` directory will trigger a rebuild.

If you need a package for distribution outside GitHub Pages, a quick `$ middleman build` will render the site into a new `build` directory, or update it, if it exists.

## Publishing

Builds and deployments are handled by the `[middleman-deploy](https://github.com/middleman-contrib/middleman-deploy)` Gem. To publish changes to the `gh-pages` branch, navigate to your repository and run:

```
$ middleman build
$ middleman deploy
```

A shortcut for this is the one-line `$ middleman deploy --build-before`. Additionally, you may add automatic building to the config hash in `config.rb`. Please only deploy from the `master` branch. Verify your changes at the project's [public-facing endpoint](http://augustmiller.github.io/tola-data/).
