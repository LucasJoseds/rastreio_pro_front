import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { Pacote } from '../interface/Pacote'

const API_URL = 'http://localhost:8080';

const postData = async (data: Pacote): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/package/create', data);
    return response;
}

export function pacoteMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['pacote-data'])
        }
    })

    return mutate;
}