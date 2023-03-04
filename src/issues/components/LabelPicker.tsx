import {useQuery} from 'react-query'
import { githubApi } from '../../api/githubApi';
import { useLabels } from '../hooks/useLabels';
import { Label } from '../interfaces/labels';





export const LabelPicker = () => {
  const labelsQuery = useLabels();
  if ( labelsQuery.isLoading ) //! por qué isLoading y no isFetching
    return ( <>Cargando GABRIEL</> );

    return (
      <>
        {
          labelsQuery.data?.map( label => (
            <span 
                key={ label.id }
                className={`badge rounded-pill m-1 label-picker`}
                style={{ border: `1px solid #${ label.color }`, color: `#${ label.color }` }}
                 
            >
                { label.name }
            </span>
          ))
        }
      </>
    )
}
