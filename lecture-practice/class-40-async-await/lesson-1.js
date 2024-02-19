//---------------------------C.W.-----------------
function downloader(url) {
    //Anyone who wants to download something first and then executing something else
    console.log('started downloading from ', url);
    setTimeout(() => {
        console.log('Download complete');
        //with the download content whatever you want to do you can do

    }, 4000);
}

function writeFile(data) {
    console.log('started writing data ', data);
    setTimeout(() => {
        console.log('writing complete');
        //with the writing content whatever you want to do you can do
        let fileName = 'dummy.txt';

    }, 2000);
}

function uploadFile(fileName, newUrl) {
    console.log('started uploading file ', fileName, 'on the NewUrl ', newUrl);
    setTimeout(() => {
        console.log('Uploading complete');
        //with the upload content whatever you want to do you can do
        let uploadResponse = 'SUCCESS';

    }, 3000);
}

// async function exexute(){
//     console.log(`we are inside the execute function`);
//     const downloadedData = await downloader('www.google.com');
//     console.log('Data downloaded is',downloadedData);
//     const fileName = await writeFile(downloadedData);
//     console.log('file written is',fileName);
//     const response = await uploadFile(fileName, 'drive.google.com');
//     console.log('upload file is', response);
// }

async function execute() {
    try {
        console.log(`we are inside the execute function`);
        const downloadedData = await downloader('www.google.com');
        console.log('Data downloaded is', downloadedData);
        const fileName = await writeFile(downloadedData);
        console.log('file written is', fileName);

        if(fileName !== 'piya'){
            throw new console.error('wrong filename');
        }
        const response = await uploadFile(fileName, 'drive.google.com');
    } catch (e) {
        console.log(`Handeled the error by logging `, err)
    }
    
}
    console.log('start');
    execute();
    console.log('End');