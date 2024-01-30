function downloaderurl(url) {
    return new Promise((res, rej) => {
        console.log('started downloading from ', url);
        setTimeout(() => {
            console.log('Download completed');
            let downloaderData = 'Dummy content';
            res(downloaderData);
        }, 400)
    })
}

function writeFile(data) {
    return new Promise((res, rej) => {
        console.log('started writing data', data);
        setTimeout(() => {
            console.log('writing completed');
            let fileName = 'dummy.txt';
            res(fileName);
        }, 2000)
    })
}

function uploadFile(fileName, newUrl) {
    return new Promise((res, rej) => {
        console.log('started uploading file', fileName, 'on the url', newUrl)
        setTimeout(() => {
            console.log('upload completed');
            let uploadResponse = 'SUCCESS';
            res(uploadResponse);
        }, 3000)
    })
}

downloaderurl('www.google.com')
    .then((downloaderData) => {
        return writeFile(downloaderData)
    })
    .then((fileName) => {
        console.log('started uploading from .then');
        return uploadFile(fileName, 'drive.google.com');
    })
    .then(value => console.log(value));
