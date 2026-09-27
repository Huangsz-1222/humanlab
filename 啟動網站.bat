@echo off
cd /d "%~dp0"
echo ============================================
echo   HUMANLAB - Starting website...
echo   The browser will open automatically.
echo   Keep this window open while using it.
echo   To stop: close this window (or Ctrl+C).
echo ============================================
npm run dev -- --open
pause
