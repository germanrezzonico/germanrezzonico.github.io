Title: Machine learning on a Chromebook
Slug: environment-chromebook
Date: 2017-04-07 22:00
Category: posts
Tags: python, chromebook, environment, Acer C720
Author: German Rezzonico
Summary: Setting up a machine learning environment on Chromebook Acer C720-2802.
Header_Cover: /images/chromebook.jpg

# Machine learning on a Chromebook

## Requirements
To set up a machine learning environment with **Python 2.7.6** on a Chromebook Acer C720 with Ubuntu 14.04.5 LTS installed via [crouton](https://github.com/dnschneid/crouton). The following Python libraries are required:

- [NumPy](http://www.numpy.org/)
- [SciPy](https://www.scipy.org/)
- [matplotlib](http://matplotlib.org/)
- [Seaborn](http://seaborn.pydata.org/)
- [Pandas](http://pandas.pydata.org/)
- [sklearn](http://scikit-learn.org/stable/)
- [XGBoost](https://xgboost.readthedocs.io/en/latest/)
- [Pickle](https://docs.python.org/2/library/pickle.html)

It is also required to have [Jupyter Notebook](http://jupyter.org/) installed to run and execute the code.

## Instructions:

### Install python 2.7, python-pip and python-dev
```sh
sudo apt-get install python2.7 python-pip python-dev
```

#### To verify that you have python and pip installed:
```sh
python --version
pip --version
```

### Installing Ipython
```sh
sudo apt-get install ipython ipython-notebook
```

### Installing Jupyter Notebook
-H, --set-home
Request that the security policy set the HOME environment variable to the home directory specified by the target user's password database entry. Depending on the policy, this may be the default behavior.

```sh
sudo -H pip install jupyter
```

#### If any error --> Upgrade pip to the latest version
```sh
sudo -H pip install --upgrade pip
```

#### Try installing Jupyter again
```sh
sudo -H pip install jupyter
```

### Running Jupyter Notebook
```sh
jupyter notebook
```

### scipy, matplotlib, pandas and others
```sh
sudo apt-get install -f build-essential python-dev python-setuptools python-numpy python-numpy-dev python-scipy libatlas-dev libatlas3gf-base libfreetype6-dev libpng-dev g++ python-matplotlib python-pandas
```

### seaborn
Download latest version of seaborn .tar.gz

```
tar -xzf seaborn-file.tar.gz
cd seaborn-path/
sudo python setup.py install
```


### Using Jupyter Notebook

Automatically, Jupyter Notebook will show all of the files and folders in the directory it is run from.

To create a new notebook file, select New > Python 2 from the top right pull-down menu.

![Alt jupyter new file](https://assets.digitalocean.com/articles/jupyter_notebook/create_python2_notebook.png)

This will open a notebook. We can now run Python code in the cell or change the cell to markdown. For example, change the first cell to accept Markdown by clicking Cell > Cell Type > Markdown from the top navigation bar. We can now write notes using Markdown and even include equations written in LaTeX by putting them between the $$ symbols. For example, type the following into the cell after changing it to markdown:

```
# Simple Equation

Let us now implement the following equation:
$$ y = x^2$$

where $x = 2$
```

To turn the markdown into rich text, press CTRL+ENTER:

![Alt jupyter markdown](https://assets.digitalocean.com/articles/jupyter_notebook/markdown_results.png)

You can use the markdown cells to make notes and document your code. Let's implement that simple equation and print the result. Select Insert > Insert Cell Below to insert and cell and enter the following code:

```py
x = 2
y = x*x
print y
```

![Alt jupyter run code](https://assets.digitalocean.com/articles/jupyter_notebook/equations_results.png)