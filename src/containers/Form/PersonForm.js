/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import Dob from "./Dob/Dob";
import FormPropsTextFields from "./InputField/InputField";
import ImageAvatars from "./Avatar/Avatar";
import UploadButtons from "./Upload/Upload";
import ButtonSizes from "./Button/Button";
import './PersonForm.css'

const PersonForm = (props) => {

    return (
       <div className="PersonForm">
           <div>
           {/*<ImageAvatars/>*/}
           <UploadButtons onImageSlection={props.onImageSlection} image={props.image}/>
           {/*<PlayerName/>*/}
           <Dob changeDate={props.changeDate}/>
           <FormPropsTextFields name="Height (cm)" changedValue={props.changedHeight} />
           <FormPropsTextFields name="Weight (kg)" changedValue={props.changedWidth} />
           <ButtonSizes name="Submit"  clicked={props.onSubmitClicked}/>
           </div>
       </div>

    );
}

export default PersonForm;