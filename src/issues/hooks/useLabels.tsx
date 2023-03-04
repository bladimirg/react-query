import {useQuery} from 'react-query'
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../api/helpers/sleep';
import { Label } from '../interfaces/labels';
const getLabels= async():Promise<Label[]> =>{
    await sleep(5);
    const {data}= await githubApi.get<Label[]>('/labels');
    console.log(data);
    return data;
  }

export  const useLabels = ()=>{
    const labelsQuery = useQuery
        (
            ['labels'],
            getLabels
    );
    return labelsQuery
}
