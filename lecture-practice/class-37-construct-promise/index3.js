function createSyncPromise(){
    return new Promise((res,rej)=>{
        //async algorithm
        for(let i = 0;i<100000000;i++){
            //blocking code
        }
        res(100);
    })
}
const response = createSyncPromise();

// write three dummy functions promise only using normal callbacks
/**
 * All three fuctions are dummy, you dont know need actual implementation
 * These dummy functions are to just represent a delay.
 * write a function to download data from a url
 * write a function to save that downloaded data in a file andreturn the filename
 * write a function to upload the file written in previous step to a newUrl
 * 
 * fu
 */