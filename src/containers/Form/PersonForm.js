/* eslint-disable no-use-before-define */
import React, {useEffect} from 'react';
import Dob from "./Dob/Dob";
import FormPropsTextFields from "./InputField/InputField";
import UploadButtons from "./Upload/Upload";
import ButtonSizes from "./Button/Button";
import './PersonForm.css'

const PersonForm = (props) => {


    return (
       <div className="PersonForm">
           <div>
           <UploadButtons onImageSlection={props.onImageSlection} image={props.image}/>

           <Dob changeDate={props.changeDate} value={props.dob} value1={props.isSubmit}/>
           <FormPropsTextFields name="Height (cm)" changedValue={props.changedHeight} value={props.height}  value1={props.isSubmit}/>
           <FormPropsTextFields name="Weight (kg)" changedValue={props.changedWidth} value={props.weight} value1={props.isSubmit}/>
           <ButtonSizes name="Submit"  clicked={props.onSubmitClicked} isSubmit={props.isSubmit}/>
           </div>
       </div>
    );
}

export default PersonForm;