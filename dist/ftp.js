"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FTP = void 0;
var FTP = /** @class */ (function () {
    function FTP() {
        this.ftp = require("basic-ftp");
        this.path = __dirname.split("\\").slice(0, __dirname.split("\\").length - 1).join("/");
        this.jsonData = require(this.path + "/ftpconfig.json");
    }
    /**
     * downloadFile
     */
    FTP.prototype.downloadFile = function () {
        console.log("Proceso de Descarga iniciado...");
        //console.log(this.jsonData.connection);
        console.log("...Proceso de Descarga Finalizado");
    };
    /**
     * uploadFile
     */
    FTP.prototype.uploadFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, _a, _b, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("Proceso de Subida iniciado...");
                        client = new this.ftp.Client();
                        client.ftp.verbose = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, client.access(this.jsonData.connection)];
                    case 2:
                        _c.sent();
                        _b = (_a = console).log;
                        return [4 /*yield*/, client.list()];
                    case 3:
                        _b.apply(_a, [_c.sent()]);
                        return [4 /*yield*/, client.uploadFrom(this.path + "/uploadFolder/" + this.jsonData.fileToUpload.nameLocal, "" + this.jsonData.fileToUpload.nameRemote + this.getDate() + ".txt")];
                    case 4:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _c.sent();
                        console.log(err_1);
                        return [3 /*break*/, 6];
                    case 6:
                        client.close();
                        console.log("...Proceso de Subida Finalizado");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * getting date in DDMMYYYY format
     */
    FTP.prototype.getDate = function () {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        if (month < 10) {
            return (day + "0" + month + year);
        }
        else {
            return ("" + day + month + year);
        }
    };
    return FTP;
}());
exports.FTP = FTP;
