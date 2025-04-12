import React,{useState} from 'react'

function FormExmaple1() {
   const [formData , setFormData] = useState({
          text: '',
          age: '',
          email:'',
          password:'',
          skills:[],
          radio:'',
          city:''
      })
  
      const skillOptions = ['React', 'Angular', 'Vue', 'Node'];

      const handleChange = (event) => {
          console.log(event.target)
          const {name, value} = event.target;
          setFormData((prev) =>({
              ...prev,
              [name]: value
          }))
      }
  
      const handleSubmit = (event) => {
          event.preventDefault();
          console.log(formData);
      }

      const handleCheckBoxChange = (event) => {
          const {value, checked} = event.target;
          setFormData((prev) => {
            if(checked){
                return {
                    ...prev,
                    skills:[...prev.skills, value]
                };
            }else {
                return {
                    ...prev,
                    skills:prev.skills.filter(skill => skill !== value)
                };
            }
          })
      }
    return (
      <div>
          <form onSubmit={handleSubmit}>
         Name: <input type = "text" name='text' value={formData.text} onChange={handleChange}/><br/>
         age: <input type = "number" name='age' value={formData.age} onChange={handleChange}/><br/>
         Email: <input type = "email" name='email' value={formData.email} onChange={handleChange}/><br/>
         Password: <input type = "password" name='password' value={formData.password} onChange={handleChange}/><br/>
         Gender: <label><input type='radio' name='radio' value='Male' onChange={handleChange}/>Male</label>
         <label><input type='radio' name='radio' value='Female' onChange={handleChange}/>Female</label><br/>
         City: <select name='city' value={formData.city} onChange={handleChange}>
          <option value='Pune'>Pune</option>
          <option value='Mumbai'>Mumbai</option>
          <option value='Delhi'>Delhi</option>
          <option value='Banglore'>Banglore</option>
          </select><br/>

          <label>Skills: </label>
          {skillOptions.map(skill => (
              <label key={skill}>
                  <input type="checkbox" name='skills' value={skill} onChange={handleCheckBoxChange}/>{skill}
              </label>
          ))}
  
          <button type="submit">Submit</button>
          </form>
            <pre>{JSON.stringify(formData,null,5)}</pre>
      </div>
    )
  }

export default FormExmaple1