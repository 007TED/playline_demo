import React, {useState} from 'react';
import './form.css';
import PlayersData from '../../assets/json/players.json';
import {ButtonGroup , Button } from '@material-ui/core';
import { SignUp , PersonalInfo, ChoosedPlayers, Status } from '../index';

const Form = () => {
    const [page, setPage ] = useState(0);
    const [formData, setFormData ] = useState({
        email: "",
        password:"",
        firstName:"",
        lastName:"",
        }
    );
    const [selectedPlayers, setSelectedPlayers] = useState(PlayersData.players);

    const FormTitles = ["Sign Up", "Personal Info" , "Choosed Players","" ];


    const PageDisplay = () => {
        if (page === 0){
            return <SignUp formData={formData} setFormData={setFormData}/>;
        }else if (page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        }else if (page === 2){
            return <ChoosedPlayers formData={formData} setFormData={setFormData} selectedPlayer={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>;
        }else {
            return  <Status
            current_status="YOUR PLAYLINE IS SET!"
            message="COMEBACK @7:30PM TO TRACK IT LIVE!"
            protip="ProTip:You can manage your Playline until they go live in the Upcoming area"
            formData={formData}
            setFormData={setFormData}
            selectedPlayer={selectedPlayers}

                />
        }
    }

    return(
        <div className='form'>
            <div className="progressbar">
                <div style={{ width: page === 0 ? "25%"  : page === 1 ? "50%" : page === 2 ? "75%" : "100%",
                    background: page === 0 ? "red"  : page === 1 ? "orange" : page === 2 ? "yellowgreen"  : "green" }}>
                </div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">
                    {PageDisplay()}
                </div>
                <br />
                <div className="form-footer">
                    <ButtonGroup disableElevation variant="contained" className="button_group_pages">
                    <Button
                        disabled={page === 0 }
                        onClick={() => {setPage((currPage) => currPage - 1)}}>
                        Previous
                    </Button>
                    <Button
                        disabled={page === FormTitles.length - 1 }
                        onClick={() => {
                            if(page ===  FormTitles.length - 2){
                                console.log(formData); console.log(selectedPlayers);
                                setPage((currPage) => currPage + 1)
                            }else {
                                setPage((currPage) => currPage + 1)
                            }
                            }
                        }
                    >
                        {page === FormTitles.length - 4 ? "Next" : page === FormTitles.length - 3 ? "Next" : page ===  FormTitles.length - 2 ? "Submit" : page === FormTitles.length - 1 ? "Submitted" : "Next"}
                    </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default Form;