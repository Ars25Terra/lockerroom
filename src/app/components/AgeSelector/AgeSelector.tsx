import * as React from 'react';
import Slider from '@mui/material/Slider';

import SearchInput from "../SearchInput/SearchInput";

const AgeSelector = (): JSX.Element => {
    return <div className={'age-selector'}>
        <SearchInput additionalClassName={'age-selector text-input'}/>
            <Slider
                sx={{
                    width: '10.5em',
                    color: 'silver',
                    marginLeft: '0.8em',
                    marginRight: '0.8em'
                }}
                value={[1,20]}
                size={'small'}
                onChange={() => {}}
                valueLabelDisplay="auto"
            />
        <SearchInput additionalClassName={'age-selector text-input'}/>
    </div>
}

export default AgeSelector