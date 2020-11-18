export class FTP {

    private ftp: any; 
    private path: string;
    private jsonData: any;

    constructor() {
        this.ftp = require("basic-ftp");
        this.path = __dirname.split("\\").slice(0, __dirname.split("\\").length-1).join("/");
        this.jsonData = require(`${this.path}/ftpconfig.json`);
    }

    /**
     * downloadFile
     */
    public downloadFile(): any {
        console.log("Proceso de Descarga iniciado...");
        //console.log(this.jsonData.connection);
        console.log("...Proceso de Descarga Finalizado");
    }
    
    /**
     * uploadFile
     */
    public async uploadFile(): Promise<any> {
        console.log("Proceso de Subida iniciado...");
        const client = new this.ftp.Client();
        client.ftp.verbose = true
        try {
            await client.access(
                this.jsonData.connection
            );
            console.log(await client.list());
            await client.uploadFrom(`${this.path}/uploadFolder/${this.jsonData.fileToUpload.nameLocal}`, `${this.jsonData.fileToUpload.nameRemote}${this.getDate()}.txt`);
        }
        catch(err) {
            console.log(err)
        }
        client.close();   
        console.log("...Proceso de Subida Finalizado");
    }

    /**
     * getting date in DDMMYYYY format
     */
    public getDate(): string {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if(month < 10){
            return(`${day}0${month}${year}`)
        }else{
            return(`${day}${month}${year}`)
        }
    }
}