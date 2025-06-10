import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];

const langCode = franc(input);
const language = langs.where("3", langCode);
if(langCode === 'und'){
    console.log('sorry i cant find u r language or may be more words'.red)
}else
{console.log(`your language is : ${language.name}`.green);}