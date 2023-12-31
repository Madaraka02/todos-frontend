import { ServerRequest } from "../server"
import { toast } from 'react-toastify';
import { setTasks } from "../server/stateController/features/tasks/taskSlice";


export const getTasks = async (dispatch) => {
    const url = `tasks/`

    const { data } = await ServerRequest('v1').request({
        url: url,
        method: 'get',
    })
    dispatch(setTasks(data))
    return data
}


export const updateTask = async (dispatch,payload, id) => {

    const url = (`tasks/${id}/`)
    ServerRequest('v1')
        .request({
            method: "put",
            url: url,
            data: JSON.stringify(payload)
        })
        .then((res) => {
            console.log(res);
            getTasks(dispatch)
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

export const deletTask = async (dispatch,id) => {

    const url = (`tasks/${id}/`)
    ServerRequest('v1')
        .request({
            method: "delete",
            url: url,
        })
        .then((res) => {
            console.log(res);
            getTasks(dispatch)
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
            toast.error("Something went wrong")
        })
}



export const addTask = async (dispatch,payload) => {

    const url = (`tasks/`)
    ServerRequest('v1')
        .request({
            method: "post",
            url: url,
            data: JSON.stringify(payload)
        })
        .then((res) => {
            console.log(res);
            getTasks(dispatch)
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