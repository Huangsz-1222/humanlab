@echo off
cd /d "%~dp0"
echo ============================================
echo   HUMANLAB - Update & Deploy to GitHub Pages
echo ============================================
git add -A
git commit -m "Update website"
git push
echo.
echo Done! The site will be live in 1-2 minutes.
echo.
pause
