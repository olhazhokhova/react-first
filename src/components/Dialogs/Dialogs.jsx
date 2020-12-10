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

  let dialogs = [
    {id: 1, name: "Nika"},
    {id: 2, name: "Olya"},
    {id: 3, name: "Mariya"},
    {id: 4, name: "Vitaliy"},
    {id: 5, name: "Andrey"}
  ];

  let messages = [
    {id: 1, message: "HI"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Great"}
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>); 
  let messagesElements = messages.map(m => <Message message={m.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;