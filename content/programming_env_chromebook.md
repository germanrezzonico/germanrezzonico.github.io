Title: Programming environment on a Chromebook
Slug: programming-env-chromebook
Date: 2017-04-06 22:00
Category: posts
Tags: python, chromebook, ubuntu, crouton, Acer C720
Author: German Rezzonico
Summary: Setttip up a developing environment on a Chromebook Acer C720-2802.
Header_Cover: /images/chromebook.jpg

# Instructions

##  Installing extra applications not included in crouton

### dev essentials
```sh
sudo apt-get install -f -y gedit build-essential g++ zip nano
```

### other applications
```sh
sudo apt-get install -f -y ubuntu-restricted-extras ttf-ubuntu-font-family software-center synaptic openjdk-7-jre gtk2-engines-pixbuf
```

### nodejs and npm (node package manager)
```sh
sudo apt-get install -f -y nodejs
sudo apt-get install -f -y npm
```

### [jshint](http://jshint.com/) to allow checking of JS code within emacs
```sh
npm install -g jshint
```

### screen
```sh
sudo apt-get install -f -y screen
```

### [rlwrap](http://nodejs.org/api/repl.html#repl_repl) to provide libreadline features with node
```sh
sudo apt-get install -f -y rlwrap
```

### [emacs24](https://launchpad.net/~cassou/+archive/emacs)
```sh
sudo add-apt-repository -y ppa:cassou/emacs
sudo apt-get -qq update
sudo apt-get install -f -y emacs24-nox emacs24-el emacs24-common-non-dfsg
```

### [Heroku toolbelt](https://toolbelt.heroku.com/debian)
```sh
wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

#### To add ssh keys to heroku
heroku login

#### ssh-keygen -t rsa
heroku keys:add

### sublime text 3
```sh
sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install -f -y sublime-text-installer
```

### Visual Studio Code
```sh
wget https://code.visualstudio.com/docs/?dv=linux64_deb
sudo dpkg -i code_1.10.2-1488981323_amd64.deb
sudo apt-get -f -y install
```

#### To remove
```sh
sudo dpkg -r PACKAGE_NAME
```

#### To make it the default text editor
```sh
sudo sed -i 's/gedit.desktop/sublime\-text\.desktop/g' /usr/share/applications/defaults.list
```

### Libre Office
```sh
sudo apt-get install -f -y libreoffice
```

#### Complete the installation by including the Ubuntu (GNOME) desktop integration:
```sh
sudo apt-get install -f -y libreoffice-gnome
```

### Android Studio
http://tamingandroidcode.blogspot.com.ar/2013/12/running-android-studio-on-chromebook.html
http://tomwwolf.com/2013/11/20/howto-android-development-on-chromebook/
https://sendgrid.com/blog/develop-native-android-apps-chromebook/
http://tomwwolf.com/chromebook-14-compedium/ubuntu-cookbook/


#### JAVA JDK 7
```
wget http://download.oracle.com/otn-pub/java/jdk/7u75-b13/jdk-7u75-linux-x64.tar.gz
sudo tar -xvzf ~/jdk-7u75-linux-x64.tar.gz
rm -f ~/jdk-7u75-linux-x64.tar.gz
```
		
#### android studio
```sh
sudo apt-get install -f -y android-tools-adb android-tools-fastboot
wget https://dl.google.com/dl/android/studio/ide-zips/1.1.0/android-studio-ide-135.1740770-linux.zip
unzip android-studio-ide-135.1740770-linux.zip
rm -f android-studio-ide-135.1740770-linux.zip
```

In the user home directory, edit ‘.bashrc’ and append the following to the end of the file ‘PATH=${PATH}:~/android-studio/bin’ (or the equivalent in your install).
Reboot to force the new PATH.

In ~/andoid-studio/bin/studio.sh right below the ‘#!/bin/sh’ line add the following: 'JAVA_HOME=~/jdk1.7.0_45'

#### If neccesary install the following libraries
```sh
sudo apt-get install -f -y libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5
```

#### Open a terminal and enter ‘studio.sh’ to confirm that Android Studio was found and executed.
```sh
studio.sh
```
