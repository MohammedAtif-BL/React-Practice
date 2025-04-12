import React,{useState} from 'react'

function FormExample() {
    const [formData , setFormData] = useState({
        text: '',
        age: '',
        email:'',
        password:'',
        checkbox:false,
        radio:'',
        city:''
    })

    const handleChange = (event) => {
        console.log(event.target)
        const {name, value, type, checked} = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox'? checked:value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
       Name: <input type = "text" name='text' value={formData.text} onChange={handleChange}/><br/>
       age: <input type = "number" name='age' value={formData.age} onChange={handleChange}/><br/>
       Email: <input type = "email" name='email' value={formData.email} onChange={handleChange}/><br/>
       Password: <input type = "password" name='password' value={formData.password} onChange={handleChange}/><br/>
       Remember Me: <input type='checkbox' name='checkbox' value={formData.checkbox} onChange={handleChange}/><br/>
       Gender: <label><input type='radio' name='radio' value='Male' onChange={handleChange}/>Male</label>
       <label><input type='radio' name='radio' value='Female' onChange={handleChange}/>Female</label><br/>
       City: <select name='city' value={formData.city} onChange={handleChange}>
        <option value='Pune'>Pune</option>
        <option value='Mumbai'>Mumbai</option>
        <option value='Delhi'>Delhi</option>
        <option value='Banglore'>Banglore</option>
        </select><br/>

        <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default FormExample