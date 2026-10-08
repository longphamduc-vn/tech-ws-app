@echo off
chcp 65001 >nul
title Ứng Dụng Ôn Thi Trắc Nghiệm Kỹ Thuật White Star
cls
echo ================================================================
echo   ỨNG DỤNG ÔN THI TRẮC NGHIỆM KỸ THUẬT WHITE STAR (OFFLINE)
echo ================================================================
echo.
echo  [+] Không cần cài đặt Python hoặc Node.js!
echo  [+] Đang tự động mở ứng dụng trên trình duyệt web mặc định...
echo.

start "" "%~dp0index.html"

echo  [OK] Đã mở file index.html thành công!
echo.
echo  Gợi ý: Bạn cũng có thể nhấp đúp trực tiếp vào file "index.html"
echo  để mở bất kỳ lúc nào trên Chrome, Edge, Cốc Cốc hoặc Firefox.
echo ================================================================
timeout /t 5 >nul
