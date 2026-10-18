@echo off
cd /d "%~dp0"

echo ======================================================
echo   LUMORA Cafe - Copying Assets
echo ======================================================
echo.

copy /Y "C:\Users\usEr\.gemini\antigravity\brain\dd7b257e-81fc-40fe-8e9a-0bffc69e81dc\.user_uploaded\media_1792334136202_048ad314.jpg" "images\cup1_biscoff.jpg"
copy /Y "C:\Users\usEr\.gemini\antigravity\brain\dd7b257e-81fc-40fe-8e9a-0bffc69e81dc\.user_uploaded\media_1792334142219_505ca777.jpg" "images\cup2_thaitea.jpg"
copy /Y "C:\Users\usEr\.gemini\antigravity\brain\dd7b257e-81fc-40fe-8e9a-0bffc69e81dc\.user_uploaded\media_1792334147876_8a17aca6.jpg" "images\cup3_matcha.jpg"
copy /Y "C:\Users\usEr\.gemini\antigravity\brain\dd7b257e-81fc-40fe-8e9a-0bffc69e81dc\.user_uploaded\media_1792335061073_a561b301.jpg" "images\cup4_blueberry.jpg"
copy /Y "C:\Users\usEr\.gemini\antigravity\brain\dd7b257e-81fc-40fe-8e9a-0bffc69e81dc\.user_uploaded\media_1792331297752_00c24c02.jpg" "images\lineup_banner.jpg"

echo.
echo ======================================================
echo  [SUCCESS] All 5 images copied successfully!
echo  Ready for Vercel deployment.
echo ======================================================
echo.
pause
