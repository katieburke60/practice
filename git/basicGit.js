//unstage file
git rm --cached <file>

//see history of commits
git log

//each commit will have a unique sha attached to it that can be used to reference that commit.
commit 2951dd271a636583b394e19802c9703c260f45ac

//see what branch you are currently on
git branch

//add a new branch
git branch add-body-content

//move to a new branch
git checkout add-body-content

//checkout and add branch at same time
git checkout -b add-event-listener

//revert to a previous commits. This will go back to this commit and stuff that happened after will be reverted.
git reset --hard <commit hash>

//merge changes to the master
git co master
git merge add-body-content
