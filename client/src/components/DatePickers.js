import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export default function DatePickers() {
    const [selectedDate, handleDateChange] = useState(new Date("2018-01-01T00:00:00.000Z"));
    return (
        <MuiPickersUtilsProvider> utils={MomentUtils}
            <KeyboardDateTimePicker
                variant="inline"
                ampm={false}
                label="With keyboard"
                value={selectedDate}
                onChange={handleDateChange}
                onError={console.log}
                disablePast
                format="yyyy/MM/dd HH:mm" />
        </MuiPickersUtilsProvider>
    );
}

// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));

// export default function DatePickers() {
//     const classes = useStyles();

//     return (
//         <form className={classes.container} noValidate>
//             <TextField
//                 id="datetime-local"
//                 label="Next appointment"
//                 type="datetime-local"
//                 defaultValue="2017-05-24"
//                 className={classes.textField}
//                 InputLabelProps={{
//                     shrink: true,
//                 }}
//             />
//         </form>
//     );
// }