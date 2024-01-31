/**
 * .then pass two arguments (success cb, failure cb) failure is optional
 * multiple time we can call promise object
 */

//code 1
pr = createPromise();
p1 = pr.then(f1, f2);
p2 = p1.then(f3, f4);
p3 = p2.then(f5, f6);

//code 2
pr = createPromise();
pr
    .then(f1, f2) // pr.then(f1,f2); -> it means stored in pr
    .then(f3, f4) // pr.then(f3,f4);
    .then(f5, f6) //pr.then(f5,f6);

    //tatend flip -site
    //visualizer js promise -site   
    //park means wait in queue
    //hackerblocks

    //H.W.

    /**
     * write a function to download data from a url
     * write a function to save that downloaded data in a file and return the filename
     * write a function to upload the file written in previous step to a newurl
     */

    /**
     * function downloader(url, cb){
     * write a dummy impl using setTimeout to show a delay -4sec
     * }
     * 
     * function writeFile(data,cb){
     * write a dummy impl using setTimeout to show a delay-2sec
     * }
     * 
     * function uploadFile(fileName, newUrl,cb){
     * write a dummy impl using setTimeout to show a delay-3sec delay
     * }
     */