const electronInstaller = require('electron-winstaller');
async function createInstall(){
    try {
        await electronInstaller.createWindowsInstaller({
          appDirectory: 'C:\Users\mohjam\Desktop\HIDiag-master',
          outputDirectory: 'C:\Users\mohjam\Desktop\HIDiag-master\out',
          authors: 'HID GLOBAL',
          exe: 'myapp.exe'
        });
        console.log('It worked!');
      } catch (e) {
        console.log(`No dice: ${e.message}`);
      }

}

createInstall();