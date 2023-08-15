import http from "../../services/http";
import { handleErrors } from "../../helpers/error";

export const contactapi = ({ body = {}, onSuccess, onError, onEnd }) => {
    return async (dispatch) => {
      try {
        //showing loader on ui
        const res = await http.post({ 
         url: "v2/ContactUsMessage", body });
        onSuccess(res);
      } catch (error) {
        // console.log("in error=====>", error.response.message);
        if (onError) onError(error);
        else handleErrors(error);      
      }
      finally {
        if (onEnd) onEnd();}
    };
  };