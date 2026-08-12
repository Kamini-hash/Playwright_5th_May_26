

import * as xslx from "xlsx";

export class ExcelReader {

    static readExcel(filePath : string, sheetName : string) : any{

    //Read data from excel file
    const wb = xslx.readFile(filePath);

    //select sheet name
    const sh = wb.Sheets[sheetName];

    //convert into the json
    const data = xslx.utils.sheet_to_json(sh);

    return data;
    
}
  
}