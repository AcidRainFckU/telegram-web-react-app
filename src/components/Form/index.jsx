import React, { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Form.css'


const Form = (props) => {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [subject, setSubject] = useState('phusical')
  const {tg} = useTelegram()

  useEffect(() => {
  
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
    // eslint-disable-next-line
  }, [])


  useEffect(() => {
  
    if(!city || !country){
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
    // eslint-disable-next-line
  }, [country, city])
  

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }
  const onChangeCity = (e) => {
    setCity(e.target.value)
  }
  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

 
  return (
    <div className='form'>
      <h3>Введите ваши данные</h3>
      <input className='input' type="text" value={country} onChange={onChangeCountry} placeholder='Страна'/>
      <input className='input' type="text" value={city} onChange={onChangeCity} placeholder='Улица'/>

      <select value={subject} onChange={onChangeSubject} className='select'>
        <option value={'physical'}>Физ. лицо</option>
        <option value={'legal'}>Юр. лицо</option>
      </select>
    </div>
  )
}

export default Form