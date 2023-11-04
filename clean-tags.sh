git push -d origin $(git tag -l "*dev*")
git tag -d $(git tag -l "*dev*")