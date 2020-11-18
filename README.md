# Automatización de Subida de Archivo vía FTP
## Requisitos:
- Poseer una conexión a un servidor FTP (usuario y que este tenga acceso a creacion, lectura y escritura de la ruta remota), -para fines de la práctica instalé el FileZilla-
- La versión de Node utilizada en la creación del proyecto es: v14.15.1
- La versión de NPM utilizada en la creación del proyecto es: 6.14.8
- La versión de TypeScript utilizada en la creación del proyecto es: Version 3.9.7
```
npm install -g typescript@3.9.7
```
- Tener instalado el modulo @types/node y basic-ftp en el proyecto (el repositorio los incluye), si se ve en la necesidaad de ejecutar los siguiente comandos, solo digitelos en la ruta del proyecto
```
npm install --save @types/node@14.14.7
npm install basic-ftp@4.6.3
```
## Archivo de Configuración
Colocar los parametros de conexion correctos en el archivo ftpconfig.json ubicado en la raíz del proyecto, la propiedad nameLocal que se encuentra dentro de fileToUpload define la nomenclatura del archivo a subir, y nameRemote la nomenclatura del archivo colocado en la ruta remota.
```
{
    "connection": {        
        "host": "192.168.0.4",
        "port": "21",
        "user": "jc-unapec",
        "password": "12345",
        "secure": false
    },
    "fileToUpload": {
        "nameLocal": "archivo.txt"
        "nameRemote": "Nomina"
    }
}
```
En caso de querer modificar el programa escribir *tsc* luego de cualquier cambio a los archivos typescript ubicados en /src
- Iniciar el programa de consola con:
```
node <ProjectPath>/dist/main.js
```
