##Anthony Ferlazzo's website

Git in a Nutshell

First of all, the Git version control system lives a secret life inside your folders.
Git turns the files and folders into not just a file system when your data resides,
but now a place where changes to those files and folders are recorded.

The Working Directory is a pointer to your current location in the file system. If you
imagine looking at a map of your hard drive. The sign on the map that says "You are here"
is your current working directory.

Git uses your file system for its own purpose while not interfering with its normal
operation because it performs all of its own operations in its own folder, named the .git
folder. This design is ingenious because files and folder beginning with a dot are not normally
displayed when you list the contents of a folder, which is why I think of Git as
living a secret life, with its own agenda, on your hard drive.

Git works well as a version control system because it keeps an eye out for changes
made to files in a working directory. Whenever a file is added, changed or deleted
Git updates its record of the file's state.

		Initializing a Repository in an Existing Directory

If you’re starting to track an existing project in Git, you need to go to the
project’s directory and type

		git init

This command creates a .git file


		The Three States

This is the main thing to remember about Git if you want the rest of your learning process
to go smoothly. Git has three main states that your files can be in: committed, modified, and staged.

		1. Committed means that the data is safely stored in your local database.

		2. Modified means that you have changed the file but have not committed it
		   to your database yet.

		3. Staged means that you have marked a modified file in its current version
		   to go into your next commit snapshot.

		4. Files in a working directory can be in one of two states:
		   a. Tracked files are those that were in the last snapshots.
		   b. Untracked files are all other files, in other words files that
			  were not in your last snapshot and are not in your staging area.

This leads us to the three main sections of a Git project: the Git directory, the
working directory, and the staging area.


                                                          
                                                          
       +----------+   +---------+  +---------------+       
       | Working  |   | Staging |  |.git directory |       
       | Directory|   | Area    |  |(Repository)   |       
       +----+-----+   +---+-----+  +------+--------+       
            |             |               |               
            |  / Checkout the Project     |               
            | <-----------+-------------+ |               
            |  \          |               |
            |             |               |               
            | Stage Fixes |               |               
            |             |               |
            |          \  |               |
            | +---------> | Commit        |               
            |          /  |            \  |
            |             | +-----------> |               
            |             |            /  |               
            |             |               |               
            +             +               +               
                                                          
                                                          
   The Git directory is where Git stores the metadata and object database for
your project. This is the most important part of Git, and it is what is copied
when you clone a repository from another computer.

   The working directory is a single checkout of one version of the project.
These files are pulled out of the compressed database in the Git directory and
placed on disk for you to use or modify.

   The staging area is a file, generally contained in your Git directory, that
stores information about what will go into your next commit. It’s sometimes re-
ferred to as the “index”, but it’s also common to refer to it as the staging area.

   The basic Git workflow goes something like this:
   1. You modify files in your working directory.
   2. You stage the files, adding snapshots of them to your staging area.
   3. You do a commit, which takes the files as they are in the staging area and
       stores that snapshot permanently to your Git directory.

   If a particular version of a file is in the Git directory, it’s considered commit-
ted. If it’s modified but has been added to the staging area, it is staged. And if it
was changed since it was checked out but has not been staged, it is modified.



Steps to update github web page


Edit files in /var/www/aferlazzo.github.io
in terminal run commands:

cd /Users/aferl/WebstormProjects/aferlazzo.github.io
git add --all .
git commit -m "commit message"
git push -u origin master


Edit files in project folders list 'best' (/var/www/best)
in terminal run commands:

cd /var/www/best
git add --all .
git commit -m "commit message"
git push -u origin gh-pages


Use git status prior to each command to see interesting infomation.

In a terminal tab run the Jekyll server to see the site locally on port 4000:

anthony@anthony-S56C:/var/www/aferlazzo.github.io/experiments$ cd ..
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ bundle exec jekyll serve
Configuration file: none
            Source: /var/www/aferlazzo.github.io
       Destination: /var/www/aferlazzo.github.io/_site
      Generating...
                    done.
 Auto-regeneration: enabled for '/var/www/aferlazzo.github.io'
Configuration file: none
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.


more background:

Hi James,

Sorry for not responding sooner, but I've been busy at work. Thanks for your help. I had been thinking of the old folder
structure of my web site, which was a tree-structure with project folders underneath the root or home folder, the way the
URLs are laid out. For example:

aferlazzo.github.io/index.html being the root
aferlazzo.github.io/experiments being a child folder of the root

But I now need to keep in mind that the URL aferlazzo.github.io/experiments is representative of the githib.io repo
structure. Both aferlazzo.github.io and experiments are simply repos inside my user id. You guys at github.io just do
some magic by mapping the URL aferlazzo.github.io to the master branch of github.com/aferlazzo/aferlazzo.github.io.

The way to access my other repos (you call them project repos) as web pages is to create a gh-pages branch in the repo.
The gh-pages branch is accessible as a subfolder to my primary web access htp;//aferlazzo.github.io as in
http://aferlazzo.github.io/experiments even though experiments is not truly folder within the aferlazzo.github.io repo.
It is merely another repo under my user ID that has its files in a gh-pages branch.


cd /var/www/experiment-gh-pages
git add --all .
git commit -m "commit message"
git push -u origin gh-pages

--------------------------------------------------------------------------

anthony@anthony-S56C:~$ cd /var/www/aferlazzo.github.io
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ git add --all
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ git commit -m "initialized submodule best"
[master 891b642] initialized submodule best
 1 file changed, 10 insertions(+), 15 deletions(-)
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ git push -u origin master
Username for 'https://github.com': aferlazzo
Password for 'https://aferlazzo@github.com':
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 539 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
To https://github.com/aferlazzo/aferlazzo.github.io.git
   71efaac..891b642  master -> master
Branch master set up to track remote branch master from origin.
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ jekyll build --safe
Configuration file: none
            Source: /var/www/aferlazzo.github.io
       Destination: /var/www/aferlazzo.github.io/_site
      Generating...
                    done.
 Auto-regeneration: disabled. Use --watch to enable.
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ git push -u origin master
Username for 'https://github.com': aferlazzo
Password for 'https://aferlazzo@github.com':
Branch master set up to track remote branch master from origin.
Everything up-to-date
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ cd /var/www/aferlazzo.github.io
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ git add --all
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ git commit -m "commented out reference to ./best"
[master 4295062] commented out reference to ./best
 13 files changed, 822 insertions(+), 136 deletions(-)
 create mode 100644 _site/best/AnthonyFerlazzo.zip
 create mode 100644 _site/best/README.md
 create mode 100644 _site/best/best.css
 create mode 100644 _site/best/best.js
 create mode 100644 _site/best/index.html
 create mode 100644 _site/best/processForm.php
 create mode 100644 _site/testform.html
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ git push -u origin master
Username for 'https://github.com': aferlazzo
Password for 'https://aferlazzo@github.com':
Counting objects: 22, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (14/14), done.
Writing objects: 100% (15/15), 24.37 KiB | 0 bytes/s, done.
Total 15 (delta 7), reused 0 (delta 0)
To https://github.com/aferlazzo/aferlazzo.github.io.git
   891b642..4295062  master -> master
Branch master set up to track remote branch master from origin.
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ jekyll
jekyll 2.4.0 -- Jekyll is a blog-aware, static site generator in Ruby

Usage:

  jekyll <subcommand> [options]

Options:
        -s, --source [DIR]  Source directory (defaults to ./)
        -d, --destination [DIR]  Destination directory (defaults to ./_site)
            --safe         Safe mode (defaults to false)
        -p, --plugins PLUGINS_DIR1[,PLUGINS_DIR2[,...]]  Plugins directory (defaults to ./_plugins)
            --layouts DIR  Layouts directory (defaults to ./_layouts)
        -h, --help         Show this message
        -v, --version      Print the name and version
        -t, --trace        Show the full backtrace when an error occurs

Subcommands:
  build                 Build your site
  docs                  Launch local server with docs for Jekyll v2.4.0
  doctor, hyde          Search site and print specific deprecation warnings
  help                  Show the help message, optionally for a given subcommand.
  new                   Creates a new Jekyll site scaffold in PATH
  serve, server         Serve your site locally
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ jekyll build --safe
Configuration file: none
            Source: /var/www/aferlazzo.github.io
       Destination: /var/www/aferlazzo.github.io/_site
      Generating...
                    done.
 Auto-regeneration: disabled. Use --watch to enable.
anthony@anthony-S56C:/var/www/aferlazzo.github.io$ jekyll build --watch
Configuration file: none
            Source: /var/www/aferlazzo.github.io
       Destination: /var/www/aferlazzo.github.io/_site
      Generating...
                    done.
 Auto-regeneration: enabled for '/var/www/aferlazzo.github.io'



