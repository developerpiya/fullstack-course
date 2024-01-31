//---------------------------C.W.-----------------
function downloader(url, cb) {
    //Anyone who wants to download something first and then executing something else
    console.log('started downloading from ', url);
    setTimeout(() => {
        console.log('Download complete');
        //with the download content whatever you want to do you can do
        let downloadData = 'Dummy content';
        cb(downloadData);
    }, 4000);
}

function writeFile(data, cb) {
    console.log('started writing data ', data);
    setTimeout(() => {
        console.log('writing complete');
        //with the writing content whatever you want to do you can do
        let fileName = 'dummy.txt';
        cb(fileName);
    }, 2000);
}

function uploadFile(fileName,newUrl, cb) {
    console.log('started uploading file ', fileName,'on the NewUrl ',newUrl);
    setTimeout(() => {
        console.log('Uploading complete');
        //with the upload content whatever you want to do you can do
        let uploadResponse = 'SUCCESS';
        cb(uploadResponse);
    }, 3000);
}

console.log('Starting the program');
downloader('www.google.com', (downloadData) => {
    writeFile(downloadData, (fileName) => {
        uploadFile(fileName, 'www.drive.google.com', (uploadResponse) => {
            console.log('started upload', uploadResponse);
        })
    })
})