//add a remote repository
//name of the remote is typically origin
git remote add [name-of-remote] [address-of-repository]
git remote add origin git@github.com:krb3p/practiceGit.git

//push files from computer to remote repository
git push -u origin master
git push [remote-name] [branch-name-to-push-to-remote]

//push up to github to a new branch
//so that it doesn't immediately get merged into master.
git push origin add-event-listener
git push [remote-name] [branch-name-to-push-to-remote that is not master]

//create a pull request
//A pull request is a formal way of merging code from one branch to another so that someone can come in and review the code before it is merged. Often chance for 'code review'.

//pull down changes from github to local repository
git pull [remote-name] [branch-of-remote-to-pull-down]

//Merge conflicts occur when you and partner both make changes to the same line of code.
var a = 1;
<<<<<<<<<HEAD
//Lines of code between HEAD and the set of equals signs are all the changes you made that are in conflict.
var b = 2;
=========
//Everything between the set of equals signs and the greater than signs followed by the conflicting commit number (var b = 0) are all of the changes from GitHub that you’re trying to pull down that are conflicting.
var b = 0;
>>>>>>>>>39457094865893724234798326445

//stashes any unstaged changes in your repository. They will not be present in your codebase, but they are not deleted.
git stash

//gives you back the last staged changes you stashed
git stash pop

//shows you line-by-line who wrote the code in the specified file.
//Useful when you have a question about how something works and want to figure out who to ask, and
//also great source of shame when you realize you wrote the chunk of code you’ve been swearing at for the last hour.
git blame file-path/name-of-file
