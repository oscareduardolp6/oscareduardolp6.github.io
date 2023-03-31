---
title: "Building my File Organizer: Part 1"
date: 2023-03-28T20:25:35-06:00
draft: false
author: "Oscar López"
image: /images/projects/file-organizer/banner.png
github_link: "https://github.com/oscareduardolp6/file-organizer"
tags: 
  - Deno 
  - Applications
  - Projects 
  - Making file organizer
description: "My process of building the file organizer project"
---
Every day we download and create files, whether it be in Word, Excel, Notepad, etc. And, at least in my case, I always find myself leaving all my downloads in the default folder and all the files I create on the desktop with the promise of someday organizing them in a proper place. Although that day does come, because I like to keep my desktop organized, I think it's a task that I shouldn't have to do myself, but that I can automate. With that in mind, I've set out to create my own program to organize my files based on certain criteria that are extensible and customizable, so that it can also be useful to someone else.

I'm doing this mainly to practice and to have different opinions about my software development process, so I encourage you to leave me your opinion.

## The idea

The basic idea is that I can leave files anywhere on my computer and the program will eventually move everything to an appropriate folder based on the purpose of the file, based on criteria applied to the name or extension of the file, and that these criteria can be easily extended by the user.

## Features

1.  **Starting directory**: By default, it could start with the user's directory, but it should be possible to specify, for example, if you want to leave everything on the desktop and that the "magic" happens only from there.
2.  **File organization by extension**: For example, all `.mp3` files should be moved to a folder called _Music_.
3.  **Default criteria**: Once installed, it should have a series of pre-established criteria, for example, to put `.png` files in the _images_ folder.
4.  **Exclude folders**: If you have a folder or set of folders that you consider to be well-organized and you don't want the program to interfere, you should be able to include them so that these folders are ignored.
5.  **Ability to create rules based on the file name**: For example, if a file starts with _AUD_, it should be moved to the _WhatsappAudios_ folder. These criteria would be of the type:
    -   Starts with
    -   Ends with
    -   Contains
6.  **Delete temporary files**: Allow emptying all space occupied by temporary files that we forget to delete.

## Conclusions

Throughout this series, I will be sharing my software development process, hoping that it will help someone with less experience or that someone with more experience will point out my mistakes or share ideas of what could be included.

Here's the link to the repository in case you want to take a look:

> [Repository](https://github.com/oscareduardolp6/file-organizer)