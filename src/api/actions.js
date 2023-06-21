import { ServerRequest } from "../server"
import { toast } from 'react-toastify';


export const getTasks = async () => {
    const url = `tasks/`

    const { data } = await ServerRequest('v1').request({
        url: url,
        method: 'get',
    })

    return data
}


export const updateTask = async (payload, id) => {

    const url = (`tasks/${id}/`)
    ServerRequest('v1')
        .request({
            method: "put",
            url: url,
            data: JSON.stringify(payload)
        })
        .then((res) => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                console.log('Submitted 200,201')
                    toast.info(`${res?.data?.success}`)
            } else {
                // console.log('Something occured')
                toast.error("Something went wrong")
            }
        })
        .catch(error => {
            // console.log(error);
            toast.error(`${error?.response?.data?.fail}`)
        })
}
