import { BANKFY_WEEKLY_2008_2023, BKNFTY_1MIN_2021, BKNFTY_DAILY_OHLC_BINARY, BNKFY_DAILY_2005_2023 } from "./constants";

export const mapTheData = (type) => {
    let result =[]
  switch(type) {
  case "BKNFTY_DAILY_OHLC_BINARY":
    result =BKNFTY_DAILY_OHLC_BINARY
    break;
      case "BKNFTY_1MIN_2021":
          result =BKNFTY_1MIN_2021
    // code block
          break;
      case "BNKFY_DAILY_2005_2023":
          result = BNKFY_DAILY_2005_2023
          break;
      case "BANKFY_WEEKLY_2008_2023":
          result=BANKFY_WEEKLY_2008_2023
      default:
          
    // code block
    }
    return result;
}