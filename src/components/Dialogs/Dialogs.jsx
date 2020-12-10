import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
  <div className={s.message}>{props.message}</div>
  );
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: "Nika"},
    {id: 2, name: "Olya"},
    {id: 3, name: "Mariya"},
    {id: 4, name: "Vitaliy"},
    {id: 5, name: "Andrey"}
  ];

  let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
  ];

  let messagesData = [
    {id: 1, message: "HI"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Great"}
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/> 
      </div>
    </div>
  )
}

export default Dialogs;