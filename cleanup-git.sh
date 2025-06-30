# Git file cleanup to remove all traces of old blog files

# Remove any cached references to old blog post files
echo "Cleaning git cache..."

# List all files git is tracking
git ls-files | grep -i "ai-chatbots-340"

# If any files found, remove them from git
git rm --cached -r "ui/app/blog/ai-chatbots-340-percent-increase-leads" 2>/dev/null || true
git rm --cached -r "ui/app/blog/OLD_ai-chatbots-340-percent-increase-leads" 2>/dev/null || true  
git rm --cached -r "ui/app/blog/DELETED_OLD_ai-chatbots-340-percent-increase-leads" 2>/dev/null || true

# Force remove any lingering directories
rm -rf "ui/app/blog/ai-chatbots-340-percent-increase-leads" 2>/dev/null || true
rm -rf "ui/app/blog/OLD_ai-chatbots-340-percent-increase-leads" 2>/dev/null || true
rm -rf "ui/app/blog/DELETED_OLD_ai-chatbots-340-percent-increase-leads" 2>/dev/null || true

echo "Git cleanup complete!"
