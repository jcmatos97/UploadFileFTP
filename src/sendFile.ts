export class SendFile {

    private ftp: any = require("basic-ftp");
    private path: string = __dirname.split("\\").slice(0, __dirname.split("\\").length-1).join("/");

    constructor() {
        console.log("Proceso de Subida iniciado...");
        this.uploadFile();
    }

    /**
     * downloadFile
     */
    private downloadFile(): any {
        
    }

    /**
     * uploadFile
     */
    private async uploadFile(): Promise<any> {
        const client = new this.ftp.Client();
        client.ftp.verbose = true
        try {
            await client.access({
                host: "10.0.0.13",
                port: "21",
                user: "jcmaster",
                password: "12345",
                secure: false
            })
            console.log(await client.list());
            //console.log(this.path+"/uploadFolder/archivo.txt");
            await client.uploadFrom(this.path+"/uploadFolder/archivo.txt", "archivo1.txt");
        }
        catch(err) {
            console.log(err)
        }
        client.close();   
    }

    //https://www.npmjs.com/package/basic-ftp
    //https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/
}