Title: Installing tensorflow and keras on a Chromebook
Slug: tensor-keras-chromebook
Date: 2017-04-10 13:30
Category: posts
Tags: python, chromebook, ubuntu, tensorflow, keras, neural network, Acer C720
Author: German Rezzonico
Summary: Installing tensorflow and keras on a Chromebook Acer C720-2802.
Header_Cover: /images/chromebook.jpg

# Instructions

## Install python 2.7, python-pip and python-dev

Installing python2.7 will update to the latest version of Python 2.7, and python-pip will install Pip which allows us to manage Python packages we would like to use. Some of Jupyter’s dependencies may require compilation, in which case you would need the ability to compile Python C-extensions, so we are installing python-dev as well.

```sh
sudo apt-get install -f python2.7 python-pip python-dev
```

## To verify that you have python and pip installed:
```sh
python --version
pip --version
```

## Installing Ipython
```sh
sudo apt-get install -f ipython ipython-notebook
```

## Installing Jupyter Notebook
-H, --set-home
Request that the security policy set the HOME environment variable to the home directory specified by the target user's password database entry. Depending on the policy, this may be the default behavior.

```sh
sudo -H pip install jupyter
```

### If any error --> Upgrade pip to the latest version
```sh
sudo -H pip install --upgrade pip
```

### Try installing Jupyter again
```sh
sudo -H pip install jupyter
```

## Running Jupyter Notebook
```sh
jupyter notebook
```

## Install packages
```sh
sudo apt-get install -f python-numpy python-pandas python-matplotlib

sudo apt-get install -f build-essential python-dev python-setuptools python-numpy python-scipy libatlas-dev libatlas3gf-base libfreetype6-dev libpng-dev g++ python-matplotlib

sudo apt-get install -f python-numpy-dev g++

sudo -H pip install scikit-learn
```

To upgrade:
```sh
sudo -H pip install --upgrade pandas
sudo -H pip install matplotlib --upgrade
```

### Install seaborn

Download latest version of seaborn .tar.gz
```
tar -xzf seaborn-file.tar.gz
cd seaborn-path/
sudo python setup.py install
```

### Install matplotlib Toolkits

http://matplotlib.org/1.4.3/mpl_toolkits/index.html

https://peak5390.wordpress.com/2012/12/08/matplotlib-basemap-tutorial-installing-matplotlib-and-basemap/

```sh
sudo apt-get install -f python-mpltoolkits.basemap
```

### Install [xgboost](https://xgboost.readthedocs.io/en/latest/build.html)
```sh
git clone --recursive https://github.com/dmlc/xgboost
cd xgboost; cp make/config.mk ./config.mk; make -j4
python setup.py develop --user
```

### Install tensorflow with virtualenv
https://www.tensorflow.org/install/install_linux

```
sudo apt-get install -f python-pip python-dev python-virtualenv
virtualenv --system-site-packages tensorflow # target diectory
source ~/tensorflow/bin/activate # (tensorflow)$
pip install --upgrade https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-1.0.1-cp27-none-linux_x86_64.whl # pip version lower than 8.1 Python 2.7  and cpu only
```

#### Activate the virtualenv environment each time you use TensorFlow
```
source ~/tensorflow/bin/activate
```
You shoul get something like this:
(tensorflow)$

To deactivate:
```
deactivate
```

#### Validate your tensorflow installation
Active your container
```
python
>>> import tensorflow as tf
>>> hello = tf.constant('Hello, TensorFlow!')
>>> sess = tf.Session()
>>> print(sess.run(hello))

>>> Hello, TensorFlow!
```

#### Uninstalling TensorFlow
```
rm -r targetDirectory
```

### Install pydot and graphviz (for NN graph)
```sh
sudo apt-get install -f python-pydot
sudo -H pip install pydot-ng
sudo -H pip install pydot --upgrade

sudo apt-get install -f graphviz
```

### Install plotly (for EDA)
```sh
sudo -h pip install plotly
```

### Install keras
https://keras.io/#installation

#### Required dependencies

* numpy, scipy
* yaml
* HDF5 and h5py (optional, required if you use model saving/loading functions)
* Optional but recommended if you use CNNs: cuDNN.

```
sudo apt-get install -f python-yaml
sudo apt-get install -f libhdf5-dev
sudo apt-get install -f python-h5py
```

#### Install keras
```
sudo -H pip install keras
```

#### Using a virtualenv in an IPython notebook (install kernels)

https://help.pythonanywhere.com/pages/IPythonNotebookVirtualenvs/

```
source ~/tensorflow/bin/activate
python2 -m ipykernel install --user
python -m ipykernel install --user --name tensorflow --display-name "Python tensorflow"
```

## Using Jupyter Notebook

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