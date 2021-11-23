###
 # @Author: chengbin
 # @Create: 2021-05-08 16:30:25
 # @Description: description
###

#!/usr/bin/env sh
set -e

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION
  # commit
  git add .
  npm version $VERSION --message "release(release): $VERSION"
  # push
  git push origin refs/tags/v$VERSION
  # build
  npm run build
  npm run zip
  # doc
  npm run log
  git add .
  git commit -m "docs(changelog): $VERSION"
  git push
fi
