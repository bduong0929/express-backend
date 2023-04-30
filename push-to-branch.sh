#!/bin/bash

echo "Enter commit message:"
read commit_message

echo "Enter the branch name to push to: "
read branch_name

git add -A
git commit -m "$commit_message"
git push origin $branch_name

echo "Pushed changes to branch $branch_name successfully."
