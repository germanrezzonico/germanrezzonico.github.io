# Personal github site

This repository follows [Udacity Commit Style Guide](http://udacity.github.io/git-styleguide/)

Follow [this instructions](https://www.dataquest.io/blog/how-to-setup-a-data-science-blog/)

## Install

```sh
sudo -H pip install pelican jupyter ghp-import ipython nbconvert markdown
```

## Create a different branch from master

```sh
git checkout -b source
```

## Make this changes to pelicanconfig.py

```py
MARKUP = ('md', 'ipynb')

PLUGIN_PATH = './plugins'
PLUGINS = ['ipynb.markup']
```

## Add plugin
```sh
git submodule add https://github.com/danielfrg/pelican-ipynb.git plugins/ipynb
```

## Load and test content

Put some content on content/ and then execute this code on the base folder>

```sh
pelican content
```

On output/ try the following code:

```sh
python -m SimpleHTTPServer 8000
```

## Push content to github

Setup publishconf.py
```sh
pelican content -s publishconf.py
```

Copy the output/ of branch source to branch master
```sh
ghp-import output -b master
```

Push content to github
```sh
git push origin master
```