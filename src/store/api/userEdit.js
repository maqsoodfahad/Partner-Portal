import http from "../../services/http";
import { handleErrors } from "../../helpers/error";
import { setEditUser } from "../auth/eidtProfile";
import { useDispatch } from "react-redux";
import storage from "../../services/storage";
import get from '../../services/storage'
export const getUser = ({ headers = {}, onSuccess, onError, onEnd }) => {
    return async (dispatch) => {
        try {
            //showing loader on ui
            const res = await http.get({
                url: "v1/getuser", headers: { "x-auth-token": storage.get("xAuthToken") }
            });
            onSuccess?.(res);
            dispatch(setEditUser(res.data.data))
        } catch (error) {
            // console.log("in error=====>", error.response.message);
            if (onError) onError(error);
            
            else handleErrors(error);
        }
        finally {
            if (onEnd) onEnd();
        }
    };
};
export const UpdateUser = ({ body = {}, onSuccess, onError, onEnd }) => {
    return async (dispatch) => {
        try {
            // delete body.userAvatar
            const formData = new FormData();
            for (const key in body) {
                if (Object.hasOwnProperty.call(body, key)) {
                    const value = body[key];
                    formData.append(key, value)
                }
            }
            //showing loader on ui
            const res = await http.put({
                url: "v1/update_user_info",
                body:formData,
                headers: {
                    "x-auth-token": storage.get("xAuthToken"),
                    "Content-Type": "multipart/form-data"
                }
            });
            onSuccess?.(res);
            console.log({ res })
            dispatch(setEditUser(res.data.data))
        } catch (error) {
            // console.log("in error=====>", error.response.message);
            if (onError) onError(error);
            else handleErrors(error);
        }
        finally {
            if (onEnd) onEnd();
        }
    };
};










