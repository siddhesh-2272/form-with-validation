import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const onSubmit = (data) => {
    data.hobbies = selectedHobbies;
    console.log(data);
    // Show form submission confirmation
    alert('Form submitted successfully! \nsee console for submitted values');
  };

  const hobbies = [
    'Reading',
    'Sports',
    'Music',
    'Movies',
    'Cooking',
    'Other'
  ];

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
   
  ];
  const handleHobbyChange = (e) => {
    const hobby = e.target.value;
    const isChecked = e.target.checked;

    if (hobby === 'Other') {
      if (isChecked) {
        setSelectedHobbies((prevHobbies) => [...prevHobbies, hobby]);
      } else {
        setSelectedHobbies((prevHobbies) =>
          prevHobbies.filter((selectedHobby) => selectedHobby !== hobby)
        );
      }
    } else {
      if (isChecked) {
        setSelectedHobbies((prevHobbies) => [...prevHobbies, hobby]);
      } else {
        setSelectedHobbies((prevHobbies) =>
          prevHobbies.filter((selectedHobby) => selectedHobby !== hobby && selectedHobby !== 'Other')
        );
      }
    }
  };

  return (
    <div className='App'>
      <div className='container py-5'>
        <div className='card border-0 shadow w-100 mx-auto'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label htmlFor='fullname'>Full Name</label>
              <input
                type='text'
                className='form-control'
                id='fullname'
                autoComplete='off'
                name='fullname'
                placeholder='Enter Your Full Name'
                {...register('fullname', { required: 'This field is required' })}
              />
              {errors.fullname && (
                <small className='error-message'> {errors.fullname.message}</small>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <textarea
                className='form-control'
                id='address'
                {...register('address', { required: 'This field is required' })}
                placeholder='Enter Your Address'
              ></textarea>
              {errors.address && (
                <small className='error-message'> {errors.address.message}</small>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='country'>Choose Your Country</label>
              <select
                className='form-control'
                id='country'
                name='country'
                {...register('country', { required: 'Please select a country' })}
              >
                <option value=''>--- Select Your Country ---</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <small className='error-message'> {errors.country.message}</small>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='gender'>Choose Your Gender</label>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='male'
                  value='male'
                  {...register('gender', { required: 'Please select a gender' })}
                />
                <label className='form-check-label' htmlFor='male'>Male</label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='female'
                  value='female'
                  {...register('gender', { required: 'Please select a gender' })}
                />
                <label className='form-check-label' htmlFor='female'>Female</label>
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  id='other'
                  value='other'
                  {...register('gender', { required: 'Please select a gender' })}
                />
                <label className='form-check-label' htmlFor='other'>Other</label>
              </div>
              {errors.gender && (
                <small className='error-message'> {errors.gender.message}</small>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor='hobbies'>Select Hobbies</label>
              {hobbies.map((hobby) => (
                <div key={hobby} className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id={hobby}
                    value={hobby}
                    onChange={handleHobbyChange}
                  />
                  <label className='form-check-label' htmlFor={hobby}>
                    {hobby}
                  </label>
                </div>
              ))}
              {errors.hobbies && (
                <small className='error-message'> {errors.hobbies.message}</small>
              )}
            </div>
            <button className='btn btn-primary' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
