@ECHO OFF 
:: This batch file will Start any Nodejs Application using Npm start.
TITLE Starting Node Application
:: Chcking If Node is Installed 

set "status=not installed"
ECHO ===============================
ECHO Checking If node is Installed 
ECHO ===============================

if exist "./node.exe" (
    set "status=installed"
)

for %%# in (node.exe) do  if not "%%~f$PATH:#" equ "" set "status=installed"

echo %status%
ECHO ===============================
ECHO Starting Node Application
ECHO ===============================          
ECHO ===============================================================
ECHO To Close the application click 'ctrl + c' twice for faster exit 
ECHO ===============================================================
if "%status%" equ "installed" (
   node %~dp0index.js
)

pause