import { cookieFormat } from "./types";

class CookieParser {
  /**
   * @description The cookie_string is being converted into an sbject
   * @param cookie_string the whole cookie as a string
   * @returns an object that is based on the cookieFormat
   */
  public static parse(cookie_string: string | undefined): cookieFormat {
    if (!cookie_string) {
      return {};
    }

    let cookies = cookie_string.split(';');
    let cookie_obj: cookieFormat = {};

    cookies.forEach((el) => {
      let key_val_pair = el.split('=');
      cookie_obj[key_val_pair[0].replace(' ','')] = key_val_pair[1];
    });

    return cookie_obj;
  }

  /**
   * @description The cookie_obj is being converted into a string
   * @param cookie_obj the cookie as an object
   * @returns the cookie as a string
   */
  public static stringify(cookie_obj: cookieFormat): string {
    let cookie_string = '';

    for ( const [key, val] of Object.entries(cookie_obj) ) {
      cookie_string += `${key}=${val}; `;
    }

    return cookie_string.slice(0, -2);
  }
}

export default CookieParser