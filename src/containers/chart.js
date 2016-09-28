import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
export const Chart = ({data,color}) => {
    return(
        <div>
            <Sparklines data={data} height={200}>
                <SparklinesLine color={color} />
                <SparklinesSpots />
            </Sparklines>
        </div>
    );
}
export default Chart;