import React, { Component } from 'react';
import "./CollegePredictor.css"
import TextField from '@mui/material/TextField';

class CollegePredictor extends Component {
    render() {
        return (
            <div>
                <div className='title' >
                    JEE Main 2022 College Predictor
                </div>
                <div className='wrap' >
                    <div className='form' >
                        <div className='title-1' >
                            Enter JEE Main Paper 1 Exam Details
                        </div>
                        
                        <div>
                            <TextField id="outlined-basic" label="JEE Main Paper 1 Category Rank (Overall Rank if GEN)" variant="outlined" />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CollegePredictor;