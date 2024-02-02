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

function dotAfterReceiving(value){
    const f=iterator.next(value);
    if(f.done===true) return;
    f.value.then(dotAfterReceiving);
}

function* steps(){
    const downloadedData = yield downloader("www.google.com");
    console.log("Data downloaded is",downloadedData);
    const fileName = yield writeFile(downloadedData);
    console.log("File written",fileName);
    console.log("upload response",fileName);
    const upload = yield uploadFile(fileName,"www.drive.google.com");
    console.log("upload response",upload);
}

const iterator = steps();
const future=iterator.next();
console.log(future);
// future.value.then(dotAfterReceiving);