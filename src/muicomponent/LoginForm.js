import { Box, Container, Typography, TextField, 
    Button, FormControl, FormLabel, Select, 
    MenuItem, FormGroup, Checkbox, FormControlLabel } from '@mui/material'
import React, {useState} from 'react'

function LoginForm() {
    const [formaData, setFormData] = useState({
        email: '',
        password: '',
        country: 'Select Country',
        skills:[]
    });

    const skillOptions = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

    const handleChange = (event) => {
        const {name, value,type,checked} = event.target;

        if(name === "skills"){
            setFormData((prev) => {
                const newSkills = checked ? [...prev.skills, value] : prev.skills.filter((skill) => skill !== value);
                return {...prev, skills: newSkills};
            })
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }))
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formaData);
    }

  return (
    <Container maxWidth="sm">
        <Box sx={{mt:5, p:3, borderRadius:2, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'}}>
             <Typography variant='h5' gutterBottom>Login</Typography>
             <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" 
                        fullWidth
                        name="email"
                        type="email"
                        value={formaData.email}
                        onChange={handleChange}
                        label="Email" 
                        margin='normal'
                        variant="outlined" />

                    <TextField id="outlined-basic" 
                        fullWidth
                        name="password"
                        type="password"
                        value={formaData.password}
                        onChange={handleChange}
                        label="Password" 
                        margin='normal'
                        variant="outlined" />

                    <FormControl fullWidth margin='normal'>
                        <FormLabel>Country</FormLabel>
                        <Select
                            name="country"
                            value={formaData.country}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select Country</MenuItem>
                            <MenuItem value="india">India</MenuItem>
                            <MenuItem value="usa">USA</MenuItem>
                            <MenuItem value="uk">UK</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl fullWidth margin='normal'>
                        <FormLabel>Skills</FormLabel>
                            <FormGroup row>
                                {skillOptions.map((skill) => (
                                    <FormControlLabel
                                        key={skill}
                                        control={
                                            <Checkbox
                                                checked={formaData.skills.includes(skill)}
                                                onChange={handleChange}
                                                name="skills"
                                                value={skill}
                                            />
                                        }
                                        label={skill}
                                    />
                                ))}
                            </FormGroup>
                    </FormControl>


                    <Button
                        type="submit"
                        variant="contained"
                        color='primary'
                        fullWidth>Submit</Button>   
             </form>
        </Box>
    </Container>
  )
}

export default LoginForm