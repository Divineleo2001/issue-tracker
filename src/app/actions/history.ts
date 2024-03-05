import { CodeSandboxLogoIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { cookies, headers } from "next/headers";

export const HistoryData= async (values:)=>
{
    const historyUrl=process.env.BACKEND_URL+"api/histories";
    const authToken=cookies().get("accessToken")?.value;
    const bearerToken=`Bearer ${authToken}`;

    try{
        const response=await axios.post(
            historyUrl,
            {

            },
            {
                headers:{
                    Authorization:bearerToken,
                }
            }
        );
        if(response.status===200){
            console.log("history added");
        }
    }catch(error){
        console.error(error);
    }
}