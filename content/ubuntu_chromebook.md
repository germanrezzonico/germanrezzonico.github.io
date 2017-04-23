Title: Ubuntu 14.04.5 LTS (trusty) on a Chromebook
Slug: ubuntu-chromebook
Date: 2017-04-05 22:00
Category: posts
Tags: python, chromebook, ubuntu, crouton, Acer C720
Author: German Rezzonico
Summary: Installing Ubuntu 14.04.5 LTS (trusty) via cruoton on Chromebook Acer C720-2802.
Header_Cover: /images/chromebook.jpg

# Instructions

To Install Ubuntu 14.04.5 LTS (trusty) on a SD Card via [cruoton](https://github.com/dnschneid/crouton) on Chromebook Acer C720-2802, follow this instructions:


## 1 . enter the chromebook into the developer mode

*Beaware enter developer mode will erase all data in the chromebook*

Press and hold the Esc and Refresh keys together, then press the Power button (while still holding the other two keys). This will reboot your Chromebook into Recovery Mode.

As soon as you see Recovery Mode pop up—the screen with the yellow exclamation point—press Ctrl+D. This will bring up a prompt asking if you want to turn on Developer Mode.

Press Enter to continue, then give it some time. It'll pop up with a new screen for a few moments, then reboot and go through the process of enabling Developer Mode. This may take a little while (about 15 minutes or so), and will wipe your local information.

When it's done, it will return to the screen with the red exclamation point. Leave it alone until it reboots into Chrome OS or press Ctrl+D. Every time the chromebook restart this window will appear, if you dont press Ctrl+D it will continue but only after ~20seg or so and a few beeps.

## 2 . enter the chromebook with your google credentials (you wont be erasing all the data again)

## 3. Download the latest [cruoton](https://github.com/dnschneid/crouton) installer into the Downloads/ folder:

```html
https://goo.gl/fd3zc
```

## 4 . press Ctrl+Alt+T this will open a shell window, while there you need to execute the crouton installer:


### To install ubuntu (trusty), we aware it will take some time, more than 30 minutes for sure.

```sh
sudo sh -e ~/Downloads/crouton -u -e -k ~/Downloads -p /media/removable/SD\ Card -n trusty
```

### To update and encrypt (a key file will be create in your Downloads/ folder, DO NOT loose it)

```sh
sudo sh -e ~/Downloads/crouton -u -e -k ~/Downloads -p /media/removable/SD\ Card -n trusty
```

## 5 . Ubuntu is already install on your SD Card, to enter it:

```sh
sudo bash /media/removable/SD\ Card/bin/enter-chroot
```
OR

```sh
cd /media/removable/SD\ Card/bin
sudo bash startunity -b
```

## 6 . Update only

```sh
sudo sh ~/Downloads/crouton -u -p /media/removable/SD\ Card -n trusty
```

## 7 . Backup chroot, this way the next time you need to restore your chromebook install crouton from that backup will take considerable less time.
(The backup file may have more than 5GB so run this command inside the definitive destination).

```sh
sudo bash /media/removable/SD\ Card/bin/edit-chroot -b trusty
```

## 8 . To restore a backup

```sh
sudo sh ~/Downloads/crouton -f mybackup.tar.gz -p /media/removable/SD\ Card/
```

## 9 . You may also need to install git to work with your repos:

### install git

```sh
sudo apt-get update
sudo apt-get install -y git-core
```

## generate ssh keys

Modify this line with your email

```sh
ssh-keygen -t rsa -C "your_name@provider.com"
```

## copy ssh keys to bitbucket, github, etc account via GUI

```sh
cat ~/.ssh/id_rsa.pub
```

## 10 . The Ubuntu installation via crouton doesnt have much on ti, if you would like to install some basic libraries:

*Follow the instructions in this [post](programming-env-chromebook.html)*