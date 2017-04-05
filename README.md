# Personal github site

This repository follows [Udacity Commit Style Guide](http://udacity.github.io/git-styleguide/)

Follow [this instructions](https://www.dataquest.io/blog/how-to-setup-a-data-science-blog/)

## 1) Install

```sh
sudo -H pip install pelican jupyter ghp-import ipython nbconvert markdown
```

## 2) Create a different branch from master

```sh
git checkout -b source
```

## 3)

Change git for https on pelicanconf.py


## 4) To load content

Put some content on content/ and then execute this code on the base folder>

```sh
pelican content
```

On output/ try the following code:

```sh
python -m SimpleHTTPServer 8000
```

```
pelican content -s publishconf.py
```