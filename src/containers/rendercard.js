import React from 'react';
import _ from 'lodash';
import Chart from './chart';
const RenderCard = (props) => {
    //<img className="card-img-top thub" src="..." alt="Card image cap" />
    const maxValue = props.data.reduce((zero,dat) => {
        const d = _.round(dat);
        if(d > zero) {
            zero =d;
        }
        return zero;
    },0);
    const minValue = props.data.reduce((zero,dat) => {
        const d = _.round(dat);
        if(d < zero) {
            zero =d;
        }
        return zero;
    },_.round(props.data[0]));
    return (
            <div className="card">
            <div className="card-img-top"><Chart data={props.data} color={props.color}/></div>
            <div className="card-block">
            <p className="card-text">
                    <p>The maximum {props.name} is {maxValue}{props.unit}</p>
                    <p>The minimum {props.name} is {minValue}{props.unit}</p>
            </p>
            </div>
            </div>
        );
}
export default RenderCard;