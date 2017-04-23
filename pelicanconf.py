#!/usr/bin/env python
# -*- coding: utf-8 -*- #
# from _future_ import unicode_literals

AUTHOR = 'German Rezzonico'
SITENAME = 'Machine Learning and More'
SITEURL = ''

GOOGLE_ANALYTICS = 'UA-96990928-1'

PATH = 'content'
OUTPUT_PATH = 'output'

THEME = 'themes/pelican-clean-blog'

TIMEZONE = 'America/Argentina/Buenos_Aires'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True


MARKUP = ('md', 'ipynb')

PLUGIN_PATH = './plugins'
PLUGINS = ['ipynb.markup']

## Custom

SOCIAL = (('linkedin', 'https://www.linkedin.com/in/germanrezzonico'),
          ('github', 'https://github.com/germanrezzonico'),
          ('facebook','https://www.facebook.com/germanrezzonico'),
          ('envelope','mailto:germanrezzonico@gmail.com'))
          
HEADER_COVER = 'images/stock_desk.jpg'

IPYNB_USE_META_SUMMARY = True
